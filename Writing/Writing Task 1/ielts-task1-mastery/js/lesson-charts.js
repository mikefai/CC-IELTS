/* Per-lesson worked-visual chart configs (original synthetic data).
   window.IT1M_CHARTS[slug] = [ { type, cfg, note } ] */
window.IT1M_CHARTS = {
  "line-graphs": [{
    type: "line",
    cfg: {
      title: "Visitors to three London museums, 2010–2018 (millions)",
      caption: "Original data for teaching — not a real IELTS question.",
      yUnit: "millions",
      xLabels: ["2010", "2012", "2014", "2016", "2018"],
      series: [
        { name: "Museum A", values: [4.5, 4.9, 5.2, 5.6, 5.9] },
        { name: "Museum B", values: [5.8, 5.5, 4.9, 5.0, 4.9] },
        { name: "Museum C", values: [2.1, 2.8, 3.9, 5.1, 5.5] }
      ]
    },
    note: "Model overview: Overall, visitor numbers rose at two of the three museums, with Museum C growing most dramatically and overtaking Museum B, while Museum B was the only one to decline."
  }],
  "bar-charts": [{
    type: "bar",
    cfg: {
      title: "Average weekly hours of unpaid housework by gender, five countries",
      caption: "Original data for teaching.",
      yUnit: "hours/week",
      categories: ["Country A", "Country B", "Country C", "Country D", "Country E"],
      series: [
        { name: "Women", values: [18, 22, 25, 28, 20] },
        { name: "Men", values: [15, 14, 12, 10, 13] }
      ]
    },
    note: "Model overview: In all five countries women did more unpaid housework than men, though the size of the gender gap varied considerably, being largest in Country D and smallest in Country A."
  }],
  "pie-charts": [{
    type: "pie",
    cfg: {
      title: "Monthly household budget by category",
      caption: "Original data for teaching.",
      slices: [
        { name: "Rent", value: 35 }, { name: "Food", value: 30 },
        { name: "Transport", value: 15 }, { name: "Other", value: 20 }
      ]
    },
    note: "Model sentence: Rent and food together consumed almost two thirds of the household budget, at 35% and 30% respectively."
  }],
  "tables": [{
    type: "table",
    cfg: {
      title: "Households with internet access (%)",
      caption: "Original data for teaching.",
      headers: ["Region", "2005", "2012", "2019"],
      rows: [
        ["North", "55", "78", "92"],
        ["South", "20", "48", "80"],
        ["East", "12", "40", "75"],
        ["West", "60", "70", "85"]
      ]
    },
    note: "Model overview: Access increased in every region and the gap between them narrowed sharply, as the South and East grew fastest from a low base."
  }],
  "mixed-charts": [
    {
      type: "line",
      cfg: {
        title: "Total international students, 2000–2020",
        caption: "Visual 1 of 2 — original data.",
        yUnit: "students",
        xLabels: ["2000", "2005", "2010", "2015", "2020"],
        series: [{ name: "Total", values: [1200, 1650, 2200, 2900, 3400] }]
      }
    },
    {
      type: "bar",
      cfg: {
        title: "Region of origin, 2000 vs 2020 (% of students)",
        caption: "Visual 2 of 2 — original data.",
        yUnit: "% share",
        categories: ["Europe", "Asia", "Africa", "Americas"],
        series: [
          { name: "2000", values: [52, 28, 8, 12] },
          { name: "2020", values: [30, 50, 11, 9] }
        ]
      },
      note: "Model overview: Overall, the number of international students almost tripled over the two decades, and this expansion was driven largely by students from Asia, whose share rose sharply while Europe's declined."
    }
  ]
};
