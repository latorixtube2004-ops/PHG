'use client';

import React from 'react';
import { useLocale } from '@/lib/context/LocaleContext';

export function WhatsAppButton() {
  const { isArabic } = useLocale();

  const phone = '966547093809';
  const messageEn = encodeURIComponent('Hello Palm Hills Gulf, I would like to inquire about your engineering and contracting services.');
  const messageAr = encodeURIComponent('مرحباً شركة بالم هيلز جلف، أود الاستفسار عن خدماتكم الهندسية ومشاريع المقاولات.');
  const whatsappUrl = `https://wa.me/${phone}?text=${isArabic ? messageAr : messageEn}`;

  return (
    <aside
      aria-label={isArabic ? 'محادثة عبر واتساب' : 'WhatsApp Chat'}
      className="fixed bottom-6 end-6 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-3.5 py-3 rounded-full bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/40 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.7)] backdrop-blur-md"
        aria-label={isArabic ? 'تواصل معنا مباشرة عبر واتساب' : 'Chat with us on WhatsApp'}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200" />
        </span>

        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.657 6.054 6.22-1.632c1.704.931 3.659 1.465 5.741 1.465 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.825c-1.879 0-3.636-.531-5.132-1.449l-.368-.222-3.693.968.986-3.6-.243-.387c-1.01-1.608-1.548-3.483-1.548-5.435 0-5.417 4.408-9.825 9.825-9.825 5.418 0 9.825 4.408 9.825 9.825 0 5.418-4.407 9.825-9.825 9.825z" />
        </svg>

        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          {isArabic ? 'تواصل عبر واتساب' : 'WhatsApp Chat'}
        </span>
      </a>
    </aside>
  );
}
