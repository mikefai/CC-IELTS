/* ============================================================
   IELTS Task 1 Mastery — reference content
   window.IT1M.mistakes / bands / checklist / goldenRules
   ============================================================ */
window.IT1M = window.IT1M || {};

window.IT1M.mistakes = [
  { id: "m-no-overview", title: "No overview", tags: ["Task Achievement"], why: "The overview is where the examiner sees you can summarise. Without one, Task Achievement is capped around Band 5 however good the detail is.", wrong: "The graph shows sales of three products. Product A started at 20 and rose to 35 in 2012, then…", better: "Overall, all three products sold more by the end of the period, with Product C growing fastest and overtaking the other two.", rule: "Start paragraph 2 with 'Overall,' and give 2–4 general features." },
  { id: "m-opinion", title: "Opinion in Task 1", tags: ["Task Achievement", "Register"], why: "Task 1 is an objective report. Opinion words show you have misunderstood the task.", wrong: "Sadly, unemployment rose, which is a worrying trend.", better: "Unemployment rose over the period.", rule: "Delete: sadly, unfortunately, worryingly, I think, should, too high/low." },
  { id: "m-every-number", title: "Describing every number", tags: ["Task Achievement", "Coherence"], why: "Listing all the data with no selection reads as a data dump and leaves no room for comparison.", wrong: "In 2000 it was 12, in 2001 it was 14, in 2002 it was 13, in 2003 it was 17…", better: "The figure climbed unevenly from around 12 to a peak of 25 in 2010.", rule: "Cite a figure only for a max, min, trend or comparison." },
  { id: "m-reasons", title: "Explaining why", tags: ["Task Achievement"], why: "The visual does not tell you causes; guessing them is speculation, not description.", wrong: "Car use fell, probably because fuel prices increased.", better: "Car use fell steadily after 2010.", rule: "Report what changed, never why." },
  { id: "m-copy-prompt", title: "Copying the prompt", tags: ["Lexical Resource"], why: "Copied words are not counted toward your word total or your vocabulary score.", wrong: "The chart below shows the percentage of households in owned and rented accommodation…", better: "The chart compares the proportion of homes that were owned with those that were rented…", rule: "Change the verb, the noun phrases and the sentence shape." },
  { id: "m-tense", title: "Wrong tense", tags: ["Grammar"], why: "A past time frame needs past tense throughout; slipping into present is a repeated error.", wrong: "Between 1990 and 2005, the population increases sharply.", better: "Between 1990 and 2005, the population increased sharply.", rule: "Check the dates, then lock the tense before writing." },
  { id: "m-by-with", title: "'increased with' instead of 'by'", tags: ["Grammar"], why: "A very common collocation slip that recurs every time you state a change.", wrong: "Profits increased with 20%.", better: "Profits increased by 20%.", rule: "increase / decrease + BY + amount." },
  { id: "m-times-more", title: "'three times more than'", tags: ["Grammar", "Comparison"], why: "Ambiguous — does it mean ×3 or ×4? Examiners can't award clarity you didn't provide.", wrong: "A was three times more than B.", better: "A was three times as high as B.", rule: "Use 'N times as high/much as'." },
  { id: "m-respectively", title: "Misusing 'respectively'", tags: ["Grammar"], why: "'Respectively' only works when the reader can map each figure to the right item.", wrong: "The figures rose and fell for imports and exports respectively — wait, which rose?", better: "Imports and exports stood at 40 and 25 respectively.", rule: "Name both items, then both figures, in the same order." },
  { id: "m-word-count", title: "Under 150 words", tags: ["Task Achievement"], why: "An automatic penalty, and usually a sign the response is underdeveloped.", wrong: "A 95-word answer with no body detail.", better: "Two body paragraphs, each making 2–3 supported comparisons (~170–190 words total).", rule: "Plan two full body paragraphs before you start writing." },
  { id: "m-over-para", title: "Too many paragraphs", tags: ["Coherence"], why: "One paragraph per data point fragments the response and hurts cohesion.", wrong: "Six one-sentence paragraphs.", better: "Four paragraphs: intro, overview, body 1, body 2.", rule: "Group related features into two body paragraphs." },
  { id: "m-informal", title: "Informal wording", tags: ["Register", "Lexical Resource"], why: "Task 1 is formal academic writing; contractions and chatty phrases lower Lexical Resource.", wrong: "Sales went through the roof and then things got worse.", better: "Sales rose sharply before declining.", rule: "No contractions, phrasal-heavy idioms, or 'a lot of'." },
  { id: "m-memorised", title: "Memorised introduction", tags: ["Task Achievement", "Lexical Resource"], why: "Templated openings ('The given illustration vividly depicts…') are recognised and discounted.", wrong: "The provided diagram vividly delineates the salient information regarding…", better: "The line graph shows how electricity use changed in three sectors between 2000 and 2020.", rule: "Write a plain, accurate paraphrase of this specific prompt." },
  { id: "m-trend-vocab", title: "Wrong trend word", tags: ["Lexical Resource"], why: "Using 'fluctuate' for a steady rise, or 'peak' as a verb with 'to', signals shaky control.", wrong: "The line fluctuated up to 50. It peaked to 60.", better: "The line rose steadily to 50. It peaked at 60.", rule: "fluctuate = up and down; peak AT a value." },
  { id: "m-units", title: "Losing the units", tags: ["Task Achievement"], why: "A figure with no unit (%, thousands, £) is not fully accurate reporting.", wrong: "It reached 45 by the end.", better: "It reached 45%, or around 45 million tonnes.", rule: "Every figure carries its unit at least on first mention." },
  { id: "m-time", title: "Spending too long on Task 1", tags: ["Exam strategy"], why: "Task 2 is worth twice the marks; overspending here costs you more than it gains.", wrong: "28 minutes on Task 1, rushed Task 2.", better: "18–19 minutes on Task 1, then move on.", rule: "Set a hard stop and keep to it." },
  { id: "m-no-compare", title: "Listing instead of comparing", tags: ["Task Achievement", "Coherence"], why: "Describing each item alone misses the point of the visual, which is relationships.", wrong: "A was 50. B was 40. C was 30.", better: "A was the highest at 50, followed by B and C, which trailed by 10 and 20 respectively.", rule: "Put figures next to each other in one sentence." },
  { id: "m-conclusion", title: "Adding a conclusion", tags: ["Task Achievement"], why: "Task 1 has no conclusion; a closing 'In conclusion, the trends are clear' adds nothing and can drift into opinion.", wrong: "In conclusion, these changes show the market is healthy.", better: "End after your second body paragraph, or move the overview to the end.", rule: "No 'In conclusion' paragraph." }
];

