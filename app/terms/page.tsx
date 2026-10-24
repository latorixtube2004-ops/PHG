'use client';

import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { Section, Container } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FileCheck, Shield, Scale, Building, HardHat, AlertCircle, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { useLocale } from '@/lib/context/LocaleContext';
import { companyInfo } from '@/lib/data/company';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { BorderBeam } from '@/components/ui/BorderBeam';

export default function TermsAndConditionsPage() {
  const { isArabic } = useLocale();

  const sections = [
    {
      icon: Scale,
      title: isArabic ? '١. قبول الشروط والأحكام' : '1. Acceptance of Terms',
      content: isArabic
        ? `باستخدامك أو تصفحك لهذا الموقع الإلكتروني التابع لشركة بالم هيلز جلف المحدودة (شركة ذات مسؤولية محدودة مسجلة في المملكة العربية السعودية)، فإنك توافق التام وغير المشروط على الالتزام بجميع بنود هذه الشروط والأحكام وجميع القوانين والأنظمة المعمول بها في المملكة العربية السعودية وجمهورية مصر العربية. إذا كنت لا توافق على هذه الشروط، يرجى التوقف عن استخدام الموقع فوراً.`
        : `By accessing, browsing, or utilizing the digital platform of Palm Hills Gulf Company Limited (a Limited Liability Company registered in the Kingdom of Saudi Arabia), you unequivocally agree to be bound by these Terms & Conditions and all applicable statutory laws in the Kingdom of Saudi Arabia and the Arab Republic of Egypt. If you do not accept these terms, you must discontinue your use of this platform immediately.`,
    },
    {
      icon: HardHat,
      title: isArabic ? '٢. الخدمات الهندسية وأعمال المقاولات' : '2. Engineering & Contracting Services',
      content: isArabic
        ? `تقدم شركة بالم هيلز جلف المحدودة خدمات مقاولات مدنية متكاملة، وبنية تحتية، وأعمال الميكانيكا والكهرباء والسباكة (MEP)، وتشطيبات فاخرة. تخضع جميع الأعمال التنفيذية والعقود الهندسية لاتفاقيات وملاحق تعاقدية مستقلة موقعة بين الأطراف المعنية، مع التزام صارم بكود البناء السعودي (SBC) ومواصفات السلامة المهنية المعتمدة.`
        : `Palm Hills Gulf Company Limited provides integrated civil engineering, infrastructure, mechanical, electrical, plumbing (MEP), and high-end finishing services. All physical execution and commercial construction commitments are governed exclusively by executed formal contracts, schedules of rates, and engineering task orders, executed in strict accordance with the Saudi Building Code (SBC) and occupational safety standards.`,
    },
    {
      icon: Shield,
      title: isArabic ? '٣. حقوق الملكية الفكرية' : '3. Intellectual Property Rights',
      content: isArabic
        ? `جميع المحتويات المنشورة على هذا الموقع، بما في ذلك على سبيل المثال لا الحصر: الشعار، الهوية البصرية، النصوص، التصاميم الهندسية، صور ومقاطع الفيديو الخاصة بالمشاريع المنفذة أو قيد التنفيذ، والبيانات الفنية، هي ملكية حصرية لشركة بالم هيلز جلف المحدودة ومحمية بموجب أنظمة حماية حقوق المؤلف والعلامات التجارية في المملكة العربية السعودية والاتفاقيات الدولية. يُحظر تماماً نسخ أو إعادة نشر أو استغلال أي مادة دون إذن كتابي مسبق.`
        : `All content featured on this platform—including brand trademarks, corporate identities, technical documentation, architectural drawings, photography of completed and ongoing projects, and digital assets—constitutes the exclusive intellectual property of Palm Hills Gulf Company Limited, protected under Saudi trademark and copyright laws and international conventions. Any unauthorized reproduction, retransmission, or commercial exploitation without prior written consent is strictly prohibited.`,
    },
    {
      icon: Building,
      title: isArabic ? '٤. المناقصات والعروض والتقديرات المالية' : '4. Tenders, Proposals & Estimates',
      content: isArabic
        ? `أي معلومات، أو تقديرات أولية، أو مواصفات معروضة على الموقع هي لأغراض إعلامية وتوضيحية فقط، ولا تشكل عرضاً ملزماً قانوناً أو تعاقدياً ما لم يتم تأكيد ذلك في خطاب رسمي أو عقد معتمد وموقع ومختوم من المفوضين بالتوقيع في الشركة.`
        : `Any preliminary estimates, project overviews, or capability descriptions presented on this website are provided solely for informational and exploratory guidance. They do not constitute binding commercial offers, tenders, or legal commitments unless explicitly incorporated into a formal contract countersigned by authorized corporate signatories of Palm Hills Gulf Company Limited.`,
    },
    {
      icon: FileCheck,
      title: isArabic ? '٥. الامتثال التنظيمي وكود البناء السعودي (SBC)' : '5. Regulatory Compliance & SBC Standards',
      content: isArabic
        ? `تلتزم الشركة في جميع مشروعاتها بتطبيق أعلى معايير الجودة والاستدامة والأنظمة المعمارية المعتمدة من الجهات المختصة في المملكة، ومن ذلك كود البناء السعودي الصادر عن اللجنة الوطنية لكود البناء السعودي، وتوجيهات السلامة والدفاع المدني، وبلديات وأمانات المناطق.`
        : `The Company executes all engineering operations in total alignment with statutory engineering frameworks authorized within the Kingdom, including the Saudi Building Code (SBC) issued by the Saudi Building Code National Committee (SBCNC), Civil Defense directives, and regional municipal building standards.`,
    },
    {
      icon: AlertCircle,
      title: isArabic ? '٦. حدود المسؤولية وإخلاء الضمانات' : '6. Limitation of Liability',
      content: isArabic
        ? `يتم توفير الموقع ومحتوياته "كما هو" و"حسب توفره". تبذل الشركة قصارى جهدها لضمان دقة المعلومات وحداثتها، إلا أنها لا تقدم أي ضمانات صريحة أو ضمنية بخصوص خلو الموقع من الأخطاء غير المقصودة أو الانقطاعات المؤقتة. لا تتحمل الشركة أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام أو عدم القدرة على استخدام الموقع.`
        : `This platform and its materials are provided on an "as is" and "as available" basis. While Palm Hills Gulf endeavors to maintain accurate and up-to-date engineering records, we disclaim all warranties, express or implied, regarding uninterrupted uptime or inadvertent errors. The Company shall not be liable for any direct, indirect, or consequential damages resulting from the use or inability to use this digital interface.`,
    },
    {
      icon: Scale,
      title: isArabic ? '٧. القانون الحاكم والاختصاص القضائي' : '7. Governing Law & Jurisdiction',
      content: isArabic
        ? `تخضع هذه الشروط والأحكام وتفسر وتطبق وفقاً للأنظمة واللوائح المعمول بها في المملكة العربية السعودية. تختص المحاكم المختصة في المنطقة الشرقية (الخبر / الدمام) بالفصل الحصري في أي نزاع ينشأ عن أو يتعلق بهذه الشروط أو استخدام هذا الموقع.`
        : `These Terms & Conditions shall be governed by, construed, and enforced in accordance with the substantive laws and judicial procedures of the Kingdom of Saudi Arabia. Any dispute arising out of or related to these terms shall fall under the exclusive jurisdiction of the competent courts of the Eastern Province (Al Khobar / Dammam), Kingdom of Saudi Arabia.`,
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
                <span>{isArabic ? 'إطار تنظيمي وقانوني معتمد' : 'Corporate & Legal Governance'}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 text-white tracking-tight">
                {isArabic ? 'الشروط والأحكام العامة' : 'Corporate Terms & Conditions'}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
                {isArabic
                  ? 'القواعد الحاكمة لاستخدام المنصات الرقمية لشركة بالم هيلز جلف المحدودة والتعاملات التعاقدية العامة.'
                  : 'The official terms governing the use of Palm Hills Gulf Company Limited digital services and general corporate operations.'}
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

            {/* Legal Department Contact with BorderBeam */}
            <AnimatedReveal direction="up" delay={200}>
              <Card className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-[#0b1120] text-white border border-sky-400/20 shadow-2xl">
                <BorderBeam size={280} duration={14} colorFrom="#38bdf8" colorTo="#2563eb" />
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">
                    {isArabic ? 'الاستفسارات القانونية والتعاقدية' : 'Legal & Contractual Inquiries'}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                    {isArabic
                      ? 'لأي استفسارات قانونية أو أسئلة حول الشروط والأحكام أو المشاريع المشتركة، يرجى التواصل مع إدارتنا القانونية والتنفيذية:'
                      : 'For legal notices, contract administration, or corporate governance inquiries, please reach out to our legal department:'}
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
                      <span>{isArabic ? 'اتصل بنا للمشاريع والعقود' : 'Contact Us for Projects & Tenders'}</span>
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
