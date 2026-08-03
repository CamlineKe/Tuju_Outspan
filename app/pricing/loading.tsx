import Skeleton from '@/app/components/ui/Skeleton';
import SkeletonCard from '@/app/components/ui/SkeletonCard';

export default function PricingLoading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>
      <section className="bg-navy-900 px-6 pb-15 pt-24 lg:pt-28">
        <div className="mx-auto max-w-[1200px] space-y-4">
          <Skeleton width={160} />
          <Skeleton width={260} height={36} />
          <Skeleton width={380} />
        </div>
      </section>
      <section className="bg-white px-6 py-12">
        <Skeleton className="mx-auto" width={520} />
      </section>
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} type="pricing" />
          ))}
        </div>
      </section>
    </div>
  );
}
