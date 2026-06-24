// ─── Firm details ────────────────────────────────────────────────────────────
// Replace placeholders before deploying.

export const FIRM = {
  name: 'Santosh Singh & Co.',
  type: 'Chartered Accountants',
  frn: '[FRN_PLACEHOLDER]',           // e.g. "015283C"
  phone: '[PHONE_PLACEHOLDER]',       // e.g. "+91 98765 43210"
  email: 'info@santoshsinghco.com',
  domain: 'santoshsinghco.com',
  address: {
    line1: 'Ambikapur',
    line2: 'District Surguja',
    state: 'Chhattisgarh',
    pin: '497001',
    country: 'India',
  },
  officeHours: [
    { day: 'Monday – Friday', hours: '10:30 AM – 6:30 PM' },
    { day: 'Saturday',        hours: '10:30 AM – 3:00 PM' },
    { day: 'Sunday',          hours: 'Closed' },
  ],
  appointmentNote: 'Visits are by appointment.',
} as const

// ─── Partners ────────────────────────────────────────────────────────────────
// Add or remove partner objects to match the actual number of partners.
// Keep all fields factual; do not add superlatives or achievements.

export type Partner = {
  name: string
  designation: string
  membershipNo: string
  qualifications: string[]
  practiceAreas: string
  /** Path to a real photo, or null to display the placeholder avatar */
  photo: string | null
}

export const PARTNERS: Partner[] = [
  {
    name: '[PARTNER_1_NAME]',
    designation: 'Chartered Accountant',
    membershipNo: '[PARTNER_1_MEMBERSHIP_NO]',
    qualifications: ['[PARTNER_1_QUALIFICATIONS]'],  // e.g. ['B.Com', 'FCA']
    practiceAreas: '[PARTNER_1_AREAS]',              // e.g. 'Audit and direct tax.'
    photo: null,
  },
  {
    name: '[PARTNER_2_NAME]',
    designation: 'Chartered Accountant',
    membershipNo: '[PARTNER_2_MEMBERSHIP_NO]',
    qualifications: ['[PARTNER_2_QUALIFICATIONS]'],
    practiceAreas: '[PARTNER_2_AREAS]',
    photo: null,
  },
]

// ─── Services ────────────────────────────────────────────────────────────────

export type Service = {
  title: string
  description: string
  items: string[]
}

export const SERVICES: Service[] = [
  {
    title: 'Audit & Assurance',
    description:
      'Independent examination of financial records to provide assurance on accuracy and compliance.',
    items: ['Statutory audit', 'Tax audit', 'Internal audit', 'Bank audit'],
  },
  {
    title: 'Income Tax',
    description:
      'Assistance with income tax obligations for individuals, firms, and companies.',
    items: [
      'Return filing',
      'Assessment representation',
      'TDS compliance',
      'Tax planning',
    ],
  },
  {
    title: 'GST',
    description:
      'End-to-end support for Goods and Services Tax compliance.',
    items: [
      'Registration',
      'Return filing',
      'Reconciliation',
      'Notice handling',
    ],
  },
  {
    title: 'Company & ROC Matters',
    description:
      'Regulatory compliance for companies and limited liability partnerships.',
    items: [
      'Incorporation',
      'Annual filings',
      'Secretarial compliance',
      'ROC returns',
    ],
  },
  {
    title: 'Accounting & Book-keeping',
    description:
      'Maintenance of financial records and preparation of financial statements.',
    items: [
      'Book-keeping',
      'Accounts finalisation',
      'Financial statements',
      'MIS reports',
    ],
  },
  {
    title: 'Advisory',
    description:
      'Guidance on business structure, regulatory requirements, and financial matters.',
    items: [
      'Business structure',
      'Regulatory guidance',
      'Financial advisory',
      'Compliance review',
    ],
  },
]

// ─── Approach steps ───────────────────────────────────────────────────────────

export const APPROACH_STEPS = [
  {
    step: '01',
    title: 'Understand',
    body:
      'We begin by understanding the client\'s business, obligations, and objectives — taking the time to examine all relevant facts before forming a view.',
  },
  {
    step: '02',
    title: 'Execute',
    body:
      'We carry out the engagement methodically — applying applicable standards, regulations, and professional judgement to deliver accurate, timely work.',
  },
  {
    step: '03',
    title: 'Maintain',
    body:
      'We support clients through changes in law, filings, and ongoing compliance — keeping records and obligations current throughout the year.',
  },
]
