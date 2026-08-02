'use client';

import { useState } from 'react';

import { ChevronDown } from 'lucide-react';

import { cn } from '@/app/lib/utils/cn';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-lg font-semibold text-navy-900">{question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-navy-900 transition-transform duration-300',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-base leading-relaxed text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}
