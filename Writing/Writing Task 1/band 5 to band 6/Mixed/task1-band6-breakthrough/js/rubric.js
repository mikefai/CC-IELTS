/* ============================================================
   rubric.js — Tool B: Self-Assessment Rubric
   4 sliders (Band 4–9, step 0.5) -> average rounded to the
   nearest half band -> one "do this next" tip for the lowest
   criterion. Saves each check to history and draws an inline
   SVG progress chart.
   Key: t1bb.rubric.history
   Entry: { ts:ISO8601, ta:num, cc:num, lr:num, gra:num, overall:num }
   ============================================================ */
(function () {
  "use strict";

  function whenReady(fn) { if (window.T1) fn(); else document.addEventListener("t1:ready", fn); }

  whenReady(function () {
    var T1 = window.T1, DATA = window.T1_DATA || {};
    if (!T1) return;
    var root = document.getElementById("tool-rubric"); if (!root) return;

    var HKEY = "t1bb.rubric.history";
    var CRITS = [
      { key: "ta", name: "Task Achievement" },
      { key: "cc", name: "Coherence & Cohesion" },
      { key: "lr", name: "Lexical Resource" },
      { key: "gra", name: "Grammatical Range & Accuracy" }
    ];

    var slidersWrap = root.querySelector("#rubric-sliders");
    var bandOut = root.querySelector("#rubric-band");
    var tipsWrap = root.querySelector("#rubric-tips");
    var saveBtn = root.querySelector("#rubric-save");
    var clearBtn = root.querySelector("#rubric-clear");
    var chart = root.querySelector("#rubric-chart");
    if (!slidersWrap || !bandOut || !tipsWrap || !saveBtn || !chart) return;

    /* ---------- build sliders ---------- */
    var inputs = {};
    CRITS.forEach(function (c) {
      var row = T1.el("div", { class: "slider-row" }, [
        T1.el("div", { class: "top" }, [
          T1.el("label", { for: "sl-" + c.key, text: c.name }),
          T1.el("output", { id: "out-" + c.key, for: "sl-" + c.key, text: "6.0" })
        ])
      ]);
      var input = T1.el("input", {
        type: "range", id: "sl-" + c.key, min: "4", max: "9", step: "0.5", value: "6",
        "aria-describedby": "out-" + c.key
      });
      input.addEventListener("input", function () { update(); });
      row.appendChild(input);
      slidersWrap.appendChild(row);
      inputs[c.key] = input;
    });

    function roundHalf(n) { return Math.round(n * 2) / 2; }

    function current() {
      var o = {};
      CRITS.forEach(function (c) { o[c.key] = parseFloat(inputs[c.key].value); });
      return o;
    }

    function update() {
      var s = current();
      CRITS.forEach(function (c) {
        var out = root.querySelector("#out-" + c.key);
        if (out) out.textContent = s[c.key].toFixed(1);
      });
      var avg = (s.ta + s.cc + s.lr + s.gra) / 4;
      var band = roundHalf(avg);
      bandOut.textContent = band.toFixed(1);
      bandOut.setAttribute("aria-label", "Estimated overall band " + band.toFixed(1));

      // lowest criterion -> its tip (ties resolve to official order)
      var lowest = CRITS[0].key, lowVal = s[CRITS[0].key];
      CRITS.forEach(function (c) { if (s[c.key] < lowVal) { lowVal = s[c.key]; lowest = c.key; } });

      tipsWrap.innerHTML = "";
      var lowName = CRITS.filter(function (c) { return c.key === lowest; })[0].name;
      var tipText = (DATA.rubricTips && DATA.rubricTips[lowName]) || "Keep practising this criterion.";
      tipsWrap.appendChild(T1.el("div", { class: "tip" }, [
        T1.el("strong", { text: "Weakest area: " + lowName + " (" + lowVal.toFixed(1) + "). Do this next — " }),
        document.createTextNode(tipText)
      ]));

      var sorted = CRITS.slice().sort(function (a, b) { return s[a.key] - s[b.key]; });
      if (sorted[1] && sorted[1].key !== lowest && s[sorted[1].key] - lowVal <= 0.5) {
        var n2 = sorted[1].name;
        var t2 = (DATA.rubricTips && DATA.rubricTips[n2]) || "";
        if (t2) tipsWrap.appendChild(T1.el("div", { class: "tip" }, [
          T1.el("strong", { text: "Then: " + n2 + " — " }), document.createTextNode(t2)
        ]));
      }
    }

    /* ---------- history + chart ---------- */
    function history() {
      var h = T1.storage.get(HKEY, []);
      return Array.isArray(h) ? h : [];
    }
    function drawChart() {
      var h = history();
      var W = 640, H = 220, padL = 34, padR = 12, padT = 12, padB = 26;
      var lo = 4, hi = 9;
      function x(i, n) { return padL + (n <= 1 ? 0 : (i / (n - 1)) * (W - padL - padR)); }
      function y(v) { return padT + (1 - (v - lo) / (hi - lo)) * (H - padT - padB); }

      var parts = [];
      parts.push('<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="var(--ground)"/>');
      for (var b = lo; b <= hi; b++) {
        parts.push('<line x1="' + padL + '" y1="' + y(b) + '" x2="' + (W - padR) + '" y2="' + y(b) + '" stroke="var(--rule)" stroke-width="1"/>');
        parts.push('<text x="' + (padL - 6) + '" y="' + (y(b) + 4) + '" text-anchor="end" font-size="11" fill="var(--ink-faint)">' + b + '</text>');
      }
      if (h.length === 0) {
        parts.push('<text x="' + (W / 2) + '" y="' + (H / 2) + '" text-anchor="middle" font-size="13" fill="var(--ink-faint)">Save a self-assessment to start your progress line.</text>');
      } else {
        var pts = h.map(function (e, i) { return x(i, h.length) + "," + y(e.overall); });
        parts.push('<polyline points="' + pts.join(" ") + '" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>');
        h.forEach(function (e, i) {
          parts.push('<circle cx="' + x(i, h.length) + '" cy="' + y(e.overall) + '" r="4" fill="var(--accent)"><title>' + e.overall.toFixed(1) + '</title></circle>');
        });
        var f = new Date(h[0].ts), l = new Date(h[h.length - 1].ts);
        if (!isNaN(f.getTime())) parts.push('<text x="' + padL + '" y="' + (H - 8) + '" font-size="10" fill="var(--ink-faint)">' + f.toLocaleDateString() + '</text>');
        if (h.length > 1 && !isNaN(l.getTime())) parts.push('<text x="' + (W - padR) + '" y="' + (H - 8) + '" text-anchor="end" font-size="10" fill="var(--ink-faint)">' + l.toLocaleDateString() + '</text>');
      }
      chart.setAttribute("viewBox", "0 0 " + W + " " + H);
      chart.innerHTML = parts.join("");
    }

    saveBtn.addEventListener("click", function () {
      var s = current();
      var overall = Math.round(((s.ta + s.cc + s.lr + s.gra) / 4) * 2) / 2;
      var h = history();
      h.push({ ts: new Date().toISOString(), ta: s.ta, cc: s.cc, lr: s.lr, gra: s.gra, overall: overall });
      T1.storage.set(HKEY, h.slice(-30));
      drawChart();
      T1.toast("Saved. Overall band " + overall.toFixed(1) + ".");
    });
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        T1.storage.remove(HKEY);
        drawChart();
        T1.toast("Progress history cleared.");
      });
    }

    update();
    drawChart();
  });
})();
