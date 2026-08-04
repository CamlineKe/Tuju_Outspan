import ProcessStep from '@/app/components/ui/ProcessStep';
import Reveal from '@/app/components/ui/Reveal';
import SectionHeader from '@/app/components/ui/SectionHeader';

const STEPS = [
  {
    title: 'Message Us on WhatsApp',
    description: 'Describe your need and we take it from there.',
  },
  {
    title: 'We Handle It',
    description: 'Our team processes your request professionally.',
  },
  {
    title: 'Get Results',
    description: 'Receive your documents, approvals, or prints.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-[900px]">
        <SectionHeader overline="HOW IT WORKS" title="Simple as 1-2-3" />
        <div className="relative">
          <div
            className="absolute left-[17%] right-[17%] top-7 hidden h-0.5 bg-gray-200 md:block"
            aria-hidden="true"
          />
          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} className="h-full" delay={index * 100}>
                <ProcessStep
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                  className="h-full rounded-xl border border-gray-200 bg-white p-7"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
