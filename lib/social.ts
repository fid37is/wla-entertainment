import { Globe } from 'lucide-react'
import { SiX, SiInstagram, SiLinkerd, SiYoutube } from '@icons-pack/react-simple-icons'
import type { ComponentType, CSSProperties } from 'react'

export interface SocialLink {
  label: string
  href: string
  // Loose shape covering both lucide's Globe and Simple Icons' Si* components -
  // Simple Icons accepts color/style too, which the old lucide-only type didn't
  // declare, causing a TS excess-property error at every <s.Icon style={...} /> call site.
  Icon: ComponentType<{
    size?: number | string
    className?: string
    style?: CSSProperties
    color?: string
  }>
}

// ─── Update hrefs with actual handles when live ───────────────────────────────
// Note: lucide-react removed brand/logo icons (Instagram, Linkedin, Youtube, etc.)
// in v1.0 - they're no longer exported at all. Brand marks now come from Simple
// Icons instead; Globe stays on lucide since it's a generic icon, not a brand mark.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/wlaentertainment',
    Icon: SiX,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/wlaentertainment',
    Icon: SiInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/wla-entertainment',
    Icon: SiLinkerd,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@wla_entertainment',
    Icon: SiYoutube,
  },
  {
    label: 'Website',
    href: 'https://naijaninja.net',
    Icon: Globe,
  },
]