/* ============================================================
   IELTS Task 1 Mastery — full flashcard deck
   Page: flashcards.html  with  <div id="cards"></div>
   Sources: every lesson & skill card set + auto-cards from the
   vocabulary bank. Filter by topic, shuffle, spaced repetition
   (5-box Leitner via store.js).
   ============================================================ */
(function () {
  "use strict";
  var S = window.IT1MStore;
  var C = window.IT1M || {};
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function allCards() {
    var out = [];
    Object.keys(C.lessons || {}).forEach(function (slug) {
      (C.lessons[slug].flashcards || []).forEach(function (c) { out.push({ id: c.id, front: c.front, back: c.back, topic: C.lessons[slug].title }); });
    });
    Object.keys(C.skills || {}).forEach(function (slug) {
      (C.skills[slug].flashcards || []).forEach(function (c) { out.push({ id: c.id, front: c.front, back: c.back, topic: C.skills[slug].title }); });
    });
    (C.vocab || []).forEach(function (x) {
      out.push({ id: "vc-" + x.id, front: "Use in a Task 1 sentence: <strong>" + x.term + "</strong>", back: x.pattern + " — e.g. " + x.example, topic: "Vocabulary: " + x.category });
    });
    return out;
  }

  var CARDS = allCards();
  var TOPICS = Object.keys(CARDS.reduce(function (a, c) { a[c.topic] = 1; return a; }, {})).sort();

  var deck = [], pos = 0, flipped = false, mode = "all";

  function buildDeck() {
    var pool = CARDS.slice();
    if (mode === "due") {
      pool = pool.filter(function (c) { try { return S.cardDue(c.id); } catch (e) { return true; } });
    } else if (mode !== "all") {
      pool = pool.filter(function (c) { return c.topic === mode; });
    }
    deck = shuffle(pool);
    pos = 0; flipped = false;
  }

  function boot() {
    var host = $("cards");
    if (!host) return;
    var topicOpts = ['<option value="all">All topics (' + CARDS.length + ")</option>", '<option value="due">Due for review</option>']
      .concat(TOPICS.map(function (t) { return '<option value="' + esc(t) + '">' + esc(t) + "</option>"; })).join("");
    host.innerHTML =
      '<header class="pagehead"><span class="eyebrow">Practice</span><h1>Flashcards</h1>' +
      '<p class="lede">' + CARDS.length + ' cards from every lesson, skill and the vocabulary bank. “Knew it” pushes a card to a longer interval; “Review again” resets it.</p>' +
      '<div class="btn-row"><label class="small" for="fc-topic" style="align-self:center">Deck:</label>' +
      '<select id="fc-topic" style="padding:.5rem;border:1px solid var(--rule);border-radius:var(--radius)">' + topicOpts + "</select></div></header>" +
      '<div id="fc-stage"></div>';
    $("fc-topic").addEventListener("change", function () { mode = this.value; buildDeck(); drawStage(); });
    buildDeck();
    drawStage();
  }

  function drawStage() {
    var stage = $("fc-stage");
    if (!deck.length) { stage.innerHTML = '<div class="callout"><p>No cards in this deck right now. Try “All topics”.</p></div>'; return; }
    if (pos >= deck.length) {
      stage.innerHTML = '<div class="callout callout--tip"><span class="label">Deck complete</span><p>You went through all ' + deck.length + ' cards.</p></div>' +
        '<div class="btn-row"><button class="btn" id="fc-restart">Shuffle and go again</button></div>';
      $("fc-restart").addEventListener("click", function () { buildDeck(); drawStage(); });
      return;
    }
    var c = deck[pos];
    var st = null; try { st = S.cardState(c.id); } catch (e) {}
    stage.innerHTML =
      '<p class="small muted">Card ' + (pos + 1) + " of " + deck.length + "  &middot;  " + esc(c.topic) + (st ? "  &middot;  box " + (st.bucket + 1) + "/5" : "") + "</p>" +
      '<div class="fc' + (flipped ? " flipped" : "") + '" id="fc-card" tabindex="0" role="button" aria-label="Flashcard — activate to flip">' +
        '<div class="fc-inner">' +
          '<div class="fc-face"><div><span class="small muted">PROMPT</span><p class="term">' + c.front + "</p></div></div>" +
          '<div class="fc-face fc-back"><div><span class="small muted">ANSWER</span><p class="body">' + esc(c.back) + "</p></div></div>" +
        "</div></div>" +
      '<div class="btn-row" style="justify-content:center">' +
        '<button class="btn btn--ghost" id="fc-flip">Flip</button>' +
        '<button class="btn" id="fc-know">Knew it</button>' +
        '<button class="btn btn--ghost" id="fc-again">Review again</button>' +
      "</div>";
    var card = $("fc-card");
    function flip() { flipped = !flipped; card.classList.toggle("flipped"); }
    card.addEventListener("click", flip);
    card.addEventListener("keydown", function (e) { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); } });
    $("fc-flip").addEventListener("click", flip);
    $("fc-know").addEventListener("click", function () { try { S.gradeCard(c.id, true); } catch (e) {} pos++; flipped = false; drawStage(); });
    $("fc-again").addEventListener("click", function () { try { S.gradeCard(c.id, false); } catch (e) {} pos++; flipped = false; drawStage(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
