/* ============================================================
   IELTS Task 1 Mastery — practice content
   window.IT1M.planner[]  — Planning Trainer scenarios
   window.IT1M.questionBank[]  — worked practice questions
   All visuals use original synthetic data.
   ============================================================ */
window.IT1M = window.IT1M || {};

window.IT1M.planFields = [
  { key: "type", label: "1. Question type" },
  { key: "units", label: "2. Units" },
  { key: "time", label: "3. Time period (or 'none')" },
  { key: "highest", label: "4. Highest feature" },
  { key: "lowest", label: "5. Lowest feature" },
  { key: "trend", label: "6. Major trend or change" },
  { key: "compare", label: "7. Most important comparison" },
  { key: "overview", label: "8. Overview points (2–4)" },
  { key: "grouping", label: "9. How the two body paragraphs are grouped" }
];

window.IT1M.planner = [
  {
    id: "plan-line",
    title: "Line graph — electricity by sector",
    type: "Line graph",
    prompt: "The graph shows electricity consumption (in terawatt-hours) by three sectors — industry, households and transport — in one country between 2000 and 2020.",
    chart: {
      type: "line",
      cfg: {
        title: "Electricity consumption by sector, 2000–2020 (TWh)",
        caption: "Original synthetic data for practice.",
        yUnit: "TWh",
        xLabels: ["2000", "2005", "2010", "2015", "2020"],
        series: [
          { name: "Industry", values: [90, 96, 105, 118, 130] },
          { name: "Households", values: [70, 78, 84, 88, 92] },
          { name: "Transport", values: [12, 18, 28, 42, 60] }
        ]
      }
    },
    expertPlan: {
      type: "Line graph (dynamic / change over time).",
      units: "Terawatt-hours (TWh).",
      time: "2000–2020 → past simple.",
      highest: "Industry throughout, ending near 130 TWh.",
      lowest: "Transport throughout, but rising fastest.",
      trend: "All three rose; transport rose most steeply (roughly five-fold).",
      compare: "Transport vs industry: transport started ~1/7 of industry and closed the gap sharply.",
      overview: "Overall upward trend in all sectors; industry stayed the largest consumer; transport grew by far the most.",
      grouping: "Body 1: industry and households (large, steady growth). Body 2: transport (small base, dramatic rise) + the narrowing gap."
    }
  },
  {
    id: "plan-map",
    title: "Maps — village centre, 1995 vs 2020",
    type: "Maps (two time points)",
    prompt: "The two maps show the centre of a village in 1995 and how it had changed by 2020.",
    chart: {
      type: "table",
      cfg: {
        title: "Changes recorded between the two maps",
        caption: "Use this as the 'map' for planning practice.",
        headers: ["Feature (1995)", "By 2020"],
        rows: [
          ["Farmland, north", "Housing estate + access road"],
          ["Village shop, centre", "Unchanged"],
          ["Petrol station, east", "Demolished; small car park"],
          ["Primary school, south", "Extended westwards"],
          ["Pond, south-west", "Retained, footpath added around it"]
        ]
      }
    },
    expertPlan: {
      type: "Two maps of the same area — describe change.",
      units: "None (spatial description).",
      time: "1995 vs 2020 → past simple, passive voice.",
      highest: "n/a — instead: biggest change = farmland → housing in the north.",
      lowest: "n/a — smallest change: the village shop (unchanged).",
      trend: "Overall: the centre became more residential and slightly more developed.",
      compare: "North (major new housing) vs south (minor extension + retained pond).",
      overview: "The village centre was built up in the north, gained housing and roads, and lost its petrol station, while the shop and pond in the south were kept.",
      grouping: "Body 1: the north and east (new housing, road, demolished station). Body 2: the south and centre (school extension, retained shop and pond)."
    }
  },
  {
    id: "plan-mixed",
    title: "Mixed — total tourists + purpose of visit",
    type: "Mixed (line graph + pie charts)",
    prompt: "A line graph shows the total number of overseas tourists visiting a region (2005–2020). Two pie charts show their main purpose of visit in 2005 and 2020.",
    chart: {
      type: "line",
      cfg: {
        title: "Overseas tourists, 2005–2020 (thousands)  —  visual 1 of 2",
        caption: "Visual 2: purpose of visit — Leisure 55%→40%, Business 30%→25%, Visiting family 15%→35% (2005→2020).",
        yUnit: "thousands",
        xLabels: ["2005", "2010", "2015", "2020"],
        series: [{ name: "Total tourists", values: [420, 560, 740, 910] }]
      }
    },
    expertPlan: {
      type: "Mixed: dynamic line graph + two pie charts.",
      units: "Thousands of tourists; % for purpose of visit.",
      time: "2005–2020 → past simple.",
      highest: "2020 total (~910k); largest purpose in 2005 was leisure (55%).",
      lowest: "2005 total (~420k); smallest 2005 purpose was 'visiting family' (15%).",
      trend: "Total more than doubled; 'visiting family' overtook 'business' and closed on 'leisure'.",
      compare: "Leisure vs visiting-family shares: leisure fell 15 points while visiting-family rose 20 points.",
      overview: "Tourist numbers rose steadily across the period, and the mix of reasons shifted, with visiting family becoming much more important while leisure declined as a share.",
      grouping: "Body 1: the line graph (steady rise, roughly double). Body 2: the pie charts (leisure down, visiting-family up, business broadly stable)."
    }
  }
];

