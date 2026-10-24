'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'en' | 'ar';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isArabic: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Load saved preference or URL query param on initial mount
  useEffect(() => {
    try {
      // 1. URL search param has top priority (e.g. ?lang=en or ?lang=ar)
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang === 'en' || urlLang === 'ar') {
          setLocaleState(urlLang);
          try {
            localStorage.setItem('phg_locale', urlLang);
          } catch (e) {}
          document.documentElement.lang = urlLang;
          document.documentElement.dir = urlLang === 'ar' ? 'rtl' : 'ltr';
          return;
        }
      }

      // 2. Saved preference in localStorage
      const saved = localStorage.getItem('phg_locale') as Locale;
      if (saved === 'ar' || saved === 'en') {
        setLocaleState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
      } else {
        // Default is English
        setLocaleState('en');
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
      }
    } catch (e) {
      // localStorage may be unavailable
    }
  }, []);

  // Sync across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'phg_locale' && (e.newValue === 'en' || e.newValue === 'ar')) {
        setLocaleState(e.newValue);
        document.documentElement.lang = e.newValue;
        document.documentElement.dir = e.newValue === 'ar' ? 'rtl' : 'ltr';
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('phg_locale', newLocale);
    } catch (e) {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    }
  };

  const isArabic = locale === 'ar';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    }
  }, [locale, isArabic]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isArabic }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
