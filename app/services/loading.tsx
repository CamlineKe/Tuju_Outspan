import Skeleton from '@/app/components/ui/Skeleton';
import SkeletonCard from '@/app/components/ui/SkeletonCard';

export default function ServicesLoading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>
      <section className="bg-navy-900 px-6 pb-15 pt-24 lg:pt-28">
        <div className="mx-auto max-w-[1200px] space-y-4">
          <Skeleton width={200} />
          <Skeleton width={320} height={36} />
          <Skeleton width={420} />
        </div>
      </section>
      <section className="bg-white px-6 pt-8">
        <Skeleton variant="rounded" className="mx-auto" width={560} height={56} />
      </section>
      <section className="bg-white px-6 py-12">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} type="service" />
          ))}
        </div>
      </section>
    </div>
  );
}
