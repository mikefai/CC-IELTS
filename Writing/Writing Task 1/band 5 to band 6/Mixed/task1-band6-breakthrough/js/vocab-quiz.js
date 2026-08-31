/* ============================================================
   vocab-quiz.js — Tool E: Vocabulary Quiz
   15 questions, question order AND option order shuffled each
   run. Immediate marking, explanation shown for every answer,
   running score. Best score (0–15) persisted.
   Key: t1bb.quiz.best  ->  integer
   ============================================================ */
(function () {
  "use strict";

  function whenReady(fn) { if (window.T1) fn(); else document.addEventListener("t1:ready", fn); }

  whenReady(function () {
    var T1 = window.T1, DATA = window.T1_DATA || {};
    if (!T1) return;
    var root = document.getElementById("tool-quiz"); if (!root) return;
    var BANK = DATA.quiz || [];
    if (!BANK.length) return;

    var BKEY = "t1bb.quiz.best";
    var startBtn = root.querySelector("#quiz-start");
    var stage = root.querySelector("#quiz-stage");
    var bestEl = root.querySelector("#quiz-best");
    if (!startBtn || !stage) return;

    function shuffle(arr) {
      var a = arr.slice();
      for (var k = a.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var tmp = a[k]; a[k] = a[j]; a[j] = tmp;
      }
      return a;
    }
    function showBest() {
      var b = T1.storage.get(BKEY, null);
      if (bestEl) bestEl.textContent = (b == null) ? "Best score: —" : ("Best score: " + b + " / " + BANK.length);
    }
    showBest();

    var order = [], idx = 0, score = 0, answered = false;

    function buildQuestion() {
      answered = false;
      var item = order[idx];
      var opts = shuffle(item.opts.map(function (text, origIndex) {
        return { text: text, correct: origIndex === item.answer };
      }));

      stage.innerHTML = "";
      stage.appendChild(T1.el("div", { class: "quiz__bar" }, [
        T1.el("span", { text: "Question " + (idx + 1) + " / " + order.length }),
        T1.el("span", { text: "Score: " + score })
      ]));
      stage.appendChild(T1.el("p", { class: "quiz__q", text: item.q }));

      var list = T1.el("ul", { class: "quiz__options" });
      var explain = T1.el("div", { class: "quiz__explain", hidden: "hidden", "aria-live": "polite" });
      var nextBtn = T1.el("button", {
        class: "btn", type: "button", hidden: "hidden",
        text: idx === order.length - 1 ? "See result" : "Next question"
      });

      opts.forEach(function (o, oi) {
        var b = T1.el("button", { type: "button", text: o.text });
        b.addEventListener("click", function () {
          if (answered) return;
          answered = true;
          var btns = list.querySelectorAll("button");
          Array.prototype.forEach.call(btns, function (x) { x.disabled = true; });
          if (o.correct) {
            b.classList.add("correct");
            score += 1;
          } else {
            b.classList.add("wrong");
            Array.prototype.forEach.call(btns, function (x, xi) {
              if (opts[xi].correct) x.classList.add("correct");
            });
          }
          explain.innerHTML = "";
          explain.appendChild(T1.el("strong", { text: o.correct ? "Correct. " : "Not quite. " }));
          explain.appendChild(document.createTextNode(item.why));
          explain.removeAttribute("hidden");
          nextBtn.removeAttribute("hidden");
          nextBtn.focus();
        });
        list.appendChild(T1.el("li", {}, [b]));
      });

      nextBtn.addEventListener("click", function () {
        idx += 1;
        if (idx < order.length) buildQuestion();
        else finish();
      });

      stage.appendChild(list);
      stage.appendChild(explain);
      stage.appendChild(T1.el("p", {}, [nextBtn]));
    }

    function finish() {
      var prevBest = T1.storage.get(BKEY, null);
      var isBest = prevBest == null || score > prevBest;
      if (isBest) T1.storage.set(BKEY, score);
      showBest();

      stage.innerHTML = "";
      stage.appendChild(T1.el("div", { class: "rubric__result" }, [
        T1.el("span", { class: "rubric__band", text: score + " / " + order.length }),
        T1.el("p", { text: isBest ? "New best score — well done." : "Keep going; your best is " + prevBest + " / " + order.length + "." })
      ]));
      var pct = Math.round((score / order.length) * 100);
      var msg = pct >= 80 ? "Strong. Your data-description vocabulary is close to Band 7."
        : pct >= 55 ? "Solid base. Re-read the Vocabulary Bank rows you missed, then try again."
        : "Work through the Vocabulary Bank section carefully before retrying — focus on trend verbs and comparison language.";
      stage.appendChild(T1.el("p", { text: msg }));
      stage.appendChild(T1.el("button", { class: "btn", type: "button", text: "Try again", onclick: start }));
    }

    function start() {
      order = shuffle(BANK);
      idx = 0; score = 0;
      startBtn.textContent = "Restart quiz";
      buildQuestion();
    }

    startBtn.addEventListener("click", start);
  });
})();
