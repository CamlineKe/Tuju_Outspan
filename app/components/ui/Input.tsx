import type { ComponentProps } from 'react';

import { cn } from '@/app/lib/utils/cn';

const baseClasses =
  'w-full rounded-[10px] border bg-white px-4 py-3 text-base text-gray-800 placeholder:text-gray-400 transition-colors';
const defaultClasses =
  'border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100';
const errorClasses =
  'border-2 border-error focus:border-error focus:outline-none focus:ring-4 focus:ring-error-light';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
  error?: string;
  hint?: string;
}

export default function Input({
  label,
  error,
  hint,
  className,
  id,
  name,
  ref,
  ...props
}: InputProps) {
  const inputId = id ?? name;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-gray-800">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        className={cn(baseClasses, error ? errorClasses : defaultClasses, className)}
        {...props}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-gray-400">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} role="alert" className="mt-1.5 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
