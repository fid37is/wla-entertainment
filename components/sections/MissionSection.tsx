export function MissionSection() {
  return (
    <section className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Who We Are</p>
          <h2 className="font-display font-black leading-tight text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Why WLA Exists
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Mission */}
          <div className="lg:col-span-2 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.03] p-8 md:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">Mission</p>
            <h3 className="mb-5 font-display text-2xl font-black text-white md:text-3xl">
              African athletes deserve a continental stage that belongs to them.
            </h3>
            <p className="leading-relaxed text-gray-400">
              We are not here to bring ninja warrior to Africa. We are here to build something Africa owns. A format created on this continent, protecting its IP in this continent, licensing its brand across this continent - and eventually beyond. The mission is simple: build the infrastructure that makes African athletic excellence impossible to ignore on the world stage.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">Vision</p>
            <h3 className="mb-5 font-display text-xl font-black text-white">
              The day a continent has one champion.
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              When Nigeria&apos;s best walks onto the Warriors Champions League course alongside Ghana&apos;s best, Kenya&apos;s best, South Africa&apos;s best - that is the moment we are building toward. One title. One continent. Under a format we own.
            </p>
          </div>

          {/* Three values */}
          {[
            {
              value: 'Strategy',
              desc: 'We built the format before we pitched it. We registered the company before we raised money. Every decision here is made in the right order.',
            },
            {
              value: 'Strength',
              desc: 'The athletes who compete on this course are genuine. The production that captures them will be broadcast-quality. We do not move the standard.',
            },
            {
              value: 'Resilience',
              desc: 'We are building this in Nigeria - one of the hardest operating environments on earth. If the model works here, it works anywhere on the continent.',
            },
          ].map((v) => (
            <div key={v.value} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all hover:border-yellow-500/20">
              <div className="mb-3 h-px w-8 bg-yellow-500" />
              <h4 className="mb-2 font-display text-lg font-black text-white">{v.value}</h4>
              <p className="text-sm leading-relaxed text-gray-500">{v.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}