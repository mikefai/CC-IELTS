/* ============================================================
   IELTS Task 1 Mastery — global shell (sidebar + mobile nav)
   Every page includes:  <div data-shell data-depth="0|1"></div>
   data-depth = how many folders deep the page is (0 = root, 1 = /learn/..)
   Set  window.IT1M_ACTIVE = "line-graphs"  before this script to mark active link.
   ============================================================ */
(function () {
  "use strict";

  var NAV = [
    { grp: null, items: [
      { id: "dashboard", label: "Dashboard", href: "index.html" }
    ]},
    { grp: "Learn", items: [
      { id: "fundamentals", label: "Task 1 Fundamentals", href: "learn/lesson.html?slug=fundamentals" },
      { id: "line-graphs",  label: "Line Graphs",   href: "learn/lesson.html?slug=line-graphs" },
      { id: "bar-charts",   label: "Bar Charts",    href: "learn/lesson.html?slug=bar-charts" },
      { id: "pie-charts",   label: "Pie Charts",    href: "learn/lesson.html?slug=pie-charts" },
      { id: "tables",       label: "Tables",        href: "learn/lesson.html?slug=tables" },
      { id: "maps",         label: "Maps",          href: "learn/lesson.html?slug=maps" },
      { id: "processes",    label: "Processes",     href: "learn/lesson.html?slug=processes" },
      { id: "mixed-charts", label: "Mixed / Multiple Charts", href: "learn/lesson.html?slug=mixed-charts" }
    ]},
    { grp: "Master skills", items: [
      { id: "overview",        label: "Overview Masterclass",  href: "learn/lesson.html?slug=overview" },
      { id: "data-selection",  label: "Data Selection",        href: "skills/skill.html?slug=data-selection" },
      { id: "comparisons",     label: "Comparisons",           href: "skills/skill.html?slug=comparisons" },
      { id: "approximation",   label: "Approximation",         href: "skills/skill.html?slug=approximation" },
      { id: "vocabulary",      label: "Vocabulary Bank",       href: "skills/vocabulary.html" },
      { id: "grammar",         label: "Grammar for Task 1",    href: "skills/skill.html?slug=grammar" }
    ]},
    { grp: "Practice", items: [
      { id: "question-bank", label: "Question Bank",     href: "practice/question-bank.html" },
      { id: "planner",       label: "Planning Trainer",  href: "practice/planner.html" },
      { id: "quizzes",       label: "Quizzes",           href: "practice/quizzes.html" },
      { id: "flashcards",    label: "Flashcards",        href: "flashcards.html" }
    ]},
    { grp: "Reference", items: [
      { id: "band-descriptors", label: "Band Descriptors", href: "reference/reference.html?v=band-descriptors" },
      { id: "common-mistakes",  label: "Common Mistakes",  href: "reference/reference.html?v=common-mistakes" },
      { id: "checklist",        label: "Exam-Day Checklist", href: "reference/reference.html?v=checklist" },
      { id: "revision",         label: "Revision Mode",    href: "revision.html" }
    ]},
    { grp: "My study", items: [
      { id: "progress",  label: "Progress",  href: "my/my.html?v=progress" },
      { id: "bookmarks", label: "Bookmarks", href: "my/my.html?v=bookmarks" },
      { id: "notes",     label: "Notes",     href: "my/my.html?v=notes" }
    ]}
  ];

  function build() {
    var mounts = document.querySelectorAll("[data-shell]");
    if (!mounts.length) return;
    var depth = parseInt(mounts[0].getAttribute("data-depth") || "0", 10);
    var up = depth > 0 ? "../".repeat(depth) : "";
    var active = window.IT1M_ACTIVE || "";

    function link(it) {
      var cur = it.id === active ? ' aria-current="page"' : "";
      return '<a href="' + up + it.href + '"' + cur + '>' + it.label + "</a>";
    }

    var navHtml = NAV.map(function (sec) {
      var head = sec.grp ? '<li class="grp">' + sec.grp + "</li>" : "";
      return head + sec.items.map(function (it) { return "<li>" + link(it) + "</li>"; }).join("");
    }).join("");

    var last = null;
    try { last = window.IT1MStore && window.IT1MStore.lastSlug(); } catch (e) {}

    var sidenav =
      '<a class="brand" href="' + up + 'index.html"><b>IELTS Task&nbsp;1 Mastery</b><span>Academic Writing &mdash; study &amp; revision</span></a>' +
      '<form class="nav-search" role="search" action="' + up + 'search.html" method="get">' +
        '<label class="visually-hidden" for="nav-q">Search the platform</label>' +
        '<input type="search" id="nav-q" name="q" placeholder="Search lessons, vocabulary…" autocomplete="off">' +
      "</form>" +
      '<nav aria-label="Primary"><ul class="nav-list">' + navHtml + "</ul></nav>";

    var topbar =
      '<button type="button" aria-label="Open navigation menu" aria-expanded="false" data-navbtn>&#9776;&nbsp;Menu</button>' +
      '<a class="brand" href="' + up + 'index.html">IELTS Task&nbsp;1 Mastery</a>' +
      '<a class="brand" href="' + up + "learn/lesson.html?slug=" + (last || "fundamentals") + '" style="font-size:.8rem">Continue&nbsp;&rarr;</a>';

    mounts.forEach(function (m) {
      if (m.dataset.shellRole === "topbar") { m.className = "topbar"; m.innerHTML = topbar; }
      else if (m.dataset.shellRole === "sidenav") { m.className = "sidenav"; m.innerHTML = sidenav; }
    });

    // scrim for mobile
    var scrim = document.createElement("div");
    scrim.className = "nav-scrim";
    scrim.setAttribute("data-navscrim", "");
    document.body.appendChild(scrim);

    var side = document.querySelector(".sidenav");
    var btn = document.querySelector("[data-navbtn]");
    function setOpen(o) {
      if (!side) return;
      side.classList.toggle("open", o);
      scrim.classList.toggle("open", o);
      if (btn) btn.setAttribute("aria-expanded", String(o));
      if (o) { var f = side.querySelector("a,input"); if (f) f.focus(); }
    }
    if (btn) btn.addEventListener("click", function () { setOpen(!side.classList.contains("open")); });
    scrim.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
