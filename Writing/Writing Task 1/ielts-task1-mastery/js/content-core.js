/* ============================================================
   IELTS Task 1 Mastery — core curriculum content
   Populates window.IT1M.lessons  (keyed by slug)
   Lesson schema:
     { slug, title, category, est, difficulty, band, blurb,
       objectives:[], sections:[{id,h,html}], keyRules:[],
       mistakes:[{wrong,better,rule}], flashcards:[{id,front,back}],
       quizId, prev, next }
   ============================================================ */
window.IT1M = window.IT1M || {};
window.IT1M.lessons = window.IT1M.lessons || {};

(function (L) {
  "use strict";

  /* ---------------------------------------------------------
     1. TASK 1 FUNDAMENTALS
     --------------------------------------------------------- */
  L["fundamentals"] = {
    slug: "fundamentals",
    title: "Task 1 Fundamentals",
    category: "Learn",
    est: 14,
    difficulty: "Foundation",
    band: "5.0–9.0",
    blurb: "What the task actually asks for, how the marks work, and the one habit that separates a report from a list of numbers.",
    objectives: [
      "State the timing, word count and weighting of Academic Writing Task 1",
      "Explain the Summarise → Select → Compare → Organise principle",
      "Read a prompt and extract units, time frame, categories and data type",
      "Recognise the four things Task 1 must never contain"
    ],
    sections: [
      { id: "what", h: "What Task 1 is", html:
        "<p>Academic Writing Task 1 gives you one or more <strong>visuals</strong> — a graph, chart, table, map or diagram — and 20&nbsp;minutes to write a <strong>formal, factual summary</strong> of at least <strong>150&nbsp;words</strong>. Task 2 is worth roughly twice the marks, so 20&nbsp;minutes is a ceiling, not a target: aim to finish Task 1 in 18–19 and bank the extra time for the essay.</p>" +
        "<div class='callout callout--rule'><span class='label'>Key rule</span><p>You are marked on <em>selecting and reporting the important features</em> — not on mentioning every number. A response that lists all the data with no shape scores lower than one that reports four well-chosen features clearly.</p></div>" },
      { id: "criteria", h: "How the marks work", html:
        "<p>Four equally-weighted criteria:</p>" +
        "<ul>" +
        "<li><strong>Task Achievement</strong> — Did you cover the requirements, write a clear overview, and support key features with accurate data?</li>" +
        "<li><strong>Coherence &amp; Cohesion</strong> — Is it logically organised into paragraphs, with linking that helps the reader?</li>" +
        "<li><strong>Lexical Resource</strong> — Range and accuracy of vocabulary, including data-description language.</li>" +
        "<li><strong>Grammatical Range &amp; Accuracy</strong> — Range of structures and how many sentences are error-free.</li>" +
        "</ul>" +
        "<p>The single fastest way to lose a band in Task Achievement is to omit the overview. See the <a href='lesson.html?slug=overview'>Overview Masterclass</a>.</p>" },
      { id: "principle", h: "The core principle", html:
        "<p>Every strong Task 1 answer runs the same four moves:</p>" +
        "<ol>" +
        "<li><strong>Summarise</strong> — What is the whole picture? (This becomes your overview.)</li>" +
        "<li><strong>Select</strong> — Which 3–5 features matter most? Ignore the rest.</li>" +
        "<li><strong>Compare</strong> — Put figures next to each other; don't describe them in isolation.</li>" +
        "<li><strong>Organise</strong> — Group the selected features into two logical body paragraphs.</li>" +
        "</ol>" +
        "<div class='callout callout--tip'><span class='label'>Exam tip</span><p>Do all four in your head <em>before</em> writing. Two minutes of planning saves five minutes of rewriting.</p></div>" },
      { id: "read-prompt", h: "Reading the prompt", html:
        "<p>Before you look at the shape of the data, harvest the facts around it:</p>" +
        "<div class='table-wrap'><table class='data'><caption>Prompt: “The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011.”</caption>" +
        "<tr><th>Question</th><th>Answer from this prompt</th></tr>" +
        "<tr><td>Data type</td><td>Percentages (so totals may sum to 100)</td></tr>" +
        "<tr><td>Units</td><td>% of households</td></tr>" +
        "<tr><td>Time frame</td><td>1918–2011 → past tense, trend language</td></tr>" +
        "<tr><td>Categories</td><td>Owned vs rented</td></tr>" +
        "<tr><td>Place</td><td>England and Wales</td></tr>" +
        "</table></div>" +
        "<p>This table <em>is</em> your introduction. Paraphrase it — see the <a href='../practice/planner.html'>Planning Trainer</a>.</p>" },
      { id: "never", h: "What Task 1 must never contain", html:
        "<ul>" +
        "<li><strong>Opinions</strong> — no <em>“I think”</em>, <em>“unfortunately”</em>, <em>“should”</em>.</li>" +
        "<li><strong>Reasons or speculation</strong> — don't explain <em>why</em> a trend happened.</li>" +
        "<li><strong>Every single number</strong> — select.</li>" +
        "<li><strong>A memorised introduction</strong> — examiners recognise templates and discount them.</li>" +
        "</ul>" +
        "<div class='callout callout--mistake'><span class='label'>Common mistake</span><p><span class='ex ex--no'>The number of car owners rose, probably because incomes increased.</span><span class='ex ex--yes'>The number of car owners rose steadily over the period.</span></p></div>" }
    ],
    keyRules: [
      "150 words minimum; ~19 minutes; Task 1 is worth half of Task 2.",
      "Summarise → Select → Compare → Organise.",
      "An overview is compulsory. No overview caps Task Achievement at Band 5.",
      "No opinions, no reasons, no listing every figure."
    ],
    mistakes: [
      { wrong: "Writing 90 words because you ran out of things to say.", better: "Plan two body paragraphs of grouped comparisons before writing.", rule: "Under 150 words is an automatic Task Achievement penalty." },
      { wrong: "Copying the prompt sentence word-for-word as your first line.", better: "Paraphrase: change the verb, the noun phrases and the structure.", rule: "Copied text is not counted toward your word total or your Lexical Resource." }
    ],
    flashcards: [
      { id: "fund-1", front: "Minimum word count and time for Task 1?", back: "150 words, about 20 minutes (aim for 19)." },
      { id: "fund-2", front: "The four-move principle for every Task 1 answer?", back: "Summarise, Select, Compare, Organise." },
      { id: "fund-3", front: "Name two things Task 1 must never contain.", back: "Opinions and reasons/speculation (also: every number, memorised intros)." },
      { id: "fund-4", front: "Which criterion does a missing overview damage most?", back: "Task Achievement — it caps you around Band 5." }
    ],
    quizId: "quiz-fundamentals",
    prev: null,
    next: "overview"
  };

  /* ---------------------------------------------------------
     2. OVERVIEW MASTERCLASS
     --------------------------------------------------------- */
  L["overview"] = {
    slug: "overview",
    title: "Overview Masterclass",
    category: "Learn",
    est: 16,
    difficulty: "Core",
    band: "6.0–9.0",
    blurb: "The overview is the highest-value paragraph in Task 1. What belongs in it, what never does, and patterns for every visual type.",
    objectives: [
      "Define what an overview is and where it can appear",
      "Select 2–4 'big picture' features and exclude specific data",
      "Write overview sentences for trend, static, map and process visuals",
      "Judge a weak vs strong overview"
    ],
    sections: [
      { id: "what", h: "What an overview is", html:
        "<p>The overview is <strong>2–4 sentences describing the biggest, most general features</strong> of the whole visual — the things a reader would notice from across the room. It contains <strong>no specific data</strong>. It usually sits directly after the introduction, but it can also close the response.</p>" +
        "<div class='callout callout--rule'><span class='label'>Key rule</span><p>If you deleted every body paragraph, the introduction + overview alone should still tell the reader what happened.</p></div>" },
      { id: "belongs", h: "What belongs — and what doesn't", html:
        "<div class='grid two'>" +
        "<div class='card'><h4>In the overview</h4><ul><li>The dominant trend (overall up / down / stable)</li><li>The highest and lowest overall</li><li>The biggest change or gap</li><li>A major crossover or turning point</li><li>Whether a process is linear or cyclical; its start and end</li></ul></div>" +
        "<div class='card'><h4>Never in the overview</h4><ul><li>Exact figures (<em>“rose to 42%”</em>)</li><li>Specific years unless the turning point <em>is</em> the big feature</li><li>Minor categories</li><li>Reasons</li></ul></div>" +
        "</div>" },
      { id: "patterns", h: "Overview patterns by visual type", html:
        "<h4>Trend charts (line / dynamic bar)</h4>" +
        "<p class='ex ex--yes'>Overall, all three fuels became more widely used over the period, with gas showing by far the largest increase and overtaking coal midway through.</p>" +
        "<h4>Static charts (bar / pie / table with no time)</h4>" +
        "<p class='ex ex--yes'>Overall, spending was concentrated in housing and food, which together accounted for well over half of the total, while leisure received the smallest share in every country.</p>" +
        "<h4>Maps</h4>" +
        "<p class='ex ex--yes'>Over the twenty-year period the area changed from a largely rural settlement into a compact residential town, with farmland replaced by housing and a new road network.</p>" +
        "<h4>Processes</h4>" +
        "<p class='ex ex--yes'>The process consists of seven stages, beginning with the harvesting of raw cane and ending with packaged sugar ready for distribution; it is linear, with no recycled steps.</p>" },
      { id: "how-many", h: "How many features?", html:
        "<p>Two is the minimum; four is usually the ceiling. If you find yourself writing a fifth, it probably belongs in a body paragraph. Choose features that are <strong>independent</strong> — “gas rose most” and “gas overtook coal” are really one feature.</p>" },
      { id: "judge", h: "Weak vs strong", html:
        "<div class='callout callout--mistake'><span class='label'>Weak</span><p><span class='ex ex--no'>The graph shows a lot of changes. Some numbers went up and some went down. Coal was 30 in 1990.</span> — vague, then a specific figure.</p></div>" +
        "<div class='callout callout--band'><span class='label'>Band 7+</span><p><span class='ex ex--yes'>Overall, electricity consumption rose across all sectors, but the increase was steepest in industry, which moved from the lowest consumer to the highest by the end of the period.</span></p></div>" }
    ],
    keyRules: [
      "Overview = 2–4 general sentences, no specific data.",
      "Introduction + overview alone must convey the whole story.",
      "Trend: overall direction + biggest mover + any crossover.",
      "Map/process: overall transformation, or number of stages + start/end + linear/cyclical."
    ],
    mistakes: [
      { wrong: "Putting exact figures in the overview.", better: "Save figures for body paragraphs; keep the overview general.", rule: "Specific data in the overview weakens its 'big picture' function." },
      { wrong: "No overview at all — going straight from intro to detail.", better: "Signal it: 'Overall, …' as the first words of paragraph 2.", rule: "Examiners look for a clear overview; make it unmissable." }
    ],
    flashcards: [
      { id: "ov-1", front: "How long is an overview?", back: "2–4 sentences, describing only general features, with no specific data." },
      { id: "ov-2", front: "Overview pattern for a trend chart?", back: "Overall direction + the biggest mover + any major crossover/turning point." },
      { id: "ov-3", front: "Overview pattern for a process diagram?", back: "Number of stages, start and end points, linear or cyclical." },
      { id: "ov-4", front: "Where can the overview go?", back: "Right after the introduction (usual), or as the final paragraph." }
    ],
    quizId: "quiz-overview",
    prev: "fundamentals",
    next: "line-graphs"
  };

  /* ---------------------------------------------------------
     3. LINE GRAPHS
     --------------------------------------------------------- */
  L["line-graphs"] = {
    slug: "line-graphs",
    title: "Line Graphs",
    category: "Learn",
    est: 18,
    difficulty: "Core",
    band: "5.0–9.0",
    blurb: "Change over time: trends, peaks, plateaus and crossovers, plus the verb + adverb and noun + adjective grammar that examiners reward.",
    objectives: [
      "Describe direction, speed and shape of a trend accurately",
      "Use both verb (rose sharply) and noun (a sharp rise) structures",
      "Report starting and finishing positions and any crossover",
      "Avoid the common trend-vocabulary collocation errors"
    ],
    sections: [
      { id: "what", h: "What it is / what's tested", html:
        "<p>One or more lines tracking a value across time. IELTS is testing whether you can see <strong>the shape of change</strong> — not just read points — and describe it with precise, correctly-collocated language.</p>" },
      { id: "recognise", h: "How to recognise it", html:
        "<p>An x-axis of years/months; one or more sloping lines; a legend if there are multiple lines. Prompt wording: <em>“the changes in…”, “trends in…”, “between 1990 and 2020”.</em></p>" },
      { id: "first60", h: "First 60 seconds", html:
        "<ol>" +
        "<li>Units and time frame → tense (past).</li>" +
        "<li>How many lines? What does each represent?</li>" +
        "<li>Overall direction of each line: up, down, flat, or up-then-down.</li>" +
        "<li>Start point vs end point for each line.</li>" +
        "<li>Any line that crosses another, peaks, or is clearly the biggest mover.</li>" +
        "</ol>" },
      { id: "look-for", h: "What to look for", html:
        "<ul>" +
        "<li><strong>Trends</strong>: upward, downward, fluctuating, stable</li>" +
        "<li><strong>Features</strong>: peak, trough, plateau, crossover, convergence, divergence</li>" +
        "<li><strong>Speed</strong>: gradual vs dramatic; steady vs erratic</li>" +
        "<li><strong>Position</strong>: which line starts/ends highest</li>" +
        "</ul>" },
      { id: "structure", h: "Best paragraph structure", html:
        "<ol><li><strong>Introduction</strong> — paraphrase the prompt.</li>" +
        "<li><strong>Overview</strong> — overall direction of all lines + biggest mover + any crossover.</li>" +
        "<li><strong>Body 1</strong> — the line(s) with the clearest/biggest movement, with data.</li>" +
        "<li><strong>Body 2</strong> — the remaining line(s), plus the key comparison between lines.</li></ol>" +
        "<div class='callout callout--tip'><span class='label'>Exam tip</span><p>Group by <em>similar behaviour</em>, not by drawing order. Two lines that both rise sharply belong in the same paragraph.</p></div>" },
      { id: "vocab", h: "Essential vocabulary", html:
        "<div class='grid two'>" +
        "<div class='card'><h4>Up</h4><p>rise, increase, grow, climb, surge, jump, rocket</p></div>" +
        "<div class='card'><h4>Down</h4><p>fall, decline, decrease, drop, dip, plunge, slide</p></div>" +
        "<div class='card'><h4>No change / small change</h4><p>remain stable/steady/constant, level off, plateau, hold steady, fluctuate around</p></div>" +
        "<div class='card'><h4>Nouns</h4><p>a rise, an increase, growth, a decline, a fall, a drop, a fluctuation, a peak</p></div>" +
        "</div>" +
        "<h4>Degree (how much / how fast)</h4>" +
        "<p>slight · gradual · steady · moderate · marked · considerable · significant · sharp · dramatic · rapid</p>" },
      { id: "grammar", h: "Grammar patterns", html:
        "<p>Two structures carry the same meaning — use both for range:</p>" +
        "<div class='table-wrap'><table class='data'>" +
        "<tr><th>Verb + adverb</th><th>There + be + adjective + noun</th></tr>" +
        "<tr><td>Sales <strong>rose sharply</strong>.</td><td>There was <strong>a sharp rise</strong> in sales.</td></tr>" +
        "<tr><td>Prices <strong>fell gradually</strong>.</td><td>There was <strong>a gradual fall</strong> in prices.</td></tr>" +
        "<tr><td>Output <strong>increased steadily</strong> to 40m tonnes.</td><td><strong>A steady increase</strong> in output took it to 40m tonnes.</td></tr>" +
        "</table></div>" +
        "<div class='callout callout--mistake'><span class='label'>Common mistake — collocation</span><p><span class='ex ex--no'>The sales increased with 20%.</span><span class='ex ex--yes'>Sales increased <strong>by</strong> 20%.</span><span class='ex ex--no'>There was a raise of prices.</span><span class='ex ex--yes'>There was a <strong>rise</strong> in prices. (raise = a pay increase / to lift)</span></p></div>" },
      { id: "approx", h: "Approximation & comparison language", html:
        "<p>Numbers on a line graph are estimates — say so: <em>just over 30%, roughly 2 million, approximately a third, nearly double</em>. When comparing lines: <em>X remained above Y throughout; the gap between X and Y widened; X overtook Y in 2005</em>.</p>" },
      { id: "mistakes", h: "Common mistakes", html:
        "<ul>" +
        "<li>Describing every wobble — select the meaningful movements.</li>" +
        "<li>Present tense for a past time frame.</li>" +
        "<li>“increased dramatically slightly” — pick one degree word.</li>" +
        "<li>Repeating <em>increase</em> six times — rotate verb and noun forms.</li>" +
        "</ul>" },
      { id: "bands", h: "Band 6 vs 7 vs 8+", html:
        "<div class='callout callout--example'><span class='label'>Band 6</span><p>Coal went down from 40 to 20. Gas went up from 10 to 45. Gas was higher at the end.</p></div>" +
        "<div class='callout callout--band'><span class='label'>Band 8+</span><p>Coal consumption more than halved, sliding from around 40 units to just 20, whereas gas climbed steeply from a low base of roughly 10 to become the leading fuel at approximately 45 units, overtaking coal shortly after the midpoint.</p></div>" },
      { id: "checklist", h: "Examiner checklist", html:
        "<ul><li>Overview present, general, covers all lines?</li><li>Tense consistent with the time frame?</li><li>Both verb and noun trend structures used?</li><li>Figures approximated, not invented?</li><li>Start and end positions given for the main lines?</li><li>Lines compared, not just listed?</li></ul>" },
      { id: "example", h: "Mini example", html:
        "<p><strong>Prompt:</strong> The graph shows the number of visitors (millions) to three London museums from 2010 to 2018.<br>" +
        "<strong>Data:</strong> Museum A: 4.5 → 5.9 (steady rise). Museum B: 5.8 → 4.9 (gradual fall, dip in 2014). Museum C: 2.1 → 5.5 (sharp, accelerating rise, crosses B in 2016).</p>" +
        "<p><strong>Overview:</strong> <span class='ex ex--yes'>Overall, visitor numbers rose at two of the three museums, with Museum C growing most dramatically and overtaking Museum B, while Museum B was the only one to decline.</span></p>" }
    ],
    keyRules: [
      "Report shape and direction, not every point.",
      "Use verb+adverb AND there was a(n) adj+noun.",
      "'increased by 20%', not 'increased with 20%'.",
      "Approximate every figure you cite."
    ],
    mistakes: [
      { wrong: "Sales increased with 20 percent from 2010.", better: "Sales increased by 20 per cent from 2010.", rule: "increase/decrease + BY + amount." },
      { wrong: "The graph shows the trend will rise in the future.", better: "Only describe what the graph shows for its stated period.", rule: "No prediction unless the graph itself projects forward." },
      { wrong: "There was a dramatically increase.", better: "There was a dramatic increase / It increased dramatically.", rule: "adjective + noun, or verb + adverb — don't mix." }
    ],
    flashcards: [
      { id: "lg-1", front: "Rewrite as a noun phrase: 'Unemployment fell sharply.'", back: "There was a sharp fall in unemployment." },
      { id: "lg-2", front: "Correct: 'GDP grew ___ 3%.'", back: "by — GDP grew by 3%." },
      { id: "lg-3", front: "Three words for a line that stops changing.", back: "levelled off / plateaued / remained stable." },
      { id: "lg-4", front: "One line passes another going up. Verb?", back: "overtook (also: surpassed, exceeded)." },
      { id: "lg-5", front: "Degree words from smallest to largest change.", back: "slight → gradual/steady → moderate → marked/considerable → sharp/dramatic." }
    ],
    quizId: "quiz-line-graphs",
    prev: "overview",
    next: "bar-charts"
  };

  /* ---------------------------------------------------------
     4. BAR CHARTS
     --------------------------------------------------------- */
  L["bar-charts"] = {
    slug: "bar-charts",
    title: "Bar Charts",
    category: "Learn",
    est: 15,
    difficulty: "Core",
    band: "5.0–9.0",
    blurb: "Comparison across categories (and sometimes time). Find the ranking, the extremes and the exceptions — don't march bar by bar.",
    objectives: [
      "Distinguish static, dynamic, grouped and stacked bar charts",
      "Identify highest/lowest, similar values and striking gaps",
      "Group categories for two coherent body paragraphs",
      "Use ranking and comparison language accurately"
    ],
    sections: [
      { id: "types", h: "Four kinds of bar chart", html:
        "<div class='grid two'>" +
        "<div class='card'><h4>Static</h4><p>Categories, no time. Strategy: rank them, describe extremes and clusters.</p></div>" +
        "<div class='card'><h4>Dynamic</h4><p>Same categories at 2–3 time points. Strategy: describe change per category + overall trend.</p></div>" +
        "<div class='card'><h4>Grouped</h4><p>Sub-bars side by side (e.g. male/female per country). Strategy: compare within each group and across groups.</p></div>" +
        "<div class='card'><h4>Stacked</h4><p>Segments stacked into one bar (total + composition). Strategy: total first, then the dominant segment.</p></div>" +
        "</div>" },
      { id: "first60", h: "First 60 seconds", html:
        "<ol><li>Units; is there a time dimension?</li><li>Which category is highest? Lowest?</li><li>Which categories are roughly equal (a cluster)?</li><li>Any category that breaks the pattern (an exception)?</li><li>If dynamic: which category changed most?</li></ol>" },
      { id: "structure", h: "Best paragraph structure", html:
        "<p><strong>Static:</strong> Overview (highest, lowest, overall spread) → Body 1: the top group → Body 2: the bottom group / the exception.</p>" +
        "<p><strong>Dynamic:</strong> Overview (overall direction + biggest mover) → Body 1: categories that rose → Body 2: categories that fell or held steady.</p>" +
        "<div class='callout callout--mistake'><span class='label'>Common mistake</span><p>Reporting bars left-to-right in a flat list. Group by size or by behaviour instead.</p></div>" },
      { id: "vocab", h: "Essential vocabulary", html:
        "<h4>Ranking</h4><p>the highest / largest / greatest; the lowest / smallest; the second highest; ranked first; came last; was followed by</p>" +
        "<h4>Similarity &amp; difference</h4><p>roughly equal to; on a par with; comparable to; far exceeded; was double / three times; only marginally higher than; a striking gap</p>" +
        "<h4>Proportion (stacked)</h4><p>made up / accounted for / constituted the bulk of</p>" },
      { id: "grammar", h: "Grammar patterns", html:
        "<div class='table-wrap'><table class='data'>" +
        "<tr><th>Function</th><th>Pattern</th></tr>" +
        "<tr><td>Superlative</td><td>Canada had <strong>the highest</strong> figure, at around 80 units.</td></tr>" +
        "<tr><td>Multiple</td><td>Spending on transport was <strong>twice as high as</strong> spending on health.</td></tr>" +
        "<tr><td>Comparative + by</td><td>Exports exceeded imports <strong>by roughly 15 million</strong>.</td></tr>" +
        "<tr><td>Contrast</td><td><strong>Whereas</strong> France invested heavily in rail, the UK favoured road.</td></tr>" +
        "</table></div>" },
      { id: "mistakes", h: "Common mistakes", html:
        "<ul><li>“3 times more than” when you mean “3 times as much as”.</li><li>Listing every bar with its exact value.</li><li>Forgetting the overview because “it's just a comparison”.</li><li>Mixing up categories and values in the sentence subject.</li></ul>" },
      { id: "bands", h: "Band 6 vs 8+", html:
        "<div class='callout callout--example'><span class='label'>Band 6</span><p>The USA was 50. The UK was 25. Japan was 24. Germany was 10.</p></div>" +
        "<div class='callout callout--band'><span class='label'>Band 8+</span><p>The USA recorded by far the highest figure at around 50 units — roughly double that of the UK and Japan, which were almost identical at approximately 25. Germany trailed well behind, at only about a fifth of the American total.</p></div>" },
      { id: "checklist", h: "Examiner checklist", html:
        "<ul><li>Overview names the highest and lowest?</li><li>Categories grouped, not listed?</li><li>At least one multiple/fraction comparison?</li><li>Exceptions to the pattern flagged?</li><li>Consistent tense?</li></ul>" },
      { id: "example", h: "Mini example", html:
        "<p><strong>Prompt:</strong> The chart compares average weekly hours of unpaid housework by gender in five countries.<br>" +
        "<strong>Pattern:</strong> Women exceed men in every country; the gap is widest in Country D (28 vs 10) and narrowest in Country A (18 vs 15).</p>" +
        "<p><strong>Overview:</strong> <span class='ex ex--yes'>In all five countries women did more unpaid housework than men, though the size of the gender gap varied considerably, being largest in Country D and smallest in Country A.</span></p>" }
    ],
    keyRules: [
      "Group categories by size or behaviour, never by drawing order.",
      "Overview = highest + lowest + overall spread (static) or biggest mover (dynamic).",
      "'twice as high as', 'three times the figure for'.",
      "Flag exceptions to the main pattern."
    ],
    mistakes: [
      { wrong: "Transport spending was 3 times more than health spending.", better: "Transport spending was 3 times as high as health spending.", rule: "'X times as much/high as' is unambiguous; 'X times more than' is not." },
      { wrong: "The chart shows four countries. Country 1 is 50. Country 2 is 25…", better: "The USA led at ~50, roughly double the UK and Japan (~25).", rule: "Compare and cluster; don't enumerate." }
    ],
    flashcards: [
      { id: "bc-1", front: "Best phrase for 'A = 40, B = 20'?", back: "A was twice as high as B / B was half the figure for A." },
      { id: "bc-2", front: "Two conjunctions for direct contrast between categories.", back: "whereas, while (also: by contrast, in comparison)." },
      { id: "bc-3", front: "Static bar chart: what three things go in the overview?", back: "Highest category, lowest category, overall spread/pattern." },
      { id: "bc-4", front: "Dynamic bar chart overview focus?", back: "Overall direction of change + the category that changed most." }
    ],
    quizId: "quiz-bar-charts",
    prev: "line-graphs",
    next: "pie-charts"
  };

  /* ---------------------------------------------------------
     5. PIE CHARTS
     --------------------------------------------------------- */
  L["pie-charts"] = {
    slug: "pie-charts",
    title: "Pie Charts",
    category: "Learn",
    est: 13,
    difficulty: "Core",
    band: "5.0–9.0",
    blurb: "Proportions of a whole. Describe shares, combine small segments, and — with two or more pies — report what changed.",
    objectives: [
      "Describe proportions with fraction and percentage language",
      "Combine minor segments instead of listing them",
      "Compare two or more pie charts by change in share",
      "Use accounted for / represented / made up correctly"
    ],
    sections: [
      { id: "what", h: "What it is", html:
        "<p>A circle divided into segments, each a share of 100%. Often you get <strong>two pies</strong> (two years, two countries, two groups) and must report how the composition changed.</p>" },
      { id: "first60", h: "First 60 seconds", html:
        "<ol><li>What is the whole (100% of what)?</li><li>Largest segment? Smallest?</li><li>Which segments together make up more than half?</li><li>If two pies: which segment grew most, shrank most, or swapped rank?</li></ol>" },
      { id: "vocab", h: "Proportion language", html:
        "<div class='grid two'>" +
        "<div class='card'><h4>Verbs</h4><p>accounted for, represented, constituted, made up, comprised</p><p class='small muted'>“Housing <strong>accounted for</strong> 40% of spending.”</p></div>" +
        "<div class='card'><h4>Fractions &amp; hedges</h4><p>exactly half; just over a quarter; nearly one third; around two thirds; a tiny fraction; the overwhelming majority; a small minority</p></div>" +
        "</div>" +
        "<div class='callout callout--tip'><span class='label'>Exam tip</span><p>Convert to fractions where it reads more naturally: 49% → “just under half”, 32% → “roughly a third”, 11% → “around one in ten”.</p></div>" },
      { id: "grammar", h: "Grammar patterns", html:
        "<div class='table-wrap'><table class='data'>" +
        "<tr><th>Pattern</th><th>Example</th></tr>" +
        "<tr><td>X accounted for N% of Y</td><td>Rent accounted for 35% of monthly outgoings.</td></tr>" +
        "<tr><td>N% of Y went on / was spent on X</td><td>A quarter of the budget went on marketing.</td></tr>" +
        "<tr><td>X, at N%, was the largest category</td><td>Salaries, at 45%, formed the single largest cost.</td></tr>" +
        "<tr><td>Change: X rose/fell from N% to M%</td><td>The share of renewables rose from 12% to 28%.</td></tr>" +
        "</table></div>" },
      { id: "two-pies", h: "Comparing two pies", html:
        "<p>Don't describe pie 1 fully, then pie 2 fully. Instead, take each segment and report its change:</p>" +
        "<p class='ex ex--yes'>The proportion of energy from coal fell by half, from 40% to 20%, while renewables saw the opposite trend, more than doubling their share to become the second-largest source.</p>" },
      { id: "mistakes", h: "Common mistakes", html:
        "<ul><li>Listing all six segments with exact percentages and no comparison.</li><li>“accounted 30%” — needs <em>for</em>.</li><li>Percentages that don't add to ~100 (misreading).</li><li>Treating each pie separately when the task is about change.</li></ul>" },
      { id: "bands", h: "Band 6 vs 8+", html:
        "<div class='callout callout--example'><span class='label'>Band 6</span><p>Food was 30%. Rent was 35%. Transport was 15%. Other was 20%.</p></div>" +
        "<div class='callout callout--band'><span class='label'>Band 8+</span><p>Rent and food together consumed almost two thirds of the household budget, at 35% and 30% respectively, leaving transport and miscellaneous costs to share the remaining third roughly equally.</p></div>" },
      { id: "checklist", h: "Examiner checklist", html:
        "<ul><li>Largest and smallest segments named in the overview?</li><li>Small segments combined, not listed one by one?</li><li>Fraction language used alongside percentages?</li><li>Two pies compared by change, not sequentially?</li></ul>" },
      { id: "example", h: "Mini example", html:
        "<p><strong>Prompt:</strong> Two pie charts show reasons given for visiting a city library, 2005 and 2020.<br>" +
        "<strong>Change:</strong> 'Borrowing books' fell 60% → 30%. 'Using computers/wifi' rose 10% → 35%. 'Events/study space' rose 15% → 25%. 'Other' steady ~10%.</p>" +
        "<p><strong>Overview:</strong> <span class='ex ex--yes'>Overall, borrowing books ceased to be the main reason for library visits, halving its share, while using digital facilities grew sharply to become the most common purpose by 2020.</span></p>" }
    ],
    keyRules: [
      "Every segment is a share of 100% — use proportion verbs.",
      "Combine small segments; don't list them.",
      "Two pies → describe each segment's change, not each pie in turn.",
      "'accounted FOR', 'a quarter OF'."
    ],
    mistakes: [
      { wrong: "Leisure accounted 12% of the total.", better: "Leisure accounted for 12% of the total.", rule: "account FOR a proportion." },
      { wrong: "In 2005 books were 60%, computers 10%… In 2020 books were 30%, computers 35%…", better: "Books halved to 30% while computer use more than tripled to 35%.", rule: "Report change segment-by-segment across the two pies." }
    ],
    flashcards: [
      { id: "pc-1", front: "Fraction phrase for 49%?", back: "just under half / almost half." },
      { id: "pc-2", front: "Fraction phrase for 32%?", back: "roughly one third / just under a third." },
      { id: "pc-3", front: "Verb: 'Housing ___ 40% of spending.'", back: "accounted for / represented / made up." },
      { id: "pc-4", front: "Two pies, one task — what's the wrong approach?", back: "Describing pie 1 in full, then pie 2 in full, with no comparison." }
    ],
    quizId: "quiz-pie-charts",
    prev: "bar-charts",
    next: "tables"
  };

  /* ---------------------------------------------------------
     6. TABLES
     --------------------------------------------------------- */
  L["tables"] = {
    slug: "tables",
    title: "Tables",
    category: "Learn",
    est: 14,
    difficulty: "Core",
    band: "5.0–9.0",
    blurb: "The densest visual. Success is selection: turn a grid of numbers into three or four meaningful comparisons.",
    objectives: [
      "Read a table by row and by column and decide which axis carries the story",
      "Select maxima, minima, notable similarities and differences",
      "Ignore data that doesn't serve a comparison",
      "Report change across years without listing every cell"
    ],
    sections: [
      { id: "what", h: "What it is / what's tested", html:
        "<p>Rows and columns of figures, sometimes across several years. There is no visual shape to lean on, so IELTS is testing <strong>data selection</strong> above everything: can you find the pattern a chart would have shown you?</p>" },
      { id: "rows-cols", h: "Rows vs columns", html:
        "<p>Decide which direction is the comparison. If rows are countries and columns are years, you can either (a) track one country over time, or (b) compare all countries in one year. Usually one of these is more interesting — pick it and build both body paragraphs around it.</p>" },
      { id: "select", h: "What to select", html:
        "<ul><li>The highest and lowest value in the whole table</li><li>The row/column with the biggest range (most change)</li><li>The row/column that stays flat</li><li>Two cells that are strikingly similar or different</li><li>Any value that breaks the pattern</li></ul>" +
        "<div class='callout callout--rule'><span class='label'>Key rule</span><p>If a number isn't the biggest, smallest, an example of a trend, or part of a comparison — leave it out.</p></div>" },
      { id: "structure", h: "Best paragraph structure", html:
        "<ol><li><strong>Introduction</strong> — paraphrase (what the table measures, for whom, over what period).</li>" +
        "<li><strong>Overview</strong> — highest/lowest overall + the row or column with the most/least change.</li>" +
        "<li><strong>Body 1</strong> — the leading items, with selected figures.</li>" +
        "<li><strong>Body 2</strong> — the trailing items + the key cross-comparison.</li></ol>" },
      { id: "vocab", h: "Language", html:
        "<p>Ranking and comparison language from the <a href='lesson.html?slug=bar-charts'>Bar Charts</a> lesson applies. Add: <em>ranged from … to …; remained within a narrow band; the figure for X was consistently higher; over the whole period; by contrast with</em>.</p>" },
      { id: "mistakes", h: "Common mistakes", html:
        "<ul><li>Converting the table into prose cell by cell.</li><li>No overview — “I'll just describe the numbers”.</li><li>Picking figures at random rather than by significance.</li><li>Losing the units (%, thousands, $).</li></ul>" },
      { id: "bands", h: "Band 6 vs 8+", html:
        "<div class='callout callout--example'><span class='label'>Band 6</span><p>In 2000 Country A was 20, Country B was 35, Country C was 41. In 2010 Country A was 22, Country B was 38, Country C was 60…</p></div>" +
        "<div class='callout callout--band'><span class='label'>Band 8+</span><p>Country C saw the steepest growth of any nation, its figure rising by almost half between 2000 and 2010, whereas Country A barely moved, remaining close to 20 throughout.</p></div>" },
      { id: "checklist", h: "Examiner checklist", html:
        "<ul><li>Did you choose an axis for the story?</li><li>Overview names overall max/min and the biggest mover?</li><li>Fewer than ~8 figures cited in total?</li><li>Every figure attached to a comparison?</li></ul>" },
      { id: "example", h: "Mini example", html:
        "<p><strong>Prompt:</strong> The table shows the percentage of households with internet access in four regions, 2005, 2012 and 2019.<br>" +
        "<strong>Data:</strong> North 55→78→92; South 20→48→80; East 12→40→75; West 60→70→85.</p>" +
        "<p><strong>Overview:</strong> <span class='ex ex--yes'>Access increased in every region and the gap between them narrowed sharply, as the South and East — which began far behind — grew fastest and had nearly caught the North and West by 2019.</span></p>" }
    ],
    keyRules: [
      "Choose one axis (over time OR across items) and build the whole answer on it.",
      "Cite fewer than about eight figures in total.",
      "Every figure must serve a max, a min, a trend or a comparison.",
      "Keep the units visible."
    ],
    mistakes: [
      { wrong: "Turning every cell into a sentence.", better: "Select maxima, minima, biggest mover and one flat item; ignore the rest.", rule: "Tables reward selection more than any other visual." },
      { wrong: "Skipping the overview because 'a table has no trend'.", better: "The overview states the overall highest/lowest and which row/column changed most.", rule: "Every Task 1 answer needs an overview, tables included." }
    ],
    flashcards: [
      { id: "tb-1", front: "First decision when you see a table?", back: "Which axis carries the story — change over time, or comparison across items." },
      { id: "tb-2", front: "Rough cap on figures cited from a table?", back: "Under about eight, each tied to a comparison." },
      { id: "tb-3", front: "Phrase for a row that barely changes.", back: "remained within a narrow band / held roughly steady / changed little." },
      { id: "tb-4", front: "What goes in a table overview?", back: "Overall max & min, and the row/column with the most (and least) change." }
    ],
    quizId: "quiz-tables",
    prev: "pie-charts",
    next: "maps"
  };

  /* ---------------------------------------------------------
     7. MAPS
     --------------------------------------------------------- */
  L["maps"] = {
    slug: "maps",
    title: "Maps",
    category: "Learn",
    est: 15,
    difficulty: "Core",
    band: "5.0–9.0",
    blurb: "Change in a place — usually two maps, sometimes a proposed development. Location language, change verbs, and passive voice.",
    objectives: [
      "Orientate with compass and position language",
      "Describe additions, removals, conversions and expansions with the right verbs",
      "Write a map overview about overall transformation, not individual objects",
      "Use the passive for changes with no stated agent"
    ],
    sections: [
      { id: "what", h: "What it is", html:
        "<p>Two maps of the same area at different times, or a current map plus a proposed plan. Tense: <strong>past</strong> for a completed change (1990 vs 2020), <strong>future / will be</strong> for a proposal.</p>" },
      { id: "first60", h: "First 60 seconds", html:
        "<ol><li>What area is it, and what two time points?</li><li>What is the overall change? (rural→urban, industrial→residential, expansion, modernisation)</li><li>What disappeared?</li><li>What is new?</li><li>What stayed the same? (there is almost always one thing — mention it)</li></ol>" },
      { id: "vocab-location", h: "Location language", html:
        "<p>to the north / south / east / west; in the northern part; in the centre; on the outskirts; adjacent to; opposite; alongside; surrounding; between; on the site of; where the … used to be</p>" },
      { id: "vocab-change", h: "Change language", html:
        "<div class='grid two'>" +
        "<div class='card'><h4>Added</h4><p>was built / constructed / erected; was added; a new … appeared; land was developed for</p></div>" +
        "<div class='card'><h4>Removed</h4><p>was demolished / knocked down / cleared / removed; disappeared; was replaced by</p></div>" +
        "<div class='card'><h4>Changed use</h4><p>was converted into; was transformed into; became; was redeveloped as</p></div>" +
        "<div class='card'><h4>Grew / shrank / moved</h4><p>was extended / expanded / widened; was reduced; was relocated to</p></div>" +
        "</div>" },
      { id: "passive", h: "Passive voice", html:
        "<p>Someone made the changes, but the map doesn't say who — so use the passive:</p>" +
        "<p class='ex ex--yes'>The forest in the east <strong>was cleared</strong> and <strong>was replaced by</strong> a housing estate, while the small harbour <strong>was expanded</strong> into a marina.</p>" +
        "<div class='callout callout--mistake'><span class='label'>Common mistake</span><p><span class='ex ex--no'>They built a school and they cut the trees.</span> — active + vague 'they'.</p></div>" },
      { id: "overview", h: "Writing the map overview", html:
        "<p>Zoom out. The overview is about the <strong>character</strong> of the change, not a list:</p>" +
        "<p class='ex ex--yes'>Over the thirty-year period the village was substantially built up, losing most of its farmland and woodland to residential development and gaining a range of amenities, so that it changed from a rural to a largely suburban settlement.</p>" },
      { id: "structure", h: "Best paragraph structure", html:
        "<ol><li>Introduction — paraphrase (area + two dates).</li><li>Overview — overall transformation + what remained.</li><li>Body 1 — changes in one region (e.g. the north/west).</li><li>Body 2 — changes in the other region (e.g. the south/east), plus what was unchanged.</li></ol>" +
        "<p class='small muted'>Organising by area is usually cleaner than organising by type of change.</p>" },
      { id: "bands", h: "Band 6 vs 8+", html:
        "<div class='callout callout--example'><span class='label'>Band 6</span><p>There is a new road. The trees are gone. They built houses. The lake is still there.</p></div>" +
        "<div class='callout callout--band'><span class='label'>Band 8+</span><p>In the northern half, the woodland that once covered the area was cleared to make way for a residential estate, which was served by a new access road running east to west. The lake to the south was retained and a footpath was added around it.</p></div>" },
      { id: "checklist", h: "Examiner checklist", html:
        "<ul><li>Overview describes the overall change in character?</li><li>Passive voice used for the changes?</li><li>Position of each feature made clear?</li><li>At least one unchanged feature mentioned?</li><li>Correct tense for past change vs proposal?</li></ul>" },
      { id: "example", h: "Mini example", html:
        "<p><strong>Prompt:</strong> The maps show a coastal town in 1985 and 2015.<br>" +
        "<strong>Changes:</strong> Farmland (west) → housing + supermarket. Small pier → large marina. Two-lane coast road → dual carriageway. Church (centre) unchanged.</p>" +
        "<p><strong>Overview:</strong> <span class='ex ex--yes'>The town developed considerably over the thirty years, as agricultural land was built over for housing and retail and the seafront was upgraded for tourism, although the church at its centre was preserved.</span></p>" }
    ],
    keyRules: [
      "Overview = overall change in character + what stayed the same.",
      "Use the passive: 'was built', 'was replaced by'.",
      "Anchor every feature with a position phrase.",
      "Past tense for completed change; 'will be' for proposals."
    ],
    mistakes: [
      { wrong: "They removed the trees and they made a car park.", better: "The trees were removed and a car park was built in their place.", rule: "Passive voice, because the agent is unknown/irrelevant." },
      { wrong: "Listing every new building in the overview.", better: "The overview states the area became more developed / urban / industrial.", rule: "Overview = the character of the transformation, not an inventory." }
    ],
    flashcards: [
      { id: "mp-1", front: "Turn active into passive: 'They demolished the factory.'", back: "The factory was demolished." },
      { id: "mp-2", front: "Verb for 'a park became a shopping centre'.", back: "was converted into / was transformed into / was redeveloped as." },
      { id: "mp-3", front: "What should a map overview focus on?", back: "The overall change in the area's character (e.g. rural → urban) plus what was retained." },
      { id: "mp-4", front: "Tense for a 'proposed development' map?", back: "Future — 'will be built', 'is to be relocated'." }
    ],
    quizId: "quiz-maps",
    prev: "tables",
    next: "processes"
  };

  /* ---------------------------------------------------------
     8. PROCESSES
     --------------------------------------------------------- */
  L["processes"] = {
    slug: "processes",
    title: "Process Diagrams",
    category: "Learn",
    est: 15,
    difficulty: "Core",
    band: "5.0–9.0",
    blurb: "A sequence of stages — natural or manufactured, linear or cyclical. Sequence markers and the passive carry the whole answer.",
    objectives: [
      "Count the stages and identify the start and end points",
      "Decide whether the process is linear or cyclical",
      "Sequence stages with varied linking language",
      "Use the passive for manufactured processes; describe, don't explain"
    ],
    sections: [
      { id: "what", h: "What it is", html:
        "<p>A diagram showing how something is made or how a natural cycle works, in a fixed number of steps. Tense: usually <strong>present simple</strong>. Voice: <strong>passive</strong> for manufactured processes (the brick is fired), often <strong>active</strong> for natural ones (the water evaporates).</p>" },
      { id: "first60", h: "First 60 seconds", html:
        "<ol><li>What is produced / what cycle is shown?</li><li>How many stages? (count them for the overview)</li><li>Where does it begin (raw input) and end (final output)?</li><li>Is there a loop back to an earlier stage? → cyclical</li><li>Any stage that splits or merges?</li></ol>" },
      { id: "overview", h: "Overview for a process", html:
        "<p>The overview states <strong>how many stages, the start and end, and linear vs cyclical</strong> — nothing else:</p>" +
        "<p class='ex ex--yes'>Overall, the manufacture of glass involves six main stages, from the collection of raw materials through to the delivery of finished products; it is a linear process with one recycling loop feeding crushed waste glass back into the furnace.</p>" },
      { id: "sequence", h: "Sequence language", html:
        "<p>Rotate these so you don't repeat 'then':</p>" +
        "<p><strong>Start:</strong> initially, to begin, in the first stage, at the outset</p>" +
        "<p><strong>Middle:</strong> next, subsequently, after this, following this, once X is complete, at the third stage, meanwhile</p>" +
        "<p><strong>End:</strong> finally, in the final stage, eventually, at which point the process is complete</p>" +
        "<p><strong>Time relationships:</strong> before, after, once, as soon as, until</p>" },
      { id: "passive", h: "Passive voice", html:
        "<div class='table-wrap'><table class='data'>" +
        "<tr><th>Active (avoid for manufacturing)</th><th>Passive (use)</th></tr>" +
        "<tr><td>Workers heat the mixture.</td><td>The mixture is heated to 1500°C.</td></tr>" +
        "<tr><td>They pour it into moulds.</td><td>It is poured into moulds.</td></tr>" +
        "<tr><td>A machine packages the product.</td><td>The product is packaged and labelled.</td></tr>" +
        "</table></div>" +
        "<p>Useful passive verbs: is collected, transported, crushed, heated, mixed, filtered, cooled, moulded, dried, stored, packaged, distributed.</p>" },
      { id: "structure", h: "Best paragraph structure", html:
        "<ol><li>Introduction — paraphrase (what process, how it's shown).</li><li>Overview — number of stages + start/end + linear/cyclical.</li><li>Body 1 — the first half of the stages, in order.</li><li>Body 2 — the second half, ending at the final output.</li></ol>" +
        "<div class='callout callout--tip'><span class='label'>Exam tip</span><p>Split the body at a natural break (e.g. 'preparation' vs 'production'), not just at the numerical midpoint.</p></div>" },
      { id: "mistakes", h: "Common mistakes", html:
        "<ul><li>Explaining <em>why</em> a stage happens (that's analysis, not description).</li><li>Using 'then' for every link.</li><li>Active voice throughout a manufacturing process.</li><li>Forgetting to say how many stages there are.</li></ul>" },
      { id: "bands", h: "Band 6 vs 8+", html:
        "<div class='callout callout--example'><span class='label'>Band 6</span><p>First they cut the trees. Then the wood goes to the factory. Then they make paper. Then it is sold.</p></div>" +
        "<div class='callout callout--band'><span class='label'>Band 8+</span><p>In the initial stage, timber is harvested and transported to a mill, where the logs are stripped of bark and reduced to wood chips. These chips are subsequently cooked with chemicals to produce pulp, which is then bleached before being pressed and dried into paper.</p></div>" },
      { id: "checklist", h: "Examiner checklist", html:
        "<ul><li>Overview gives stage count + start + end + linear/cyclical?</li><li>Passive used for a manufactured process?</li><li>At least four different sequence markers?</li><li>No explanation of causes?</li><li>Stages in the correct order?</li></ul>" },
      { id: "example", h: "Mini example", html:
        "<p><strong>Prompt:</strong> The diagram shows how honey is produced. Stages: bees collect nectar → nectar stored in honeycomb → hive frames removed by beekeeper → frames uncapped → spun in an extractor → honey filtered → bottled.</p>" +
        "<p><strong>Overview:</strong> <span class='ex ex--yes'>The production of honey involves seven stages, beginning with the collection of nectar by bees and ending with bottled honey ready for sale; it is a linear process combining a natural phase in the hive with a manufactured extraction phase.</span></p>" }
    ],
    keyRules: [
      "Overview = number of stages + start + end + linear or cyclical.",
      "Present simple; passive for manufactured processes.",
      "Describe the steps — never explain why they happen.",
      "Use at least four different sequence markers."
    ],
    mistakes: [
      { wrong: "The clay is fired so that it becomes hard enough to use, which is important for quality.", better: "The clay is fired in a kiln, after which it is left to cool.", rule: "Report the step; don't justify it." },
      { wrong: "First… then… then… then…", better: "Initially… subsequently… once this is complete… finally…", rule: "Vary sequence markers for Coherence & Cohesion marks." }
    ],
    flashcards: [
      { id: "pr-1", front: "Four things a process overview must contain.", back: "Number of stages, start point, end point, linear or cyclical." },
      { id: "pr-2", front: "Voice for a manufacturing process?", back: "Passive — 'the ore is crushed', 'it is then heated'." },
      { id: "pr-3", front: "Give three sequence markers that aren't 'then'.", back: "initially, subsequently, following this, once…, eventually, finally." },
      { id: "pr-4", front: "A process loops back to stage 2. What is it?", back: "Cyclical (say so in the overview)." }
    ],
    quizId: "quiz-processes",
    prev: "maps",
    next: "mixed-charts"
  };

  /* ---------------------------------------------------------
     9. MIXED / MULTIPLE CHARTS
     --------------------------------------------------------- */
  L["mixed-charts"] = {
    slug: "mixed-charts",
    title: "Mixed / Multiple Charts",
    category: "Learn",
    est: 16,
    difficulty: "Advanced",
    band: "6.0–9.0",
    blurb: "Two or more visuals in one task. Find the link between them, plan one combined overview, and don't drown in data.",
    objectives: [
      "Identify the relationship between two visuals",
      "Decide whether to integrate or separate the description",
      "Write a single overview that covers both visuals",
      "Budget words so neither visual is neglected"
    ],
    sections: [
      { id: "what", h: "What it is", html:
        "<p>The task gives you <strong>two (occasionally three) visuals</strong> — e.g. a line graph + a table, a bar chart + a pie chart, two pie charts + a bar chart. They are almost always <strong>related</strong>: same topic, same population, complementary angles.</p>" },
      { id: "link", h: "Step 1 — find the link", html:
        "<p>Before writing, answer: <em>how do these two visuals relate?</em></p>" +
        "<ul><li>One shows totals, the other shows breakdown (bar of total energy use + pie of sources)</li><li>One shows change over time, the other a single snapshot</li><li>One shows the 'what', the other the 'who' (spending by category + spending by age group)</li></ul>" +
        "<div class='callout callout--rule'><span class='label'>Key rule</span><p>The overview should mention <strong>both</strong> visuals and, ideally, the connection between them.</p></div>" },
      { id: "integrate", h: "Step 2 — integrate or separate?", html:
        "<p><strong>Separate</strong> (one body paragraph per visual) is safe and usually enough for Band 7. Do this when the visuals share little detail.</p>" +
        "<p><strong>Integrate</strong> (paragraphs organised by theme, drawing on both visuals) can reach Band 8+ but is riskier. Do this only if there's a clear cross-visual comparison to make.</p>" },
      { id: "overview", h: "Step 3 — one combined overview", html:
        "<p class='ex ex--yes'>Overall, total electricity generation rose steadily over the period, and this growth was accompanied by a marked shift in its sources, with fossil fuels giving way to renewables as the dominant category by the end.</p>" +
        "<p class='small muted'>First clause = visual 1 (the line graph of totals). Second clause = visual 2 (the pie charts of sources). One sentence, both visuals.</p>" },
      { id: "structure", h: "Best paragraph structure", html:
        "<ol><li>Introduction — paraphrase, naming both visuals.</li><li>Overview — one big feature from each visual, linked if possible.</li><li>Body 1 — visual 1 in detail (selected features).</li><li>Body 2 — visual 2 in detail (selected features) + any cross-reference.</li></ol>" },
      { id: "budget", h: "Word budgeting", html:
        "<p>170–190 words is plenty. Rough split: intro 25, overview 35, body 1 ~55, body 2 ~55. If one visual is much simpler, give it fewer words — but never zero.</p>" +
        "<div class='callout callout--mistake'><span class='label'>Common mistake</span><p>Spending 120 words on the first visual and running out of time for the second. Examiners penalise an incomplete response heavily.</p></div>" },
      { id: "bands", h: "Band 6 vs 8+", html:
        "<div class='callout callout--example'><span class='label'>Band 6</span><p>The first chart shows sales. Sales went up. The second chart shows the products. Product A is the biggest.</p></div>" +
        "<div class='callout callout--band'><span class='label'>Band 8+</span><p>While overall sales climbed by around 40% over the decade, the composition of those sales changed substantially: Product A, which had generated over half of revenue at the start, was overtaken by Product C, reflecting a broader move towards the premium range shown in the second chart.</p></div>" },
      { id: "checklist", h: "Examiner checklist", html:
        "<ul><li>Introduction names both visuals?</li><li>Overview contains a feature from each?</li><li>Both visuals given a body paragraph's worth of attention?</li><li>At least one link drawn between them?</li><li>Under ~200 words, finished in time?</li></ul>" },
      { id: "example", h: "Mini example", html:
        "<p><strong>Prompt:</strong> A line graph shows total international students at a university (2000–2020); a bar chart shows their region of origin in 2000 and 2020.<br>" +
        "<strong>Link:</strong> The graph shows growth in number; the bars show a shift in where they come from (Europe fell as a share, Asia rose sharply).</p>" +
        "<p><strong>Overview:</strong> <span class='ex ex--yes'>Overall, the number of international students more than doubled over the two decades, and this expansion was driven largely by students from Asia, whose share of the total rose sharply while Europe's declined.</span></p>" }
    ],
    keyRules: [
      "Find the relationship between the visuals before writing.",
      "The overview must contain a feature from each visual.",
      "Separate paragraphs per visual is fine; integrate only with a real cross-comparison.",
      "Budget words so both visuals are covered — never run out of time."
    ],
    mistakes: [
      { wrong: "Describing visual 1 for 130 words, then two rushed sentences on visual 2.", better: "Plan a word budget: ~55 words per visual in the body.", rule: "An incomplete response is capped in Task Achievement." },
      { wrong: "An overview that only mentions one of the two visuals.", better: "One clause per visual, linked: 'X rose, and alongside this Y shifted towards…'.", rule: "The overview represents the whole task, which is both visuals." }
    ],
    flashcards: [
      { id: "mx-1", front: "First thing to do with a two-visual task?", back: "Identify how the two visuals relate (totals vs breakdown, time vs snapshot, what vs who)." },
      { id: "mx-2", front: "Minimum the overview must do in a mixed task?", back: "Mention a key feature from each visual." },
      { id: "mx-3", front: "Safe body structure for mixed charts?", back: "One body paragraph per visual, then a linking sentence." },
      { id: "mx-4", front: "Biggest risk in mixed-chart tasks?", back: "Running out of time and leaving the second visual barely described." }
    ],
    quizId: "quiz-mixed-charts",
    prev: "processes",
    next: null
  };

})(window.IT1M.lessons);
