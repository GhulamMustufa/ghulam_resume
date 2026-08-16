'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics/react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/motion'

interface TrojanData {
  c: string; // company name (proper capitalization)
  t: string; // job title
  b1: string; // bullet 1
  b2: string; // bullet 2
  b3: string; // bullet 3
}

export function TrojanHeroSection({ urlCompany, data }: { urlCompany: string, data: TrojanData | null }) {
  const companyName = data?.c || urlCompany.charAt(0).toUpperCase() + urlCompany.slice(1)
  const jobTitle = data?.t || 'Engineering'
  
  // Clean company for logo fetch (e.g. "Affirm" -> "affirm.com")
  const domain = companyName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com'
  
  return (
    <section className="section-space pt-2" aria-label="Introduction">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="hero-surface p-6 sm:p-8 lg:p-10 border-2 border-purple-500/30 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
        
        {/* Availability badge */}
        <motion.div variants={fadeInUp} className="mb-6 flex items-start sm:items-center gap-2">
          <span
            className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium text-left break-words"
            style={{
              background: 'var(--color-accent-green-bg)',
              border: '1px solid var(--color-accent-green-border)',
              borderRadius: '4px',
              color: 'var(--color-accent-green-text)',
              fontFamily: 'ui-monospace, monospace',
              letterSpacing: '0.04em',
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full pulse-dot"
              style={{ background: 'var(--color-accent-green-text)' }}
              aria-hidden="true"
            />
            ● GUARANTEED 4+ HRS OVERLAP WITH {companyName.toUpperCase()}
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <div className="flex-1 min-w-0">
            {/* Main headline */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={`https://logo.clearbit.com/${domain}`} alt={`${companyName} Logo`} className="w-16 h-16 rounded-xl shadow-lg border border-gray-700/50 bg-white object-contain p-2" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
               <h1 className="text-display font-bold" style={{ color: 'var(--color-text-main)', letterSpacing: '-0.03em' }}>
                 Ghulam Mustafa <span className="text-gray-500">×</span> {companyName}
               </h1>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-title-1 font-semibold mb-6"
              style={{ color: 'var(--color-text-secondary)', letterSpacing: '-0.02em' }}
            >
              Direct B2B Engineering Partner ready to accelerate the {jobTitle} roadmap.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-body-lg mb-8 max-w-2xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              I saw your open role for {jobTitle}. As an independent contractor (zero visa or local tax friction), I can jump into your codebase immediately. Here is why I am the perfect fit for {companyName}:
            </motion.p>
            
            {data && (
                <motion.div variants={fadeInUp} className="flex flex-col gap-4 mb-8 bg-black/20 p-5 rounded-xl border border-gray-800">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-medium">{data.b1}</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-medium">{data.b2}</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-medium">{data.b3}</span>
                    </div>
                </motion.div>
            )}

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://cal.com/ghulammustafa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('Contact Started', { location: 'trojan_hero' })}
                className="btn btn-primary inline-flex items-center gap-2 group text-sm sm:text-base px-6 py-3"
              >
                Book 15-Min Intro Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
