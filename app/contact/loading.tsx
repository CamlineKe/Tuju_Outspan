import Skeleton from '@/app/components/ui/Skeleton';

export default function ContactLoading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>
      <section className="bg-navy-900 px-6 pb-15 pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1200px] space-y-4">
          <Skeleton width={180} />
          <Skeleton width={280} height={36} />
          <Skeleton width={400} />
        </div>
      </section>
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Skeleton variant="rounded" width="100%" height={360} />
          <Skeleton variant="rounded" width="100%" height={360} />
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px] space-y-8">
          <Skeleton variant="rounded" className="mx-auto" width={320} height={28} />
          <Skeleton variant="rounded" className="mx-auto" width={460} height={16} />
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2">
            <Skeleton variant="rounded" width="100%" height={220} />
            <Skeleton variant="rounded" width="100%" height={220} />
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%]">
          <div className="space-y-4">
            <Skeleton width={120} />
            <Skeleton width={320} height={28} />
            <Skeleton width={420} height={16} />
            <Skeleton width={280} height={48} />
          </div>
          <Skeleton variant="rounded" width="100%" height={420} />
        </div>
      </section>
      <section className="bg-navy-50 px-6 py-20">
        <div className="mx-auto max-w-[720px] space-y-8">
          <Skeleton variant="rounded" className="mx-auto" width={320} height={28} />
          <Skeleton variant="rounded" width="100%" height={420} />
        </div>
      </section>
    </div>
  );
}
