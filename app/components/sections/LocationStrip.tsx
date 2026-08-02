import { Clock, MapPin, Phone } from 'lucide-react';

const BUSINESS_LOCATION =
  process.env.NEXT_PUBLIC_BUSINESS_LOCATION ?? 'Ikonge-Ekerenyo Stage, Chuka University';

export default function LocationStrip() {
  return (
    <div className="bg-navy-900 px-6 py-5 text-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm font-medium">
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-orange-400" aria-hidden="true" />
          <span className="font-semibold">{BUSINESS_LOCATION}</span>
        </p>
        <p className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-orange-400" aria-hidden="true" />
          Open Daily Until Late
        </p>
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-orange-400" aria-hidden="true" />
          0715 616 633
        </p>
      </div>
    </div>
  );
}
