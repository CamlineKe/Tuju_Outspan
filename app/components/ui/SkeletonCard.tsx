import { cn } from '@/app/lib/utils/cn';

import Skeleton from './Skeleton';

type SkeletonCardVariant = 'service' | 'blog' | 'testimonial' | 'pricing';

interface SkeletonCardProps {
  type?: SkeletonCardVariant;
  className?: string;
}

export default function SkeletonCard({ type = 'service', className }: SkeletonCardProps) {
  return (
    <div
      className={cn('rounded-xl border border-gray-200 bg-white p-7', className)}
      aria-busy="true"
    >
      {type === 'service' && (
        <div className="space-y-4">
          <Skeleton variant="rounded" width={44} height={44} />
          <Skeleton width="60%" />
          <Skeleton count={3} />
        </div>
      )}
      {type === 'blog' && (
        <div className="space-y-4">
          <Skeleton variant="rounded" height={160} />
          <Skeleton width={80} />
          <Skeleton width="75%" />
          <Skeleton count={2} />
        </div>
      )}
      {type === 'testimonial' && (
        <div className="space-y-4">
          <Skeleton width={100} />
          <Skeleton count={3} />
          <Skeleton width="40%" />
        </div>
      )}
      {type === 'pricing' && (
        <div className="space-y-4">
          <Skeleton width="50%" />
          <Skeleton count={4} />
          <Skeleton variant="rounded" height={40} />
        </div>
      )}
    </div>
  );
}
