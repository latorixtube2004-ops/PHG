'use client';

import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Section, Container } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { companyInfo } from '@/lib/data/company';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { DownloadProfileModal } from '@/components/ui/DownloadProfileModal';
import { OrganizationalChart } from '@/components/about/OrganizationalChart';
import { AccreditationsSection } from '@/components/about/AccreditationsSection';
import {
  Sparkles,
  ShieldCheck,
  Building,
  Award,
  Globe2,
  Layers,
  Quote,
  CheckCircle2,
  FileDown,
  Building2,
} from 'lucide-react';

export default function AboutPage() {
  const { locale, isArabic } = useLocale();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const stats = [
    {
      value: 18,
      icon: Award,
      label: isArabic ? 'سنوات الخبرة' : 'Years of Experience',
    },
    {
      value: companyInfo.stats.projectsCount,
      icon: Building,
      label: isArabic ? 'مشاريع رئيسية' : 'Major Projects',
    },
    {
      value: companyInfo.stats.countriesCount,
      icon: Globe2,
      label: isArabic ? 'دول العمل' : 'Countries of Operation',
    },
    {
      value: companyInfo.stats.servicesCount,
      icon: Layers,
      label: isArabic ? 'تخصصات هندسية' : 'Engineering Disciplines',
    },
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <Section background="navy" className="relative overflow-hidden py-20 lg:py-28">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/15 rounded-full blur-[110px] pointer-events-none animate-pulse-subtle" />

        <Container className="relative z-10">
          <AnimatedReveal direction="up" delay={100}>
            <div className="max-w-4xl mx-auto text-center" dir={isArabic ? 'rtl' : 'ltr'}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill-dark text-xs font-bold mb-5 shadow-lg border border-white/25 animate-float text-sky-200">
                <Sparkles size={14} className="text-sky-300" />
                <span>{isArabic ? 'الريادة والنزاهة الهندسية' : 'LEADERSHIP & ENGINEERING EXCELLENCE'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 text-white tracking-tight leading-tight">
                {isArabic ? 'من نحن — شركة بالم هيلز جلف' : 'About Palm Hills Gulf'}
              </h1>

              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-8">
                {isArabic ? companyInfo.taglineAr : companyInfo.tagline}
              </p>

              {/* Direct Company Profile Download Action */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all shimmer-sheen border border-white/20 cursor-pointer"
                >
                  <FileDown size={18} />
                  <span>{isArabic ? 'تحميل الملف التعريفي للشركة (PDF)' : 'Download Company Profile (PDF)'}</span>
                </button>

                <div className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-2xl liquid-glass-dark text-xs font-semibold text-slate-200 border border-white/20">
                  <ShieldCheck size={16} className="text-sky-400" />
                  <span>
                    {isArabic
                      ? 'مورد معتمد: أرامكو (١٠١١٩٩٦٧) • مدن (٦٦١٩)'
                      : 'Vendor Codes: Aramco (10119967) • MODON (6619)'}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Stats */}
      <Section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedReveal key={index} direction="up" delay={index * 100}>
                  <Card className="p-6 md:p-8 text-center hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-2 transition-all duration-300 shimmer-sheen group relative bg-white border border-slate-200/80">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl glass-icon-blue flex items-center justify-center text-accent group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all duration-300">
                      <Icon size={24} className="text-sky-600 group-hover:text-sky-500 transition-colors" />
                    </div>
                    <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                      <AnimatedCounter target={stat.value} suffix="+" duration={1600} />
                    </div>
                    <div className="text-xs md:text-sm text-slate-700 font-semibold">{stat.label}</div>
                  </Card>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Executive Leadership Message (CEO) with BorderBeam */}
      <Section background="muted" className="py-20 lg:py-28 relative overflow-hidden">
        <Container>
          <AnimatedReveal direction="up" delay={100} className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-14 hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-white border border-slate-200/80">
              <BorderBeam size={280} duration={14} colorFrom="#38bdf8" colorTo="#2563eb" />
              <div className="flex items-center gap-3 mb-6" dir={isArabic ? 'rtl' : 'ltr'}>
                <div className="w-12 h-12 rounded-xl glass-icon-blue flex items-center justify-center text-accent">
                  <Quote size={24} className="text-sky-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                    {isArabic ? 'كلمة الإدارة' : 'EXECUTIVE ADDRESS'}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">
                    {isArabic ? 'رسالة الإدارة التنفيذية' : 'Executive Leadership Message'}
                  </h2>
                </div>
              </div>
              <div
                className="prose prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-line text-base md:text-lg"
                dir={isArabic ? 'rtl' : 'ltr'}
              >
                {isArabic ? companyInfo.ceoMessage.ar : companyInfo.ceoMessage.en}
              </div>
            </Card>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Official Accreditations & Key Partners */}
      <Section className="py-20 lg:py-28">
        <Container>
          <AccreditationsSection />
        </Container>
      </Section>

      {/* Official Organizational Chart Section */}
      <Section background="muted" className="py-20 lg:py-28">
        <Container>
          <OrganizationalChart />
        </Container>
      </Section>

      {/* Vision & Mission */}
      <Section className="py-20 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedReveal direction="up" delay={100}>
              <Card className="p-8 md:p-10 h-full hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden bg-white border border-slate-200/80 group">
                <div className="w-12 h-12 rounded-xl glass-icon-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} className="text-sky-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 mb-4">
                  {isArabic ? 'رؤيتنا الاستراتيجية' : 'Our Strategic Vision'}
                </h2>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {isArabic ? companyInfo.vision.ar : companyInfo.vision.en}
                </p>
              </Card>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={200}>
              <Card className="p-8 md:p-10 h-full hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden bg-white border border-slate-200/80 group">
                <div className="w-12 h-12 rounded-xl glass-icon-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award size={24} className="text-sky-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 mb-4">
                  {isArabic ? 'مهمتنا الهندسية' : 'Our Engineering Mission'}
                </h2>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {isArabic ? companyInfo.mission.ar : companyInfo.mission.en}
                </p>
              </Card>
            </AnimatedReveal>
          </div>
        </Container>
      </Section>

      {/* Differentiators */}
      <Section background="muted" className="py-20 lg:py-28">
        <Container>
          <AnimatedReveal direction="up" delay={100}>
            <div className="text-center max-w-3xl mx-auto mb-16" dir={isArabic ? 'rtl' : 'ltr'}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-bold mb-4 shadow-xs text-sky-800">
                <Sparkles size={14} className="text-sky-600" />
                <span>{isArabic ? 'معايير التميز' : 'COMPETITIVE ADVANTAGE'}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-4 tracking-tight">
                {isArabic ? 'ما يميزنا في السوق الهندسي' : 'What Sets Us Apart'}
              </h2>
            </div>
          </AnimatedReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyInfo.differentiators.map((item, index) => (
              <AnimatedReveal key={index} direction="up" delay={index * 90}>
                <Card
                  variant="accent-border"
                  className="p-6 md:p-7 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 shimmer-sheen group bg-white border border-slate-200/80"
                  dir={isArabic ? 'rtl' : 'ltr'}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg glass-icon-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={18} className="text-sky-600" />
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium text-sm md:text-base pt-1">
                      {isArabic ? item.ar : item.en}
                    </p>
                  </div>
                </Card>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Dual Language Profile Download Modal */}
      <DownloadProfileModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        locale={locale}
      />
    </MainLayout>
  );
}
