import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100, 'Name is too long'),
  phone: z
    .string()
    .trim()
    .min(9, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[+0-9\s-]+$/, 'Phone number contains invalid characters'),
  service: z.string().trim().min(1, 'Please choose a service'),
  message: z.string().trim().min(10, 'Please add a short message').max(2000, 'Message is too long'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
