import { MessageCircle } from 'lucide-react';

import Button from '@/app/components/ui/Button';
import Reveal from '@/app/components/ui/Reveal';
import { buildContextualWhatsAppLink } from '@/app/lib/utils/whatsapp';

export default function CTABanner() {
  return (
    <section className="bg-orange-500 px-6 py-[72px] text-center text-white">
      <Reveal className="mx-auto max-w-[480px]">
        <h2 className="text-[28px] font-bold leading-[1.2] md:text-[32px] lg:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-3 max-w-[480px] text-[17px] text-white/85">
          One WhatsApp message is all it takes.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            href={buildContextualWhatsAppLink('cta')}
            size="large"
            className="bg-white text-navy-900 hover:bg-white/90"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Chat on WhatsApp
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
