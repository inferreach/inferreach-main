import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import SmoothScroll from '@/components/SmoothScroll'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://inferreach.com'),
  title: {
    default: 'InferReach | Managed Outbound Pods & GTM Data Engineering',
    template: '%s | InferReach',
  },
  description: 'We build custom data pipelines, automate email verification waterfalls, and execute high-touch outbound so your sales team only talks to qualified prospects.',
  keywords: [
    'Managed Outbound Pods',
    'GTM Data Engineering',
    'B2B SaaS',
    'Outsourced SDR',
    'Pipeline Generation',
    'Data Waterfall',
    'Deliverability Protection',
    'CRM Cleanup',
    'Salesforce Enrichment'
  ],
  authors: [{ name: 'Prajwol Raj Giri', url: 'https://inferreach.com' }],
  creator: 'InferReach',
  publisher: 'InferReach',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inferreach.com',
    title: 'InferReach | Managed Outbound & Data Engineering',
    description: 'Stop letting messy CRM data and deliverability issues kill your pipeline. We build the data infrastructure and run the outbound for you.',
    siteName: 'InferReach',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'InferReach - Managed Outbound Pods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InferReach | Managed Outbound & Data Engineering',
    description: 'Custom data pipelines and managed outbound for B2B SaaS. We book meetings directly on your AEs calendars.',
    images: ['/og-image.png'],
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
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `https://inferreach.com/#website`,
      url: 'https://inferreach.com',
      name: 'InferReach',
      description: 'Managed Outbound Pods & GTM Data Engineering for B2B SaaS',
      publisher: { '@id': `https://inferreach.com/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `https://inferreach.com/#organization`,
      name: 'InferReach',
      url: 'https://inferreach.com',
      logo: {
        '@type': 'ImageObject',
        url: `https://inferreach.com/icon.png`,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hello@inferreach.com',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <div className="grain" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}