window.IT1M.questionBank = [
  {
    id: "qb-bar-1", type: "Bar chart", difficulty: "Band 6→7", band: "6.0–7.0",
    prompt: "The chart below shows the average monthly spending on four categories by households in three income groups.",
    chart: {
      type: "bar",
      cfg: {
        title: "Average monthly household spending (£)",
        caption: "Original synthetic data.",
        yUnit: "£/month",
        categories: ["Housing", "Food", "Transport", "Leisure"],
        series: [
          { name: "Low income", values: [520, 340, 120, 60] },
          { name: "Middle income", values: [780, 430, 260, 180] },
          { name: "High income", values: [1100, 520, 430, 420] }
        ]
      }
    },
    modelPlan: "Overview: housing was the largest expense for every group, and spending rose with income in every category, with the widest gaps in leisure and transport. Body 1: housing and food (biggest absolute amounts, gap grows with income). Body 2: transport and leisure (smallest for low-income, roughly seven times higher for high-income in leisure).",
    sampleResponse: "The bar chart compares how much households in three income brackets spent each month on housing, food, transport and leisure.\n\nOverall, housing was the single largest cost for all three groups, and in every category spending increased in line with income. The differences between the groups were widest for leisure and transport.\n\nLow-income households spent around £520 a month on housing and £340 on food, while the equivalent figures for high-income households were roughly £1,100 and £520. The gap was therefore much larger for housing than for food.\n\nTransport and leisure showed the sharpest contrasts. Low-income households spent only about £60 a month on leisure, compared with £180 for middle-income and £420 for high-income households — seven times as much. Transport followed a similar pattern, rising from £120 to £430 across the three groups.",
    whyItWorks: "Clear 'Overall,' sentence with two general features; body paragraphs grouped by amount (large vs small categories); figures approximated; a multiple comparison ('seven times as much'); no reasons or opinion; ~175 words."
  },
  {
    id: "qb-line-1", type: "Line graph", difficulty: "Band 7→8", band: "7.0–8.0",
    prompt: "The graph shows the percentage of households in a city with access to three technologies between 2004 and 2020.",
    chart: {
      type: "line",
      cfg: {
        title: "Household access to technology (%), 2004–2020",
        caption: "Original synthetic data.",
        yUnit: "% of households",
        xLabels: ["2004", "2008", "2012", "2016", "2020"],
        series: [
          { name: "Fixed broadband", values: [22, 48, 71, 82, 86] },
          { name: "Smartphone", values: [3, 18, 55, 84, 95] },
          { name: "Smart-home device", values: [0, 1, 6, 22, 48] }
        ]
      }
    },
    modelPlan: "Overview: all three technologies became far more common; smartphones rose fastest and ended highest, overtaking broadband around 2015, while smart-home devices, from a base of zero, were still the least common. Body 1: broadband and smartphones (both near-universal by 2020; smartphone crossover). Body 2: smart-home devices (negligible until 2012, then rapid growth to about half).",
    sampleResponse: "The line graph illustrates changes in the share of city households with fixed broadband, a smartphone and a smart-home device over a 16-year period.\n\nOverall, access to all three technologies grew substantially. Smartphone ownership increased most dramatically, overtaking fixed broadband around the middle of the period to become the most widespread by 2020, whereas smart-home devices, although expanding quickly in the final years, remained the least common.\n\nIn 2004, only 22% of households had fixed broadband and just 3% owned a smartphone. Both then climbed steeply: broadband reached 71% by 2012 and levelled off at around 86%, while smartphone ownership surged past it to approximately 95%.\n\nSmart-home devices were effectively absent until 2012, when they were present in only 6% of homes. Adoption then accelerated, rising to just under a quarter by 2016 and to roughly half by 2020.",
    whyItWorks: "Developed overview naming the crossover and the ranking; verb+adverb and noun forms both used ('increased most dramatically', 'a smart-home device'); approximation throughout; participle and relative clauses; consistent past tense; ~185 words."
  },
  {
    id: "qb-process-1", type: "Process diagram", difficulty: "Band 6→7", band: "6.0–7.0",
    prompt: "The diagram shows how recycled paper is produced. Stages: used paper collected → sorted by grade → pulped in water → screened to remove staples and ink → cleaned and bleached → pressed and dried into rolls → cut and packaged.",
    chart: null,
    modelPlan: "Overview: seven stages, from collecting used paper to packaging finished rolls; a linear process with no recycled loop shown. Body 1: collection, sorting, pulping, screening (preparation). Body 2: cleaning/bleaching, pressing/drying, cutting/packaging (production and finishing).",
    sampleResponse: "The diagram illustrates the process by which waste paper is recycled into new paper, in seven stages.\n\nOverall, the process begins with the collection of used paper and ends with packaged rolls ready for distribution. It is linear, moving in a single direction from raw material to finished product.\n\nIn the first stage, used paper is collected and taken to a recycling plant, where it is sorted according to its grade and quality. The sorted paper is then mixed with water and pulped to break it down into fibres. Next, this pulp is passed through screens so that contaminants such as staples and ink can be removed.\n\nOnce the pulp has been cleaned, it is bleached to whiten it. The treated pulp is subsequently pressed to squeeze out water and dried to form large rolls of paper. Finally, these rolls are cut to size and packaged.",
    whyItWorks: "Overview gives stage count, start, end and 'linear'; present simple + passive throughout; varied sequence markers (in the first stage, then, next, once, subsequently, finally); describes steps without explaining them; ~175 words."
  },
  {
    id: "qb-pie-1", type: "Pie charts", difficulty: "Band 6→7", band: "6.0–7.0",
    prompt: "The two pie charts show how a university's research budget was divided among four faculties in 2010 and 2022.",
    chart: {
      type: "pie",
      cfg: {
        title: "Research budget share, 2022 (%)  —  compare with 2010",
        caption: "2010 shares: Sciences 30, Engineering 25, Medicine 28, Humanities 17. 2022 shown below.",
        slices: [
          { name: "Sciences", value: 26 }, { name: "Engineering", value: 34 },
          { name: "Medicine", value: 32 }, { name: "Humanities", value: 8 }
        ]
      }
    },
    modelPlan: "Overview: Engineering and Medicine gained share and became the two largest, while Humanities' share roughly halved and Sciences slipped slightly. Body 1: the risers (Engineering +9, Medicine +4). Body 2: the fallers (Humanities 17→8, Sciences 30→26).",
    sampleResponse: "The pie charts compare the proportion of a university's research budget allocated to four faculties in 2010 and 2022.\n\nOverall, the balance shifted towards Engineering and Medicine, which together accounted for around two thirds of the budget by 2022, while the share going to Humanities fell to less than half of its earlier level.\n\nIn 2010, the Sciences received the largest single share, at 30%, closely followed by Medicine on 28% and Engineering on 25%. By 2022, Engineering had risen to become the largest recipient at 34%, and Medicine had also grown, to 32%.\n\nThe Sciences saw their share edge down from 30% to 26%. The most striking change affected the Humanities, whose allocation dropped sharply from 17% to just 8%, leaving it a very small proportion of the total.",
    whyItWorks: "Overview describes the shift and gives a combined proportion, not a list; proportion verbs ('accounted for', 'received'); change reported segment-by-segment across the two charts; fraction language; ~160 words."
  }
];
