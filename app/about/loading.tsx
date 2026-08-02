import Skeleton from '@/app/components/ui/Skeleton';
import SkeletonCard from '@/app/components/ui/SkeletonCard';

export default function AboutLoading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>
      <section className="bg-navy-900 px-6 pb-15 pt-20">
        <div className="mx-auto max-w-[1200px] space-y-4">
          <Skeleton width={180} />
          <Skeleton width={320} height={36} />
          <Skeleton width={420} />
        </div>
      </section>
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-[3fr_2fr]">
          <div className="space-y-4">
            <Skeleton width={120} />
            <Skeleton width={260} height={28} />
            <Skeleton count={3} />
          </div>
          <Skeleton variant="rounded" height={360} />
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} type="testimonial" />
          ))}
        </div>
      </section>
    </div>
  );
}
