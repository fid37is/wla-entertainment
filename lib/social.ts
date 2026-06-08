import { X, Globe, Hash, Link2, Play } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SocialLink {
  label: string
  href: string
  Icon: LucideIcon
}

// ─── Update hrefs with actual handles when live ───────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/wlaentertainment',
    Icon: X,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/wlaentertainment',
    Icon: Hash,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/wla-entertainment',
    Icon: Link2,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@wlaentertainment',
    Icon: Play,
  },
  {
    label: 'Website',
    href: 'https://naijaninja.net',
    Icon: Globe,
  },
]