'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Smartphone, 
  Server, 
  Gauge, 
  ExternalLink,
  MessageCircle,
  Mail,
  Copy,
  Check,
  ChevronDown
} from 'lucide-react'
import { 
  agencyBrand, 
  agencyStats, 
  agencyServices, 
  agencyCaseStudies, 
  engagementModels, 
  agencyProcess,
  agencyTechStack,
  agencyFaqs
} from '@/data/agencyData'

const serviceIcons = {
  'agentic-ai': Sparkles,
  'mobile-engineering': Smartphone,
  'cloud-saas': Server,
  'audits-optimization': Gauge,
}

export default function AgencyHomePage() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(agencyBrand.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      setCopiedEmail(false)
    }
  }

  // Schema.org FAQPage structured data for Google / Bing SEO indexing
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: agencyFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="space-y-14 sm:space-y-20 pb-16 sm:pb-24">
      {/* Schema.org FAQPage Structured Data for Search Engine Crawling */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ─────────────────────────────────────────
          1. HERO SECTION & TECH STACK STRIP
      ───────────────────────────────────────── */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Availability Badge */}
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 sm:px-3.5 text-[0.7rem] sm:text-xs font-mono font-medium text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>ACCEPTING SELECT Q4 ARCHITECTURE &amp; AI PROJECTS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
            Engineering High-Performance Software &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              Autonomous AI Systems.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {agencyBrand.subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all active:scale-[0.99] sm:hover:scale-[1.02]"
            >
              Start a Project Discovery
              <ArrowRight size={15} />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-white/[0.08] hover:border-white/20 transition-all text-center"
            >
              Explore Client Results
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {agencyStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 sm:p-5 backdrop-blur-sm"
            >
              <p className="text-xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-[0.7rem] sm:text-xs text-slate-400 leading-tight sm:leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Battle-Tested Enterprise Tech Stack Strip */}
        <div className="mt-8 pt-6 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5">
            <p className="text-[0.68rem] font-mono font-semibold uppercase tracking-widest text-blue-400">
              CORE ENTERPRISE ARCHITECTURE &amp; PRODUCTION STACK
            </p>
            <p className="text-[0.68rem] font-mono text-slate-500">
              Zero Junior Hand-offs · Senior Systems Engineering
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {agencyTechStack.map((tech) => (
              <span
                key={tech.name}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-colors ${
                  tech.highlight
                    ? 'border border-blue-500/30 bg-blue-500/10 text-blue-300 font-medium'
                    : 'border border-white/[0.08] bg-white/[0.02] text-slate-300 hover:border-white/20'
                }`}
              >
                {tech.highlight && <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />}
                <span>{tech.name}</span>
                <span className="text-[0.65rem] text-slate-500 font-sans">· {tech.category}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. FEATURED CLIENT CASE STUDIES
      ───────────────────────────────────────── */}
      <section id="case-studies" className="scroll-mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-6 sm:mb-8 pb-3 border-b border-white/[0.08]">
          <div>
            <p className="text-[0.68rem] sm:text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-1">
              PROVEN RESULTS
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Selected Client Case Studies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Production systems engineered to handle enterprise traffic, strict SLAs, and zero rollbacks.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {agencyCaseStudies.map((cs) => (
            <article
              key={cs.id}
              className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7 md:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-colors"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="text-[0.68rem] font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {cs.metric}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5">
                  {cs.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-3 sm:mb-4">{cs.client}</p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  <div>
                    <span className="text-slate-500 font-mono text-[0.68rem] uppercase block">Challenge</span>
                    <p className="mt-0.5 text-slate-400">{cs.context}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono text-[0.68rem] uppercase block">Outcome &amp; Engineering</span>
                    <p className="mt-0.5 text-slate-200">{cs.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.06]">
                {cs.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[0.68rem] font-mono text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. PRACTICE AREAS (SERVICES)
      ───────────────────────────────────────── */}
      <section id="services" className="scroll-mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-6 sm:mb-8 pb-3 border-b border-white/[0.08]">
          <div>
            <p className="text-[0.68rem] sm:text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-1">
              OUR CAPABILITIES
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Core Practice Areas
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Full-cycle software engineering from technical architecture to scalable production delivery.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {agencyServices.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Sparkles
            return (
              <div
                key={service.id}
                className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7 md:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-colors"
              >
                <div>
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <p className="text-[0.68rem] font-mono font-semibold text-blue-400 uppercase tracking-wider mb-1">
                    {service.eyebrow}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 sm:mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    <p className="text-[0.68rem] font-mono text-slate-500 uppercase tracking-wider">
                      Key Deliverables
                    </p>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.06]">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 text-[0.68rem] font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. FOUNDER & TECHNICAL LEADERSHIP
      ───────────────────────────────────────── */}
      <section id="founder" className="scroll-mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5 sm:p-8 md:p-10 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-center sm:items-start">
            <div className="relative h-32 w-32 sm:h-44 sm:w-44 md:h-52 md:w-52 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-2xl">
              <Image
                src="/photo.jpg"
                alt="Ghulam Mustafa - Founder of GM Labs"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="flex-1 space-y-3.5 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.68rem] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                FOUNDER-LED ENGINEERING PRACTICE
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Architected &amp; Led by Ghulam Mustafa
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                With 5+ years shipping high-scale software across fintech, B2B marketplaces, and wealth management platforms, Ghulam leads every GM Labs client engagement from initial system architecture to production launch. No junior handoffs, no bureaucratic overhead.
              </p>

              {/* Open-Source Autonomous Proof Points */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-left">
                <a
                  href="https://devfix.ghulam-mustafa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/[0.06] bg-black/40 p-3 hover:border-blue-500/40 transition-colors group"
                >
                  <p className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center justify-between">
                    DevFix 🛠️ <ExternalLink size={12} />
                  </p>
                  <p className="text-[0.68rem] text-slate-400 mt-0.5">80% Recovery Rate Benchmark</p>
                </a>

                <a
                  href="https://omnibid.ghulam-mustafa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/[0.06] bg-black/40 p-3 hover:border-blue-500/40 transition-colors group"
                >
                  <p className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center justify-between">
                    OmniBid 🧠 <ExternalLink size={12} />
                  </p>
                  <p className="text-[0.68rem] text-slate-400 mt-0.5">96.4% Benchmark Accuracy</p>
                </a>

                <a
                  href="https://borderless.ghulam-mustafa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/[0.06] bg-black/40 p-3 hover:border-blue-500/40 transition-colors group"
                >
                  <p className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center justify-between">
                    Borderless AI 🌍 <ExternalLink size={12} />
                  </p>
                  <p className="text-[0.68rem] text-slate-400 mt-0.5">1,454+ Pathways in 70+ Countries</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5. ENGAGEMENT MODELS
      ───────────────────────────────────────── */}
      <section id="engagement" className="scroll-mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-6 sm:mb-8 pb-3 border-b border-white/[0.08]">
          <div>
            <p className="text-[0.68rem] sm:text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-1">
              TRANSPARENT PARTNERSHIP
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engagement Models
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Clear scopes, fixed milestones, and dedicated sprint capacity tailored to your growth stage.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7 flex flex-col justify-between hover:border-blue-500/30 transition-colors"
            >
              <div>
                <span className="inline-block text-[0.65rem] font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-3 sm:mb-4">
                  {model.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{model.title}</h3>
                <p className="text-xs font-mono text-emerald-400 mt-0.5 mb-2.5">{model.duration}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">{model.description}</p>
                <p className="text-[0.68rem] text-slate-500 font-mono mb-4">
                  <strong className="text-slate-400">Best for:</strong> {model.idealFor}
                </p>

                <div className="space-y-2 pt-3.5 border-t border-white/[0.06] mb-5">
                  {model.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] py-2.5 text-xs font-semibold text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                Inquire for {model.title}
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. HOW WE WORK (PROCESS)
      ───────────────────────────────────────── */}
      <section id="process" className="scroll-mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8 pb-3 border-b border-white/[0.08]">
          <p className="text-[0.68rem] sm:text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-1">
            METHODOLOGY
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Our 3-Phase Delivery Framework
          </h2>
        </div>

        <div className="grid gap-3.5 sm:gap-6 md:grid-cols-3">
          {agencyProcess.map((p) => (
            <div key={p.step} className="rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-7">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-500/40 block mb-2 sm:mb-3">
                {p.step}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          7. FREQUENTLY ASKED QUESTIONS (FAQ)
      ───────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-6 sm:mb-8 pb-3 border-b border-white/[0.08]">
          <div>
            <p className="text-[0.68rem] sm:text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-1">
              QUESTIONS &amp; ANSWERS
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Direct, transparent answers regarding intellectual property, engineering velocity, AI safety, and sprint engagement models.
          </p>
        </div>

        <div className="space-y-3">
          {agencyFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors hover:border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 pr-2">
                    <span className="inline-block text-[0.65rem] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`shrink-0 mt-1 h-7 w-7 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-400 border-blue-500/30 bg-blue-500/10' : ''}`}>
                    <ChevronDown size={15} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          8. CONTACT & INTAKE SECTION
      ───────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-950/20 via-white/[0.02] to-transparent p-6 sm:p-10 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-3.5 sm:space-y-4">
            <span className="text-[0.68rem] sm:text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
              LET&apos;S COLLABORATE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Engineer Your Next Competitive Advantage?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
              Whether you need to ship a new product from scratch, integrate deterministic AI workflows, or scale an existing codebase, let&apos;s talk technical requirements.
            </p>

            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4">
              <a
                href={`mailto:${agencyBrand.email}?subject=Project%20Inquiry%20via%20GM%20Labs`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all active:scale-[0.99] sm:hover:scale-[1.02]"
              >
                <Mail size={15} />
                <span>Email: {agencyBrand.email}</span>
              </a>

              <a
                href="https://wa.me/60148130908"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-all text-center"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:bg-white/[0.08] transition-all"
              >
                {copiedEmail ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[0.7rem] sm:text-xs text-slate-400 font-mono text-center">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400" /> 100% IP Transfer
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400" /> 30-Day Bug Warranty
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400" /> Mutual NDA Protected
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
