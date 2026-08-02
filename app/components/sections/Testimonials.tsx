import { Quote } from 'lucide-react';

import SectionHeader from '@/app/components/ui/SectionHeader';
import TestimonialCard from '@/app/components/ui/TestimonialCard';
import { testimonials } from '@/app/lib/data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-navy-50 px-6 py-20">
      <div className="mx-auto max-w-[1000px]">
        <SectionHeader overline="TESTIMONIALS" title="What Our Clients Say" />
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                service={testimonial.service}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-[500px] rounded-xl border border-gray-200 bg-white p-8 text-center">
            <Quote className="mx-auto h-10 w-10 text-navy-100" aria-hidden="true" />
            <p className="mt-4 text-gray-600">
              Client testimonials coming soon. Real reviews from our community will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
