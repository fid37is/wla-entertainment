# WLA Entertainment Ltd — Warriors League Africa

Official web presence for WLA Entertainment Ltd, the parent company of the Warriors League Africa franchise network.

**Live franchise:** [naijaninja.net](https://naijaninja.net) (Naija Ninja Warrior — Nigeria)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Fonts | Playfair Display (headings) + DM Sans (body) |
| Deployment | Vercel (recommended) |

---

## Project Structure

```
wla-entertainment/
├── app/
│   ├── layout.tsx          # Root layout + metadata + fonts
│   ├── page.tsx            # Home page (/)
│   ├── globals.css         # Global styles + Tailwind imports
│   ├── not-found.tsx       # Custom 404 page
│   ├── privacy/
│   │   └── page.tsx        # Privacy Policy (/privacy)
│   └── terms/
│       └── page.tsx        # Terms & Conditions (/terms)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with mobile menu
│   │   └── Footer.tsx      # Footer with links and legal info
│   ├── sections/
│   │   ├── HeroSection.tsx     # Animated hero
│   │   ├── AboutSection.tsx    # About + stats
│   │   ├── FranchisesSection.tsx # Franchise network cards
│   │   ├── BusinessSection.tsx  # Business pillars
│   │   ├── InvestorsSection.tsx # Series A CTA
│   │   └── ContactSection.tsx  # Contact + legal card
│   └── ui/
│       └── index.tsx       # Shared primitives (GoldButton, GlassCard, etc.)
├── lib/
│   ├── constants.ts        # All data: franchises, pillars, stats, company info
│   └── utils.ts            # cn() utility for className merging
└── public/                 # Static assets (add wla-logo.png here)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Logo / Assets

Add your WLA logo at `public/wla-logo.png`. Referenced in Navbar, Footer, and Contact section.

---

## Pages

| Route | Description |
|---|---|
| `/` | Main landing page |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |

---

## Deployment (Vercel)

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

---

## Company

**WLA Entertainment Ltd** · RC No. 9529867  
Incorporated May 2026 · Asaba, Delta State, Nigeria  
[legal@naijaninja.net](mailto:legal@naijaninja.net)
