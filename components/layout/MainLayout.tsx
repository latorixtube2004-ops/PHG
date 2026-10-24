'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { useLocale } from '@/lib/context/LocaleContext';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { locale, setLocale, isArabic } = useLocale();

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={locale}
      className={`min-h-screen flex flex-col bg-pattern-light ${isArabic ? 'text-right' : 'text-left'}`}
    >
      <Header />
      <main className="flex-grow" dir={isArabic ? 'rtl' : 'ltr'}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
