/* ============================================================
   IELTS Task 1 Mastery — quiz runner
   Page: practice/quizzes.html  with  <div id="quiz"></div>
   ?q=quiz-line-graphs opens a quiz directly; otherwise a menu.
   Options are shuffled per render so the correct-answer position
   is evenly distributed (no letter-key skew).
   ============================================================ */
(function () {
  "use strict";
  var S = window.IT1MStore;
  var Q = (window.IT1M && window.IT1M.quizzes) || {};
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function menu() {
    var host = $("quiz");
    var qzState = {}; try { qzState = S.quizzes(); } catch (e) {}
    var rows = Object.keys(Q).map(function (id) {
      var qz = Q[id], st = qzState[id];
      return '<a class="card card--link" href="?q=' + encodeURIComponent(id) + '" style="margin-bottom:.7rem">' +
        '<span class="kicker">' + qz.questions.length + " questions" + (st ? " · best " + st.best + "%" : "") + "</span>" +
        "<h4>" + esc(qz.title) + "</h4></a>";
    }).join("");
    host.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Practice</span><h1>Quizzes</h1>' +
      '<p class="lede">One quiz per module. Score, corrections and explanations after each attempt.</p></header>' +
      rows;
  }

  function run(id) {
    var host = $("quiz");
    var qz = Q[id];
    if (!qz) { menu(); return; }
    var qs = qz.questions.map(function (item) {
      var pairs = item.options.map(function (o, i) { return { o: o, correct: i === item.answer }; });
      return { q: item.q, explain: item.explain, opts: shuffle(pairs) };
    });
    var answers = new Array(qs.length).fill(null);
    var i = 0;

    function draw() {
      if (i >= qs.length) return results();
      var cur = qs[i];
      host.innerHTML =
        '<header class="pagehead"><span class="eyebrow">Quiz &middot; ' + esc(qz.title) + "</span>" +
        "<h1>Question " + (i + 1) + " / " + qs.length + "</h1>" +
        '<div class="bar" style="max-width:320px"><i style="width:' + Math.round((i / qs.length) * 100) + '%"></i></div></header>' +
        '<div class="exercise"><p class="q">' + esc(cur.q) + "</p>" +
        cur.opts.map(function (p, k) { return '<button class="opt" data-k="' + k + '">' + esc(p.o) + "</button>"; }).join("") +
        '<div class="feedback"></div>' +
        '<div class="btn-row"><button class="btn" id="q-next" disabled>' + (i === qs.length - 1 ? "See results" : "Next question") + "</button>" +
        '<a class="btn btn--ghost" href="quizzes.html">Quit</a></div></div>';

      var fb = host.querySelector(".feedback");
      var nextBtn = $("q-next");
      host.querySelectorAll(".opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (answers[i] !== null) return;
          var k = +btn.getAttribute("data-k");
          answers[i] = cur.opts[k].correct;
          host.querySelectorAll(".opt").forEach(function (b, idx) {
            if (cur.opts[idx].correct) b.classList.add("is-correct");
          });
          if (!cur.opts[k].correct) btn.classList.add("is-wrong");
          fb.classList.add("show", cur.opts[k].correct ? "ok" : "no");
          fb.textContent = (cur.opts[k].correct ? "Correct. " : "Not quite. ") + cur.explain;
          nextBtn.disabled = false;
        });
      });
      nextBtn.addEventListener("click", function () { i++; draw(); });
    }

    function results() {
      var correct = answers.filter(Boolean).length;
      var pct = Math.round((correct / qs.length) * 100);
      var rec = null; try { rec = S.recordQuiz(id, pct); } catch (e) {}
      var related = qz.coll === "skills" ? "../skills/skill.html?slug=" + qz.lesson : "../learn/lesson.html?slug=" + qz.lesson;
      host.innerHTML =
        '<header class="pagehead"><span class="eyebrow">Quiz complete</span>' +
        "<h1>" + correct + " / " + qs.length + "  (" + pct + "%)</h1>" +
        '<p class="lede">' + (pct >= 80 ? "Strong — you can rely on this." : pct >= 60 ? "Solid. Review the misses below." : "Worth another pass after re-reading the lesson.") +
        (rec ? " Best so far: " + rec.best + "%." : "") + "</p></header>" +
        qs.map(function (cur, idx) {
          var right = answers[idx];
          return '<div class="callout ' + (right ? "callout--tip" : "callout--mistake") + '"><span class="label">Q' + (idx + 1) + " · " + (right ? "correct" : "review") + "</span>" +
            "<p><strong>" + esc(cur.q) + "</strong></p>" +
            "<p>Answer: " + esc(cur.opts.filter(function (p) { return p.correct; })[0].o) + "</p>" +
            '<p class="small">' + esc(cur.explain) + "</p></div>";
        }).join("") +
        '<div class="btn-row"><a class="btn" href="?q=' + encodeURIComponent(id) + '">Retry</a>' +
        '<a class="btn btn--ghost" href="' + related + '">Back to the lesson</a>' +
        '<a class="btn btn--ghost" href="quizzes.html">All quizzes</a></div>';
    }

    draw();
  }

  function boot() {
    if (!$("quiz")) return;
    var id = new URLSearchParams(location.search).get("q");
    if (id && Q[id]) run(id); else menu();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
