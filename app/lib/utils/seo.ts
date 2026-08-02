import type { Metadata } from 'next';

const SITE_NAME = 'Tuju Outspan Cyber Center';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tujuoutspan.co.ke';
const DEFAULT_OG_IMAGE = '/images/og/og-default.jpg';
const ORIGIN = SITE_URL.replace(/\/$/, '');

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

function withTrailingSlash(path: string): string {
  if (path === '/') {
    return '/';
  }
  return path.endsWith('/') ? path : `${path}/`;
}

export function absolutePageUrl(path: string): string {
  return `${ORIGIN}${withTrailingSlash(path)}`;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMeta): Metadata {
  const url = absolutePageUrl(path);
  const imageUrl = `${ORIGIN}${ogImage}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_KE',
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description:
      'Cyber and digital services at Ikonge-Ekerenyo Stage, Chuka University, with online services countrywide.',
    url: SITE_URL,
    telephone: '+254715616633',
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ikonge-Ekerenyo Stage',
      addressLocality: 'Chuka',
      addressCountry: 'KE',
    },
  };
}

export function serviceJsonLd(service: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    serviceType: service.name,
    provider: { '@type': 'LocalBusiness', name: SITE_NAME },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function contactPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Tuju Outspan Cyber Center',
    url: absolutePageUrl('/contact'),
  };
}

export function blogPostingJsonLd(post: {
  title: string;
  description: string;
  date: string;
  author: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    url: post.url,
  };
}
