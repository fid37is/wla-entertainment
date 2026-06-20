'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggle: () => {},
})

interface BlindState {
  active:    boolean
  retracting: boolean
  direction: 'down' | 'up'
  color:     string
}

function ThemeBlind({ active, retracting, direction, color }: BlindState) {
  if (!active) return null
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        background: color,
        transformOrigin: direction === 'down' ? 'bottom' : 'top',
        transform: `scaleY(${retracting ? 0 : 1})`,
        transition: retracting
          ? 'transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)'
          : 'none',
      }}
    />
  )
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [blind, setBlind] = useState<BlindState>({
    active: false, retracting: false, direction: 'down', color: '#080808',
  })
  const animating = useRef(false)

  useEffect(() => {
    const stored    = localStorage.getItem('wla-theme') as Theme | null
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    const resolved  = stored ?? preferred
    setTheme(resolved)
    document.documentElement.setAttribute('data-theme', resolved)
  }, [])

  const toggle = () => {
    if (animating.current) return
    animating.current = true

    const current       = document.documentElement.getAttribute('data-theme') as Theme ?? 'dark'
    const next          = current === 'dark' ? 'light' : 'dark'
    const outgoingColor = current === 'dark' ? '#080808' : '#f5f4f0'
    const direction     = current === 'dark' ? 'down' : 'up' as 'down' | 'up'

    // Step 1 - slam blind down instantly (no transition)
    setBlind({ active: true, retracting: false, direction, color: outgoingColor })

    // Step 2 - wait for the blind to actually paint at scaleY(1), then swap theme
    // and begin retraction. Two rAF calls ensure the browser has committed a frame.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Swap theme underneath the blind
        document.documentElement.setAttribute('data-theme', next)
        localStorage.setItem('wla-theme', next)
        setTheme(next)

        // Begin retraction - now the transition kicks in
        setBlind(prev => ({ ...prev, retracting: true }))

        // Clean up after animation
        setTimeout(() => {
          setBlind({ active: false, retracting: false, direction, color: outgoingColor })
          animating.current = false
        }, 500)
      })
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
      <ThemeBlind {...blind} />
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}