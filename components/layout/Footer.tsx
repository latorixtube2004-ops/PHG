import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2, FileDown } from 'lucide-react';
import { companyInfo } from '@/lib/data/company';

import { useLocale } from '@/lib/context/LocaleContext';

interface FooterProps {
  locale?: 'en' | 'ar';
}

export function Footer({ locale: propLocale }: FooterProps = {}) {
  const context = useLocale();
  const locale = propLocale || context.locale;
  const isArabic = locale === 'ar';
  const currentYear = 2026;

  const services = [
    { href: '/services#infrastructure-solutions', label: isArabic ? 'حلول البنية التحتية' : 'Infrastructure Solutions' },
    { href: '/services#mep-works', label: isArabic ? 'أعمال MEP الميكانيكية والكهربائية' : 'MEP Engineering Works' },
    { href: '/services#lighting-design', label: isArabic ? 'تصميم الإضاءة المعمارية' : 'Architectural Lighting Design' },
    { href: '/services#building-sustainability', label: isArabic ? 'الاستدامة وإصلاح المباني' : 'Building Sustainability & Rehab' },
    { href: '/services#finishing-services', label: isArabic ? 'خدمات التشطيبات الفاخرة' : 'Premium Finishing Services' },
    { href: '/services#low-current-smart-systems', label: isArabic ? 'التيار الخفيف والأنظمة الذكية' : 'Low Current & Smart Systems' },
  ];

  const quickLinks = [
    { href: '/about', label: isArabic ? 'من نحن' : 'About Us' },
    { href: '/projects', label: isArabic ? 'المشاريع' : 'Projects Portfolio' },
    { href: '/capabilities', label: isArabic ? 'القدرات والخبرات' : 'Capabilities & Strengths' },
    { href: '/contact', label: isArabic ? 'تواصل معنا' : 'Contact Us' },
  ];

  return (
    <footer
      className="bg-pattern-dark text-slate-300 border-t border-white/15 relative overflow-hidden"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="container py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative h-14 w-52 sm:w-60">
                <Image
                  src="/images/company/logo-brand-white.png"
                  alt="Palm Hills Gulf Company Limited"
                  fill
                  sizes="(max-width: 640px) 208px, 240px"
                  className="object-contain object-left rtl:object-right transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed max-w-sm">
              {isArabic
                ? 'شركة بالم هيلز جلف المحدودة — رائدة في الهندسة المدنية، البنية التحتية، والتطوير العقاري بالمملكة العربية السعودية ومصر. التزام بأعلى معايير كود البناء السعودي والجودة العالمية.'
                : 'Palm Hills Gulf Company Limited — Premier civil engineering, infrastructure, and real estate development in Saudi Arabia & Egypt. Committed to the Saudi Building Code and international quality standards.'}
            </p>

            {/* Certification & Download Badges */}
            <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill-dark border border-white/20 text-xs text-sky-200 w-fit shadow-md">
                <ShieldCheck size={14} className="text-sky-400" />
                <span>{isArabic ? 'كود البناء السعودي (SBC) معتمد' : 'Saudi Building Code (SBC) Compliant'}</span>
              </div>
              <a
                href={isArabic ? companyInfo.downloads.companyProfileAr : companyInfo.downloads.companyProfile}
                download={isArabic ? "Palm-Hills-Gulf-Company-Profile-AR.pdf" : "Palm-Hills-Gulf-Company-Profile.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full liquid-glass-pill-dark hover:bg-sky-500/20 border border-sky-400/30 text-xs text-sky-300 w-fit shadow-md transition-all"
              >
                <FileDown size={14} className="text-sky-400" />
                <span>{isArabic ? 'تحميل البروفايل (PDF)' : 'Company Profile (PDF)'}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-auto">
              {/* WhatsApp */}
              <a
                href="https://wa.me/966547093809"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full liquid-glass-pill-dark hover:bg-emerald-600 border border-white/20 hover:border-emerald-400 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md"
                aria-label="WhatsApp"
              >
                <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.657 6.054 6.22-1.632c1.704.931 3.659 1.465 5.741 1.465 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.825c-1.879 0-3.636-.531-5.132-1.449l-.368-.222-3.693.968.986-3.6-.243-.387c-1.01-1.608-1.548-3.483-1.548-5.435 0-5.417 4.408-9.825 9.825-9.825 5.418 0 9.825 4.408 9.825 9.825 0 5.418-4.407 9.825-9.825 9.825z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-sky-600 border border-slate-800 hover:border-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-sky-600 border border-slate-800 hover:border-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-sm mb-5 tracking-wider uppercase text-sky-400">
              {isArabic ? 'خدماتنا' : 'Services'}
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-white text-sm mb-5 tracking-wider uppercase text-sky-400">
              {isArabic ? 'روابط سريعة' : 'Navigation'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white text-sm mb-5 tracking-wider uppercase text-sky-400">
              {isArabic ? 'المقر والتواصل' : 'Regional Headquarters'}
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sky-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Al+Khobar+Al+Thuqbah+Eastern+Province+Saudi+Arabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 leading-relaxed transition-colors group flex items-start gap-1"
                  title={isArabic ? 'افتح على خرائط جوجل' : 'Open in Google Maps'}
                >
                  <span>
                    {isArabic ? companyInfo.contact.addressAr : companyInfo.contact.address},{' '}
                    {isArabic ? companyInfo.contact.countryAr : companyInfo.contact.country}
                  </span>
                  <span className="text-xs text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-sky-400 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="text-slate-300 hover:text-sky-400 transition-colors font-medium"
                  dir="ltr"
                >
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`mailto:${companyInfo.contact.email.info}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors text-sm"
                  >
                    {companyInfo.contact.email.info}
                  </a>
                  <a
                    href={`mailto:${companyInfo.contact.email.sales}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-xs"
                  >
                    {companyInfo.contact.email.sales}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Corporate Statutory & Vendor Codes Strip */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-slate-500">{isArabic ? 'السجل التجاري:' : 'CR No:'}</span>
                <span className="font-mono text-slate-200 font-bold">{companyInfo.registrations.crNumber}</span>
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-slate-500">{isArabic ? 'رمز مورد أرامكو:' : 'Aramco Vendor Code:'}</span>
                <span className="font-mono text-sky-400 font-bold">{companyInfo.registrations.aramcoVendorCode}</span>
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-slate-500">{isArabic ? 'رمز مورد مدن:' : 'MODON Code:'}</span>
                <span className="font-mono text-sky-400 font-bold">{companyInfo.registrations.modonVendorCode}</span>
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-slate-500">{isArabic ? 'الرقم الضريبي:' : 'VAT No:'}</span>
                <span className="font-mono text-slate-200 font-bold">{companyInfo.registrations.vatNumber}</span>
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-slate-500">{isArabic ? 'العنوان الوطني:' : 'National Address:'}</span>
                <span className="font-mono text-slate-200 font-bold">{companyInfo.contact.shortAddress}</span>
              </span>
            </div>

            <Link
              href="/about"
              className="text-xs text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>{isArabic ? 'عرض كافة وثائق الاعتماد الرسمية' : 'View All Official Certifications'}</span>
              <span>{isArabic ? '←' : '→'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-[#070b14]">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-start">
            © {currentYear} {isArabic ? companyInfo.nameAr : companyInfo.name}. {isArabic ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-sky-400 transition-colors">
              {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="hover:text-sky-400 transition-colors">
              {isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </Link>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-slate-500 font-mono hidden sm:inline">
              {isArabic ? 'المملكة العربية السعودية • جمهورية مصر العربية' : 'Saudi Arabia • Egypt'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
