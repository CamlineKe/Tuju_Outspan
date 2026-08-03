import { ArrowRight, MessageCircle } from 'lucide-react';

import Button from '@/app/components/ui/Button';
import Reveal from '@/app/components/ui/Reveal';
import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

const TRUST_ITEMS = ['Fast Turnaround', 'Trusted by Locals', 'Open Daily Until Late'];

export default function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 py-20 text-center text-white lg:py-30">
      <Reveal className="relative z-10 mx-auto max-w-[1200px]">
        <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-orange-400">
          Your Hustle. Our Tech. Made Easy.
        </p>
        <h1 className="mx-auto mt-4 max-w-[700px] text-[32px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[40px] lg:text-[48px]">
          All Your Digital &amp; Government Services, Handled Professionally
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] text-lg text-gray-400">
          From KRA and HELB to design and printing. Fast, reliable, and affordable at
          Ikonge-Ekerenyo Stage.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={buildGeneralWhatsAppLink()} size="large">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Chat on WhatsApp
          </Button>
          <Button href="/services" variant="outline-light" size="large">
            Explore Services
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
