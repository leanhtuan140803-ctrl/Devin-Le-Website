export interface Project {
  title: string;
  course: string;
  date: string;
  description: string;
  bullets: string[];
  tags: string[];
  note?: string;
  documentPath?: string;
}

export const projects: Project[] = [
  {
    title: 'ICSC Retail Real Estate Bridge Program',
    course: 'Retail Real Estate',
    date: 'Fall 2026',
    description:
      'A retail real estate case study completed through the ICSC Bridge Program, valuing a 60,000 SF retail center through a full landlord pro forma, lease structure comparison, and site selection analysis.',
    bullets: [
      'Built a landlord pro forma for a 60,000 SF retail center, valuing it at $10.4M at an 8% cap rate net of TI and leasing commissions.',
      'Compared gross and NNN leases, finding a $4M value lift from expense recoveries, and stress-tested cap rate and rent scenarios.',
      'Evaluated retail site selection through trade area demographics, visibility, and parking to drive tenant sales forecasts.',
    ],
    tags: [
      'Retail Real Estate',
      'Pro Forma Modeling',
      'Valuation',
      'Lease Analysis',
      'Site Selection',
    ],
  },
  {
    title: 'Interactive Capital Stack Model',
    course: 'Real Estate Development',
    date: 'Fall 2026',
    description:
      'An editable, multi-scenario capital stack model comparing construction financing alternatives, built with Claude Code into an interactive web tool with live sensitivity tables, a lender equity covenant test, and a presentation mode for sharing results with investors.',
    bullets: [
      'Built a financial model comparing different ways to finance a construction project side by side — a debt fund versus a bank plus mezzanine structure — to find the lowest-cost option across loan-to-cost, blended cost of capital, and cash-on-cash.',
      'Used Claude Code to turn the model into an interactive web tool with live sensitivity tables, a lender equity covenant test, and clean, presentation-ready visuals and charts for investors.',
      'Used the tool to test loan structures live during investor meetings, replacing static spreadsheets with a shareable, editable model that speeds up decisions.',
    ],
    tags: [
      'Capital Stack Modeling',
      'Real Estate Finance',
      'Sensitivity Analysis',
      'Underwriting',
      'Claude Code',
    ],
    documentPath: '/exhibits/capital-stack-model.html',
  },
  {
    title: 'Interactive JV Promote Waterfall',
    course: 'Real Estate Finance',
    date: 'Fall 2026',
    description:
      'An interactive calculator that models how cash from a real estate joint venture is split between the sponsor and investor across a multi-tier return waterfall, with a guided walkthrough, sensitivity heatmap, and scenario comparison.',
    bullets: [
      'Built a full waterfall engine covering ownership splits, IRR-based return thresholds, and tiered sponsor incentives (the promote), calculating LP and GP dollars, equity multiple, and annualized return with every figure recalculating live as inputs change.',
      'Modeled cash timing across the holding period, including partial distributions during the hold and a final payout at sale.',
      'Built a sensitivity heatmap that runs the full model across scenarios, showing where the promote structure shifts cash to the GP.',
      'Included a step-by-step guided walkthrough and a "show the math" mode that traces every dollar through each tier.',
    ],
    tags: [
      'Waterfall Modeling',
      'IRR Analysis',
      'Real Estate Finance',
      'Scenario Analysis',
      'Sensitivity Analysis',
    ],
    documentPath: '/exhibits/equity-distribution-waterfall.html',
  },
  {
    title: 'The Effect of Interest Rates on Economic Growth',
    course: 'Macroeconomics',
    date: 'Spring 2026',
    description:
      'A time-series regression study examining the empirical relationship between U.S. interest rates and GDP growth over 64 years of data, with five diagnostic tests confirming model reliability.',
    bullets: [
      'Built a regression model using 64 years of U.S. macroeconomic data to test whether interest rates drive GDP growth, with the model explaining 77% of the variation in growth.',
      'Found that investment growth significantly drives GDP growth at the 1% significance level, while the fed funds rate showed no significant effect.',
      'Ran five diagnostic tests — heteroskedasticity, multicollinearity, normality, omitted variables, and autocorrelation — to confirm model reliability.',
      'Applied econometric methods to assess causal versus non-causal relationships between monetary policy and economic output.',
    ],
    tags: [
      'Econometrics',
      'Regression Analysis',
      'Time-Series Analysis',
      'Macroeconomic Research',
      'Diagnostic Testing',
      'Monetary Policy',
    ],
    documentPath: '/documents/Interest-Rates-and-Economic-Growth.pdf',
  },
  {
    title: 'Simulated Hedge Fund Portfolio',
    course: 'Investment Management',
    date: 'Spring 2026',
    description:
      'Design and active management of a simulated hedge fund portfolio with an alpha-generating strategy, benchmarked against the S&P 500.',
    bullets: [
      'Designed and actively managed a simulated hedge fund portfolio with an investment strategy intended to generate alpha.',
      'Maintained portfolio tracking error within the 5%–20% range relative to the S&P 500 throughout the holding period.',
      'Prepared a client-facing investment pitch deck outlining the portfolio strategy, positioning rationale, and performance results.',
      'Evaluated risk metrics, factor exposure, and risk-adjusted performance relative to the benchmark.',
      'Used the analysis to support simulated capital-allocation recommendations.',
    ],
    tags: [
      'Portfolio Management',
      'Investment Analysis',
      'Benchmarking',
      'Risk Analysis',
      'Factor Analysis',
      'Presentation Development',
    ],
    documentPath: '/documents/Simulated-Hedge-Fund-Portfolio.pdf',
  },
];
