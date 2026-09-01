# CLAUDE TEACHING — Examination Atelier Design System v2.1
**Product:** IELTS Academic + Digital SAT · High-stakes timed assessment  
**Audience:** Learners 17–24 (Band 6–7 / 1200–1400) + Teachers  
**Job-to-be-done:** Choose the correct `section → band → question type` in <5s and *feel* the clock.  
**Brand promise:** Graphite desk, exam paper, correction pen, perforation tape. Calm, precise, timed.  
**Stack:** Offline-first, no remote fonts, no build, vanilla HTML/CSS/JS. Vendored `_Shared` → `IELTS Academic/_Shared` + `SAT/_Shared`.  
**Source of truth for tokens:** `design-system.css :root` (light) + `[data-theme="dark"]`. Never hard-code hex in components.

---

## 1. Principles

1. **Perforation is structure** — rule lines, tape and pills are not decoration; they map IA.
2. **Inbox Zero for decisions** — at most one primary action per viewport (band ruler OR hero CTA). Everything else is ghost/soft.
3. **44px minimum** — every interactive target ≥44px. If it cannot be 44px, it is not interactive.
4. **Three strategies max** — a lesson teaches 3–4 patterns. If more, split the sequence. Documented in `CLAUDE.md §5` and enforced by QA.
5. **Motion respects the clock** — stagger in (`.04–.52s`), reveal on scroll (`IO threshold .12`), respects `prefers-reduced-motion`. No marquee after the band-ruler migration.
6. **Light is default** — dark is “exam hall after hours” lamp mode, not a separate brand. Never ship `prefers-color-scheme:dark` blocks in lessons (`offline_first.no_remote_fonts`).

---

## 2. Tokens — Single Source

Implemented in `_Shared/css/design-system.css:10` and `_Shared/css/lesson.css:2`. Mirror kept in `SAT/_Shared`.

### 2.1 Color — Light (atelier)
| Role | Token | Value | Usage | Contrast |
|---|---|---|---|---|
| Paper | `--bg` | `#fbfaf6` | page bg, warm exam sheet, not cream | — |
| Paper accent | `--bg-accent` | `#f1ebe3` | sunk wells | — |
| Surface | `--surface` | `#ffffff` | cards, header, toolbar | — |
| Surface-2/3 | `--surface-2/3` | `#f1ebe3/#e7dfd3` | icon wells, chips | — |
| Rule | `--rule/-soft` | `#e7dfd3/#f1ebe3` | borders, perforation, dividers | — |
| Graphite | `--ink` | `#0f141c` | headings, body | 15.2:1 on paper |
| Graphite soft/faint | `--ink-soft/faint` | `#5a6577/#9aa3b1` | ledes, meta, placeholders | 6.8:1 / 3.1:1* |
| Correction pen | `--primary` | `#b42326` | **only** for correction, active band, primary error | 6.1:1 on paper |
| Pen strong/soft | `--primary-strong/soft` | `#8a1b1e/#fdecea` | hover, backgrounds | — |
| SAT violet | `--violet` | `#5b3bb8` | SAT adaptive marker, `badge--band` | — |
| Teal | `--teal` | `#0e6b7a` | Listening accent | — |
| Highlighter | `--amber` | `#a87a00` | mastery, warnings | — |
| Good/bad | `--good/#0f7a4d` `--bad/#b42326` | success/error states + answer-key |
`*` faint never for body text <14px; use for meta only.

**Dark** (`[data-theme="dark"]`) inversions are at `design-system.css:66`. Primary becomes `#ff6b6b` (lamp), surfaces `#1a212c`, rules `#2e3a4f`. Same contrast floor (AA). Toggle is `#theme-toggle` lamp `☀/☾`, persists `localStorage ct-theme`, `aria-pressed`.

**Lesson palette** (`lesson.css`) is a subset (`--primary #3148c7` blue-pen for pedagogy) — isolated from hub. Do not mix; lessons are self-contained for offline single-file printing.

### 2.2 Typography — Offline, no `@import`

