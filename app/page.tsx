'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ProjectsGrid } from '@/components/home/ProjectsGrid';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { BorderBeam } from '@/components/ui/BorderBeam';

export default function HomePage() {
  const { isArabic } = useLocale();

  return (
    <MainLayout>
      <Hero />
      <TrustStrip />
      <ProjectsGrid />
      <ServicesGrid />

      {/* CTA Section */}
      <Section background="navy" className="relative overflow-hidden py-24 bg-pattern-dark">
        {/* Ambient Liquid Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/25 rounded-full blur-[120px] pointer-events-none animate-pulse-subtle" />
        <div className="absolute top-10 end-10 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <AnimatedReveal direction="up" delay={100}>
            <div className="text-center max-w-3xl mx-auto p-10 md:p-16 rounded-[32px] liquid-glass-dark shadow-2xl relative overflow-hidden border border-white/25">
              <BorderBeam size={280} duration={12} colorFrom="#38bdf8" colorTo="#2563eb" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill-dark text-xs font-bold mb-6 border border-white/25 text-sky-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isArabic ? 'جاهزية التنفيذ والشراكة' : 'TURNKEY ENGAGEMENT'}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight">
                {isArabic ? 'جاهزون لمشروعك القادم' : 'Ready for Your Next Project?'}
              </h2>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                {isArabic
                  ? 'دعنا نحول رؤيتك الهندسية إلى واقع بمعايير كود البناء السعودي والجودة العالمية. اتصل بنا اليوم لمناقشة مشروعك.'
                  : 'Let us transform your engineering vision into reality. Reach out today to discuss timelines, specifications, and turnkey execution.'}
              </p>
              <Link href="/contact" className="inline-block">
                <Button size="lg" className="shadow-2xl text-base px-8 py-4">
                  {isArabic ? 'ابدأ المحادثة الهندسية' : 'Start a Conversation'}
                </Button>
              </Link>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>
    </MainLayout>
  );
}
