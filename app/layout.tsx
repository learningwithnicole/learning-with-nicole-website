import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Learning with Nicole | Online Diploma in Childcare',
  description: 'Start your childcare career with our accredited online diploma. Gain the skills and knowledge to work with children in home-based care, early years education, and more.',
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
      <body>{children}</body>
    </html>
  )
}
