'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { Section, Container } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/data/projects';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Sparkles, ArrowRight, ArrowLeft, MapPin, Building2 } from 'lucide-react';

export default function ProjectsPage() {
  const { locale, isArabic } = useLocale();
  const [filter, setFilter] = useState<'all' | 'Saudi Arabia' | 'Egypt'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.country === filter;
  });

  return (
    <MainLayout>
      {/* Hero */}
      <Section background="navy" className="relative overflow-hidden py-20 lg:py-28">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/15 rounded-full blur-[110px] pointer-events-none animate-pulse-subtle" />

        <Container className="relative z-10">
          <AnimatedReveal direction="up" delay={100}>
            <div className="max-w-4xl mx-auto text-center" dir={isArabic ? 'rtl' : 'ltr'}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill-blue text-xs font-bold mb-5 shadow-xs animate-float">
                <Sparkles size={14} className="text-sky-300" />
                <span>{isArabic ? 'سجل الإنجاز الهندسي' : 'PROVEN TRACK RECORD & PORTFOLIO'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 text-white tracking-tight leading-tight">
                {isArabic ? 'مشاريعنا الرائدة' : 'Our Landmark Projects'}
              </h1>

              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                {isArabic
                  ? 'محفظة متميزة من مشاريع البنية التحتية، الأبراج السكنية، والمجمعات الحضرية المنفذة في المملكة العربية السعودية وجمهورية مصر العربية.'
                  : 'A distinguished portfolio of high-rise developments, civil infrastructure, and urban communities delivered across Saudi Arabia and Egypt.'}
              </p>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section className="py-16 md:py-24">
        <Container>
          {/* Filter */}
          <AnimatedReveal direction="up" delay={100}>
            <div className="flex justify-center gap-3 md:gap-4 mb-14" dir={isArabic ? 'rtl' : 'ltr'}>
              <Button
                variant={filter === 'all' ? 'primary' : 'ghost'}
                onClick={() => setFilter('all')}
                size="md"
                className={`transition-all duration-300 font-bold ${
                  filter === 'all'
                    ? 'shadow-lg scale-105'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {isArabic ? 'جميع المشاريع' : 'All Projects'}
              </Button>
              <Button
                variant={filter === 'Saudi Arabia' ? 'primary' : 'ghost'}
                onClick={() => setFilter('Saudi Arabia')}
                size="md"
                className={`transition-all duration-300 font-bold ${
                  filter === 'Saudi Arabia'
                    ? 'shadow-lg scale-105'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
              </Button>
              <Button
                variant={filter === 'Egypt' ? 'primary' : 'ghost'}
                onClick={() => setFilter('Egypt')}
                size="md"
                className={`transition-all duration-300 font-bold ${
                  filter === 'Egypt'
                    ? 'shadow-lg scale-105'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {isArabic ? 'جمهورية مصر العربية' : 'Egypt'}
              </Button>
            </div>
          </AnimatedReveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedReveal key={project.slug} direction="up" delay={index * 80}>
                <Link href={`/projects/${project.slug}`}>
                  <Card className="group cursor-pointer overflow-hidden h-full flex flex-col hover:shadow-2xl hover:border-sky-400/50 transition-all duration-300 transform hover:-translate-y-2 shimmer-sheen bg-white border border-slate-200/80">
                    <div className="relative h-64 overflow-hidden bg-slate-950">
                      <Image
                        src={project.heroImage}
                        alt={isArabic ? project.titleAr : project.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-4 end-4">
                        <span className="px-3.5 py-1 glass-pill-blue text-xs font-bold rounded-full shadow-md">
                          {project.status === 'Ongoing'
                            ? isArabic ? 'جاري التنفيذ' : 'Ongoing'
                            : isArabic ? 'مكتمل' : 'Completed'}
                        </span>
                      </div>
                      <div className="absolute bottom-3 start-4 end-4 flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                        <MapPin size={13} className="text-sky-400 flex-shrink-0" />
                        <span>{isArabic ? project.locationAr : project.location}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col" dir={isArabic ? 'rtl' : 'ltr'}>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                        {isArabic ? project.categoryAr : project.category}
                      </div>

                      <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors leading-snug">
                        {isArabic ? project.titleAr : project.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5 flex-grow">
                        {isArabic ? project.descriptionAr : project.description}
                      </p>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-accent font-bold text-sm">
                        <span>{isArabic ? 'عرض تفاصيل المشروع' : 'View Project Dossier'}</span>
                        {isArabic ? (
                          <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform" />
                        ) : (
                          <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}
