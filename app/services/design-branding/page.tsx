import PortfolioGallery from '@/app/components/sections/PortfolioGallery';
import ServiceCategoryTemplate from '@/app/components/templates/ServiceCategoryTemplate';
import { getServiceCategory } from '@/app/lib/data/services';
import { absolutePageUrl, buildMetadata, faqJsonLd, serviceJsonLd } from '@/app/lib/utils/seo';

const path = '/services/design-branding';
const category = getServiceCategory('design-branding');

if (!category) {
  throw new Error(`Missing service category: ${path}`);
}

export const metadata = buildMetadata({
  title: category.name,
  description: category.subheadline,
  path,
});

export default function DesignBrandingServicesPage() {
  return (
    <>
      <ServiceCategoryTemplate category={category} />
      <PortfolioGallery />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: category.name,
              description: category.subheadline,
              url: absolutePageUrl(path),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(category.faqs)),
        }}
      />
    </>
  );
}
