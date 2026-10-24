'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { Section, Container } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Project } from '@/lib/data/projects';
import {
  MapPin,
  Calendar,
  Building2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { ImageLightbox } from '@/components/ui/ImageLightbox';

export function ProjectDetailClient({ project }: { project: Project }) {
  const { isArabic } = useLocale();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <MainLayout>
      {/* Hero */}
      <Section background="navy" className="relative overflow-hidden py-20 lg:py-28">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/15 rounded-full blur-[110px] pointer-events-none animate-pulse-subtle" />

        <Container className="relative z-10">
          <AnimatedReveal direction="up" delay={100}>
            <div className="max-w-4xl mx-auto text-center" dir={isArabic ? 'rtl' : 'ltr'}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-pill-blue rounded-full text-xs font-bold mb-5 shadow-xs animate-float">
                <Sparkles size={14} className="text-sky-300" />
                <span>
                  {project.status === 'Ongoing'
                    ? isArabic ? 'مشروع جاري التنفيذ' : 'Ongoing Landmark Project'
                    : isArabic ? 'مشروع مكتمل ومعتمد' : 'Successfully Delivered Project'}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-4 text-white tracking-tight leading-tight">
                {isArabic ? project.titleAr : project.title}
              </h1>

              <p className="text-lg md:text-xl text-slate-200 font-medium">
                {isArabic ? project.categoryAr : project.category}
              </p>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Project Info Metrics */}
      <Section className="py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AnimatedReveal direction="up" delay={100}>
              <Card className="p-6 md:p-7 flex items-center gap-4 hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300 shimmer-sheen group bg-white border border-slate-200/80">
                <div className="w-14 h-14 glass-icon-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] transition-all">
                  <MapPin size={26} className="text-sky-600 group-hover:text-sky-500 transition-colors" />
                </div>
                <div dir={isArabic ? 'rtl' : 'ltr'}>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                    {isArabic ? 'الموقع الجغرافي' : 'Location'}
                  </div>
                  <div className="font-extrabold text-slate-900 text-lg">
                    {isArabic ? project.locationAr : project.location}
                  </div>
                </div>
              </Card>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={180}>
              <Card className="p-6 md:p-7 flex items-center gap-4 hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300 shimmer-sheen group bg-white border border-slate-200/80">
                <div className="w-14 h-14 glass-icon-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] transition-all">
                  <Calendar size={26} className="text-sky-600 group-hover:text-sky-500 transition-colors" />
                </div>
                <div dir={isArabic ? 'rtl' : 'ltr'}>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                    {isArabic ? 'سنة الإنجاز / التسليم' : 'Timeline'}
                  </div>
                  <div className="font-extrabold text-slate-900 text-lg">{project.year}</div>
                </div>
              </Card>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={260}>
              <Card className="p-6 md:p-7 flex items-center gap-4 hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300 shimmer-sheen group bg-white border border-slate-200/80">
                <div className="w-14 h-14 glass-icon-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] transition-all">
                  <Building2 size={26} className="text-sky-600 group-hover:text-sky-500 transition-colors" />
                </div>
                <div dir={isArabic ? 'rtl' : 'ltr'}>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                    {isArabic ? 'نطاق العمل الهندسي' : 'Scope of Work'}
                  </div>
                  <div className="font-extrabold text-slate-900 text-lg">
                    {isArabic ? project.scopeAr : project.scope}
                  </div>
                </div>
              </Card>
            </AnimatedReveal>
          </div>

          {/* Project Overview with BorderBeam */}
          <AnimatedReveal direction="up" delay={150}>
            <Card className="p-8 md:p-12 mb-14 relative overflow-hidden bg-white border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300">
              <BorderBeam size={280} duration={14} colorFrom="#38bdf8" colorTo="#2563eb" />
              <div dir={isArabic ? 'rtl' : 'ltr'}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg glass-pill-blue text-xs font-bold mb-4">
                  <ShieldCheck size={14} className="text-sky-400" />
                  <span>{isArabic ? 'ملخص التنفيذ' : 'PROJECT DOSSIER'}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 mb-4">
                  {isArabic ? 'نظرة عامة على المشروع' : 'Project Overview & Execution Details'}
                </h2>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {isArabic ? project.descriptionAr : project.description}
                </p>
                {project.client && (
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {isArabic ? 'العميل المعتمد:' : 'Project Client / Authority:'}
                    </div>
                    <div className="text-base font-bold text-slate-900">{project.client}</div>
                  </div>
                )}
              </div>
            </Card>
          </AnimatedReveal>

          {/* Image Gallery */}
          <div>
            <AnimatedReveal direction="up" delay={100}>
              <div className="text-center md:text-start mb-8" dir={isArabic ? 'rtl' : 'ltr'}>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900">
                  {isArabic ? 'معرض الصور الميدانية' : 'Field & Architectural Gallery'}
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  {isArabic
                    ? 'انقر على أي صورة للتكبير واستعراض اللقطات بجودة عالية'
                    : 'Click any image to open full-resolution inspection lightbox'}
                </p>
              </div>
            </AnimatedReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <AnimatedReveal key={index} direction="up" delay={index * 60}>
                  <div
                    onClick={() => setLightboxIndex(index)}
                    className="relative h-64 sm:h-72 rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 shimmer-sheen cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`${isArabic ? project.titleAr : project.title} ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="liquid-glass-pill-dark px-3.5 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={14} />
                        <span>{isArabic ? 'عرض الصورة' : 'View Fullscreen'}</span>
                      </span>
                    </div>
                    <div className="absolute bottom-3 start-3 end-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <span className="liquid-glass-pill-dark px-3 py-1 rounded-full inline-block border border-white/25">
                        {isArabic ? `صورة توثيقية رقم ٠${index + 1}` : `Site Photo #0${index + 1}`}
                      </span>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Back to Projects */}
      <Section background="muted" className="py-14">
        <Container>
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl glass-btn-blue text-white font-bold text-sm shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all shimmer-sheen"
            >
              {isArabic ? (
                <>
                  <ArrowRight size={18} />
                  <span>العودة إلى كافة المشاريع</span>
                </>
              ) : (
                <>
                  <ArrowLeft size={18} />
                  <span>Back to All Projects</span>
                </>
              )}
            </Link>
          </div>
        </Container>
      </Section>

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        images={project.images}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
        title={isArabic ? project.titleAr : project.title}
      />
    </MainLayout>
  );
}
