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
      'Developed a refinancing pitch deck for 2801 South I-35 Frontage Road to support the property’s refinancing opportunity by presenting market research, property positioning, and investment highlights.',
      'Built an interactive JV distribution waterfall that sizes LP and GP returns across a three-tier promote structure, computing IRR, equity multiple, and effective share of cash under any combination of equity split, hurdle, and promote.',
      'Built an interactive capital stack model for 7800 Burleson Road, a 316-unit development, comparing a debt fund structure against a conventional bank plus mezzanine capital structure across loan-to-cost, blended cost of capital, and cash-on-cash to give investors a defensible basis for selecting a financing path.',
      'Observed institutional credit screening on a $73.8 million mixed-income multifamily development, including how JPMorgan’s team tested submarket vacancy, oversupply, concession-adjusted effective rents, and 60% AMI vs. market-rate rent assumptions.',
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
