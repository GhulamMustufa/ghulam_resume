import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { agencyBrand } from '@/data/agencyData'
import { AgencyHeader } from './components/AgencyHeader'

export const metadata: Metadata = {
  title: 'GM Labs | High-Performance Software & Autonomous AI Systems',
  description:
    'Boutique software engineering and autonomous AI systems studio founded by Ghulam Mustafa. Architecting high-concurrency mobile apps, resilient cloud backends, and deterministic AI pipelines.',
  alternates: {
    canonical: 'https://agency.ghulam-mustafa.com',
  },
  openGraph: {
    title: 'GM Labs | Engineering High-Performance Software & AI Systems',
    description:
      'We partner with venture-backed startups and growth enterprises to build production mobile apps, high-throughput cloud backends, and agentic AI architectures.',
    url: 'https://agency.ghulam-mustafa.com',
    siteName: 'GM Labs',
    type: 'website',
  },
}

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#070A10] text-[#E2E8F0] selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Subtle Ambient Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.12) 0%, rgba(7, 10, 16, 0) 65%)',
        }}
        aria-hidden="true"
      />

      {/* Agency Navigation Header */}
      <AgencyHeader />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Agency Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#04060A] pt-10 sm:pt-14 pb-8 sm:pb-12 text-slate-400">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-8 sm:pb-10 border-b border-white/[0.06]">
            {/* Col 1: Brand & Positioning */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono font-bold text-xs">
                  GM
                </span>
                <span className="font-mono text-base font-bold text-white tracking-wider">
                  GM LABS
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 mt-1">
                Boutique engineering practice specializing in high-throughput cloud platforms, mission-critical mobile apps, and deterministic autonomous AI systems.
              </p>
              <p className="text-xs text-slate-500 font-mono">
                Founded &amp; Led by Ghulam Mustafa
              </p>
            </div>

            {/* Col 2: Practice Areas */}
            <div>
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-3">
                Practice Areas
              </p>
              <ul className="space-y-2 text-xs">
                <li><a href="/agency#services" className="hover:text-white transition-colors">Autonomous AI &amp; Agents</a></li>
                <li><a href="/agency#services" className="hover:text-white transition-colors">React Native Mobile Engineering</a></li>
                <li><a href="/agency#services" className="hover:text-white transition-colors">Full-Stack SaaS &amp; Cloud</a></li>
                <li><a href="/agency#services" className="hover:text-white transition-colors">Architecture &amp; Latency Audits</a></li>
              </ul>
            </div>

            {/* Col 3: Legal & Compliance */}
            <div>
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-3">
                Commercial &amp; Legal
              </p>
              <ul className="space-y-2 text-xs">
                <li><Link href="/agency/terms" className="hover:text-white transition-colors">Commercial Terms of Service</Link></li>
                <li><Link href="/agency/privacy" className="hover:text-white transition-colors">Privacy Policy (GDPR/CCPA)</Link></li>
                <li><a href="https://ghulam-mustafa.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">Founder Portfolio <ArrowUpRight size={11} /></a></li>
                <li><a href="https://github.com/GhulamMustufa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">Open Source Repos <ArrowUpRight size={11} /></a></li>
              </ul>
            </div>

            {/* Col 4: Contact & Channels */}
            <div>
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-3">
                Direct Channels
              </p>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href={`mailto:${agencyBrand.email}`} className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <Mail size={13} className="text-blue-400" />
                    <span>{agencyBrand.email}</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/60148130908" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <MessageCircle size={13} className="text-emerald-400" />
                    <span>WhatsApp (MY): +60 14-813 0908</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/923087015957" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    <MessageCircle size={13} className="text-emerald-400" />
                    <span>WhatsApp (PK): +92 308-701 5957</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} GM Labs Technology Consulting. All rights reserved.</p>
            <p className="font-mono text-[0.7rem] text-slate-600">
              COMMERCIAL_ENTITY · READY FOR STRIPE / PAYPAL GATEWAYS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
