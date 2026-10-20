import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import SmoothScroll from '@/components/SmoothScroll'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

// 1. THE DOMAIN BASE (Critical for OpenGraph images and Canonical URLs)
const baseUrl = 'https://inferreach.com'

// 2. COMPREHENSIVE SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'InferReach | GTM Data Engineering for B2B SaaS',
    template: '%s | InferReach',
  },
  description: 'We turn messy CRM data into a clean, automated revenue engine. GTM Data Engineering for Seed to Series A B2B SaaS teams. Outsource your SDR/BDR and clean your Salesforce/HubSpot.',
  keywords: [
    'GTM Data Engineering',
    'B2B SaaS',
    'CRM Data Cleanup',
    'Salesforce Data Enrichment',
    'HubSpot RevOps',
    'Outsourced SDR',
    'Outsourced BDR',
    'Revenue Operations',
    'Data Pipeline for Startups'
  ],
  authors: [{ name: 'Prajwol Raj Giri', url: 'https://inferreach.com' }],
  creator: 'InferReach',
  publisher: 'InferReach',
  alternates: {
    canonical: '/',
  },
  
  // EXPLICIT FAVICON CONFIGURATION (Fixes Google Search Icon)
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'InferReach | GTM Data Engineering',
    description: 'Stop letting messy CRM data kill your Series A pipeline. We clean up your data and can replace your SDR/BDR team.',
    siteName: 'InferReach',
    images: [
      {
        url: '/og-image.png', // MAKE SURE THIS IMAGE EXISTS IN YOUR /public FOLDER
        width: 1200,
        height: 630,
        alt: 'InferReach - GTM Data Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InferReach | GTM Data Engineering',
    description: 'We clean up your CRM data and can replace your SDR/BDR team.',
    images: ['/og-image.png'], // MAKE SURE THIS IMAGE EXISTS IN YOUR /public FOLDER
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

// 3. VIEWPORT (Prevents mobile layout shifts)
export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// 4. STRUCTURED DATA (JSON-LD) FOR RICH RESULTS
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'InferReach',
      description: 'GTM Data Engineering for B2B SaaS',
      publisher: { '@id': `${baseUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'InferReach',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.png`,
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