import CTABanner from '@/app/components/sections/CTABanner';
import Hero from '@/app/components/sections/Hero';
import LocationStrip from '@/app/components/sections/LocationStrip';
import ProcessSteps from '@/app/components/sections/ProcessSteps';
import ServicesGrid from '@/app/components/sections/ServicesGrid';
import Testimonials from '@/app/components/sections/Testimonials';
import WhyChooseUs from '@/app/components/sections/WhyChooseUs';
import { buildMetadata } from '@/app/lib/utils/seo';

export const metadata = buildMetadata({
  title: 'Home',
  description:
    'All your digital and government services, handled professionally at Ikonge-Ekerenyo Stage, Chuka University. Chat with us on WhatsApp.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <LocationStrip />
      <CTABanner />
    </>
  );
}
