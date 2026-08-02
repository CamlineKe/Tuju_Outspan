import type { CSSProperties } from 'react';

import { cn } from '@/app/lib/utils/cn';

type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

const variantClasses: Record<SkeletonVariant, string> = {
  text: 'h-4 w-full rounded',
  circular: 'rounded-full',
  rectangular: 'rounded-lg',
  rounded: 'rounded-xl',
};

interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  count?: number;
  className?: string;
}

export default function Skeleton({
  variant = 'text',
  width,
  height,
  count = 1,
  className,
}: SkeletonProps) {
  const style: CSSProperties = {};
  if (width) {
    style.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height) {
    style.height = typeof height === 'number' ? `${height}px` : height;
  }
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          style={style}
          className={cn('skeleton block', variantClasses[variant], className)}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
