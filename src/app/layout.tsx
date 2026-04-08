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
        {/* Schema.org — Person: Chelikani Veera Venkata Suresh Babu */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': `${BASE_URL}/#person`,
          name: 'Chelikani Veera Venkata Suresh Babu',
          alternateName: ['Suresh Babu', 'Suresh Chelikani', 'C V V Suresh Babu'],
          jobTitle: 'Founder & Independent BFSI Advisor',
          description: 'Senior BFSI practitioner with 25+ years of hands-on experience across India\'s leading banks and NBFCs. Former EVP at Piramal Finance and DVP at Axis Bank. Expert in RBI regulatory compliance, DPDPA, LOS/LMS technology, CIC advisory, and digital lending.',
          url: `${BASE_URL}/about`,
          image: `${BASE_URL}/suresh-headshot.jpg`,
          email: 'suresh@gyaanpravaha.com',
          telephone: '+91-9833823262',
          sameAs: [
            'https://linkedin.com/in/sureshchelikani',
            'https://gyaanpravaha.com',
            'https://gyaanpravaha.com/about',
            'https://www.wikidata.org/wiki/Q139005899',
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '501, Pelican Building, Hiranandani Estate',
            addressLocality: 'Thane',
            addressRegion: 'Maharashtra',
            postalCode: '400607',
            addressCountry: 'IN'
          },
          worksFor: {
            '@type': 'Organization',
            name: 'Thornley Advisory Services Private Limited',
            '@id': `${BASE_URL}/#organization`,
          },
          alumniOf: [
            { '@type': 'Organization', name: 'Piramal Finance', description: 'Executive Vice President — Head Automation, Securitisation & DPO' },
            { '@type': 'Organization', name: 'Axis Bank', description: 'Deputy Vice President — Credit Policy & Process Re-Engineering' },
            { '@type': 'Organization', name: 'HDFC Bank', description: 'Executive — Retail Lending & Operations' },
            { '@type': 'Organization', name: 'Reliance Capital', description: 'Manager — Credit & Risk' },
            { '@type': 'Organization', name: 'SREI BNP Paribas', description: 'Senior Manager — Equipment Finance & Credit' },
          ],
          knowsAbout: [
            'RBI Regulatory Compliance',
            'NBFC Scale-Based Regulation',
            'Digital Personal Data Protection Act 2023',
            'Loan Origination System',
            'Loan Management System',
            'Credit Information Companies',
            'CICRA 2005',
            'KYC AML CFT',
            'Securitisation',
            'Digital Lending Guidelines',
            'NPA Classification',
            'Credit Risk Management',
          ],
          hasCredential: [
            { '@type': 'EducationalOccupationalCredential', name: 'CPD Certified Data Protection Officer', credentialCategory: 'Professional Certification' },
            { '@type': 'EducationalOccupationalCredential', name: 'FCRF Certified Data Protection Officer', credentialCategory: 'Professional Certification' },
            { '@type': 'EducationalOccupationalCredential', name: 'FCRF Certified Cyber Law Practitioner', credentialCategory: 'Professional Certification' },
            { '@type': 'EducationalOccupationalCredential', name: 'GRC Professional', credentialCategory: 'Professional Certification' },
          ],
        })}} />

        {/* Schema.org — Organization: Thornley Advisory Services */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['Organization', 'ProfessionalService'],
          '@id': `${BASE_URL}/#organization`,
          name: 'Thornley Advisory Services Private Limited',
          alternateName: ['Gyaan Pravaha', 'Thornley Advisory'],
          legalName: 'Thornley Advisory Services Private Limited',
          url: BASE_URL,
          logo: `${BASE_URL}/favicon.svg`,
          image: `${BASE_URL}/og-image.png`,
          description: 'Thane-based compliance and regulatory advisory firm serving India\'s BFSI sector. Specialises in RBI Regulatory Compliance, DPDPA 2023, LOS/LMS Technology Advisory, Credit Consulting, and CIC/CICRA frameworks. CIN: U70200MH2026PTC468366.',
          foundingDate: '2026',
          identifier: {
            '@type': 'PropertyValue',
            name: 'CIN',
            value: 'U70200MH2026PTC468366'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '501, Pelican Building, Hiranandani Estate',
            addressLocality: 'Thane',
            addressRegion: 'Maharashtra',
            postalCode: '400607',
            addressCountry: 'IN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '19.2403',
            longitude: '72.9795'
          },
          telephone: '+91-9833823262',
          email: 'suresh@gyaanpravaha.com',
          founder: {
            '@type': 'Person',
            '@id': `${BASE_URL}/#person`,
            name: 'Chelikani Veera Venkata Suresh Babu',
          },
          employee: {
            '@type': 'Person',
            '@id': `${BASE_URL}/#person`,
            name: 'Chelikani Veera Venkata Suresh Babu',
          },
          areaServed: {
            '@type': 'Country',
            name: 'India'
          },
          sameAs: [
            'https://linkedin.com/in/sureshchelikani',
            'https://gyaanpravaha.com',
            'https://www.wikidata.org/wiki/Q139005690',
            'https://www.linkedin.com/company/thornley-advisory-services',
          ],
          knowsAbout: [
            'RBI Regulatory Compliance',
            'NBFC Advisory',
            'Digital Personal Data Protection Act 2023',
            'Loan Origination System Advisory',
            'Credit Information Companies',
            'CICRA 2005',
            'Digital Lending Guidelines',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'BFSI Advisory Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RBI Regulatory Compliance Advisory', provider: { '@id': `${BASE_URL}/#organization` } } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LOS/LMS Technology Advisory', provider: { '@id': `${BASE_URL}/#organization` } } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DPDPA 2023 Compliance Advisory', provider: { '@id': `${BASE_URL}/#organization` } } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CIC Advisory — CICRA 2005', provider: { '@id': `${BASE_URL}/#organization` } } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Credit & Institutional Consulting', provider: { '@id': `${BASE_URL}/#organization` } } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Training for BFSI', provider: { '@id': `${BASE_URL}/#organization` } } },
            ]
          },
          makesOffer: [
            { '@type': 'Offer', itemOffered: {
              '@type': 'SoftwareApplication',
              name: 'ComplianceOS',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              url: `${BASE_URL}/complianceos`,
              description: 'RBI compliance management platform for Banks, NBFCs, SFBs and HFCs — 731+ mapped obligations, regulatory calendar, and circular tracking.',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', description: 'Contact for pricing' }
            }},
            { '@type': 'Offer', itemOffered: {
              '@type': 'SoftwareApplication',
              name: 'Gyaan Pravaha Learning',
              applicationCategory: 'EducationalApplication',
              operatingSystem: 'Web',
              url: `${BASE_URL}/learning`,
              description: 'Online compliance training platform for BFSI professionals — RBI, DPDPA, Digital Lending, KYC/AML, CIC courses with certificates.',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', description: 'Contact for pricing' }
            }},
          ]
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
