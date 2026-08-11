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
    name: 'Nigeria Next Warrior',
    country: 'Nigeria',
    flag: '🇳🇬',
    status: 'live',
    desc: "The flagship franchise. Africa's first Next Warrior competition series - running nationwide across all six geopolitical zones.",
    url: 'https://naijaninja.net',
  },
  {
    code: 'GNW',
    name: 'Ghana Next Warrior',
    country: 'Ghana',
    flag: '🇬🇭',
    status: 'coming',
    desc: 'The West African expansion. Coming soon under the WLA continental franchise model.',
    url: null,
  },
  {
    code: 'KNW',
    name: 'Kenya Next Warrior',
    country: 'Kenya',
    flag: '🇰🇪',
    status: 'coming',
    desc: "East Africa's entry into the WLA warrior league network.",
    url: null,
  },
  {
    code: 'SNW',
    name: 'South Africa Next Warrior',
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
    desc: 'We produce live obstacle competition to broadcast standard and distribute it nationally. The event is the product - every zone week, every grand finale.',
  },
  {
    title: 'Media Production',
    desc: 'We control the camera as well as the course. Episode production, highlight packages, and digital content are made in-house, so format quality is never someone else\u2019s call.',
  },
  {
    title: 'Franchise Licensing',
    desc: 'Once Nigeria proves the concept, we license every subsequent country edition rather than operate it - earning format fees and royalties without proportional cost growth.',
  },
  {
    title: 'Talent Management',
    desc: 'Athletes who break out on the course become assets. We identify, develop, and represent the competitors who carry the brand beyond the season.',
  },
  {
    title: 'Digital Platforms',
    desc: 'naijaninja.net is where we run registration, results, and fan engagement - the connective tissue between live events, broadcast episodes, and the continental audience.',
  },
  {
    title: 'Sponsorship Management',
    desc: 'Six revenue streams per season - title sponsor, zone sponsors, product placement, broadcast rights, digital rights, and merchandise. We manage the full commercial stack.',
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '220M+', label: 'Nigerian audience' },
  { value: '₦800M', label: 'Series A target' },
  { value: '6', label: 'Zones - Season 1' },
  { value: '4+', label: 'Planned franchises' },
]

// ─── NNW Season 1 zone structure ───────────────────────────────────────────────
// 6 geopolitical zones × 30 contestants, top 3 per zone advance to the Grand
// Finale (18 finalists) in FCT Abuja.
export const NNW_ZONES = [
  'North West', 'North East', 'North Central',
  'South West', 'South East', 'South South',
] as const

export const NNW_SEASON_1 = {
  zoneCount: 6,
  contestantsPerZone: "XX",
  totalContestants: "XXX",
  advancePerZone: "X",
  grandFinaleFinalists: "xx",
  grandFinaleVenue: 'FCT Abuja',
}

// ─── Company info ─────────────────────────────────────────────────────────────
export const COMPANY = {
  name: 'WLA Entertainment Ltd',
  rc: 'RC No. 9529867',
  incorporated: 'May 8, 2026',
  address: 'Flat 7, Progress House, Oduke, Asaba, Delta State, Nigeria',
  email: {
    general: 'hello@warriorsleague.africa',
    investors: 'investors@warriorsleague.africa',
    founder: 'fidelis@warriorsleague.africa',
    support: 'support@naijaninja.net', // NNW-specific (competition/registration support), left as-is
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