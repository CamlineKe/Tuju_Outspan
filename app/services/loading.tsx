import Skeleton from '@/app/components/ui/Skeleton';
import SkeletonCard from '@/app/components/ui/SkeletonCard';

export default function ServicesLoading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>
      <section className="bg-navy-900 px-6 pb-10 pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1200px] space-y-4">
          <Skeleton width={200} />
          <Skeleton width={320} height={36} />
          <Skeleton width={420} />
        </div>
      </section>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} type="service" />
          ))}
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-[1100px] space-y-5">
          <Skeleton width={240} height={28} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} variant="rounded" height={96} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy-50 px-6 py-16">
        <Skeleton variant="rounded" className="mx-auto" width={440} height={160} />
      </section>
    </div>
  );
}
