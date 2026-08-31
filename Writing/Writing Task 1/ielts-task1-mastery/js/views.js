/* ============================================================
   IELTS Task 1 Mastery — content views
   One entry point, dispatched by <body data-view="...">
   views: dashboard | band-descriptors | common-mistakes | checklist
        | vocabulary | revision | progress | bookmarks | notes | search
   Mount point on each page: <div id="view"></div>
   ============================================================ */
(function () {
  "use strict";

  var S = window.IT1MStore;
  var C = window.IT1M || {};
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function h(html) { var d = document.createElement("div"); d.innerHTML = html; return d.firstElementChild; }

  var LESSON_ORDER = ["fundamentals", "overview", "line-graphs", "bar-charts", "pie-charts", "tables", "maps", "processes", "mixed-charts"];
  var SKILL_ORDER = ["data-selection", "comparisons", "approximation", "grammar"];

  function lessonHref(slug) { return "learn/lesson.html?slug=" + slug; }
  function skillHref(slug) { return "skills/skill.html?slug=" + slug; }
  // depth-aware prefix
  function up() { return document.body.getAttribute("data-depth") === "1" ? "../" : ""; }

  function mastery() {
    var map = {}; try { map = S.lessonMap(); } catch (e) {}
    var total = LESSON_ORDER.length + SKILL_ORDER.length;
    var done = 0;
    LESSON_ORDER.concat(SKILL_ORDER).forEach(function (s) { if (map[s] && map[s].completed) done++; });
    return { done: done, total: total, pct: Math.round((done / total) * 100) };
  }

  /* -------------------- DASHBOARD -------------------- */
  function dashboard(v) {
    var m = mastery();
    var streak = { count: 0 }; try { streak = S.touchStreak(); } catch (e) {}
    var last = null; try { last = S.lastSlug(); } catch (e) {}
    var ob = { targetBand: null, weakness: null }; try { ob = S.getOnboarding(); } catch (e) {}
    var qz = {}; try { qz = S.quizzes(); } catch (e) {}
    var qCount = Object.keys(qz).length;
    var qAcc = qCount ? Math.round(Object.keys(qz).reduce(function (a, k) { return a + qz[k].best; }, 0) / qCount) : 0;

    var map = {}; try { map = S.lessonMap(); } catch (e) {}
    var typeGrid = LESSON_ORDER.map(function (slug) {
      var d = C.lessons[slug]; if (!d) return "";
      var ok = map[slug] && map[slug].completed;
      return '<a class="card card--link" href="' + up() + lessonHref(slug) + '">' +
        '<span class="kicker">' + (ok ? "✓ done" : "not started") + "</span>" +
        "<h4>" + esc(d.title) + "</h4><p>" + esc(d.blurb.slice(0, 90)) + "…</p></a>";
    }).join("");

    var weakLine = ob.weakness
      ? "You told us your weak area is <strong>" + esc(ob.weakness) + "</strong>. " + weakRec(ob.weakness)
      : "Take the 20-second setup to get tailored recommendations.";

    var nextSlug = recommendNext(map);

    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Dashboard</span>' +
      "<h1>Your Task 1 study</h1>" +
      '<p class="lede">Learn every Academic Writing Task 1 question type, master the overview, and revise efficiently.</p></header>' +

      '<div class="grid" style="grid-template-columns:auto 1fr;gap:1.5rem;align-items:center;margin-bottom:2rem">' +
        '<div class="ring" style="--p:' + m.pct + '"><span>' + m.pct + '%</span></div>' +
        '<div><h4 style="margin-bottom:.4rem">Overall mastery</h4>' +
        '<p class="small muted">' + m.done + " of " + m.total + ' modules complete.</p>' +
        '<div class="btn-row" style="margin-top:.6rem">' +
          '<a class="btn" href="' + up() + (last ? lessonHref(last) : lessonHref("fundamentals")) + '">' + (last ? "Continue studying" : "Start with Fundamentals") + "</a>" +
          '<a class="btn btn--ghost" href="' + up() + lessonHref(nextSlug) + '">Recommended: ' + esc(C.lessons[nextSlug].title) + "</a>" +
        "</div></div>" +
      "</div>" +

      '<div class="grid three" style="margin-bottom:2rem">' +
        '<div class="stat"><b>' + streak.count + '</b><span>day streak</span></div>' +
        '<div class="stat"><b>' + qCount + '</b><span>quizzes taken</span></div>' +
        '<div class="stat"><b>' + qAcc + '%</b><span>best quiz average</span></div>' +
      "</div>" +

      '<div class="callout callout--tip"><span class="label">Recommended focus</span><p>' + weakLine + "</p></div>" +

      "<h3 style=\"margin:2rem 0 1rem\">Quick start</h3>" +
      '<div class="grid two">' +
        quickCard(up() + lessonHref("fundamentals"), "Learn Task 1 basics", "Timing, marking, and the Summarise–Select–Compare–Organise principle.") +
        quickCard(up() + lessonHref("overview"), "Master the overview", "The highest-value paragraph — patterns for every visual type.") +
        quickCard(up() + "learn/lesson.html?slug=line-graphs", "Explore question types", "Nine lessons: line, bar, pie, table, map, process, mixed.") +
        quickCard(up() + "skills/vocabulary.html", "Vocabulary bank", "60+ data-description items with patterns, examples and common errors.") +
        quickCard(up() + "practice/planner.html", "Practice planning", "Analyse a visual in nine fields, then compare with an expert plan.") +
        quickCard(up() + "reference/reference.html?v=band-descriptors", "Band descriptors", "What Band 6, 7 and 8+ look like across the four criteria.") +
      "</div>" +

      "<h3 style=\"margin:2.4rem 0 1rem\">Question types</h3>" +
      '<div class="grid two">' + typeGrid + "</div>";
  }

  function quickCard(href, title, body) {
    return '<a class="card card--link" href="' + href + '"><h4>' + esc(title) + "</h4><p>" + esc(body) + "</p></a>";
  }
  function weakRec(w) {
    var map = {
      "Understanding charts": "Start with the question-type lessons and the First-60-seconds routines.",
      "Choosing key features": "Work through Data Selection, then the Overview Masterclass.",
      "Writing overviews": "The Overview Masterclass has patterns for every visual type.",
      "Vocabulary": "The Vocabulary Bank and the Comparison / Approximation skills.",
      "Grammar": "Grammar for Task 1 — tenses, passive, comparatives.",
      "Organisation": "See 'Best paragraph structure' in each lesson and the four-paragraph framework.",
      "Finishing on time": "Use the Exam-Day Checklist and keep Task 1 to 19 minutes."
    };
    return map[w] || "Work through Fundamentals, then the Overview Masterclass.";
  }
  function recommendNext(map) {
    for (var i = 0; i < LESSON_ORDER.length; i++) {
      var s = LESSON_ORDER[i];
      if (!(map[s] && map[s].completed)) return s;
    }
    return "mixed-charts";
  }

  /* -------------------- BAND DESCRIPTORS -------------------- */
  function bandDescriptors(v) {
    var b = C.bands;
    var crit = b.criteria.map(function (c) {
      var rows = ["5", "6", "7", "8", "9"].map(function (lv) {
        return "<tr><th>Band " + lv + "</th><td>" + esc(c.levels[lv]) + "</td></tr>";
      }).join("");
      return "<h3 style=\"margin:1.8rem 0 .6rem\">" + esc(c.name) + "</h3>" +
        '<div class="table-wrap"><table class="data">' + rows + "</table></div>";
    }).join("");

    var cmp = b.compare.map(function (r) {
      return "<tr><th>" + esc(r.dimension) + "</th><td>" + esc(r.b6) + "</td><td>" + esc(r.b7) + "</td><td>" + esc(r.b8) + "</td></tr>";
    }).join("");

    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Reference</span><h1>Band descriptors</h1>' +
      '<p class="lede">A student-friendly picture of what each band looks like across the four assessed criteria.</p></header>' +
      '<div class="callout callout--remember"><span class="label">Important</span><p>' + esc(b.disclaimer) + "</p></div>" +
      "<h2 style=\"margin:2rem 0 1rem\">Band 6 → 7 → 8+ at a glance</h2>" +
      '<div class="table-wrap"><table class="data"><tr><th>Dimension</th><th>Band 6</th><th>Band 7</th><th>Band 8+</th></tr>' + cmp + "</table></div>" +
      "<h2 style=\"margin:2.5rem 0 .5rem\">The four criteria in detail</h2>" +
      crit;
  }

  /* -------------------- COMMON MISTAKES -------------------- */
  function commonMistakes(v) {
    var tags = {};
    C.mistakes.forEach(function (m) { (m.tags || []).forEach(function (t) { tags[t] = 1; }); });
    var tagBtns = ['<button aria-pressed="true" data-tag="all">All</button>']
      .concat(Object.keys(tags).map(function (t) { return '<button aria-pressed="false" data-tag="' + esc(t) + '">' + esc(t) + "</button>"; }))
      .join("");

    var cards = C.mistakes.map(function (m) {
      return '<div class="card mistake-card" data-tags="' + esc((m.tags || []).join("|")) + '" style="margin-bottom:1rem">' +
        '<span class="pill pill--diff">' + esc((m.tags || [])[0] || "") + "</span>" +
        "<h4 style=\"margin:.6rem 0 .4rem\">" + esc(m.title) + "</h4>" +
        '<p><strong>Why it hurts:</strong> ' + esc(m.why) + "</p>" +
        '<p class="ex ex--no">' + esc(m.wrong) + "</p>" +
        '<p class="ex ex--yes">' + esc(m.better) + "</p>" +
        '<p class="small"><strong>Rule to remember:</strong> ' + esc(m.rule) + "</p>" +
        "</div>";
    }).join("");

    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Reference</span><h1>Common mistakes</h1>' +
      '<p class="lede">' + C.mistakes.length + ' errors that cost marks, each with the fix and a rule to remember.</p></header>' +
      '<div class="tag-filter" id="mtags">' + tagBtns + "</div>" +
      "<div id=\"mlist\">" + cards + "</div>";

    var list = $("mlist");
    $("mtags").addEventListener("click", function (e) {
      var btn = e.target.closest("button"); if (!btn) return;
      $("mtags").querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      var tag = btn.getAttribute("data-tag");
      list.querySelectorAll(".mistake-card").forEach(function (c) {
        c.style.display = (tag === "all" || c.getAttribute("data-tags").split("|").indexOf(tag) !== -1) ? "" : "none";
      });
    });
  }

  /* -------------------- CHECKLIST -------------------- */
  function checklist(v) {
    var ck = C.checklist;
    function block(title, items) {
      return "<h3 style=\"margin:1.6rem 0 .6rem\">" + title + "</h3><ul class=\"check\">" +
        items.map(function (i) { return "<li><label><input type=\"checkbox\"> " + esc(i) + "</label></li>"; }).join("") + "</ul>";
    }
    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Reference</span><h1>Exam-day checklist</h1>' +
      '<p class="lede">Run this in your head before, during and after writing. Ticks are just for on-screen practice — they are not saved.</p></header>' +
      "<style>.check{list-style:none;padding:0;max-width:60ch}.check li{margin:.5rem 0}.check label{display:flex;gap:.6rem;align-items:flex-start;cursor:pointer}.check input{margin-top:.35rem}</style>" +
      block("Before you write", ck.before) +
      block("While you write", ck.during) +
      block("Before you finish", ck.after) +
      '<div class="callout callout--rule" style="margin-top:2rem"><span class="label">Ten golden rules</span><ol style="margin:.3rem 0 0">' +
        C.goldenRules.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol></div>";
  }

  /* -------------------- VOCABULARY -------------------- */
  function vocabulary(v) {
    var items = C.vocab || [];
    var cats = items.reduce(function (a, x) { a[x.category] = 1; return a; }, {});
    var catBtns = ['<button aria-pressed="true" data-cat="all">All (' + items.length + ")</button>"]
      .concat(Object.keys(cats).sort().map(function (c) { return '<button aria-pressed="false" data-cat="' + esc(c) + '">' + esc(c) + "</button>"; }))
      .join("");

    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Master skill</span><h1>Vocabulary bank</h1>' +
      '<p class="lede">' + items.length + ' data-description items, grouped by function. Each shows the pattern, an example, a common error and its register.</p></header>' +
      '<label class="visually-hidden" for="vq">Search vocabulary</label>' +
      '<input type="search" id="vq" placeholder="Search term, meaning or example…" style="width:100%;max-width:420px;padding:.6rem .7rem;border:1px solid var(--rule);border-radius:var(--radius);font-family:var(--f-ui);margin-bottom:1rem">' +
      '<div class="tag-filter" id="vcats">' + catBtns + "</div>" +
      '<p class="small muted" id="vcount"></p>' +
      '<div id="vlist" class="stack"></div>';

    function card(x) {
      return '<div class="card vitem" data-cat="' + esc(x.category) + '" data-text="' + esc((x.term + " " + x.pattern + " " + x.example).toLowerCase()) + '">' +
        '<div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:baseline">' +
          "<h4>" + esc(x.term) + '</h4><span class="pill">' + esc(x.category) + "</span></div>" +
        '<p class="small muted">' + esc(x.pos) + " &middot; " + esc(x.formality) + " &middot; " + esc((x.types || []).join(", ")) + "</p>" +
        "<p><strong>Pattern:</strong> " + esc(x.pattern) + "</p>" +
        '<p class="ex ex--yes">' + esc(x.example) + "</p>" +
        (x.mistake && x.mistake !== "—" ? '<p class="ex ex--no">Watch out: ' + esc(x.mistake) + "</p>" : "") +
        "</div>";
    }
    var list = $("vlist"), count = $("vcount");
    function apply() {
      var cat = $("vcats").querySelector('[aria-pressed="true"]').getAttribute("data-cat");
      var q = $("vq").value.trim().toLowerCase();
      var shown = 0;
      list.querySelectorAll(".vitem").forEach(function (c) {
        var ok = (cat === "all" || c.getAttribute("data-cat") === cat) &&
          (!q || c.getAttribute("data-text").indexOf(q) !== -1);
        c.style.display = ok ? "" : "none";
        if (ok) shown++;
      });
      count.textContent = shown + " shown";
    }
    list.innerHTML = items.map(card).join("");
    $("vcats").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      $("vcats").querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true"); apply();
    });
    $("vq").addEventListener("input", apply);
    apply();
  }

  /* -------------------- REVISION MODE -------------------- */
  function revision(v) {
    function acc(title, inner) {
      return "<details class=\"card\" style=\"margin-bottom:.8rem\"><summary style=\"cursor:pointer;font-family:var(--f-ui);font-weight:600\">" + esc(title) + "</summary><div style=\"margin-top:.8rem\">" + inner + "</div></details>";
    }
    var trendVocab = (C.vocab || []).filter(function (x) { return ["Increase", "Decrease", "Stability", "Fluctuation", "Peaks"].indexOf(x.category) !== -1; })
      .map(function (x) { return "<li><strong>" + esc(x.term) + "</strong> — " + esc(x.pattern) + "</li>"; }).join("");
    var mapVocab = (C.vocab || []).filter(function (x) { return x.category === "Maps"; })
      .map(function (x) { return "<li><strong>" + esc(x.term) + "</strong> — " + esc(x.example) + "</li>"; }).join("");
    var procVocab = (C.vocab || []).filter(function (x) { return ["Processes", "Sequencing"].indexOf(x.category) !== -1; })
      .map(function (x) { return "<li><strong>" + esc(x.term) + "</strong> — " + esc(x.example) + "</li>"; }).join("");
    var cmpVocab = (C.vocab || []).filter(function (x) { return x.category === "Comparison"; })
      .map(function (x) { return "<li><strong>" + esc(x.term) + "</strong> — " + esc(x.pattern) + "</li>"; }).join("");
    var errs = (C.mistakes || []).slice(0, 10).map(function (m) { return "<li><strong>" + esc(m.title) + "</strong> → " + esc(m.rule) + "</li>"; }).join("");

    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Reference</span><h1>Revision mode</h1>' +
      '<p class="lede">Fast, scannable summaries for the day before the exam.</p></header>' +
      acc("10 golden rules", "<ol>" + (C.goldenRules || []).map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol>") +
      acc("Four-paragraph structure", "<ol><li><strong>Introduction</strong> — paraphrase the prompt.</li><li><strong>Overview</strong> — 2–4 general features, no data.</li><li><strong>Body 1</strong> — first logical group, with selected figures.</li><li><strong>Body 2</strong> — second group + key comparison.</li></ol><p class=\"small muted\">Maps: organise by area. Processes: organise by stage order.</p>") +
      acc("Overview cheat sheet", "<ul><li><strong>Trend charts:</strong> overall direction + biggest mover + crossover.</li><li><strong>Static charts:</strong> highest + lowest + overall spread.</li><li><strong>Maps:</strong> overall change in character + what stayed.</li><li><strong>Processes:</strong> number of stages + start + end + linear/cyclical.</li></ul>") +
      acc("Trend vocabulary", "<ul>" + trendVocab + "</ul>") +
      acc("Comparison structures", "<ul>" + cmpVocab + "</ul>") +
      acc("Map vocabulary", "<ul>" + mapVocab + "</ul>") +
      acc("Process vocabulary", "<ul>" + procVocab + "</ul>") +
      acc("Most common errors", "<ul>" + errs + "</ul>") +
      acc("Band 7+ checklist", "<ul><li>Clear, separate overview naming the main features.</li><li>Key features selected and supported with approximated data.</li><li>Each paragraph has one focus.</li><li>Verb and noun trend forms; accurate collocation.</li><li>Varied complex structures; many error-free sentences.</li><li>Consistent tense; correct units.</li></ul>") +
      acc("5-minute review", "<p>1) Name the six visual types and their overview pattern. 2) Convert 49%, 32%, 76% to fractions. 3) Turn 'sales rose sharply' into a noun phrase. 4) Passive: 'they demolished the mill'. 5) Fix 'increased with 20%'. 6) When do you stop Task 1? (~19 min.)</p>");
  }

  /* -------------------- PROGRESS -------------------- */
  function progress(v) {
    var m = mastery();
    var map = {}; try { map = S.lessonMap(); } catch (e) {}
    var qz = {}; try { qz = S.quizzes(); } catch (e) {}
    var fc = {}; try { fc = (S.all().flashcards) || {}; } catch (e) {}
    var streak = { count: 0 }; try { streak = S.getStreak(); } catch (e) {}

    function row(slug, coll) {
      var d = (C[coll] || {})[slug]; if (!d) return "";
      var done = map[slug] && map[slug].completed;
      var q = d.quizId && qz[d.quizId];
      return "<tr><th>" + esc(d.title) + "</th><td>" + (done ? '<span class="pill pill--done">done</span>' : '<span class="pill">—</span>') +
        "</td><td>" + (q ? q.best + "% (" + q.attempts + (q.attempts === 1 ? " try)" : " tries)") : "—") + "</td></tr>";
    }
    var lessonRows = LESSON_ORDER.map(function (s) { return row(s, "lessons"); }).join("");
    var skillRows = SKILL_ORDER.map(function (s) { return row(s, "skills"); }).join("");
    var fcReviewed = Object.keys(fc).length;

    var weak = LESSON_ORDER.filter(function (s) {
      var d = C.lessons[s]; var q = d && d.quizId && qz[d.quizId];
      return (!map[s] || !map[s].completed) || (q && q.best < 70);
    }).map(function (s) { return C.lessons[s].title; });

    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">My study</span><h1>Progress</h1>' +
      '<p class="lede">Everything is stored in this browser only. Clearing site data resets it.</p></header>' +
      '<div class="grid three" style="margin-bottom:2rem">' +
        '<div class="stat"><b>' + m.pct + '%</b><span>overall mastery</span></div>' +
        '<div class="stat"><b>' + streak.count + '</b><span>day streak</span></div>' +
        '<div class="stat"><b>' + fcReviewed + '</b><span>flashcards reviewed</span></div>' +
      "</div>" +
      (weak.length ? '<div class="callout callout--remember"><span class="label">Weak areas</span><p>' + esc(weak.join(", ")) + "</p></div>" : '<div class="callout callout--tip"><span class="label">Nice work</span><p>No weak areas flagged — every module is complete with solid quiz scores.</p></div>') +
      "<h3 style=\"margin:2rem 0 .8rem\">Question-type lessons</h3>" +
      '<div class="table-wrap"><table class="data"><tr><th>Lesson</th><th>Status</th><th>Best quiz</th></tr>' + lessonRows + "</table></div>" +
      "<h3 style=\"margin:2rem 0 .8rem\">Master skills</h3>" +
      '<div class="table-wrap"><table class="data"><tr><th>Skill</th><th>Status</th><th>Best quiz</th></tr>' + skillRows + "</table></div>" +
      '<div class="btn-row"><button class="btn btn--ghost" id="reset">Reset all progress</button></div>';

    $("reset").addEventListener("click", function () {
      if (confirm("Reset all progress, bookmarks and notes? This cannot be undone.")) { try { S.reset(); } catch (e) {} location.reload(); }
    });
  }

  /* -------------------- BOOKMARKS -------------------- */
  function bookmarks(v) {
    var bm = []; try { bm = S.bookmarks(); } catch (e) {}
    var items = bm.map(function (slug) {
      var d = (C.lessons && C.lessons[slug]) || (C.skills && C.skills[slug]);
      var href = C.lessons && C.lessons[slug] ? lessonHref(slug) : skillHref(slug);
      if (!d) return "";
      return '<a class="card card--link" href="' + up() + href + '"><h4>' + esc(d.title) + "</h4><p>" + esc(d.blurb) + "</p></a>";
    }).join("");
    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">My study</span><h1>Bookmarks</h1>' +
      '<p class="lede">Lessons and skills you flagged with the ☆ button.</p></header>' +
      (items ? '<div class="grid two">' + items + "</div>" : '<div class="callout"><p>No bookmarks yet. Open any lesson and press <strong>☆ Bookmark</strong>.</p></div>');
  }

  /* -------------------- NOTES -------------------- */
  function notes(v) {
    function draw() {
      var all = []; try { all = S.notes(); } catch (e) {}
      var list = all.map(function (n) {
        var d = (C.lessons && C.lessons[n.slug]) || (C.skills && C.skills[n.slug]);
        return '<div class="card" style="margin-bottom:.8rem"><p class="small muted">' +
          esc(d ? d.title : n.slug) + " &middot; " + new Date(n.ts).toLocaleDateString() + "</p>" +
          "<p>" + esc(n.text) + "</p>" +
          '<button class="btn btn--ghost btn--sm" data-del="' + n.id + '">Delete</button></div>';
      }).join("");
      $("nlist").innerHTML = list || '<p class="muted">No notes yet.</p>';
      $("nlist").querySelectorAll("[data-del]").forEach(function (b) {
        b.addEventListener("click", function () { try { S.deleteNote(b.getAttribute("data-del")); } catch (e) {} draw(); });
      });
    }
    var opts = ["general"].concat(LESSON_ORDER).concat(SKILL_ORDER).map(function (s) {
      var d = C.lessons && C.lessons[s] || C.skills && C.skills[s];
      return '<option value="' + s + '">' + esc(s === "general" ? "General" : (d ? d.title : s)) + "</option>";
    }).join("");
    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">My study</span><h1>Notes</h1>' +
      '<p class="lede">Personal notes, saved in this browser.</p></header>' +
      '<div class="card" style="margin-bottom:1.5rem"><label class="small" for="nslug">Topic</label><br>' +
      '<select id="nslug" style="padding:.5rem;border:1px solid var(--rule);border-radius:var(--radius);margin:.4rem 0 .8rem">' + opts + "</select>" +
      '<textarea class="workspace" id="ntext" placeholder="Write a note…"></textarea>' +
      '<div class="btn-row"><button class="btn" id="nadd">Save note</button></div></div>' +
      '<div id="nlist"></div>';
    $("nadd").addEventListener("click", function () {
      var t = $("ntext").value.trim(); if (!t) return;
      try { S.addNote($("nslug").value, t); } catch (e) {}
      $("ntext").value = ""; draw();
    });
    draw();
  }

  /* -------------------- SEARCH -------------------- */
  function search(v) {
    var q = (new URLSearchParams(location.search).get("q") || "").trim();
    var idx = buildIndex();
    v.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Search</span><h1>Search</h1></header>' +
      '<input type="search" id="sq" value="' + esc(q) + '" placeholder="overview, fluctuate, twice as high, passive voice…" style="width:100%;max-width:480px;padding:.65rem .8rem;border:1px solid var(--rule);border-radius:var(--radius);font-family:var(--f-ui);margin-bottom:1.2rem">' +
      '<div id="sresults"></div>';
    function run() {
      var term = $("sq").value.trim().toLowerCase();
      if (!term) { $("sresults").innerHTML = '<p class="muted">Type at least two characters.</p>'; return; }
      var hits = idx.filter(function (r) { return r.text.indexOf(term) !== -1; }).slice(0, 40);
      $("sresults").innerHTML = hits.length
        ? hits.map(function (r) { return '<a class="card card--link" href="' + up() + r.href + '" style="margin-bottom:.7rem"><span class="kicker">' + esc(r.kind) + "</span><h4>" + esc(r.title) + "</h4><p>" + esc(r.snippet) + "</p></a>"; }).join("")
        : '<p class="muted">No matches for “' + esc(term) + "”.</p>";
    }
    $("sq").addEventListener("input", run);
    run();
  }

  function buildIndex() {
    var out = [];
    Object.keys(C.lessons || {}).forEach(function (slug) {
      var d = C.lessons[slug];
      out.push({ kind: "Lesson", title: d.title, href: lessonHref(slug), snippet: d.blurb, text: (d.title + " " + d.blurb + " " + d.sections.map(function (s) { return s.h + " " + s.html; }).join(" ")).toLowerCase() });
    });
    Object.keys(C.skills || {}).forEach(function (slug) {
      var d = C.skills[slug];
      out.push({ kind: "Skill", title: d.title, href: skillHref(slug), snippet: d.blurb, text: (d.title + " " + d.blurb + " " + d.sections.map(function (s) { return s.h + " " + s.html; }).join(" ")).toLowerCase() });
    });
    (C.vocab || []).forEach(function (x) {
      out.push({ kind: "Vocabulary", title: x.term, href: "skills/vocabulary.html", snippet: x.pattern + " — " + x.example, text: (x.term + " " + x.pattern + " " + x.example + " " + x.category + " " + x.mistake).toLowerCase() });
    });
    (C.mistakes || []).forEach(function (m) {
      out.push({ kind: "Common mistake", title: m.title, href: "reference/reference.html?v=common-mistakes", snippet: m.rule, text: (m.title + " " + m.why + " " + m.wrong + " " + m.better + " " + m.rule).toLowerCase() });
    });
    return out;
  }

  var VIEWS = {
    dashboard: dashboard, "band-descriptors": bandDescriptors, "common-mistakes": commonMistakes,
    checklist: checklist, vocabulary: vocabulary, revision: revision, progress: progress,
    bookmarks: bookmarks, notes: notes, search: search
  };

  function boot() {
    var view = document.body.getAttribute("data-view") ||
      new URLSearchParams(location.search).get("v");
    var mountEl = $("view");
    if (!view || !mountEl || !VIEWS[view]) return;
    try { S.touchStreak(); } catch (e) {}
    VIEWS[view](mountEl);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
