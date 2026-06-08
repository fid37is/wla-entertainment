import { ArrowUpRight, Bell } from 'lucide-react'

const FRANCHISE_CHANNELS = [
  {
    code: 'NNW',
    name: 'Naija Ninja Warrior',
    country: 'Nigeria',
    flag: '🇳🇬',
    status: 'live' as const,
    desc: 'Live competition dates, zone results, contestant registrations, and Season 1 highlights.',
    links: [
      { label: 'naijaninja.net', href: 'https://naijaninja.net' },
      { label: 'Register to Compete', href: 'https://naijaninja.net/register' },
      { label: 'Investor Portal', href: 'https://investors.naijaninja.net' },
    ],
  },
  {
    code: 'GNW',
    name: 'Ghana Ninja Warrior',
    country: 'Ghana',
    flag: '🇬🇭',
    status: 'available' as const,
    desc: 'West Africa franchise. Available for licensing to a local production partner.',
    links: [],
  },
  {
    code: 'KNW',
    name: 'Kenya Ninja Warrior',
    country: 'Kenya',
    flag: '🇰🇪',
    status: 'available' as const,
    desc: 'East Africa franchise. Available for licensing to a local production partner.',
    links: [],
  },
]

export function FranchiseUpdatesSection() {
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Stay Connected</p>
            <h2 className="font-display font-black leading-tight text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Follow the Franchises
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gray-500">
            WLA is the parent company. Each franchise runs its own platform where fans, contestants, and sponsors get live updates.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {FRANCHISE_CHANNELS.map((f) => {
            const isLive = f.status === 'live'
            return (
              <div
                key={f.code}
                className={`rounded-2xl border p-6 transition-all ${
                  isLive ? 'border-yellow-500/30 bg-yellow-500/[0.03]' : 'border-white/8 bg-white/[0.02]'
                }`}
              >
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{f.flag}</span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-500">{f.code}</p>
                      <p className="font-display font-bold text-white">{f.name}</p>
                    </div>
                  </div>
                  {isLive ? (
                    <span className="flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-1 text-[10px] font-bold text-yellow-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />
                      Live
                    </span>
                  ) : (
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold text-gray-500">
                      Available for Licensing
                    </span>
                  )}
                </div>

                <p className="mb-5 text-sm leading-relaxed text-gray-500">{f.desc}</p>

                {isLive && f.links.length > 0 ? (
                  <div className="space-y-2">
                    {f.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.03] px-4 py-2.5 text-sm font-bold text-gray-300 transition hover:border-yellow-500/25 hover:text-yellow-400"
                      >
                        {link.label}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                ) : !isLive ? (
                  <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3">
                    <Bell size={13} className="text-gray-700" />
                    <span className="text-xs text-gray-600">
                      Enquire via <a href="mailto:legal@naijaninja.net" className="text-yellow-700 hover:text-yellow-500 transition-colors">legal@naijaninja.net</a>
                    </span>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        <div className="mt-8 rounded-xl border border-white/5 bg-white/[0.01] px-6 py-4">
          <p className="text-xs leading-relaxed text-gray-600">
            <span className="font-bold text-gray-500">WLA platform note -</span>{' '}
            Competition schedules, live results, contestant registration, and episode highlights live on each franchise&apos;s own platform. Follow{' '}
            <a href="https://naijaninja.net" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-400 transition-colors">
              naijaninja.net
            </a>{' '}
            for all NNW Season 1 activity.
          </p>
        </div>

      </div>
    </section>
  )
}