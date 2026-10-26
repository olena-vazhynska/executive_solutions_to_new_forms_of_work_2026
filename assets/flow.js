/* ============================================================================
   THE FIVE-COLUMN FLOW + UNDERLYING EVIDENCE
   ----------------------------------------------------------------------------
   Renders window.FLOW as a Sankey-style diagram across the five blocks of the
   Executive Strategy Canvas, with one ribbon per individual presentation, and
   an evidence matrix underneath drawn from RESOURCES, CASELAW, BRAIN.solutions,
   SURVEY and COURSE.programme.

   Selecting a node traces its routes, filters the solutions it produced and
   lights up only the evidence that supports it.
   ========================================================================== */
(function () {
  "use strict";

  var MOUNT = document.getElementById("flow-app");
  if (!MOUNT || !window.FLOW) return;
  var F = window.FLOW;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var selected = null;      // node id
  var showAll = false;      // Leading themes vs Explore all
  var LEADING = 5;          // nodes per column in "leading" mode

  /* ---------- Derivations -------------------------------------------------- */
  function nodeById(id) {
    for (var i = 0; i < F.nodes.length; i++) if (F.nodes[i].id === id) return F.nodes[i];
    return null;
  }
  function countOf(id) {
    var n = 0;
    F.paths.forEach(function (p) { if (p.nodes.indexOf(id) >= 0) n++; });
    return n;
  }
  function colNodes(colId) {
    var list = F.nodes.filter(function (n) { return n.col === colId; })
      .map(function (n) { return { node: n, n: countOf(n.id) }; })
      .sort(function (a, b) { return b.n - a.n; });
    return showAll ? list : list.slice(0, LEADING);
  }
  function visibleIds() {
    var s = {};
    F.columns.forEach(function (c) { colNodes(c.id).forEach(function (x) { s[x.node.id] = true; }); });
    return s;
  }
  /* Paths that pass through the selection (all paths when nothing is selected) */
  function livePaths() {
    if (!selected) return F.paths;
    return F.paths.filter(function (p) { return p.nodes.indexOf(selected) >= 0; });
  }
  /* Links between adjacent columns, aggregated */
  function links() {
    var vis = visibleIds(), map = {};
    F.paths.forEach(function (p) {
      for (var i = 0; i < p.nodes.length - 1; i++) {
        var a = p.nodes[i], b = p.nodes[i + 1];
        if (!vis[a] || !vis[b]) continue;
        var k = a + ">" + b;
        if (!map[k]) map[k] = { from: a, to: b, n: 0, live: 0 };
        map[k].n++;
        if (!selected || p.nodes.indexOf(selected) >= 0) map[k].live++;
      }
    });
    return Object.keys(map).map(function (k) { return map[k]; });
  }
  function isGolden(a, b) {
    var g = F.golden;
    for (var i = 0; i < g.length - 1; i++) if (g[i] === a && g[i + 1] === b) return true;
    return false;
  }

  /* ---------- Evidence pool ------------------------------------------------ */
  /* Families: each item carries the node ids it supports, so the matrix can
     filter without duplicating the underlying collections.                   */
  function buildEvidence() {
    var items = [];
    var R = window.RESOURCES || [], L = window.CASELAW || { decisions: [] },
        B = window.BRAIN || { solutions: [] }, S = window.SURVEY || { blocks: [] },
        C = window.COURSE || { programme: [] };

    // group id -> node ids that cite it
    var byGroup = {}, byTheme = {}, byBlock = {};
    F.nodes.forEach(function (nd) {
      var e = nd.evidence || {};
      (e.groups || []).forEach(function (g) { (byGroup[g] = byGroup[g] || []).push(nd.id); });
      (e.themes || []).forEach(function (t) { (byTheme[t] = byTheme[t] || []).push(nd.id); });
      (e.blocks || []).forEach(function (b) { (byBlock[b] = byBlock[b] || []).push(nd.id); });
    });

    R.forEach(function (g) {
      g.items.forEach(function (it) {
        items.push({ fam: "res", label: it[0], sub: g.title, url: it[2], tag: it[3],
                     nodes: byGroup[g.id] || [] });
      });
    });
    (L.decisions || []).forEach(function (d) {
      items.push({ fam: "law", label: d.title, sub: d.country + " · " + d.court, url: d.url,
                   tag: d.cite, nodes: byTheme[d.theme] || [] });
    });
    (B.solutions || []).filter(function (s) { return !s.pending; }).forEach(function (s) {
      var nds = [];
      F.paths.forEach(function (p) { if (p.sol === s.country) nds = nds.concat(p.nodes); });
      items.push({ fam: "sol", label: s.title, sub: s.country, url: null,
                   tag: (s.institutions || []).join(" · "), nodes: nds });
    });
    (S.blocks || []).forEach(function (b) {
      items.push({ fam: "survey", label: b.title, sub: "Pre-course survey", url: S.url,
                   tag: b.responses + " responses", nodes: [] });
    });
    (C.programme || []).forEach(function (d) {
      (d.sessions || []).forEach(function (s) {
        if (s.kind === "social") return;
        items.push({ fam: "session", label: s.title, sub: d.weekday + " · " + d.theme, url: null,
                     tag: s.time, nodes: [] });
      });
    });
    return items;
  }
  var EVIDENCE = null;
  var FAMS = [
    { id: "law",     label: "Court decisions" },
    { id: "res",     label: "Resources" },
    { id: "sol",     label: "Executive solutions" },
    { id: "survey",  label: "Pre-course survey" },
    { id: "session", label: "Course sessions" }
  ];

  /* ---------- Render ------------------------------------------------------- */
  /* The brain panel is hidden at first paint, so the wrap measures 0 until the
     tab is shown. Observe it and redraw whenever it gains or changes size. */
  var RO = window.ResizeObserver ? new ResizeObserver(function () { drawRibbons(); }) : null;

  function render() {
    EVIDENCE = EVIDENCE || buildEvidence();
    MOUNT.innerHTML = headerBlock() + diagramBlock() + solutionsBlock() + evidenceBlock();
    if (RO) { RO.disconnect(); var w = document.getElementById("fl-wrap"); if (w) RO.observe(w); }
    scheduleDraw();
  }

  /* Layout is not settled on the frame after an innerHTML swap, and the panel
     may still be hidden, so keep trying until a draw actually lands. `token`
     cancels the retries of a superseded render. */
  var drawToken = 0;
  function scheduleDraw() {
    var mine = ++drawToken, tries = 0;
    (function attempt() {
      if (mine !== drawToken) return;            // a newer render took over
      var drawn = drawRibbons();
      if (drawn || ++tries > 12) return;
      setTimeout(attempt, 60);
    })();
  }

  function headerBlock() {
    var sel = selected ? nodeById(selected) : null;
    return '<section class="fl-sec">' +
      '<div class="section-heading"><p class="eyebrow">05 · Collective brain</p>' +
      '<h2 class="section-title flush">From a coverage gap to a reform</h2>' +
      '<p class="muted">What practitioners from ' + countries() + ' countries designed across the five blocks of the ' +
      'Executive Strategy Canvas. Each ribbon is one of the ' + F.total + ' individual presentations.</p></div>' +
      '<div class="fl-toggle">' +
        '<button class="fl-tog' + (showAll ? "" : " on") + '" data-mode="lead">Leading themes</button>' +
        '<button class="fl-tog' + (showAll ? " on" : "") + '" data-mode="all">Explore all</button>' +
        (selected ? '<button class="fl-clear" data-clear="1">Clear selection ✕</button>' : "") +
      "</div>" +
      '<p class="fl-hint">' + (showAll
        ? "Every node each presentation chose, in all five blocks."
        : "Showing the leading nodes in each block, sized by how many presentations chose them.") + "</p>" +
      '<div class="fl-note">' + (sel
        ? "<b>" + esc(sel.label) + "</b> — " + esc(sel.note) + " Chosen by <b>" + countOf(sel.id) +
          " of " + F.total + "</b> presentations. The diagram below now shows only their routes."
        : F.headline) + "</div>" +
      "</section>";
  }
  function countries() {
    var s = {};
    F.paths.forEach(function (p) { s[p.country] = true; });
    return Object.keys(s).length;
  }

  function diagramBlock() {
    var cols = F.columns.map(function (c) {
      var list = colNodes(c.id);
      var top = list.length ? list[0] : null;
      return '<div class="fl-col" data-col="' + esc(c.id) + '">' +
        '<div class="fl-colhead c-' + esc(c.color) + '">' +
          '<span class="fl-coln">0' + c.n + "</span>" +
          "<h3>" + esc(c.label) + "</h3>" +
          "<p>" + esc(c.kicker) + "</p>" +
          (top ? '<span class="fl-badge c-' + esc(c.color) + '">Most chosen</span>' : "") +
        "</div>" +
        list.map(function (x) {
          var live = !selected || livePaths().some(function (p) { return p.nodes.indexOf(x.node.id) >= 0; });
          var isSel = selected === x.node.id;
          var gold = F.golden.indexOf(x.node.id) >= 0;
          return '<button class="fl-node c-' + esc(c.color) +
              (isSel ? " sel" : "") + (live ? "" : " dim") + (gold ? " gold" : "") +
              '" data-node="' + esc(x.node.id) + '" id="fn-' + esc(x.node.id) + '" aria-pressed="' + isSel + '">' +
            '<span class="fl-node-l">' + esc(x.node.label) + "</span>" +
            '<span class="fl-node-n">' + x.n + "</span>" +
            "</button>";
        }).join("") +
        "</div>";
    }).join("");

    return '<div class="fl-legend">' + F.columns.map(function (c) {
        return '<span class="fl-leg c-' + esc(c.color) + '">' + esc(c.label) + "</span>";
      }).join("") +
      '<span class="fl-leg gold">Most-travelled route</span></div>' +
      '<div class="fl-wrap">' +
        '<div class="fl-inner" id="fl-wrap">' +
          '<svg class="fl-svg" id="fl-svg" aria-hidden="true"></svg>' +
          '<div class="fl-cols">' + cols + "</div>" +
        "</div>" +
      "</div>";
  }

  /* Bezier ribbons between measured node positions */
  /* Returns true when ribbons were actually drawn, false if it is too early. */
  function drawRibbons() {
    var wrap = document.getElementById("fl-wrap"), svg = document.getElementById("fl-svg");
    if (!wrap || !svg) return false;
    var wb = wrap.getBoundingClientRect();
    if (!wb.width || !wb.height) return false;   // panel still hidden
    svg.setAttribute("viewBox", "0 0 " + wb.width + " " + wb.height);
    svg.setAttribute("width", wb.width);
    svg.setAttribute("height", wb.height);

    var out = [];
    links().forEach(function (lk) {
      var a = document.getElementById("fn-" + lk.from), b = document.getElementById("fn-" + lk.to);
      if (!a || !b) return;
      var ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      var x1 = ra.right - wb.left, y1 = ra.top - wb.top + ra.height / 2;
      var x2 = rb.left - wb.left,  y2 = rb.top - wb.top + rb.height / 2;
      var mx = (x1 + x2) / 2;
      var w = Math.max(1.5, Math.min(14, lk.n * 2.2));
      var gold = isGolden(lk.from, lk.to);
      var on = !selected || lk.live > 0;
      out.push('<path d="M' + x1 + "," + y1 + " C" + mx + "," + y1 + " " + mx + "," + y2 + " " + x2 + "," + y2 +
        '" class="fl-rib' + (gold ? " gold" : "") + (on ? "" : " dim") + '" stroke-width="' + w + '"/>');
    });
    if (!out.length) return false;   // nodes not laid out yet — try again
    svg.innerHTML = out.join("");
    return true;
  }

  /* ---------- Solutions produced by the selection -------------------------- */
  function solutionsBlock() {
    var ps = livePaths();
    var byCountry = {};
    ps.forEach(function (p) {
      var k = p.country + "|" + p.inst;
      byCountry[k] = (byCountry[k] || 0) + 1;
    });
    var keys = Object.keys(byCountry).sort();
    var sel = selected ? nodeById(selected) : null;
    return '<section class="fl-sec">' +
      '<div class="section-heading"><h2 class="section-title">' +
        (sel ? "Who designed it this way" : "Every route on the wall") + "</h2>" +
        '<p class="muted">' + ps.length + " of " + F.total + " presentations" +
        (sel ? " chose " + esc(sel.label) + "." : ", by country and institution.") +
        " Countries and institutions only — no participant is named.</p></div>" +
      '<div class="fl-chips">' + keys.map(function (k) {
        var bits = k.split("|");
        return '<span class="fl-chip"><b>' + esc(bits[0]) + "</b>" + esc(bits[1]) +
          (byCountry[k] > 1 ? '<i>×' + byCountry[k] + "</i>" : "") + "</span>";
      }).join("") + "</div>" +
      "</section>";
  }

  /* ---------- Underlying evidence ------------------------------------------ */
  function evidenceBlock() {
    var counts = {};
    FAMS.forEach(function (f) {
      counts[f.id] = EVIDENCE.filter(function (i) { return i.fam === f.id; }).length;
    });
    var lit = EVIDENCE.filter(function (i) { return !selected || i.nodes.indexOf(selected) >= 0; }).length;
    var sel = selected ? nodeById(selected) : null;

    return '<section class="fl-sec">' +
      '<div class="section-heading"><h2 class="section-title">Underlying evidence</h2>' +
      '<p class="muted">' + EVIDENCE.length + " items — " +
        FAMS.map(function (f) { return counts[f.id] + " " + f.label.toLowerCase(); }).join(", ") +
      ". Each dot is one item; those that carry a link open it. " +
      (sel ? "<b>" + lit + "</b> support " + esc(sel.label) + "."
           : "Select a node above to see which items support it.") + "</p></div>" +
      '<div class="ev-legend">' + FAMS.map(function (f) {
        return '<span class="ev-leg f-' + f.id + '">' + esc(f.label) + " <b>" + counts[f.id] + "</b></span>";
      }).join("") + "</div>" +
      '<div class="ev-matrix">' + EVIDENCE.map(function (i, k) {
        var on = !selected || i.nodes.indexOf(selected) >= 0;
        var t = i.label + (i.sub ? " — " + i.sub : "");
        return (i.url ? '<a href="' + esc(i.url) + '" target="_blank" rel="noopener"' : "<span") +
          ' class="ev-dot f-' + i.fam + (on ? "" : " off") + '" title="' + esc(t) + '">' +
          (i.url ? "</a>" : "</span>");
      }).join("") + "</div>" +
      '<p class="ev-foot">Court decisions: the 17 platform-work cases compiled for this dashboard plus the 71 ' +
      'harvested from the four ITCILO Compendium subject feeds. Resources: every item in the eight library ' +
      'categories. Executive solutions: one per country entry on the wall, attributed to a country and an ' +
      'institution and never to a person. Pre-course survey: one per question block, 29 of 34 registered ' +
      'participants answering. Course sessions: the teaching sessions of the residential week, socials ' +
      'excluded. A dot lights up when the node selected above cites its part of the library.</p>' +
      "</section>";
  }

  /* ---------- Events -------------------------------------------------------- */
  MOUNT.addEventListener("click", function (e) {
    var n = e.target.closest("[data-node]");
    if (n) { selected = selected === n.dataset.node ? null : n.dataset.node; render(); return; }
    var m = e.target.closest("[data-mode]");
    if (m) { showAll = m.dataset.mode === "all"; render(); return; }
    if (e.target.closest("[data-clear]")) { selected = null; render(); }
  });
  /* Called from the Learning journey tab: focus a flow node (or, if a cluster
     id is passed, the first node that cites it) and scroll it into view. */
  window.brainFocus = function (id) {
    if (!id) return;
    var hit = nodeById(id);
    if (!hit) {
      hit = F.nodes.filter(function (n) {
        return (n.evidence && (n.evidence.groups || []).indexOf(id) >= 0) || n.col === id;
      })[0];
    }
    if (!hit) return;
    if (!visibleIds()[hit.id]) showAll = true;   // reveal it if it is below the fold
    selected = hit.id;
    render();
    setTimeout(function () {
      var el = document.getElementById("fn-" + hit.id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
  };

  window.addEventListener("resize", scheduleDraw);
  document.addEventListener("tabshown", scheduleDraw);

  render();
})();