window.IT1M.bands = {
  disclaimer: "This is a student-friendly summary for study purposes. It does not replace the official IELTS band descriptors, which are published by the test owners and should be consulted for authoritative criteria.",
  criteria: [
    {
      name: "Task Achievement",
      levels: {
        "5": "Recounts detail mechanically; no clear overview; may have inaccuracies or miss key features.",
        "6": "Covers the requirements; an overview is present but may be unclear; key features covered but under-supported or with some irrelevant detail.",
        "7": "Clear overview of main trends/differences/stages; key features selected and adequately supported with data.",
        "8": "Covers all requirements; skilfully selects and highlights key features; overview is well-developed and fully supported.",
        "9": "Fully satisfies the task; every feature relevant, accurate and well-illustrated."
      }
    },
    {
      name: "Coherence & Cohesion",
      levels: {
        "5": "Some organisation; overuse or mechanical use of linkers; paragraphing may be inadequate.",
        "6": "Information arranged coherently; clear overall progression; cohesion sometimes faulty or mechanical.",
        "7": "Logically organised; clear progression; a range of cohesive devices used appropriately; clear central topic in each paragraph.",
        "8": "Sequenced logically; cohesion managed so well it attracts no attention; paragraphing sufficient and appropriate.",
        "9": "Effortless cohesion; skilful paragraphing."
      }
    },
    {
      name: "Lexical Resource",
      levels: {
        "5": "Limited range, just adequate; noticeable errors in spelling/word formation that may cause difficulty.",
        "6": "Adequate range for the task; some less common vocabulary attempted with some inaccuracy; errors don't impede communication.",
        "7": "Sufficient range for flexibility and precision; some less common items and collocation used well; occasional errors.",
        "8": "Wide range used fluently and flexibly; skilful use of less common items; rare, minor slips.",
        "9": "Full flexibility and precise use; very rare slips."
      }
    },
    {
      name: "Grammatical Range & Accuracy",
      levels: {
        "5": "Limited range of structures; attempts complex sentences but they tend to be less accurate; frequent errors.",
        "6": "Mix of simple and complex forms; some errors in grammar and punctuation but meaning is rarely obscured.",
        "7": "A variety of complex structures; frequent error-free sentences; good control of grammar and punctuation, a few errors.",
        "8": "Wide range of structures; most sentences error-free; occasional non-systematic errors.",
        "9": "Full range, natural and accurate; very rare slips."
      }
    }
  ],
  compare: [
    { dimension: "Overview quality", b6: "Present but vague or buried in detail.", b7: "Clear, separate, names the main trends/differences.", b8: "Well-developed, fully supported, highlights what matters most." },
    { dimension: "Data selection", b6: "Some key features, plus some irrelevant detail.", b7: "Key features selected; little noise.", b8: "Only what matters, each feature illustrated precisely." },
    { dimension: "Paragraph organisation", b6: "Four sections but grouping is loose.", b7: "Each paragraph has one clear focus.", b8: "Grouping feels inevitable; cohesion invisible." },
    { dimension: "Vocabulary", b6: "Adequate; repetition of 'increase'; some collocation slips.", b7: "Flexible; verb and noun trend forms; accurate collocation.", b8: "Wide and precise; natural less-common items." },
    { dimension: "Grammar", b6: "Simple + some complex; regular minor errors.", b7: "Varied complex structures; many error-free sentences.", b8: "Almost all sentences error-free; wide range." },
    { dimension: "Accuracy of data", b6: "Mostly right; some misread figures or units.", b7: "Accurate; figures approximated sensibly.", b8: "Precise throughout; units always correct." }
  ]
};

