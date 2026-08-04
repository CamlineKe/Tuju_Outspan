import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { Image as ImageIcon } from 'lucide-react';

import PostShare from '@/app/components/sections/PostShare';
import BlogCard from '@/app/components/ui/BlogCard';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Button from '@/app/components/ui/Button';
import { type BlogPost, blogPosts, getBlogPost } from '@/app/lib/data/blog';
import { formatDateLong } from '@/app/lib/utils/date';
import { absolutePageUrl, blogPostingJsonLd, buildMetadata } from '@/app/lib/utils/seo';
import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return {};
  }
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

function InlineCta() {
  return (
    <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[10px] bg-navy-50 p-5 sm:flex-row sm:items-center">
      <p className="text-navy-900">Need help with this? Chat with us on WhatsApp.</p>
      <Button href={buildGeneralWhatsAppLink()} size="small">
        Chat Now
      </Button>
    </div>
  );
}

function renderBlock(block: BlogPost['content'][number], key: number): ReactNode {
  switch (block.type) {
    case 'heading':
      return (
        <h2 key={key} className="mt-12 text-[28px] font-bold text-navy-900">
          {block.text}
        </h2>
      );
    case 'list':
      return (
        <ul
          key={key}
          className="mt-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-gray-700 marker:text-orange-500"
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote
          key={key}
          className="mt-8 border-l-4 border-orange-500 bg-navy-50 p-5 italic text-gray-700"
        >
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p key={key} className="text-lg leading-[1.8] text-gray-700">
          {block.text}
        </p>
      );
  }
}

function renderContent(post: BlogPost): ReactNode[] {
  const blocks: ReactNode[] = [];
  let paragraphCount = 0;
  let midCtaInserted = false;

  post.content.forEach((block, index) => {
    if (block.type === 'paragraph') {
      paragraphCount += 1;
    }
    blocks.push(renderBlock(block, index));
    if (block.type === 'paragraph' && paragraphCount === 2 && !midCtaInserted) {
      blocks.push(<InlineCta key="cta-mid" />);
      midCtaInserted = true;
    }
  });

  blocks.push(<InlineCta key="cta-end" />);
  return blocks;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const formattedDate = formatDateLong(post.date);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingJsonLd({
              title: post.title,
              description: post.excerpt,
              date: post.date,
              author: post.author,
              url: absolutePageUrl(`/blog/${post.slug}`),
            })
          ),
        }}
      />

      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 pb-10 pt-28 text-center text-white lg:pt-32">
        <div className="relative z-10 mx-auto max-w-[720px]">
          <div className="flex justify-center">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.title },
              ]}
            />
          </div>
          <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.15em] text-orange-400">
            {post.category}
          </p>
          <h1 className="mt-4 text-[28px] font-bold leading-[1.2] md:text-[32px] lg:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-[13px] text-gray-400">
            {formattedDate} • {post.readTimeMinutes} min read • {post.author}
          </p>
        </div>
      </section>

      <section className="bg-white">
        {post.coverImage ? (
          <div className="relative aspect-[16/9] w-full max-h-[500px]">
            <Image src={post.coverImage} alt="" fill sizes="100vw" className="object-cover" />
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center bg-navy-50">
            <ImageIcon className="h-12 w-12 text-navy-100" aria-hidden="true" />
            <span className="sr-only">Cover image coming soon</span>
          </div>
        )}
      </section>

      <section className="bg-white px-6 pt-12 pb-16">
        <div className="mx-auto max-w-[680px]">{renderContent(post)}</div>
      </section>

      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto flex max-w-[680px] items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy-50 text-lg font-bold text-navy-900">
            TO
          </div>
          <div>
            <p className="text-lg font-semibold text-navy-900">{post.author}</p>
            <p className="mt-1 text-sm text-gray-600">
              Your trusted cyber center in Chuka. Fast, reliable, affordable.
            </p>
            <a
              href={buildGeneralWhatsAppLink()}
              className="mt-2 inline-block text-sm font-semibold text-navy-600 hover:underline"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="text-2xl font-bold text-navy-900">You Might Also Like</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy-50 px-6 py-12">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-gray-600">Found this helpful? Share it.</p>
          <div className="mt-4">
            <PostShare title={post.title} slug={post.slug} />
          </div>
        </div>
      </section>
    </>
  );
}
