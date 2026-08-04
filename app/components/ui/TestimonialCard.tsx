import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  service: string;
}

function getInitials(author: string) {
  return author
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();
}

export default function TestimonialCard({ quote, author, service }: TestimonialCardProps) {
  return (
    <figure className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-navy-md md:p-10">
      <Quote className="mx-auto h-9 w-9 text-orange-500" aria-hidden="true" />
      <div className="mt-5 flex justify-center gap-1" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 text-orange-500"
            fill="currentColor"
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-gray-700 md:text-xl">
        {quote}
      </blockquote>
      <figcaption className="mt-8">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-base font-bold text-white"
          aria-hidden="true"
        >
          {getInitials(author)}
        </div>
        <p className="mt-3 text-base font-bold text-navy-900">{author}</p>
        <span className="mt-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          {service}
        </span>
      </figcaption>
    </figure>
  );
}
