import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/app/lib/utils/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'outline-light' | 'whatsapp';
type Size = 'small' | 'medium' | 'large';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-orange-500 text-white shadow-orange hover:bg-orange-600',
  secondary: 'bg-navy-900 text-white hover:bg-navy-800',
  outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  'outline-light': 'border-2 border-white text-white hover:bg-white hover:text-navy-900',
  whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp-dark',
};

const sizeClasses: Record<Size, string> = {
  small: 'px-5 py-2.5 text-sm',
  medium: 'px-8 py-3.5 text-[15px]',
  large: 'px-10 py-[18px] text-base',
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
} & Omit<ComponentPropsWithoutRef<'button'>, 'href'>;

export default function Button({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline disabled:cursor-not-allowed disabled:opacity-60',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    const anchorProps = rest as unknown as ComponentPropsWithoutRef<'a'>;
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
