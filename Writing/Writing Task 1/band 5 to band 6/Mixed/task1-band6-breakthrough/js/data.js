/* ============================================================
   data.js — all lesson content in one place.
   Attaches window.T1_DATA. Loaded before every tool script.
   No logic here: pure data so it can be checked at a glance.
   ============================================================ */
(function (global) {
  "use strict";

  var T1_DATA = {};

  /* ---------- exam facts ---------- */
  T1_DATA.facts = [
    { big: "20 min", label: "Spend about 20 minutes. Task 2 needs the other 40 and is worth double." },
    { big: "150+ words", label: "Write at least 150 words. Under 150 caps your Task Achievement at Band 5, whatever else you do." },
    { big: "1 / 3", label: "Task 1 is one third of your Writing score. Task 2 is the other two thirds." }
  ];

  /* ---------- the 4 criteria (Band 6 vs Band 7, plain English) ---------- */
  T1_DATA.criteria = [
    {
      name: "Task Achievement",
      pct: "25%",
      band6: "You cover the main points and include an overview, but some details are missing, wrong, or hard to follow. Data support is thin.",
      band7: "You give a clear overview of the main trends. You select the important features and support each one with accurate figures. Nothing key is left out."
    },
    {
      name: "Coherence & Cohesion",
      pct: "25%",
      band6: "You use paragraphs and basic linkers (and, but, because), but they can be repetitive or mechanical. Grouping of information is not always logical.",
      band7: "Information is grouped logically into clear paragraphs. Linking is varied and natural (whereas, while, in contrast). The reader never gets lost."
    },
    {
      name: "Lexical Resource",
      pct: "25%",
      band6: "Enough vocabulary to get the meaning across, but you repeat words (\"increased\", \"shows\") and make noticeable word-choice or spelling slips.",
      band7: "A range of data-description language used accurately: trend verbs, noun forms, approximation, comparison. Errors are rare and do not distract."
    },
    {
      name: "Grammatical Range & Accuracy",
      pct: "25%",
      band6: "A mix of simple and a few complex sentences. Errors happen in most sentences but usually don't block meaning. Tense is sometimes wrong.",
      band7: "A variety of sentence structures (comparatives, relative clauses, passives). Most sentences are error-free. Tense matches the time period consistently."
    }
  ];

  T1_DATA.overviewRule =
    "If the examiner cannot find a clear overview — the 2 or 3 big-picture messages, with no small numbers — your Task Achievement cannot go above Band 6, and is usually Band 5. Write the overview FIRST, before any detail. It is the single fastest way off Band 5.";

  /* ---------- the 6 question types ---------- */
  T1_DATA.questionTypes = [
    {
      id: "line",
      name: "Line graph",
      shows: "How one or more things change over a period of time (years, months, hours).",
      first: "Look at the START value and the END value of each line. Is it higher or lower overall? Then find the highest and lowest points.",
      traps: [
        "Describing every single data point instead of the shape of the line.",
        "Using the present tense when the years are in the past (1990–2020 needs past simple).",
        "Forgetting to compare the lines with each other, not just describe them one by one."
      ],
      vocabLabel: "Trend language",
      vocab: ["rose / climbed / surged", "fell / dropped / plummeted", "fluctuated", "levelled off / plateaued", "peaked at", "a gradual rise", "a sharp fall", "remained stable"]
    },
    {
      id: "bar",
      name: "Bar chart",
      shows: "Comparisons between separate groups, or the same groups at a few points in time.",
      first: "Find the tallest and shortest bars. If there is a time element, check which bars grew and which shrank.",
      traps: [
        "Listing the value of every bar with no grouping and no comparison.",
        "Missing the overview: which group is biggest / smallest overall?",
        "Treating a bar chart with years as if it were continuous like a line graph."
      ],
      vocabLabel: "Comparison language",
      vocab: ["by far the largest", "the smallest figure", "twice as high as", "slightly / significantly higher than", "whereas", "compared with", "the second most common", "roughly the same as"]
    },
    {
      id: "pie",
      name: "Pie chart",
      shows: "Proportions of a whole at one moment — or 2–3 pies compared across time or groups.",
      first: "Find the largest and smallest slice in each pie. If there are two pies, look at what changed between them.",
      traps: [
        "Reading out all the percentages in order with no grouping.",
        "Not linking the two pies — describe the CHANGE, not two separate lists.",
        "Confusing percentage and number ('20% more' vs '20 percentage points more')."
      ],
      vocabLabel: "Proportion language",
      vocab: ["accounted for", "made up", "a quarter / a third / half of", "the largest proportion", "a small minority", "the majority of", "one in five", "a fifth of"]
    },
    {
      id: "table",
      name: "Table",
      shows: "Exact figures for several categories, often across several years. The most data-dense task.",
      first: "You must SELECT. Pick the highest, the lowest, the biggest change. Do not try to use every number.",
      traps: [
        "Trying to describe every cell — impossible in 20 minutes and it kills your overview.",
        "No overview because you got lost in the numbers.",
        "Rounding badly, or copying long figures exactly instead of approximating."
      ],
      vocabLabel: "Selection + approximation",
      vocab: ["the highest figure", "the lowest figure", "the greatest increase", "approximately", "just over / just under", "well above the average", "a marginal change", "the exception was"]
    },
    {
      id: "process",
      name: "Process diagram",
      shows: "The stages of how something is made or how a natural cycle works. No numbers, no time period.",
      first: "Count the stages. Find where it begins and where it ends. Check if it is a cycle (loops back) or a line (start to finish).",
      traps: [
        "Using past tense — a process is a general truth, so use the present simple passive.",
        "Adding opinions or reasons ('this is a good method') — just report the stages.",
        "No sequencers, so the reader cannot follow the order."
      ],
      vocabLabel: "Passive + sequencers",
      vocab: ["First, / To begin,", "Next, / Then,", "Subsequently,", "After that,", "Once X is complete,", "Finally,", "is collected / are processed", "the raw material is delivered"]
    },
    {
      id: "map",
      name: "Map",
      shows: "How a place changed between two (sometimes three) dates, or two options for a site.",
      first: "Compare the two maps corner by corner. What was ADDED, what was REMOVED, what STAYED, what MOVED or changed use.",
      traps: [
        "No compass language, so the reader cannot picture where things are.",
        "Using past tense for the 'before' map but present for 'after' — keep the time frame consistent.",
        "Describing one map fully, then the other — describe the CHANGES instead."
      ],
      vocabLabel: "Location + change verbs",
      vocab: ["to the north / south-east of", "adjacent to / next to", "was demolished / was knocked down", "was replaced by", "has been redeveloped", "a new X was built", "the woodland was cleared", "remained unchanged"]
    }
  ];

  /* ---------- the 4-paragraph skeleton ---------- */
  T1_DATA.skeleton = [
    {
      p: "P1", title: "Introduction", words: "1–2 sentences · ~30 words",
      guide: "Paraphrase the question sentence. Change the nouns, verbs and structure. Never copy more than 3 words in a row from the prompt.",
      copied: "The graph below shows the number of cars produced in three countries between 2000 and 2015.",
      paraphrased: "The line graph compares car manufacturing output in Japan, Germany and South Korea over a fifteen-year period from 2000."
    },
    {
      p: "P2", title: "Overview", words: "2–3 sentences · ~40 words", badge: "The paragraph that decides your band",
      guide: "Start with \"Overall,\". Give the 2–3 biggest messages: the main trend, the highest / lowest, the biggest gap. NO specific numbers here.",
      copied: "Overall, in 2000 Japan produced 2 million cars and by 2015 it produced 3.1 million while Germany went from 1.8 to 2.4 million.",
      paraphrased: "Overall, output rose in all three countries across the period. Japan remained the largest producer throughout, whereas South Korea, though starting lowest, showed the fastest growth."
    },
    {
      p: "P3", title: "Detail 1", words: "~50 words",
      guide: "Take the first logical group (e.g. the two lines that behave similarly, or the first time-half). Describe the movement and support it with 2–3 exact figures. Compare.",
      copied: "Japan was 2 in 2000. Then 2.2. Then 2.5. Then 2.8. Then 3.1 in 2015.",
      paraphrased: "Japanese production climbed steadily from 2 million units in 2000 to a peak of 3.1 million in 2015, an increase of over 50%. Germany followed a similar upward path but more gently, reaching 2.4 million."
    },
    {
      p: "P4", title: "Detail 2", words: "~50 words",
      guide: "The second group. Same method: movement + figures + comparison. Stop when you run out of important data. No conclusion, no opinion.",
      copied: "South Korea was the lowest. It went up. It was 1.9 at the end. That is all.",
      paraphrased: "South Korea, by contrast, began at just 0.8 million — less than half the Japanese figure — but surged to 1.9 million by 2015, more than doubling its output and closing much of the gap on Germany."
    }
  ];

  /* ---------- vocabulary bank ---------- */
  /* each group: id, name, tag, cols, rows[] (row = array of cells). upgrades held separately. */
  T1_DATA.vocab = {
    groups: [
      {
        id: "trend-verbs", name: "Trend verbs + adverbs", tag: "lines · bars",
        cols: ["Direction", "Verbs (weak to strong)", "Adverb / collocation"],
        rows: [
          ["Up", "rise, climb, surge, soar", "sharply, steadily, gradually, slightly"],
          ["Down", "fall, decline, plunge, plummet", "sharply, dramatically, gently, marginally"],
          ["Up + down", "fluctuate, vary", "wildly, erratically, slightly"],
          ["Flat", "level off, plateau, stabilise", "at around, at just over"],
          ["Highest", "peak, reach a peak, hit a high", "at, of"],
          ["Lowest", "bottom out, hit a low, fall to a trough", "at, of"]
        ]
      },
      {
        id: "noun-forms", name: "Noun forms (grammar flexibility)", tag: "all types",
        cols: ["Verb sentence", "Noun sentence (same meaning)", "Why it helps"],
        rows: [
          ["Sales rose sharply.", "There was a sharp rise in sales.", "Lets you start a sentence differently and add adjectives."],
          ["Prices fell gradually.", "Prices saw a gradual fall.", "Shows range: 'a gradual fall of 10%'."],
          ["The figure increased steadily.", "A steady increase was recorded in the figure.", "Passive noun form = more formal register."],
          ["It dropped suddenly.", "A sudden drop occurred.", "Variety of subject and verb keeps grammar marks up."]
        ]
      },
      {
        id: "comparison", name: "Comparison language", tag: "bars · tables · pies",
        cols: ["Function", "Phrase", "Example"],
        rows: [
          ["Contrast two items", "whereas / while / in contrast", "France spent 20%, whereas Italy spent only 8%."],
          ["Biggest / smallest", "by far the largest / the lowest figure", "Tourism was by far the largest sector."],
          ["Multiples", "twice as high as / three times the figure for", "The UK total was twice as high as Spain's."],
          ["Small difference", "slightly higher / marginally lower than", "Men were only slightly more likely than women."],
          ["Scale of change", "by a factor of / X percentage points", "It grew by a factor of four."]
        ]
      },
      {
        id: "approximation", name: "Approximation", tag: "tables · exact data",
        cols: ["Instead of the exact figure", "Say", "Note"],
        rows: [
          ["9,850", "just under 10,000 / nearly 10,000", "Rounding shows control of the data, not weakness."],
          ["10,200", "just over / a little above 10,000", "Examiners want the message, not a copied number."],
          ["48%", "roughly half / almost 50%", "Mechanical copying of every figure lowers Coherence."],
          ["31%", "approximately a third / around 30%", "Use 1–2 exact figures per paragraph, approximate the rest."],
          ["19,900 to 40,100", "roughly doubled / a two-fold increase", "Describe the relationship, not both raw numbers."]
        ]
      },
      {
        id: "process", name: "Process language", tag: "process diagrams",
        cols: ["Function", "Language", "Example"],
        rows: [
          ["Passive voice (no 'we' / 'you')", "is + past participle / are + past participle", "The clay is mixed with water and then shaped."],
          ["First stage", "First, / To begin with, / Initially,", "First, raw sugar cane is harvested."],
          ["Middle stages", "Next, / Then, / After that, / Subsequently,", "Subsequently, the juice is boiled and filtered."],
          ["Simultaneous", "At the same time, / while", "While the mixture cools, moulds are prepared."],
          ["Final stage", "Finally, / Lastly, / In the last stage,", "Finally, the bottles are labelled and packed."],
          ["Cycle", "the cycle then repeats / returns to the first stage", "The water then evaporates and the cycle begins again."]
        ]
      },
      {
        id: "map", name: "Map language", tag: "maps",
        cols: ["Function", "Language", "Example"],
        rows: [
          ["Position", "to the north of / in the south-west corner / adjacent to", "A car park was built to the east of the station."],
          ["Removed", "was demolished / was knocked down / was cleared", "The row of houses was demolished."],
          ["Added", "was constructed / was erected / a new X appeared", "A pedestrian bridge was constructed across the river."],
          ["Changed use", "was converted into / was redeveloped as", "The factory was converted into flats."],
          ["Replaced", "was replaced by / gave way to", "The farmland gave way to a housing estate."],
          ["No change", "remained / was retained / was left untouched", "The church in the centre remained unchanged."]
        ]
      }
    ],
    upgrades: {
      id: "upgrades", name: "Band 5 to Band 7 upgrade pairs", tag: "swap these in",
      cols: ["Band 5 (weak / repeated)", "Band 7 (precise)", "Why"],
      rows: [
        ["went up a lot", "rose sharply / increased significantly", "'a lot' is vague; adverbs show degree."],
        ["The graph shows... The graph shows...", "The graph illustrates... / As the chart indicates,", "Repeating 'shows' costs Lexical Resource marks."],
        ["a big number of people", "a large number of people / a substantial proportion", "'big number' is not a natural collocation."],
        ["got higher and higher", "climbed steadily / rose consistently", "Precise verb + adverb instead of repetition."],
        ["is more than", "exceeds / is greater than / outnumbers", "Formal register expected in academic writing."],
        ["in the last year it was the biggest", "it reached its highest point in the final year", "Noun phrase + accurate time reference."],
        ["and also the other line went down", "meanwhile, the second line fell", "One clear linker beats 'and also'."],
        ["stayed the same", "remained stable / held steady / levelled off", "Range of expression for a flat trend."]
      ]
    }
  };

  /* ---------- the 7 deadly sins ---------- */
  T1_DATA.sins = [
    { habit: "Listing every number", cost: "The examiner drowns in data and cannot see the main message. Coherence and Task Achievement both drop.", fix: "Choose 4–6 key figures for the whole essay. Approximate the rest. Describe shapes and comparisons, not points." },
    { habit: "No overview (or it is hidden)", cost: "This is the number-one Band 5 problem. Without a clear overview, Task Achievement is capped at Band 5–6.", fix: "Write a separate paragraph starting with \"Overall,\". Put the 2–3 big messages there, with no small numbers." },
    { habit: "Personal opinions (\"I think this is because...\")", cost: "Task 1 is a report. Opinions and reasons are off-task and pull down Task Achievement.", fix: "Only report what you can SEE in the data. Delete every 'I think', 'probably because', 'in my opinion'." },
    { habit: "Copying the question", cost: "Copied words are not counted toward your 150 and signal weak Lexical Resource.", fix: "Paraphrase: change nouns, verbs and sentence structure. Never copy more than 3 words in a row." },
    { habit: "Wrong tense for the time period", cost: "A graph of 1980–2000 written in present tense is a Grammatical Accuracy error in every sentence.", fix: "Past years use past simple. 'Now' or no date uses present. Process / map with dates: match the dates." },
    { habit: "Repeating \"shows\" and \"increased\"", cost: "Repetition is the fastest way to stay on Band 6 for Lexical Resource.", fix: "Rotate: illustrates / indicates / compares; rose / climbed / grew / surged. Use the Vocabulary Bank." },
    { habit: "No paragraphing", cost: "One block of text = low Coherence & Cohesion, whatever the content.", fix: "Four paragraphs, always: Introduction / Overview / Detail 1 / Detail 2. Leave a blank line between them." }
  ];

  /* ---------- Band 6 vs Band 8 sample (same task) ---------- */
  T1_DATA.bandCompare = {
    task: "The line graph below shows the average monthly consumption of coffee and tea (in cups per person) in a European country from 1990 to 2020.",
    six: [
      "The graph shows the consumption of coffee and tea in a European country from 1990 to 2020.",
      "In 1990 coffee was 45 cups and tea was 60 cups. Then coffee went up and tea went down.",
      "In 2000 coffee was 55 and tea was 50. In 2010 coffee was 68 and tea was 42. In 2020 coffee was 80 and tea was 35.",
      "So coffee increased a lot and tea decreased. Coffee was more than tea at the end. I think people like coffee more now."
    ],
    eight: [
      "The line graph illustrates changes in the average monthly consumption of coffee and tea, measured in cups per person, in one European country over a thirty-year period.",
      "Overall, coffee and tea followed opposite paths: coffee consumption rose steadily and overtook tea, which declined throughout. By 2020 the positions of the two drinks had almost completely reversed.",
      "In 1990, tea was the more popular beverage at around 60 cups per person each month, well above the figure for coffee, which stood at roughly 45. Tea then fell gradually to just 35 cups by 2020.",
      "Coffee, by contrast, climbed consistently across the period, passing tea at approximately 52 cups around 1998 and continuing upward to reach a peak of 80 cups in 2020, more than double the final tea figure."
    ],
    /* which band-8 sentences (by index) earn marks, and why */
    notes: [
      { i: 0, crit: "LR / TA", why: "'illustrates' avoids the weak 'shows'; adds 'measured in cups per person' and 'thirty-year period' — accurate paraphrase, no copying." },
      { i: 1, crit: "TA", why: "A real overview: two big messages (opposite paths; positions reversed) and NOT a single small number. This sentence alone lifts the answer off Band 5." },
      { i: 2, crit: "CC / LR", why: "Groups tea's whole story together; uses 'well above the figure for' and 'gradually'; approximates ('around 60', 'roughly 45') instead of listing." },
      { i: 3, crit: "GRA / LR", why: "'by contrast' links the paragraphs; 'passing tea at approximately 52 around 1998' shows a precise crossover; 'more than double the final tea figure' is comparison, not a raw list." }
    ]
  };

  /* ---------- Overview Trainer: 3 mini charts ---------- */
  T1_DATA.overviewCharts = [
    {
      id: "ov-line",
      kind: "line",
      title: "Website visitors, 2015–2020 (thousands)",
      series: [
        { name: "Desktop", color: "var(--accent)", points: [80, 72, 60, 45, 30, 22] },
        { name: "Mobile", color: "var(--good)", points: [20, 35, 55, 78, 95, 110] }
      ],
      xLabels: ["2015", "2016", "2017", "2018", "2019", "2020"],
      yMax: 120,
      model: "Overall, the two platforms moved in opposite directions. Mobile visits rose sharply and overtook desktop, while desktop numbers fell steadily throughout the period.",
      keywords: ["opposite", "overtook", "overtake", "rose", "rise", "fell", "fall", "declin", "mobile", "desktop"]
    },
    {
      id: "ov-bar",
      kind: "bar",
      title: "Books borrowed by age group (thousands)",
      bars: [
        { name: "Under 18", value: 42, color: "var(--accent)" },
        { name: "18–39", value: 28, color: "var(--good)" },
        { name: "40–64", value: 55, color: "var(--warn)" },
        { name: "65+", value: 70, color: "var(--hi)" }
      ],
      yMax: 80,
      model: "Overall, borrowing increased with age. The oldest group borrowed by far the most books, whereas people aged 18 to 39 borrowed the fewest.",
      keywords: ["age", "most", "fewest", "oldest", "youngest", "largest", "smallest", "highest", "lowest"]
    },
    {
      id: "ov-pie",
      kind: "pie",
      title: "How a household budget is spent (%)",
      slices: [
        { name: "Housing", value: 38, color: "var(--accent)" },
        { name: "Food", value: 22, color: "var(--good)" },
        { name: "Transport", value: 18, color: "var(--warn)" },
        { name: "Leisure", value: 12, color: "var(--hi)" },
        { name: "Other", value: 10, color: "var(--ink-faint)" }
      ],
      model: "Overall, housing took up the largest share of household spending, followed by food. Leisure and other costs together made up only a small proportion of the budget.",
      keywords: ["largest", "share", "proportion", "housing", "smallest", "least", "followed", "biggest"]
    }
  ];

  /* ---------- Paraphrase Lab: 5 prompts ---------- */
  /* model split into tokens; tokens with chg:true are highlighted as the changed words */
  T1_DATA.paraphrase = [
    {
      prompt: "The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011.",
      model: [
        { t: "The bar chart " }, { t: "compares", chg: true }, { t: " the " },
        { t: "proportion", chg: true }, { t: " of homes that were " },
        { t: "owner-occupied or leased", chg: true },
        { t: " in England and Wales over a " }, { t: "93-year period from 1918", chg: true }, { t: "." }
      ]
    },
    {
      prompt: "The graph below shows the amount of money spent on books in Germany, France, Italy and Austria between 1995 and 2005.",
      model: [
        { t: "The line graph " }, { t: "illustrates", chg: true }, { t: " book " },
        { t: "expenditure", chg: true }, { t: " in four European countries, Germany, France, Italy and Austria, " },
        { t: "across an eleven-year span", chg: true }, { t: " beginning in 1995." }
      ]
    },
    {
      prompt: "The diagram below shows how electricity is generated by a hydroelectric dam.",
      model: [
        { t: "The diagram " }, { t: "explains the process by which", chg: true }, { t: " " },
        { t: "power is produced", chg: true }, { t: " " }, { t: "at", chg: true }, { t: " a " },
        { t: "hydroelectric facility", chg: true }, { t: "." }
      ]
    },
    {
      prompt: "The maps below show the changes that have taken place in the town of Denham since 1985.",
      model: [
        { t: "The two maps " }, { t: "depict how", chg: true }, { t: " the town of Denham " },
        { t: "has developed", chg: true }, { t: " " }, { t: "in the period since", chg: true }, { t: " 1985." }
      ]
    },
    {
      prompt: "The table below gives information about the number of visitors to four museums in London in 2019 and 2020.",
      model: [
        { t: "The table " }, { t: "provides data on", chg: true }, { t: " how many people " },
        { t: "visited", chg: true }, { t: " four London museums " },
        { t: "in two consecutive years,", chg: true }, { t: " 2019 and 2020." }
      ]
    }
  ];

  /* ---------- Vocabulary Quiz: 15 questions ---------- */
  /* answer = index (0=A,1=B,2=C,3=D). Distribution A3 B4 C4 D4 (counted). */
  T1_DATA.quiz = [
    { q: "The number of visitors ___ sharply between 2000 and 2005.",
      opts: ["rose", "raised", "rised", "arised"], answer: 0,
      why: "'rise' takes no object and its past form is 'rose'. 'raise' needs an object; 'rised' and 'arised' are not words." },

    { q: "Which is the Band 7 upgrade of “went up a lot”?",
      opts: ["went up by a lot", "rose up sharply", "increased significantly", "went up very much"], answer: 2,
      why: "'increased significantly' is a precise verb + adverb. 'rose up' is redundant and 'went up very much' is not natural English." },

    { q: "There was a ___ decline in sales over the decade.",
      opts: ["gradually", "graduate", "grade", "gradual"], answer: 3,
      why: "The blank needs an adjective before the noun 'decline'. 'gradually' is an adverb; the others are the wrong word." },

    { q: "Which is the Band 7 way to start describing the visual?",
      opts: ["The graph is showing", "The graph illustrates", "In the graph we can see", "The graph is about"], answer: 1,
      why: "'illustrates' moves you away from the over-used 'shows'. The present continuous and the informal 'we can see' are weaker." },

    { q: "Prices ___ at around $50 for the rest of the year.",
      opts: ["levelled off", "level off", "levelled up", "were levelling"], answer: 0,
      why: "'level off' means to stop changing and stay flat; a past-year graph needs the past simple 'levelled off'. 'level up' is not the phrase." },

    { q: "The figure for France was roughly ___ that of Spain.",
      opts: ["two times of", "twice more than", "more than the double of", "double"], answer: 3,
      why: "'roughly double that of Spain' is the natural comparison. 'twice more than' and 'two times of' are common but incorrect learner phrasings." },

    { q: "Which is the Band 7 upgrade of “a lot of people”?",
      opts: ["a lot peoples", "lots of peoples", "a large number of people", "many peoples"], answer: 2,
      why: "'people' is already plural, so never 'peoples' here. 'a large number of' is the formal quantifier expected in academic writing." },

    { q: "First, the olives are picked. ___, they are washed and sorted.",
      opts: ["After that then", "Subsequently", "Later then", "Next after"], answer: 1,
      why: "'Subsequently' is a single formal sequencer. The others double up connectors, which is not standard English." },

    { q: "In 1990 the old library ___ and a shopping centre was built in its place.",
      opts: ["was demolished", "demolished", "is demolished", "has demolish"], answer: 0,
      why: "The library received the action, so we need the passive: 'was demolished' (past, because of the date 1990)." },

    { q: "Choose the Band 7 way to join: “Coffee sales rose. Tea sales fell.”",
      opts: ["Coffee sales rose and tea sales fell too", "Coffee sales rose and also tea sales fell", "Coffee sales rose, plus tea sales fell", "Coffee sales rose, whereas tea sales fell"], answer: 3,
      why: "'whereas' signals a direct contrast in one clause. 'and...too', 'and also' and 'plus' only add information and miss the contrast." },

    { q: "Car sales reached ___ 10,000 units — the exact figure was 9,850.",
      opts: ["just over", "nearly above", "just under", "almost more than"], answer: 2,
      why: "9,850 is below 10,000, so 'just under' 10,000. 'just over' means above; 'nearly above' and 'almost more than' are not real phrases." },

    { q: "Over the 20 years, the town’s population ___, rising and falling repeatedly.",
      opts: ["was fluctuating up and down", "fluctuated", "fluctuate", "did fluctuate"], answer: 1,
      why: "'fluctuated' already means 'rose and fell repeatedly', so 'up and down' is redundant. Simple past fits the finished 20-year period." },

    { q: "Which is the strongest Band 7 noun phrase for a large, fast increase?",
      opts: ["a big increase", "a very big increase", "a sharp increase", "a huge big increase"], answer: 2,
      why: "'sharp' collocates naturally with 'increase' and signals speed. 'big' is vague and 'huge big' is a double-adjective error." },

    { q: "Which sentence belongs in the OVERVIEW paragraph?",
      opts: ["In 2010, 42% of homes had internet access.", "The figure for 2010 was exactly 42%.", "Internet access grew because phones became cheaper.", "Overall, internet access rose in every age group, while landline use declined."], answer: 3,
      why: "The overview gives big-picture trends with no small numbers and no reasons. A and B are detail; C is an off-task explanation." },

    { q: "A graph shows data from 1950 to 1990 only. Choose the correct tense:",
      opts: ["The number of cars increases steadily.", "The number of cars increased steadily.", "The number of cars has increased steadily.", "The number of cars will increase steadily."], answer: 1,
      why: "The period is finished and in the past (1950–1990), so use the past simple 'increased'. The other tenses do not match the dates." }
  ];

  /* ---------- Self-Assessment Rubric: one 'do this next' tip per criterion ---------- */
  T1_DATA.rubricTips = {
    "Task Achievement": "Before writing detail, write ONE overview sentence starting with “Overall,” that contains no numbers. Then check every body sentence supports a point with a figure.",
    "Coherence & Cohesion": "Group your data into exactly two detail paragraphs by a clear logic (time halves, or similar-behaving items). Start each with a topic sentence. Replace repeated 'and' with 'whereas', 'while', 'in contrast'.",
    "Lexical Resource": "Pick 5 words you repeated (probably 'shows', 'increased', 'a lot') and replace each using the Vocabulary Bank. Add two noun forms ('a sharp rise') and two approximations ('just under').",
    "Grammatical Range & Accuracy": "Check the tense matches the dates in every sentence. Then combine two short sentences into one using a comparative ('...higher than...') or a relative clause ('..., which then fell,...')."
  };

  /* ---------- Teacher Mode: lesson-plan notes ---------- */
  T1_DATA.teacher = {
    intro: "Suggested 90-minute plan. Project this page. Students need paper or their own device for the tools. Everything runs offline.",
    stages: [
      { t: "0–10 min · Know the Battlefield", note: "Read the 3 facts aloud. Ask: 'What happens if you write 140 words?' Land the overview klaxon hard — it is the lesson's thesis." },
      { t: "10–25 min · 6 Question Types", note: "Assign each pair one tab. They present 'what to look at first + the biggest trap' to the class in 60 seconds." },
      { t: "25–40 min · Skeleton + Paraphrase Lab (Tool D)", note: "Model P1 together on the board, then students do Paraphrase Lab prompts 1–3. Compare answers before revealing models." },
      { t: "40–50 min · Overview Trainer (Tool C)", note: "Project one mini chart. Students write the overview on paper; type the best one in for instant feedback. Repeat for a second chart." },
      { t: "50–55 min · 7 Deadly Sins", note: "Quick diagnostic: students tick which sins they personally commit. This sets their individual goal for the Arena." },
      { t: "55–75 min · Writing Arena (Tool A)", note: "Give a real prompt. Start the 20-minute timer together. Insist they tick the structure checklist as they go." },
      { t: "75–85 min · Self-Assessment (Tool B) + peer swap", note: "Students score their own draft, then swap and score a partner's. Discuss gaps between the two scores." },
      { t: "85–90 min · Vocab Quiz (Tool E) as exit ticket", note: "Individual. Record best scores next lesson to show progress." }
    ],
    discussion: [
      "Why does the examiner care more about the overview than about exact numbers?",
      "When is it acceptable to use an exact figure, and when should you approximate?",
      "Band 6 vs Band 8: which single change would raise your own writing the most?"
    ]
  };

  global.T1_DATA = T1_DATA;
})(window);
