'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail, X } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WLALogo } from '@/components/ui/logo'
import { AfricaMap } from '@/components/sections/AfricaMap'
import { COMPANY } from '@/lib/constants'

// ─── Types ──────────────────────────────────────────────────────────────────

interface TribeMember {
  name: string
  role: string
  credentials: string
  bio: string
  photo: string | null
  initials: string
  isFounder: boolean
}

// ─── Data ────────────────────────────────────────────────────────────────────

const THE_TRIBE: TribeMember[] = [
  // ── Founder (rendered separately above the grid)
  {
    name: 'Fidelis Agba',
    role: 'Founder & CEO',
    credentials: 'B.Sc. Computer Science · University of Calabar · Senior Technical Product Manager',
    bio: 'Created the Warriors League Africa format, registered the company, confirmed the equipment supplier, and opened the Series A - before hiring a single person or taking a single investor meeting. Product builder with 10+ years shipping SaaS platforms across B2B, B2C, and creator economy verticals.',
    photo: '/team/fidelis-agba.jpg',
    initials: 'FA',
    isFounder: true,
  },
  // ── Core
  {
    name: 'Otogo Linus',
    role: 'Operations Manager',
    credentials: '[Qualification] · [Institution]',
    bio: 'Owns all venue management, equipment installation coordination, zone logistics, event staffing, and day-to-day operational execution across all six geopolitical zones.',
    photo: null,
    initials: 'OL',
    isFounder: false,
  },
  {
    name: 'Peace George',
    role: 'Investment Lead',
    credentials: 'B.L (First Class) · Nigerian Law School · LL.B, Babcock University',
    bio: "Lawyer specialising in corporate and commercial law with a focus on finance, technology, and data analytics. Brings legal rigour and data-driven analysis to WLA's investor relations, term sheet management, and Series A pipeline.",
    photo: '/team/peace-george.jpg',
    initials: 'PG',
    isFounder: false,
  },
  {
    name: 'Ejiba Tochi',
    role: 'Legal Counsel',
    credentials: '[Qualification] · [Institution]',
    bio: 'Retained counsel covering format IP protection, investor agreements, sponsorship and broadcasting contracts, employment law, and all regulatory compliance.',
    photo: null,
    initials: 'ET',
    isFounder: false,
  },
  {
    name: 'Oluwatosin Aloba',
    role: 'Commercial Lead',
    credentials: 'B.Eng. Electrical & Electronics Engineering · FUNAAB · PGD Technology Management, NCTM',
    bio: "Electrical engineer and technical sales strategist with 10+ years in Africa's energy sector. Closed a $1.14M integrated energy contract at CCETC. Manages WLA's full sponsorship stack across title, zone, broadcast, and merchandise partnerships.",
    photo: '/team/oluwatosin-aloba.jpg',
    initials: 'OA',
    isFounder: false,
  },
  // ── Extended
  {
    name: 'Jude-Hyacinth John Ekene',
    role: 'GD / Social Media Manager',
    credentials: 'B.Eng. Mechanical Engineering · Federal University of Technology Owerri',
    bio: 'Graphic designer and community manager with experience across brand identity, social media content, and audience growth. Built NNW pitch graphics and the Facebook community pre-funding.',
    photo: '/team/jude-hyacinth-john-ekene.jpg',
    initials: 'JE',
    isFounder: false,
  },
  {
    name: 'OSato Iyawe',
    role: 'Script Writer',
    credentials: 'B.Sc. Biotechnology · Ekiti State University · EbonyLife Creative Academy · TAFTA Academy',
    bio: "Creative writer and storyteller trained at EbonyLife Creative Academy and TAFTA. Lead writer on HUSH, winner of Best Student Film at the Coal City Film Festival. Drove early NNW audience growth across Twitter and Instagram.",
    photo: '/team/osato-iyawe.jpg',
    initials: 'OI',
    isFounder: false,
  },
  {
    name: 'Mercy Odule',
    role: 'Contestant & Zone Coordinator',
    credentials: '[Qualification] · [Institution]',
    bio: 'Manages contestant pipelines and zone-level coordination across all six geopolitical zones. Led early NNW audience growth on TikTok pre-funding.',
    photo: '/team/mercy-odule.jpg',
    initials: 'MO',
    isFounder: false,
  },
  {
    name: 'Cyril Obiorah',
    role: 'Tech Lead',
    credentials: '[Qualification] · [Institution]',
    bio: 'Leads all technology infrastructure across the WLA ecosystem - platform development, digital operations, and technical architecture supporting production and broadcast.',
    photo: null,
    initials: 'CO',
    isFounder: false,
  },
]

const COMPANY_ROWS: [string, string][] = [
  ['RC Number',       'RC No. 9529867'],
  ['Company Type',    'Private Company Limited by Shares'],
  ['Incorporated',    'May 8, 2026'],
  ['Status',          'Active'],
  ['Registered With', 'Corporate Affairs Commission, Nigeria'],
  ['Address',         'Asaba, Delta State, Nigeria'],
]

