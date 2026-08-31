# IELTS Task 1 Mastery — build status

## STATUS: v1 COMPLETE (2026-08-31)
All routes built and QA'd in a local server (python http.server on :8777 via
`.claude/launch.json`). No console errors on any page. Verified: onboarding,
dashboard tailoring, lesson render + worked-visual SVG charts, mark-complete +
bookmark persistence across navigation, quiz run→score→record→corrections,
flashcard flip + Leitner grade + advance, planner reveal, question-bank chart +
word counter, vocabulary filter/search, reference views, revision accordions,
progress table, bookmarks list, notes add/display/delete, global search, mobile
drawer at 375px. See "Known minor items" at the bottom.

## Known minor items (non-blocking)
- `.opt.is-correct` green tint verified correct via fresh-element test; in the
  headless preview pane `getComputedStyle` right after the class change can read the
  pre-change value (harness style-recalc timing), but a real browser paints it
  synchronously. Not a code bug.
- Skill-exercise explanation strings de-duplicated ("Correct. Correct" → fixed).
- Vocabulary bank is 57 items (README says ~55).


Vanilla static multi-page app. No build step. Light theme only.
Location: `IELTS Academic/Writing/Writing Task 1/ielts-task1-mastery/`

## Page template (every HTML file)
```html
<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>… — IELTS Task 1 Mastery</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Instrument+Serif&family=JetBrains+Mono:wght@400;500;700&family=Literata:opsz,wght@7..72,400;7..72,600&display=swap">
<link rel="stylesheet" href="{UP}css/tokens.css">
<link rel="stylesheet" href="{UP}css/app.css">
</head><body>
<a class="skip-link" href="#main">Skip to content</a>
<div data-shell data-shell-role="topbar" data-depth="{D}"></div>
<div class="app">
  <div data-shell data-shell-role="sidenav" data-depth="{D}"></div>
  <main class="main" id="main"> … </main>
</div>
<script>window.IT1M_ACTIVE="{navId}";</script>
<script src="{UP}js/store.js"></script>
<script src="{UP}js/shell.js"></script>
… page-specific scripts …
</body></html>
```
`{D}` = folder depth (0 root, 1 for learn/ skills/ reference/ practice/ my/). `{UP}` = "" or "../".

## DONE
- css/tokens.css, css/app.css  — full design system, light only
- js/store.js  — localStorage `it1m.v1`; onboarding, streak, lessons, bookmarks, notes, quizzes, Leitner flashcards
- js/shell.js  — renders topbar + sidenav on every page from NAV[] (site map lives here)
- js/content-core.js  — 9 lessons fully written: fundamentals, overview, line-graphs, bar-charts, pie-charts, tables, maps, processes, mixed-charts. Schema: {slug,title,category,est,difficulty,band,blurb,objectives[],sections[{id,h,html}],keyRules[],mistakes[{wrong,better,rule}],flashcards[{id,front,back}],quizId,prev,next}

## TODO (in order)
1. js/charts.js — dependency-free SVG line/bar/pie/table renderers: IT1MChart.line(el,cfg) etc.
2. js/lesson.js — render window.IT1M.lessons[slug] into <div id="lesson" data-slug="…">: pagehead, TOC from sections, sections, keyRules callout, mistakes, flashcard deck link, quiz link, bookmark + mark-complete buttons (Store), prev/next nav. Calls Store.visitLesson on load.
3. js/content-skills.js — window.IT1M.skills{} for: data-selection, comparisons, approximation, grammar. Same-ish schema (sections[], exercises[]).
4. js/content-vocab.js — window.IT1M.vocab = [] ~60-120 items {id,term,pos,category,pattern,example,mistake,formality,types[]}. Categories: Increase, Decrease, Stability, Fluctuation, Peaks, Comparison, Proportion, Approximation, Maps, Processes, Sequencing, Contrast, Similarity, Ranking.
5. js/content-reference.js — window.IT1M.mistakes[] (~18, {id,title,why,wrong,better,rule,tags}); window.IT1M.bands{} (criteria × Band 5-9 descriptions, student-friendly, + 6/7/8+ comparison rows); checklist data.
6. js/content-practice.js — window.IT1M.planner[] (3 scenarios: line-graph, map, mixed — each {prompt, visual cfg, fields[9], expertPlan}); window.IT1M.questionBank[] (6: {prompt,type,difficulty,band,visual,modelPlan,sampleResponse,whyItWorks}); window.IT1M.quizzes{} (one per core lesson id quiz-<slug> + quiz-fundamentals/overview, ~8 Qs, types: mcq, tf, best-overview, spot-error, order-stages, classify).
7. companions: flashcards.js, quiz.js, planner.js, dashboard.js, search.js.
8. index.html (dashboard, depth 0) + js/dashboard.js — ring mastery %, streak, continue, per-type grid, weak areas from onboarding, quick-start cards, onboarding modal (first visit).
9. learn/*.html × 9 (depth 1) — thin shells: <div id="lesson" data-slug="…"></div> + scripts (store, shell, content-core, charts, lesson).
10. skills/*.html × (data-selection, comparisons, approximation, vocabulary, grammar) depth 1.
11. reference/*.html × (band-descriptors, common-mistakes, checklist) depth 1.
12. flashcards.html (depth 0), practice/quizzes.html, practice/planner.html, practice/question-bank.html (depth 1), revision.html (depth 0), my/progress.html my/bookmarks.html my/notes.html (depth 1), search.html (depth 0).
13. README.md
14. QA in browser pane: console clean, nav active states, mobile 375px drawer, localStorage persist across reload, one quiz, flashcard grade, planner reveal, search.

## Conventions / guardrails
- Light theme only (workspace house rule; overrides the master prompt's dark mode).
- No guaranteed-band claims. Band Descriptors page states it is a study aid, not the official rubric.
- All visuals original synthetic data.
- MCQ quiz answer keys: balance letters before finalising (workspace rule).
- Cap 3–4 new strategies per lesson (done in content-core).
- Fact-forcing gate fires on each new file: give terse facts (importers / no-equivalent / schema / instruction "proceed") then retry.
