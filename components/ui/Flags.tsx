// Inline SVG flags - guaranteed render, no external dependency

export function FlagNigeria({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="300" height="600" fill="#008751" />
      <rect x="300" width="300" height="600" fill="#ffffff" />
      <rect x="600" width="300" height="600" fill="#008751" />
    </svg>
  )
}

export function FlagGhana({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="900" height="200" fill="#006B3F" />
      <rect y="200" width="900" height="200" fill="#FCD116" />
      <rect y="400" width="900" height="200" fill="#CE1126" />
      <polygon points="450,220 468,275 526,275 479,308 497,363 450,330 403,363 421,308 374,275 432,275" fill="#000000" />
    </svg>
  )
}

export function FlagKenya({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="900" height="600" fill="#006600" />
      <rect y="190" width="900" height="220" fill="#000000" />
      <rect y="210" width="900" height="180" fill="#BB0000" />
      {/* Maasai shield */}
      <ellipse cx="450" cy="300" rx="45" ry="90" fill="#ffffff" />
      <ellipse cx="450" cy="300" rx="30" ry="70" fill="#BB0000" />
      <rect x="435" y="210" width="30" height="180" fill="#BB0000" />
      <polygon points="450,195 430,225 470,225" fill="#ffffff" />
      <polygon points="450,405 430,375 470,375" fill="#ffffff" />
      {/* Spears */}
      <line x1="420" y1="180" x2="480" y2="420" stroke="#ffffff" strokeWidth="6" />
      <line x1="480" y1="180" x2="420" y2="420" stroke="#ffffff" strokeWidth="6" />
    </svg>
  )
}

export function FlagSouthAfrica({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="900" height="600" fill="#007A4D" />
      <rect y="200" width="900" height="200" fill="#FFFFFF" />
      <rect y="220" width="900" height="160" fill="#DE3831" />
      {/* Black triangle */}
      <polygon points="0,0 0,600 300,300" fill="#000000" />
      {/* Gold/yellow stripe */}
      <polygon points="0,60 0,540 270,300" fill="#FFB612" />
      {/* White triangle borders */}
      <polygon points="0,0 0,80 310,300 0,520 0,600 340,300" fill="#FFFFFF" />
      {/* Final black triangle */}
      <polygon points="0,0 0,600 300,300" fill="#000000" />
      <polygon points="0,60 0,540 265,300" fill="#FFB612" />
    </svg>
  )
}

export const FRANCHISE_FLAGS: Record<string, React.ComponentType<{ className?: string }>> = {
  ng: FlagNigeria,
  gh: FlagGhana,
  ke: FlagKenya,
  za: FlagSouthAfrica,
}