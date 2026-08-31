# Task 1 — Band 6 Breakthrough

Offline teaching webpage for **IELTS Academic Writing Task 1**, aimed at students
stuck below Band 6 who need to reach Band 6+. Target band range: **5 → 6+**.

## How to run
1. Download / copy the whole `task1-band6-breakthrough/` folder (keep the structure).
2. Double-click `index.html`. It opens in any modern browser.
3. No internet, server, or install needed. Fonts are system fonts; charts are inline SVG.
4. Student progress (drafts, self-assessment history, quiz best score, theme) is saved
   in that browser's `localStorage` — it stays on the device and is never uploaded.
5. To reset a student's data: browser settings → clear site data, or use the in-tool
   "Clear history" / "Delete" buttons.

## What's inside
- **6 content sections**: Know the Battlefield · The 6 Question Types · The 4-Paragraph
  Skeleton · Vocabulary Bank · The 7 Deadly Sins · Band 6 vs Band 8.
- **6 tools**: A Writing Arena (timer + word counter + checklist + drafts) ·
  B Self-Assessment Rubric (sliders + progress chart) · C Overview Trainer (3 SVG charts) ·
  D Paraphrase Lab (5 prompts) · E Vocabulary Quiz (15 questions) · F Teacher Mode toggle.

## File tree
```
task1-band6-breakthrough/
├── index.html
├── README.md
├── css/
│   └── styles.css          one design-token layer, light + dark, mobile-first
└── js/
    ├── data.js             all lesson content (vocab, quiz, samples, question types)
    ├── app.js              shell: theme, nav, tabs, vocab bank, accordion, band-compare, teacher mode
    ├── arena.js            Tool A — Writing Arena
    ├── rubric.js           Tool B — Self-Assessment Rubric
    ├── overview-trainer.js Tool C — Overview Trainer
    ├── paraphrase-lab.js   Tool D — Paraphrase Lab
    └── vocab-quiz.js       Tool E — Vocabulary Quiz
```

## Notes for editors
- Scripts are classic `<script defer>` files sharing one global (`window.T1`,
  `window.T1_DATA`) — **not** ES modules — so the page runs from `file://` with no server.
- To change any wording, edit `js/data.js` only. No content is hard-coded in the HTML
  except section headings.
- Quiz answer key is balanced A3 / B4 / C4 / D4 across the 15 questions; if you add or
  edit questions, re-count before shipping.