// ─── Tribe Card ───────────────────────────────────────────────────────────────
// Same photo dimensions as before (aspectRatio 3/4, maxHeight 320px).
// Text zone now shows ONLY role + name. Click opens the bottom sheet.

function TribeCard({ member, onOpen }: { member: TribeMember; onOpen: (m: TribeMember) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(member)}
      className="flex flex-col overflow-hidden rounded-2xl text-left transition-colors"
      style={{
        border: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface)',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)' }}
    >
      {/* Photo zone - unchanged dimensions */}
      <div
        className="relative w-full flex-shrink-0 overflow-hidden"
        style={{ aspectRatio: '3 / 4', maxHeight: '320px' }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center font-display font-black select-none"
            style={{
              background: 'var(--bg-elevated)',
              fontSize: '2.5rem',
              color: 'var(--text-faint)',
              letterSpacing: '0.05em',
            }}
          >
            {member.initials}
          </div>
        )}

        {/* Subtle gold accent bar at bottom of photo */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ background: 'var(--gradient-gold)' }}
        />
      </div>

      {/* Text zone - role + name only */}
      <div className="flex flex-col p-5">
        <p
          className="mb-1 text-[9px] font-black uppercase tracking-[0.22em]"
          style={{ color: 'var(--text-gold)' }}
        >
          {member.role}
        </p>
        <h3
          className="font-display font-black leading-snug"
          style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}
        >
          {member.name}
        </h3>
      </div>
    </button>
  )
}

// ─── Bottom Sheet ───────────────────────────────────────────────────────────
// Slides up from below on click. Holds photo, role, name, credentials, bio.

