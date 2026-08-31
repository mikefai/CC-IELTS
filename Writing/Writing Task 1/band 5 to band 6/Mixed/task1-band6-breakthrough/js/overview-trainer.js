/* ============================================================
   overview-trainer.js — Tool C: Overview Trainer
   3 mini charts drawn as inline SVG. Student writes a
   2-sentence overview; a live checklist checks:
     - no specific numbers
     - starts with "Overall"
     - mentions 2+ features (heuristic on length + trend words)
   "Show a model overview" reveals the sample answer.
   No persistence — this is quick in-class practice.
   ============================================================ */
(function () {
  "use strict";

  function whenReady(fn) { if (window.T1) fn(); else document.addEventListener("t1:ready", fn); }

  whenReady(function () {
    var T1 = window.T1, DATA = window.T1_DATA || {};
    if (!T1) return;
    var host = document.getElementById("overview-trainer"); if (!host) return;
    var charts = DATA.overviewCharts || [];

    /* ---------- SVG chart builders (return markup string) ---------- */
    function svgWrap(inner, w, h) {
      return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" xmlns="http://www.w3.org/2000/svg">' + inner + '</svg>';
    }
    function lineChart(c) {
      var W = 360, H = 220, padL = 30, padR = 12, padT = 14, padB = 26;
      var max = c.yMax || 100;
      var n = c.xLabels.length;
      function x(i) { return padL + (i / (n - 1)) * (W - padL - padR); }
      function y(v) { return padT + (1 - v / max) * (H - padT - padB); }
      var s = '<rect width="' + W + '" height="' + H + '" fill="var(--ground)"/>';
      for (var g = 0; g <= 4; g++) {
        var gy = padT + (g / 4) * (H - padT - padB);
        s += '<line x1="' + padL + '" y1="' + gy + '" x2="' + (W - padR) + '" y2="' + gy + '" stroke="var(--rule)"/>';
      }
      c.xLabels.forEach(function (lab, i) {
        s += '<text x="' + x(i) + '" y="' + (H - 8) + '" font-size="9" text-anchor="middle" fill="var(--ink-faint)">' + lab + '</text>';
      });
      c.series.forEach(function (ser) {
        var pts = ser.points.map(function (p, i) { return x(i) + "," + y(p); }).join(" ");
        s += '<polyline points="' + pts + '" fill="none" stroke="' + ser.color + '" stroke-width="2.5"/>';
        ser.points.forEach(function (p, i) { s += '<circle cx="' + x(i) + '" cy="' + y(p) + '" r="3" fill="' + ser.color + '"/>'; });
      });
      c.series.forEach(function (ser, i) {
        s += '<rect x="' + (padL + i * 90) + '" y="2" width="9" height="9" fill="' + ser.color + '"/>';
        s += '<text x="' + (padL + i * 90 + 13) + '" y="10" font-size="9" fill="var(--ink-soft)">' + ser.name + '</text>';
      });
      return svgWrap(s, W, H);
    }
    function barChart(c) {
      var W = 360, H = 220, padL = 30, padR = 12, padT = 14, padB = 34;
      var max = c.yMax || Math.max.apply(null, c.bars.map(function (b) { return b.value; }));
      var n = c.bars.length;
      var gap = (W - padL - padR) / n;
      var bw = gap * 0.6;
      function y(v) { return padT + (1 - v / max) * (H - padT - padB); }
      var s = '<rect width="' + W + '" height="' + H + '" fill="var(--ground)"/>';
      for (var g = 0; g <= 4; g++) {
        var gy = padT + (g / 4) * (H - padT - padB);
        s += '<line x1="' + padL + '" y1="' + gy + '" x2="' + (W - padR) + '" y2="' + gy + '" stroke="var(--rule)"/>';
      }
      c.bars.forEach(function (b, i) {
        var bx = padL + i * gap + (gap - bw) / 2;
        var by = y(b.value);
        s += '<rect x="' + bx + '" y="' + by + '" width="' + bw + '" height="' + (H - padB - by) + '" fill="' + b.color + '"/>';
        s += '<text x="' + (bx + bw / 2) + '" y="' + (H - 20) + '" font-size="8.5" text-anchor="middle" fill="var(--ink-faint)">' + b.name + '</text>';
      });
      return svgWrap(s, W, H);
    }
    function pieChart(c) {
      var W = 360, H = 220, cx = 120, cy = 110, r = 90;
      var total = c.slices.reduce(function (a, sl) { return a + sl.value; }, 0);
      var ang = -Math.PI / 2;
      var s = '<rect width="' + W + '" height="' + H + '" fill="var(--ground)"/>';
      c.slices.forEach(function (sl, i) {
        var frac = sl.value / total;
        var end = ang + frac * Math.PI * 2;
        var large = frac > 0.5 ? 1 : 0;
        var x1 = cx + r * Math.cos(ang), y1 = cy + r * Math.sin(ang);
        var x2 = cx + r * Math.cos(end), y2 = cy + r * Math.sin(end);
        s += '<path d="M' + cx + ',' + cy + ' L' + x1 + ',' + y1 + ' A' + r + ',' + r + ' 0 ' + large + ' 1 ' + x2 + ',' + y2 + ' Z" fill="' + sl.color + '"/>';
        s += '<rect x="245" y="' + (20 + i * 20) + '" width="10" height="10" fill="' + sl.color + '"/>';
        s += '<text x="260" y="' + (29 + i * 20) + '" font-size="9.5" fill="var(--ink-soft)">' + sl.name + '</text>';
        ang = end;
      });
      return svgWrap(s, W, H);
    }
    function buildSvg(c) {
      if (c.kind === "line") return lineChart(c);
      if (c.kind === "bar") return barChart(c);
      if (c.kind === "pie") return pieChart(c);
      return "";
    }

    /* ---------- feedback logic ---------- */
    function assess(text, c) {
      var t = (text || "").trim();
      var lower = t.toLowerCase();
      var hasNumber = /\d/.test(t);
      var startsOverall = /^overall\b/i.test(t);
      var kwHits = (c.keywords || []).filter(function (k) { return lower.indexOf(k.toLowerCase()) !== -1; }).length;
      var words = (t.match(/[^\s]+/g) || []).length;
      var twoFeatures = kwHits >= 2 || (kwHits >= 1 && words >= 14);
      return [
        { ok: t.length > 0 && !hasNumber,
          msg: hasNumber ? "Remove the figures — the overview has no small numbers." :
               (t.length === 0 ? "Write your overview first." : "No specific numbers — good, they belong in the detail paragraphs.") },
        { ok: startsOverall,
          msg: startsOverall ? "Starts with “Overall” — the examiner finds your overview instantly." : "Start the overview with “Overall, ...”." },
        { ok: twoFeatures,
          msg: twoFeatures ? "Mentions at least two main features / a comparison." : "Name at least two big-picture features (e.g. the main trend AND the highest / lowest)." }
      ];
    }

    /* ---------- render each trainer card ---------- */
    charts.forEach(function (c) {
      var card = T1.el("div", { class: "tool", id: "ovt-" + c.id });
      card.appendChild(T1.el("h4", { text: c.title }));
      var mini = T1.el("div", { class: "mini" });
      var figure = T1.el("div", { html: buildSvg(c) });
      var svgEl = figure.querySelector("svg");
      if (svgEl) svgEl.setAttribute("aria-label", "Practice chart: " + c.title);

      var right = T1.el("div", {});
      var field = T1.el("div", { class: "field" }, [
        T1.el("label", { for: "ovt-in-" + c.id, text: "Write a 2-sentence overview (no numbers):" })
      ]);
      var input = T1.el("textarea", { id: "ovt-in-" + c.id, rows: "3", placeholder: "Overall, ..." });
      field.appendChild(input);
      var fb = T1.el("ul", { class: "feedback", "aria-live": "polite" });
      var revealBtn = T1.el("button", { class: "btn btn--ghost btn--sm", type: "button", text: "Show a model overview", "aria-expanded": "false" });
      var model = T1.el("div", { class: "model-reveal card", hidden: "hidden" }, [
        T1.el("strong", { text: "Model overview" }),
        T1.el("p", { text: c.model })
      ]);

      function refresh() {
        fb.innerHTML = "";
        assess(input.value, c).forEach(function (r) {
          fb.appendChild(T1.el("li", { class: r.ok ? "pass" : "fail", text: (r.ok ? "✓ " : "✗ ") + r.msg }));
        });
      }
      input.addEventListener("input", refresh);
      revealBtn.addEventListener("click", function () {
        var open = !model.hasAttribute("hidden");
        if (open) { model.setAttribute("hidden", "hidden"); revealBtn.setAttribute("aria-expanded", "false"); revealBtn.textContent = "Show a model overview"; }
        else { model.removeAttribute("hidden"); revealBtn.setAttribute("aria-expanded", "true"); revealBtn.textContent = "Hide model overview"; }
      });
      refresh();

      right.appendChild(field);
      right.appendChild(fb);
      right.appendChild(T1.el("p", {}, [revealBtn]));
      right.appendChild(model);
      mini.appendChild(figure);
      mini.appendChild(right);
      card.appendChild(mini);
      host.appendChild(card);
    });
  });
})();
