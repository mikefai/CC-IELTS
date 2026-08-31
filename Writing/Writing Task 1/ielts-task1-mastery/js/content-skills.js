/* ============================================================
   IELTS Task 1 Mastery — master-skill modules
   window.IT1M.skills  (keyed by slug)
   Schema mirrors lessons: {slug,title,est,band,blurb,objectives,
     sections:[{id,h,html}], keyRules, flashcards, quizId}
   ============================================================ */
window.IT1M = window.IT1M || {};
window.IT1M.skills = window.IT1M.skills || {};

(function (S) {
  "use strict";

  S["data-selection"] = {
    slug: "data-selection", title: "Data Selection", est: 12, band: "5.0–9.0",
    blurb: "You are not rewarded for mentioning every figure. Learn to spot the four or five features that carry the story.",
    objectives: [
      "List the features that are always worth reporting",
      "Reject figures that serve no comparison",
      "Choose 2–4 features for the overview and group the rest"
    ],
    sections: [
      { id: "principle", h: "The principle", html:
        "<div class='callout callout--rule'><span class='label'>Key rule</span><p>A figure earns its place only if it is the highest, the lowest, an example of a trend, or one half of a comparison. Everything else is noise.</p></div>" },
      { id: "always", h: "Always worth reporting", html:
        "<ul><li>The highest and lowest values overall</li><li>The biggest change / steepest trend</li><li>The smallest change / flattest item</li><li>A major gap between two items</li><li>Two items that are strikingly similar</li><li>A crossover or turning point</li><li>An exception that breaks the pattern</li></ul>" },
      { id: "exercise", h: "Try it", html:
        "<div class='exercise' data-explain='C is the steepest trend and the eventual leader — the one feature that must be reported.'><p class='q'>A line graph shows 4 products. Product C rises from 5 to 60 (steepest of all); A, B and D drift between 20 and 30 the whole time. Which is the single most important feature?</p>" +
        "<button class='opt' data-correct='false'>Product A ended at 25.</button>" +
        "<button class='opt' data-correct='false'>Product B dipped slightly in year 3.</button>" +
        "<button class='opt' data-correct='true' data-explain='the dramatic rise of C, ending as the leader, is the headline.'>Product C rose dramatically and became the highest by the end.</button>" +
        "<button class='opt' data-correct='false'>All four products were sold every year.</button>" +
        "<div class='feedback'></div></div>" },
      { id: "overview-select", h: "Selecting for the overview", html:
        "<p>From your list of important features, the overview takes the <strong>2–4 most general</strong>. If two features are really the same story (\"C rose most\" / \"C became the leader\"), count them as one.</p>" }
    ],
    keyRules: [
      "A figure must be a max, a min, a trend example or a comparison — or it's cut.",
      "Overview = the 2–4 most general of your selected features.",
      "Group leftover detail; don't list it."
    ],
    flashcards: [
      { id: "ds-1", front: "When does a figure earn a place in your answer?", back: "If it is the highest, lowest, an example of a trend, or one side of a comparison." },
      { id: "ds-2", front: "How many features go in the overview?", back: "2–4, the most general ones." }
    ],
    quizId: "quiz-data-selection"
  };

  S["comparisons"] = {
    slug: "comparisons", title: "Comparison Language", est: 13, band: "5.0–9.0",
    blurb: "Structures for putting two figures next to each other — multiples, fractions, gaps and contrast — and the errors to avoid.",
    objectives: [
      "Use 'X times as high as' and fraction comparisons accurately",
      "Describe a widening or narrowing gap",
      "Contrast with whereas / while / by contrast",
      "Avoid the 'respectively' and 'twice more' errors"
    ],
    sections: [
      { id: "core", h: "Core structures", html:
        "<div class='table-wrap'><table class='data'>" +
        "<tr><th>Meaning</th><th>Structure</th></tr>" +
        "<tr><td>A bigger than B</td><td>A was higher than B / A exceeded B / A outnumbered B</td></tr>" +
        "<tr><td>By how much</td><td>A exceeded B by around 15 million</td></tr>" +
        "<tr><td>Multiple</td><td>A was twice as high as B / three times the figure for B</td></tr>" +
        "<tr><td>Fraction</td><td>B was half the figure for A / a third of A's total</td></tr>" +
        "<tr><td>Similar</td><td>A and B were broadly similar / roughly equal / on a par</td></tr>" +
        "<tr><td>Contrast</td><td>whereas, while, by contrast, in comparison, compared with</td></tr>" +
        "<tr><td>Gap over time</td><td>the gap between A and B widened / narrowed / closed</td></tr>" +
        "</table></div>" },
      { id: "errors", h: "Common errors", html:
        "<div class='callout callout--mistake'><span class='label'>Common mistake</span>" +
        "<p><span class='ex ex--no'>A was twice more than B.</span><span class='ex ex--yes'>A was twice as high as B. / A was double B.</span></p>" +
        "<p><span class='ex ex--no'>Sales were 20 and 40 for A and B respectively… wait, which is which?</span><span class='ex ex--yes'>Use 'respectively' only when the order is unambiguous: 'A and B stood at 20 and 40 respectively.'</span></p>" +
        "<p><span class='ex ex--no'>A is more higher than B.</span><span class='ex ex--yes'>A is much higher than B.</span></p></div>" },
      { id: "exercise", h: "Fix the comparison", html:
        "<div class='exercise'><p class='q'>Choose the accurate version for: A = 60, B = 20.</p>" +
        "<button class='opt' data-correct='false' data-explain=\"'three times more' is ambiguous; avoid it.\">A was three times more than B.</button>" +
        "<button class='opt' data-correct='true' data-explain='Unambiguous — the standard academic form.'>A was three times as high as B.</button>" +
        "<button class='opt' data-correct='false' data-explain=\"'more bigger' is not a comparative form.\">A was more bigger than B.</button>" +
        "<div class='feedback'></div></div>" }
    ],
    keyRules: [
      "'X times as high as' — never 'X times more than'.",
      "'respectively' only when the pairing order is obvious.",
      "'much higher', not 'more higher'.",
      "Describe a gap as widening / narrowing over time."
    ],
    flashcards: [
      { id: "cp-1", front: "A = 80, B = 40. Best phrasing?", back: "A was twice as high as B / B was half the figure for A." },
      { id: "cp-2", front: "When is 'respectively' safe to use?", back: "Only when the order of the two items is unambiguous." },
      { id: "cp-3", front: "A stays at 50, B climbs from 10 to 45. The gap…", back: "…narrowed / closed over the period." }
    ],
    quizId: "quiz-comparisons"
  };

  S["approximation"] = {
    slug: "approximation", title: "Approximation Language", est: 8, band: "5.0–9.0",
    blurb: "Figures read off a chart are estimates. A reference set of hedges, with the fractions that read most naturally.",
    objectives: [
      "Hedge a figure with the right register",
      "Convert awkward percentages to clean fractions",
      "Choose 'just under' vs 'just over' correctly"
    ],
    sections: [
      { id: "set", h: "The reference set", html:
        "<div class='grid two'>" +
        "<div class='card'><h4>General</h4><p>about · around · approximately · roughly · some (before a number)</p></div>" +
        "<div class='card'><h4>Close to a round number</h4><p>almost · nearly · just under · just over · slightly above · slightly below · in the region of</p></div>" +
        "</div>" },
      { id: "fractions", h: "Percentages as fractions", html:
        "<div class='table-wrap'><table class='data'>" +
        "<tr><th>Figure</th><th>Natural phrasing</th></tr>" +
        "<tr><td>48–52%</td><td>about half</td></tr>" +
        "<tr><td>31–35%</td><td>around a third</td></tr>" +
        "<tr><td>23–27%</td><td>roughly a quarter</td></tr>" +
        "<tr><td>63–68%</td><td>nearly two thirds</td></tr>" +
        "<tr><td>10–12%</td><td>around one in ten</td></tr>" +
        "<tr><td>74–78%</td><td>just over three quarters</td></tr>" +
        "</table></div>" },
      { id: "direction", h: "Under vs over", html:
        "<p>19% → <em>just under a fifth</em> (below 20). 21% → <em>just over a fifth</em> (above 20). Match the hedge to which side of the round number the figure sits on.</p>" +
        "<div class='callout callout--tip'><span class='label'>Exam tip</span><p>Don't hedge a figure that is exact on the chart (a labelled data point). Hedge only when you're reading between gridlines.</p></div>" }
    ],
    keyRules: [
      "Approximate figures read between gridlines; report labelled points exactly.",
      "Convert messy percentages to clean fractions.",
      "'just under' below the round number, 'just over' above it."
    ],
    flashcards: [
      { id: "ap-1", front: "Natural phrasing for 34%?", back: "around a third / just over a third." },
      { id: "ap-2", front: "19% of respondents — hedge?", back: "just under a fifth." },
      { id: "ap-3", front: "Should you hedge a clearly labelled data point?", back: "No — report it exactly. Hedge only estimated readings." }
    ],
    quizId: "quiz-approximation"
  };

  S["grammar"] = {
    slug: "grammar", title: "Grammar for Task 1", est: 16, band: "5.0–9.0",
    blurb: "The structures that lift Grammatical Range: tenses, the passive, comparatives and superlatives, relative and participle clauses, and data prepositions.",
    objectives: [
      "Choose the right tense from the time frame",
      "Form the passive for processes and maps",
      "Build comparative and superlative sentences without slips",
      "Use participle clauses to combine trend information"
    ],
    sections: [
      { id: "tense", h: "Tense", html:
        "<ul><li><strong>Past simple</strong> — a past time frame (1990–2020): <em>consumption rose</em>.</li>" +
        "<li><strong>Present simple</strong> — a process or a timeless chart: <em>the water evaporates</em>.</li>" +
        "<li><strong>Future / 'will'</strong> — a proposal map or a projected graph: <em>a car park will be built</em>.</li>" +
        "<li><strong>Present perfect</strong> — rarely; only if the chart runs 'up to now'.</li></ul>" },
      { id: "passive", h: "The passive", html:
        "<p>be + past participle. Use it when the doer is unknown or irrelevant.</p>" +
        "<p class='ex ex--yes'>The ore <strong>is crushed</strong> and then <strong>is transported</strong> to a smelter. / The old market <strong>was demolished</strong> and <strong>was replaced by</strong> flats.</p>" },
      { id: "comp", h: "Comparatives & superlatives", html:
        "<div class='table-wrap'><table class='data'>" +
        "<tr><th>Form</th><th>Example</th></tr>" +
        "<tr><td>-er / more</td><td>higher, steeper, more gradual, more significant</td></tr>" +
        "<tr><td>the -est / the most</td><td>the highest, the steepest, the most dramatic</td></tr>" +
        "<tr><td>far / much / considerably + comparative</td><td>far higher, considerably steeper</td></tr>" +
        "<tr><td>the + comparative, the + comparative</td><td>the later the year, the higher the figure</td></tr>" +
        "</table></div>" +
        "<div class='callout callout--mistake'><span class='label'>Common mistake</span><p><span class='ex ex--no'>the most highest / more higher</span><span class='ex ex--yes'>the highest / much higher</span></p></div>" },
      { id: "clauses", h: "Relative & participle clauses", html:
        "<p class='ex ex--yes'>Coal, <strong>which had been the leading fuel</strong>, fell sharply. (relative)</p>" +
        "<p class='ex ex--yes'>Gas rose steadily, <strong>overtaking coal in 2005</strong> and <strong>reaching 45 units by 2018</strong>. (participle — combines three facts in one sentence)</p>" },
      { id: "prep", h: "Prepositions with data", html:
        "<ul><li>rise / increase <strong>by</strong> 20% (amount of change)</li><li>rise <strong>to</strong> 60 units (end value)</li><li>rise <strong>from</strong> 40 <strong>to</strong> 60</li><li>a rise <strong>of</strong> 20 units / <strong>in</strong> sales</li><li><strong>at</strong> around 30% (a value)</li><li><strong>between</strong> 1990 <strong>and</strong> 2000</li></ul>" },
      { id: "exercise", h: "Correct the sentence", html:
        "<div class='exercise'><p class='q'>Which sentence is correct?</p>" +
        "<button class='opt' data-correct='false' data-explain=\"'increased with' is wrong — use 'by'.\">The population increased with 3 million.</button>" +
        "<button class='opt' data-correct='false' data-explain=\"double superlative — 'the most highest'.\">Tokyo had the most highest figure.</button>" +
        "<button class='opt' data-correct='true' data-explain='rise BY an amount, then a participle clause to add the endpoint.'>The figure rose by 3 million, reaching 25 million in 2020.</button>" +
        "<div class='feedback'></div></div>" }
    ],
    keyRules: [
      "Time frame decides tense — usually past simple.",
      "Passive for processes and map changes.",
      "'the highest' / 'much higher' — never double up.",
      "increase BY an amount, TO an end value, FROM…TO."
    ],
    flashcards: [
      { id: "gr-1", front: "Passive of 'A machine packages the goods.'", back: "The goods are packaged." },
      { id: "gr-2", front: "Fix: 'GDP grew with 4%.'", back: "GDP grew by 4%." },
      { id: "gr-3", front: "Combine with a participle clause: 'Sales rose. Sales hit 5m in 2020.'", back: "Sales rose, hitting 5 million in 2020." },
      { id: "gr-4", front: "Fix: 'It was the more higher of the two.'", back: "It was the higher of the two." }
    ],
    quizId: "quiz-grammar"
  };

})(window.IT1M.skills);
