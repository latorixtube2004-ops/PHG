'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { Section, Container } from '@/components/ui/Section';
import { services } from '@/lib/data/services';
import { Network, Zap, Lightbulb, Recycle, Paintbrush, Cctv, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { BorderBeam } from '@/components/ui/BorderBeam';

const iconMap = {
  network: Network,
  zap: Zap,
  lightbulb: Lightbulb,
  recycle: Recycle,
  paintbrush: Paintbrush,
  cctv: Cctv,
};

export default function ServicesPage() {
  const { isArabic } = useLocale();

  return (
    <MainLayout>
      {/* Hero */}
      <Section background="navy" className="py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedReveal direction="up" delay={100}>
            <div className="max-w-4xl mx-auto text-center" dir={isArabic ? 'rtl' : 'ltr'}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-blue text-xs font-bold mb-5 shadow-xs">
                <ShieldCheck size={14} className="text-sky-400" />
                <span>{isArabic ? 'الخدمات الهندسية الشاملة' : 'SPECIALIZED ENGINEERING DISCIPLINES'}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 text-white tracking-tight leading-tight">
                {isArabic ? 'خدماتنا المتكاملة' : 'Our Comprehensive Services'}
              </h1>

              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                {isArabic
                  ? 'حلول هندسية شاملة مصممة لتلبية احتياجات مشاريع البنية التحتية، الأبراج السكنية، المنشآت الصناعية، والأنظمة الذكية في المملكة العربية السعودية ومصر.'
                  : 'Turnkey civil, MEP, infrastructure, and intelligent automation solutions engineered to the highest Saudi Building Code (SBC) and international standards.'}
              </p>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Services Detail - Visual Showcase */}
      <Section className="py-20 lg:py-24">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Network;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                  dir={isArabic ? 'rtl' : 'ltr'}
                >
                  {/* Visual Photography Card with BorderBeam */}
                  <AnimatedReveal
                    direction={isEven ? 'right' : 'left'}
                    delay={100}
                    className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/11] border border-sky-400/25 group ${
                      isEven ? '' : 'lg:col-start-2'
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={isArabic ? service.titleAr : service.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                    {/* BorderBeam on hover */}
                    <BorderBeam size={280} duration={12} colorFrom="#38bdf8" colorTo="#2563eb" />

                    {/* Top Discipline Tag */}
                    <div className="absolute top-4 start-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg">
                      <Icon size={14} className="text-sky-400" />
                      <span>{isArabic ? service.titleAr : service.title}</span>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-white text-xs">
                      <span className="px-3.5 py-1 rounded-lg glass-pill-blue font-bold text-white shadow-xs">
                        {isArabic ? 'كود البناء السعودي (SBC)' : 'SBC Code Compliant'}
                      </span>
                      <span className="text-slate-300 font-medium">
                        {isArabic ? 'تنفيذ هندسي متكامل' : 'Turnkey Engineering Execution'}
                      </span>
                    </div>
                  </AnimatedReveal>

                  {/* Content Breakdown */}
                  <AnimatedReveal
                    direction={isEven ? 'left' : 'right'}
                    delay={150}
                    className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                  >
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider mb-3">
                      <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                      <span>{isArabic ? `تخصص رقم ٠${service.id}` : `DISCIPLINE #0${service.id}`}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4 leading-tight">
                      {isArabic ? service.titleAr : service.title}
                    </h2>

                    <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                      {isArabic ? service.descriptionAr : service.description}
                    </p>

                    {/* Technical Features & Capabilities List */}
                    <div className="space-y-3 mb-8 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {isArabic ? 'نطاق الأعمال والقدرات الفنية:' : 'Key Scope & Technical Capabilities:'}
                      </div>

                      {(isArabic ? service.detailsAr : service.details).map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={17} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-slate-800 font-medium text-sm md:text-base leading-snug">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 glass-btn-blue font-bold text-sm rounded-xl transition-all shadow-md hover:scale-105 active:scale-95"
                      >
                        {isArabic ? 'طلب استشارة أو تسعير' : 'Request Consultation & Tender'}
                      </Link>

                      <Link
                        href="/projects"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-sm rounded-xl transition-all hover:scale-105 active:scale-95"
                      >
                        {isArabic ? 'المشاريع المنفذة' : 'View Delivered Projects'}
                      </Link>
                    </div>
                  </AnimatedReveal>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy" className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto" dir={isArabic ? 'rtl' : 'ltr'}>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              {isArabic ? 'هل لديك مشروع في الاعتبار؟' : 'Have a Project in Mind?'}
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {isArabic
                ? 'فريقنا الهندسي مستعد لمناقشة المتطلبات الفنية، إعداد المقايسات والمخططات، وتقديم عروض أسعار تنافسية وفق أعلى معايير الجودة.'
                : 'Our engineering leadership is ready to assess technical scopes, schedule site walkthroughs, and provide turnkey commercial proposals.'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 glass-btn-blue font-bold rounded-xl transition-all text-base"
            >
              {isArabic ? 'تواصل مع فريقنا الهندسي' : 'Contact Engineering Team'}
            </Link>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}