function TribeSheet({ member, onClose }: { member: TribeMember | null; onClose: () => void }) {
  const open = member !== null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.6)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out"
        style={{
          transform: open ? 'translateY(0)' : 'translateY(100%)',
        }}
        role="dialog"
        aria-modal="true"
        aria-label={member ? `${member.name} details` : undefined}
      >
        <div
          className="relative mx-auto max-w-4xl overflow-y-auto rounded-t-3xl"
          style={{
            background: 'var(--bg-base)',
            border: '1px solid var(--border-subtle)',
            borderBottom: 'none',
            maxHeight: '92vh',
          }}
        >
          {/* Drag handle */}
          <div className="flex justify-center pt-3">
            <div
              className="h-1 w-10 rounded-full"
              style={{ background: 'var(--border-medium)' }}
            />
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
            style={{ background: 'var(--bg-surface)', color: 'var(--text-muted)' }}
          >
            <X size={16} />
          </button>

          {member && (
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-[1fr_1fr]">
              {/* Photo */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: '4 / 5', minHeight: '320px' }}
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center font-display font-black"
                    style={{ background: 'var(--bg-elevated)', fontSize: '4rem', color: 'var(--text-faint)' }}
                  >
                    {member.initials}
                  </div>
                )}
                <div
                  className="absolute inset-x-0 bottom-0 h-1"
                  style={{ background: 'var(--gradient-gold)' }}
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p
                  className="mb-2 text-xs font-black uppercase tracking-[0.25em]"
                  style={{ color: 'var(--text-gold)' }}
                >
                  {member.role}
                </p>
                <h3
                  className="mb-4 font-display font-black leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: 'var(--text-primary)' }}
                >
                  {member.name}
                </h3>
                <p
                  className="mb-6 text-sm italic"
                  style={{
                    color: 'var(--text-muted)',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '1.5rem',
                  }}
                >
                  {member.credentials}
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {member.bio}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function AboutContent() {
  const founder = THE_TRIBE.find((m) => m.isFounder)!
  const gridMembers = THE_TRIBE.filter((m) => !m.isFounder)
  const [activeMember, setActiveMember] = useState<TribeMember | null>(null)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      <Navbar />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-6 pb-16 pt-32">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 opacity-40"
            style={{ background: 'radial-gradient(ellipse, rgba(234,179,8,0.09) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <p
                  className="mb-4 text-xs font-bold uppercase tracking-[0.35em]"
                  style={{ color: 'var(--text-gold)' }}
                >
                  About WLA
                </p>
                <h1
                  className="mb-6 font-display font-black leading-tight"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: 'var(--text-primary)' }}
                >
                  Built to Own Africa&apos;s
                  <br />
                  <span className="text-gold-gradient">Entertainment Future</span>
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  WLA Entertainment Ltd was incorporated in May 2026 with one mandate: own, produce,
                  and franchise Africa&apos;s first continental obstacle sports entertainment IP.
                  Not an adaptation of a Western format - an original African format built to travel.
                </p>
              </div>
              <div className="relative z-0 flex items-center justify-center">
                <AfricaMap />
              </div>
            </div>
          </div>
        </section>

        {/* ── Why This Exists ───────────────────────────────────────────────── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="mb-6 text-xs font-bold uppercase tracking-[0.35em]"
              style={{ color: 'var(--text-gold)' }}
            >
              Why This Exists
            </p>
            <blockquote
              className="mb-8 font-display font-black italic leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text-primary)' }}
            >
              &ldquo;What does a person become when they stop believing they can?&rdquo;
            </blockquote>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Nigeria Ninja Warrior is built on that question. Every person who has ever been told
              they are too old, too slow, too female, too northern, too southern, too poor - and
              chose to run anyway - is the audience, the contestant, and the reason this show exists.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The format travels because the question does. Every culture has a version of that cost.
              WLA roots it in Nigeria first - and builds outward from there.
            </p>
          </div>
        </section>

        {/* ── The Company ───────────────────────────────────────────────────── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <p
                  className="mb-4 text-xs font-bold uppercase tracking-[0.3em]"
                  style={{ color: 'var(--text-gold)' }}
                >
                  The Company
                </p>
                <h2
                  className="mb-6 font-display text-3xl font-black md:text-4xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  What WLA Entertainment Is
                </h2>
                <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                  <p className="leading-relaxed">
                    WLA Entertainment Ltd is a private company limited by shares, registered with
                    Nigeria&apos;s Corporate Affairs Commission. It owns the Warriors League Africa
                    format - the competition rules, gameplay mechanics, brand standards, and franchise
                    licensing model.
                  </p>
                  <p className="leading-relaxed">
                    Nigeria Ninja Warrior is the first edition, produced and operated directly by WLA.
                    Every subsequent country franchise is licensed to a local partner who produces the
                    show in their territory. WLA earns format fees and royalties without operating each
                    market.
                  </p>
                </div>
              </div>

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
                    <p
                      className="font-display text-lg font-black"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {COMPANY.name}
                    </p>
                    <p
                      className="text-xs font-bold tracking-wider"
                      style={{ color: 'var(--text-gold)' }}
                    >
                      Warriors League Africa
                    </p>
                  </div>
                </div>
                <div>
                  {COMPANY_ROWS.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-4 py-3 text-sm last:border-0"
                      style={{ borderBottom: '1px solid var(--border-subtle)' }}
                    >
                      <span className="flex-shrink-0" style={{ color: 'var(--text-faint)' }}>
                        {label}
                      </span>
                      <span className="text-right" style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Tribe ─────────────────────────────────────────────────────── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-7xl">

            {/* Section header */}
            <div className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-[0.35em]"
                  style={{ color: 'var(--text-gold)' }}
                >
                  People
                </p>
                <h2
                  className="font-display text-3xl font-black md:text-4xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  The Tribe
                </h2>
              </div>
              <p
                className="max-w-sm text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                9 founding members. One mandate. Tap a card for more.
              </p>
            </div>

            {/* Founder - full-width featured card, unchanged */}
            <div
              className="mb-8 overflow-hidden rounded-2xl"
              style={{ border: '1px solid var(--border-gold)', background: 'var(--bg-gold-tint)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">
                {/* Photo */}
                <div
                  className="relative overflow-hidden"
                  style={{ minHeight: '340px' }}
                >
                  {founder.photo ? (
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="h-full w-full object-cover object-[center_15%]"
                      style={{ position: 'absolute', inset: 0 }}
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center font-display font-black"
                      style={{
                        background: 'var(--bg-elevated)',
                        fontSize: '3rem',
                        color: 'var(--text-faint)',
                        position: 'absolute',
                        inset: 0,
                      }}
                    >
                      {founder.initials}
                    </div>
                  )}
                  {/* Gold bar */}
                  <div
                    className="absolute right-0 top-0 bottom-0 hidden w-0.5 lg:block"
                    style={{ background: 'var(--gradient-gold)' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 lg:hidden"
                    style={{ background: 'var(--gradient-gold)' }}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p
                    className="mb-1 text-[9px] font-black uppercase tracking-[0.25em]"
                    style={{ color: 'var(--text-gold)' }}
                  >
                    {founder.role}
                  </p>
                  <h3
                    className="mb-2 font-display font-black leading-tight"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary)' }}
                  >
                    {founder.name}
                  </h3>
                  <p
                    className="mb-5 text-xs italic"
                    style={{
                      color: 'var(--text-muted)',
                      borderBottom: '1px solid var(--border-subtle)',
                      paddingBottom: '1.25rem',
                    }}
                  >
                    {founder.credentials}
                  </p>
                  <p
                    className="mb-6 text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {founder.bio}
                  </p>
                  <a
                    href={`mailto:${COMPANY.email.general}`}
                    className="inline-flex w-fit items-center gap-2 text-sm transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <Mail size={13} />
                    {COMPANY.email.general}
                  </a>
                </div>
              </div>
            </div>

            {/* Grid - photo, role, name only. Click opens bottom sheet. */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gridMembers.map((member) => (
                <TribeCard key={member.name} member={member} onOpen={setActiveMember} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="mb-4 font-display text-3xl font-black md:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Back the founding team
            </h2>
            <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
              Series A - NGN 800M is open. The investor who backs WLA at Series A buys the
              continent&apos;s first obstacle sports IP at its founding price.
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
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
                  ;(e.currentTarget as HTMLElement).style.background  = 'var(--bg-surface)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)'
                  ;(e.currentTarget as HTMLElement).style.background  = 'transparent'
                }}
              >
                Contact Founder
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <TribeSheet member={activeMember} onClose={() => setActiveMember(null)} />
    </div>
  )
}