import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Tuju Outspan Cyber Center',
    template: '%s | Tuju Outspan Cyber Center',
  },
  description:
    'All your digital and government services, handled professionally at Ikonge-Ekerenyo Stage, Chuka University.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
