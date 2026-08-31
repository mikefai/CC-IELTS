/* ============================================================
   IELTS Task 1 Mastery — Planning Trainer
   Page: practice/planner.html  with  <div id="planner"></div>
   Student fills 9 analysis fields, then reveals the expert plan.
   ============================================================ */
(function () {
  "use strict";
  var P = (window.IT1M && window.IT1M.planner) || [];
  var FIELDS = (window.IT1M && window.IT1M.planFields) || [];
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  function boot() {
    var host = $("planner");
    if (!host) return;
    var qs = new URLSearchParams(location.search);
    var idx = Math.max(0, P.findIndex(function (p) { return p.id === qs.get("s"); }));
    if (idx < 0) idx = 0;
    render(host, idx);
  }

  function render(host, idx) {
    var sc = P[idx];
    var nav = P.map(function (p, i) {
      return '<a class="btn btn--sm ' + (i === idx ? "" : "btn--ghost") + '" href="?s=' + p.id + '">' + esc(p.type) + "</a>";
    }).join(" ");

    host.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Practice</span><h1>Planning Trainer</h1>' +
      '<p class="lede">Analyse the visual in nine fields. Then reveal an expert plan and compare.</p>' +
      '<div class="btn-row">' + nav + "</div></header>" +
      '<div class="card" style="margin-bottom:1.4rem"><h4>Prompt</h4><p>' + esc(sc.prompt) + "</p>" +
      '<div id="p-chart" style="margin-top:1rem"></div></div>' +
      '<form id="p-form">' +
      FIELDS.map(function (f) {
        return '<label style="display:block;margin:.9rem 0"><span class="small" style="font-family:var(--f-ui);font-weight:600">' + esc(f.label) + "</span>" +
          '<textarea class="workspace" style="min-height:52px" name="' + f.key + '"></textarea></label>';
      }).join("") +
      '<div class="btn-row"><button type="button" class="btn" id="p-reveal">Reveal expert plan</button>' +
      '<button type="reset" class="btn btn--ghost">Clear</button></div></form>' +
      '<div id="p-expert" style="margin-top:1.5rem"></div>';

    if (sc.chart && window.IT1MChart && window.IT1MChart[sc.chart.type]) {
      window.IT1MChart[sc.chart.type]($("p-chart"), sc.chart.cfg);
    }

    $("p-reveal").addEventListener("click", function () {
      var form = $("p-form");
      var rows = FIELDS.map(function (f) {
        var mine = (form.elements[f.key].value || "").trim();
        return "<tr><th>" + esc(f.label.replace(/^\d+\.\s*/, "")) + "</th><td>" +
          (mine ? esc(mine) : '<span class="muted">—</span>') + "</td><td>" + esc(sc.expertPlan[f.key] || "") + "</td></tr>";
      }).join("");
      $("p-expert").innerHTML =
        '<h3 style="margin-bottom:.8rem">Your plan vs an expert plan</h3>' +
        '<div class="table-wrap"><table class="data"><tr><th>Field</th><th>You</th><th>Expert</th></tr>' + rows + "</table></div>" +
        '<div class="callout callout--tip" style="margin-top:1rem"><span class="label">Remember</span><p>There is no single right plan — check that your overview points are general, your grouping is logical, and your figures would be selected, not listed.</p></div>';
      $("p-expert").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