window.IT1M.checklist = {
  before: [
    "Identify the visual type (line / bar / pie / table / map / process / mixed).",
    "Note the units and whether percentages should total 100.",
    "Note the time frame → fix your tense.",
    "Pick 2–4 key features for the overview.",
    "Decide how the two body paragraphs will be grouped."
  ],
  during: [
    "Paraphrase the prompt — new verb, new noun phrases.",
    "Write 'Overall,' and give the big picture with no specific data.",
    "Compare figures in the same sentence; don't list them.",
    "Support each claim with one selected, approximated figure.",
    "Keep the tense consistent."
  ],
  after: [
    "At least 150 words?",
    "Overview present and general?",
    "Every figure has its unit and matches the visual?",
    "Comparisons, not a list?",
    "Tense consistent? Subject–verb agreement checked?",
    "No opinions, reasons or conclusion?"
  ]
};

window.IT1M.goldenRules = [
  "Write an overview. Always. Start it with 'Overall,'.",
  "Select 3–5 features; ignore the rest.",
  "Compare figures in one sentence — never a bare list.",
  "Approximate readings between gridlines; report labelled points exactly.",
  "Match your tense to the time frame and hold it.",
  "Use verb+adverb AND 'there was a(n) adj+noun'.",
  "'increased by 20%', 'twice as high as', 'accounted for'.",
  "Passive voice for processes and map changes.",
  "No opinions, no reasons, no 'In conclusion'.",
  "Stop at ~19 minutes and move to Task 2."
];
