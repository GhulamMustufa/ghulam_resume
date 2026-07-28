'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Terminal } from 'lucide-react'
import { heroStats } from '@/data/portfolioData'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export function HeroSection() {
  return (
    <section className="section-space pt-2" aria-label="Introduction">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="hero-surface p-6 sm:p-8 lg:p-10"
      >
        {/* Availability badge — IDE style */}
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
            ● AVAILABLE FOR AI INFRASTRUCTURE ARCHITECTURE
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          {/* Text content */}
          <div className="flex-1 min-w-0">
            {/* Main headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-display font-bold"
              style={{ color: 'var(--color-text-main)', letterSpacing: '-0.03em' }}
            >
              Product-Minded{' '}
              <span style={{ color: 'var(--color-accent-blue-text)' }}>
                AI, SaaS &amp; Mobile
              </span>{' '}
              Engineer.
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              variants={fadeInUp}
              className="text-body-lg mt-4 max-w-2xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Building end-to-end SaaS products and high-performance mobile apps from 0 to 1. Specialising in integrating LLMs into real-world workflows, crafting premium UI, and scaling architectures that solve actual user problems.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="accent-button inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
              >
                View Projects
                <ArrowRight size={15} />
              </a>
              <a
                href="/resume.pdf"
                download="Ghulam_Mustafa_Resume.pdf"
                className="subtle-button inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
              >
                Download CV
                <Download size={15} />
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            variants={fadeInUp}
            className="order-first flex shrink-0 justify-center md:order-last md:justify-end"
          >
            <div
              className="relative h-36 w-36 overflow-hidden sm:h-44 sm:w-44 md:h-52 md:w-44"
              style={{
                borderRadius: 'var(--radius-base, 8px)',
                border: '1px solid var(--color-border-strong)',
              }}
            >
              <Image
                src="/photo.jpg"
                alt="Ghulam Mustafa — Senior Full-Stack &amp; Mobile Engineer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stat Bento cards */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="surface-card-inset p-4 transition-colors"
            >
              <p
                className="text-lg font-bold tabular-nums"
                style={{ color: 'var(--color-text-main)', letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </p>
              <p
                className="mt-1 text-xs leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* IDE decorative footer bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 pt-4"
          style={{ borderTop: '1px solid var(--color-border-default)' }}
        >
          <Terminal size={11} className="shrink-0" style={{ color: 'var(--color-text-muted)' }} />
          <span
            className="text-mono leading-relaxed"
            style={{ color: 'var(--color-text-muted)', fontSize: '0.65rem' }}
          >
            SYSTEM_STACK_v4.0 · 5+ yrs production · React · React Native · Node.js · AI
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
