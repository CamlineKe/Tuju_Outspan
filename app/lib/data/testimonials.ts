export interface Testimonial {
  quote: string;
  author: string;
  service: string;
}

// Real quotes are pending from the business owner (PRD content requirements).
// The testimonials section renders from this array; keep it empty until content arrives.
export const testimonials: Testimonial[] = [];
