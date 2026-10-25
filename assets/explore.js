/* ============================================================================
   EXPLORE RESOURCES — faceted explorer for the Resources tab
   ----------------------------------------------------------------------------
   Same layout as the Explore Evidence panel of the Impact Assessment 2026
   dashboard: a left sidebar carrying the search box and checkbox facets, and a
   main column with a result count, a sort control and one card per item.

   The stream is unified — the eight RESOURCES categories and the CASELAW
   decisions are the same kind of row here, which is what lets "Case law" work
   as a Category facet while the decisions keep their own themes and
   jurisdictions as facets of their own.
   ========================================================================== */
(function () {
  "use strict";

  var SIDE = document.getElementById("ex-facets");
  if (!SIDE) return;
  var R = window.RESOURCES || [], L = window.CASELAW || null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s) { return document.querySelector(s); }

  /* ---------- Build the unified row set ------------------------------------ */
  var ROWS = [];
  R.forEach(function (g) {
    g.items.forEach(function (it) {
      ROWS.push({
        kind: "resource",
        title: it[0], desc: it[1], url: it[2], type: it[3] || "Resource",
        cat: g.title, catId: g.id, weeks: g.weeks,
        tags: [g.title, it[3] || "Resource"],
        text: (it[0] + " " + it[1] + " " + g.title + " " + (it[3] || "")).toLowerCase()
      });
    });
  });
  if (L) {
    var themeLabel = {};
    (L.themes || []).forEach(function (t) { themeLabel[t.id] = t.label; });
    (L.decisions || []).forEach(function (d) {
      ROWS.push({
        kind: "caselaw",
        title: d.title, desc: d.holding, design: d.design, url: d.url,
        type: "Case law", cat: "Case law", catId: "caselaw",
        country: d.country, region: d.flagRegion, court: d.court, date: d.date,
        cite: d.cite, theme: d.theme, themeLabel: themeLabel[d.theme] || d.theme,
        tags: ["Case law", themeLabel[d.theme] || d.theme, d.country],
        text: (d.title + " " + d.holding + " " + d.design + " " + d.country + " " +
               d.court + " " + d.cite + " " + (themeLabel[d.theme] || "")).toLowerCase()
      });
    });
  }

  /* ---------- Facets -------------------------------------------------------- */
  function tally(fn) {
    var m = {};
    ROWS.forEach(function (r) {
      var v = fn(r);
      (Array.isArray(v) ? v : [v]).forEach(function (x) { if (x) m[x] = (m[x] || 0) + 1; });
    });
    return Object.keys(m).sort(function (a, b) { return m[b] - m[a] || a.localeCompare(b); })
      .map(function (k) { return { value: k, n: m[k] }; });
  }

  var FACETS = [
    { id: "cat",     label: "Category",     get: function (r) { return r.cat; } },
    { id: "type",    label: "Type",         get: function (r) { return r.type; } },
    { id: "theme",   label: "Case law theme", get: function (r) { return r.themeLabel; } },
    { id: "country", label: "Jurisdiction", get: function (r) { return r.country; } }
  ];
  FACETS.forEach(function (f) { f.values = tally(f.get); });

  var active = {};                 // facet id -> { value: true }
  FACETS.forEach(function (f) { active[f.id] = {}; });
  var sort = "relevant";

  function renderFacets() {
    SIDE.innerHTML = FACETS.filter(function (f) { return f.values.length > 1; }).map(function (f) {
      return '<div class="ex-facet"><h4>' + esc(f.label) + "</h4>" +
        '<div class="ex-opts">' + f.values.map(function (v) {
          var on = !!active[f.id][v.value];
          return '<label class="ex-opt"><input type="checkbox" data-facet="' + esc(f.id) +
            '" value="' + esc(v.value) + '"' + (on ? " checked" : "") + ">" +
            "<span>" + esc(v.value) + "</span><i>" + v.n + "</i></label>";
        }).join("") + "</div></div>";
    }).join("");
  }

  /* ---------- Matching ------------------------------------------------------ */
  function matches(r, q) {
    if (q && r.text.indexOf(q) < 0) return false;
    for (var i = 0; i < FACETS.length; i++) {
      var f = FACETS[i], sel = Object.keys(active[f.id]);
      if (!sel.length) continue;
      var v = f.get(r);
      if (sel.indexOf(v) < 0) return false;
    }
    return true;
  }
  function score(r, q) {
    if (!q) return 0;
    var t = r.title.toLowerCase();
    if (t.indexOf(q) === 0) return 3;
    if (t.indexOf(q) >= 0) return 2;
    return 1;
  }

  /* ---------- Cards --------------------------------------------------------- */
  function card(r) {
    var badges = '<span class="ex-badge k-' + r.kind + '">' + esc(r.type) + "</span>" +
      (r.kind === "caselaw"
        ? '<span class="ex-badge soft">' + esc(r.themeLabel) + "</span>" +
          '<span class="ex-year">' + esc(r.date) + "</span>"
        : '<span class="ex-badge soft">' + esc(r.cat) + "</span>" +
          (r.weeks ? '<span class="ex-year">' + esc(r.weeks) + "</span>" : ""));

    var sub = r.kind === "caselaw"
      ? '<p class="ex-auth">' + esc(r.country) + " · " + esc(r.court) + "</p>" +
        '<p class="ex-cite">' + esc(r.cite) + "</p>"
      : "";

    var body = '<p class="ex-desc">' + esc(r.desc) + "</p>" +
      (r.design ? '<p class="ex-desc ex-design"><span class="eyebrow">What it changes for scheme design</span>' +
        esc(r.design) + "</p>" : "");

    return '<article class="ex-card" data-row>' +
      '<div class="ex-badges">' + badges + "</div>" +
      '<h4><a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + "</a></h4>" +
      sub + body +
      '<div class="ex-tags">' + r.tags.filter(Boolean).map(function (t) {
        return '<span class="ex-tag">' + esc(t) + "</span>";
      }).join("") + "</div>" +
      "</article>";
  }

  /* ---------- Render -------------------------------------------------------- */
  function run() {
    var q = ($("#r-search").value || "").trim().toLowerCase();
    var list = ROWS.filter(function (r) { return matches(r, q); });

    if (sort === "az") list.sort(function (a, b) { return a.title.localeCompare(b.title); });
    else if (sort === "cat") list.sort(function (a, b) { return a.cat.localeCompare(b.cat) || a.title.localeCompare(b.title); });
    else if (sort === "type") list.sort(function (a, b) { return a.type.localeCompare(b.type) || a.title.localeCompare(b.title); });
    else list.sort(function (a, b) { return score(b, q) - score(a, q); });

    $("#resources").innerHTML = list.length
      ? list.map(card).join("")
      : '<p class="muted ex-empty">Nothing matches that combination. Clear a filter and try again.</p>';

    var nRes = list.filter(function (r) { return r.kind === "resource"; }).length;
    var nLaw = list.length - nRes;
    function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }
    $("#r-count").textContent = plural(list.length, "result", "results") +
      (nLaw && nRes ? " · " + plural(nRes, "resource", "resources") + ", " + plural(nLaw, "decision", "decisions")
                    : "");
  }

  /* ---------- Events --------------------------------------------------------- */
  SIDE.addEventListener("change", function (e) {
    var cb = e.target.closest("[data-facet]"); if (!cb) return;
    var f = cb.dataset.facet;
    if (cb.checked) active[f][cb.value] = true; else delete active[f][cb.value];
    run();
  });
  $("#r-search").addEventListener("input", run);
  $("#ex-sort").addEventListener("change", function (e) { sort = e.target.value; run(); });
  $("#ex-reset").addEventListener("click", function () {
    FACETS.forEach(function (f) { active[f.id] = {}; });
    $("#r-search").value = "";
    renderFacets(); run();
  });

  /* Deep links from other tabs: ?cat=… or a category chip */
  window.exploreFilter = function (catTitle) {
    FACETS.forEach(function (f) { active[f.id] = {}; });
    if (catTitle) active.cat[catTitle] = true;
    $("#r-search").value = "";
    renderFacets(); run();
  };

  renderFacets();
  run();
})();
