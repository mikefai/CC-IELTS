/* ============================================================
   IELTS Task 1 Mastery — vocabulary bank
   window.IT1M.vocab = [ {id, term, pos, category, pattern, example,
                          mistake, formality, types:[] } ]
   Natural academic English only — no obscure "band 9" words.
   ============================================================ */
window.IT1M = window.IT1M || {};
window.IT1M.vocab = [
  // ---- Increase ----
  { id: "v-rise", term: "rise (v/n)", pos: "verb / noun", category: "Increase", pattern: "rise to X / a rise in Y / rise by Z", example: "Output rose to 40m tonnes. / There was a rise in output.", mistake: "‘rise up’ — just ‘rise’.", formality: "neutral", types: ["Line Graphs", "Bar Charts", "Tables"] },
  { id: "v-increase", term: "increase (v/n)", pos: "verb / noun", category: "Increase", pattern: "increase by X% / an increase of X", example: "Sales increased by 12% over the decade.", mistake: "‘increased with 12%’ — use ‘by’.", formality: "neutral", types: ["Line Graphs", "Bar Charts", "Pie Charts", "Tables"] },
  { id: "v-climb", term: "climb", pos: "verb", category: "Increase", pattern: "climb (steadily) to X", example: "The figure climbed steadily to 70.", mistake: "Overusing for tiny changes — climb implies sustained rise.", formality: "neutral", types: ["Line Graphs"] },
  { id: "v-surge", term: "surge", pos: "verb / noun", category: "Increase", pattern: "surge to X / a surge in Y", example: "Demand surged in the final quarter.", mistake: "Only for large, sudden rises.", formality: "neutral", types: ["Line Graphs", "Bar Charts"] },
  { id: "v-grow", term: "grow / growth", pos: "verb / noun", category: "Increase", pattern: "grow by X / steady growth", example: "The population grew by a third.", mistake: "‘growth’ is uncountable here — not ‘a growth’ for a trend.", formality: "neutral", types: ["Line Graphs", "Tables"] },
  { id: "v-double", term: "double / triple", pos: "verb", category: "Increase", pattern: "double to X / more than double", example: "Enrolments more than doubled to 3,400.", mistake: "‘doubled by two times’ — redundant.", formality: "neutral", types: ["Line Graphs", "Bar Charts", "Tables"] },

  // ---- Decrease ----
  { id: "v-fall", term: "fall (v/n)", pos: "verb / noun", category: "Decrease", pattern: "fall to X / a fall in Y", example: "Coal use fell to 20 units. / a sharp fall in coal use", mistake: "‘fall down’ — just ‘fall’.", formality: "neutral", types: ["Line Graphs", "Bar Charts", "Tables"] },
  { id: "v-decline", term: "decline (v/n)", pos: "verb / noun", category: "Decrease", pattern: "decline (gradually) / a gradual decline", example: "Attendance declined gradually after 2010.", mistake: "—", formality: "slightly formal", types: ["Line Graphs", "Tables"] },
  { id: "v-drop", term: "drop (v/n)", pos: "verb / noun", category: "Decrease", pattern: "drop to X / a drop of Y", example: "Prices dropped to their lowest level in 2015.", mistake: "—", formality: "neutral", types: ["Line Graphs", "Bar Charts"] },
  { id: "v-decrease", term: "decrease (v/n)", pos: "verb / noun", category: "Decrease", pattern: "decrease by X%", example: "Waste decreased by around 15%.", mistake: "‘decreased of 15%’ — use ‘by’.", formality: "neutral", types: ["Line Graphs", "Bar Charts", "Pie Charts", "Tables"] },
  { id: "v-plunge", term: "plunge / plummet", pos: "verb", category: "Decrease", pattern: "plunge to X", example: "Bookings plunged to almost zero.", mistake: "Only for steep, sudden falls.", formality: "neutral", types: ["Line Graphs"] },
  { id: "v-halve", term: "halve", pos: "verb", category: "Decrease", pattern: "halve to X / more than halve", example: "The share of coal halved, from 40% to 20%.", mistake: "—", formality: "neutral", types: ["Pie Charts", "Line Graphs", "Tables"] },

  // ---- Stability ----
  { id: "v-stable", term: "remain stable / steady", pos: "verb phrase", category: "Stability", pattern: "remain stable at around X", example: "Unemployment remained stable at about 5%.", mistake: "‘stayed in stable’ — ‘remained stable’.", formality: "neutral", types: ["Line Graphs", "Tables"] },
  { id: "v-leveloff", term: "level off / out", pos: "phrasal verb", category: "Stability", pattern: "level off at X", example: "Growth levelled off at 60 units after 2016.", mistake: "Implies a rise/fall first, then flat.", formality: "neutral", types: ["Line Graphs"] },
  { id: "v-plateau", term: "plateau", pos: "verb / noun", category: "Stability", pattern: "reach a plateau / plateau at X", example: "The figure plateaued for the last five years.", mistake: "—", formality: "slightly formal", types: ["Line Graphs"] },
  { id: "v-constant", term: "hold constant / steady", pos: "verb phrase", category: "Stability", pattern: "hold steady at X", example: "Rents held steady throughout the period.", mistake: "—", formality: "neutral", types: ["Line Graphs", "Tables"] },
  { id: "v-narrowband", term: "within a narrow band", pos: "phrase", category: "Stability", pattern: "remain within a narrow band", example: "Values stayed within a narrow band of 28–32.", mistake: "—", formality: "formal", types: ["Tables", "Line Graphs"] },

  // ---- Fluctuation ----
  { id: "v-fluctuate", term: "fluctuate", pos: "verb", category: "Fluctuation", pattern: "fluctuate (widely) around X / between X and Y", example: "Temperatures fluctuated around 15°C.", mistake: "‘fluctuated up’ — fluctuation has no single direction.", formality: "neutral", types: ["Line Graphs"] },
  { id: "v-fluct-n", term: "fluctuation", pos: "noun", category: "Fluctuation", pattern: "marked / minor fluctuations", example: "There were marked fluctuations in the early years.", mistake: "—", formality: "neutral", types: ["Line Graphs"] },
  { id: "v-erratic", term: "erratic / irregular", pos: "adjective", category: "Fluctuation", pattern: "an erratic pattern / irregular movement", example: "The trend was erratic, with no clear direction.", mistake: "—", formality: "slightly formal", types: ["Line Graphs"] },
  { id: "v-volatile", term: "volatile", pos: "adjective", category: "Fluctuation", pattern: "remained volatile", example: "Prices were volatile between 2008 and 2012.", mistake: "—", formality: "formal", types: ["Line Graphs"] },

  // ---- Peaks ----
  { id: "v-peak", term: "peak (v/n)", pos: "verb / noun", category: "Peaks", pattern: "peak at X (in year) / reach a peak of X", example: "Visitor numbers peaked at 5.9m in 2018.", mistake: "‘peaked to X’ — ‘peaked at X’.", formality: "neutral", types: ["Line Graphs", "Bar Charts"] },
  { id: "v-trough", term: "trough / low point", pos: "noun", category: "Peaks", pattern: "reach a trough / hit a low of X", example: "The figure hit a low of 12 in 2005.", mistake: "—", formality: "slightly formal", types: ["Line Graphs"] },
  { id: "v-high", term: "reach a high / an all-time high", pos: "phrase", category: "Peaks", pattern: "reach a high of X", example: "Exports reached an all-time high of 90m.", mistake: "—", formality: "neutral", types: ["Line Graphs", "Bar Charts", "Tables"] },

  // ---- Comparison ----
  { id: "v-timesas", term: "X times as high as", pos: "structure", category: "Comparison", pattern: "A was N times as high as B", example: "Transport spending was twice as high as health.", mistake: "‘twice more than’ is ambiguous — avoid.", formality: "neutral", types: ["Bar Charts", "Pie Charts", "Tables"] },
  { id: "v-exceed", term: "exceed / outnumber", pos: "verb", category: "Comparison", pattern: "A exceeded B by X", example: "Imports exceeded exports by 15m.", mistake: "‘exceed than’ — no ‘than’.", formality: "formal", types: ["Bar Charts", "Line Graphs", "Tables"] },
  { id: "v-gap", term: "the gap widened / narrowed", pos: "phrase", category: "Comparison", pattern: "the gap between A and B widened / narrowed", example: "The gap between the two regions narrowed sharply.", mistake: "—", formality: "neutral", types: ["Line Graphs", "Tables"] },
  { id: "v-onpar", term: "on a par with / comparable to", pos: "phrase", category: "Comparison", pattern: "A was on a par with B", example: "The UK and Japan were on a par, at around 25.", mistake: "‘on par’ — standard form is ‘on a par with’.", formality: "formal", types: ["Bar Charts", "Tables"] },
  { id: "v-far", term: "far / considerably + comparative", pos: "intensifier", category: "Comparison", pattern: "far higher / considerably steeper", example: "Country C grew far faster than the others.", mistake: "‘more higher’ — ‘far higher’.", formality: "neutral", types: ["Line Graphs", "Bar Charts", "Tables"] },

  // ---- Proportion ----
  { id: "v-accountfor", term: "account for", pos: "verb", category: "Proportion", pattern: "X accounted for N% of Y", example: "Rent accounted for 35% of spending.", mistake: "‘accounted 35%’ — needs ‘for’.", formality: "formal", types: ["Pie Charts", "Bar Charts", "Tables"] },
  { id: "v-represent", term: "represent / constitute / make up", pos: "verb", category: "Proportion", pattern: "X represented / made up N% of Y", example: "Renewables made up nearly a third of supply.", mistake: "—", formality: "formal", types: ["Pie Charts", "Bar Charts"] },
  { id: "v-majority", term: "the (overwhelming) majority", pos: "noun phrase", category: "Proportion", pattern: "the overwhelming majority of X", example: "The overwhelming majority chose option A.", mistake: "‘the majorities’ — uncountable here.", formality: "neutral", types: ["Pie Charts", "Bar Charts"] },
  { id: "v-minority", term: "a small minority / proportion", pos: "noun phrase", category: "Proportion", pattern: "a relatively small proportion of X", example: "Only a small minority walked to work.", mistake: "—", formality: "neutral", types: ["Pie Charts", "Bar Charts"] },
  { id: "v-share", term: "share (n)", pos: "noun", category: "Proportion", pattern: "X's share rose from N% to M%", example: "Gas's share of the market rose from 12% to 28%.", mistake: "—", formality: "neutral", types: ["Pie Charts", "Line Graphs"] },

  // ---- Approximation ----
  { id: "v-approx", term: "approximately / roughly / around", pos: "adverb", category: "Approximation", pattern: "approximately X", example: "The figure stood at approximately 30%.", mistake: "Don't hedge a clearly labelled data point.", formality: "neutral", types: ["Line Graphs", "Bar Charts", "Pie Charts", "Tables"] },
  { id: "v-justunder", term: "just under / just over", pos: "phrase", category: "Approximation", pattern: "just under X / just over X", example: "Just over three quarters had internet access.", mistake: "19% → ‘just under a fifth’, not ‘just over’.", formality: "neutral", types: ["Pie Charts", "Tables", "Bar Charts"] },
  { id: "v-nearly", term: "nearly / almost", pos: "adverb", category: "Approximation", pattern: "nearly X / almost X", example: "Almost half of respondents agreed.", mistake: "—", formality: "neutral", types: ["Pie Charts", "Bar Charts"] },

  // ---- Maps ----
  { id: "v-construct", term: "be built / constructed / erected", pos: "passive verb", category: "Maps", pattern: "A new X was built (in the north)", example: "A shopping centre was built on the site of the market.", mistake: "Active ‘they built’ — use passive.", formality: "neutral", types: ["Maps"] },
  { id: "v-demolish", term: "be demolished / cleared / removed", pos: "passive verb", category: "Maps", pattern: "X was demolished / cleared", example: "The woodland was cleared for housing.", mistake: "—", formality: "neutral", types: ["Maps"] },
  { id: "v-convert", term: "be converted / transformed into", pos: "passive verb", category: "Maps", pattern: "X was converted into Y", example: "The barn was converted into a café.", mistake: "‘converted to a café’ is also fine; ‘transformed to’ is not.", formality: "neutral", types: ["Maps"] },
  { id: "v-extend", term: "be extended / expanded / widened", pos: "passive verb", category: "Maps", pattern: "X was extended (eastwards)", example: "The harbour was expanded into a marina.", mistake: "—", formality: "neutral", types: ["Maps"] },
  { id: "v-relocate", term: "be relocated / moved", pos: "passive verb", category: "Maps", pattern: "X was relocated to Y", example: "The bus station was relocated to the town centre.", mistake: "—", formality: "neutral", types: ["Maps"] },
  { id: "v-remainunch", term: "remain unchanged", pos: "verb phrase", category: "Maps", pattern: "X remained unchanged / was retained", example: "The church in the centre remained unchanged.", mistake: "—", formality: "neutral", types: ["Maps"] },
  { id: "v-adjacent", term: "adjacent to / alongside / opposite", pos: "preposition", category: "Maps", pattern: "adjacent to the river", example: "A car park was added adjacent to the station.", mistake: "‘adjacent of’ — ‘adjacent to’.", formality: "formal", types: ["Maps"] },
  { id: "v-outskirts", term: "on the outskirts / in the centre", pos: "phrase", category: "Maps", pattern: "on the outskirts of the town", example: "Housing spread to the outskirts.", mistake: "—", formality: "neutral", types: ["Maps"] },

  // ---- Processes / Sequencing ----
  { id: "v-initially", term: "initially / to begin with", pos: "adverb", category: "Sequencing", pattern: "Initially, X is done", example: "Initially, the raw materials are collected.", mistake: "—", formality: "neutral", types: ["Processes"] },
  { id: "v-subsequently", term: "subsequently / following this", pos: "adverb", category: "Sequencing", pattern: "Subsequently, X is done", example: "Subsequently, the pulp is bleached.", mistake: "—", formality: "formal", types: ["Processes"] },
  { id: "v-once", term: "once / as soon as", pos: "conjunction", category: "Sequencing", pattern: "Once X is complete, Y begins", example: "Once the mixture has cooled, it is moulded.", mistake: "—", formality: "neutral", types: ["Processes"] },
  { id: "v-finally", term: "finally / in the final stage", pos: "adverb", category: "Sequencing", pattern: "Finally, X is done", example: "Finally, the product is packaged and distributed.", mistake: "—", formality: "neutral", types: ["Processes"] },
  { id: "v-passiveproc", term: "is heated / mixed / filtered / dried", pos: "passive verb", category: "Processes", pattern: "The X is [verb]-ed", example: "The liquid is filtered and then dried.", mistake: "Active voice in a manufacturing process.", formality: "neutral", types: ["Processes"] },
  { id: "v-cyclical", term: "linear / cyclical", pos: "adjective", category: "Processes", pattern: "a linear / cyclical process", example: "The process is cyclical, returning to the first stage.", mistake: "—", formality: "formal", types: ["Processes"] },

  // ---- Contrast / Similarity / Ranking ----
  { id: "v-whereas", term: "whereas / while", pos: "conjunction", category: "Contrast", pattern: "A rose, whereas B fell", example: "Rail use grew, whereas car use declined.", mistake: "Comma before ‘whereas’ in mid-sentence.", formality: "formal", types: ["Line Graphs", "Bar Charts", "Tables"] },
  { id: "v-bycontrast", term: "by contrast / in comparison", pos: "phrase", category: "Contrast", pattern: "By contrast, X …", example: "By contrast, the rural figure barely moved.", mistake: "—", formality: "formal", types: ["Line Graphs", "Bar Charts", "Tables"] },
  { id: "v-similarly", term: "similarly / likewise", pos: "adverb", category: "Similarity", pattern: "Similarly, X …", example: "Similarly, spending on books rose.", mistake: "—", formality: "formal", types: ["Bar Charts", "Line Graphs"] },
  { id: "v-broadly", term: "broadly similar", pos: "phrase", category: "Similarity", pattern: "A and B were broadly similar", example: "The two age groups gave broadly similar answers.", mistake: "—", formality: "neutral", types: ["Bar Charts", "Tables"] },
  { id: "v-rankfirst", term: "ranked first / came last", pos: "verb phrase", category: "Ranking", pattern: "X ranked first, followed by Y", example: "The USA ranked first, followed by China.", mistake: "—", formality: "neutral", types: ["Bar Charts", "Tables"] },
  { id: "v-followed", term: "was followed by", pos: "passive verb", category: "Ranking", pattern: "X, at N, was followed by Y at M", example: "France led at 80, followed by Spain at 65.", mistake: "—", formality: "neutral", types: ["Bar Charts", "Tables"] }
];
