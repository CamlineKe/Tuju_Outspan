import Skeleton from '@/app/components/ui/Skeleton';

export default function ContactLoading() {
  return (
    <div aria-busy="true">
      <span className="sr-only">Loading content...</span>
      <section className="bg-navy-900 px-6 pb-15 pt-20">
        <div className="mx-auto max-w-[1200px] space-y-4">
          <Skeleton width={180} />
          <Skeleton width={280} height={36} />
          <Skeleton width={400} />
        </div>
      </section>
      <section className="bg-white px-6 pb-12 pt-16">
        <Skeleton variant="rounded" className="mx-auto" width={500} height={320} />
      </section>
      <section className="bg-navy-50 px-6 py-16">
        <Skeleton variant="rounded" className="mx-auto" width={560} height={420} />
      </section>
    </div>
  );
}
