import RelatedServices from '@/app/components/sections/RelatedServices';
import ServiceBreakdown from '@/app/components/sections/ServiceBreakdown';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Button from '@/app/components/ui/Button';
import FAQItem from '@/app/components/ui/FAQItem';
import ProcessStep from '@/app/components/ui/ProcessStep';
import SectionHeader from '@/app/components/ui/SectionHeader';
import type { ServiceCategory } from '@/app/lib/data/services';
import { buildServiceWhatsAppLink } from '@/app/lib/utils/whatsapp';

interface ServiceCategoryTemplateProps {
  category: ServiceCategory;
}

export default function ServiceCategoryTemplate({ category }: ServiceCategoryTemplateProps) {
  return (
    <>
      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 pb-10 pt-28 text-white lg:pt-32">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: category.name },
            ]}
          />
          <h1 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[32px] lg:text-4xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-[560px] text-lg text-gray-400">{category.subheadline}</p>
        </div>
      </section>

      <ServiceBreakdown category={category} />

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionHeader overline="HOW IT WORKS" title="Simple as 1-2-3" />
          <div className="relative">
            <div
              className="absolute left-[17%] right-[17%] top-7 hidden h-0.5 bg-gray-200 md:block"
              aria-hidden="true"
            />
            <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3">
              {category.processSteps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader overline="FAQ" title="Common Questions" />
          {category.faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <section className="bg-orange-50 px-6 py-12 text-center">
        <h2 className="text-xl font-semibold text-navy-900">Transparent Pricing</h2>
        <p className="mx-auto mt-2 max-w-[520px] text-gray-600">{category.pricingNote}</p>
        <div className="mt-6 flex justify-center">
          <Button href={buildServiceWhatsAppLink(category.name)}>Get a Quote</Button>
        </div>
      </section>

      <RelatedServices category={category} />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white px-6 py-3 shadow-[0_-4px_12px_rgba(4,29,70,0.08)] md:hidden">
        <Button href={buildServiceWhatsAppLink(category.name)} className="w-full">
          Get Help on WhatsApp
        </Button>
      </div>
    </>
  );
}
