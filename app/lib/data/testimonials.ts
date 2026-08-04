export interface Testimonial {
  quote: string;
  author: string;
  service: string;
}

// Real client quotes provided by the business owner (PRD content requirements).
export const testimonials: Testimonial[] = [
  {
    quote:
      'I had an amazing experience with Tuju Outspan. They handled my online application professionally, explained every step clearly, and completed everything on time. Their services are fast, reliable, and affordable. I highly recommend Tuju Outspan to anyone looking for trusted cyber and online services.',
    author: 'Ivan',
    service: 'Online Services',
  },
  {
    quote:
      "I am impressed by the way Tuju Outspan serves people with patience, honesty, and professionalism. They treat every client with respect and are always ready to help. It's encouraging to see young people offering such dependable services to the community. Keep up the excellent work, and may God continue to bless your efforts.",
    author: 'Mama Assembly',
    service: 'Community Member',
  },
  {
    quote:
      'Tuju Outspan made my KUCCPS transfer process simple and stress-free. They explained every step clearly, handled everything professionally, and ensured my application was submitted correctly and on time. I was also impressed by the quality of their magazine production; creative, well-designed, and professionally finished. I highly recommend Tuju Outspan for reliable KUCCPS services and quality publication work.',
    author: 'David Wafula',
    service: 'KUCCPS & Magazine Production',
  },
  {
    quote:
      "We appreciate Tuju Outspan's commitment to serving students with professionalism, integrity, and a spirit of excellence. Their dedication to helping others through reliable services is commendable. We encourage them to continue making a positive impact while upholding Christian values in all they do.",
    author: 'Chuka University Christian Union',
    service: 'Student Organization',
  },
];
