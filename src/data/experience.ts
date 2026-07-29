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
    company: 'Bercy Chen Studio LP',
    position: 'Development Intern',
    location: 'Austin, Texas',
    period: 'May 2026 – Present',
    current: true,
    type: 'professional',
    bullets: [
      'Prepared a rent-by-room comparable analysis for 7800 Burleson Road to support proposed market rents, rental positioning, and underwriting assumptions.',
      'Developed a refinancing pitch deck for 2801 South I-35 Frontage Road, presenting market research, property positioning, and investment highlights.',
      'Built a side-by-side capital stack analysis for the $73.8 million 7800 Burleson Road project, comparing two financing scenarios across loan-to-cost, blended cash-on-cash return, and equity structure to give investors a clear basis for evaluating the optimal financing structure.',
      'Participated as an observer in an institutional lender credit-screening call with JPMorgan for the $73.8 million mixed-income multifamily development, gaining exposure to how lenders evaluate submarket vacancy, new supply, concessions, effective rents, and the distinction between 60% AMI-restricted and market-rate units.',
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
      'Deliver attentive and efficient service in a fast-paced restaurant environment while maintaining high guest satisfaction standards.',
      'Monitor guest needs and address concerns promptly to support a positive dining experience.',
      'Accurately enter food and beverage orders into the POS system and coordinate with kitchen and service staff to ensure timely, accurate service.',
      'Demonstrate consistent leadership, communication, teamwork, and customer-service skills across all shifts.',
    ],
  },
  {
    company: 'Austin Sneakerheads',
    position: 'Owner',
    location: 'Austin, Texas',
    period: '2018 – 2022',
    current: false,
    type: 'entrepreneurial',
    bullets: [
      'Managed sneaker inventory through organized tracking systems, maintaining accurate records and supporting efficient inventory turnover.',
      'Developed an online sales platform that expanded customer reach beyond local markets.',
      'Negotiated bulk purchasing arrangements with retail store owners to improve profit margins and product availability.',
      'Built foundational experience in sales, negotiation, inventory management, and entrepreneurship.',
    ],
  },
];
