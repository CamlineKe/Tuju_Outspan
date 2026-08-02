import { cn } from '@/app/lib/utils/cn';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  className?: string;
}

export default function ProcessStep({
  stepNumber,
  title,
  description,
  className,
}: ProcessStepProps) {
  return (
    <div className={cn('text-center', className)}>
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-500 bg-white text-xl font-bold text-orange-500">
        {stepNumber}
      </div>
      <h3 className="mt-4 text-base font-bold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
