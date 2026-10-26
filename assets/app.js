/* ============================================================================
   Executive Solutions to New Forms of Work (A9019238) — dashboard
   Tabs: Overview · Learning journey · Participants · Resources
   (the Collective brain tab is a self-contained module in assets/brain.js)
   ========================================================================== */
(function () {
  "use strict";

  var C = window.COURSE;
  var P = Array.isArray(window.PARTICIPANTS) ? window.PARTICIPANTS : [];
  var S = window.SURVEY || null;
  var R = Array.isArray(window.RESOURCES) ? window.RESOURCES : [];
  var L = window.CASELAW || null;

  var TZ = "+02:00";                 // Turin, CEST, as printed on the agenda
  var AGENDA_TZ = "Etc/GMT-2";

  // `?now=2026-10-21T10:00:00+02:00` previews the dashboard at any moment.
  var nowParam = new URLSearchParams(location.search).get("now");
  function now() { return nowParam ? new Date(nowParam) : new Date(); }

  function $(sel) { return document.querySelector(sel); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmt(d, opts, tz) {
    return new Intl.DateTimeFormat("en-GB", Object.assign({ timeZone: tz || undefined }, opts)).format(d);
  }
  function longDate(iso) { return fmt(new Date(iso + "T12:00:00Z"), { day: "numeric", month: "long", year: "numeric" }, "UTC"); }

  /* ---------- Flatten the programme into datable sessions ---------- */
  var sessions = [];
  C.programme.forEach(function (day) {
    day.sessions.forEach(function (s) {
      var m = String(s.time).match(/(\d{2}:\d{2})(?:\s*[–-]\s*(\d{2}:\d{2}))?/);
      s.day = day;
      s.startD = m ? new Date(day.date + "T" + m[1] + ":00" + TZ) : null;
      s.endD = m && m[2] ? new Date(day.date + "T" + m[2] + ":00" + TZ) : s.startD;
      s.isLab = s.kind === "lab" || s.kind === "design" || s.kind === "exercise";
      sessions.push(s);
    });
  });
  function statusOf(s) {
    if (!s.startD) return "upcoming";
    var t = now();
    if (t >= s.endD) return "done";
    if (t >= s.startD) return "live";
    return "upcoming";
  }
  function nextSession() {
    for (var i = 0; i < sessions.length; i++) if (sessions[i].endD && sessions[i].endD > now()) return sessions[i];
    return null;
  }
  function currentDay() {
    var t = now();
    for (var i = 0; i < C.programme.length; i++) {
      var d = C.programme[i];
      if (t >= new Date(d.date + "T00:00:00" + TZ) && t <= new Date(d.date + "T23:59:59" + TZ)) return d;
    }
    return null;
  }

  /* ---------- Tabs ---------- */
  var tabs = document.querySelectorAll(".tabs button");
  function showTab(id, noHash) {
    if (!document.getElementById("panel-" + id)) id = "overview";
    tabs.forEach(function (b) { b.setAttribute("aria-selected", b.dataset.tab === id ? "true" : "false"); });
    document.querySelectorAll(".panel").forEach(function (p) { p.hidden = p.dataset.panel !== id; });
    if (!noHash) history.replaceState(null, "", location.pathname + location.search + "#" + id);
  }
  tabs.forEach(function (b) { b.addEventListener("click", function () { showTab(b.dataset.tab); }); });
  document.querySelector(".tabs-inner").addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var list = Array.prototype.slice.call(tabs);
    var i = list.indexOf(document.activeElement);
    if (i < 0) return;
    var n = list[(i + (e.key === "ArrowRight" ? 1 : list.length - 1)) % list.length];
    n.focus(); n.click();
  });
  window.DASH = { showTab: showTab };   // used by the Collective brain module

  /* ---------- "Explore further" jumps --------------------------------------
     Any element carrying data-jump="<tab>|<argument>" switches tab and hands
     the argument to that tab: a RESOURCES category title for the explorer, or
     a flow node / cluster id for the collective brain. This is what stops a
     session or a toolbox block from being a dead end.                       */
  document.addEventListener("click", function (e) {
    var j = e.target.closest("[data-jump]");
    if (!j) return;
    e.preventDefault();
    var bits = j.dataset.jump.split("|"), tab = bits[0], arg = bits[1] || "";
    showTab(tab);
    if (tab === "resources" && typeof window.exploreFilter === "function") {
      window.exploreFilter(arg);
    }
    if (tab === "brain" && typeof window.brainFocus === "function") {
      window.brainFocus(arg);
    }
    var panel = document.getElementById("panel-" + tab);
    if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ---------- Hero ---------- */
  function renderHero() {
    $("#hero-lead").textContent = C.lead;
    var meta = [
      ["Dates", longDate(C.start) + " – " + longDate(C.end)],
      ["Format", C.modality + " · " + C.days + " days · " + C.hours + " hours"],
      ["Venue", C.venue],
      ["Language", C.language],
      ["Course code", C.code]
    ];
    $("#hero-meta").innerHTML = meta.map(function (m) {
      return "<div><span>" + esc(m[0]) + "</span><strong>" + esc(m[1]) + "</strong></div>";
    }).join("");
  }

  function countries() {
    var m = {};
    P.forEach(function (p) { if (p.country) m[p.country] = 1; });
    return Object.keys(m);
  }
  function renderKpis() {
    var labs = sessions.filter(function (s) { return s.kind === "lab"; }).length;
    var items = [
      [C.hours, "Learning hours"],
      [sessions.filter(function (s) { return s.kind !== "social"; }).length, "Sessions"],
      [labs, "Scheme Design Labs"],
      [uniquePeople().length, "Resource persons"]
    ];
    if (P.length) { items.push([P.length, "Participants"]); items.push([countries().length, "Countries"]); }
    $("#kpis").innerHTML = items.map(function (k) {
      return '<div class="kpi"><div class="kpi-value">' + k[0] + '</div><div class="kpi-label">' + k[1] + "</div></div>";
    }).join("");
  }

  /* ---------- Overview ---------- */
  var countdownTimer;
  function renderNext() {
    var box = $("#next-card");
    var s = nextSession();
    clearInterval(countdownTimer);
    if (!s) {
      box.innerHTML =
        '<div><div class="next-label">Course completed</div>' +
        '<div class="next-title">Thank you for a week of executive solutions.</div>' +
        '<p class="muted" style="margin:.4rem 0 0;color:rgba(255,255,255,.82)">The Collective brain tab holds what the cohort built. The individual assignment closes the 60 learning hours.</p></div>' +
        '<div class="countdown"><div><b>' + C.days + "</b><span>days</span></div><div><b>" + sessions.filter(function (x) { return x.kind === "lab"; }).length + "</b><span>labs</span></div></div>";
      return;
    }
    var st = statusOf(s);
    box.innerHTML =
      "<div>" +
        '<div class="next-label">' + (st === "live" ? "Happening now" : "Next session") + " · " + esc(s.day.weekday) + "</div>" +
        '<div class="next-title">' + esc(s.title) + "</div>" +
        '<div class="muted" style="margin:0;color:rgba(255,255,255,.82)">' + esc(s.time) + " Turin time" +
          (s.people.length ? " · " + esc(s.people.join(", ")) : "") + "</div>" +
      "</div>" +
      '<div class="countdown" id="countdown"></div>';
    function tick() {
      var diff = Math.max(0, (st === "live" ? s.endD : s.startD) - now());
      if (diff === 0) { renderNext(); return; }
      var d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60;
      var el = document.getElementById("countdown");
      if (el) el.innerHTML = [[d, "days"], [h, "hrs"], [m, "min"]].map(function (p) {
        return "<div><b>" + p[0] + "</b><span>" + p[1] + "</span></div>";
      }).join("");
    }
    tick();
    if (!nowParam) countdownTimer = setInterval(tick, 30000);
  }

  function renderProgress() {
    var t = now();
    var start = new Date(C.start + "T09:00:00" + TZ), end = new Date(C.end + "T13:00:00" + TZ);
    var pct = Math.max(0, Math.min(100, ((t - start) / (end - start)) * 100));
    var teaching = sessions.filter(function (s) { return s.kind !== "social"; });
    var done = teaching.filter(function (s) { return statusOf(s) === "done"; }).length;
    var cd = currentDay();
    var daysToStart = Math.ceil((start - t) / 864e5);
    $("#progress").innerHTML =
      '<div class="progress-block"><div class="progress-head"><span>Residential week</span><span>' + Math.round(pct) + "%</span></div>" +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="progress-row"><span>19 Oct</span><span>' +
          (daysToStart > 0 ? "Starts in " + daysToStart + " day" + (daysToStart === 1 ? "" : "s")
                           : pct >= 100 ? "Completed" : "In progress") +
        "</span><span>23 Oct</span></div></div>" +
      '<div class="progress-block"><div class="progress-head"><span>Sessions held</span><span>' + done + " / " + teaching.length + "</span></div>" +
        '<div class="bar"><i style="width:' + (done / teaching.length) * 100 + '%"></i></div></div>' +
      '<div class="progress-block"><div class="progress-head"><span>Current day</span><span>' + (cd ? cd.weekday : "—") + "</span></div>" +
        '<div class="muted" style="margin:.25rem 0 0">' +
          (cd ? esc(cd.theme) : daysToStart > 0 ? "The week has not started yet." : "The residential week has ended — the post-course assignment is open.") +
        "</div></div>";
  }

  function renderOverviewText() {
    $("#overview-text").textContent = C.overview;
    $("#audience").textContent = C.audience;
    $("#topics").innerHTML = C.topics.map(function (t) { return "<li><b>" + esc(t[0]) + "</b> " + esc(t[1]) + "</li>"; }).join("");
    $("#outcomes").innerHTML = C.outcomes.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("");
    $("#pillars").innerHTML = C.pillars.map(function (p, i) {
      return '<article class="card pillar"><span class="card-index">0' + (i + 1) + "</span><h3>" + esc(p[0]) + "</h3><p>" + esc(p[1]) + "</p></article>";
    }).join("");
    $("#facts").innerHTML = "<h2>Key facts</h2><dl class=\"facts\">" + [
      ["Dates", longDate(C.start) + " – " + longDate(C.end)],
      ["Duration", C.days + " days on campus · " + C.hours + " learning hours"],
      ["Venue", C.venue],
      ["Language", C.language],
      ["Course code", C.code],
      ["Price", C.price],
      ["Certification", "Counts towards the ITCILO Diploma for Social Protection Managers"]
    ].map(function (f) { return "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }).join("") + "</dl>";
  }

  /* ---------- Resource persons ---------- */
  function uniquePeople() {
    var seen = [];
    sessions.forEach(function (s) {
      (s.people || []).forEach(function (p) {
        if (p === "Resource persons and participants") return;
        if (seen.indexOf(p) < 0) seen.push(p);
      });
    });
    return seen;
  }
  function initials(n) {
    return n.split(",")[0].split(/\s+/).filter(function (w) { return /^[A-ZÀ-Þ]/.test(w); })
      .map(function (w) { return w[0]; }).slice(0, 2).join("");
  }
  function renderPeople() {
    $("#people").innerHTML = uniquePeople().map(function (p) {
      var parts = p.split(",");
      var name = parts.shift().trim();
      var affil = parts.join(",").trim();
      var list = sessions.filter(function (s) { return (s.people || []).indexOf(p) >= 0; });
      return '<div class="person"><div class="person-top"><div class="avatar">' + esc(initials(p)) + "</div>" +
        "<div><h3>" + esc(name) + "</h3>" +
        (affil ? '<div class="count">' + esc(affil) + "</div>" : "") +
        '<div class="count">' + list.length + " session" + (list.length === 1 ? "" : "s") + "</div></div></div><ul>" +
        list.map(function (s) {
          return "<li><b>" + esc(s.day.weekday.slice(0, 3)) + "</b> · " + esc(s.time.split("–")[0].trim()) + " — " + esc(s.title) + "</li>";
        }).join("") + "</ul></div>";
    }).join("");
  }

  /* ---------- Learning journey ---------- */
  function renderJourneyInfo() {
    $("#journey-lead").textContent =
      "Mornings build the toolbox; late afternoons put it to work. By Friday each participant holds an " +
      "executive solution assembled from three Scheme Design Lab blocks and stress-tested by the room.";
    $("#learning-format").textContent = C.learningFormat;
    $("#phases").innerHTML = C.phases.map(function (p) {
      return '<div class="phase"><b>' + esc(p[0]) + "</b><p>" + esc(p[1]) + "</p></div>";
    }).join("");
    $("#why").innerHTML = C.why.map(function (w) {
      return '<div class="why"><h3>' + esc(w[0]) + "</h3><p>" + esc(w[1]) + "</p></div>";
    }).join("");
  }

  /* The two "explore further" links under a toolbox block or a lab session:
     one into the Resources explorer, pre-filtered to the block's category,
     one into the Collective brain at the node that block feeds. */
  function exploreLinks(blockN) {
    var map = (C.toolboxLinks || {})[blockN];
    if (!map) return "";
    var out = [];
    (map.groups || []).forEach(function (g) {
      var n = countInGroup(g);
      out.push('<button class="tb-go" data-jump="resources|' + esc(g) + '">' +
        esc(shortGroup(g)) + (n ? " <b>" + n + "</b>" : "") + "</button>");
    });
    if (map.flow || map.cluster) {
      out.push('<button class="tb-go brain" data-jump="brain|' + esc(map.flow || map.cluster) + '">' +
        "In the collective brain</button>");
    }
    return '<div class="tb-go-row"><span class="eyebrow">Explore further</span>' + out.join("") + "</div>";
  }
  function shortGroup(title) {
    return String(title).split(" — ")[0].split(",")[0];
  }
  function countInGroup(title) {
    if (title === "Case law") return L ? L.decisions.length : 0;
    for (var i = 0; i < R.length; i++) if (R[i].title === title) return R[i].items.length;
    return 0;
  }

  function renderToolbox() {
    $("#toolbox").innerHTML = C.toolbox.map(function (b) {
      return '<article class="tb-block' + (b.lab ? " has-lab" : "") + '">' +
        '<div class="tb-head"><span class="tb-n">' + b.n + "</span>" +
          "<div><p class=\"eyebrow\">" + esc(b.day) + " · " + esc(b.kicker) + "</p><h3>" + esc(b.title) + "</h3></div></div>" +
        "<p class=\"tb-blurb\">" + esc(b.blurb) + "</p>" +
        '<div class="tb-tools">' + b.tools.map(function (t) { return '<span class="im-tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
        (b.lab ? '<p class="tb-lab"><span class="tb-lab-tag">Scheme Design Lab</span>' + esc(b.lab) + "</p>" : "") +
        exploreLinks(b.n) +
        "</article>";
    }).join("");
  }

  /* Sessions inherit the explore-further links of the toolbox block built that
     day, so the timetable leads somewhere too. The map is by day number. */
  var DAY_BLOCK = { 1: 1, 2: 3, 3: 4, 4: 6, 5: 7 };
  function sessionLinks(s) {
    if (s.kind === "social") return "";
    var day = s.day && s.day.n;
    var blockN = s.isLab ? DAY_BLOCK[day] : (s.kind === "plenary" || s.kind === "design" ? DAY_BLOCK[day] : null);
    if (!blockN) return "";
    var map = (C.toolboxLinks || {})[blockN];
    if (!map) return "";
    var g = (map.groups || [])[0];
    return '<div class="s-go">' +
      (g ? '<button class="tb-go sm" data-jump="resources|' + esc(g) + '">' + esc(shortGroup(g)) + "</button>" : "") +
      ((map.flow || map.cluster)
        ? '<button class="tb-go sm brain" data-jump="brain|' + esc(map.flow || map.cluster) + '">Collective brain</button>'
        : "") +
      "</div>";
  }

  var dayFilter = "all", labsOnly = false;
  function renderDays() {
    var cd = currentDay(), nx = nextSession();
    var shown = C.programme.filter(function (d) { return dayFilter === "all" || String(d.n) === dayFilter; });
    var count = 0;
    $("#days").innerHTML = shown.map(function (d) {
      var list = d.sessions.filter(function (s) { return !labsOnly || s.isLab; });
      count += list.length;
      if (!list.length) return "";
      return '<div class="week' + (cd === d ? " current" : "") + '" id="day-' + d.n + '">' +
        '<div class="week-head"><span class="week-num">Day ' + d.n + "</span><h3>" + esc(d.theme) + '</h3>' +
        '<span class="dates">' + esc(d.weekday) + " " + longDate(d.date) + "</span></div>" +
        list.map(function (s) {
          var st = statusOf(s);
          var badge = st === "done" ? '<span class="badge done">Done</span>'
                    : st === "live" ? '<span class="badge live">Now</span>'
                    : s === nx ? '<span class="badge next">Next</span>' : "";
          return '<div class="session ' + (st === "done" ? "past" : st) + " k-" + esc(s.kind) + '">' +
            '<div class="s-when"><b>' + esc(s.time.split("–")[0].trim()) + "</b><span>" +
              (s.time.indexOf("–") > 0 ? "to " + esc(s.time.split("–")[1].trim()) : "") + "</span></div>" +
            "<div>" +
              '<span class="s-id ' + esc(s.kind) + '">' + kindLabel(s.kind) + "</span>" +
              '<p class="s-title">' + esc(s.title) + "</p>" +
              (s.subtitle ? '<p class="s-sub">' + esc(s.subtitle) + "</p>" : "") +
              '<div class="s-people">' + (s.people || []).map(function (p) { return '<span class="chip">' + esc(p) + "</span>"; }).join("") + "</div>" +
              sessionLinks(s) +
            "</div>" +
            '<div class="s-side">' + badge + "</div>" +
          "</div>";
        }).join("") +
      "</div>";
    }).join("");
    $("#session-count").textContent = count + " session" + (count === 1 ? "" : "s") +
      (labsOnly ? " on the Scheme Design track" : "") + (dayFilter === "all" ? "" : " · day " + dayFilter);
  }
  function kindLabel(k) {
    return { plenary: "Plenary", experience: "Country experience", design: "Scheme design",
             lab: "Scheme Design Lab", exercise: "Group exercise", social: "Social programme" }[k] || k;
  }
  function initJourneyControls() {
    var sel = $("#day-filter");
    sel.innerHTML = '<option value="all">All five days</option>' + C.programme.map(function (d) {
      return '<option value="' + d.n + '">' + esc(d.weekday) + " — " + esc(d.theme) + "</option>";
    }).join("");
    sel.addEventListener("change", function () { dayFilter = sel.value; renderDays(); });
    $("#labs-only").addEventListener("change", function (e) { labsOnly = e.target.checked; renderDays(); });
  }

  /* ---------- Participants & demographics (merged) ---------- */
  function countBy(rows, key) {
    var m = {};
    rows.forEach(function (r) { var v = r[key]; if (v) m[v] = (m[v] || 0) + 1; });
    return Object.keys(m).map(function (k) { return [k, m[k]]; })
      .sort(function (a, b) { return b[1] - a[1] || a[0].localeCompare(b[0]); });
  }
  // `opts.denominator` turns the value labels into "n (p%)"; `opts.footer`
  // replaces the default record count.
  function barChart(title, data, note, opts) {
    if (!data.length) return "";
    opts = opts || {};
    var max = data.reduce(function (a, d) { return Math.max(a, d[1]); }, 0) || 1;
    var total = data.reduce(function (a, d) { return a + d[1]; }, 0);
    var den = opts.denominator;
    return '<div class="card"><h2>' + esc(title) + "</h2>" +
      (note ? '<p class="muted">' + esc(note) + "</p>" : "") +
      data.slice(0, 14).map(function (d) {
        var pct = den ? Math.round((d[1] / den) * 100) : null;
        return '<div class="hbar"><span class="hbar-label" title="' + esc(d[0]) + '">' + esc(d[0]) + "</span>" +
          '<span class="hbar-track"><i style="width:' + (d[1] / max) * 100 + '%"></i></span>' +
          '<span class="hbar-val">' + d[1] + (pct === null ? "" : ' <small>' + pct + "%</small>") + "</span></div>";
      }).join("") +
      (data.length > 14 ? '<div class="muted" style="margin:.5rem 0 0">+ ' + (data.length - 14) + " more</div>" : "") +
      '<p class="muted bar-total">' + (opts.footer ||
        (total + " records · " + data.length + " categor" + (data.length === 1 ? "y" : "ies"))) + "</p></div>";
  }

  // Vertical distribution for a 1–10 self-rating, with mean and median marked.
  function scaleChart(b) {
    var max = b.data.reduce(function (a, d) { return Math.max(a, d[1]); }, 0) || 1;
    // Columns are evenly spaced, so a value sits at the centre of its column.
    var pos = function (v) { return ((v - b.min + 0.5) / b.data.length) * 100; };
    return '<div class="card scale-card"><h2>' + esc(b.title) + "</h2>" +
      '<p class="muted">' + esc(b.note) + "</p>" +
      '<div class="scale-stats">' +
        '<div><b>' + b.mean.toFixed(1) + "</b><span>mean</span></div>" +
        '<div><b>' + b.median + "</b><span>median</span></div>" +
        '<div><b>' + b.min + "–" + b.max + "</b><span>full range used</span></div>" +
      "</div>" +
      '<div class="scale-plot">' + b.data.map(function (d) {
        return '<div class="scale-col" title="' + esc(d[0]) + ": " + d[1] + ' respondent' + (d[1] === 1 ? "" : "s") + '">' +
          '<span class="scale-n">' + (d[1] || "") + "</span>" +
          '<i style="height:' + (d[1] / max) * 100 + '%"></i>' +
          '<span class="scale-x">' + esc(d[0]) + "</span></div>";
      }).join("") +
        '<span class="scale-marker mean" style="left:' + pos(b.mean).toFixed(1) + '%"><b>mean</b></span>' +
      "</div>" +
      '<p class="muted bar-total">' + b.responses + " respondents · 1 = not confident, 10 = very confident</p></div>";
  }
  var LABELS = { name: "Name", country: "Country", region: "Region", sex: "Sex", city: "City",
                 organization: "Institution", orgType: "Institution type", position: "Position", group: "Nominated as" };
  function label(k) { return LABELS[k] || k.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, function (c) { return c.toUpperCase(); }); }

  function renderParticipants() {
    var body = $("#participants-body");
    if (!P.length) {
      body.innerHTML = '<div class="empty"><p><b>No participant records loaded.</b></p><p>Add the roster to <code>data/participants.js</code>.</p></div>';
      return;
    }
    var cols = ["name", "sex", "country", "city", "organization", "orgType", "position"];
    var filterKeys = ["country", "region", "orgType", "sex"];
    var sortKey = "country", sortDir = 1;

    body.innerHTML =
      '<div class="filters"><input type="search" id="p-search" placeholder="Search by name, country, institution or role…" aria-label="Search participants">' +
        filterKeys.map(function (k) {
          return '<select data-filter="' + k + '" aria-label="' + esc(label(k)) + '"><option value="">All ' + esc(label(k).toLowerCase()) + "</option>" +
            countBy(P, k).map(function (d) { return "<option>" + esc(d[0]) + "</option>"; }).join("") + "</select>";
        }).join("") +
        '<button class="btn ghost" id="p-reset" type="button">Reset</button></div>' +
      '<div class="cards-3" id="p-stats"></div>' +
      '<p class="muted" id="p-count"></p>' +
      '<div class="charts" id="p-charts"></div>' +
      '<div class="table-wrap"><table><thead><tr>' +
        cols.map(function (c) { return '<th data-sort="' + esc(c) + '">' + esc(label(c)) + "</th>"; }).join("") +
      '</tr></thead><tbody id="p-rows"></tbody></table></div>';

    function draw() {
      var q = $("#p-search").value.trim().toLowerCase();
      var f = {};
      body.querySelectorAll("[data-filter]").forEach(function (s) { if (s.value) f[s.dataset.filter] = s.value; });
      var rows = P.filter(function (r) {
        for (var k in f) if (r[k] !== f[k]) return false;
        return !q || Object.keys(r).some(function (c) { return String(r[c] == null ? "" : r[c]).toLowerCase().indexOf(q) >= 0; });
      }).sort(function (a, b) { return String(a[sortKey] || "").localeCompare(String(b[sortKey] || "")) * sortDir; });

      $("#p-rows").innerHTML = rows.length
        ? rows.map(function (r) { return "<tr>" + cols.map(function (c) { return "<td>" + esc(r[c]) + "</td>"; }).join("") + "</tr>"; }).join("")
        : '<tr><td colspan="' + cols.length + '" class="muted">No participant matches these filters.</td></tr>';
      $("#p-count").textContent = "Showing " + rows.length + " of " + P.length + " participants";

      var nC = countBy(rows, "country").length, nO = countBy(rows, "organization").length;
      $("#p-stats").innerHTML =
        '<article class="card stat"><span class="card-index">' + rows.length + '</span><h3>Participants</h3></article>' +
        '<article class="card stat"><span class="card-index">' + (nC || "—") + '</span><h3>Countries &amp; duty stations</h3></article>' +
        '<article class="card stat"><span class="card-index">' + (nO || "—") + '</span><h3>Institutions</h3></article>';

      $("#p-charts").innerHTML =
        barChart("By country", countBy(rows, "country")) +
        barChart("By region", countBy(rows, "region")) +
        barChart("By institution type", countBy(rows, "orgType")) +
        barChart("By institution", countBy(rows, "organization")) +
        barChart("By sex", countBy(rows, "sex"), "As recorded at registration.");

      body.querySelectorAll("th").forEach(function (th) {
        th.textContent = label(th.dataset.sort) + (th.dataset.sort === sortKey ? (sortDir > 0 ? " ▲" : " ▼") : "");
      });
    }
    body.addEventListener("input", draw);
    body.addEventListener("change", draw);
    $("#p-reset").addEventListener("click", function () {
      $("#p-search").value = "";
      body.querySelectorAll("[data-filter]").forEach(function (s) { s.value = ""; });
      draw();
    });
    body.querySelector("thead").addEventListener("click", function (e) {
      var th = e.target.closest("th"); if (!th) return;
      if (sortKey === th.dataset.sort) sortDir = -sortDir; else { sortKey = th.dataset.sort; sortDir = 1; }
      draw();
    });
    draw();
  }

  /* ---------- Pre-course survey (merged into the Participants tab) ---------- */
  function renderSurvey() {
    var body = $("#survey-body");
    if (!S) { body.innerHTML = ""; return; }
    $("#survey-lead").innerHTML =
      "Entry survey run on the ITCILO eCampus before the residential week. " +
      '<a href="' + esc(S.url) + '" target="_blank" rel="noopener">Open the activity \u2197</a>';

    var rate = (S.responses && S.invited) ? Math.round((S.responses / S.invited) * 100) : null;
    var head =
      '<div class="card survey-head">' +
        "<h2>Response rate</h2>" +
        (rate === null
          ? '<p class="muted">Not yet recorded. Set <code>responses</code> in <code>data/participants.js</code> once the eCampus export is in.</p>' +
            '<div class="bar pending"><i style="width:0%"></i></div>'
          : '<div class="progress-head"><span>' + S.responses + " of " + S.invited + " registered participants answered</span><span>" + rate + "%</span></div>" +
            '<div class="bar"><i style="width:' + rate + '%"></i></div>' +
            '<div class="progress-row"><span>' + S.blocks.length + " questions</span><span>" +
              (S.updated ? "as at " + esc(longDate(S.updated)) : "") + "</span></div>") +
      "</div>";

    var blocks = (S.blocks || []).map(function (b) {
      if (b.pending || !b.data || !b.data.length) {
        return '<div class="card survey-block pending">' +
          '<span class="pend-tag">Awaiting eCampus export</span>' +
          "<h2>" + esc(b.title) + "</h2>" +
          '<p class="muted">' + esc(b.note) + "</p>" +
          '<div class="ghost-bars"><i style="width:72%"></i><i style="width:54%"></i><i style="width:38%"></i><i style="width:21%"></i></div>' +
          "</div>";
      }
      if (b.kind === "scale") return scaleChart(b);
      if (b.kind === "list") {
        return '<div class="card survey-block"><h2>' + esc(b.title) + "</h2>" +
          '<p class="muted">' + esc(b.note) + "</p>" +
          '<ol class="numbered">' + b.data.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>" +
          (b.responses ? '<p class="muted bar-total">' + b.responses + " respondents</p>" : "") + "</div>";
      }
      // Multi-select questions are counted against respondents, not against
      // the sum of the answers, so the percentages stay meaningful.
      var sum = b.data.reduce(function (a, d) { return a + d[1]; }, 0);
      var multi = b.responses && sum > b.responses;
      return barChart(b.title, b.data, b.note, {
        denominator: b.responses || null,
        footer: b.responses
          ? b.responses + " respondents" + (multi ? " · " + sum + " selections, so the shares sum to more than 100%" : "")
          : null
      });
    }).join("");

    var read = (S.readacross && S.readacross.length)
      ? '<div class="section-heading"><h2 class="section-title">What this means for the week</h2>' +
        '<p class="muted">Reading the survey against the agenda.</p></div>' +
        '<div class="readacross">' + S.readacross.map(function (r) {
          return '<article class="card ra"><p class="ra-obs">' + esc(r[0]) + "</p>" +
            '<p class="ra-impl"><span class="eyebrow">So</span>' + esc(r[1]) + "</p></article>";
        }).join("") + "</div>"
      : "";

    body.innerHTML = head + '<div class="charts">' + blocks + "</div>" + read;
  }

  /* ---------- Resources ---------- */
  function resourceCard(r) {
    return '<a class="card resource" href="' + esc(r[2]) + '" target="_blank" rel="noopener" data-res>' +
      (r[3] ? '<span class="api-tag">' + esc(r[3]) + "</span>" : "") +
      "<h4>" + esc(r[0]) + " ↗</h4><p>" + esc(r[1]) + "</p></a>";
  }
  function renderResources() {
    var total = R.reduce(function (a, g) { return a + g.items.length; }, 0);
    $("#r-nav").innerHTML =
      R.map(function (g) { return '<button class="chipnav-b" data-go="group-' + esc(g.id) + '">' + esc(g.title) + "</button>"; }).join("") +
      '<button class="chipnav-b accent" data-go="caselaw-group">Case law</button>';

    $("#resources").innerHTML = R.map(function (g) {
      return '<section class="resource-group" id="group-' + esc(g.id) + '">' +
        '<div class="group-head"><h3>' + esc(g.title) + '</h3><span class="group-weeks">' + esc(g.weeks) + "</span></div>" +
        '<p class="muted">' + esc(g.blurb) + "</p>" +
        '<div class="cards-3">' + g.items.map(resourceCard).join("") + "</div></section>";
    }).join("");

    $("#r-nav").addEventListener("click", function (e) {
      var b = e.target.closest("[data-go]"); if (!b) return;
      var el = document.getElementById(b.dataset.go);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    var search = $("#r-search");
    function filter() {
      var q = search.value.trim().toLowerCase();
      var shown = 0;
      document.querySelectorAll("#resources .resource-group").forEach(function (sec) {
        var any = 0;
        sec.querySelectorAll("[data-res]").forEach(function (card) {
          var hit = !q || card.textContent.toLowerCase().indexOf(q) >= 0;
          card.style.display = hit ? "" : "none";
          if (hit) { any++; shown++; }
        });
        sec.style.display = any ? "" : "none";
      });
      var clShown = filterCaselaw(q);
      $("#r-count").textContent = q
        ? shown + " resource" + (shown === 1 ? "" : "s") + " and " + clShown + " decision" + (clShown === 1 ? "" : "s") + " match “" + search.value.trim() + "”"
        : total + " resources across " + R.length + " categories, plus " + (L ? L.decisions.length : 0) + " court decisions";
    }
    search.addEventListener("input", filter);
    filter();
  }

  /* ---------- Case law ---------- */
  var clTheme = "all";
  /* The decisions themselves are rendered by assets/explore.js inside the
     unified stream, so only the category note and the Compendium feed links
     are drawn here. renderCaselawLegacy below is the previous standalone list,
     kept for reference and no longer called. */
  function renderCaselaw() {
    if (!L) return;
    var note = $("#caselaw-note"); if (note) note.textContent = L.note;
    var feeds = $("#cl-feeds");
    if (feeds) {
      feeds.innerHTML = L.feeds.map(function (f) {
        return '<a class="feed-link" href="' + esc(f[1]) + '" target="_blank" rel="noopener">' + esc(f[0]) + " ↗</a>";
      }).join("");
    }
  }

  function renderCaselawLegacy() {
    if (!L) return;
    $("#caselaw-note").textContent = L.note;
    $("#cl-nav").innerHTML =
      '<button class="chipnav-b on" data-theme="all">All decisions</button>' +
      L.themes.map(function (t) {
        var n = L.decisions.filter(function (d) { return d.theme === t.id; }).length;
        return '<button class="chipnav-b" data-theme="' + esc(t.id) + '">' + esc(t.label) + ' <b>' + n + "</b></button>";
      }).join("");

    $("#caselaw").innerHTML = L.decisions.map(function (d, i) {
      var theme = L.themes.filter(function (t) { return t.id === d.theme; })[0];
      return '<article class="cl-card" data-cl data-theme="' + esc(d.theme) + '" id="cl-' + i + '">' +
        '<header class="cl-head">' +
          '<div class="cl-where"><span class="cl-country">' + esc(d.country) + "</span>" +
            '<span class="cl-court">' + esc(d.court) + " · " + esc(d.date) + "</span></div>" +
          '<span class="cl-theme t-' + esc(d.theme) + '">' + esc(theme ? theme.label : d.theme) + "</span>" +
        "</header>" +
        "<h4>" + esc(d.title) + "</h4>" +
        '<p class="cl-cite">' + esc(d.cite) + "</p>" +
        '<p class="cl-holding">' + esc(d.holding) + "</p>" +
        '<div class="cl-design"><span class="eyebrow">What it changes for scheme design</span><p>' + esc(d.design) + "</p></div>" +
        (d.url ? '<a class="cl-link" href="' + esc(d.url) + '" target="_blank" rel="noopener">Read the decision ↗</a>' : "") +
        "</article>";
    }).join("");

    $("#cl-feeds").innerHTML = L.feeds.map(function (f) {
      return '<a class="feed-link" href="' + esc(f[1]) + '" target="_blank" rel="noopener">' + esc(f[0]) + " ↗</a>";
    }).join("");

    $("#cl-nav").addEventListener("click", function (e) {
      var b = e.target.closest("[data-theme]"); if (!b) return;
      clTheme = b.dataset.theme;
      $("#cl-nav").querySelectorAll(".chipnav-b").forEach(function (x) { x.classList.toggle("on", x === b); });
      filterCaselaw($("#r-search").value.trim().toLowerCase());
    });
  }
  function filterCaselaw(q) {
    var n = 0;
    document.querySelectorAll("[data-cl]").forEach(function (card) {
      var hit = (clTheme === "all" || card.dataset.theme === clTheme) &&
                (!q || card.textContent.toLowerCase().indexOf(q) >= 0);
      card.style.display = hit ? "" : "none";
      if (hit) n++;
    });
    return n;
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    var c = C.contact;
    $("#contact").innerHTML = "<h2>Contact</h2><address><b>" + esc(c.org) + "</b><br>" + esc(c.unit) + "<br>" + esc(c.address) +
      "<br><br>" + esc(c.person) +
      '<br><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" +
      '<br><a href="' + esc(c.web) + '" target="_blank" rel="noopener">www.itcilo.org</a></address>';
  }

  /* ---------- Init ---------- */
  renderHero();
  renderKpis();
  renderNext();
  renderProgress();
  renderOverviewText();
  renderPeople();
  renderJourneyInfo();
  renderToolbox();
  initJourneyControls();
  renderDays();
  renderParticipants();
  renderSurvey();
  // The Resources tab is owned by assets/explore.js — it renders the unified
  // resource + case law stream and the sidebar facets. renderCaselaw() still
  // fills the Compendium feed links at the foot of that tab.
  renderCaselaw();
  renderContact();
  showTab((location.hash || "#overview").slice(1), true);
})();
