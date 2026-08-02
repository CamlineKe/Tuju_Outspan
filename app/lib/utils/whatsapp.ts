const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';

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

export function buildServiceWhatsAppLink(
  serviceName: string,
  phoneNumber: string = WHATSAPP_NUMBER
): string {
  return buildWhatsAppLink(`Hi Tuju Outspan, I need help with ${serviceName}.`, phoneNumber);
}

export function buildGeneralWhatsAppLink(phoneNumber: string = WHATSAPP_NUMBER): string {
  return buildWhatsAppLink('Hi Tuju Outspan, I have a question.', phoneNumber);
}
