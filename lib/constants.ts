// ─── Franchise data ───────────────────────────────────────────────────────────
export type FranchiseStatus = 'live' | 'coming'

export interface Franchise {
  code: string
  name: string
  country: string
  flag: string
  status: FranchiseStatus
  desc: string
  url: string | null
}

export const FRANCHISES: Franchise[] = [
  {
    code: 'NNW',
    name: 'Naija Ninja Warrior',
    country: 'Nigeria',
    flag: '🇳🇬',
    status: 'live',
    desc: "The flagship franchise. Africa's first ninja warrior competition series - running nationwide across all six geopolitical zones.",
    url: 'https://naijaninja.net',
  },
  {
    code: 'GNW',
    name: 'Ghana Ninja Warrior',
    country: 'Ghana',
    flag: '🇬🇭',
    status: 'coming',
    desc: 'The West African expansion. Coming soon under the WLA continental franchise model.',
    url: null,
  },
  {
    code: 'KNW',
    name: 'Kenya Ninja Warrior',
    country: 'Kenya',
    flag: '🇰🇪',
    status: 'coming',
    desc: "East Africa's entry into the WLA warrior league network.",
    url: null,
  },
  {
    code: 'SNW',
    name: 'South Africa Ninja Warrior',
    country: 'South Africa',
    flag: '🇿🇦',
    status: 'coming',
    desc: "Southern Africa's warrior competition - the next chapter in WLA's continental expansion.",
    url: null,
  },
]

// ─── Business pillars ─────────────────────────────────────────────────────────
export interface Pillar {
  title: string
  desc: string
}

export const PILLARS: Pillar[] = [
  {
    title: 'Sports Entertainment',
    desc: 'Live competition events broadcast nationally and streamed across Africa.',
  },
  {
    title: 'Media Production',
    desc: 'In-house content production for broadcast, streaming, and digital platforms.',
  },
  {
    title: 'Franchise Licensing',
    desc: 'A scalable regional franchise model built for continental expansion.',
  },
  {
    title: 'Talent Management',
    desc: "Developing and representing Africa's next generation of elite athletes.",
  },
  {
    title: 'Digital Platforms',
    desc: 'Technology infrastructure connecting competitors, audiences, and partners.',
  },
  {
    title: 'Sponsorship Management',
    desc: "Connecting Africa's top brands with millions of engaged viewers.",
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '220M+', label: 'Nigerian audience' },
  { value: '₦800M', label: 'Series A target' },
  { value: '6', label: 'Zones - Season 1' },
  { value: '4+', label: 'Planned franchises' },
]

// ─── Company info ─────────────────────────────────────────────────────────────
export const COMPANY = {
  name: 'WLA Entertainment Ltd',
  rc: 'RC No. 9529867',
  incorporated: 'May 8, 2026',
  address: 'Flat 7, Progress House, Oduke, Asaba, Delta State, Nigeria',
  email: {
    general: 'legal@naijaninja.net',
    support: 'support@naijaninja.net',
    founder: 'fidelis@naijaninja.net',
  },
  phone: '+234 808 595 2266',
  phoneHref: 'tel:+2348085952266',
  website: 'https://naijaninja.net',
}

// ─── Legal info ───────────────────────────────────────────────────────────────
export const LEGAL_DETAILS = [
  ['RC Number', 'RC No. 9529867'],
  ['Company Type', 'Private Company Limited by Shares'],
  ['Date of Incorporation', 'May 8, 2026'],
  ['Status', 'Active'],
  ['Registered with', 'Corporate Affairs Commission, Nigeria'],
  ['Principal Activity', 'Sports Entertainment, Broadcasting, Franchise Licensing'],
] as const
