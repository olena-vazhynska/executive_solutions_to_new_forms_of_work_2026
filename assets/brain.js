/* ============================================================================
   COLLECTIVE BRAIN — self-contained module for the fifth tab
   ----------------------------------------------------------------------------
   Renders three layers from data/brain.js:
     1. the knowledge map of the course's key subjects
     2. the logic of the integrated exercise, as a flow with four stress tests
     3. the solutions wall — what participants produced, by country only
   ========================================================================== */
(function () {
  "use strict";

  var MOUNT = document.getElementById("brain-app");
  if (!MOUNT) return;
  var D = window.BRAIN;
  if (!D) { MOUNT.innerHTML = '<p class="muted">No collective-brain data loaded.</p>'; return; }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function cluster(id) {
    for (var i = 0; i < D.clusters.length; i++) if (D.clusters[i].id === id) return D.clusters[i];
    return null;
  }

  var activeCluster = null;     // knowledge map selection
  var activeStage = 1;          // integrated exercise selection
  var solFilter = "all";        // solutions wall region filter

  /* ---------- 1 · Knowledge map -------------------------------------------- */
  function mapSection() {
    var subjects = D.clusters.reduce(function (a, c) { return a + c.subjects.length; }, 0);
    return '<section class="br-sec">' +
      '<div class="section-heading"><p class="eyebrow">05 · Collective brain</p>' +
        '<h2 class="section-title flush">What the room knows</h2>' +
        '<p class="muted">The six subject clusters the week puts into the shared brain — ' + subjects +
        ' subjects in all. Select a cluster to see what it holds and which part of the integrated exercise consumes it.</p></div>' +
      '<div class="br-map">' + D.clusters.map(function (c) {
        var on = activeCluster === c.id;
        return '<button class="br-node c-' + esc(c.color) + (on ? " on" : "") + '" data-cluster="' + esc(c.id) + '" aria-pressed="' + on + '">' +
          '<span class="br-node-day">' + esc(c.day) + " · block " + c.block + "</span>" +
          "<b>" + esc(c.label) + "</b>" +
          '<span class="br-node-n">' + c.subjects.length + " subjects</span>" +
          "</button>";
      }).join("") + "</div>" +
      '<div class="br-detail" id="br-detail">' + clusterDetail() + "</div>" +
      "</section>";
  }
  function clusterDetail() {
    var c = activeCluster ? cluster(activeCluster) : null;
    if (!c) {
      return '<div class="br-detail-empty"><p class="muted">' +
        "Every cluster answers one question that a scheme design has to settle. Select one above — or read them " +
        "in order, Monday to Friday, which is how the week is built.</p>" +
        '<ul class="br-qlist">' + D.clusters.map(function (x) {
          return '<li><button class="br-qbtn" data-cluster="' + esc(x.id) + '"><b>' + esc(x.label) + "</b>" +
            "<span>" + esc(x.question) + "</span></button></li>";
        }).join("") + "</ul></div>";
    }
    return '<article class="card br-card c-' + esc(c.color) + '">' +
      '<p class="eyebrow">' + esc(c.day) + " · toolbox block " + c.block + "</p>" +
      "<h3>" + esc(c.label) + "</h3>" +
      '<p class="br-q">' + esc(c.question) + "</p>" +
      '<div class="tb-tools">' + c.subjects.map(function (s) { return '<span class="im-tag">' + esc(s) + "</span>"; }).join("") + "</div>" +
      '<p class="br-feeds"><span class="eyebrow">Consumed by</span>' + esc(c.feeds) + "</p>" +
      "</article>";
  }

  /* ---------- 2 · Integrated exercise -------------------------------------- */
  function exerciseSection() {
    var E = D.exercise;
    return '<section class="br-sec">' +
      '<div class="section-heading"><h2 class="section-title">' + esc(E.title) + "</h2>" +
      '<p class="muted">' + esc(E.blurb) + "</p></div>" +
      '<ol class="br-flow">' + E.stages.map(function (s) {
        var on = activeStage === s.n;
        return '<li class="br-stage k-' + esc(s.kind) + (on ? " on" : "") + '">' +
          '<button data-stage="' + s.n + '" aria-pressed="' + on + '">' +
            '<span class="br-stage-n">' + s.n + "</span>" +
            '<span class="br-stage-day">' + esc(s.day) + "</span>" +
            '<span class="br-stage-t">' + esc(s.title) + "</span>" +
          "</button></li>";
      }).join("") + "</ol>" +
      '<div id="br-stage-detail">' + stageDetail() + "</div>" +
      testsBlock() +
      "</section>";
  }
  function stageDetail() {
    var s = D.exercise.stages.filter(function (x) { return x.n === activeStage; })[0];
    if (!s) return "";
    var tags = (s.uses || []).map(function (id) {
      var c = cluster(id);
      return c ? '<button class="im-tag link c-' + esc(c.color) + '" data-cluster="' + esc(c.id) + '">' + esc(c.label) + "</button>" : "";
    }).join("");
    return '<article class="card br-stagecard">' +
      '<p class="eyebrow">' + esc(s.day) + " · stage " + s.n + " of " + D.exercise.stages.length + "</p>" +
      "<h3>" + esc(s.title) + "</h3>" +
      '<p class="br-prompt">“' + esc(s.prompt) + "”</p>" +
      '<div class="br-io">' +
        '<div class="br-io-col"><span class="eyebrow">Takes in</span><p>' + esc(s.input) + "</p></div>" +
        '<div class="br-io-col"><span class="eyebrow">What happens</span><p>' + esc(s.activity) + "</p></div>" +
        '<div class="br-io-col out"><span class="eyebrow">Produces</span><p>' + esc(s.output) + "</p></div>" +
      "</div>" +
      (tags ? '<p class="br-feeds"><span class="eyebrow">Draws on</span>' + tags + "</p>" : "") +
      "</article>";
  }
  function testsBlock() {
    return '<div class="section-heading"><h2 class="section-title">The four tests</h2>' +
      '<p class="muted">Applied by peers and resource persons to every executive solution on Friday morning. ' +
      "A solution that cannot answer these is not yet executive.</p></div>" +
      '<div class="br-tests">' + D.exercise.tests.map(function (t) {
        return '<article class="card br-test t-' + esc(t.id) + '">' +
          '<header><span class="br-test-icon" aria-hidden="true">' + t.icon + "</span><h3>" + esc(t.label) + "</h3></header>" +
          "<ol>" + t.questions.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol>" +
          "</article>";
      }).join("") + "</div>";
  }

  /* ---------- 3 · Solutions wall ------------------------------------------- */
  function wallSection() {
    var sols = D.solutions || [];
    var filled = sols.filter(function (s) { return !s.pending; });
    var regions = sols.reduce(function (a, s) { if (a.indexOf(s.region) < 0) a.push(s.region); return a; }, []);
    var presentations = sols.reduce(function (a, s) { return a + (s.presentations || 0); }, 0);

    return '<section class="br-sec">' +
      '<div class="section-heading"><h2 class="section-title">Executive solutions</h2>' +
      '<p class="muted">What participants designed and presented in Turin, by country. ' +
      "Presentations are shown by country and institution only — no participant is named.</p></div>" +

      '<div class="cards-3">' +
        '<article class="card stat"><span class="card-index">' + presentations + '</span><h3>Individual presentations</h3></article>' +
        '<article class="card stat"><span class="card-index">' + sols.length + '</span><h3>Countries &amp; groups</h3></article>' +
        '<article class="card stat"><span class="card-index">' + filled.length + " / " + sols.length + '</span><h3>Written up</h3></article>' +
      "</div>" +

      (filled.length === 0
        ? '<div class="note wall-note"><strong>The wall is ready and waiting for its content</strong>' +
          "<p>Each card below carries the country, the institutions represented and the number of individual " +
          "presentations given. The problem framed, the solution designed and the transferable insight are filled " +
          "in from the presentation files by editing <code>solutions</code> in <code>data/brain.js</code> — set " +
          "<code>pending: false</code> on an entry and it renders in full. Participant names are never stored.</p></div>"
        : "") +

      '<div class="chipnav" id="br-sol-nav">' +
        '<button class="chipnav-b' + (solFilter === "all" ? " on" : "") + '" data-region="all">All</button>' +
        regions.map(function (r) {
          return '<button class="chipnav-b' + (solFilter === r ? " on" : "") + '" data-region="' + esc(r) + '">' + esc(r) + "</button>";
        }).join("") +
      "</div>" +

      '<div class="br-wall">' + sols.filter(function (s) {
        return solFilter === "all" || s.region === solFilter;
      }).map(solCard).join("") + "</div>" +

      convergenceBlock() +
      "</section>";
  }

  function solCard(s) {
    var inst = (s.institutions || []).map(function (i) { return '<span class="im-tag">' + esc(i) + "</span>"; }).join("");
    if (s.pending) {
      return '<article class="card br-sol pending">' +
        '<header class="br-sol-head"><h3>' + esc(s.country) + "</h3>" +
          '<span class="br-sol-n">' + (s.presentations || 0) + " presentation" + (s.presentations === 1 ? "" : "s") + "</span></header>" +
        '<div class="tb-tools">' + inst + "</div>" +
        '<div class="br-sol-skel">' +
          '<p><span class="eyebrow">Problem framed</span><i class="skel w80"></i><i class="skel w60"></i></p>' +
          '<p><span class="eyebrow">Solution designed</span><i class="skel w90"></i><i class="skel w70"></i><i class="skel w45"></i></p>' +
        "</div>" +
        '<span class="pend-tag">Awaiting the presentation write-up</span>' +
        "</article>";
    }
    var blocks = (s.blocks || []).map(function (id) {
      var c = cluster(id);
      return '<span class="im-tag' + (c ? " c-" + esc(c.color) : "") + '">' + esc(c ? c.label : id) + "</span>";
    }).join("");
    return '<article class="card br-sol">' +
      '<header class="br-sol-head"><h3>' + esc(s.country) + "</h3>" +
        '<span class="br-sol-n">' + (s.presentations || 0) + " presentation" + (s.presentations === 1 ? "" : "s") + "</span></header>" +
      '<div class="tb-tools">' + inst + "</div>" +
      (s.title ? '<p class="br-sol-title">' + esc(s.title) + "</p>" : "") +
      (s.problem ? '<p><span class="eyebrow">Problem framed</span>' + esc(s.problem) + "</p>" : "") +
      (s.solution ? '<p><span class="eyebrow">Solution designed</span>' + esc(s.solution) + "</p>" : "") +
      (blocks ? '<div class="tb-tools blocks">' + blocks + "</div>" : "") +
      (s.insight ? '<p class="br-sol-insight">' + esc(s.insight) + "</p>" : "") +
      "</article>";
  }

  function convergenceBlock() {
    var c = D.convergence || [];
    if (!c.length) {
      return '<div class="note"><strong>Where the cohort converged</strong>' +
        "<p>The lessons that came back in presentation after presentation, across very different systems. " +
        "Add them as strings to <code>convergence</code> in <code>data/brain.js</code> after the closing session.</p></div>";
    }
    return '<div class="section-heading"><h2 class="section-title">Where the cohort converged</h2>' +
      '<p class="muted">Lessons that recurred across very different systems.</p></div>' +
      '<div class="cards-3">' + c.map(function (x, i) {
        return '<article class="card pillar"><span class="card-index">0' + (i + 1) + "</span><p>" + esc(x) + "</p></article>";
      }).join("") + "</div>";
  }

  /* ---------- Render & events ---------------------------------------------- */
  function render() {
    MOUNT.innerHTML = mapSection() + exerciseSection() + wallSection();
  }

  MOUNT.addEventListener("click", function (e) {
    var cl = e.target.closest("[data-cluster]");
    if (cl) {
      activeCluster = activeCluster === cl.dataset.cluster ? null : cl.dataset.cluster;
      render();
      var el = document.getElementById("br-detail");
      if (el && activeCluster) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }
    var st = e.target.closest("[data-stage]");
    if (st) { activeStage = +st.dataset.stage; render(); return; }
    var rg = e.target.closest("[data-region]");
    if (rg) { solFilter = rg.dataset.region; render(); }
  });

  render();
})();
