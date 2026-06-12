'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WLALogo } from '@/components/ui/logo'
import { FlagNigeria, FlagGhana, FlagKenya, FlagSouthAfrica } from '@/components/ui/Flags'
import { AfricaMap } from '@/components/sections/AfricaMap'
import { COMPANY } from '@/lib/constants'

const TEAM = [
    {
        name: 'Fidelis Agba',
        role: 'Founder & CEO',
        bio: 'Creator of the WLA format and the strategic vision behind Warriors League Africa. Fidelis leads investor relations, format IP development, manufacturer partnerships, and the overall direction of the company.',
        email: COMPANY.email.general,
        photo: '/team/fidelis-agba.jpg' as string | null,
        initials: 'FA',
        founder: true,
    },
    {
        name: 'Operations Manager',
        role: 'Head of Operations',
        bio: 'Owns all venue management, equipment installation coordination, zone logistics, event staffing, and day-to-day operational execution across all six geopolitical zones.',
        email: null,
        photo: null as string | null,
        initials: 'OM',
        founder: false,
    },
    {
        name: 'Legal Counsel',
        role: 'Legal Counsel',
        bio: 'Retained counsel covering format IP protection, investor agreements, sponsorship and broadcasting contracts, employment law, and all regulatory compliance.',
        email: null,
        photo: null as string | null,
        initials: 'LC',
        founder: false,
    },
]

