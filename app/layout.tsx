import type { Metadata } from 'next'
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { FIRM } from '@/lib/constants'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(`https://${FIRM.domain}`),
  title: {
    default: `${FIRM.name} — Chartered Accountants, Ambikapur`,
    template: `%s | ${FIRM.name}`,
  },
  description:
    `${FIRM.name} is a Chartered Accountancy firm based in Ambikapur, Chhattisgarh, ` +
    'offering audit, income tax, GST, company law, accounting, and advisory services.',
  keywords: [
    'chartered accountant',
    'CA firm',
    'Ambikapur',
    'Surguja',
    'Chhattisgarh',
    'audit',
    'income tax',
    'GST',
    'company registration',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `https://${FIRM.domain}`,
    siteName: FIRM.name,
    title: `${FIRM.name} — Chartered Accountants, Ambikapur`,
    description:
      `${FIRM.name} — Chartered Accountancy firm in Ambikapur, Chhattisgarh. ` +
      'Audit, tax, GST, company law, and advisory services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://${FIRM.domain}`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-paper text-slate-text">
        {children}
      </body>
    </html>
  )
}
