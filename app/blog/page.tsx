import BlogListing from '@/app/components/sections/BlogListing';
import { buildMetadata } from '@/app/lib/utils/seo';

export const metadata = buildMetadata({
  title: 'Blog',
  description:
    'Tips, how-tos, and updates to make your digital life easier from Tuju Outspan Cyber Center.',
  path: '/blog',
});

export default function BlogPage() {
  return <BlogListing />;
}
