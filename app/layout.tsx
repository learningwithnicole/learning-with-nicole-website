import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
