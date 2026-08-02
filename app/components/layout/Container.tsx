import type { ReactNode } from 'react';

import { cn } from '@/app/lib/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-6', className)}>{children}</div>;
}
