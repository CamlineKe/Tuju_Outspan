'use client';

import { useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import BlogCard from '@/app/components/ui/BlogCard';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Button from '@/app/components/ui/Button';
import Reveal from '@/app/components/ui/Reveal';
import { type BlogCategory, blogPosts } from '@/app/lib/data/blog';
import { formatDateShort } from '@/app/lib/utils/date';

type BlogFilter = 'All' | BlogCategory;

const CATEGORIES: BlogFilter[] = [
  'All',
  'Government',
  'Education',
  'Health',
  'Tech Tips',
  'Design',
  'Career',
];

const PAGE_SIZE = 6;

export default function BlogListing() {
  const [category, setCategory] = useState<BlogFilter>('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const posts =
      category === 'All' ? blogPosts : blogPosts.filter((post) => post.category === category);
    return [...posts].sort((a, b) => b.date.localeCompare(a.date));
  }, [category]);

  const featured = category === 'All' && filtered.length > 0 ? filtered[0] : undefined;
  const gridPosts = (featured ? filtered.slice(1) : filtered).slice(0, visibleCount);
  const hasMore = visibleCount < (featured ? filtered.length - 1 : filtered.length);

  const selectCategory = (next: BlogFilter) => {
    setCategory(next);
    setVisibleCount(PAGE_SIZE);
  };

  const channelLink = process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL;
  const formattedFeaturedDate = featured ? formatDateShort(featured.date) : '';

  return (
    <>
      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 pb-10 pt-28 text-white lg:pt-32">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
          <h1 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[32px] lg:text-4xl">
            Blog and Guides
          </h1>
          <p className="mt-3 max-w-[560px] text-lg text-gray-400">
            Tips, how-tos, and updates to make your digital life easier.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-8 pt-10">
        <div className="mx-auto max-w-[1100px]">
          {featured && (
            <Reveal>
              <article className="group grid grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-navy-800 hover:shadow-navy-md md:grid-cols-2">
                {featured.coverImage ? (
                  <div className="relative h-52 w-full md:h-full">
                    <Image
                      src={featured.coverImage}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-52 items-center justify-center bg-navy-50 md:h-full">
                    <span className="text-sm text-gray-400">Cover image coming soon</span>
                  </div>
                )}
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <span className="w-fit rounded-md bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-500">
                    {featured.category}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-navy-900">{featured.title}</h2>
                  <p className="mt-3 line-clamp-2 text-gray-600">{featured.excerpt}</p>
                  <p className="mt-4 text-[13px] text-gray-400">
                    <time dateTime={featured.date}>{formattedFeaturedDate}</time> •{' '}
                    {featured.readTimeMinutes} min read
                  </p>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 transition-colors hover:text-navy-900"
                  >
                    Read More
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-white px-6 pb-8">
        <div className="mx-auto flex max-w-[1100px] flex-wrap gap-2">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => selectCategory(item)}
              aria-pressed={category === item}
              className={
                category === item
                  ? 'rounded-lg bg-navy-900 px-4 py-2 text-sm font-medium text-white'
                  : 'rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50'
              }
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 100}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
        {gridPosts.length === 0 && (
          <p className="py-16 text-center text-gray-600">
            No posts in this category yet. Check back soon.
          </p>
        )}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <Button variant="outline" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
              Load More Articles
            </Button>
          </div>
        )}
      </section>

      <section className="bg-orange-50 px-6 py-12 text-center">
        <h2 className="text-xl font-semibold text-navy-900">Get Updates on WhatsApp</h2>
        <p className="mt-2 text-gray-600">
          Join our channel for the latest tips and service updates.
        </p>
        <div className="mt-6 flex justify-center">
          {channelLink ? (
            <Button href={channelLink} variant="outline">
              Join WhatsApp Channel
            </Button>
          ) : (
            <p className="text-sm text-gray-400">Channel link coming soon</p>
          )}
        </div>
      </section>
    </>
  );
}