export function AboutContent() {
    return (
        <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
            <Navbar />
            <main>

                {/* Hero */}
                <section className="relative overflow-hidden px-6 pb-16 pt-32">
                    <div
                        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 opacity-40"
                        style={{ background: 'radial-gradient(ellipse, rgba(234,179,8,0.09) 0%, transparent 70%)' }}
                        aria-hidden="true"
                    />
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                            <div>
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                                    About WLA
                                </p>
                                <h1
                                    className="mb-6 font-display font-black leading-tight"
                                    style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: 'var(--text-primary)' }}
                                >
                                    Built to Own Africa&apos;s<br />
                                    <span className="text-gold-gradient">Entertainment Future</span>
                                </h1>
                                <p className="mb-8 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    WLA Entertainment Ltd was incorporated in May 2026 with one mandate: own, produce, and franchise
                                    Africa&apos;s first continental obstacle sports entertainment IP. Not an adaptation of a Western
                                    format - an original African format built to travel.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Strategy', 'Strength', 'Resilience'].map((v) => (
                                        <span
                                            key={v}
                                            className="rounded-full px-4 py-2 text-sm font-bold tracking-wider"
                                            style={{ border: '1px solid var(--border-gold)', color: 'var(--text-gold)' }}
                                        >
                                            {v}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-center relative z-0">
                                <AfricaMap />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Human Question */}
                <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                            Why This Exists
                        </p>
                        <blockquote
                            className="mb-8 font-display font-black italic leading-tight"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text-primary)' }}
                        >
                            &ldquo;What does a person become when they stop believing they can?&rdquo;
                        </blockquote>
                        <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Nigeria Ninja Warrior is built on the answer. Not the Nigerian answer - the human answer. Every person
                            who has ever been told they are too old, too slow, too female, too northern, too southern, too poor -
                            and chose to run anyway - is the audience, the contestant, and the reason this show exists.
                        </p>
                        <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Global distributors do not buy African stories. They buy universal stories that happen to be set in
                            Africa. WLA leads with the human question - the one every viewer in Lagos, London, or the diaspora
                            already knows the answer to - and roots it in something felt everywhere: the cost of proving yourself.
                        </p>
                    </div>
                </section>

                {/* Company */}
                <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                            <div>
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--text-gold)' }}>
                                    The Company
                                </p>
                                <h2 className="mb-6 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                                    What WLA Entertainment Is
                                </h2>
                                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                                    <p className="leading-relaxed">
                                        WLA Entertainment Ltd is a private company limited by shares, registered with Nigeria&apos;s
                                        Corporate Affairs Commission. It is the umbrella entity that owns the Warriors League Africa
                                        format - the competition rules, gameplay mechanics, brand standards, and franchise licensing model.
                                    </p>
                                    <p className="leading-relaxed">
                                        Nigeria Ninja Warrior (NNW) is the first edition of that format, produced and operated directly
                                        by WLA. Every subsequent country franchise - Ghana, Kenya, South Africa - will be licensed to
                                        local partners who produce the show in their territory while WLA earns format fees and royalties.
                                    </p>
                                    <p className="leading-relaxed">
                                        This is the same structural model that made Big Brother, MasterChef, and The Voice into global IP
                                        empires. WLA owns the format. The format scales without proportional cost growth.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div
                                    className="rounded-2xl p-6"
                                    style={{ border: '1px solid var(--border-gold)', background: 'var(--bg-gold-tint)' }}
                                >
                                    <div
                                        className="mb-5 flex items-center gap-4 pb-5"
                                        style={{ borderBottom: '1px solid var(--border-subtle)' }}
                                    >
                                        <WLALogo size={48} rounded="rounded-xl" />
                                        <div>
                                            <p className="font-display text-lg font-black" style={{ color: 'var(--text-primary)' }}>
                                                {COMPANY.name}
                                            </p>
                                            <p className="text-xs font-bold tracking-wider" style={{ color: 'var(--text-gold)' }}>
                                                Warriors League Africa
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-0">
                                        {[
                                            ['RC Number', COMPANY.rc],
                                            ['Company Type', 'Private Company Limited by Shares'],
                                            ['Incorporated', 'May 8, 2026'],
                                            ['Status', 'Active'],
                                            ['Registered With', 'Corporate Affairs Commission, Nigeria'],
                                            ['Address', 'Asaba, Delta State, Nigeria'],
                                        ].map(([label, value]) => (
                                            <div
                                                key={label}
                                                className="flex justify-between gap-4 py-3 text-sm last:border-0"
                                                style={{ borderBottom: '1px solid var(--border-subtle)' }}
                                            >
                                                <span className="flex-shrink-0" style={{ color: 'var(--text-faint)' }}>{label}</span>
                                                <span className="text-right" style={{ color: 'var(--text-primary)' }}>{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className="flex items-center justify-between rounded-xl p-4"
                                    style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">🇳🇬</span>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-gold)' }}>
                                                NNW - Live
                                            </p>
                                            <p className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>
                                                Naija Ninja Warrior
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href={COMPANY.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold text-black"
                                        style={{ background: 'var(--gradient-gold)' }}
                                    >
                                        Visit <ArrowUpRight size={12} />
                                    </a>
                                </div>

                                <div
                                    className="flex items-center gap-3 rounded-xl p-4"
                                    style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}
                                >
                                    <ShieldCheck size={15} className="flex-shrink-0" style={{ color: 'var(--color-gold-deeper)' }} />
                                    <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
                                        CAC Registered · {COMPANY.rc} · Incorporated May 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 text-center">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                                The Team
                            </p>
                            <h2 className="mb-3 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                                Leadership
                            </h2>
                            <p className="mx-auto max-w-xl" style={{ color: 'var(--text-muted)' }}>
                                WLA is founder-led with a lean confirmed team. The company scales deliberately - every hire is made
                                when the role is ready to be filled properly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {TEAM.map((member) => (
                                <div
                                    key={member.name}
                                    className="overflow-hidden rounded-2xl transition-all duration-300"
                                    style={member.founder ? {
                                        border: '1px solid var(--border-gold)',
                                        background: 'var(--bg-gold-tint)',
                                    } : {
                                        border: '1px solid var(--border-subtle)',
                                        background: 'var(--bg-surface)',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = member.founder
                                            ? 'var(--border-gold-strong)'
                                            : 'var(--border-medium)'
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = member.founder
                                            ? 'var(--border-gold)'
                                            : 'var(--border-subtle)'
                                    }}
                                >
                                    <div
                                        className="relative h-72 w-full overflow-hidden"
                                        style={{ background: 'var(--bg-elevated)' }}
                                    >
                                        {member.photo ? (
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="h-full w-full object-cover object-[center_15%]"
                                            />
                                        ) : (
                                            <div
                                                className="flex h-full w-full items-center justify-center font-display text-5xl font-black"
                                                style={member.founder
                                                    ? { background: 'var(--gradient-gold)', color: '#000' }
                                                    : { background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }
                                                }
                                            >
                                                {member.initials}
                                            </div>
                                        )}
                                        <div
                                            className="absolute inset-x-0 bottom-0 h-24"
                                            style={{ background: 'linear-gradient(to top, var(--bg-base), transparent)' }}
                                        />
                                        <div className="absolute bottom-4 left-5">
                                            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-gold)' }}>
                                                {member.role}
                                            </p>
                                            <h3 className="font-display text-lg font-black" style={{ color: 'var(--text-primary)' }}>
                                                {member.name}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                            {member.bio}
                                        </p>
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="inline-flex items-center gap-1.5 text-xs transition"
                                                style={{ color: 'var(--text-muted)' }}
                                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
                                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                                            >
                                                <Mail size={11} className="flex-shrink-0" />
                                                {member.email}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Franchise Network */}
                <section className="py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-12 text-center">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                                The Network
                            </p>
                            <h2 className="mb-3 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                                Continental Expansion Plan
                            </h2>
                            <p className="mx-auto max-w-xl" style={{ color: 'var(--text-muted)' }}>
                                Nigeria proves the concept. The format licenses across Africa - one country at a time.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                        {[
                            { iso: 'ng', Flag: FlagNigeria, code: 'NNW', name: 'Naija Ninja Warrior', status: 'Season 1 · 2026', active: true },
                            { iso: 'gh', Flag: FlagGhana, code: 'GNW', name: 'Ghana Ninja Warrior', status: 'Available for Licensing', active: false },
                            { iso: 'ke', Flag: FlagKenya, code: 'KNW', name: 'Kenya Ninja Warrior', status: 'Available for Licensing', active: false },
                            { iso: 'za', Flag: FlagSouthAfrica, code: 'SANW', name: 'South Africa NW', status: 'Available for Licensing', active: false },
                        ].map((f, i) => (
                            <div
                                key={f.code}
                                className="group relative flex-none overflow-hidden"
                                style={{ width: '25vw', minWidth: '220px', height: '520px' }}
                            >
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                    style={{ filter: f.active ? 'brightness(0.8)' : 'brightness(0.25) saturate(0.3)' }}
                                >
                                    <f.Flag className="h-full w-full" />
                                </div>
                                <div
                                    className="absolute inset-0"
                                    style={{ background: 'linear-gradient(160deg, transparent 30%, rgba(0,0,0,0.88) 70%)' }}
                                />
                                {f.active && (
                                    <div
                                        className="absolute left-0 top-0 h-full w-1"
                                        style={{ background: 'var(--gradient-gold)' }}
                                    />
                                )}
                                <div className="absolute left-5 top-5">
                                    <span
                                        className="font-display text-7xl font-black leading-none"
                                        style={{
                                            color: 'transparent',
                                            WebkitTextStroke: f.active
                                                ? '1px rgba(234,179,8,0.25)'
                                                : '1px rgba(255,255,255,0.08)',
                                        }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                {f.active && (
                                    <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full px-3 py-1.5" style={{ background: 'var(--color-gold)' }}>
                                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
                                        <span className="text-[9px] font-black uppercase tracking-widest text-black">Live</span>
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p
                                        className="mb-1 font-display font-black leading-none"
                                        style={{
                                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                                            color: f.active ? 'var(--color-gold)' : 'rgba(255,255,255,0.35)',
                                            letterSpacing: '-0.02em',
                                        }}
                                    >
                                        {f.code}
                                    </p>
                                    <p className="mb-3 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                        {f.name}
                                    </p>
                                    <div
                                        className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                                        style={f.active ? {
                                            background: 'rgba(234,179,8,0.15)',
                                            color: 'var(--color-gold)',
                                            border: '1px solid rgba(234,179,8,0.3)',
                                        } : {
                                            background: 'rgba(255,255,255,0.05)',
                                            color: 'rgba(255,255,255,0.4)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                        }}
                                    >
                                        {f.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                            Back the founding team
                        </h2>
                        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
                            Series A - NGN 800M is open. The investor who backs WLA at Series A buys the continent&apos;s first
                            obstacle sports IP at its founding price.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/investors"
                                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-black transition-all hover:scale-105"
                                style={{ background: 'var(--gradient-gold)' }}
                            >
                                View Investment Case <ArrowUpRight size={16} />
                            </Link>
                            <a
                                href={`mailto:${COMPANY.email.general}?subject=WLA - Enquiry`}
                                className="flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all"
                                style={{ border: '1px solid var(--border-medium)', color: 'var(--text-primary)' }}
                                onMouseEnter={e => {
                                    ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
                                        ; (e.currentTarget as HTMLElement).style.background = 'var(--bg-surface)'
                                }}
                                onMouseLeave={e => {
                                    ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)'
                                        ; (e.currentTarget as HTMLElement).style.background = 'transparent'
                                }}
                            >
                                Contact Founder
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}