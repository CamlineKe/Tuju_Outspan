import { serviceCategories } from '@/app/lib/data/services';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';

export type WhatsAppContext =
  | 'general'
  | 'hero'
  | 'pricing'
  | 'contact'
  | 'about'
  | 'blog'
  | 'not-found'
  | 'cta'
  | 'services-catch-all'
  | 'service-card-catch-all'
  | 'service-category';

export interface ServiceEnquiryDetails {
  name: string;
  description: string;
  waMessage?: string;
}

export interface WhatsAppPathContext {
  context: WhatsAppContext;
  label?: string;
}

function digitsOnly(value: string): string {
  return value.replace(/\D/g, '');
}

export function buildWhatsAppLink(message: string, phoneNumber: string = WHATSAPP_NUMBER): string {
  const digits = digitsOnly(phoneNumber);
  if (!digits) {
    throw new Error('WhatsApp number is not configured (NEXT_PUBLIC_WHATSAPP_NUMBER)');
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Pre-fills a WhatsApp enquiry for one specific service, e.g. KRA PIN Registration. */
export function buildServiceEnquiryLink(
  service: ServiceEnquiryDetails,
  phoneNumber: string = WHATSAPP_NUMBER
): string {
  const message =
    service.waMessage?.trim() ||
    `Hi Tuju Outspan, I'd like to enquire about ${service.name}. ${service.description} Could you share the process, requirements, and cost?`;
  return buildWhatsAppLink(message, phoneNumber);
}

/** Pre-fills a WhatsApp enquiry for a whole service category, e.g. Government Services. */
export function buildCategoryEnquiryLink(
  categoryName: string,
  phoneNumber: string = WHATSAPP_NUMBER
): string {
  return buildWhatsAppLink(
    `Hi Tuju Outspan, I'd like to enquire about your ${categoryName}. Could you share the process, requirements, and cost?`,
    phoneNumber
  );
}

function assertNever(value: never): never {
  throw new Error(`Unhandled WhatsApp context: ${String(value)}`);
}

function contextualMessage(context: WhatsAppContext, label?: string): string {
  const trimmedLabel = label?.trim();
  switch (context) {
    case 'general':
      return 'Hi Tuju Outspan, I have a question about your services.';
    case 'hero':
      return 'Hi Tuju Outspan, I\'d like to enquire about your services.';
    case 'pricing':
      return 'Hi Tuju Outspan, I\'d like a quote for your services.';
    case 'contact':
      return 'Hi Tuju Outspan, I\'d like to get in touch.';
    case 'about':
      return 'Hi Tuju Outspan, I\'d like to know more about Tuju Outspan Cyber Center.';
    case 'blog':
      return 'Hi Tuju Outspan, I have a question about this topic.';
    case 'not-found':
      return 'Hi Tuju Outspan, I couldn\'t find what I was looking for. Can you help?';
    case 'cta':
      return 'Hi Tuju Outspan, I\'d like to get started. Please help with my enquiry.';
    case 'services-catch-all':
      return 'Hi Tuju Outspan, I\'m looking for a service that isn\'t listed. Can you help?';
    case 'service-card-catch-all':
      return 'Hi Tuju Outspan, I can\'t find the service I need. Can you help?';
    case 'service-category':
      if (!trimmedLabel) {
        throw new Error('Label is required for the service-category WhatsApp context');
      }
      return `Hi Tuju Outspan, I'd like to enquire about your ${trimmedLabel}.`;
    default:
      return assertNever(context);
  }
}

/** Pre-fills a WhatsApp message tailored to the entry point where the user clicked. */
export function buildContextualWhatsAppLink(
  context: WhatsAppContext,
  label?: string,
  phoneNumber: string = WHATSAPP_NUMBER
): string {
  return buildWhatsAppLink(contextualMessage(context, label), phoneNumber);
}

/** Maps a route to the WhatsApp context (and category label) for that page. */
export function getWhatsAppContextForPath(pathname: string): WhatsAppPathContext {
  const [first, second] = pathname.replace(/^\/+|\/+$/g, '').split('/');
  if (first === 'services' && second) {
    const category = serviceCategories.find((item) => item.slug === second);
    if (category) {
      return { context: 'service-category', label: category.name };
    }
  }
  switch (first) {
    case 'pricing':
      return { context: 'pricing' };
    case 'contact':
      return { context: 'contact' };
    case 'about':
      return { context: 'about' };
    case 'blog':
      return { context: 'blog' };
    case 'services':
      return { context: 'general' };
    default:
      return { context: 'general' };
  }
}
