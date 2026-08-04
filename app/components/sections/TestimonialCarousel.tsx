'use client';

import { type KeyboardEvent, useCallback, useEffect, useState } from 'react';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import TestimonialCard from '@/app/components/ui/TestimonialCard';
import { type Testimonial } from '@/app/lib/data/testimonials';
import { cn } from '@/app/lib/utils/cn';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const SLIDE_DISTANCE = 64;

export const AUTOPLAY_INTERVAL_MS = 6000;

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex(((nextIndex % testimonials.length) + testimonials.length) % testimonials.length);
    },
    [testimonials.length]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || testimonials.length < 2) {
      return;
    }
    const timer = window.setInterval(goNext, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [goNext, paused, testimonials.length]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
      }
    },
    [goNext, goPrev]
  );

  if (testimonials.length === 0) {
    return null;
  }

  const visible = [testimonials[index]];
  if (testimonials.length > 1) {
    visible.push(testimonials[(index + 1) % testimonials.length]);
  }

  // Alternate the slide direction by position: first from the left, second
  // from the right, third from the left, and so on.
  const direction = index % 2 === 0 ? -1 : 1;
  const slideX = reduceMotion ? 0 : direction * SLIDE_DISTANCE;

  return (
    <div
      className="w-full"
      role="group"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ x: slideX, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -slideX, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            {visible.map((testimonial, offset) => (
              <div key={testimonial.author} className={cn(offset > 0 && 'hidden md:block')}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  service={testimonial.service}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center justify-center gap-5" onKeyDown={handleKeyDown}>
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-900 transition-colors duration-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-500"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((testimonial, dotIndex) => (
            <button
              key={testimonial.author}
              type="button"
              onClick={() => goTo(dotIndex)}
              aria-label={`Go to testimonials starting with ${testimonial.author}`}
              aria-current={dotIndex === index ? 'true' : undefined}
              className={cn(
                'h-2.5 rounded-full transition-all duration-200',
                dotIndex === index ? 'w-6 bg-orange-500' : 'w-2.5 bg-navy-100 hover:bg-navy-600'
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-900 transition-colors duration-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-500"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
