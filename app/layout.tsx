import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/app/components/layout/Footer';
import Navbar from '@/app/components/layout/Navbar';
import WhatsAppFloat from '@/app/components/layout/WhatsAppFloat';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

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
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
