/* ============================================================
   arena.js — Tool A: Writing Arena
   Textarea + live word counter (green at 150) + 20-minute
   countdown (5-minute warning) + structure checklist +
   save drafts to localStorage with timestamps.
   Keys: t1bb.arena.text, t1bb.arena.checks, t1bb.drafts
   Draft shape: { id:string, ts:ISO8601, words:int, text:string }
   ============================================================ */
(function () {
  "use strict";

  // run as soon as the shell (app.js) is ready — it may already be
  function whenReady(fn) { if (window.T1) fn(); else document.addEventListener("t1:ready", fn); }

  whenReady(function () {
    var T1 = window.T1; if (!T1) return;
    var root = document.getElementById("tool-arena"); if (!root) return;

    var $ = function (s) { return root.querySelector(s); };
    var ta = $("#arena-text");
    var counter = $("#arena-counter");
    var timerEl = $("#arena-timer");
    var startBtn = $("#arena-start");
    var resetBtn = $("#arena-reset");
    var saveBtn = $("#arena-save");
    var list = $("#arena-drafts");
    var checks = Array.prototype.slice.call(root.querySelectorAll(".checklist input"));
    if (!ta || !counter || !timerEl || !startBtn || !resetBtn || !saveBtn || !list) return;

    var TEXT_KEY = "t1bb.arena.text";
    var CHECK_KEY = "t1bb.arena.checks";
    var DRAFTS_KEY = "t1bb.drafts";

    /* ---------- word count ---------- */
    function countWords(s) {
      var m = (s || "").trim().match(/[^\s]+/g);
      return m ? m.length : 0;
    }
    function renderCount() {
      var n = countWords(ta.value);
      counter.textContent = n + (n === 1 ? " word" : " words");
      counter.classList.toggle("is-ok", n >= 150);
      counter.setAttribute("aria-label", n + " words. " + (n >= 150 ? "Minimum reached." : (150 - n) + " more needed."));
    }

    /* ---------- autosave current text + checklist ---------- */
    var saveDebounce = null;
    ta.addEventListener("input", function () {
      renderCount();
      clearTimeout(saveDebounce);
      saveDebounce = setTimeout(function () { T1.storage.set(TEXT_KEY, ta.value); }, 400);
    });
    ta.value = T1.storage.get(TEXT_KEY, "");
    renderCount();

    var savedChecks = T1.storage.get(CHECK_KEY, []);
    checks.forEach(function (c, i) {
      c.checked = !!savedChecks[i];
      c.addEventListener("change", function () {
        T1.storage.set(CHECK_KEY, checks.map(function (x) { return x.checked; }));
      });
    });

    /* ---------- 20-minute countdown ---------- */
    var TOTAL = 20 * 60;
    var remaining = TOTAL;
    var tick = null;
    var running = false;

    function fmt(s) {
      var m = Math.floor(s / 60), sec = s % 60;
      return m + ":" + (sec < 10 ? "0" : "") + sec;
    }
    function renderTimer() {
      timerEl.textContent = fmt(remaining);
      timerEl.classList.toggle("is-warn", remaining <= 300 && remaining > 0);
      timerEl.classList.toggle("is-done", remaining === 0);
    }
    function stopTimer() {
      running = false;
      clearInterval(tick); tick = null;
      startBtn.textContent = remaining === 0 ? "Time up" : (remaining < TOTAL ? "Resume" : "Start 20:00");
      startBtn.disabled = remaining === 0;
    }
    function startTimer() {
      if (running || remaining === 0) return;
      running = true;
      startBtn.textContent = "Pause";
      var warned = remaining <= 300;
      tick = setInterval(function () {
        remaining -= 1;
        if (!warned && remaining === 300) {
          warned = true;
          T1.toast("5 minutes left — start your last detail paragraph now.");
        }
        if (remaining <= 0) {
          remaining = 0; renderTimer(); stopTimer();
          T1.toast("Time is up. Stop writing.");
          return;
        }
        renderTimer();
      }, 1000);
    }
    startBtn.addEventListener("click", function () {
      if (running) { stopTimer(); } else { startTimer(); }
    });
    resetBtn.addEventListener("click", function () {
      clearInterval(tick); tick = null; running = false;
      remaining = TOTAL;
      renderTimer(); stopTimer();
    });
    renderTimer(); stopTimer();

    /* ---------- drafts ---------- */
    function drafts() {
      var d = T1.storage.get(DRAFTS_KEY, []);
      return Array.isArray(d) ? d : [];
    }
    function fmtWhen(iso) {
      var d = new Date(iso);
      if (isNaN(d.getTime())) return String(iso);
      return d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    function renderDrafts() {
      list.innerHTML = "";
      var all = drafts();
      if (!all.length) {
        list.appendChild(T1.el("li", { text: "No saved drafts yet." }));
        return;
      }
      all.forEach(function (d) {
        list.appendChild(T1.el("li", {}, [
          T1.el("span", { text: fmtWhen(d.ts) + " · " + d.words + " words" }),
          T1.el("span", {}, [
            T1.el("button", {
              class: "btn btn--soft btn--sm", type: "button", text: "Load",
              onclick: function () {
                ta.value = d.text; renderCount(); T1.storage.set(TEXT_KEY, d.text);
                ta.focus(); T1.toast("Draft loaded.");
              }
            }),
            document.createTextNode(" "),
            T1.el("button", {
              class: "btn btn--soft btn--sm", type: "button", text: "Delete",
              "aria-label": "Delete draft from " + fmtWhen(d.ts),
              onclick: function () {
                T1.storage.set(DRAFTS_KEY, drafts().filter(function (x) { return x.id !== d.id; }));
                renderDrafts();
              }
            })
          ])
        ]));
      });
    }
    saveBtn.addEventListener("click", function () {
      var text = ta.value.trim();
      if (!text) { T1.toast("Write something first."); return; }
      var all = drafts();
      all.unshift({
        id: "d" + Date.now() + "-" + Math.floor(Math.random() * 1e4),
        ts: new Date().toISOString(),
        words: countWords(text),
        text: text
      });
      T1.storage.set(DRAFTS_KEY, all.slice(0, 20)); // cap
      renderDrafts();
      T1.toast("Draft saved.");
    });
    renderDrafts();
  });
})();
