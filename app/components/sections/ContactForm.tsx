'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { MessageCircle } from 'lucide-react';

import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import { serviceCategories } from '@/app/lib/data/services';
import { type ContactFormValues, contactSchema } from '@/app/lib/schemas/contact';
import { buildWhatsAppLink } from '@/app/lib/utils/whatsapp';

const selectClasses =
  'w-full rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-base text-gray-800 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100';
const textareaClasses =
  'min-h-[120px] w-full resize-y rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-base text-gray-800 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', phone: '', service: '', message: '' },
  });

  const onSubmit = (values: ContactFormValues) => {
    const message = [
      `Hi Tuju Outspan, I need help with ${values.service}.`,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Message: ${values.message}`,
    ].join('\n');
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 text-left">
      <Input
        label="Name"
        placeholder="Your name"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Phone"
        placeholder="0715 000 000"
        error={errors.phone?.message}
        {...register('phone')}
      />
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-800">
          Service Needed
        </label>
        <select
          id="service"
          className={selectClasses}
          aria-invalid={errors.service ? true : undefined}
          aria-describedby={errors.service ? 'service-error' : undefined}
          {...register('service')}
        >
          <option value="">Choose a service</option>
          {serviceCategories.map((category) => (
            <option key={category.slug} value={category.name}>
              {category.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
        {errors.service?.message && (
          <p id="service-error" role="alert" className="mt-1.5 text-sm text-error">
            {errors.service.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-800">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="How can we help?"
          className={textareaClasses}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message?.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-sm text-error">
            {errors.message.message}
          </p>
        )}
      </div>
      <Button type="submit" className="w-full">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Send Message
      </Button>
    </form>
  );
}
