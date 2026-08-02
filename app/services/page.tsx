import ServicesHub from '@/app/components/sections/ServicesHub';
import { buildMetadata } from '@/app/lib/utils/seo';

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'All services at one desk: government, education, health, documents, design and branding, computer and IT, and online career support.',
  path: '/services',
});

export default function ServicesPage() {
  return <ServicesHub />;
}
