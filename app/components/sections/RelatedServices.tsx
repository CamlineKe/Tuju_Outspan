import SectionHeader from '@/app/components/ui/SectionHeader';
import ServiceCard from '@/app/components/ui/ServiceCard';
import { getServiceCategory } from '@/app/lib/data/services';
import type { ServiceCategory } from '@/app/lib/data/services';

interface RelatedServicesProps {
  category: ServiceCategory;
}

export default function RelatedServices({ category }: RelatedServicesProps) {
  const related = category.related
    .map((slug) => getServiceCategory(slug))
    .filter((item): item is ServiceCategory => item !== undefined);

  return (
    <section className="bg-navy-50 px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader align="left" title="You Might Also Need" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ServiceCard key={item.slug} category={item} itemCount={3} />
          ))}
        </div>
      </div>
    </section>
  );
}
