/* ============================================================
   IELTS Task 1 Mastery — dependency-free SVG chart renderers
   window.IT1MChart.line / bar / pie / table  (mount, config)
   All output is inline <svg> / <table>, theme-aware via currentColor
   and CSS custom properties. Original synthetic data only.
   ============================================================ */
(function (global) {
  "use strict";

  var PALETTE = ["#33456B", "#1F7A80", "#9A6B1E", "#6D5192", "#3B7A57", "#B0413E"];
  var NS = "http://www.w3.org/2000/svg";

  function el(tag, attrs, text) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }
  function mount(target) {
    var m = typeof target === "string" ? document.querySelector(target) : target;
    if (m) m.innerHTML = "";
    return m;
  }
  function frame(w, h, title) {
    var svg = el("svg", {
      viewBox: "0 0 " + w + " " + h, width: "100%", role: "img",
      "aria-label": title || "chart", style: "max-width:100%;height:auto;font-family:var(--f-mono);"
    });
    return svg;
  }
  function caption(m, text) {
    if (!text) return;
    var c = document.createElement("p");
    c.className = "small muted";
    c.style.cssText = "font-family:var(--f-mono);margin:.4rem 0 0;text-align:center;";
    c.textContent = text;
    m.appendChild(c);
  }

  var Chart = {
    /* cfg: { title, caption, xLabels:[], series:[{name, values:[]}], yUnit } */
    line: function (target, cfg) {
      var m = mount(target); if (!m) return;
      var w = 640, h = 340, pad = { l: 52, r: 16, t: 20, b: 40 };
      var svg = frame(w, h, cfg.title || "line graph");
      var all = [].concat.apply([], cfg.series.map(function (s) { return s.values; }));
      var max = Math.max.apply(null, all), min = Math.min(0, Math.min.apply(null, all));
      var iw = w - pad.l - pad.r, ih = h - pad.t - pad.b;
      var xN = cfg.xLabels.length;
      function X(i) { return pad.l + (xN === 1 ? iw / 2 : (i / (xN - 1)) * iw); }
      function Y(v) { return pad.t + ih - ((v - min) / (max - min || 1)) * ih; }

      // gridlines + y ticks
      for (var g = 0; g <= 4; g++) {
        var yv = min + (g / 4) * (max - min);
        var yy = Y(yv);
        svg.appendChild(el("line", { x1: pad.l, y1: yy, x2: w - pad.r, y2: yy, stroke: "var(--rule)", "stroke-width": 1 }));
        svg.appendChild(el("text", { x: pad.l - 8, y: yy + 4, "text-anchor": "end", "font-size": 11, fill: "var(--ink-faint)" },
          Math.round(yv * 10) / 10));
      }
      // x labels
      cfg.xLabels.forEach(function (lab, i) {
        svg.appendChild(el("text", { x: X(i), y: h - pad.b + 18, "text-anchor": "middle", "font-size": 11, fill: "var(--ink-soft)" }, lab));
      });
      if (cfg.yUnit) svg.appendChild(el("text", { x: 12, y: pad.t + ih / 2, "font-size": 10, fill: "var(--ink-faint)", transform: "rotate(-90 12 " + (pad.t + ih / 2) + ")", "text-anchor": "middle" }, cfg.yUnit));

      // series
      cfg.series.forEach(function (s, si) {
        var col = PALETTE[si % PALETTE.length];
        var d = s.values.map(function (v, i) { return (i ? "L" : "M") + X(i) + " " + Y(v); }).join(" ");
        svg.appendChild(el("path", { d: d, fill: "none", stroke: col, "stroke-width": 2.5, "stroke-linejoin": "round" }));
        s.values.forEach(function (v, i) {
          svg.appendChild(el("circle", { cx: X(i), cy: Y(v), r: 3.2, fill: col }));
        });
      });
      m.appendChild(svg);
      legend(m, cfg.series);
      caption(m, cfg.caption);
    },

    /* cfg: { title, caption, categories:[], series:[{name, values:[]}], yUnit, stacked } */
    bar: function (target, cfg) {
      var m = mount(target); if (!m) return;
      var w = 640, h = 340, pad = { l: 52, r: 16, t: 20, b: 46 };
      var svg = frame(w, h, cfg.title || "bar chart");
      var cats = cfg.categories, series = cfg.series;
      var iw = w - pad.l - pad.r, ih = h - pad.t - pad.b;
      var max;
      if (cfg.stacked) {
        max = Math.max.apply(null, cats.map(function (_, ci) {
          return series.reduce(function (a, s) { return a + s.values[ci]; }, 0);
        }));
      } else {
        max = Math.max.apply(null, [].concat.apply([], series.map(function (s) { return s.values; })));
      }
      function Y(v) { return pad.t + ih - (v / (max || 1)) * ih; }
      var groupW = iw / cats.length;
      var innerPad = groupW * 0.18;
      var barW = cfg.stacked ? (groupW - 2 * innerPad) : (groupW - 2 * innerPad) / series.length;

      for (var g = 0; g <= 4; g++) {
        var yv = (g / 4) * max, yy = Y(yv);
        svg.appendChild(el("line", { x1: pad.l, y1: yy, x2: w - pad.r, y2: yy, stroke: "var(--rule)", "stroke-width": 1 }));
        svg.appendChild(el("text", { x: pad.l - 8, y: yy + 4, "text-anchor": "end", "font-size": 11, fill: "var(--ink-faint)" }, Math.round(yv * 10) / 10));
      }
      cats.forEach(function (cat, ci) {
        var gx = pad.l + ci * groupW + innerPad;
        var acc = 0;
        series.forEach(function (s, si) {
          var col = PALETTE[si % PALETTE.length];
          var v = s.values[ci];
          if (cfg.stacked) {
            var y0 = Y(acc), y1 = Y(acc + v);
            svg.appendChild(el("rect", { x: gx, y: y1, width: barW, height: y0 - y1, fill: col }));
            acc += v;
          } else {
            var yb = Y(v);
            svg.appendChild(el("rect", { x: gx + si * barW, y: yb, width: barW - 2, height: pad.t + ih - yb, fill: col }));
          }
        });
        svg.appendChild(el("text", { x: pad.l + ci * groupW + groupW / 2, y: h - pad.b + 18, "text-anchor": "middle", "font-size": 11, fill: "var(--ink-soft)" }, cat));
      });
      m.appendChild(svg);
      legend(m, series);
      caption(m, cfg.caption);
    },

    /* cfg: { title, caption, slices:[{name, value}] } */
    pie: function (target, cfg) {
      var m = mount(target); if (!m) return;
      var size = 320, r = 130, cx = size / 2, cy = size / 2;
      var svg = frame(size, size, cfg.title || "pie chart");
      var total = cfg.slices.reduce(function (a, s) { return a + s.value; }, 0);
      var ang = -Math.PI / 2;
      cfg.slices.forEach(function (s, i) {
        var frac = s.value / total;
        var a2 = ang + frac * 2 * Math.PI;
        var large = frac > 0.5 ? 1 : 0;
        var x1 = cx + r * Math.cos(ang), y1 = cy + r * Math.sin(ang);
        var x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
        svg.appendChild(el("path", {
          d: "M" + cx + " " + cy + " L" + x1 + " " + y1 + " A" + r + " " + r + " 0 " + large + " 1 " + x2 + " " + y2 + " Z",
          fill: PALETTE[i % PALETTE.length], stroke: "var(--surface)", "stroke-width": 2
        }));
        var mid = (ang + a2) / 2;
        var lx = cx + (r * 0.62) * Math.cos(mid), ly = cy + (r * 0.62) * Math.sin(mid);
        svg.appendChild(el("text", { x: lx, y: ly + 4, "text-anchor": "middle", "font-size": 12, fill: "#fff", "font-weight": 700 }, Math.round(frac * 100) + "%"));
        ang = a2;
      });
      m.appendChild(svg);
      legend(m, cfg.slices);
      caption(m, cfg.caption);
    },

    /* cfg: { title, caption, headers:[], rows:[[...]] } */
    table: function (target, cfg) {
      var m = mount(target); if (!m) return;
      var wrap = document.createElement("div");
      wrap.className = "table-wrap";
      var t = document.createElement("table");
      t.className = "data";
      if (cfg.caption) { var cap = document.createElement("caption"); cap.textContent = cfg.caption; t.appendChild(cap); }
      var thead = document.createElement("tr");
      cfg.headers.forEach(function (hd) { var th = document.createElement("th"); th.textContent = hd; thead.appendChild(th); });
      t.appendChild(thead);
      cfg.rows.forEach(function (r) {
        var tr = document.createElement("tr");
        r.forEach(function (c, i) {
          var cell = document.createElement(i === 0 ? "th" : "td");
          cell.textContent = c;
          tr.appendChild(cell);
        });
        t.appendChild(tr);
      });
      wrap.appendChild(t);
      m.appendChild(wrap);
    }
  };

  function legend(m, items) {
    if (!items || items.length < 2) return;
    var box = document.createElement("div");
    box.style.cssText = "display:flex;flex-wrap:wrap;gap:.4rem 1rem;justify-content:center;margin-top:.6rem;font-family:var(--f-mono);font-size:.72rem;color:var(--ink-soft);";
    items.forEach(function (it, i) {
      var s = document.createElement("span");
      s.style.cssText = "display:inline-flex;align-items:center;gap:.35rem;";
      s.innerHTML = '<i style="width:11px;height:11px;border-radius:2px;background:' + PALETTE[i % PALETTE.length] + ';display:inline-block"></i>' + (it.name || it.label || "");
      box.appendChild(s);
    });
    m.appendChild(box);
  }

  global.IT1MChart = Chart;
})(window);
