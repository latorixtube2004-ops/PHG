import type { Metadata } from 'next';
import './globals.css';
import { LocaleProvider } from '@/lib/context/LocaleContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.palmhills-gulf.com'),
  title: {
    default: 'Palm Hills Gulf Company Limited | شركة بالم هيلز جلف المحدودة',
    template: '%s | Palm Hills Gulf',
  },
  description:
    'Premier General Contractor & Civil Engineering Firm. Built on Trust, Focused on Quality. SBC Compliant, Saudi Aramco Approved Vendor (10119967), MODON Approved (6619). Serving mega developments across Saudi Arabia & Egypt with 18+ years heritage.',
  keywords: [
    'Palm Hills Gulf',
    'شركة بالم هيلز جلف المحدودة',
    'Saudi Arabia General Contractor',
    'Saudi Aramco Approved Vendor 10119967',
    'MODON Vendor 6619',
    'Saudi Building Code SBC',
    'Civil Engineering Saudi Arabia',
    'Infrastructure Development Khobar',
    'High-Rise Construction Madinah',
    'مقاولات عامة السعودية',
    'كود البناء السعودي',
    'رؤية السعودية 2030',
  ],
  authors: [{ name: 'Palm Hills Gulf Company Limited' }],
  creator: 'Palm Hills Gulf Company Limited',
  publisher: 'Palm Hills Gulf Company Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://www.palmhills-gulf.com',
    siteName: 'Palm Hills Gulf Company Limited',
    title: 'Palm Hills Gulf - Built on Trust, Focused on Quality',
    description:
      'Premier General Contractor & Civil Engineering Firm. Saudi Aramco Approved (10119967), MODON Approved (6619), SBC Compliant. Delivering iconic projects across Saudi Arabia and Egypt.',
    images: [
      {
        url: '/images/projects/Saudi Arabia/on going/Dar Elhijra Al Madina/HERO.jpg',
        width: 1200,
        height: 630,
        alt: 'Palm Hills Gulf - Iconic Engineering & Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palm Hills Gulf Company Limited',
    description: 'Built on Trust, Focused on Quality • بنيت على الثقة، مركزة على الجودة',
    images: ['/images/projects/Saudi Arabia/on going/Dar Elhijra Al Madina/HERO.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data for Google Knowledge Graph
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'GeneralContractor'],
    name: 'Palm Hills Gulf Company Limited',
    alternateName: 'شركة بالم هيلز جلف المحدودة',
    url: 'https://www.palmhills-gulf.com',
    logo: 'https://www.palmhills-gulf.com/images/company/logo-emblem.png',
    image: 'https://www.palmhills-gulf.com/images/projects/Saudi Arabia/on going/Dar Elhijra Al Madina/HERO.jpg',
    description:
      'Premier General Contractor, Heavy Civil Engineering, Infrastructure, and Turnkey EPC Solutions in Saudi Arabia and Egypt. Saudi Aramco Vendor 10119967, MODON 6619, SBC Compliant.',
    slogan: 'Built on Trust, Focused on Quality • بنيت على الثقة، مركزة على الجودة',
    telephone: '+966 54 709 3809',
    email: 'info@palmhills-gulf.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jeddah Street, Bldg 8367, Ath Thuqbah',
      addressLocality: 'Al Khobar',
      addressRegion: 'Eastern Province',
      postalCode: '34623',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.2750',
      longitude: '50.2083',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Government Vendor Approval',
        name: 'Saudi Aramco Approved Vendor (Code: 10119967)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Industrial Cities Contractor',
        name: 'MODON Approved Contractor (Code: 6619)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Commercial Registration',
        name: 'Ministry of Commerce CR: 7052685323',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/in/palm-hills-gulf-14b771438',
      'https://www.facebook.com/share/1DpXpCe2e8/',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
