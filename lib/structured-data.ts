import { FIRM } from './constants'

export function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['AccountingService', 'ProfessionalService', 'LocalBusiness'],
    name: FIRM.name,
    description:
      'Chartered Accountancy firm offering audit, income tax, GST, company law, accounting, and advisory services.',
    url: `https://${FIRM.domain}`,
    telephone: FIRM.phone,
    email: FIRM.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: FIRM.address.line1,
      addressRegion: FIRM.address.state,
      postalCode: FIRM.address.pin,
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Ambikapur' },
      { '@type': 'AdministrativeArea', name: 'Surguja' },
      { '@type': 'State', name: 'Chhattisgarh' },
    ],
    // ICAI compliance: no rating/review schema is included.
  }
}
