import type { ServiceSlug } from './services';

export interface PricingItem {
  name: string;
  priceLabel: string;
}

export interface PricingCard {
  slug: ServiceSlug;
  name: string;
  description: string;
  featured?: boolean;
  items: PricingItem[];
}

export const pricingCards: PricingCard[] = [
  {
    slug: 'government',
    name: 'Government Services',
    description: 'Common government processes with transparent starting rates.',
    featured: true,
    items: [
      { name: 'KRA PIN Registration', priceLabel: 'from KSh 200' },
      { name: 'NIL Returns Filing', priceLabel: 'from KSh 300' },
      { name: 'KRA PIN Updates', priceLabel: 'Ask for quote' },
      { name: 'eCitizen Services', priceLabel: 'Ask for quote' },
      { name: 'Passport Applications', priceLabel: 'Ask for quote' },
    ],
  },
  {
    slug: 'education',
    name: 'Education Services',
    description: 'Student-focused support with student-friendly rates.',
    items: [
      { name: 'KUCCPS Applications', priceLabel: 'Ask for quote' },
      { name: 'HELB First Application', priceLabel: 'Ask for quote' },
      { name: 'HELB Subsequent Loan', priceLabel: 'Ask for quote' },
      { name: 'Results Checking', priceLabel: 'from KSh 50' },
    ],
  },
  {
    slug: 'health',
    name: 'Health and Social Services',
    description: 'Registration and account support for health schemes.',
    items: [
      { name: 'SHA Registration', priceLabel: 'Ask for quote' },
      { name: 'SHA Updates', priceLabel: 'Ask for quote' },
      { name: 'NSSF Services', priceLabel: 'Ask for quote' },
      { name: 'NHIF Support', priceLabel: 'Ask for quote' },
    ],
  },
  {
    slug: 'documents',
    name: 'Document Services',
    description: 'Competitive per-page and per-item rates.',
    items: [
      { name: 'A4 Printing', priceLabel: 'from KSh 10 per page' },
      { name: 'Photocopying', priceLabel: 'from KSh 5 per page' },
      { name: 'Scanning', priceLabel: 'from KSh 20 per page' },
      { name: 'Lamination', priceLabel: 'from KSh 50' },
      { name: 'Binding', priceLabel: 'Ask for quote' },
    ],
  },
  {
    slug: 'design-branding',
    name: 'Design and Branding',
    description: 'Custom quotes based on project scope.',
    items: [
      { name: 'Business Cards', priceLabel: 'from KSh 500 per 100' },
      { name: 'Logo Design', priceLabel: 'Ask for quote' },
      { name: 'Posters and Banners', priceLabel: 'Ask for quote' },
      { name: 'T-Shirt Printing', priceLabel: 'Ask for quote' },
    ],
  },
  {
    slug: 'computer-it',
    name: 'Computer and IT Services',
    description: 'Service-based pricing for tech support.',
    items: [
      { name: 'Windows Installation', priceLabel: 'from KSh 1,500' },
      { name: 'Software Installation', priceLabel: 'from KSh 500' },
      { name: 'Virus and Malware Removal', priceLabel: 'from KSh 1,000' },
      { name: 'Computer Package Classes', priceLabel: 'Ask for quote' },
    ],
  },
  {
    slug: 'online-career',
    name: 'Online and Career Services',
    description: 'Affordable per-service rates.',
    items: [
      { name: 'CV Writing', priceLabel: 'from KSh 300' },
      { name: 'Email Setup', priceLabel: 'from KSh 200' },
      { name: 'Online Applications', priceLabel: 'Ask for quote' },
      { name: 'Form Filling', priceLabel: 'Ask for quote' },
    ],
  },
];

export function getPricingCard(slug: ServiceSlug): PricingCard | undefined {
  return pricingCards.find((card) => card.slug === slug);
}
