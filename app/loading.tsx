import Skeleton from '@/app/components/ui/Skeleton';
import SkeletonCard from '@/app/components/ui/SkeletonCard';

export default function Loading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>

      <section className="bg-navy-900 px-6 pb-20 pt-28 lg:pt-32">
        <div className="mx-auto max-w-[700px] space-y-5 text-center">
          <Skeleton className="mx-auto" width={240} />
          <Skeleton className="mx-auto" width={480} height={40} />
          <Skeleton className="mx-auto" width={380} />
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Skeleton variant="rounded" width={180} height={52} />
            <Skeleton variant="rounded" width={180} height={52} />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto mb-12 max-w-[400px] space-y-3 text-center">
            <Skeleton className="mx-auto" width={120} />
            <Skeleton className="mx-auto" width={300} height={28} />
            <Skeleton className="mx-auto" width={340} />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {Array.from({ length: 7 }).map((_, index) => (
              <SkeletonCard key={index} type="service" />
            ))}
            <div className="flex min-h-[220px] flex-col items-center justify-center gap-4 rounded-xl border border-orange-200 bg-orange-50 p-7">
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton width={180} height={20} />
              <Skeleton width={140} />
              <Skeleton variant="rounded" width={160} height={44} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="mx-auto mb-12 max-w-[300px] space-y-3 text-center">
            <Skeleton className="mx-auto" width={100} />
            <Skeleton className="mx-auto" width={260} height={28} />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="space-y-4 rounded-xl border border-gray-200 bg-white p-7 text-center"
              >
                <Skeleton variant="circular" className="mx-auto" width={56} height={56} />
                <Skeleton className="mx-auto" width={80} />
                <Skeleton className="mx-auto" width={140} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <div className="mx-auto mb-12 max-w-[300px] space-y-3 text-center">
            <Skeleton className="mx-auto" width={120} />
            <Skeleton className="mx-auto" width={260} height={28} />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="space-y-4 rounded-xl border border-gray-200 bg-white p-7 text-center"
              >
                <Skeleton variant="circular" className="mx-auto" width={56} height={56} />
                <Skeleton className="mx-auto" width={120} />
                <Skeleton className="mx-auto" width={160} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 px-6 py-16">
        <div className="mx-auto max-w-[1000px]">
          <div className="mx-auto mb-12 max-w-[300px] space-y-3 text-center">
            <Skeleton className="mx-auto" width={120} />
            <Skeleton className="mx-auto" width={260} height={28} />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} type="testimonial" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 px-6 py-5">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-12">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} width={200} />
          ))}
        </div>
      </section>

      <section className="bg-orange-500 px-6 py-[72px]">
        <div className="mx-auto max-w-[400px] space-y-5 text-center">
          <Skeleton className="mx-auto" width={320} height={32} />
          <Skeleton className="mx-auto" width={280} />
          <Skeleton variant="rounded" className="mx-auto" width={200} height={52} />
        </div>
      </section>
    </div>
  );
}
