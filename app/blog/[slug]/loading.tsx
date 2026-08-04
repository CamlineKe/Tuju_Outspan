import Skeleton from '@/app/components/ui/Skeleton';

export default function BlogPostLoading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>
      <section className="bg-navy-900 px-6 pb-10 pt-28 text-center lg:pt-32">
        <div className="mx-auto max-w-[720px] space-y-4">
          <Skeleton className="mx-auto" width={100} />
          <Skeleton className="mx-auto" width={560} height={36} />
          <Skeleton className="mx-auto" width={240} />
        </div>
      </section>
      <section className="bg-white">
        <Skeleton variant="rounded" height={320} />
      </section>
      <section className="bg-white px-6 pt-12 pb-16">
        <div className="mx-auto max-w-[680px] space-y-5">
          <Skeleton count={4} />
          <Skeleton width="70%" />
          <Skeleton count={3} />
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto flex max-w-[680px] items-start gap-4">
          <Skeleton variant="circular" width={64} height={64} />
          <div className="flex-1 space-y-3">
            <Skeleton width={180} height={20} />
            <Skeleton width={320} height={14} />
            <Skeleton width={120} height={14} />
          </div>
        </div>
      </section>
      <section className="bg-navy-50 px-6 py-12">
        <div className="mx-auto flex max-w-[680px] flex-wrap items-center justify-center gap-3">
          <Skeleton variant="rounded" width={160} height={40} />
          <Skeleton variant="rounded" width={140} height={40} />
        </div>
      </section>
    </div>
  );
}
