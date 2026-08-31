/* ============================================================
   IELTS Task 1 Mastery — quizzes
   window.IT1M.quizzes[id] = { title, lesson, coll, questions:[
     { q, options:[a,b,c,d], answer:<index>, explain } ] }
   Answer-letter distribution checked for balance within each quiz.
   ============================================================ */
window.IT1M = window.IT1M || {};
window.IT1M.quizzes = {

  "quiz-fundamentals": {
    title: "Task 1 Fundamentals", lesson: "fundamentals", coll: "lessons",
    questions: [
      { q: "How long should you spend on Task 1?", options: ["About 30 minutes", "About 19–20 minutes", "About 10 minutes", "As long as it takes"], answer: 1, explain: "Task 1 is worth half of Task 2, so cap it near 19 minutes." },
      { q: "Which belongs in a Task 1 answer?", options: ["Your opinion on the trend", "Reasons the trend happened", "A factual summary of key features", "A recommendation"], answer: 2, explain: "Task 1 is an objective report of selected features." },
      { q: "The four-move principle is:", options: ["Summarise, Select, Compare, Organise", "Read, Plan, Write, Check", "Intro, Body, Body, Conclusion", "Describe, Explain, Evaluate, Conclude"], answer: 0, explain: "Summarise → Select → Compare → Organise." },
      { q: "A missing overview mainly damages which criterion?", options: ["Grammatical Range", "Lexical Resource", "Coherence only", "Task Achievement"], answer: 3, explain: "No overview caps Task Achievement around Band 5." },
      { q: "What is the minimum word count?", options: ["100", "120", "150", "250"], answer: 2, explain: "150 words; under that is an automatic penalty." },
      { q: "The best first sentence is:", options: ["A word-for-word copy of the prompt", "A memorised template opening", "An accurate paraphrase of this prompt", "Your prediction of future trends"], answer: 2, explain: "Paraphrase — change verb, noun phrases and structure." }
    ]
  },

  "quiz-overview": {
    title: "Overview Masterclass", lesson: "overview", coll: "lessons",
    questions: [
      { q: "An overview should contain:", options: ["Exact figures for the biggest category", "2–4 general features and no specific data", "One sentence only", "The reasons behind the trends"], answer: 1, explain: "General 'big picture' features, no specific data." },
      { q: "Best overview for a line graph of 3 rising lines, one much steeper:", options: ["Line A was 20 in 2000 and 45 in 2020.", "Overall, all three rose, with one increasing far more steeply and overtaking the others.", "There were many changes in the graph.", "The steep line rose because of demand."], answer: 1, explain: "Direction of all + biggest mover + crossover, no data, no reasons." },
      { q: "For a process diagram, the overview states:", options: ["The purpose of each machine", "Number of stages, start, end, linear/cyclical", "Why the process is efficient", "The exact temperatures used"], answer: 1, explain: "Stage count + endpoints + linear or cyclical." },
      { q: "Where can the overview go?", options: ["Only in the middle", "Only as the last sentence of the intro", "Straight after the intro, or as the final paragraph", "Anywhere, split across the body"], answer: 2, explain: "Usually right after the introduction; the end is also acceptable." },
      { q: "Which is NOT overview material?", options: ["The overall upward trend", "The highest and lowest overall", "'Sales rose to exactly 42% in March'", "A major crossover point"], answer: 2, explain: "A specific figure belongs in a body paragraph." },
      { q: "How many features is ideal?", options: ["1", "2–4", "6–8", "All of them"], answer: 1, explain: "Two minimum, four maximum, and they must be independent." }
    ]
  },

  "quiz-line-graphs": {
    title: "Line Graphs", lesson: "line-graphs", coll: "lessons",
    questions: [
      { q: "Rewrite as a noun phrase: 'Prices fell sharply.'", options: ["There was a sharp fall in prices.", "Prices were sharp falling.", "A price fell sharp.", "There was a sharply fall of prices."], answer: 0, explain: "there was + a/an + adjective + noun (+ in …)." },
      { q: "Correct: 'Output grew ___ 15%.'", options: ["with", "by", "of", "in"], answer: 1, explain: "grow / increase / decrease + BY + amount." },
      { q: "A line stops changing and stays flat. Best verb:", options: ["fluctuated", "plummeted", "levelled off", "peaked"], answer: 2, explain: "levelled off / plateaued / remained stable." },
      { q: "Which sentence has a collocation error?", options: ["Sales rose steadily.", "There was a gradual decline.", "The figure increased dramatically slightly.", "It climbed to a peak of 60."], answer: 2, explain: "'dramatically slightly' — pick one degree word." },
      { q: "One line passes another while both rise. Verb for the passing line:", options: ["undertook", "overtook", "took over", "overcame"], answer: 1, explain: "overtook (also surpassed, exceeded)." },
      { q: "For a graph covering 1990–2015 you should write in:", options: ["present simple", "past simple", "future", "present perfect continuous"], answer: 1, explain: "A completed past period → past simple." }
    ]
  },

  "quiz-bar-charts": {
    title: "Bar Charts", lesson: "bar-charts", coll: "lessons",
    questions: [
      { q: "A = 40, B = 20. Best phrasing:", options: ["A was two times more than B.", "A was twice as high as B.", "A was more double than B.", "A doubled B by two."], answer: 1, explain: "'N times as high as' is unambiguous." },
      { q: "How should you organise a static bar chart body?", options: ["Left to right, one bar per sentence", "By grouping bars of similar size or behaviour", "Alphabetically by category", "Randomly"], answer: 1, explain: "Group by size/behaviour, not drawing order." },
      { q: "Which goes in a static bar chart overview?", options: ["Every category's exact value", "Highest, lowest and overall spread", "The reasons for the differences", "Only the highest category"], answer: 1, explain: "Highest + lowest + overall pattern." },
      { q: "Best contrast conjunction between two categories:", options: ["because", "whereas", "therefore", "despite"], answer: 1, explain: "whereas / while for direct contrast." },
      { q: "A dynamic bar chart overview focuses on:", options: ["The prettiest bar", "Overall direction of change + biggest mover", "The number of categories", "The colour key"], answer: 1, explain: "Trend + the category that changed most." },
      { q: "In a stacked bar chart you should report first:", options: ["The smallest segment", "The total, then the dominant segment", "Every segment in order", "The legend"], answer: 1, explain: "Total (bar height) then the biggest slice." }
    ]
  },

  "quiz-pie-charts": {
    title: "Pie Charts", lesson: "pie-charts", coll: "lessons",
    questions: [
      { q: "Fill the gap: 'Housing ___ 40% of spending.'", options: ["accounted for", "accounted", "was accounted", "counted for"], answer: 0, explain: "account FOR a proportion." },
      { q: "Natural phrasing for 32%:", options: ["exactly one third", "roughly a third", "almost half", "a quarter"], answer: 1, explain: "≈ a third; 'just under a third' also works." },
      { q: "With two pie charts (2005 vs 2020), the best approach is:", options: ["Describe 2005 fully, then 2020 fully", "Report how each segment changed across the two years", "Only describe 2020", "Average the two"], answer: 1, explain: "Segment-by-segment change, not pie-by-pie." },
      { q: "Which is a proportion verb?", options: ["fluctuated", "constituted", "plateaued", "overtook"], answer: 1, explain: "constitute / represent / account for / make up." },
      { q: "49% is best written as:", options: ["about half", "just over half", "two fifths", "the majority"], answer: 0, explain: "'just under half' or 'about half' — it is below 50." },
      { q: "What should the overview name?", options: ["The colour of each slice", "The largest and smallest segments (and any big change)", "The exact percentages", "The chart software"], answer: 1, explain: "Biggest, smallest, and the main shift if there are two pies." }
    ]
  },

  "quiz-tables": {
    title: "Tables", lesson: "tables", coll: "lessons",
    questions: [
      { q: "The first decision when you see a table is:", options: ["Which font to use", "Which axis carries the story — over time or across items", "How many decimal places to quote", "Which row is prettiest"], answer: 1, explain: "Pick the comparison direction and build the answer on it." },
      { q: "Roughly how many figures should you cite from a table?", options: ["All of them", "Under about eight", "Exactly twenty", "None"], answer: 1, explain: "Selection matters most for tables." },
      { q: "A figure earns a place in your answer if it is:", options: ["Any number in the table", "A max, min, trend example or comparison", "In the top-left cell", "An even number"], answer: 1, explain: "Otherwise leave it out." },
      { q: "Phrase for a row that barely changes:", options: ["surged", "remained within a narrow band", "peaked sharply", "diverged"], answer: 1, explain: "held roughly steady / changed little / narrow band." },
      { q: "Does a table need an overview?", options: ["No, tables have no trend", "Yes — overall max/min and the biggest mover", "Only if it has dates", "Only for Band 8"], answer: 1, explain: "Every Task 1 answer needs an overview." },
      { q: "Best way to present dense table data:", options: ["Cell by cell as prose", "As selected comparisons and trends", "As a bullet list of every value", "Copy the table into the answer"], answer: 1, explain: "Turn the grid into 3–4 meaningful comparisons." }
    ]
  },

  "quiz-maps": {
    title: "Maps", lesson: "maps", coll: "lessons",
    questions: [
      { q: "Passive of 'They demolished the old cinema.'", options: ["The old cinema demolished.", "The old cinema was demolished.", "The old cinema is being demolish.", "They were demolished the cinema."], answer: 1, explain: "was + past participle." },
      { q: "A park becomes a car park. Best verb:", options: ["was converted into", "was fluctuated", "overtook", "levelled off"], answer: 0, explain: "was converted / transformed into; was redeveloped as." },
      { q: "A map overview should focus on:", options: ["Every new building by name", "The overall change in the area's character + what stayed", "The compass rose", "The map's scale"], answer: 1, explain: "e.g. rural → suburban, plus retained features." },
      { q: "Tense for a 'proposed development' map:", options: ["past simple", "present perfect", "future ('will be built')", "past continuous"], answer: 2, explain: "A proposal hasn't happened yet." },
      { q: "Which anchors a feature in space?", options: ["'subsequently'", "'on the outskirts, to the north of the river'", "'twice as high as'", "'accounted for'"], answer: 1, explain: "Compass + position phrases orient the reader." },
      { q: "How many unchanged features should you usually mention?", options: ["None", "At least one", "All of them", "Only in the intro"], answer: 1, explain: "There is almost always one — note it." }
    ]
  },

  "quiz-processes": {
    title: "Process Diagrams", lesson: "processes", coll: "lessons",
    questions: [
      { q: "A process overview must give:", options: ["The cost of each stage", "Number of stages + start + end + linear/cyclical", "Reasons each stage is needed", "The names of the workers"], answer: 1, explain: "Four things: count, start, end, shape." },
      { q: "Voice for a manufacturing process:", options: ["active ('workers heat it')", "passive ('it is heated')", "future", "present perfect"], answer: 1, explain: "Passive — the agent is irrelevant." },
      { q: "Which is a sequence marker that isn't 'then'?", options: ["however", "subsequently", "whereas", "in contrast"], answer: 1, explain: "initially, subsequently, following this, once…, finally." },
      { q: "In Task 1 you should NOT:", options: ["Say how many stages there are", "Use the passive", "Explain why a stage happens", "Describe the final output"], answer: 2, explain: "Describe the steps; never justify them." },
      { q: "A diagram loops from stage 6 back to stage 2. It is:", options: ["linear", "cyclical", "broken", "reversible"], answer: 1, explain: "Say 'cyclical' in the overview." },
      { q: "Tense for most process diagrams:", options: ["past simple", "present simple", "future", "past perfect"], answer: 1, explain: "Present simple — a general, timeless process." }
    ]
  },

  "quiz-mixed-charts": {
    title: "Mixed / Multiple Charts", lesson: "mixed-charts", coll: "lessons",
    questions: [
      { q: "First step with a two-visual task:", options: ["Describe visual 1 immediately", "Identify how the two visuals relate", "Count the data points", "Choose which visual to ignore"], answer: 1, explain: "Find the link: totals vs breakdown, time vs snapshot, what vs who." },
      { q: "The overview in a mixed task must:", options: ["Mention only the more interesting visual", "Contain a key feature from each visual", "List every figure", "Be one word long"], answer: 1, explain: "It represents the whole task = both visuals." },
      { q: "The safe body structure is:", options: ["One paragraph per visual, then a linking sentence", "Everything in one paragraph", "Six short paragraphs", "Visual 2 only"], answer: 0, explain: "Separate paragraphs per visual is reliable for Band 7." },
      { q: "The biggest risk in mixed tasks is:", options: ["Using too many linkers", "Running out of time and under-covering the second visual", "Writing too formally", "Using the passive"], answer: 1, explain: "An incomplete response is capped in Task Achievement." },
      { q: "A rough word count for a two-visual answer:", options: ["90–110", "170–190", "300+", "exactly 150"], answer: 1, explain: "170–190 is plenty; budget ~55 words per visual in the body." },
      { q: "Integrating (theme-based paragraphs across both visuals) is worth doing:", options: ["Always", "Never", "Only when there is a clear cross-visual comparison", "Only in Task 2"], answer: 2, explain: "Integrate only with a real link; otherwise separate." }
    ]
  },

  "quiz-data-selection": {
    title: "Data Selection", lesson: "data-selection", coll: "skills",
    questions: [
      { q: "A figure earns a place in your answer when it is:", options: ["Any value on the chart", "A max, a min, a trend example, or a comparison", "The first value", "A round number"], answer: 1, explain: "Everything else is noise." },
      { q: "Which is always worth reporting?", options: ["The third-largest category's exact value", "The biggest change / steepest trend", "Every year's figure", "The chart title"], answer: 1, explain: "Extremes, biggest/smallest change, major gaps, crossovers, exceptions." },
      { q: "How many features go in the overview?", options: ["1", "2–4", "5–7", "all important ones"], answer: 1, explain: "The 2–4 most general of your selected features." },
      { q: "'C rose most' and 'C became the leader' should be counted as:", options: ["two separate overview features", "one feature (the same story)", "body detail only", "irrelevant"], answer: 1, explain: "Pick independent features for the overview." },
      { q: "Leftover detail that isn't a headline feature should be:", options: ["listed individually", "grouped in a body paragraph", "put in the overview", "left out entirely"], answer: 1, explain: "Group it; don't enumerate it." }
    ]
  },

  "quiz-comparisons": {
    title: "Comparison Language", lesson: "comparisons", coll: "skills",
    questions: [
      { q: "A = 60, B = 20. Accurate version:", options: ["A was three times more than B.", "A was three times as high as B.", "A was more bigger than B.", "A tripled more than B."], answer: 1, explain: "'N times as high as' — never 'times more than'." },
      { q: "'Respectively' is safe when:", options: ["there is only one item", "the order of the two items is unambiguous", "the figures are large", "you are guessing"], answer: 1, explain: "Name both items, then both figures, same order." },
      { q: "A stays at 50; B climbs from 10 to 45. The gap:", options: ["widened", "narrowed / closed", "stayed the same", "doubled"], answer: 1, explain: "B caught up, so the gap narrowed." },
      { q: "Correct intensifier:", options: ["more higher", "much higher", "most higher", "very higher"], answer: 1, explain: "much / far / considerably + comparative." },
      { q: "Best word for 'A and B were almost equal':", options: ["A dwarfed B", "A and B were broadly similar", "A exceeded B sharply", "A collapsed to B"], answer: 1, explain: "broadly similar / roughly equal / on a par with." }
    ]
  },

  "quiz-approximation": {
    title: "Approximation Language", lesson: "approximation", coll: "skills",
    questions: [
      { q: "Natural phrasing for 34%:", options: ["exactly a third", "around a third", "half", "a quarter"], answer: 1, explain: "≈ a third; 'just over a third' also fine." },
      { q: "19% of respondents — hedge:", options: ["just over a fifth", "just under a fifth", "a quarter", "nearly half"], answer: 1, explain: "19 is below 20, so 'just under a fifth'." },
      { q: "Should you hedge a clearly labelled data point?", options: ["Yes, always", "No — report it exactly", "Only in the overview", "Only for percentages"], answer: 1, explain: "Hedge only estimated readings between gridlines." },
      { q: "Which set means 'close to a round number'?", options: ["about / roughly / around", "just under / just over / nearly / almost", "exactly / precisely", "far more / far less"], answer: 1, explain: "These sit a figure next to a round value." },
      { q: "76% is best written as:", options: ["three quarters", "just over three quarters", "two thirds", "nearly all"], answer: 1, explain: "Above 75, so 'just over three quarters'." }
    ]
  },

  "quiz-grammar": {
    title: "Grammar for Task 1", lesson: "grammar", coll: "skills",
    questions: [
      { q: "Passive of 'A machine packages the goods.'", options: ["The goods package.", "The goods are packaged.", "The goods packaged.", "The goods were being package."], answer: 1, explain: "be + past participle." },
      { q: "Fix: 'GDP grew with 4%.'", options: ["GDP grew of 4%.", "GDP grew by 4%.", "GDP grew in 4%.", "GDP grew at 4 percents."], answer: 1, explain: "grow / rise / increase + BY + amount." },
      { q: "Best combination of 'Sales rose. Sales hit 5m in 2020.'", options: ["Sales rose and sales hit 5m in 2020.", "Sales rose, hitting 5 million in 2020.", "Sales rose. It hit 5m.", "Sales, which rose, hit 5m, which was in 2020."], answer: 1, explain: "A participle clause adds the endpoint concisely." },
      { q: "Fix: 'Tokyo had the most highest figure.'", options: ["Tokyo had the more high figure.", "Tokyo had the highest figure.", "Tokyo had most highest figure.", "Tokyo had the most high figure."], answer: 1, explain: "Never double the superlative." },
      { q: "Tense for a map showing 1985 vs 2015:", options: ["present simple", "past simple", "future", "present continuous"], answer: 1, explain: "A completed change → past simple ('was built')." }
    ]
  }

};
