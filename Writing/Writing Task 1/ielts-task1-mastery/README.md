# IELTS Task 1 Mastery

A complete, self-contained study companion for **IELTS Academic Writing Task 1** —
every question type, the overview, vocabulary, grammar, band criteria, planning
practice, quizzes and spaced-repetition flashcards.

Target audience: IELTS Academic candidates (CEFR B1–C1) aiming for Band 6.5–9.0,
studying alone or with a tutor.

## Running it

No build step, no dependencies. Either:

- **Double-click `index.html`** (works offline; progress saves to that browser), or
- Serve the folder and open <http://localhost:8000>:
  ```bash
  python -m http.server 8000
  ```

Google Fonts load from the network; everything else is local. If offline, the
page falls back to Georgia / system fonts.

## What's inside

| Area | Pages |
|---|---|
| **Learn** | Fundamentals, Overview Masterclass, and 8 question-type lessons: Line Graphs, Bar Charts, Pie Charts, Tables, Maps, Processes, Mixed / Multiple Charts |
| **Master skills** | Data Selection, Comparisons, Approximation, Vocabulary Bank (~55 items), Grammar for Task 1 |
| **Practice** | Question Bank (worked prompts + annotated model answers), Planning Trainer (9-field analysis vs expert plan), Quizzes (one per module), Flashcards (whole-deck, 5-box Leitner) |
| **Reference** | Band Descriptors (student-friendly, Band 5–9 + 6/7/8+ comparison), Common Mistakes (18), Exam-Day Checklist, Revision Mode |
| **My study** | Dashboard, Progress, Bookmarks, Notes |

Every lesson follows a consistent template: what it is → what IELTS tests → how to
recognise it → first 60 seconds → what to look for → paragraph structure →
introduction / overview / detail strategy → vocabulary → grammar → common mistakes
→ Band 6 vs 7 vs 8+ → examiner checklist → mini example → worked visual → flashcards.

New strategies per lesson are capped at 3–4 (working-memory limit); deeper material
is staged across lessons.

## Architecture

```
index.html                     Dashboard (+ 20-second onboarding)
learn/lesson.html?slug=…        Single viewer for all 9 core lessons
skills/skill.html?slug=…        Single viewer for the 4 master-skill modules
skills/vocabulary.html          Searchable vocabulary bank
practice/quizzes.html?q=…       Quiz runner
practice/planner.html?s=…       Planning Trainer
practice/question-bank.html     Worked practice questions
flashcards.html                 Whole-deck flashcards
revision.html                   Revision Mode
reference/reference.html?v=…    Band descriptors / mistakes / checklist
my/my.html?v=…                  Progress / bookmarks / notes
search.html?q=…                 Global client-side search

css/tokens.css                  Design tokens (light theme only)
css/app.css                     Shell, components, print styles

js/store.js                     localStorage persistence (key: it1m.v1)
js/shell.js                     Sidebar + mobile drawer (the site map lives here)
js/content-core.js              9 lessons
js/content-skills.js            4 master skills
js/content-vocab.js             Vocabulary bank data
js/content-reference.js         Mistakes, band descriptors, checklist, golden rules
js/content-quiz.js              Quiz questions
js/content-practice.js          Planner scenarios + question bank
js/lesson.js                    Lesson / skill renderer
js/lesson-charts.js             Per-lesson worked-visual configs
js/charts.js                    Dependency-free SVG line / bar / pie / table
js/views.js                     Dashboard, reference, vocab, revision, progress, bookmarks, notes, search
js/quiz.js  planner.js  qbank.js  flashcards.js   Interactive modules
```

### Persistence (`localStorage["it1m.v1"]`)

```jsonc
{
  "onboarding": { "targetBand": "7.0", "weakness": "Writing overviews", "done": true },
  "lessons":    { "line-graphs": { "completed": true, "visitedAt": "2026-08-30T20:00:00.000Z" } },
  "streak":     { "count": 3, "lastDay": "2026-08-30" },
  "quizzes":    { "quiz-line-graphs": { "best": 83, "attempts": 2 } },
  "flashcards": { "lg-1": { "bucket": 2, "due": "2026-09-02" } },
  "bookmarks":  ["overview", "maps"],
  "notes":      [{ "id": "n…", "slug": "tables", "text": "…", "ts": "2026-08-30T20:00:00.000Z" }]
}
```

If storage is unavailable (private mode / quota), the app silently switches to an
in-memory store for the session.

## Content notes

- All charts, tables and prompts use **original synthetic data**. No copyrighted
  IELTS material is reproduced.
- The Band Descriptors page states plainly that it is a study aid and **not** the
  official IELTS band descriptors, which the test owners publish separately.
- Quiz options are shuffled on every render, so the correct-answer position is
  evenly distributed regardless of how questions were authored.
- Sample responses are illustrative; unofficial samples cannot carry a guaranteed
  band score, and the app says so.

## Extending

- **A new lesson:** add an object to `js/content-core.js` and an entry to the
  `Learn` group in `NAV` (top of `js/shell.js`).
- **A new quiz:** add `quiz-<slug>` to `js/content-quiz.js`; the lesson's
  `quizId` links it automatically.
- **More vocabulary / mistakes / questions:** append to the relevant
  `content-*.js` array — every view rebuilds from the data.

Light theme only, by workspace convention.
