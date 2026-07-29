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
    title: 'The Effect of Interest Rates on Economic Growth',
    course: 'Econometrics',
    date: 'Spring 2026',
    description:
      'A time-series regression study examining the empirical relationship between U.S. interest rates and GDP growth, with attention to causal inference and omitted-variable bias.',
    bullets: [
      'Conducted time-series analysis using U.S. macroeconomic data to study the relationship between interest rates and economic growth.',
      'Developed empirical regression models to estimate the effect of interest rate changes on GDP growth.',
      'Incorporated control variables and evaluated potential sources of omitted-variable bias.',
      'Applied econometric methods to assess causal versus non-causal relationships between monetary policy and economic output.',
    ],
    tags: [
      'Econometrics',
      'Regression Analysis',
      'Time-Series Analysis',
      'Macroeconomic Research',
      'Data Interpretation',
      'Monetary Policy',
    ],
    documentPath: '/documents/Interest-Rates-and-Economic-Growth.pdf',
  },
  {
    title: 'Simulated Hedge Fund Portfolio',
    course: 'Investment Management',
    date: 'Spring 2026',
    description:
      'Design and active management of a simulated hedge fund portfolio with an alpha-generating strategy, benchmarked against the S&P 500. No real client capital was involved.',
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
  {
    title: 'Capital Stack Model — Construction Financing Alternatives',
    course: 'Real Estate Development',
    date: '2026',
    description:
      'An editable, multi-scenario capital stack model comparing construction financing alternatives, with live sensitivity tables, a lender equity covenant test, and a presentation mode for sharing results.',
    bullets: [
      'Modeled multiple financing scenarios side by side, each with its own senior debt, junior capital, and equity structure sized off total development cost.',
      'Built sensitivity tables for senior leverage, junior pricing, and base-rate movement, plus a structural comparison matrix across leverage, capitalization, and cost of capital.',
      'Added a lender equity covenant test and built-in validation that flags unbalanced sources and uses, over-leverage, and other entry errors as assumptions change.',
      'Included an editable Edit Mode and a client-ready Presentation Mode, with CSV/JSON export and a shareable link that encodes the full assumption set.',
    ],
    tags: [
      'Capital Stack Modeling',
      'Real Estate Finance',
      'Sensitivity Analysis',
      'Underwriting',
      'Scenario Comparison',
    ],
    documentPath: '/exhibits/capital-stack-model.html',
  },
  {
    title: 'Equity Distribution Waterfall — Interactive Model',
    course: 'Real Estate Finance',
    date: '2026',
    description:
      'An interactive calculator that models how cash from a real estate joint venture is split between the sponsor and investor across a multi-tier return waterfall, with a guided walkthrough, sensitivity heatmap, and scenario comparison.',
    bullets: [
      'Built a full waterfall engine covering ownership splits, IRR-based return thresholds, and tiered sponsor incentives (the promote).',
      'Modeled cash timing across the holding period, including partial distributions during the hold and a final payout at sale.',
      'Added a sensitivity heatmap showing how investor returns and sponsor share shift across a range of holding periods and cash outcomes.',
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
];
