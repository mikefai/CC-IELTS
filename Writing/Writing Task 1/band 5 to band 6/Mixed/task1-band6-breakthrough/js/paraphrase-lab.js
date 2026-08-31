/* ============================================================
   paraphrase-lab.js — Tool D: Paraphrase Lab
   5 prompts. Student rewrites the opening sentence; "Reveal
   model" shows a paraphrase with the changed words highlighted.
   A copy-overlap check warns if 4+ words in a row match the prompt.
   Key: t1bb.plab.answers  ->  { "<index>": "<student text>" }
   ============================================================ */
(function () {
  "use strict";

  function whenReady(fn) { if (window.T1) fn(); else document.addEventListener("t1:ready", fn); }

  whenReady(function () {
    var T1 = window.T1, DATA = window.T1_DATA || {};
    if (!T1) return;
    var root = document.getElementById("tool-plab"); if (!root) return;
    var items = DATA.paraphrase || [];
    if (!items.length) return;

    var AKEY = "t1bb.plab.answers";
    var promptEl = root.querySelector("#plab-prompt");
    var input = root.querySelector("#plab-input");
    var revealBtn = root.querySelector("#plab-reveal");
    var modelEl = root.querySelector("#plab-model");
    var warnEl = root.querySelector("#plab-warn");
    var prevBtn = root.querySelector("#plab-prev");
    var nextBtn = root.querySelector("#plab-next");
    var countEl = root.querySelector("#plab-count");
    if (!promptEl || !input || !revealBtn || !modelEl || !prevBtn || !nextBtn || !countEl) return;

    var i = 0;

    function answers() {
      var a = T1.storage.get(AKEY, {});
      return (a && typeof a === "object") ? a : {};
    }
    function saveAnswer() {
      var a = answers();
      a[String(i)] = input.value;
      T1.storage.set(AKEY, a);
    }

    // longest run of consecutive prompt words reused verbatim by the student
    function longestCopiedRun(studentText, promptText) {
      var norm = function (s) { return s.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean); };
      var a = norm(studentText), b = norm(promptText);
      if (a.length < 4) return 0;
      var bJoined = " " + b.join(" ") + " ";
      var worst = 0;
      for (var k = 0; k <= a.length - 4; k++) {
        var len = 4;
        if (bJoined.indexOf(" " + a.slice(k, k + len).join(" ") + " ") === -1) continue;
        while (k + len < a.length && bJoined.indexOf(" " + a.slice(k, k + len + 1).join(" ") + " ") !== -1) len++;
        worst = Math.max(worst, len);
      }
      return worst;
    }

    function checkOverlap() {
      if (!warnEl) return;
      var n = longestCopiedRun(input.value, items[i].prompt);
      if (n >= 4) {
        warnEl.hidden = false;
        warnEl.textContent = "You have copied " + n + " words in a row from the prompt. Aim for a maximum of 3 — change the nouns and the sentence structure.";
      } else {
        warnEl.hidden = true;
      }
    }

    function buildModel(tokens) {
      modelEl.innerHTML = "";
      modelEl.appendChild(T1.el("strong", { text: "Model paraphrase (highlighted = changed):" }));
      var p = T1.el("p", {});
      (tokens || []).forEach(function (tok) {
        if (tok.chg) p.appendChild(T1.el("span", { class: "chg", text: tok.t }));
        else p.appendChild(document.createTextNode(tok.t));
      });
      modelEl.appendChild(p);
    }

    function render() {
      var it = items[i];
      promptEl.textContent = it.prompt;
      countEl.textContent = (i + 1) + " / " + items.length;
      input.value = answers()[String(i)] || "";
      modelEl.setAttribute("hidden", "hidden");
      revealBtn.setAttribute("aria-expanded", "false");
      revealBtn.textContent = "Reveal model paraphrase";
      prevBtn.disabled = i === 0;
      nextBtn.disabled = i === items.length - 1;
      checkOverlap();
    }

    input.addEventListener("input", function () { saveAnswer(); checkOverlap(); });
    revealBtn.addEventListener("click", function () {
      var open = !modelEl.hasAttribute("hidden");
      if (open) {
        modelEl.setAttribute("hidden", "hidden");
        revealBtn.setAttribute("aria-expanded", "false");
        revealBtn.textContent = "Reveal model paraphrase";
      } else {
        buildModel(items[i].model);
        modelEl.removeAttribute("hidden");
        revealBtn.setAttribute("aria-expanded", "true");
        revealBtn.textContent = "Hide model paraphrase";
      }
    });
    prevBtn.addEventListener("click", function () { if (i > 0) { i--; render(); } });
    nextBtn.addEventListener("click", function () { if (i < items.length - 1) { i++; render(); } });

    render();
  });
})();
