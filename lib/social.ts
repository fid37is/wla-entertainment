import { Globe } from 'lucide-react'
import { SiX, SiInstagram, SiLinkerd, SiYoutube } from '@icons-pack/react-simple-icons'
import type { ComponentType } from 'react'

export interface SocialLink {
  label: string
  href: string
  // Simple Icons components and lucide's Globe both accept size/className,
  // so a loose shared shape works for both without fighting either library's types.
  Icon: ComponentType<{ size?: number | string; className?: string }>
}

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
    href: 'https://youtube.com/@wlaentertainment',
    Icon: SiYoutube,
  },
  {
    label: 'Website',
    href: 'https://naijaninja.net',
    Icon: Globe,
  },
]