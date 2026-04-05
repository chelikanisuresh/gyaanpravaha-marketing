import { MetadataRoute } from 'next'

const BASE_URL = 'https://gyaanpravaha.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/complianceos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/services/rbi-compliance`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/services/los-lms`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/dpdpa`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/credit`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/services/cic`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/training`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/insights/digital-lending-guidelines-nbfc-compliance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/insights/dpdpa-2023-nbfc-compliance-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/insights/21-rbi-circulars-credit-information-nbfc`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