| Role | Token | Stack | Usage |
|---|---|---|---|
| Display | `--f-display` | `"Instrument Serif", Georgia, serif` | `h1–h3`, hero, card titles. Fallback Georgia preserves atelier ratio. Never for body. |
| Body | `--f-body` | `"Inter","Instrument Sans", system-ui, Segoe UI, Roboto` | `p`, lists, input. If Inter missing, system sans is acceptable (house rule `offline_first.no_remote_fonts`). |
| Mono | `--f-mono` | `"JetBrains Mono", ui-monospace, Cascadia` | pills, badges, chips, band ruler, code, counts. Fallback renders as tabular. |

**Scale (fluid, `clamp`):** `--t--1 .76–.84` (meta), `--t-0 .96–1.04` (body), `--t-1 1.12–1.32` (lede), `--t-2 1.36–1.88` (h3), `--t-3 1.78–2.62` (h2), `--t-4 2.36–3.7` (h1). `h1` letter-spacing `-.02em`, `text-wrap:balance`. Never exceed 2 typefaces per viewport.

**Rules:** Body `line-height 1.65`, `max-width 68ch` (`--measure`). Eyebrow `mono  .68rem/700/.14em uppercase` with dot `box-shadow 0 0 0 4px primary-soft`. Links `primary`, `text-underline-offset 2px`.

### 2.3 Spacing, Radius, Shadow, Motion

- **Scale:** `6 / 8 / 12 / 16 / 20 / 24 / 32 / 48` px. Gaps: `toolbar .75rem`, `grid 1rem`, `card padding 1.3rem 1.4rem`.
- **Radii:** `--r-sm 10`, `--r 14`, `--r-lg 20`, `--r-pill 999`. Cards `lg`, inputs `r`, pills `pill`, toggle `50%`.
- **Shadows:** `--shadow-sm` for inputs/cards, `--shadow` on hover, `--shadow-lg` for primary. Dark uses heavier `0 8px 24px rgba(0,0,0,.4)`.
- **Focus:** `--focus 0 0 0 3px rgba(180,35,38,.28)` (light) / `rgba(255,107,107,.35)` dark. Applied via `:focus-visible` only. Never remove focus.
- **Ease:** `--ease 200ms cubic-bezier(.22,1,.36,1)`. Motion: stagger `hero .04–.52s`, `reveal .45s`, `tape-scroll 42s linear` (legacy), hover `transform .12–.18s`. All disabled when `prefers-reduced-motion`.

### 2.4 Layout Tokens

`--page-w 1040px`, `--page-wide 1180px`. `.wrap` is `width:min(100% - 2.5rem, var(--page-w))` (1.25rem at 640). Header height `56px` (dash-topbar) or `3.75rem` (legacy topbar). `scroll-padding-top 4.5rem` for sticky anchors.

---

## 3. Component Architecture — Hub + Lesson + Drill

All components are **vanilla, self-contained, `box-sizing:border-box`, `min-width:0`** and tested at `320/520/640/900/1040/1180`.

### 3.1 Navigation — `dash-topbar` (56px fixed)
- Left: `CT` mark `2.15rem` + brand stack. Center: `dash-tab` links (Hub active `aria-current="page"`). Right: `dash-target` pill (`Target: Band 7.0`, clickable cycles `4-5→…→8-9`, persists `ct-band`) + lamp `#theme-toggle`.
- Collapse: center tabs hide `<640px`, left truncates to `CT` at `<520px` (add hamburger for Reading/Writing when hidden).
- Also ship legacy `topbar` on sub-hubs (perforation `::after` dots `12px×6px`). New hub (`IELTS Academic/index.html:14`) uses dash-topbar only to reclaim 48px.
- File: `dashboard.css:1`.

### 3.2 Band Ruler — Interactive Target (replaces marquee)
- `div.band-ruler role=radiogroup` (`aria-label` target): label `mono xs` + `band-ruler__track` of 5 `button role=radio data-band="4-5…8-9"`. Active `aria-checked=true` → `primary` bg. Hint `You’re viewing Band 6–7.`
- Behaviour (`hub.js:8`): `localStorage ct-band`, updates `dashTarget` text + `heroPrimary href` (`Listening/<band>/Multiple Choice/`) + filter hint. `Enter/Space` and click. Wrap at 640.
- Legacy `.band-tape` (full-bleed 2.6rem, `tape-scroll 42s`) kept for sub-pages but not on new hub.

