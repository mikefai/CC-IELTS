/* ============================================================
   IELTS Task 1 Mastery — lesson page renderer
   Page contains:  <div id="lesson" data-slug="line-graphs"></div>
   Requires content-core.js (window.IT1M.lessons) + store.js
   Optional: charts.js, and per-page <script> defining IT1M_CHARTS[slug]
   ============================================================ */
(function () {
  "use strict";

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  function render() {
    var host = document.getElementById("lesson");
    if (!host) return;
    var qs = new URLSearchParams(location.search);
    var coll = host.getAttribute("data-coll") || "lessons";
    var slug = host.getAttribute("data-slug") || qs.get("slug") ||
      (coll === "skills" ? "data-selection" : "fundamentals");
    var data = window.IT1M && window.IT1M[coll] && window.IT1M[coll][slug];
    if (!data) { host.innerHTML = "<p>Content could not be loaded.</p>"; return; }
    var isSkill = coll === "skills";

    var Store = window.IT1MStore;
    try { Store.visitLesson(slug); } catch (e) {}
    try { Store.touchStreak(); } catch (e) {}

    var done = false, marked = false;
    try { done = Store.isComplete(slug); } catch (e) {}
    try { marked = Store.isBookmarked(slug); } catch (e) {}

    var toc = data.sections.map(function (s) {
      return '<li><a href="#' + s.id + '">' + esc(s.h) + "</a></li>";
    }).join("");

    var sectionsHtml = data.sections.map(function (s) {
      return '<section class="lsec" id="' + s.id + '"><h3>' + esc(s.h) + "</h3>" + s.html + "</section>";
    }).join("");

    var objectives = (data.objectives || []).map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("");

    var rules = (data.keyRules || []).map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("");
    var rulesBlock = rules ? '<div class="callout callout--rule"><span class="label">Key rules to leave with</span><ul style="margin:.3rem 0 0">' + rules + "</ul></div>" : "";

    var mistakesBlock = "";
    if (data.mistakes && data.mistakes.length) {
      mistakesBlock = '<section class="lsec" id="mistakes-summary"><h3>Common mistakes &mdash; fix list</h3>' +
        data.mistakes.map(function (m) {
          return '<div class="callout callout--mistake"><span class="label">Mistake</span>' +
            "<p><span class=\"ex ex--no\">" + esc(m.wrong) + "</span>" +
            "<span class=\"ex ex--yes\">" + esc(m.better) + "</span></p>" +
            '<p class="small"><strong>Rule:</strong> ' + esc(m.rule) + "</p></div>";
        }).join("") + "</section>";
    }

    var fcBlock = "";
    if (data.flashcards && data.flashcards.length) {
      fcBlock = '<section class="lsec" id="flashcards"><h3>Revision flashcards</h3>' +
        '<p class="small muted">Click a card to flip. ' + data.flashcards.length + ' cards from this lesson &mdash; also in the <a href="../flashcards.html">full deck</a>.</p>' +
        '<div id="fc-deck"></div>' +
        '<div class="btn-row"><button class="btn btn--ghost btn--sm" id="fc-prev">&larr; Previous</button>' +
        '<button class="btn btn--sm" id="fc-know">Knew it</button>' +
        '<button class="btn btn--ghost btn--sm" id="fc-again">Review again</button>' +
        '<button class="btn btn--ghost btn--sm" id="fc-next">Next &rarr;</button></div>' +
        '<p class="small muted" id="fc-count"></p></section>';
    }

    var nav = '<nav class="lesson-nav" aria-label="Lesson">';
    nav += data.prev
      ? '<a href="lesson.html?slug=' + data.prev + '"><span class="dir">&larr; Previous</span>' + esc(labelFor(data.prev)) + "</a>"
      : "<span></span>";
    nav += data.next
      ? '<a href="lesson.html?slug=' + data.next + '" style="text-align:right"><span class="dir">Next &rarr;</span>' + esc(labelFor(data.next)) + "</a>"
      : "<span></span>";
    nav += "</nav>";

    host.innerHTML =
      '<header class="pagehead">' +
        '<span class="eyebrow">' + esc(isSkill ? "Master skill" : (data.category || "Learn")) + " &middot; Writing Task 1</span>" +
        "<h1>" + esc(data.title) + "</h1>" +
        '<p class="lede">' + esc(data.blurb) + "</p>" +
        '<div class="meta-row">' +
          "<span>Study time <b>~" + data.est + " min</b></span>" +
          (data.difficulty ? "<span>Level <b>" + esc(data.difficulty) + "</b></span>" : "") +
          "<span>Target band <b>" + esc(data.band) + "</b></span>" +
          '<span id="l-status">' + (done ? '<span class="pill pill--done">Completed</span>' : "") + "</span>" +
        "</div>" +
        '<div class="btn-row">' +
          '<button class="btn" id="l-complete">' + (done ? "Mark as not done" : "Mark complete") + "</button>" +
          '<button class="btn btn--ghost" id="l-bookmark" aria-pressed="' + marked + '">' + (marked ? "★ Bookmarked" : "☆ Bookmark") + "</button>" +
          (data.quizId ? '<a class="btn btn--ghost" href="../practice/quizzes.html?q=' + encodeURIComponent(data.quizId) + '">Take the quiz</a>' : "") +
        "</div>" +
      "</header>" +
      (objectives ? '<div class="callout callout--tip"><span class="label">By the end of this lesson you can</span><ul style="margin:.3rem 0 0">' + objectives + "</ul></div>" : "") +
      '<nav class="toc" aria-label="On this page"><h5>On this page</h5><ol>' + toc +
        (mistakesBlock ? '<li><a href="#mistakes-summary">Common mistakes — fix list</a></li>' : "") +
        (fcBlock ? '<li><a href="#flashcards">Revision flashcards</a></li>' : "") +
      "</ol></nav>" +
      sectionsHtml +
      (rulesBlock ? '<section class="lsec">' + rulesBlock + "</section>" : "") +
      mistakesBlock +
      fcBlock +
      nav;

    wireButtons(slug, data, Store);
    if (data.flashcards && data.flashcards.length) wireDeck(data.flashcards, Store);
    wireGenericExercises(host);
    renderCharts(slug);
  }

  function labelFor(slug) {
    var d = window.IT1M.lessons[slug];
    return d ? d.title : slug;
  }

  function wireButtons(slug, data, Store) {
    var cBtn = document.getElementById("l-complete");
    var bBtn = document.getElementById("l-bookmark");
    var status = document.getElementById("l-status");
    if (cBtn) cBtn.addEventListener("click", function () {
      var now = false;
      try { now = !Store.isComplete(slug); Store.completeLesson(slug, now); } catch (e) {}
      cBtn.textContent = now ? "Mark as not done" : "Mark complete";
      if (status) status.innerHTML = now ? '<span class="pill pill--done">Completed</span>' : "";
    });
    if (bBtn) bBtn.addEventListener("click", function () {
      var on = false;
      try { on = Store.toggleBookmark(slug); } catch (e) {}
      bBtn.setAttribute("aria-pressed", String(on));
      bBtn.textContent = on ? "★ Bookmarked" : "☆ Bookmark";
    });
  }

  function wireDeck(cards, Store) {
    var i = 0, flipped = false;
    var deck = document.getElementById("fc-deck");
    var count = document.getElementById("fc-count");
    function draw() {
      var c = cards[i];
      deck.innerHTML =
        '<div class="fc' + (flipped ? " flipped" : "") + '" id="fc-card" tabindex="0" role="button" aria-label="Flashcard, click to flip">' +
          '<div class="fc-inner">' +
            '<div class="fc-face"><div><span class="small muted">Q</span><p class="term">' + esc(c.front) + "</p></div></div>" +
            '<div class="fc-face fc-back"><div><span class="small muted">A</span><p class="body">' + esc(c.back) + "</p></div></div>" +
          "</div></div>";
      var card = document.getElementById("fc-card");
      card.addEventListener("click", function () { flipped = !flipped; card.classList.toggle("flipped"); });
      card.addEventListener("keydown", function (e) { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flipped = !flipped; card.classList.toggle("flipped"); } });
      if (count) {
        var st = null; try { st = Store.cardState(c.id); } catch (e) {}
        count.textContent = "Card " + (i + 1) + " of " + cards.length + (st ? "  ·  box " + (st.bucket + 1) + "/5" : "");
      }
    }
    function move(n) { i = (i + n + cards.length) % cards.length; flipped = false; draw(); }
    document.getElementById("fc-next").addEventListener("click", function () { move(1); });
    document.getElementById("fc-prev").addEventListener("click", function () { move(-1); });
    document.getElementById("fc-know").addEventListener("click", function () { try { Store.gradeCard(cards[i].id, true); } catch (e) {} move(1); });
    document.getElementById("fc-again").addEventListener("click", function () { try { Store.gradeCard(cards[i].id, false); } catch (e) {} move(1); });
    draw();
  }

  // Any .exercise with .opt[data-correct] buttons gets generic check behaviour
  function wireGenericExercises(root) {
    root.querySelectorAll(".exercise").forEach(function (ex) {
      var opts = ex.querySelectorAll(".opt");
      var fb = ex.querySelector(".feedback");
      opts.forEach(function (o) {
        o.addEventListener("click", function () {
          if (ex.dataset.answered) return;
          ex.dataset.answered = "1";
          var correct = o.getAttribute("data-correct") === "true";
          opts.forEach(function (x) {
            if (x.getAttribute("data-correct") === "true") x.classList.add("is-correct");
          });
          if (!correct) o.classList.add("is-wrong");
          if (fb) {
            fb.classList.add("show", correct ? "ok" : "no");
            fb.textContent = (correct ? "Correct. " : "Not quite. ") + (o.getAttribute("data-explain") || fb.getAttribute("data-explain") || "");
          }
        });
      });
    });
  }

  function renderCharts(slug) {
    var reg = window.IT1M_CHARTS && window.IT1M_CHARTS[slug];
    if (!reg || !reg.length || !window.IT1MChart) return;
    var toc = document.querySelector(".toc ol");
    var anchor = document.querySelector(".lesson-nav");
    var sec = document.createElement("section");
    sec.className = "lsec";
    sec.id = "worked-visual";
    sec.innerHTML = "<h3>Worked visual</h3><p class='small muted'>An exam-style visual with original data. Try planning an overview before reading on.</p>";
    reg.forEach(function (c, i) {
      var box = document.createElement("div");
      box.id = "chart-" + slug + "-" + i;
      box.style.margin = "1.2rem 0";
      sec.appendChild(box);
      if (c.note) {
        var p = document.createElement("p");
        p.className = "ex ex--yes";
        p.textContent = c.note;
        sec.appendChild(p);
      }
    });
    if (anchor) anchor.parentNode.insertBefore(sec, anchor);
    if (toc) {
      var li = document.createElement("li");
      li.innerHTML = '<a href="#worked-visual">Worked visual</a>';
      toc.appendChild(li);
    }
    reg.forEach(function (c, i) {
      var mountEl = document.getElementById("chart-" + slug + "-" + i);
      if (mountEl && window.IT1MChart[c.type]) window.IT1MChart[c.type](mountEl, c.cfg);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
