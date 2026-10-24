'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Network, Zap, Lightbulb, Recycle, Paintbrush, Cctv, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Section, Container } from '@/components/ui/Section';
import { useLocale } from '@/lib/context/LocaleContext';
import { services } from '@/lib/data/services';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';

interface ServicesGridProps {
  locale?: 'en' | 'ar';
}

const iconMap = {
  network: Network,
  zap: Zap,
  lightbulb: Lightbulb,
  recycle: Recycle,
  paintbrush: Paintbrush,
  cctv: Cctv,
};

export function ServicesGrid({ locale: propLocale }: ServicesGridProps = {}) {
  const context = useLocale();
  const locale = propLocale || context.locale;
  const isArabic = locale === 'ar';

  return (
    <Section id="services" background="muted" className="py-20 lg:py-28 bg-pattern-light">
      <Container>
        {/* Section Header */}
        <AnimatedReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16" dir={isArabic ? 'rtl' : 'ltr'}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-bold mb-4 shadow-xs text-sky-800">
              <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.9)] animate-pulse" />
              <span>{isArabic ? 'مجالات التميز الهندسي' : 'DISCIPLINES & EXPERTISE'}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-4 tracking-tight">
              {isArabic ? 'خدماتنا المتكاملة' : 'Our Specialized Services'}
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {isArabic
                ? 'حلول هندسية متكاملة مدعومة بأحدث التقنيات والمعدات وأعلى معايير كود البناء السعودي والجودة العالمية.'
                : 'End-to-end civil, MEP, infrastructure, and smart technology solutions engineered to premier international standards.'}
            </p>
          </div>
        </AnimatedReveal>

        {/* Visual Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Network;
            const topDetails = (isArabic ? service.detailsAr : service.details).slice(0, 2);

            return (
              <AnimatedReveal key={service.id} direction="up" delay={index * 90}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex flex-col liquid-glass-card overflow-hidden transition-all duration-300 transform hover:-translate-y-2 shimmer-sheen h-full"
                  dir={isArabic ? 'rtl' : 'ltr'}
                >
                  {/* Visual Photography Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[26px]">
                    <Image
                      src={service.image}
                      alt={isArabic ? service.titleAr : service.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Cinematic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                    {/* Discipline Badge Pill */}
                    <div className="absolute bottom-3 start-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill-dark border border-white/25 text-white text-xs font-bold shadow-sm">
                      <Icon size={13} className="text-sky-400" />
                      <span className="text-sky-100 font-medium">
                        {isArabic ? service.titleAr : service.title}
                      </span>
                    </div>

                    {/* Top Right Subtle Icon Tag */}
                    <div className="absolute top-3 end-3 z-10 w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-sky-400 shadow-xs group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-heading font-extrabold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors leading-snug">
                      {isArabic ? service.titleAr : service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
                      {isArabic ? service.descriptionAr : service.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-200/60">
                      {topDetails.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 size={13} className="text-sky-600 flex-shrink-0" />
                          <span className="truncate">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive CTA Link */}
                    <div className="pt-2 flex items-center gap-2 text-sky-600 font-bold text-sm group-hover:gap-3 transition-all">
                      <span>{isArabic ? 'تفاصيل الخدمة' : 'Explore Service'}</span>
                      {isArabic ? (
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                      ) : (
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </div>
                </Link>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* View All Services Footer */}
        <AnimatedReveal direction="up" delay={250}>
          <div className="text-center mt-14" dir={isArabic ? 'rtl' : 'ltr'}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass-btn-blue text-white font-bold text-sm transition-all shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 shimmer-sheen"
            >
              <span>{isArabic ? 'استعراض كافة الخدمات والتخصصات' : 'View Full Services & Technical Capabilities'}</span>
              {isArabic ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
          </div>
        </AnimatedReveal>
      </Container>
    </Section>
  );
}