### 3.3 Hero
- Structure: `eyebrow → h1 (18ch, -.025em) → lede (62ch) → hero__actions (primary CTA + ghost sample + inline metric mono faint)`. Title is single color; no `em` red highlight (red reserved for correction).
- CTAs: Primary `btn--primary` (`ink` bg `#0f141c`, 7:1 on paper), Ghost `btn--ghost` transparent primary. Both `min-height 42px`, `pill 999px`. On `<640px` each becomes `flex:1 1 100%`.
- Chips: `chip` (`surface` + `rule` border) with `b {ink}`; `--accent` variant `chip--accent` (`ink` bg) for count. Metric `hero__meta-inline` mono xs faint.

### 3.4 Toolbar — Search + Filter + Live Region
- `toolbar flex wrap gap .75rem` → `search flex:1 1 280px max 560px` + `filter-row`. `input 1.5px rule`, focus `primary` + `focus` shadow. Icon `1.12rem` absolute `left .9rem`. Placeholder `ink-faint`. Debounce `120ms`.
- `filter-btn` mono `xs` `pill`, inactive `surface/rule/ink-soft`, active `primary/white`. Hover lifts border to `primary`. One `aria-pressed=true` at a time (single-select, `All` is default).
- `div#filterLive.visually-hidden[aria-live=polite]` announces `Showing N of M for “query”`. Empty state `#empty` dashed.

### 3.5 Cards — Section Grid
- `grid--cards: repeat(auto-fill, minmax(300px,1fr))` → `1fr` at 520, `2fr` at 641–900, `3fr` at 901–1040.
- `card flex column gap .45rem, border rule, r-lg, shadow-sm, ::before 3px top rule` (neutral `rule`, `featured` → `ink`, `accent/violet/teal/amber` only via modifiers). Hover `translateY(-3px) shadow rule→ink`.
- `card__head flex align:center gap .75rem` → `card__icon 2.35rem well surface-2` + `card__title display 1.22rem -.015em` + `card__badge` (`ink/bg` mono pill) on right.
- `card__desc .88rem soft`, `card__meta mono xs faint` (`count · band`), `card__go` `mono sm ink` top `rule-soft` border `100%`, `→` translates 3px on hover. `card--quiet` `opacity .92` for Vocabulary.
- Inventory count is de-emphasized (was top-right pill); primary reading is verb `Open Listening →`.

### 3.6 List — Ledger (sub-hub files)
- `.section__head h2` with dot `primary` + `box-shadow soft`. `.list__item flex space-between`, `::before 3px rule` turns `primary` on hover + `translateX 3px`. `.list__link 600 ink → primary`, `.list__meta mono xs faint`. Responsive `column` at 640.

### 3.7 Callout, Badge, Pill
- `callout border-left 4px primary/success/warn/violet` + `::before ✎ 18px`. Label mono xs primary. Pills `mono xs uppercase`, `good/amber/violet` variants via `color-mix` border.

### 3.8 Buttons
- `.btn` mono `.78rem 700 pill 42px` primary/ghost/soft/sm. Primary briefing `filter brightness 1.07 + translateY -1px`. Ghost transparent → `primary-soft` on hover.

### 3.9 Lesson — Self-contained (inline + `lesson.css`)
- `container 860px`, `header.lesson-head` + `::after 3px gradient`, `target-level mono pill primary-soft`, `band-info/tips-box/callout` left 4px, `section h2` + `::before  .55rem primary`.
- `card`/`comparison-table` (separate spacing 0, radius 10, first col `mono xs uppercase primary-strong` + `surface-2`), `question-text` block (`600 surface rule radius12 → open primary-soft`), `explanation` hidden → `visible fade`.
- Touch fixes injected `ct-responsive-v2` into all `*_lesson_band*.html`: `@media 640` stacks `meta/strat`, `@media 520` `h1 1.45rem`, etc.

### 3.10 Drills — `drill-*/css/style.css`
- `wrap 860`, `card`, `.q` rows, `min-height 44px` at 640. `visibilityChange` pauses timers.

---

## 4. Interaction Patterns — Unified

