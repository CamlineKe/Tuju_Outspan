import Link from 'next/link';

import { Image as ImageIcon } from 'lucide-react';

import type { BlogPost } from '@/app/lib/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy-800 hover:shadow-navy-md"
    >
      {post.coverImage ? (
        <img src={post.coverImage} alt="" loading="lazy" className="h-40 w-full object-cover" />
      ) : (
        <div className="flex h-40 items-center justify-center bg-navy-50">
          <ImageIcon className="h-10 w-10 text-navy-100" aria-hidden="true" />
          <span className="sr-only">Cover image coming soon</span>
        </div>
      )}
      <div className="p-6">
        <span className="rounded-md bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-500">
          {post.category}
        </span>
        <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-navy-900">{post.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>
        <p className="mt-4 text-[13px] text-gray-400">
          <time dateTime={post.date}>{formattedDate}</time> • {post.readTimeMinutes} min read
        </p>
      </div>
    </Link>
  );
}
