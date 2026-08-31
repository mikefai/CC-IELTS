# IELTS Academic Workspace — Conventions

Independent project within CLAUDE TEACHING. Routing from the root `CLAUDE.md`
still decides files enter here; inside, these rules govern.

**Inherits all shared quality rules from `_Shared/CLAUDE-principles.md`**
(answer-key balance check, 3–4 strategies cap, light theme only, offline-first,
naming, privacy).

## Structure — section → band range → question type

```
IELTS Academic/<section>/<band-range>/<question-type>/
├── lesson-*.html            individual self-contained lessons
├── project-name/            full web projects (index.html + css/ + js/)
│   ├── index.html
│   ├── css/
│   └── js/
└── answer-key.md            optional, beside the material
```

- **`<section>`** — one of `Listening` · `Reading` · `Speaking` · `Writing`
  (Writing subdivides into `Writing Task 1/` and `Writing Task 2/`).
- **`<band-range>`** — one of `band 4 to band 5` · `band 5 to band 6` ·
  `band 6 to band 7` · `band 7 to band 8` · `band 8 to band 9 mastery`. Pick
  `band N to band N+1` where **N = integer part of the target range's lower end**:
  band 5.0–6.5 → `band 5 to band 6`; a single target 6.5 → `band 6 to band 7`.
- **`<question-type>`** (fixed taxonomies):
  - Listening: `Multiple Choice` · `Matching` · `Sentence Completion` ·
    `Plan/Map/Diagram Labeling` · `Form/Table Completion`
  - Reading: `Multiple Choice` · `Matching (Headings)` · `Matching (Sentence Endings)` ·
    `True/False/Not Given` · `Short Answer`
  - Speaking: `Part 1 (Introduction)` · `Part 2 (Long Turn)` · `Part 3 (Discussion)`
  - Task 1: `Bar Charts` · `Line Graphs` · `Pie Charts` · `Tables` · `Maps` · `Processes`
  - Task 2: `Opinion Essays` · `Discussion Essays` · `Problem-Solution Essays` ·
    `Advantage-Disadvantage Essays`
  - Use `Mixed/` only when a material genuinely spans multiple question types.

## Project conventions

- Interactive apps (e.g. `task1-band6-breakthrough/`, `ielts-task1-mastery/`) are
  offline-first: no frameworks, no CDNs, localStorage for progress. Serve locally
  with `npm start` inside the app folder (see its `package.json`).
- Deferred scripts must register event listeners before emitting/firing events
  (check-then-subscribe pattern — see `.remember/now.md` history).
- Web projects carry a `README.md` describing tools and usage.

## Current state (maintain this section)

- Reading: lessons for all five question types at band 4–5; MCQ and paragraph
  mapping at band 6–7; three matching types mixed at band 7–8.
- Writing Task 1: trend language, comparatives, mixed visuals, two-track line
  graph pack; `task1-band6-breakthrough` app (6 tools) and `ielts-task1-mastery` app.
- Writing Task 2: opinion essays at band 5–6.
- Speaking: Part 1 at band 5–6.
- Gaps: Listening and Task 2 non-opinion essays have no materials yet.
