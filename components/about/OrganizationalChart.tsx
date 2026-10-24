'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { useLocale } from '@/lib/context/LocaleContext';
import {
  Users,
  ShieldCheck,
  HardHat,
  FileSpreadsheet,
  Calculator,
  Compass,
  FileDown,
  Building,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface DivisionItem {
  id: string;
  titleEn: string;
  titleAr: string;
  roleEn: string;
  roleAr: string;
  icon: React.ElementType;
  badgeEn?: string;
  badgeAr?: string;
  subteams?: {
    nameEn: string;
    nameAr: string;
    detailEn?: string;
    detailAr?: string;
  }[];
  responsibilities?: {
    en: string;
    ar: string;
  }[];
}

const divisions: DivisionItem[] = [
  {
    id: 'operations',
    titleEn: 'Projects & Operations',
    titleAr: 'المشاريع والعمليات',
    roleEn: 'Executive Site Management & Execution Control',
    roleAr: 'إدارة المواقع الميدانية وضبط وتيرة التنفيذ',
    icon: HardHat,
    badgeEn: 'Core Division',
    badgeAr: 'قطاع تنفيذي رئيسي',
    subteams: [
      {
        nameEn: 'Project Team',
        nameAr: 'فريق المشاريع',
        detailEn: 'Site Engineers, Project Managers, General Foremen & Execution Crews',
        detailAr: 'مهندسو الموقع، مديرو المشاريع، المشرفون العامون وطواقم التنفيذ',
      },
    ],
    responsibilities: [
      { en: 'Direct on-site engineering execution across all regional packages', ar: 'التنفيذ الميداني المباشر لكافة حزم المشاريع بالمملكة' },
      { en: 'Strict milestone tracking and 24/7 multi-shift operations', ar: 'متابعة الجداول الزمنية الحرجة والعمل بنظام الورديات' },
    ],
  },
  {
    id: 'technical',
    titleEn: 'Technical Manager',
    titleAr: 'المدير الفني',
    roleEn: 'Engineering Governance & SBC Compliance',
    roleAr: 'الحوكمة الفنية والمطابقة لكود البناء السعودي',
    icon: Compass,
    badgeEn: 'Engineering Hub',
    badgeAr: 'المركز الفني',
    responsibilities: [
      { en: 'Shop drawings review, BIM modeling and value engineering submittals', ar: 'اعتماد المخططات التنفيذية، ونمذجة BIM والهندسة القيمية' },
      { en: 'Consultant coordination (SAUDCONSULT, Wood Al Hejailan, etc.)', ar: 'التنسيق الفني مع الاستشاريين (سعود كونسلت، وود الهجيلان وغيرها)' },
      { en: 'Ensuring strict Saudi Building Code (SBC) technical fidelity', ar: 'ضمان التوافق الصارم مع متطلبات كود البناء السعودي' },
    ],
  },
  {
    id: 'qhse',
    titleEn: 'QHSE Manager',
    titleAr: 'مدير الجودة والسلامة والبيئة',
    roleEn: 'Zero-Harm & Total Quality Assurance',
    roleAr: 'ضمان الجودة الشاملة وثقافة السلامة الصفرية',
    icon: ShieldCheck,
    badgeEn: 'Aramco Standard',
    badgeAr: 'معايير أرامكو',
    subteams: [
      {
        nameEn: 'QC Inspector',
        nameAr: 'مفتش مراقبة الجودة (QC)',
        detailEn: 'Material verification, third-party lab testing and ITP approvals',
        detailAr: 'فحص المواد، اختبارات المختبرات المعتمدة وخطط فحص الجودة (ITP)',
      },
      {
        nameEn: 'Safety Officer',
        nameAr: 'مسؤول السلامة والصحة المهنية (HSE)',
        detailEn: 'Risk assessments, continuous HSE audits and zero-accident protocol',
        detailAr: 'تقييم المخاطر، التفتيش اليومي وتطبيق بروتوكول الحوادث الصفرية',
      },
    ],
    responsibilities: [
      { en: 'ISO 9001 / ISO 45001 / ISO 14001 aligned site standards', ar: 'تطبيق معايير الآيزو 9001 و 45001 و 14001 في كافة المواقع' },
      { en: 'Saudi Aramco and MODON compliance auditing', ar: 'التدقيق والالتزام بمتطلبات أرامكو السعودية وهيئة مدن' },
    ],
  },
  {
    id: 'finance',
    titleEn: 'Finance Manager',
    titleAr: 'المدير المالي',
    roleEn: 'Fiscal Stability & Supply Chain Liquidity',
    roleAr: 'الاستقرار المالي وسيولة سلاسل الإمداد',
    icon: Calculator,
    badgeEn: 'ZATCA Aligned',
    badgeAr: 'معتمد زكاة وضريبة',
    subteams: [
      {
        nameEn: 'Finance & Accounts',
        nameAr: 'المالية والحسابات',
        detailEn: 'Cost accounting, payroll, VAT invoicing & vendor disbursements',
        detailAr: 'محاسبة التكاليف، مسيرات الرواتب، الفوترة الإلكترونية وصرف الموردين',
      },
    ],
    responsibilities: [
      { en: 'Guaranteed 100% on-time vendor & subcontractor cash flows', ar: 'الالتزام التام بالصرف في الوقت المحدد للموردين ومقاولي الباطن' },
      { en: 'Bank AlJazira corporate facility and performance bond governance', ar: 'إدارة خطابات الضمان والتسهيلات المصرفية مع بنك الجزيرة' },
    ],
  },
  {
    id: 'administration',
    titleEn: 'Administration',
    titleAr: 'الشؤون الإدارية',
    roleEn: 'Human Capital & Governmental Relations',
    roleAr: 'رأس المال البشري والعلاقات الحكومية',
    icon: Building,
    badgeEn: 'QIWA Green A',
    badgeAr: 'نطاقات أخضر أ',
    responsibilities: [
      { en: 'QIWA, GOSI, Muqeem and Ministry of Commerce compliance', ar: 'إدارة منصات قوى، التأمينات الاجتماعية، مقيم ووزارة التجارة' },
      { en: 'Active Saudization initiatives (Green Category A certified)', ar: 'المحافظة على معدلات التوطين الممتازة (نطاقات أخضر فئة أ)' },
      { en: 'Logistics, site offices, workforce accommodation and mobilization', ar: 'الخدمات اللوجستية، سكن العمالة ومكاتب المواقع والمعدات' },
    ],
  },
  {
    id: 'estimation',
    titleEn: 'Estimation Manager',
    titleAr: 'مدير التقدير والتسعير',
    roleEn: 'Competitive Bidding & Value Analysis',
    roleAr: 'دراسة العطاءات التنافسية وهندسة القيمة',
    icon: FileSpreadsheet,
    badgeEn: 'Precision Pricing',
    badgeAr: 'تسعير دقيق',
    responsibilities: [
      { en: 'Comprehensive Bill of Quantities (BOQ) preparation & verification', ar: 'إعداد ومراجعة جداول الكميات (BOQ) بدقة هندسية عالية' },
      { en: 'Commercial pre-qualification submissions for mega Vision 2030 bids', ar: 'تجهيز ملفات التأهيل التجاري للمشاريع الكبرى ورؤية 2030' },
      { en: 'Market price benchmarking across concrete, steel, MEP and finishing', ar: 'تحليل أسعار السوق لمواد البناء والأعمال التخصصية والتشطيبات' },
    ],
  },
];

export function OrganizationalChart() {
  const { isArabic } = useLocale();
  const [selectedDiv, setSelectedDiv] = useState<string>('operations');

  const activeDiv = divisions.find((d) => d.id === selectedDiv) || divisions[0];

  return (
    <div className="w-full" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-xs font-bold mb-4 shadow-xs text-sky-800">
          <Users size={14} className="text-sky-600" />
          <span>{isArabic ? 'الهيكل التنظيمي المعتمد' : 'OFFICIAL ORGANIZATIONAL STRUCTURE'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
          {isArabic ? 'الهيكل التنظيمي للشركة' : 'Corporate Organizational Chart'}
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          {isArabic
            ? 'الهيكل يعكس تنظيمًا واضحًا للمسؤوليات بين الإدارات الفنية والمالية والتشغيلية لضمان تنفيذ سلس للمشاريع بأعلى معايير الحوكمة.'
            : 'The structure reflects clear division of responsibilities across technical, financial, and operational departments to guarantee flawless project delivery.'}
        </p>

        {/* Download PDF Trigger */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/downloads/organzational-chart.pdf"
            download="Palm-Hills-Gulf-Organizational-Chart.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-sky-600 hover:bg-sky-500 text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all shimmer-sheen"
          >
            <FileDown size={16} />
            <span>{isArabic ? 'تحميل الهيكل التنظيمي (PDF)' : 'Download Official Chart (PDF)'}</span>
          </a>
        </div>
      </div>

      {/* Visual Tree Chart Representation */}
      <div className="relative mb-12">
        {/* GM Level 1 Card */}
        <div className="flex justify-center mb-8">
          <AnimatedReveal direction="up" delay={50}>
            <div className="relative group">
              <div className="px-8 py-5 rounded-2xl bg-gradient-to-r from-blue-900 via-sky-900 to-blue-950 text-white shadow-2xl border border-sky-400/40 text-center min-w-[280px] sm:min-w-[340px] transform transition-transform group-hover:scale-105">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-sky-400/30">
                  <Sparkles size={12} className="text-sky-300" />
                  <span>{isArabic ? 'الإدارة العليا' : 'Executive Leadership'}</span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-wide">
                  {isArabic ? 'المدير العام' : 'General Manager'}
                </div>
                <div className="text-xs text-sky-200 mt-1 font-medium">
                  {isArabic ? 'شركة بالم هيلز جلف المحدودة' : 'Palm Hills Gulf Company Limited'}
                </div>
              </div>

              {/* Vertical connector stem */}
              <div className="w-0.5 h-8 bg-gradient-to-b from-sky-500 to-sky-300 mx-auto" />
            </div>
          </AnimatedReveal>
        </div>

        {/* Horizontal Connector Bar (Desktop) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent mb-6" />

        {/* 6 Direct Reporting Divisions (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {divisions.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedDiv === item.id;

            return (
              <AnimatedReveal key={item.id} direction="up" delay={100 + idx * 40}>
                <div
                  onClick={() => setSelectedDiv(item.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 relative h-full flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-sky-500/15 via-white to-sky-50/50 border-2 border-sky-500 shadow-xl -translate-y-1'
                      : 'bg-white/80 hover:bg-white border border-slate-200/90 hover:border-sky-300 hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* Top connector notch on desktop */}
                    <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-sky-300" />

                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-sky-600 text-white shadow-md' : 'bg-sky-50 text-sky-700'
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      {item.badgeEn && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {isArabic ? item.badgeAr : item.badgeEn}
                        </span>
                      )}
                    </div>

                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1 leading-snug">
                      {isArabic ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {isArabic ? item.roleAr : item.roleEn}
                    </p>
                  </div>

                  {/* Sub-teams indicator pill if present */}
                  {item.subteams && item.subteams.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-sky-700">
                      <Users size={12} />
                      <span>
                        {item.subteams.length}{' '}
                        {isArabic ? 'فريق / وظائف تابعة' : 'Direct Sub-team(s)'}
                      </span>
                    </div>
                  )}
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>

      {/* Selected Division Detailed Dossier Card */}
      <AnimatedReveal direction="up" delay={200}>
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white border border-white/20 shadow-2xl relative overflow-hidden">
          {/* Ambient fluid glow */}
          <div className="absolute top-0 end-0 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/15">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-sky-500/25 border border-sky-400/40 flex items-center justify-center text-sky-300 shadow-md">
                  {React.createElement(activeDiv.icon, { size: 24 })}
                </div>
                <div>
                  <div className="text-xs text-sky-400 font-bold uppercase tracking-wider">
                    {isArabic ? 'تفاصيل الإدارة المحددة' : 'Division Responsibility Profile'}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {isArabic ? activeDiv.titleAr : activeDiv.titleEn}
                  </h3>
                </div>
              </div>

              <div className="text-xs text-slate-300 max-w-md font-medium">
                {isArabic ? activeDiv.roleAr : activeDiv.roleEn}
              </div>
            </div>

            {/* Grid of Subteams and Responsibilities */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Subteams */}
              {activeDiv.subteams && activeDiv.subteams.length > 0 ? (
                <div>
                  <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Users size={14} />
                    <span>{isArabic ? 'الفرق والأقسام الميدانية التابعة' : 'Subordinate Teams & Field Roles'}</span>
                  </h4>
                  <div className="space-y-3">
                    {activeDiv.subteams.map((sub, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md shadow-md"
                      >
                        <div className="font-extrabold text-white text-sm mb-1">
                          {isArabic ? sub.nameAr : sub.nameEn}
                        </div>
                        {sub.detailEn && (
                          <div className="text-xs text-slate-300 leading-relaxed">
                            {isArabic ? sub.detailAr : sub.detailEn}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ShieldCheck size={14} />
                    <span>{isArabic ? 'نطاق الإشراف المباشر' : 'Direct Supervisory Scope'}</span>
                  </h4>
                  <div className="p-4 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md text-xs text-slate-300 leading-relaxed shadow-md">
                    {isArabic
                      ? 'تعمل هذه الإدارة بصلاحيات استراتيجية مباشرة تحت إشراف المدير العام لتنسيق المتطلبات الفنية والتعاقدية.'
                      : 'Operates with strategic authority reporting directly to the General Manager to execute core commercial, engineering, or statutory frameworks.'}
                  </div>
                </div>
              )}

              {/* Core Responsibilities */}
              <div>
                <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 size={14} />
                  <span>{isArabic ? 'المسؤوليات الرئيسية والالتزامات' : 'Key Mandates & Corporate Deliverables'}</span>
                </h4>
                <div className="space-y-2.5">
                  {activeDiv.responsibilities?.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed p-2.5 rounded-lg bg-white/10 border border-white/10 shadow-xs"
                    >
                      <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{isArabic ? resp.ar : resp.en}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedReveal>
    </div>
  );
}