1. **Single primary per viewport.** Hero has one `btn--primary` (ink). Band ruler active one. Filter one. Card CTA one.
2. **Chronology:** On load, stagger `hero .04→.52` + `grid cards .40→.64`, then `IntersectionObserver .reveal threshold .12 rootMargin -6%` → `.in`. With `reduced-motion` all `opacity 0` skipped via `reveal.in`.
3. **Band is the ruler:** Changing `ct-band` via `band-ruler` or `dash-target` updates `heroPrimary` text/href + card meta + persists. `history.replaceState` optional `?band=6-7` for shareability (implemented on next iteration).
4. **Teacher view:** `label[for=viewMode] input#viewMode` (`student-view/teacher-view` on `body`) toggles `.teacher-notes/.teacher-section` + `details`. Persist `sessionStorage view-mode` (scoped) vs `localStorage ct-theme` (global).
5. **Tabs (`module-nav`):** `role=tablist/tab/panel`, `aria-selected`, `tabindex 0/-1`, `ArrowRight/Left Home/End`, `scrollIntoView inline:center block:start`, `scroll-margin-top 108px` (header 56 + nav 52). Horizontal scroll at ≤520 `overflow-x:auto snap`.
6. **Forms:** No custom selects; native `input[type=search/text/radio]`, `min-height 44px` on `pointer:coarse`, `max-length 1` + `uppercase` + `focus` with `focus ring`. Never hijack copy/paste.
7. **Feedback:** Answer check adds `.right/.wrong` (`good/bad soft` bg + border), `score` mono `700 primary`, `jump` button `4px radius` scrolls `para-id` + `flash 1.6s amber-soft` → transparent.

---

## 5. Accessibility

- Color never sole signal: every red pen label paired with icon/label (e.g., `✎ Good / Bad`).
- Contrast: body `15.2:1`, soft `6.8:1` minimal, faint never for text <14px. Chips/bands tested AA; filter active now `primary/white 6.1:1`.
- Keyboard: `skip-link` `translateY -180%` until focus, focus ring always, tab order `dash-topbar → hero CTA → band ruler → toolbar`, never trap.
- ARIA: `radiogroup/radio`, `tablist/tab`, `aria-live polite` for filter, `aria-pressed` for filters/theme, `aria-current=page` for nav.
- Reduced motion: `html{scroll-behavior:auto}` and `* transition none` when `prefers-reduced-motion`.

---

## 6. Implementation — Where to Change

| Need | Edit | Vendoring |
|---|---|---|
| Tokens, grid, cards, toolbar, hero, band-ruler, reveal | `_Shared/css/design-system.css` | `Copy-Item -Force` to `SAT/_Shared` + `IELTS Academic/_Shared` |
| Lesson page system, responsive poly | `_Shared/css/lesson.css` | same |
| Dash topbar 56px | `_Shared/css/dashboard.css` | same |
| Search/band/live/progress/reveal | `_Shared/js/hub.js` (hubs) + inline `<script>` in lessons (no import) | same |
| Single lesson overrides | inline `<style>` after shared link (no dark blocks) | — |

**Global contract for new lessons** (`generate_curriculum.py` template): self-contained `inline <style>/<script>`, light only, `#F6F7F6` ground, no `_Shared` import, `YYYY-MM-DD_<skill>_lesson_band<range>.html` no spaces, `3–4` strategies, `1` timer `5–8m` + `reveal/self-score`, Teacher Notes `timing/staging/anticipated ×3`, no answers, `answer-key.md` balanced `A/B/C/D`.

---

## 7. Governance — QA

Before publish: `glob "*_lesson_band*"`, no overwrite (`_v2`), HTML well-formed `div` balance, `Strategy` 3–4, `Target band` present, timer + `id=timer` + `reveal`, `fonts.googleapis` absent, `prefers-color-scheme` absent in lessons, `prefers-reduced-motion` present, `axe` scan `AA`, Playwright `file://` smoke at `375/768/1280`. Suite flag `QA_REPORT.md 50/51`.

**Versioning:** `Design System v2.1` = landing redesign (`dfe39c7`) + interactive/responsive layer (`60956b7`). Next minor is `?band` URL share + ServiceWorker offline caching (not now).

---

*Source repo:* `CLAUDE TEACHING/_Shared` outside git → vendored `IELTS Academic/_Shared` + `SAT/_Shared` served by Pages. Commits to `CC-IELTS main` + `CC-SAT master` always paired for vendored changes.
