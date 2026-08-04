import Skeleton from '@/app/components/ui/Skeleton';
import SkeletonCard from '@/app/components/ui/SkeletonCard';

export default function BlogLoading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>
      <section className="bg-navy-900 px-6 pb-10 pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1200px] space-y-4">
          <Skeleton width={160} />
          <Skeleton width={320} height={36} />
          <Skeleton width={400} />
        </div>
      </section>
      <section className="bg-white px-6 pb-8 pt-10">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
          <Skeleton variant="rounded" height={240} />
          <div className="space-y-4">
            <Skeleton width={90} />
            <Skeleton width={300} height={26} />
            <Skeleton count={2} />
            <Skeleton width={140} />
          </div>
        </div>
      </section>
      <section className="bg-white px-6 pb-8">
        <div className="mx-auto flex max-w-[1100px] flex-wrap gap-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton key={index} variant="rounded" width={90} height={38} />
          ))}
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} type="blog" />
          ))}
        </div>
      </section>
      <section className="bg-orange-50 px-6 py-12">
        <div className="mx-auto max-w-[520px] space-y-4 text-center">
          <Skeleton className="mx-auto" width={260} height={24} />
          <Skeleton className="mx-auto" width={320} height={14} />
          <Skeleton variant="rounded" className="mx-auto" width={180} height={44} />
        </div>
      </section>
    </div>
  );
}
