'use client';

import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { Section, Container } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import {
  Clock,
  ShieldCheck,
  HardHat,
  Zap,
  HeartHandshake,
  Cpu,
  Compass,
  PencilRuler,
  FileSignature,
  Hammer,
  BadgeCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { BorderBeam } from '@/components/ui/BorderBeam';

export default function CapabilitiesPage() {
  const { isArabic } = useLocale();

  const capabilities = [
    {
      id: 'on-time-delivery',
      icon: Clock,
      title: isArabic ? 'التسليم في الوقت المحدد' : 'On-Time Delivery',
      tag: isArabic ? 'التزام صارم بالجدول الزمني' : '100% Punctuality & Schedule Control',
      description: isArabic
        ? 'سجل حافل بالالتزام التام بالمواعيد النهائية للمشاريع الحيوية والإنشائية، مدعوم بأنظمة إدارة مشاريع متطورة تضمن سير العمل دون تأخير.'
        : 'Proven track record of meeting strict deadlines for mission-critical civil and infrastructure projects across the Kingdom and the Gulf region.',
      metric: isArabic ? '١٠٠٪ الالتزام' : '100% Milestone Rate',
    },
    {
      id: 'quality-compliance',
      icon: ShieldCheck,
      title: isArabic ? 'الجودة والامتثال النظامي' : 'Quality & Code Compliance',
      tag: isArabic ? 'كود البناء السعودي والمعايير الدولية' : 'Saudi Building Code (SBC) & ISO',
      description: isArabic
        ? 'تطبيق صارم لكود البناء السعودي (SBC)، ومعايير الجمعية الأمريكية لاختبار المواد (ASTM)، وأعلى بروتوكولات السلامة والجودة العالمية في جميع مراحل البناء.'
        : 'Strict adherence to Saudi Building Code (SBC) regulations, international ASTM engineering standards, and robust health and safety protocols.',
      metric: isArabic ? 'معتمد نظامياً' : 'SBC Accredited',
    },
    {
      id: 'experienced-teams',
      icon: HardHat,
      title: isArabic ? 'فرق هندسية ذات خبرة عميقة' : 'Experienced Engineering Teams',
      tag: isArabic ? '١٨+ عاماً من القيادة والخبرة المجمعة' : '18+ Years Leadership & Expertise',
      description: isArabic
        ? 'مهندسون واستشاريون معتمدون في الهندسة المدنية والإنشائية والميكانيكية والكهربائية، يقودون كوادر فنية وحرفيين متمرسين في التنفيذ الميداني.'
        : 'Chartered civil, structural, and MEP engineering leadership backed by highly skilled site crews with decades of field-proven execution experience.',
      metric: isArabic ? '١٨+ سنة خبرة' : '18+ Years In Field',
    },
    {
      id: '24-7-capability',
      icon: Zap,
      title: isArabic ? 'القدرة التشغيلية على مدار الساعة' : '24/7 Fast-Track Capability',
      tag: isArabic ? 'ورديات عمل متواصلة وتسليم سريع' : 'Continuous Shifts & Fast-Track Execution',
      description: isArabic
        ? 'أنظمة عمل ورديات مرنة تعمل على مدار الساعة وجاهزية لوجستية لتعبئة المعدات والكوادر لتسريع وتيرة الإنجاز في المشاريع ذات الجداول الحرجة.'
        : 'Flexible round-the-clock shift systems, rapid logistics mobilization, and heavy equipment allocation designed to crush accelerated project timelines.',
      metric: isArabic ? 'جاهزية ٢٤/٧' : '24/7 Operations',
    },
    {
      id: 'comprehensive-support',
      icon: HeartHandshake,
      title: isArabic ? 'الدعم المالي واللوجستي الشامل' : 'Comprehensive Backing & Support',
      tag: isArabic ? 'ملاءة مالية وسلسلة توريد موثوقة' : 'Strong Liquidity & Supply Security',
      description: isArabic
        ? 'ملاءة مالية متينة تضمن التزامات الموردين والمقاولين والشركاء في مواعيدها المحددة، مما يضمن تدفق المواد المعتمدة وسلاسة سير المشروع دون انقطاع.'
        : 'Solid financial footing with prompt supplier and subcontractor payments, fostering dependable supply-chain partnerships and zero site disruptions.',
      metric: isArabic ? 'ثقة وشراكة' : 'Turnkey Partner',
    },
    {
      id: 'innovative-methods',
      icon: Cpu,
      title: isArabic ? 'الأساليب المبتكرة ونمذجة BIM' : 'Innovative Methods & Technology',
      tag: isArabic ? 'نمذجة ثلاثية الأبعاد وحلول ذكية' : '3D BIM Modeling & Smart Automation',
      description: isArabic
        ? 'استخدام تقنيات نمذجة معلومات المباني (BIM)، والمسح الطبوغرافي الرقمي، والأنظمة الذكية للحد من الهدر، وتعزيز الدقة الإنشائية، وخفض التكاليف.'
        : 'State-of-the-art Building Information Modeling (BIM), modern surveying technologies, and intelligent site automation that maximize precision and eliminate waste.',
      metric: isArabic ? 'تقنيات متقدمة' : 'BIM Engineered',
    },
  ];

  const processStepsWithSymbols = [
    {
      id: '01',
      number: 1,
      icon: Compass,
      title: isArabic ? 'الاستشارة الأولية والمعاينة' : 'Initial Consultation & Discovery',
      deliverable: isArabic ? 'معاينة ميدانية وتقييم المتطلبات' : 'Site Walkthrough & Technical Brief',
      description: isArabic
        ? 'جلسة استكشافية شاملة لمعاينة الموقع وفهم المتطلبات الفنية، والميزانية، والجدول الزمني، والتوافق مع اللوائح والاشتراطات البلدية.'
        : 'Comprehensive discovery session to inspect topography, outline architectural objectives, evaluate budgetary constraints, and assess local municipal codes.',
    },
    {
      id: '02',
      number: 2,
      icon: PencilRuler,
      title: isArabic ? 'التصميم الهندسي والمخططات' : 'Engineering Design & Modeling',
      deliverable: isArabic ? 'مخططات تفصيلية ونمذجة ثلاثية الأبعاد' : 'Detailed Drawings & 3D BIM Model',
      description: isArabic
        ? 'إعداد المخططات المعمارية والإنشائية والكهرميكانيكية المتكاملة، واعتماد مواصفات المواد وتخطيط المساحات مع نمذجة ثلاثية الأبعاد (3D).'
        : 'Architectural, civil, and MEP blueprint generation, material specification approval, spatial planning, and immersive 3D BIM visualization.',
    },
    {
      id: '03',
      number: 3,
      icon: FileSignature,
      title: isArabic ? 'العرض المالي والاتفاق التعاقدي' : 'Proposal & Contract Agreement',
      deliverable: isArabic ? 'جدول كميات مفصل وعقد معتمد' : 'Itemized BOQ & Milestone Contract',
      description: isArabic
        ? 'تقديم عرض فني ومالي شفاف يحدد بنود الأعمال بدقة وجداول الكميات (BOQ) والمدد الزمنية، وتوثيق العقود القانونية والضمانات الرسمية.'
        : 'Transparent tender package featuring itemized Bill of Quantities (BOQ), critical path timelines, and legally binding corporate contract governance.',
    },
    {
      id: '04',
      number: 4,
      icon: Hammer,
      title: isArabic ? 'مرحلة التنفيذ وإدارة الموقع' : 'Turnkey Site Execution & PM',
      deliverable: isArabic ? 'إدارة ميدانية وتقارير تقدم دورية' : 'On-Site PM & Continuous QA Audit',
      description: isArabic
        ? 'تنسيق ميداني كامل بقيادة مدير مشروع مخصص، مع إشراف صارم على معايير السلامة والصحة المهنية (HSE) ومراقبة الجودة في كل مرحلة.'
        : 'Full-scale on-site construction overseen by a dedicated project director, implementing stringent HSE safety controls and sequenced quality audits.',
    },
    {
      id: '05',
      number: 5,
      icon: BadgeCheck,
      title: isArabic ? 'الفحص النهائي والتسليم الرسمي' : 'Final Inspection & Handover',
      deliverable: isArabic ? 'مخططات الواقع الفعلي وشهادات الضمان' : 'As-Built Dossier & Warranty Pack',
      description: isArabic
        ? 'جولة تدقيق شاملة لقائمة الملاحظات وضمان المطابقة التامة، وتسليم مخططات التنفيذ الفعلي (As-Built) وكتيبات الصيانة وشهادات الضمان الشامل.'
        : 'Comprehensive snag-list walkthrough, client sign-off, delivery of as-built engineering dossiers, manufacturer manuals, and official warranty certificates.',
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill-blue text-xs font-bold mb-5 shadow-xs animate-float">
                <Sparkles size={14} className="text-sky-300" />
                <span>{isArabic ? 'الريادة والقدرات المؤسسية' : 'ENTERPRISE CAPABILITIES & METHODOLOGY'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 text-white tracking-tight leading-tight">
                {isArabic ? 'قدراتنا ومسار التنفيذ الهندسي' : 'Our Capabilities & Delivery Process'}
              </h1>

              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                {isArabic
                  ? 'نمزج بين الخبرة الهندسية المتراكمة، والجاهزية التشغيلية على مدار الساعة، والمطابقة التامة لكود البناء السعودي لتسليم أضخم المشاريع الإنشائية والبنية التحتية بنجاح.'
                  : 'Merging 18+ years of field engineering leadership, 24/7 fast-track operations, and rigorous Saudi Building Code compliance to deliver major infrastructure and civil projects.'}
              </p>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Core Capabilities Section */}
      <Section className="py-20 lg:py-24">
        <Container>
          <AnimatedReveal direction="up" delay={100}>
            <div className="text-center max-w-3xl mx-auto mb-16" dir={isArabic ? 'rtl' : 'ltr'}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-blue text-xs font-bold mb-4">
                <ShieldCheck size={14} className="text-sky-400" />
                <span>{isArabic ? 'أركان التميز الهندسي' : 'PILLARS OF EXCELLENCE'}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-4 tracking-tight">
                {isArabic ? 'قدراتنا ونقاط القوة الأساسية' : 'Our Core Capabilities'}
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {isArabic
                  ? 'مجموعة متكاملة من المقومات الهندسية والمالية والتقنية التي تضمن تنفيذ مشاريع عملائنا بأعلى درجات الموثوقية والدقة.'
                  : 'Comprehensive technical, financial, and operational competencies engineered to execute mission-critical projects with uncompromised precision.'}
              </p>
            </div>
          </AnimatedReveal>

          {/* Capabilities Grid with Visual Symbols */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimatedReveal key={item.id} direction="up" delay={index * 80}>
                  <Card className="p-7 md:p-8 h-full flex flex-col hover:shadow-2xl hover:border-sky-400/50 transition-all duration-300 transform hover:-translate-y-2 shimmer-sheen group border border-slate-200/80 bg-white">
                    {/* Top Row: Symbol Icon Pod & Metric Pill */}
                    <div className="flex items-center justify-between gap-4 mb-6" dir={isArabic ? 'rtl' : 'ltr'}>
                      <div className="w-14 h-14 rounded-2xl glass-icon-blue border border-sky-400/40 flex items-center justify-center text-accent shadow-md group-hover:scale-110 group-hover:border-sky-300 group-hover:shadow-[0_0_24px_rgba(2,132,199,0.4)] transition-all duration-300">
                        <Icon size={28} className="text-sky-600 group-hover:text-sky-500 transition-colors" />
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-bold glass-pill-blue text-sky-800 border border-sky-300/40">
                        {item.metric}
                      </span>
                    </div>

                    {/* Tagline */}
                    <div className="text-xs font-bold text-accent tracking-wider uppercase mb-2" dir={isArabic ? 'rtl' : 'ltr'}>
                      {item.tag}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors leading-snug" dir={isArabic ? 'rtl' : 'ltr'}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow" dir={isArabic ? 'rtl' : 'ltr'}>
                      {item.description}
                    </p>

                    {/* Bottom Status Check */}
                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500" dir={isArabic ? 'rtl' : 'ltr'}>
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>{isArabic ? 'جاهزية تشغيلية كاملة للمشاريع' : 'Active Enterprise Readiness'}</span>
                    </div>
                  </Card>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Process Section with Visual Milestone Pipeline */}
      <Section background="muted" className="py-20 lg:py-28 relative overflow-hidden">
        <Container>
          <AnimatedReveal direction="up" delay={100}>
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20" dir={isArabic ? 'rtl' : 'ltr'}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-blue text-xs font-bold mb-4">
                <Compass size={14} className="text-sky-400" />
                <span>{isArabic ? 'منهجية العمل والتحكم بالجودة' : 'SYSTEMATIC PROJECT LIFECYCLE'}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-4 tracking-tight">
                {isArabic ? 'عملية التسليم الهندسي (٥ مراحل)' : 'Our 5-Step Delivery Process'}
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {isArabic
                  ? 'نهج هندسي منظم ومحكم يقود المشروع من الجلسة الاستكشافية الأولى وحتى التسليم النهائي والتشغيل الكامل بكل دقة وشفافية.'
                  : 'A disciplined, milestone-driven lifecycle that guides each venture from initial site survey to final certification and turnkey handover.'}
              </p>
            </div>
          </AnimatedReveal>

          {/* Process Steps Cards with Dynamic Symbols & Pipeline Connectors */}
          <div className="relative">
            {/* Horizontal Connecting Pipeline on Desktop */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-sky-400/20 via-sky-500 to-sky-400/20 -z-0 rounded-full" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {processStepsWithSymbols.map((step, index) => {
                const Icon = step.icon;

                return (
                  <AnimatedReveal key={step.id} direction="up" delay={index * 110}>
                    <Card className="p-6 text-center h-full flex flex-col items-center hover:shadow-2xl hover:border-sky-400/50 transition-all duration-300 transform hover:-translate-y-2 shimmer-sheen group bg-white border border-slate-200/90 relative">
                      {/* Top Step Number Glass Badge */}
                      <div className="absolute top-3 end-3 px-2 py-0.5 rounded-md glass-icon-blue text-[11px] font-mono font-bold text-sky-800">
                        #{step.id}
                      </div>

                      {/* Illuminated Symbol Pod */}
                      <div className="relative w-20 h-20 rounded-2xl glass-circle-blue border-2 border-sky-300/60 flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:border-sky-200 group-hover:shadow-[0_0_28px_rgba(2,132,199,0.55)] transition-all duration-300">
                        <Icon size={32} className="text-white drop-shadow-md" />
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors leading-snug">
                        {step.title}
                      </h3>

                      {/* Deliverable Badge */}
                      <div className="px-3 py-1 rounded-lg glass-pill-blue text-xs font-bold text-sky-800 mb-3 border border-sky-300/40">
                        {step.deliverable}
                      </div>

                      {/* Step Description */}
                      <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                        {step.description}
                      </p>

                      {/* Step Sequence Indicator */}
                      <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        <span>{isArabic ? `المرحلة ${step.id}` : `Phase ${step.id}`}</span>
                        <span>•</span>
                        <span className="text-emerald-600">{isArabic ? 'مرحلة معتمدة' : 'Verified'}</span>
                      </div>
                    </Card>
                  </AnimatedReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy" className="relative overflow-hidden py-24">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse-subtle" />

        <Container className="relative z-10">
          <AnimatedReveal direction="up" delay={100}>
            <div className="text-center max-w-3xl mx-auto p-10 md:p-14 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-sky-400/20 shadow-2xl relative overflow-hidden">
              <BorderBeam size={280} duration={12} colorFrom="#38bdf8" colorTo="#2563eb" />
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight">
                {isArabic ? 'مستعدون لبدء مشروعك القادم؟' : 'Ready to Start Your Project?'}
              </h2>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                {isArabic
                  ? 'دعنا نناقش كيف يمكن لقدراتنا الهندسية وإدارتنا التنفيذية أن تخدم احتياجات مشروعك بدقة متناهية وعروض أسعار تنافسية.'
                  : 'Let us discuss how our technical capabilities, seasoned teams, and turnkey delivery methodology can serve your project requirements.'}
              </p>
              <Link href="/contact" className="inline-block shimmer-sheen rounded-xl">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-btn-blue font-bold rounded-xl transition-all shadow-xl hover:scale-105 active:scale-95 text-base cursor-pointer"
                >
                  <span>{isArabic ? 'تواصل مع فريقنا الهندسي' : 'Contact Us Today'}</span>
                  <ArrowRight size={18} className={isArabic ? 'rotate-180' : ''} />
                </button>
              </Link>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>
    </MainLayout>
  );
}
