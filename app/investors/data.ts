export const REVENUE_STREAMS = [
  { n: '01', title: 'Title Sponsorship', range: 'NGN 80M–100M', note: '1 title sponsor - FMCG or Telco preferred' },
  { n: '02', title: 'Zone Sponsorships', range: 'NGN 90M–150M', note: '6 zones × NGN 15M–25M each' },
  { n: '03', title: 'Official Partners', range: 'NGN 30M–60M', note: '6–10 partners × NGN 5M–12M' },
  { n: '04', title: 'Broadcast & Streaming Rights', range: 'NGN 30M–60M', note: 'TV + streaming - Season 1 target' },
  { n: '05', title: 'Live Event Tickets', range: 'NGN 17.5M–42M', note: '500–1,500 attendees × NGN 5K per zone week' },
  { n: '06', title: 'Digital & Merchandise', range: 'NGN 5M–15M', note: 'Platform, shop, branded content' },
]

export const USE_OF_FUNDS = [
  { label: 'Zonal Course Equipment (Gomeng)', amount: '~NGN 131M', pct: '16%', basis: 'Confirmed PI' },
  { label: 'Grand Finale Course (Gomeng)', amount: '~NGN 73M', pct: '9%', basis: 'Confirmed PI' },
  { label: 'Shipping to Lagos (CFR)', amount: '~NGN 56M', pct: '7%', basis: 'Confirmed PI' },
  { label: 'Port Clearance & Customs', amount: '~NGN 10M', pct: '1%', basis: 'Estimate' },
  { label: 'Solar System - 50kw TANFON', amount: '~NGN 44M', pct: '6%', basis: 'Confirmed Quote' },
  { label: 'Solar Installation (Nigeria)', amount: '~NGN 5M', pct: '1%', basis: 'Confirmed' },
  { label: 'Venue Hire (Full Season)', amount: '~NGN 20M–30M', pct: '3%', basis: 'Estimate' },
  { label: 'Broadcast Production', amount: '~NGN 20M–35M', pct: '4%', basis: 'Estimate' },
  { label: 'Operations & Staffing', amount: '~NGN 30M–55M', pct: '5%', basis: 'Estimate' },
  { label: 'Marketing & Brand', amount: '~NGN 40M–60M', pct: '6%', basis: 'Estimate' },
  { label: 'Technology Platform', amount: '~NGN 30M–45M', pct: '5%', basis: 'Estimate' },
  { label: 'Legal & Compliance', amount: '~NGN 20M–25M', pct: '3%', basis: 'Confirmed Counsel' },
  { label: 'Prize Money Pool', amount: '~NGN 30M–40M', pct: '4%', basis: 'Format Decision' },
  { label: 'Contestant Hotels (Zone Weeks)', amount: '~NGN 10M–20M', pct: '2%', basis: 'Estimate' },
  { label: 'Working Capital Buffer', amount: '~NGN 150M–200M', pct: '22%', basis: 'Contingency' },
]

export const PROJECTIONS = [
  { year: 'Year 1', season: 'NNW Season 1', revenue: 'NGN 267M', costs: 'NGN 800M*', net: '–NGN 533M*', note: '* Reflects Series A deployment - building the asset', highlight: false },
  { year: 'Year 2', season: 'NNW Season 2', revenue: 'NGN 500M', costs: 'NGN 450M', net: '+NGN 50M', note: 'TV deal signed. Cash generative.', highlight: false },
  { year: 'Year 3', season: 'NNW S3 + GNW Ghana', revenue: 'NGN 730M', costs: 'NGN 400M', net: '+NGN 330M', note: 'First franchise edition live.', highlight: true },
  { year: 'Year 4', season: 'NNW S4 + KNW Kenya', revenue: 'NGN 990M', costs: 'NGN 380M', net: '+NGN 610M', note: 'Digital platform monetised.', highlight: true },
  { year: 'Year 5', season: '4 Active Markets', revenue: 'NGN 1.65B+', costs: 'NGN 600M', net: '+NGN 1.05B', note: 'IPO / trade sale preparation.', highlight: true },
]

export const FRANCHISE_MARKETS = [
  { flag: '🇳🇬', code: 'NNW', country: 'Nigeria', year: 'Year 1', model: 'Owned & Operated', status: 'active' },
  { flag: '🇬🇭', code: 'GNW', country: 'Ghana', year: 'Year 3', model: 'Format Fee + Royalties', status: 'pipeline' },
  { flag: '🇰🇪', code: 'KNW', country: 'Kenya', year: 'Year 4', model: 'Format Fee + Royalties', status: 'pipeline' },
  { flag: '🇿🇦', code: 'SANW', country: 'South Africa', year: 'Year 5', model: 'Format Fee + Royalties', status: 'pipeline' },
  { flag: '🌍', code: 'EAW', country: 'East Africa', year: 'Year 5+', model: 'Format Fee + Royalties', status: 'longterm' },
]

export const RISKS = [
  { risk: 'Series A not raised in target timeline', level: 'High', mitigation: 'Commercial Lead targets first sponsor LOI before close. All operational commitments deferred until funding confirmed.' },
  { risk: 'FX exposure on equipment costs (USD)', level: 'Medium', mitigation: 'Working capital buffer of NGN 150M–200M absorbs FX movement of up to 15%. Equipment pricing held pending funding.' },
  { risk: 'Broadcaster deal not secured before Season 1', level: 'Medium', mitigation: 'Season 1 delivers as streaming-first (YouTube + Showmax). TV broadcaster enhances revenue - not a prerequisite for production.' },
  { risk: 'Equipment manufacturing or shipping delays', level: 'Medium', mitigation: '40–50 day production window confirmed. CFR terms - Gomeng bears freight risk. Port delay contingency built in.' },
  { risk: 'Contestant safety incident on course', level: 'High', mitigation: 'Medical Officer required on-site before any run. Liability waivers with Legal Counsel. Gomeng equipment built to international safety standards.' },
  { risk: 'Low contestant registration numbers', level: 'Low', mitigation: '86% survey interest rate from 17+ states with zero paid promotion. Platform live. Marketing Manager hired Month 2.' },
]

export const INVESTMENT_CASE = [
  { title: 'No African-owned format exists', desc: 'Zero obstacle sports formats produced on African soil. Zero African-owned competition IP licensed internationally. The category is entirely uncontested - first-mover advantage is available and finite.' },
  { title: 'A USD 3.5B+ global market with no African player', desc: "American Ninja Warrior alone generates USD 50M+ annually. Every major territory has a version - except Africa. WLA didn't localise a Western show. It built an original format designed to travel." },
  { title: 'Original IP, not a licence fee', desc: "WLA owns the format - the tool selection mechanic, zone competition system, Grand Finale dual-lane structure, and African cultural integration. 100% of licensing revenue stays inside WLA." },
  { title: 'The asset-light franchise model', desc: "The Big Brother / MasterChef model. Local partners provide production, broadcast deal, and sponsors. WLA earns format fees and royalties without operating each territory." },
  { title: 'Nigeria is the proof of concept', desc: "220M people. 67% under 35. 40M+ BBNaija viewers. 22M+ DSTV subscribers. Success here unlocks Ghana, Kenya, South Africa and the full pan-African franchise pipeline." },
  { title: 'Traction before any marketing spend', desc: '100+ organic platform signups. 57 competition survey responses from 17+ states. 86% expressing competition interest. Equipment confirmed via Proforma Invoice. Legal counsel retained.' },
]