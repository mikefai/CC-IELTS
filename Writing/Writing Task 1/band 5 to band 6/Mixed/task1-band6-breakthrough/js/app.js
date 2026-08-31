/* ============================================================
   app.js — shell + all non-tool interactivity.
   Renders the data-driven content sections and wires up:
   theme toggle, mobile nav, scroll-spy, question-type tabs,
   vocabulary bank (filter + copy-on-click), 7-sins accordion,
   Band 6 vs 8 toggle, teacher mode.
   Exposes window.T1 = { storage, toast, el, ... } for tool scripts.
   ============================================================ */
(function (global) {
  "use strict";

  var DATA = global.T1_DATA || {};

  /* ---------- tiny DOM helpers ---------- */
  function el(tag, attrs, kids) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k.slice(0, 2) === "on" && typeof attrs[k] === "function") {
          node.addEventListener(k.slice(2), attrs[k]);
        } else if (attrs[k] != null) node.setAttribute(k, attrs[k]);
      });
    }
    (kids || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- safe localStorage wrapper (shared) ---------- */
  var memFallback = {};
  var storage = {
    get: function (key, dflt) {
      try {
        var raw = global.localStorage.getItem(key);
        return raw == null ? dflt : JSON.parse(raw);
      } catch (e) {
        return (key in memFallback) ? memFallback[key] : dflt;
      }
    },
    set: function (key, val) {
      try {
        global.localStorage.setItem(key, JSON.stringify(val));
      } catch (e) {
        memFallback[key] = val; // private mode / quota — degrade quietly
      }
    },
    remove: function (key) {
      try { global.localStorage.removeItem(key); } catch (e) { delete memFallback[key]; }
    }
  };

  /* ---------- toast ---------- */
  var toastNode = null, toastTimer = null;
  function toast(msg) {
    if (!toastNode) {
      toastNode = el("div", { class: "toast", role: "status", "aria-live": "polite" });
      document.body.appendChild(toastNode);
    }
    toastNode.textContent = msg;
    toastNode.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastNode.classList.remove("is-visible"); }, 1800);
  }

  /* ---------- clipboard with fallback ---------- */
  function copyText(text, done) {
    done = done || function () {};
    function fallback() {
      try {
        var ta = el("textarea", { value: text });
        ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        done(true);
      } catch (e) { done(false); }
    }
    if (global.navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
    } else { fallback(); }
  }

  /* ========================================================
     THEME TOGGLE
     ======================================================== */
  var THEME_KEY = "t1bb.theme";
  function applyTheme(mode) {
    if (mode === "dark" || mode === "light") {
      document.documentElement.setAttribute("data-theme", mode);
    } else {
      document.documentElement.removeAttribute("data-theme"); // follow OS
    }
    var btn = $("#theme-toggle");
    if (btn) {
      var isDark = mode === "dark" ||
        (mode !== "light" && global.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
      btn.setAttribute("aria-pressed", String(isDark));
      var lbl = btn.querySelector(".label");
      if (lbl) lbl.textContent = isDark ? "Dark" : "Light";
    }
  }
  function initTheme() {
    var saved = storage.get(THEME_KEY, "auto");
    applyTheme(saved);
    var btn = $("#theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var cur = document.documentElement.getAttribute("data-theme");
        var next = cur === "dark" ? "light" : "dark";
        storage.set(THEME_KEY, next);
        applyTheme(next);
      });
    }
    if (global.matchMedia) {
      try {
        matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
          if (storage.get(THEME_KEY, "auto") === "auto") applyTheme("auto");
        });
      } catch (e) { /* Safari <14 */ }
    }
  }

  /* ========================================================
     MOBILE NAV + SCROLL-SPY
     ======================================================== */
  function initNav() {
    var toggle = $("#nav-toggle"), nav = $("#site-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
      });
    }
    var links = $all("#site-nav a");
    var sections = links
      .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in global)) return;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          a.toggleAttribute("aria-current", a.getAttribute("href") === "#" + en.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ========================================================
     SECTION 1 — KNOW THE BATTLEFIELD
     ======================================================== */
  function renderFacts() {
    var row = $("#fact-row");
    if (row) {
      (DATA.facts || []).forEach(function (f) {
        row.appendChild(el("div", { class: "fact" }, [
          el("strong", { text: f.big }), el("span", { text: f.label })
        ]));
      });
    }
    var grid = $("#criteria-grid");
    if (grid) {
      (DATA.criteria || []).forEach(function (c) {
        grid.appendChild(el("div", { class: "card criterion" }, [
          el("h4", {}, [document.createTextNode(c.name + " "), el("span", { class: "pct", text: c.pct })]),
          el("div", { class: "compare" }, [
            el("div", { class: "b6" }, [el("h5", { text: "Band 6 =" }), el("span", { text: c.band6 })]),
            el("div", { class: "b7" }, [el("h5", { text: "Band 7 =" }), el("span", { text: c.band7 })])
          ])
        ]));
      });
    }
    var klaxon = $("#overview-klaxon p");
    if (klaxon) klaxon.textContent = DATA.overviewRule || "";
  }

  /* ========================================================
     SECTION 2 — THE 6 QUESTION TYPES (tabs)
     ======================================================== */
  function renderQuestionTypes() {
    var list = $("#qt-tablist"), panels = $("#qt-panels");
    if (!list || !panels) return;
    (DATA.questionTypes || []).forEach(function (qt, i) {
      var tabId = "qt-tab-" + qt.id, panelId = "qt-panel-" + qt.id;
      list.appendChild(el("button", {
        class: "tabs__tab", id: tabId, role: "tab",
        "aria-selected": i === 0 ? "true" : "false",
        "aria-controls": panelId, tabindex: i === 0 ? "0" : "-1", type: "button", text: qt.name
      }));

      var panel = el("section", {
        class: "tabs__panel", id: panelId, role: "tabpanel",
        "aria-labelledby": tabId, tabindex: "0"
      }, [
        el("div", { class: "qt-grid" }, [
          el("div", {}, [
            el("h4", { text: "What it shows" }), el("p", { text: qt.shows }),
            el("h4", { text: "Look at this FIRST" }), el("p", { text: qt.first })
          ]),
          el("div", {}, [
            el("h4", { text: "Biggest traps" }),
            el("div", {}, qt.traps.map(function (t) { return el("p", { class: "trap", text: t }); })),
            el("h4", { text: qt.vocabLabel }),
            el("div", { class: "chiplist" }, qt.vocab.map(function (v) { return el("span", { class: "chip", text: v }); }))
          ])
        ])
      ]);
      if (i !== 0) panel.hidden = true;
      panels.appendChild(panel);
    });

    var tabs = $all(".tabs__tab", list);
    function select(idx) {
      tabs.forEach(function (t, j) {
        var on = j === idx;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        var p = document.getElementById(t.getAttribute("aria-controls"));
        if (p) p.hidden = !on;
      });
      tabs[idx].focus();
    }
    list.addEventListener("click", function (e) {
      var t = e.target.closest(".tabs__tab"); if (!t) return;
      select(tabs.indexOf(t));
    });
    list.addEventListener("keydown", function (e) {
      var i = tabs.indexOf(document.activeElement);
      if (i === -1) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); select((i + 1) % tabs.length); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length); }
      else if (e.key === "Home") { e.preventDefault(); select(0); }
      else if (e.key === "End") { e.preventDefault(); select(tabs.length - 1); }
    });
  }

  /* ========================================================
     SECTION 3 — THE 4-PARAGRAPH SKELETON
     ======================================================== */
  function renderSkeleton() {
    var wrap = $("#skeleton-list"); if (!wrap) return;
    (DATA.skeleton || []).forEach(function (s) {
      var isOverview = s.p === "P2";
      wrap.appendChild(el("div", { class: "para" + (isOverview ? " para--overview" : "") }, [
        s.badge ? el("span", { class: "para__badge", text: s.badge }) : null,
        el("h4", { text: s.p + " · " + s.title }),
        el("p", { class: "para__meta", text: s.words }),
        el("p", { text: s.guide }),
        el("div", { class: "sxs" }, [
          el("div", { class: "bad" }, [el("h5", { text: "Copied / mechanical" }), el("span", { text: s.copied })]),
          el("div", { class: "good" }, [el("h5", { text: "Paraphrased / selective" }), el("span", { text: s.paraphrased })])
        ])
      ]));
    });
  }

  /* ========================================================
     SECTION 4 — VOCABULARY BANK (filter + copy-on-click)
     ======================================================== */
  function renderVocab() {
    var host = $("#vocab-tables"); if (!host) return;
    var groups = (DATA.vocab && DATA.vocab.groups) || [];
    var all = groups.slice();
    if (DATA.vocab && DATA.vocab.upgrades) all.push(DATA.vocab.upgrades);

    var filterBar = $("#vocab-filters");
    if (filterBar) {
      filterBar.appendChild(el("button", { class: "filter-btn", type: "button", "aria-pressed": "true", "data-group": "all", text: "All" }));
      all.forEach(function (g) {
        filterBar.appendChild(el("button", { class: "filter-btn", type: "button", "aria-pressed": "false", "data-group": g.id, text: g.name }));
      });
    }

    all.forEach(function (g) {
      var isUpgrade = g.id === "upgrades";
      var table = el("table", { class: "vocab" + (isUpgrade ? " upgrade" : ""), "data-group": g.id }, [
        el("caption", {}, [document.createTextNode(g.name + "  "), el("span", { class: "chip", text: g.tag })]),
        el("thead", {}, [el("tr", {}, g.cols.map(function (c) { return el("th", { scope: "col", text: c }); }))]),
        el("tbody", {}, g.rows.map(function (row) {
          return el("tr", {}, row.map(function (cell, ci) {
            var cls = "copy-cell";
            if (isUpgrade && ci === 0) cls += " from";
            if (isUpgrade && ci === 1) cls += " to";
            return el("td", {
              class: cls, tabindex: "0", role: "button",
              "aria-label": "Copy: " + cell, text: cell
            });
          }));
        }))
      ]);
      host.appendChild(el("div", { class: "vtable-scroll" }, [table]));
    });

    function doCopy(td) {
      copyText(td.textContent, function (ok) {
        toast(ok ? "Copied: " + td.textContent : "Copy failed — select the text manually");
        if (ok) { td.classList.remove("copied-flash"); void td.offsetWidth; td.classList.add("copied-flash"); }
      });
    }
    host.addEventListener("click", function (e) {
      var td = e.target.closest(".copy-cell"); if (td) doCopy(td);
    });
    host.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var td = e.target.closest(".copy-cell"); if (td) { e.preventDefault(); doCopy(td); }
    });

    var search = $("#vocab-search");
    function applyFilters() {
      var q = ((search && search.value) || "").trim().toLowerCase();
      var active = "all";
      $all("#vocab-filters .filter-btn").forEach(function (b) {
        if (b.getAttribute("aria-pressed") === "true") active = b.getAttribute("data-group");
      });
      $all("table.vocab", host).forEach(function (tbl) {
        var groupOk = active === "all" || tbl.getAttribute("data-group") === active;
        var anyRow = false;
        $all("tbody tr", tbl).forEach(function (tr) {
          var hit = !q || tr.textContent.toLowerCase().indexOf(q) !== -1;
          tr.hidden = !hit;
          if (hit) anyRow = true;
        });
        var scroll = tbl.closest(".vtable-scroll");
        if (scroll) scroll.hidden = !(groupOk && anyRow);
      });
    }
    if (search) search.addEventListener("input", applyFilters);
    if (filterBar) {
      filterBar.addEventListener("click", function (e) {
        var b = e.target.closest(".filter-btn"); if (!b) return;
        $all(".filter-btn", filterBar).forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        applyFilters();
      });
    }
  }

  /* ========================================================
     SECTION 5 — THE 7 DEADLY SINS (accordion)
     ======================================================== */
  function renderSins() {
    var host = $("#sins-accordion"); if (!host) return;
    (DATA.sins || []).forEach(function (s, i) {
      var pid = "sin-panel-" + i, bid = "sin-btn-" + i;
      var btn = el("button", {
        class: "acc__btn", id: bid, type: "button",
        "aria-expanded": "false", "aria-controls": pid
      }, [
        el("span", {}, [el("span", { class: "no", text: (i + 1) + ". " }), document.createTextNode(s.habit)]),
        el("span", { class: "mark-icon", "aria-hidden": "true", text: "+" })
      ]);
      var panel = el("div", { class: "acc__panel", id: pid, role: "region", "aria-labelledby": bid }, [
        el("p", {}, [el("strong", { text: "Why it costs marks: " }), document.createTextNode(s.cost)]),
        el("div", { class: "acc__fix" }, [el("strong", { text: "The fix: " }), document.createTextNode(s.fix)])
      ]);
      panel.hidden = true;
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
      });
      host.appendChild(el("div", { class: "acc__item" }, [btn, panel]));
    });
  }

  /* ========================================================
     SECTION 6 — BAND 6 vs BAND 8
     ======================================================== */
  function renderBandCompare() {
    var bc = DATA.bandCompare; if (!bc) return;
    var taskNode = $("#bvb-task"); if (taskNode) taskNode.textContent = bc.task;
    var sixCol = $("#bvb-six"), eightCol = $("#bvb-eight");
    if (sixCol) bc.six.forEach(function (p) { sixCol.appendChild(el("p", { text: p })); });

    var noteByIndex = {};
    (bc.notes || []).forEach(function (n) { noteByIndex[n.i] = n; });

    if (eightCol) {
      bc.eight.forEach(function (p, idx) {
        var n = noteByIndex[idx];
        if (n) {
          eightCol.appendChild(el("p", {}, [
            el("span", { class: "hl", title: n.crit + " — " + n.why, text: p })
          ]));
          eightCol.appendChild(el("p", { class: "bvb__note", hidden: "hidden", "data-note": idx }, [
            el("span", { class: "crit", text: n.crit + " · " }), document.createTextNode(n.why)
          ]));
        } else {
          eightCol.appendChild(el("p", { text: p }));
        }
      });
    }
    var toggleBtn = $("#bvb-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var on = toggleBtn.getAttribute("aria-pressed") === "true";
        toggleBtn.setAttribute("aria-pressed", String(!on));
        var lbl = toggleBtn.querySelector(".label");
        if (lbl) lbl.textContent = on ? "Show what earns Band 8" : "Hide annotations";
        $all(".bvb__note").forEach(function (nd) { nd.hidden = on; });
        $all("#bvb-eight .hl").forEach(function (h) { h.style.background = on ? "transparent" : ""; });
      });
    }
  }

  /* ========================================================
     TEACHER MODE
     ======================================================== */
  var TEACHER_KEY = "t1bb.teacher";
  function initTeacherMode() {
    var body = document.body;
    var btn = $("#teacher-toggle");
    var panel = $("#teacher-panel");
    var closeBtn = $("#teacher-close");
    if (!btn || !panel) return;

    var t = DATA.teacher || {};
    var inner = $("#teacher-panel-body");
    if (inner) {
      inner.appendChild(el("p", { text: t.intro || "" }));
      inner.appendChild(el("h4", { text: "Lesson stages" }));
      var ul = el("ul", {});
      (t.stages || []).forEach(function (s) {
        ul.appendChild(el("li", {}, [el("strong", { text: s.t }), document.createTextNode(" — " + s.note)]));
      });
      inner.appendChild(ul);
      inner.appendChild(el("h4", { text: "Discussion questions" }));
      var dl = el("ul", {});
      (t.discussion || []).forEach(function (q) { dl.appendChild(el("li", { text: q })); });
      inner.appendChild(dl);
    }

    function setOpen(on) {
      body.setAttribute("data-teacher", on ? "on" : "off");
      panel.classList.toggle("is-open", on);
      btn.setAttribute("aria-pressed", String(on));
      panel.setAttribute("aria-hidden", String(!on));
      storage.set(TEACHER_KEY, on);
      if (on) { if (closeBtn) closeBtn.focus(); } else { btn.focus(); }
    }
    btn.addEventListener("click", function () { setOpen(body.getAttribute("data-teacher") !== "on"); });
    if (closeBtn) closeBtn.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && body.getAttribute("data-teacher") === "on") setOpen(false);
    });
    if (storage.get(TEACHER_KEY, false)) setOpen(true);
  }

  /* ========================================================
     BOOT
     ======================================================== */
  function boot() {
    // expose shared API BEFORE tools listen for t1:ready
    global.T1 = { storage: storage, toast: toast, el: el, $: $, $all: $all, copyText: copyText };

    initTheme();
    initNav();
    renderFacts();
    renderQuestionTypes();
    renderSkeleton();
    renderVocab();
    renderSins();
    renderBandCompare();
    initTeacherMode();

    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

    document.dispatchEvent(new CustomEvent("t1:ready"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})(window);
