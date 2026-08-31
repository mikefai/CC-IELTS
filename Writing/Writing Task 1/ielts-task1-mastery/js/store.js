/* ============================================================
   IELTS Task 1 Mastery — persistence layer
   One localStorage key. Safe against private-mode / quota errors.
   ============================================================ */
(function (global) {
  "use strict";

  var KEY = "it1m.v1";

  var DEFAULT = {
    onboarding: { targetBand: null, weakness: null, done: false },
    lessons: {},          // slug -> { completed:bool, visitedAt:ISO }
    streak: { count: 0, lastDay: null },   // lastDay: "YYYY-MM-DD"
    quizzes: {},          // id -> { best:int(0-100), attempts:int }
    flashcards: {},        // id -> { bucket:0..4, due:"YYYY-MM-DD" }
    bookmarks: [],         // array of slugs
    notes: []              // { id, slug, text, ts:ISO }
  };

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function today() {
    var d = new Date();
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }
  function addDays(dateStr, n) {
    var d = dateStr ? new Date(dateStr + "T00:00:00") : new Date();
    d.setDate(d.getDate() + n);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function dayDiff(a, b) {
    return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000);
  }

  var mem = null; // in-memory fallback if storage unavailable

  function read() {
    if (mem) return mem;
    try {
      var raw = global.localStorage.getItem(KEY);
      var data = raw ? JSON.parse(raw) : clone(DEFAULT);
      // shallow-merge missing top-level keys (forward compat)
      for (var k in DEFAULT) if (!(k in data)) data[k] = clone(DEFAULT[k]);
      return data;
    } catch (e) {
      mem = clone(DEFAULT);
      return mem;
    }
  }

  function write(data) {
    if (mem) { mem = data; return; }
    try {
      global.localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      mem = data; // switch to memory mode silently
    }
  }

  var Store = {
    all: function () { return read(); },

    reset: function () {
      mem = null;
      try { global.localStorage.removeItem(KEY); } catch (e) {}
    },

    /* ---- onboarding ---- */
    getOnboarding: function () { return read().onboarding; },
    setOnboarding: function (patch) {
      var d = read();
      Object.assign(d.onboarding, patch);
      d.onboarding.done = true;
      write(d);
    },

    /* ---- streak (call once per page load) ---- */
    touchStreak: function () {
      var d = read(), t = today();
      if (d.streak.lastDay === t) return d.streak;
      if (d.streak.lastDay && dayDiff(d.streak.lastDay, t) === 1) d.streak.count += 1;
      else d.streak.count = 1;
      d.streak.lastDay = t;
      write(d);
      return d.streak;
    },
    getStreak: function () { return read().streak; },

    /* ---- lessons ---- */
    visitLesson: function (slug) {
      var d = read();
      var rec = d.lessons[slug] || { completed: false };
      rec.visitedAt = new Date().toISOString();
      d.lessons[slug] = rec;
      d.lastSlug = slug;
      write(d);
    },
    completeLesson: function (slug, val) {
      var d = read();
      var rec = d.lessons[slug] || {};
      rec.completed = val !== false;
      rec.visitedAt = rec.visitedAt || new Date().toISOString();
      d.lessons[slug] = rec;
      write(d);
    },
    isComplete: function (slug) { return !!(read().lessons[slug] && read().lessons[slug].completed); },
    lastSlug: function () { return read().lastSlug || null; },
    lessonMap: function () { return read().lessons; },

    /* ---- bookmarks ---- */
    isBookmarked: function (slug) { return read().bookmarks.indexOf(slug) !== -1; },
    toggleBookmark: function (slug) {
      var d = read(), i = d.bookmarks.indexOf(slug);
      if (i === -1) d.bookmarks.push(slug); else d.bookmarks.splice(i, 1);
      write(d);
      return d.bookmarks.indexOf(slug) !== -1;
    },
    bookmarks: function () { return read().bookmarks.slice(); },

    /* ---- notes ---- */
    notes: function (slug) {
      var n = read().notes;
      return slug ? n.filter(function (x) { return x.slug === slug; }) : n.slice();
    },
    addNote: function (slug, text) {
      var d = read();
      d.notes.unshift({ id: "n" + Date.now() + Math.floor(Math.random() * 1000), slug: slug || "general", text: text, ts: new Date().toISOString() });
      write(d);
    },
    deleteNote: function (id) {
      var d = read();
      d.notes = d.notes.filter(function (x) { return x.id !== id; });
      write(d);
    },

    /* ---- quizzes ---- */
    recordQuiz: function (id, scorePct) {
      var d = read();
      var rec = d.quizzes[id] || { best: 0, attempts: 0 };
      rec.attempts += 1;
      rec.best = Math.max(rec.best, Math.round(scorePct));
      d.quizzes[id] = rec;
      write(d);
      return rec;
    },
    quiz: function (id) { return read().quizzes[id] || null; },
    quizzes: function () { return read().quizzes; },

    /* ---- flashcards: 5-bucket Leitner ---- */
    INTERVALS: [0, 1, 3, 7, 16],
    cardDue: function (id) {
      var c = read().flashcards[id];
      if (!c) return true;
      return dayDiff(today(), c.due) <= 0;
    },
    gradeCard: function (id, knewIt) {
      var d = read();
      var c = d.flashcards[id] || { bucket: 0, due: today() };
      c.bucket = knewIt ? Math.min(4, c.bucket + 1) : 0;
      c.due = addDays(today(), Store.INTERVALS[c.bucket]);
      d.flashcards[id] = c;
      write(d);
      return c;
    },
    cardState: function (id) { return read().flashcards[id] || null; },

    /* ---- helpers exposed ---- */
    today: today
  };

  global.IT1MStore = Store;
})(window);
