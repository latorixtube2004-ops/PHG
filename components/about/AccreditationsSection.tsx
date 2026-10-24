'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { useLocale } from '@/lib/context/LocaleContext';
import { DownloadProfileModal } from '@/components/ui/DownloadProfileModal';
import { companyInfo } from '@/lib/data/company';
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  Award,
  FileDown,
  Building,
  CheckCheck,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';

interface AccreditationItem {
  id: string;
  badgeEn: string;
  badgeAr: string;
  titleEn: string;
  titleAr: string;
  entityEn: string;
  entityAr: string;
  codeLabelEn?: string;
  codeLabelAr?: string;
  codeValue?: string;
  detailEn: string;
  detailAr: string;
  scopeList: { en: string; ar: string }[];
}

const accreditations: AccreditationItem[] = [
  {
    id: 'aramco',
    badgeEn: 'Approved Service Provider',
    badgeAr: 'مزود خدمة معتمد',
    titleEn: 'Saudi Aramco Vendor Registration',
    titleAr: 'اعتماد تسجيل مقاول معتمد لدى أرامكو السعودية',
    entityEn: 'Saudi Aramco Supplier Management System',
    entityAr: 'أرامكو السعودية — إدارة الموردين والمقاولين',
    codeLabelEn: 'Vendor Code',
    codeLabelAr: 'رمز المورد المعتمد',
    codeValue: '10119967',
    detailEn: 'Officially registered and approved service provider under Saudi Aramco supplier governance protocols.',
    detailAr: 'مقاول معتمد رسمياً ومسجل في نظام إدارة الموردين لدى شركة أرامكو السعودية برقم اعتماد رسمي.',
    scopeList: [
      { en: 'Pre-qualified for Aramco civil & infrastructure works', ar: 'تأهيل معتمد للأعمال المدنية والبنية التحتية' },
      { en: 'Strict Aramco safety, quality & compliance alignment', ar: 'الامتثال الكامل لبروتوكولات الجودة والسلامة لأرامكو' },
    ],
  },
  {
    id: 'modon',
    badgeEn: 'iSupplier Registered',
    badgeAr: 'مسجل ومعتمد في iSupplier',
    titleEn: 'MODON Industrial Authority Vendor Approval',
    titleAr: 'اعتماد الموردين — الهيئة السعودية للمدن الصناعية (مدن)',
    entityEn: 'Saudi Authority for Industrial Cities and Technology Zones (MODON)',
    entityAr: 'الهيئة السعودية للمدن الصناعية ومناطق التقنية (مدن)',
    codeLabelEn: 'Vendor Code',
    codeLabelAr: 'رمز المورد',
    codeValue: '6619',
    detailEn: 'Registered contractor active on the MODON iSupplier portal for industrial civil infrastructure packages.',
    detailAr: 'تسجيل مقاول نشط ومعتمد في بوابة موردي مدن لتنفيذ مشاريع البنية التحتية والمدن الصناعية.',
    scopeList: [
      { en: 'Industrial infrastructure and commercial construction', ar: 'مشاريع البنية التحتية والمنشآت الصناعية' },
      { en: 'Active vendor status for MODON tenders', ar: 'أهلية مباشرة للمشاركة في مناقصات الهيئة' },
    ],
  },
  {
    id: 'rua-al-madinah',
    badgeEn: 'Pre-Qualification Accepted',
    badgeAr: 'تأهيل مسبق مقبول ومعتمد',
    titleEn: 'Rua Al Madinah Holding / SAUDCONSULT',
    titleAr: 'تأهيل معتمد — شركة رؤى المدينة القابضة / سعود كونسلت',
    entityEn: 'Rua Al Madinah Holding Company (PIF Mega Project)',
    entityAr: 'شركة رؤى المدينة القابضة (أحد مشاريع صندوق الاستثمارات العامة)',
    codeLabelEn: 'Project Package',
    codeLabelAr: 'حزمة العمل',
    codeValue: 'C3 & Infrastructure',
    detailEn: 'Officially accepted engineering submittal for civil and architectural execution in Madinah pilgrimage zone.',
    detailAr: 'اعتماد التأهيل المسبق للأعمال المدنية والمعمارية والبنية التحتية لمنطقة الحرم الشريف بالمدينة المنورة.',
    scopeList: [
      { en: 'Civil & Architectural Works in Zone C3', ar: 'الأعمال الإنشائية والمعمارية في النطاق C3' },
      { en: 'Approved via Aconex engineering submittal workflow', ar: 'معتمد ومقبول رسمياً عبر منصة أكونكس الهندسية' },
    ],
  },
  {
    id: 'amaad',
    badgeEn: 'Approved Submittal',
    badgeAr: 'اعتماد رسمي',
    titleEn: 'AMAAD Business Park Package 2',
    titleAr: 'تأهيل مسبق — مجمع أعمال عماد (الظهران)',
    entityEn: 'BPCC / Wood Al-Hejailan / Al-Kifah Contracting',
    entityAr: 'شركة مجمع واحة الأعمال / وود الهجيلان / الكفاح للمقاولات',
    codeLabelEn: 'Submittal Reference',
    codeLabelAr: 'مرجع الاعتماد',
    codeValue: 'PK2-KCC-DOC-GEN-2555',
    detailEn: 'Prequalification approval for fit-out and comprehensive landscape packages across commercial office towers.',
    detailAr: 'اعتماد رسمي للتأهيل المسبق لأعمال التشطيبات الفاخرة وتنسيق المواقع لأبراج المكاتب التجارية بالظهران.',
    scopeList: [
      { en: 'Commercial towers interior fit-out & hardscape', ar: 'أعمال التشطيبات المعمارية والأعمال الخارجية' },
      { en: 'Multi-tiered consultant supervision by Wood Al-Hejailan', ar: 'إشراف استشاري دولي معتمد من وود الهجيلان' },
    ],
  },
  {
    id: 'sbc',
    badgeEn: 'Code Certified',
    badgeAr: 'مطابق للكود السعودي',
    titleEn: 'Saudi Building Code (SBC) Compliance',
    titleAr: 'الالتزام بكود البناء السعودي (SBC)',
    entityEn: 'Saudi National Building Code Committee',
    entityAr: 'اللجنة الوطنية لكود البناء السعودي',
    detailEn: 'All structural engineering, concrete testing, fire protection, and MEP designs strictly follow SBC regulations.',
    detailAr: 'تنفيذ كافة الهياكل الإنشائية، اختبارات الخرسانة، أنظمة الإطفاء والأعمال الكهروميكانيكية وفق الكود السعودي.',
    scopeList: [
      { en: 'Rigorous seismic, thermal and structural load design', ar: 'مطابقة المعايير الزلزالية والحرارية والأحمال الهيكلية' },
      { en: 'Independent 3rd-party laboratory testing on every pour', ar: 'فحوصات مخبرية معتمدة لكل صبة خرسانية ومراحل الحديد' },
    ],
  },
  {
    id: 'qiwa',
    badgeEn: 'Green Tier A',
    badgeAr: 'نطاقات أخضر فئة أ',
    titleEn: 'QIWA Nationalization & Saudization Tier',
    titleAr: 'الامتثال العالي للتوطين — منصة قوى (نطاقات)',
    entityEn: 'Ministry of Human Resources and Social Development',
    entityAr: 'وزارة الموارد البشرية والتنمية الاجتماعية',
    codeLabelEn: 'Saudization Rate',
    codeLabelAr: 'نسبة التوطين',
    codeValue: 'Green Category A (25%)',
    detailEn: 'Achieved top-tier Green Category A status reflecting proactive Saudization and skilled national talent empowerment.',
    detailAr: 'تحقيق الفئة الخضراء (أ) بفضل استقطاب وتأهيل الكفاءات الوطنية السعودية في كافة المجالات الهندسية.',
    scopeList: [
      { en: 'Empowered Saudi engineering and management cadres', ar: 'كوادر هندسية وإدارية وطنية مؤهلة في مواقع العمل' },
      { en: 'Compliant with GOSI and Saudi labor statutory frameworks', ar: 'التزام تام بأنظمة التأمينات الاجتماعية والعمل السعودية' },
    ],
  },
];

