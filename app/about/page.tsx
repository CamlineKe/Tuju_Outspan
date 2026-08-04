import Image from 'next/image';

import { Accessibility, type LucideIcon, ShieldCheck, Users, Zap } from 'lucide-react';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Button from '@/app/components/ui/Button';
import { buildMetadata } from '@/app/lib/utils/seo';
import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

const VALUES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Accessibility,
    title: 'Accessibility',
    description: 'Technology and government services for everyone, regardless of background.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'No shortcuts, no hidden fees. Honest service every time.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'We respect your time and deliver quickly without cutting corners.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Rooted in Chuka, serving clients across Kenya.',
  },
];

export const metadata = buildMetadata({
  title: 'About',
  description:
    'The story, mission, and people behind Tuju Outspan Cyber Center at Ikonge-Ekerenyo Stage, Chuka University.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 pb-10 pt-28 text-white lg:pt-32">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
          <h1 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[32px] lg:text-4xl">
            About Tuju Outspan
          </h1>
          <p className="mt-3 max-w-[560px] text-lg text-gray-400">
            The story, mission, and people behind your trusted cyber center.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pt-12 pb-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-[3fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
              OUR STORY
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-[1.25] text-navy-900 md:text-[28px] lg:text-[32px]">
              Why We Started
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                Tuju Outspan Cyber Center started from a simple observation: around Chuka
                University, students and locals needed reliable tech and government services but
                often faced long queues, long trips, or services with no accountability.
              </p>
              <p>
                We built the center to change that. From KRA and HELB to printing and design, every
                request is handled with care, honesty, and speed.
              </p>
              <p>
                Today we serve walk-in clients at Ikonge-Ekerenyo Stage and online clients across
                the country, with the same standard: your hustle, our tech, made easy.
              </p>
            </div>
          </div>
          <div className="relative min-h-[340px] overflow-hidden rounded-xl shadow-navy-md">
            <Image
              src="/images/about/about-founder.webp"
              alt="The Tuju Outspan founder at the cyber center workstation"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <p className="absolute inset-x-0 bottom-0 bg-navy-900/80 px-4 py-3 text-sm text-white">
              The founder at work, Ikonge-Ekerenyo Stage
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="mx-auto max-w-[600px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
              WHAT WE STAND FOR
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-[1.25] text-navy-900 md:text-[28px] lg:text-[32px]">
              Our Mission and Values
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-xl border border-gray-200 bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-orange-50">
                  <value.icon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 px-6 py-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-2xl font-bold leading-[1.25] text-navy-900 md:text-[28px] lg:text-[32px]">
            The Face Behind the Brand
          </h2>
          <div className="relative mx-auto mt-8 h-50 w-50 overflow-hidden rounded-full border-4 border-white shadow-navy-md">
            <Image
              src="/images/about/about-founder.webp"
              alt="Portrait of Rafael Tuju, founder of Tuju Outspan Cyber Center"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-navy-900">Rafael Tuju</h3>
          <p className="mt-2 text-lg font-semibold text-gray-600">
            Founder, Tuju Outspan Cyber Center
          </p>
          <p className="mx-auto mt-4 max-w-[600px] leading-relaxed text-gray-600">
            Tuju Outspan was built on a simple belief: reliable tech and government services should
            be accessible to everyone around Chuka University and beyond.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-[2fr_3fr]">
          <div className="md:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
              OUR IMPACT
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-[1.25] text-navy-900 md:text-[28px] lg:text-[32px]">
              Rooted in Chuka. Serving Kenya.
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              We serve Chuka University students, local businesses, and clients across Kenya through
              our online services. Every completed application, print, and design is a step toward
              making professional help accessible to everyone.
            </p>
          </div>
          <div className="relative min-h-[340px] overflow-hidden rounded-xl shadow-navy-md md:order-1">
            <Image
              src="/images/about/about-space-01.webp"
              alt="The interior of the Tuju Outspan Cyber Center at Ikonge-Ekerenyo Stage"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <p className="absolute inset-x-0 bottom-0 bg-navy-900/80 px-4 py-3 text-sm text-white">
              The shop at Ikonge-Ekerenyo Stage
            </p>
          </div>
        </div>
      </section>

      <section className="bg-orange-500 px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white">Want to Work with Us?</h2>
        <p className="mt-2 text-white/85">We are one message away.</p>
        <div className="mt-6 flex justify-center">
          <Button
            href={buildGeneralWhatsAppLink()}
            className="bg-white text-navy-900 hover:bg-white/90"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}
