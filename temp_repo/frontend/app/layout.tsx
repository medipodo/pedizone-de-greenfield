import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'PediZone.de - Ihr Ratgeber für Fußgesundheit',
    template: '%s | PediZone.de'
  },
  description: 'Umfassende Informationen über Fußgesundheit, Fußpilz, Behandlung und Prävention. Ihr vertrauenswürdiger Ratgeber für gesunde Füße.',
  keywords: ['Fußpilz', 'Fußgesundheit', 'Tinea pedis', 'Fußpflege', 'Behandlung', 'Prävention'],
  authors: [{ name: 'PediZone.de' }],
  creator: 'PediZone.de',
  metadataBase: new URL('https://pedizone.de'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://pedizone.de',
    siteName: 'PediZone.de',
    title: 'PediZone.de - Ihr Ratgeber für Fußgesundheit',
    description: 'Umfassende Informationen über Fußgesundheit, Fußpilz, Behandlung und Prävention.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pedizone.de',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-white text-medical-800">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
