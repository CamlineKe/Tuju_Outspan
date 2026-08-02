import SectionHeader from '@/app/components/ui/SectionHeader';
import ServiceCard from '@/app/components/ui/ServiceCard';
import { serviceCategories } from '@/app/lib/data/services';

export default function ServicesGrid() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          overline="WHAT WE DO"
          title="All Services at One Desk"
          description="Everything you need, professionally handled at one trusted cyber center."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.slug} category={category} itemCount={3} />
          ))}
        </div>
      </div>
    </section>
  );
}
