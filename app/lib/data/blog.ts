export type BlogCategory =
  | 'Government'
  | 'Education'
  | 'Health'
  | 'Tech Tips'
  | 'Design'
  | 'Career';

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO date, e.g. 2026-08-01
  readTimeMinutes: number;
  author: string;
  coverImage?: string; // path under public/images/blog/, supplied by the owner
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'kra-pin-guide',
    title: 'How to Register for a KRA PIN with Tuju Outspan',
    excerpt:
      'A quick guide to KRA PIN registration, the documents you need, and how we handle it for you.',
    category: 'Government',
    date: '2026-08-01',
    readTimeMinutes: 3,
    author: 'Tuju Outspan Team',
    content: [
      {
        type: 'paragraph',
        text: 'A KRA PIN is the number you need for almost every government and financial process in Kenya, from employment to opening a bank account. The good news is that registering is straightforward when you know what to prepare.',
      },
      { type: 'heading', text: 'What You Need' },
      {
        type: 'list',
        items: [
          'A copy of your national ID or passport',
          'Your phone number for verification',
          'A working email address (we can create one for you)',
        ],
      },
      {
        type: 'paragraph',
        text: 'Once your details are confirmed, registration usually takes less than a day. We handle the application and share your PIN certificate when it is ready.',
      },
      {
        type: 'quote',
        text: 'Send us your details on WhatsApp and we take it from there.',
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
