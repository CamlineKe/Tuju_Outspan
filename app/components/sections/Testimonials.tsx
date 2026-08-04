import { Quote } from 'lucide-react';

import TestimonialCarousel from '@/app/components/sections/TestimonialCarousel';
import SectionHeader from '@/app/components/ui/SectionHeader';
import { testimonials } from '@/app/lib/data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-navy-50 px-6 py-16">
      <div className="mx-auto max-w-[1000px]">
        <SectionHeader overline="TESTIMONIALS" title="What Our Clients Say" />
        {testimonials.length > 0 ? (
          <TestimonialCarousel testimonials={testimonials} />
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
