'use client';

import React from 'react';
import Image from 'next/image';
import { Section, Container } from '@/components/ui/Section';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';

interface TrustStripProps {
  locale?: 'en' | 'ar';
}

export function TrustStrip({ locale: propLocale }: TrustStripProps = {}) {
  const context = useLocale();
  const locale = propLocale || context.locale;
  const isArabic = locale === 'ar';

  const clients = [
    { name: 'Saudi Aramco', logo: '/images/clients/saudi aramco.png', alt: 'Saudi Aramco' },
    { name: 'MODON', logo: '/images/clients/modon.png', alt: 'MODON' },
    { name: 'Rua Al Madinah Holding', logo: '/images/clients/rua al madinah holding.png', alt: 'Rua Al Madinah Holding' },
    { name: 'Al-Kifah Contracting', logo: '/images/clients/alkifah contracting.png', alt: 'Al-Kifah Contracting' },
    { name: 'Wood Al Hejailan', logo: '/images/clients/wood al hejailan.png', alt: 'Wood Al Hejailan' },
    { name: 'BPCC', logo: '/images/clients/bpcc.png', alt: 'Business Park Complex Company (BPCC)' },
  ];

  // Tripled list ensures track is ultra-wide (>4500px) so even on 4K displays there is never an empty gap
  const trackItems = [...clients, ...clients, ...clients];

  return (
    <Section background="muted" className="overflow-hidden bg-pattern-light py-16">
      <Container>
        <AnimatedReveal direction="up" delay={100}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-bold mb-3 shadow-xs text-sky-800">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>{isArabic ? 'شبكة الثقة والاعتماد' : 'TRUSTED ECOSYSTEM'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              {isArabic ? 'شركاؤنا وعملاؤنا' : 'Our Partners & Clients'}
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2">
              {isArabic ? 'شراكات مبنية على الثقة والتميز في الإنجاز' : 'Trusted by leading enterprises and authorities across the Gulf'}
            </p>

            {/* Official Vendor Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-4" dir={isArabic ? 'rtl' : 'ltr'}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-slate-200 text-slate-700 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{isArabic ? 'أرامكو السعودية: رمز المورد ١٠١١٩٩٦٧' : 'Aramco Vendor Code: 10119967'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-slate-200 text-slate-700 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{isArabic ? 'هيئة مدن: رمز المورد ٦٦١٩' : 'MODON Vendor Code: 6619'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-slate-200 text-slate-700 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{isArabic ? 'تأهيل معتمد: رؤى المدينة ومجمع عماد' : 'Prequalified: Rua Al Madinah & AMAAD'}</span>
              </span>
            </div>
          </div>
        </AnimatedReveal>
      </Container>

      {/* Full-bleed Infinite Seamless Marquee */}
      <div className="relative w-full overflow-hidden py-4 group">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-48 bg-gradient-to-r from-[#f1f6ff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-48 bg-gradient-to-l from-[#f1f6ff] to-transparent z-10 pointer-events-none" />

        {/* Dual Synchronized Tracks (Double-Buffer Infinite Loop) */}
        <div className="flex w-max" dir="ltr">
          {/* Primary Track */}
          <div className="flex shrink-0 items-center gap-6 md:gap-8 pr-6 md:pr-8 animate-marquee">
            {trackItems.map((client, index) => (
              <div
                key={`track1-${client.name}-${index}`}
                className="relative w-60 h-36 md:w-72 md:h-40 liquid-glass-card rounded-2xl p-4 flex items-center justify-center flex-shrink-0 cursor-pointer"
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  fill
                  sizes="(max-width: 768px) 240px, 288px"
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 p-3"
                />
              </div>
            ))}
          </div>

          {/* Secondary Track (Immediate clone that ensures 100% continuous flow) */}
          <div className="flex shrink-0 items-center gap-6 md:gap-8 pr-6 md:pr-8 animate-marquee" aria-hidden="true">
            {trackItems.map((client, index) => (
              <div
                key={`track2-${client.name}-${index}`}
                className="relative w-60 h-36 md:w-72 md:h-40 liquid-glass-card rounded-2xl p-4 flex items-center justify-center flex-shrink-0 cursor-pointer"
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  fill
                  sizes="(max-width: 768px) 240px, 288px"
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 p-3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </Section>
  );
}
