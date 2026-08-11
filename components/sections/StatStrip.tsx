import { STATS } from '@/lib/constants'

export function StatStrip() {
  return (
    <div style={{ background: 'var(--color-green)' }}>
      <div
        className="mx-auto grid max-w-[1240px] grid-cols-2 md:grid-cols-4"
        style={{ gap: '1px', background: 'rgba(254,254,245,0.18)' }}
      >
        {STATS.map((s) => (
          <div key={s.label} className="px-4 py-6 md:px-7 md:py-8" style={{ background: 'var(--color-green)' }}>
            <b className="font-display block text-[1.9rem] font-black leading-none md:text-[2.4rem]" style={{ color: '#FEFEF5' }}>
              {s.value}
            </b>
            <span className="font-mono mt-1 block text-[0.62rem] uppercase tracking-[0.06em]" style={{ color: 'rgba(254,254,245,0.8)' }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
