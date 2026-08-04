import { Clock, MapPin, Navigation } from 'lucide-react';

import Button from '@/app/components/ui/Button';
import Reveal from '@/app/components/ui/Reveal';

const BUSINESS_LOCATION =
  process.env.NEXT_PUBLIC_BUSINESS_LOCATION ?? 'Ikonge-Ekerenyo Stage, Chuka University';
const MAPS_EMBED_URL = process.env.NEXT_PUBLIC_MAPS_EMBED_URL;
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS_LOCATION
)}`;

export default function ContactInfo() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
            FIND US
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-[1.25] text-navy-900 md:text-[28px] lg:text-[32px]">
            Visit Us at the Cyber Center
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Walk-ins welcome. We are at the Ikonge-Ekerenyo stage, right by Chuka University.
          </p>
          <ul className="mt-6 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-navy-900" aria-hidden="true" />
              <div>
                <p className="text-[13px] text-gray-400">Location</p>
                <p className="text-lg font-semibold text-navy-900">{BUSINESS_LOCATION}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-navy-900" aria-hidden="true" />
              <div>
                <p className="text-[13px] text-gray-400">Hours</p>
                <p className="text-lg font-semibold text-navy-900">Open Daily Until Late</p>
              </div>
            </li>
          </ul>
          <div className="mt-8">
            <Button href={MAPS_DIRECTIONS_URL} variant="outline">
              <Navigation className="h-5 w-5" aria-hidden="true" />
              Get Directions
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {MAPS_EMBED_URL ? (
            <iframe
              src={MAPS_EMBED_URL}
              title="Tuju Outspan Cyber Center location map"
              loading="lazy"
              className="h-full min-h-[420px] w-full rounded-xl border border-gray-200"
            />
          ) : (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <MapPin className="h-10 w-10 text-navy-100" aria-hidden="true" />
              <p className="mt-4 text-gray-600">
                Map embed coming soon. Find us at Ikonge-Ekerenyo Stage, Chuka University.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
