'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Send } from 'lucide-react'
import { heroStats } from '@/data/portfolioData'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export function HeroSection() {
  return (
    <section className="section-space pt-2" aria-label="Introduction">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="hero-surface glow-soft rounded-3xl border border-white/10 p-6 sm:p-10"
      >
        {/* Two-column layout: text left, photo right on desktop */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">

          {/* Photo — appears above text on mobile, right on desktop */}
          <motion.div
            variants={fadeInUp}
            className="flex shrink-0 justify-center md:order-last md:justify-end"
          >
            <div className="relative h-36 w-36 overflow-hidden rounded-2xl ring-1 ring-white/15 sm:h-44 sm:w-44 md:h-52 md:w-44">
              <Image
                src="/photo.jpg"
                alt="Ghulam Mustafa — Senior Full-Stack Engineer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1 min-w-0">
            {/* Experience badge */}
            <motion.div
              variants={fadeInUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
              5+ years shipping web and mobile products for local and international clients
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-display max-w-3xl font-semibold text-white"
            >
              Full-Stack & Mobile Engineer who ships AI-powered SaaS products at scale.
            </motion.h1>

            {/* Sub-description */}
            <motion.p variants={fadeInUp} className="text-body-lg mt-5 max-w-2xl text-slate-300">
              5+ years of production work across fintech, B2B commerce, and enterprise mobile —
              from 100K-user React Native apps to LLM-integrated investor platforms. Strongest in
              React Native and frontend, with solid Node.js backend experience.
            </motion.p>

            {/* Availability badge */}
            <motion.div
              variants={fadeInUp}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
              Open to Work · Full-Time &amp; Contract
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="accent-button glow-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                View Work
                <ArrowRight size={16} />
              </a>
              <a
                href="/resume.pdf"
                download="Ghulam_Mustafa_Resume.pdf"
                className="subtle-button inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition"
              >
                Download Resume
                <Download size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20"
              >
                Start a Project
                <Send size={16} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stat cards — full width below the two columns */}
        <motion.div variants={fadeInUp} className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="surface-card rounded-xl p-4">
              <p className="text-xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
