/* ============================================================
   IELTS Task 1 Mastery — Question Bank
   Page: practice/question-bank.html  with  <div id="qbank"></div>
   ?item=qb-line-1 opens one question; otherwise a filterable list.
   ============================================================ */
(function () {
  "use strict";
  var QB = (window.IT1M && window.IT1M.questionBank) || [];
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function paras(t) { return String(t).split(/\n\n+/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""); }

  function boot() {
    var host = $("qbank");
    if (!host) return;
    var id = new URLSearchParams(location.search).get("item");
    var item = QB.filter(function (q) { return q.id === id; })[0];
    if (item) detail(host, item); else list(host);
  }

  function list(host) {
    var types = QB.reduce(function (a, q) { a[q.type] = 1; return a; }, {});
    var typeBtns = ['<button aria-pressed="true" data-type="all">All</button>']
      .concat(Object.keys(types).map(function (t) { return '<button aria-pressed="false" data-type="' + esc(t) + '">' + esc(t) + "</button>"; }))
      .join("");
    host.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Practice</span><h1>Question bank</h1>' +
      '<p class="lede">Exam-style prompts with an original visual, a planning workspace, a model plan and an annotated sample response.</p></header>' +
      '<div class="tag-filter" id="qb-types">' + typeBtns + "</div>" +
      '<div id="qb-list" class="stack"></div>';
    $("qb-list").innerHTML = QB.map(function (q) {
      return '<a class="card card--link qb-row" data-type="' + esc(q.type) + '" href="?item=' + q.id + '" style="margin-bottom:.6rem">' +
        '<span class="kicker">' + esc(q.type) + ' &middot; <span class="pill pill--diff">' + esc(q.difficulty) + "</span></span>" +
        "<h4 style=\"margin-top:.5rem\">" + esc(q.prompt) + "</h4></a>";
    }).join("");
    $("qb-types").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      $("qb-types").querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true");
      var t = b.getAttribute("data-type");
      $("qb-list").querySelectorAll(".qb-row").forEach(function (r) {
        r.style.display = (t === "all" || r.getAttribute("data-type") === t) ? "" : "none";
      });
    });
  }

  function detail(host, q) {
    host.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Question bank &middot; ' + esc(q.type) + "</span>" +
      "<h1>Practice question</h1>" +
      '<div class="meta-row"><span>Type <b>' + esc(q.type) + "</b></span><span>Level <b>" + esc(q.difficulty) + "</b></span><span>Band focus <b>" + esc(q.band) + "</b></span></div>" +
      '<div class="btn-row"><a class="btn btn--ghost" href="question-bank.html">&larr; All questions</a></div></header>' +
      '<div class="card"><h4>Task</h4><p>' + esc(q.prompt) + "</p><div id=\"qb-chart\" style=\"margin-top:1rem\"></div></div>" +
      '<section class="lsec"><h3>Your response</h3><p class="small muted">Aim for 150+ words in about 19 minutes. Nothing is saved.</p>' +
      '<textarea class="workspace" style="min-height:220px" id="qb-write"></textarea>' +
      '<p class="small muted" id="qb-wc">0 words</p></section>' +
      '<section class="lsec"><h3>Model plan</h3><details class="card"><summary style="cursor:pointer;font-weight:600;font-family:var(--f-ui)">Reveal model plan</summary><div style="margin-top:.7rem"><p>' + esc(q.modelPlan) + "</p></div></details></section>" +
      '<section class="lsec"><h3>Sample response</h3><details class="card"><summary style="cursor:pointer;font-weight:600;font-family:var(--f-ui)">Reveal sample response</summary><div style="margin-top:.7rem">' + paras(q.sampleResponse) +
      '<div class="callout callout--band" style="margin-top:1rem"><span class="label">Why it works</span><p>' + esc(q.whyItWorks) + "</p></div></div></details></section>";

    if (q.chart && window.IT1MChart && window.IT1MChart[q.chart.type]) {
      window.IT1MChart[q.chart.type]($("qb-chart"), q.chart.cfg);
    } else {
      $("qb-chart").innerHTML = '<p class="small muted">(Diagram described in the task text above.)</p>';
    }
    var ta = $("qb-write"), wc = $("qb-wc");
    ta.addEventListener("input", function () {
      var n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      wc.textContent = n + " words" + (n >= 150 ? " ✓" : n >= 130 ? " — nearly there" : "");
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
