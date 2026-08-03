import Skeleton from '@/app/components/ui/Skeleton';

export default function BlogPostLoading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>
      <section className="bg-navy-900 px-6 pb-15 pt-28 text-center lg:pt-32">
        <div className="mx-auto max-w-[720px] space-y-4">
          <Skeleton className="mx-auto" width={100} />
          <Skeleton className="mx-auto" width={560} height={36} />
          <Skeleton className="mx-auto" width={240} />
        </div>
      </section>
      <section className="bg-white">
        <Skeleton variant="rounded" height={320} />
      </section>
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[680px] space-y-5">
          <Skeleton count={4} />
          <Skeleton width="70%" />
          <Skeleton count={3} />
        </div>
      </section>
    </div>
  );
}
