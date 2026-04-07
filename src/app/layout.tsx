import type { Metadata } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


const BASE_URL = 'https://gyaanpravaha.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Gyaan Pravaha | RBI Compliance Advisory | NBFC | SFB | India',
    template: '%s | Gyaan Pravaha'
  },
  description: 'Practitioner-grade RBI compliance & BFSI advisory for Banks, NBFCs, and SFBs. LOS/LMS, DPDPA, CIC advisory. 25+ years institutional experience. Mumbai.',
  keywords: [
    'RBI compliance advisory India',
    'NBFC regulatory compliance',
    'RBI Master Directions NBFC',
    'Small Finance Bank compliance',
    'LOS LMS technology advisory',
    'DPDPA compliance India',
    'Digital Lending Guidelines RBI',
    'KYC AML compliance NBFC',
    'Credit Information Companies CICRA',
    'RBI inspection readiness',
    'HFC compliance advisory',
    'NBFC compliance consultant India',
    'RBI circular compliance mapping',
    'ComplianceOS NBFC software',
    'Gyaan Pravaha',
    'Suresh Chelikani',
    'Piramal Finance DPO',
    'BFSI consultant Mumbai',
  ],
  authors: [{ name: 'Chelikani Veera Venkata Suresh Babu', url: BASE_URL }],
  creator: 'Chelikani Veera Venkata Suresh Babu',
  publisher: 'Gyaan Pravaha',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Gyaan Pravaha',
    title: 'Gyaan Pravaha | RBI Compliance Advisory for NBFCs & SFBs',
    description: 'Practitioner-grade advisory for Banks, NBFCs, and Small Finance Banks across RBI compliance, LOS/LMS technology, DPDPA, CIC, and credit. 25+ years of hands-on institutional experience.',

  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gyaan Pravaha | RBI Compliance Advisory',
    description: 'Practitioner-grade BFSI advisory — RBI compliance, LOS/LMS, DPDPA, CIC. 25+ years experience.',

  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'agxzHe9Co9U-gBdTbKuHZ4IDpL2wvBjrKNexBYjNno0',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Gyaan Pravaha" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* Structured Data — Person */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Chelikani Veera Venkata Suresh Babu',
          jobTitle: 'Independent BFSI Advisor',
          description: 'Senior BFSI advisor with 25+ years of experience in RBI compliance, LOS/LMS technology, DPDPA, and CIC advisory.',
          url: BASE_URL,
          sameAs: ['https://linkedin.com/in/sureshchelikani'],
          address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
          worksFor: { '@type': 'Organization', name: 'Gyaan Pravaha' },
          knowsAbout: ['RBI Compliance', 'NBFC Regulatory', 'LOS LMS Technology', 'DPDPA', 'Credit Information Companies', 'Digital Lending', 'KYC AML'],
        })}} />
        {/* Structured Data — Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Gyaan Pravaha',
          url: BASE_URL,
          logo: `${BASE_URL}/logo.svg`,
          description: 'Practitioner-grade BFSI advisory for Banks, NBFCs, and Small Finance Banks',
          address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
          telephone: '+91-9833823262',
          email: 'thornleyadvisoryservices@gmail.com',
          sameAs: ['https://linkedin.com/in/sureshchelikani'],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Advisory Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RBI Regulatory Compliance Advisory' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LOS/LMS Technology Advisory' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DPDPA Compliance Advisory' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CIC Advisory' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Credit & Institutional Advisory' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Training' } },
            ]
          }
        })}} />
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J14YW1SK3D" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-J14YW1SK3D');`
        }} />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
