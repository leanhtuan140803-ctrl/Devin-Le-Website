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
    note: 'Academic simulation — no real client capital was involved.',
  },
];
