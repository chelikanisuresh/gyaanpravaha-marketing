import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = 'https://gyaanpravaha.in'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Gyaan Pravaha | RBI Compliance Advisory | NBFC | SFB | India',
    template: '%s | Gyaan Pravaha'
  },
  description: 'Practitioner-grade BFSI advisory for Banks, NBFCs, and Small Finance Banks — RBI compliance, LOS/LMS technology, DPDPA, CIC, and credit advisory. 25+ years of institutional experience.',
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
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Gyaan Pravaha — BFSI Advisory',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gyaan Pravaha | RBI Compliance Advisory',
    description: 'Practitioner-grade BFSI advisory — RBI compliance, LOS/LMS, DPDPA, CIC. 25+ years experience.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'your-google-verification-code', // Add from Google Search Console
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J14YW1SK3D" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-J14YW1SK3D');`
        }} />
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
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
