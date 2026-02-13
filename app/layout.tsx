import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script';
import { contact } from './content/contact';

// Structured data for Google
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": contact.company.name,
  "description": "Start your childcare career with our accredited online diploma. Gain the skills and knowledge to work with children in home-based care, early years education, and more.",
  "url": "https://learningwithnicole.com",
  "offers": {
    "@type": "Offer",
    "category": "Online Course",
    "name": "Online Diploma in Childcare"
  }
};

export const metadata: Metadata = {
  title: `${contact.service.name} | Online Diploma in Childcare`,
  description: 'Start your childcare career with our accredited online diploma. Gain the skills and knowledge to work with children in home-based care, early years education, and more.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: `${contact.service.name} | Online Diploma in Childcare`,
    description: 'Start your childcare career with our accredited online diploma. Gain the skills and knowledge to work with children in home-based care, early years education, and more.',
  },
  twitter: {
    card: 'summary',
    title: `${contact.service.name} | Online Diploma in Childcare`,
    description: 'Start your childcare career with our accredited online diploma. Gain the skills and knowledge to work with children in home-based care, early years education, and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Google Analytics Global Site Tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-R251H38D8J"
        strategy="afterInteractive" // Loads after the page becomes interactive
      />

      {/* Google Analytics Initialization */}
      <Script
        id="google-analytics-init" // Unique ID for the inline script
        strategy="afterInteractive" // Loads after the page becomes interactive
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R251H38D8J');
          `,
        }}
      />
      {/* JSON-LD structured data for SEO */}
      <Script
        id="ld-json-site"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <body>{children}</body>
    </html>
  )
}
