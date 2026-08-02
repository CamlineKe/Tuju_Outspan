import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  service: string;
}

export default function TestimonialCard({ quote, author, service }: TestimonialCardProps) {
  return (
    <figure className="rounded-xl border border-gray-200 bg-white p-7">
      <div className="flex gap-1" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 text-orange-500"
            fill="currentColor"
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-4 text-base italic leading-relaxed text-gray-700">
        {quote}
      </blockquote>
      <figcaption className="mt-4">
        <p className="text-sm font-bold text-navy-900">{author}</p>
        <p className="mt-1 text-[13px] text-gray-400">{service}</p>
      </figcaption>
    </figure>
  );
}
