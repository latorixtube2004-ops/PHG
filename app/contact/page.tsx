'use client';

import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Section, Container } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { companyInfo } from '@/lib/data/company';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { BorderBeam } from '@/components/ui/BorderBeam';

export default function ContactPage() {
  const { locale, isArabic } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setErrorMsg(
          data.error ||
            (isArabic
              ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.'
              : 'Failed to send inquiry. Please try again or reach out directly.')
        );
      }
    } catch {
      setErrorMsg(
        isArabic
          ? 'تعذر الاتصال بالخادم. يرجى المحاولة لاحقاً أو مراسلتنا عبر البريد الإلكتروني مباشرة.'
          : 'Network error. Please try again or contact our team directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                <span>{isArabic ? 'قنوات التواصل المباشر' : 'GET IN TOUCH & REQUEST PROPOSALS'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 text-white tracking-tight leading-tight">
                {isArabic ? 'تواصل مع فريقنا الهندسي' : 'Contact Our Engineering Leadership'}
              </h1>

              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                {isArabic
                  ? 'نحن هنا لمناقشة مواصفات مشروعك، جدوله الزمني، وتقديم عروض أسعار تفصيلية مطابقة لأعلى المعايير.'
                  : "We're here to answer technical inquiries, schedule site surveys, and provide comprehensive commercial tenders."}
              </p>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <AnimatedReveal direction="up" delay={100}>
                <Card className="p-6 md:p-7 hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300 shimmer-sheen group bg-white border border-slate-200/80">
                  <div className="flex gap-4 items-start" dir={isArabic ? 'rtl' : 'ltr'}>
                    <div className="w-12 h-12 glass-icon-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] transition-all">
                      <MapPin size={24} className="text-sky-600 group-hover:text-sky-500 transition-colors" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                        {isArabic ? 'الموقع والمقر الرئيسي' : 'Headquarters'}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm mb-3">
                        {isArabic ? companyInfo.contact.addressAr : companyInfo.contact.address}
                        <br />
                        {isArabic ? companyInfo.contact.countryAr : companyInfo.contact.country}
                      </p>
                      <a
                        href="https://maps.google.com/?q=Al+Khobar+Al+Thuqbah+Eastern+Province+Saudi+Arabia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors"
                      >
                        <span>{isArabic ? 'عرض على خرائط جوجل' : 'Open in Google Maps'}</span>
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>
                </Card>
              </AnimatedReveal>

              {/* Phone & WhatsApp */}
              <AnimatedReveal direction="up" delay={180}>
                <Card className="p-6 md:p-7 hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300 shimmer-sheen group bg-white border border-slate-200/80">
                  <div className="flex gap-4 items-start" dir={isArabic ? 'rtl' : 'ltr'}>
                    <div className="w-12 h-12 glass-icon-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] transition-all">
                      <Phone size={24} className="text-sky-600 group-hover:text-sky-500 transition-colors" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                        {isArabic ? 'الاتصال المباشر والواتساب' : 'Direct Phone & WhatsApp'}
                      </h3>
                      <a
                        href={`tel:${companyInfo.contact.phone}`}
                        className="text-slate-800 font-bold hover:text-accent transition-colors text-base block mb-2"
                        dir="ltr"
                      >
                        {companyInfo.contact.phone}
                      </a>
                      <a
                        href="https://wa.me/966547093809?text=Hello%20Palm%20Hills%20Gulf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/80 text-xs font-bold transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{isArabic ? 'محادثة فورية عبر واتساب' : 'Chat on WhatsApp'}</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </Card>
              </AnimatedReveal>

              {/* Email */}
              <AnimatedReveal direction="up" delay={260}>
                <Card className="p-6 md:p-7 hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-1.5 transition-all duration-300 shimmer-sheen group bg-white border border-slate-200/80">
                  <div className="flex gap-4 items-start" dir={isArabic ? 'rtl' : 'ltr'}>
                    <div className="w-12 h-12 glass-icon-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] transition-all">
                      <Mail size={24} className="text-sky-600 group-hover:text-sky-500 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                        {isArabic ? 'البريد الإلكتروني والمناقصات' : 'Email & Tenders'}
                      </h3>
                      <div className="flex flex-col gap-1">
                        <a
                          href={`mailto:${companyInfo.contact.email.info}`}
                          className="text-slate-700 font-medium hover:text-accent transition-colors text-sm"
                        >
                          {companyInfo.contact.email.info}
                        </a>
                        <a
                          href={`mailto:${companyInfo.contact.email.sales}`}
                          className="text-slate-700 font-medium hover:text-accent transition-colors text-sm"
                        >
                          {companyInfo.contact.email.sales}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedReveal>
            </div>

            {/* Contact Form with BorderBeam */}
            <div className="lg:col-span-2">
              <AnimatedReveal direction="up" delay={150}>
                <Card className="p-8 md:p-12 relative overflow-hidden bg-white border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <BorderBeam size={300} duration={14} colorFrom="#38bdf8" colorTo="#2563eb" />
                  
                  <div className="mb-8" dir={isArabic ? 'rtl' : 'ltr'}>
                    <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 mb-2">
                      {isArabic ? 'أرسل لنا استفسارك أو طلب تسعير' : 'Send an Inquiry or Tender Request'}
                    </h2>
                    <p className="text-slate-500 text-sm">
                      {isArabic
                        ? 'سيقوم فريقنا بالرد على طلبك خلال يوم عمل واحد بتقديم المشورة الفنية الأولية.'
                        : 'Our engineering consultants will review your brief and respond within one business day.'}
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold flex items-center gap-3 animate-fadeInScale">
                      <AlertCircle size={18} className="flex-shrink-0 text-red-500" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {submitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fadeInScale">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-emerald-900 mb-2">
                        {isArabic ? 'تم استلام رسالتك بنجاح!' : 'Message Received Successfully!'}
                      </h3>
                      <p className="text-sm text-emerald-700">
                        {isArabic
                          ? 'شكراً لتواصلك معنا. سيقوم أحد مهندسينا بالتواصل معك قريباً.'
                          : 'Thank you for reaching out. A dedicated technical consultant will contact you shortly.'}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6" dir={isArabic ? 'rtl' : 'ltr'}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                            {isArabic ? 'الاسم الكامل *' : 'Full Name *'}
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all text-sm shadow-xs"
                            placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                            {isArabic ? 'البريد الإلكتروني الرسمي *' : 'Corporate Email *'}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all text-sm shadow-xs"
                            placeholder={isArabic ? 'name@company.com' : 'name@company.com'}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                            {isArabic ? 'رقم الهاتف / الجوال *' : 'Phone Number *'}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all text-sm shadow-xs"
                            placeholder={isArabic ? '+966 5X XXX XXXX' : '+966 5X XXX XXXX'}
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">
                            {isArabic ? 'اسم الشركة أو الجهة' : 'Company / Entity Name'}
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all text-sm shadow-xs"
                            placeholder={isArabic ? 'اسم المنشأة' : 'Organization name'}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                          {isArabic ? 'تفاصيل المشروع أو نطاق العمل *' : 'Project Scope & Requirements *'}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white/70 backdrop-blur-md border border-white/90 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none text-sm leading-relaxed shadow-xs"
                          placeholder={isArabic ? 'صف نطاق المشروع، الموقع، والجدول الزمني المستهدف...' : 'Describe project type, location, estimated timeline, and technical requirements...'}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 liquid-glass-btn-primary font-bold rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 text-base cursor-pointer disabled:opacity-60 disabled:pointer-events-none shimmer-sheen"
                      >
                        <span>
                          {isSubmitting
                            ? (isArabic ? 'جاري الإرسال...' : 'Submitting Request...')
                            : (isArabic ? 'إرسال طلب الاستشارة' : 'Submit Consultation Request')}
                        </span>
                        <Send size={18} className={isArabic ? 'rotate-180' : ''} />
                      </button>
                    </form>
                  )}
                </Card>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}
