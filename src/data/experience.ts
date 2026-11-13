export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  current: boolean;
  type: 'professional' | 'service' | 'entrepreneurial';
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Project Destined',
    position: 'Real Estate Private Equity Intern',
    location: 'Remote',
    period: 'October 2026 – Present',
    current: true,
    type: 'professional',
    bullets: [
      'Underwrite The Regency Residences deal in Excel, building pro formas and evaluating returns through IRR and equity multiple.',
      'Interpret financial statements with Excel-based financial models, projecting net income and investment performance.',
      'Apply financial modeling and valuation skills in a final independent case study, completing a 1-page levered returns analysis.',
    ],
  },
  {
    company: 'Simply Pho House',
    position: 'Shift Leader',
    location: 'Austin, Texas',
    period: 'June 2021 – Present',
    current: true,
    type: 'service',
    bullets: [
      'Lead a team of 5 through high-volume shifts, coordinating with kitchen and bar staff to keep service on schedule.',
      'Collaborate with servers and bartenders to keep service running smoothly, stepping in wherever the team needs support.',
      'Resolve guest issues on the spot and communicate priorities clearly, keeping the team focused during the busiest hours.',
    ],
  },
  {
    company: 'Bercy Chen Studio LP',
    position: 'Development Intern',
    location: 'Austin, Texas',
    period: 'May 2026 – August 2026',
    current: false,
    type: 'professional',
    bullets: [
      'Underwrote a $73M, 316-unit mixed-income multifamily development in a monthly cash flow model and CHDO tax abatement.',
      'Compared 65% LTC bank and 80% LTC debt fund + mezz financing, evaluating blended cost of capital, DSCR, and LP returns.',
      'Developed a refinancing pitch deck for ArtHub ATX, combining rent research, comparables, and investment highlights for lenders.',
      'Sat in on JPMorgan’s credit review of 7800 Burleson, covering submarket vacancy, new supply risk, and concession-adjusted rents.',
    ],
  },
];