export function AccreditationsSection() {
  const { isArabic, locale } = useLocale();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="w-full" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-xs font-bold mb-4 shadow-xs text-sky-800">
          <ShieldCheck size={14} className="text-sky-600" />
          <span>{isArabic ? 'الاعتمادات والشراكات المؤسسية' : 'CORPORATE ACCREDITATIONS & PARTNERSHIPS'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
          {isArabic ? 'الاعتمادات الرسمية والتأهيل المعتمد' : 'Accreditations & Prequalifications'}
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          {isArabic
            ? 'سجل حافل بالاعتمادات والتأهيل المسبق لدى كبرى الكيانات الاستثمارية والصناعية بالمملكة العربية السعودية.'
            : 'Formally approved pre-qualification and vendor registrations across Saudi Arabia’s premier industrial and mega-project authorities.'}
        </p>
      </div>

      {/* Top Key Metrics Banner */}
      <AnimatedReveal direction="up" delay={100}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white border border-white/15 shadow-xl text-center">
            <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-1">
              {isArabic ? 'أرامكو السعودية' : 'Saudi Aramco'}
            </div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-white mb-0.5">
              10119967
            </div>
            <div className="text-[10px] text-slate-300">
              {isArabic ? 'رمز مورد معتمد' : 'Approved Vendor Code'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white border border-white/15 shadow-xl text-center">
            <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-1">
              {isArabic ? 'هيئة مدن الصناعية' : 'MODON Authority'}
            </div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-white mb-0.5">
              6619
            </div>
            <div className="text-[10px] text-slate-300">
              {isArabic ? 'رمز مورد iSupplier' : 'Vendor Registration'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white border border-white/15 shadow-xl text-center">
            <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-1">
              {isArabic ? 'كود البناء السعودي' : 'Saudi Building Code'}
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-sky-400 mb-0.5">
              SBC Compliant
            </div>
            <div className="text-[10px] text-slate-300">
              {isArabic ? 'التزام هندسي ١٠٠٪' : 'Strict Engineering Standards'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white border border-white/15 shadow-xl text-center">
            <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider mb-1">
              {isArabic ? 'منصة قوى (نطاقات)' : 'QIWA Saudization'}
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 mb-0.5">
              {isArabic ? 'أخضر فئة أ' : 'Green Tier A'}
            </div>
            <div className="text-[10px] text-slate-300">
              {isArabic ? 'معدل التوطين ٢٥٪' : 'Top Saudization Tier'}
            </div>
          </div>
        </div>
      </AnimatedReveal>

      {/* Accreditations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {accreditations.map((item, index) => (
          <AnimatedReveal key={item.id} direction="up" delay={index * 60}>
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-sky-400/60 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-sky-600" />
                    <span>{isArabic ? item.badgeAr : item.badgeEn}</span>
                  </span>

                  {item.codeValue && (
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-slate-900 text-white">
                      {item.codeValue}
                    </span>
                  )}
                </div>

                {/* Title & Entity */}
                <h3 className="text-lg font-extrabold text-slate-900 mb-1.5 group-hover:text-sky-600 transition-colors leading-snug">
                  {isArabic ? item.titleAr : item.titleEn}
                </h3>
                <div className="text-xs text-sky-600 font-semibold mb-3">
                  {isArabic ? item.entityAr : item.entityEn}
                </div>

                {/* Detail */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {isArabic ? item.detailAr : item.detailEn}
                </p>

                {/* Scope Points */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {item.scopeList.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCheck size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{isArabic ? pt.ar : pt.en}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>
        ))}
      </div>

      {/* Pre-Qualification Dossier Download Notice */}
      <AnimatedReveal direction="up" delay={200}>
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-900 via-blue-900 to-slate-950 text-white border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold mb-3 border border-sky-400/30">
              <Sparkles size={13} />
              <span>{isArabic ? 'ملف التأهيل الفني والمؤسسي' : 'OFFICIAL PRE-QUALIFICATION DOSSIER'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              {isArabic ? 'الملف التعريفي الشامل للشركة' : 'Download Complete Corporate Profile'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isArabic
                ? 'يحتوي الملف التعريفي على السجل الكامل للمشاريع المنجزة، الهيكل التنظيمي، السياسات الهندسية، وبيانات الاعتماد الرسمية الكاملة للمناقصات والمشاريع الكبرى.'
                : 'Contains our verified project sheets, organizational hierarchy, engineering QA/QC policies, and complete qualification records for mega project tenders.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsDownloadModalOpen(true)}
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm bg-sky-500 hover:bg-sky-400 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all shimmer-sheen cursor-pointer"
          >
            <FileDown size={18} />
            <span>{isArabic ? 'تحميل ملف الشركة (PDF)' : 'Download Profile (PDF)'}</span>
          </button>
        </div>
      </AnimatedReveal>

      {/* Dual Language Profile Download Modal */}
      <DownloadProfileModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        locale={locale}
      />
    </div>
  );
}
