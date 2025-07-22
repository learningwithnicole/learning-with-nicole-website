import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Learning with Nicole | Online Diploma in Childcare',
  description: 'Achieve your career goals in childcare with our accredited online diploma. Our comprehensive courses provide the knowledge and skills needed to work with children in various settings, from home-based care to early years education.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
