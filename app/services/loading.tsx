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
      <section className="bg-white px-6 py-10">
        <div className="mx-auto max-w-[600px] space-y-4">
          <Skeleton className="mx-auto" width={120} />
          <Skeleton className="mx-auto" width={280} height={24} />
          <Skeleton className="mx-auto" width={360} height={14} />
          <Skeleton variant="rounded" width="100%" height={56} />
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 7 }).map((_, index) => (
            <SkeletonCard key={index} type="service" />
          ))}
        </div>
      </section>
      <section className="bg-navy-50 px-6 py-16">
        <div className="mx-auto max-w-[1100px] space-y-4">
          <Skeleton className="mx-auto md:mx-0" width={300} height={24} />
          <Skeleton className="mx-auto md:mx-0" width={220} height={14} />
          <Skeleton variant="rounded" width={180} height={44} />
        </div>
      </section>
    </div>
  );
}
