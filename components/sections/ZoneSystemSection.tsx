import { NNW_ZONES, NNW_SEASON_1 } from '@/lib/constants'

export function ZoneSystemSection() {
  return (
    <section className="px-6 py-20 md:py-24" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col gap-3 md:mb-14 md:max-w-md">
          <p className="eyebrow">Season 1 Format</p>
          <h2 className="font-display font-black" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.2rem)', color: 'var(--text-primary)' }}>
            The Zone System
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            NNW&apos;s national footprint: six geopolitical zones compete in parallel.
            The top {NNW_SEASON_1.advancePerZone} from each zone advance to one Grand Finale in {NNW_SEASON_1.grandFinaleVenue}.
          </p>
        </div>

        {/* Zone nodes → funnel → finale */}
        <div className="flex flex-col items-center">
          <div className="hairline-grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            {NNW_ZONES.map((zone) => (
              <div key={zone} className="hairline-cell px-3 py-5 text-center">
                <span className="font-mono block text-[0.62rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-secondary)' }}>
                  {zone}
                </span>
                <span className="font-display mt-2 block text-2xl font-black md:text-[1.7rem]" style={{ color: 'var(--text-gold)' }}>
                  {NNW_SEASON_1.contestantsPerZone}
                </span>
                <span className="font-mono mt-1.5 block text-[0.56rem] uppercase tracking-[0.04em]" style={{ color: 'var(--text-green)' }}>
                  Top {NNW_SEASON_1.advancePerZone} Advance
                </span>
              </div>
            ))}
          </div>

          <div className="my-2 h-9 w-px" style={{ background: 'var(--line-strong)' }} aria-hidden="true" />

          <div
            className="flex flex-col items-center gap-1 px-10 py-6 text-center"
            style={{ border: '1px solid var(--border-gold)', background: 'var(--bg-gold-tint-2)' }}
          >
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em]" style={{ color: 'var(--text-gold)' }}>
              Grand Finale — {NNW_SEASON_1.grandFinaleVenue}
            </span>
            <span className="font-display text-5xl font-black leading-none" style={{ color: 'var(--text-primary)' }}>
              {NNW_SEASON_1.grandFinaleFinalists}
            </span>
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.08em]" style={{ color: 'var(--text-secondary)' }}>
              Finalists
            </span>
          </div>
        </div>

        {/* Summary row */}
        <div className="hairline-grid mt-10 grid-cols-3">
          {[
            { value: NNW_SEASON_1.zoneCount, label: 'Zones' },
            { value: NNW_SEASON_1.totalContestants, label: 'Total Contestants' },
            { value: NNW_SEASON_1.grandFinaleFinalists, label: 'Grand Finale Slots' },
          ].map((s) => (
            <div key={s.label} className="hairline-cell px-4 py-5 text-center">
              <b className="font-display block text-2xl font-black md:text-[1.8rem]" style={{ color: 'var(--text-primary)' }}>
                {s.value}
              </b>
              <span className="font-mono mt-1 block text-[0.62rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-secondary)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
