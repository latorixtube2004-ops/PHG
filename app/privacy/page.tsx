'use client';

import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { Section, Container } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { useLocale } from '@/lib/context/LocaleContext';
import { companyInfo } from '@/lib/data/company';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { BorderBeam } from '@/components/ui/BorderBeam';

export default function PrivacyPolicyPage() {
  const { isArabic } = useLocale();

  const sections = [
    {
      icon: ShieldCheck,
      title: isArabic ? '١. المقدمة ونطاق العمل' : '1. Introduction & Scope',
      content: isArabic
        ? `تلتزم شركة بالم هيلز جلف المحدودة (المشار إليها بـ "الشركة" أو "نحن") بحماية خصوصية وأمان بياناتك الشخصية والتجارية. تنطبق سياسة الخصوصية هذه على جميع زوار موقعنا الإلكتروني، وعملائنا، وشركائنا، ومقاولينا في المملكة العربية السعودية وجمهورية مصر العربية. تم إعداد هذه السياسة وفقاً لنظام حماية البيانات الشخصية السعودي (PDPL) والمعايير التنظيمية ذات الصلة.`
        : `Palm Hills Gulf Company Limited ("the Company", "we", "us", or "our") is dedicated to safeguarding the privacy and security of your personal and corporate information. This Privacy Policy applies to all visitors, clients, partners, and subcontractors interacting with our website and digital services across the Kingdom of Saudi Arabia and Egypt. This policy complies with the Saudi Personal Data Protection Law (PDPL) and applicable regulatory standards.`,
    },
    {
      icon: Eye,
      title: isArabic ? '٢. البيانات التي نجمعها' : '2. Information We Collect',
      content: isArabic
        ? `نقوم بجمع البيانات الضرورية لتقديم خدماتنا الهندسية والتنفيذية بكفاءة عالية، بما في ذلك:
• معلومات الهوية والتواصل: الاسم الكامل، المسمى الوظيفي، اسم الشركة أو الجهة، عنوان البريد الإلكتروني، ورقم الهاتف.
• بيانات المشاريع والمناقصات: متطلبات المشاريع، المخططات الهندسية الأولية، الموقع الجغرافي، وجداول الكميات المقدمة عبر نماذج التواصل.
• البيانات التقنية وبيانات التصفح: عنوان بروتوكول الإنترنت (IP)، نوع المتصفح، الصفحات المزارة، ومدة الزيارة لأغراض تحسين الأداء والأمان.`
        : `We collect information necessary to provide and manage our engineering, contracting, and development services:
• Identity & Contact Information: Full name, job title, company name, corporate email address, and contact telephone number.
• Project & Tender Inquiries: Project specifications, preliminary engineering drawings, geographical location, and bill of quantities submitted via our inquiry forms.
• Technical & Usage Data: IP address, browser type, pages visited, and session duration gathered to ensure website performance, security, and optimization.`,
    },
    {
      icon: FileText,
      title: isArabic ? '٣. كيفية استخدام البيانات' : '3. How We Use Your Information',
      content: isArabic
        ? `نستخدم بياناتك للأغراض المشروعة التالية:
• الرد على الاستفسارات الفنية والتجارية وتقديم عروض الأسعار والدراسات الهندسية.
• إدارة وتنفيذ العقود والمشاريع الإنشائية وفق كود البناء السعودي (SBC).
• التنسيق مع الاستشاريين والموردين المعتمدين لتنفيذ متطلبات المشاريع بدقة.
• الامتثال للالتزامات القانونية والأنظمة المعمول بها في المملكة العربية السعودية ومصر.
• تحسين تجربة التصفح وتطوير منصاتنا الرقمية.`
        : `We process your data strictly for legitimate business and engineering operations:
• Responding to technical inquiries, preparing formal tenders, and issuing engineering project proposals.
• Executing and administering construction and infrastructure contracts in adherence to the Saudi Building Code (SBC).
• Coordinating with approved engineering consultants, project owners, and suppliers for seamless site delivery.
• Complying with regulatory obligations under Saudi Arabian and Egyptian law.
• Enhancing user experience, optimizing site reliability, and preventing fraudulent or unauthorized access.`,
    },
    {
      icon: Lock,
      title: isArabic ? '٤. حماية البيانات والأمان' : '4. Data Protection & Security',
      content: isArabic
        ? `نطبق تدابير أمنية تقنية وتنظيمية متقدمة لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو التعديل أو الإفصاح. يشمل ذلك استخدام بروتوكولات التشفير المعتمدة (SSL/TLS)، وتقييد الوصول إلى البيانات الحساسة على الموظفين المصرح لهم فقط، واستضافة البيانات على خوادم آمنة تخضع للمراجعة الدورية.`
        : `We implement robust technical and organizational security protocols to protect your personal and commercial data against unauthorized access, loss, alteration, or disclosure. This includes end-to-end SSL/TLS encryption, restricted access control limited to authorized personnel, and hosting on enterprise-grade secure infrastructure subject to routine security audits.`,
    },
    {
      icon: CheckCircle2,
      title: isArabic ? '٥. مشاركة البيانات مع أطراف ثالثة' : '5. Third-Party Disclosures',
      content: isArabic
        ? `نحن لا نبيع ولا نؤجر بياناتك الشخصية لأي طرف ثالث. يجوز لنا مشاركة البيانات فقط في الحالات التالية:
• الجهات الحكومية والتنظيمية الرسمية عند طلب ذلك نظاماً وفق القوانين واللوائح المعمول بها.
• الشركاء الهندسيين ومقدمي الخدمات السحابية واللوجستية الموثوقين الخاضعين لاتفاقيات سرية وحماية بيانات صارمة.`
        : `We do not sell, rent, or trade your personal or corporate information. Disclosures may occur only in the following specific circumstances:
• Government, municipal, and regulatory authorities when legally mandated under Saudi or Egyptian statutory law.
• Trusted engineering partners, cloud hosting providers, and logistical contractors bound by strict data confidentiality agreements.`,
    },
    {
      icon: ShieldCheck,
      title: isArabic ? '٦. حقوقك النظامية (وفق نظام PDPL)' : '6. Your Rights Under Saudi PDPL',
      content: isArabic
        ? `بموجب نظام حماية البيانات الشخصية في المملكة العربية السعودية، يحق لك:
• حق العلم: معرفة الأساس النظامي والغرض من جمع بياناتك الشخصية.
• حق الوصول: طلب نسخة من بياناتك الشخصية المحفوظة لدينا.
• حق التصحيح: طلب تحديث أو تصحيح أي بيانات غير دقيقة أو غير مكتملة.
• حق الإتلاف: طلب مسح أو إتلاف بياناتك متى ما انتهى الغرض منها، ما لم تقتضِ الأنظمة والالتزامات التعاقدية الاحتفاظ بها.`
        : `Under the Saudi Personal Data Protection Law (PDPL) and international privacy frameworks, you retain the following rights:
• Right to Information: Knowledge of the legal basis and explicit purpose of data collection.
• Right of Access: Requesting a copy of your personal data processed by our systems.
• Right to Rectification: Requesting correction or updating of incomplete or inaccurate records.
• Right to Destruction: Requesting deletion of data when the primary business purpose concludes, subject to statutory retention mandates.`,
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
                <span>{isArabic ? 'نظام حماية البيانات الشخصية (PDPL) معتمد' : 'Saudi PDPL & Regulatory Compliant'}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 text-white tracking-tight">
                {isArabic ? 'سياسة الخصوصية وأمن البيانات' : 'Privacy & Data Governance Policy'}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
                {isArabic
                  ? 'التزامنا بحماية أمان بيانات عملائنا وشركائنا وخصوصيتهم وفق أعلى المعايير التنظيمية بالمملكة العربية السعودية.'
                  : 'Our unwavering commitment to protecting the data, confidentiality, and privacy of our clients and partners across the Gulf.'}
              </p>
              <div className="mt-4 text-xs text-sky-300/80 font-mono">
                {isArabic ? 'آخر تحديث معتمد: ٢٠٢٦' : 'Latest Regulatory Update: 2026'}
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Main Content */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8" dir={isArabic ? 'rtl' : 'ltr'}>
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <AnimatedReveal key={idx} direction="up" delay={idx * 70}>
                  <Card className="p-6 md:p-8 hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300 bg-white border border-slate-200/80 shimmer-sheen group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl glass-icon-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(2,132,199,0.35)] transition-all">
                        <Icon size={24} className="text-sky-600 group-hover:text-sky-500 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                          {section.title}
                        </h2>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedReveal>
              );
            })}

            {/* Contact Data Protection Section with BorderBeam */}
            <AnimatedReveal direction="up" delay={200}>
              <Card className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-[#0b1120] text-white border border-sky-400/20 shadow-2xl">
                <BorderBeam size={280} duration={14} colorFrom="#38bdf8" colorTo="#2563eb" />
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">
                    {isArabic ? 'التواصل بشأن حماية البيانات والخصوصية' : 'Contact Our Data Protection Officer'}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                    {isArabic
                      ? 'إذا كان لديك أي استفسار أو طلب يتعلق ببياناتك الشخصية أو ممارسة حقوقك النظامية، يسعدنا تواصلك مع فريقنا المختص:'
                      : 'If you have questions, inquiries, or wish to exercise your rights regarding data privacy, please contact our legal and privacy team:'}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 text-xs md:text-sm">
                    <a
                      href={`mailto:${companyInfo.contact.email.info}`}
                      className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-sky-500/30 hover:border-sky-400/50 backdrop-blur-sm transition-all flex flex-col items-center gap-1.5 border border-slate-700/80 hover:scale-105"
                    >
                      <Mail size={18} className="text-sky-400" />
                      <span className="font-semibold">{companyInfo.contact.email.info}</span>
                    </a>
                    <a
                      href="tel:+966547093809"
                      className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-sky-500/30 hover:border-sky-400/50 backdrop-blur-sm transition-all flex flex-col items-center gap-1.5 border border-slate-700/80 hover:scale-105"
                    >
                      <Phone size={18} className="text-sky-400" />
                      <span dir="ltr" className="font-semibold">+966 54 709 3809</span>
                    </a>
                    <div className="p-3.5 rounded-xl bg-slate-800/80 flex flex-col items-center gap-1.5 border border-slate-700/80">
                      <MapPin size={18} className="text-sky-400" />
                      <span className="font-semibold text-center">
                        {isArabic ? companyInfo.contact.addressAr : companyInfo.contact.address}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 flex justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3 glass-btn-blue text-white font-bold rounded-xl transition-all text-sm hover:scale-105 active:scale-95 shadow-lg shimmer-sheen"
                    >
                      <span>{isArabic ? 'الانتقال إلى صفحة التواصل' : 'Visit Contact Page'}</span>
                    </Link>
                  </div>
                </div>
              </Card>
            </AnimatedReveal>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}
