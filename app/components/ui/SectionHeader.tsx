import { cn } from '@/app/lib/utils/cn';

import Reveal from './Reveal';

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  overline,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn('mb-12', align === 'left' ? 'text-left' : 'text-center', className)}>
      {overline && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
          {overline}
        </p>
      )}
      <h2
        className={cn(
          'text-2xl font-bold leading-[1.25] text-navy-900 md:text-[28px] lg:text-[32px]',
          align === 'center' && 'mx-auto max-w-[600px]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3 text-base text-gray-600',
            align === 'center' && 'mx-auto max-w-[520px]'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
