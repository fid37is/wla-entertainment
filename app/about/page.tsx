import type { Metadata } from 'next'
import { AboutContent } from '@/components/sections/AboutContent'

export const metadata: Metadata = {
  title: 'About WLA Entertainment Ltd - Warriors League Africa',
  description:
    "WLA Entertainment Ltd - incorporated May 2026. The company behind Warriors League Africa, Africa's first continental obstacle sports franchise network.",
}

export default function AboutPage() {
  return <AboutContent />
}