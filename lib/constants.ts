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
    desc: 'Live obstacle competition events produced to broadcast standard and distributed nationally. The event is the product — every zone week, every grand finale.',
  },
  {
    title: 'Media Production',
    desc: 'WLA controls the camera as well as the course. Episode production, highlight packages, and digital content are produced in-house to protect format quality.',
  },
  {
    title: 'Franchise Licensing',
    desc: 'After Nigeria proves the concept, every subsequent country edition is licensed — not operated. WLA earns format fees and royalties without proportional cost growth.',
  },
  {
    title: 'Talent Management',
    desc: 'Athletes who break out on the course become assets. WLA identifies, develops, and represents the competitors who carry the brand beyond the competition season.',
  },
  {
    title: 'Digital Platforms',
    desc: 'naijaninja.net handles registration, results, and fan engagement. The platform is the connective tissue between live events, broadcast episodes, and the continental audience.',
  },
  {
    title: 'Sponsorship Management',
    desc: "Six revenue streams per season — title sponsor, zone sponsors, product placement, broadcast rights, digital rights, and merchandise. WLA manages the full commercial stack.",
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
