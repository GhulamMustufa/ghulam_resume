'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Download, 
  MessageCircle, 
  Mail, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import { contactDetails } from '@/data/portfolioData'

export default function ScannedPage() {
  const email = contactDetails.find((c) => c.label === 'Email')?.value || 'hello@ghulam-mustafa.com'
  const myPhoneRaw = contactDetails.find((c) => c.label === 'WhatsApp (MY)')?.href || 'https://wa.me/60148130908'
  const pkPhoneRaw = contactDetails.find((c) => c.label === 'WhatsApp (PK)')?.href || 'https://wa.me/923087015957'
  
  const myPhone = myPhoneRaw.replace('https://wa.me/', '+')
  const pkPhone = pkPhoneRaw.replace('https://wa.me/', '+')

  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Mustafa;Ghulam;;;
FN:Ghulam Mustafa
TITLE:Senior Full-Stack & AI Systems Engineer
EMAIL;TYPE=INTERNET;TYPE=WORK:${email}
TEL;TYPE=CELL;TYPE=PREF:${myPhone}
TEL;TYPE=WORK:${pkPhone}
URL:https://ghulam-mustafa.com/scanned
URL:https://www.linkedin.com/in/ghulam909
URL:https://github.com/GhulamMustufa
END:VCARD`

  const handleDownloadVCard = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Ghulam_Mustafa.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const flagshipProjects = [
    {
      title: 'DevFix 🛠️',
      category: 'Autonomous AI Debugging Agent',
      desc: 'Autonomous agent that diagnoses & fixes broken dev environments with Docker sandboxed verification.',
      liveUrl: 'https://devfix.ghulam-mustafa.com',
      githubUrl: 'https://github.com/GhulamMustufa/devfix',
      badge: '80% Recovery Rate',
    },
    {
      title: 'OmniBid 🧠',
      category: 'Freelance Intelligence Engine',
      desc: 'Evaluates client opportunities, filters scams via deterministic gates, and writes grounded proposals.',
      liveUrl: 'https://omnibid.ghulam-mustafa.com',
      githubUrl: 'https://github.com/GhulamMustufa/ai-freelance-pipeline',
      badge: '96.4% Benchmark Accuracy',
    },
    {
      title: 'Borderless AI 🌍',
      category: 'Global Immigration Advisory',
      desc: 'Evaluates profiles across 1,454+ visa routes in 70+ countries using deterministic rules & AI reasoning.',
      liveUrl: 'https://borderless.ghulam-mustafa.com',
      githubUrl: 'https://github.com/GhulamMustufa/ai-visa-advisor',
      badge: '70+ Countries Covered',
    },
  ]

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 max-w-2xl mx-auto flex flex-col items-center">
      {/* Profile Header Card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full surface-card rounded-3xl p-6 sm:p-8 text-center border border-[var(--color-border-strong)] shadow-xl relative overflow-hidden mb-6"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent-blue-text)] via-[var(--color-accent-green-text)] to-[var(--color-accent-blue-text)]" />
        
        {/* Avatar */}
        <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-2 border-[var(--color-accent-blue-border)] shadow-lg mb-4">
          <Image 
            src="/photo.jpg" 
            alt="Ghulam Mustafa" 
            fill 
            sizes="112px"
            className="object-cover object-top"
            priority
          />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--color-accent-green-bg)] text-[var(--color-accent-green-text)] border border-[var(--color-accent-green-border)] mb-3">
          <span className="h-1.5 w-1.5 rounded-full pulse-dot bg-[var(--color-accent-green-text)]" />
          GREAT MEETING YOU! 👋
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-main)] tracking-tight">
          Ghulam Mustafa
        </h1>
        <p className="text-sm sm:text-base font-medium text-[var(--color-accent-blue-text)] mt-1">
          Senior Full-Stack & AI Systems Engineer
        </p>
        <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-md mx-auto mt-2 leading-relaxed">
          5+ years building high-scale distributed systems, mission-critical mobile apps (100K+ users), and deterministic agentic AI architectures.
        </p>

        {/* 1-Tap Save Contact Button */}
        <div className="mt-6">
          <button
            onClick={handleDownloadVCard}
            className="accent-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
          >
            <Download size={18} />
            Save Contact Card (.vcf)
          </button>
        </div>
      </motion.div>

      {/* Direct Communication Channels */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full flex flex-col gap-2.5 mb-8"
      >
        <h2 className="text-xs font-mono font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-1">
          Quick Connect
        </h2>

        {/* WhatsApp MY */}
        <a
          href={myPhoneRaw}
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card flex items-center justify-between p-3.5 rounded-2xl border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-green-border)] transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-main)]">WhatsApp (Primary / MY)</p>
              <p className="text-xs text-[var(--color-text-muted)] font-mono">{myPhone}</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-[var(--color-text-muted)] group-hover:translate-x-1 group-hover:text-[var(--color-text-main)] transition-all" />
        </a>

        {/* WhatsApp PK */}
        <a
          href={pkPhoneRaw}
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card flex items-center justify-between p-3.5 rounded-2xl border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-green-border)] transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-main)]">WhatsApp (Secondary / PK)</p>
              <p className="text-xs text-[var(--color-text-muted)] font-mono">{pkPhone}</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-[var(--color-text-muted)] group-hover:translate-x-1 group-hover:text-[var(--color-text-main)] transition-all" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ghulam909"
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card flex items-center justify-between p-3.5 rounded-2xl border border-[var(--color-border-subtle)] hover:border-[#0A66C2]/40 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0">
              <LinkedInIcon className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-main)]">LinkedIn Profile</p>
              <p className="text-xs text-[var(--color-text-muted)]">linkedin.com/in/ghulam909</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-[var(--color-text-muted)] group-hover:translate-x-1 group-hover:text-[var(--color-text-main)] transition-all" />
        </a>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="surface-card flex items-center justify-between p-3.5 rounded-2xl border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] flex items-center justify-center shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-main)]">Direct Email</p>
              <p className="text-xs text-[var(--color-text-muted)]">{email}</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-[var(--color-text-muted)] group-hover:translate-x-1 group-hover:text-[var(--color-text-main)] transition-all" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/GhulamMustufa"
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card flex items-center justify-between p-3.5 rounded-2xl border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[var(--color-bg-subtle)] text-[var(--color-text-main)] flex items-center justify-center shrink-0">
              <GitHubIcon className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-main)]">GitHub Profile</p>
              <p className="text-xs text-[var(--color-text-muted)]">github.com/GhulamMustufa</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-[var(--color-text-muted)] group-hover:translate-x-1 group-hover:text-[var(--color-text-main)] transition-all" />
        </a>
      </motion.div>

      {/* Flagship Systems to Try Live */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full flex flex-col gap-3 mb-8"
      >
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-mono font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
            Test My Flagship AI Systems
          </h2>
          <span className="text-xs font-mono text-[var(--color-accent-blue-text)]">Live Demos</span>
        </div>

        {flagshipProjects.map((p) => (
          <div key={p.title} className="surface-card rounded-2xl p-4 sm:p-5 border border-[var(--color-border-subtle)]">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h3 className="text-base font-bold text-[var(--color-text-main)]">{p.title}</h3>
              <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded-full bg-[var(--color-accent-green-bg)] text-[var(--color-accent-green-text)] border border-[var(--color-accent-green-border)] font-semibold shrink-0">
                {p.badge}
              </span>
            </div>
            <p className="text-xs text-[var(--color-accent-blue-text)] font-medium mb-1.5">{p.category}</p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">{p.desc}</p>
            
            <div className="flex items-center gap-2">
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-button inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg"
              >
                Launch Live App
                <ExternalLink size={12} />
              </a>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="subtle-button inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg"
              >
                Source Code
                <GitHubIcon className="w-3 h-3 fill-current" />
              </a>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Back to Full Portfolio CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full text-center pb-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-main)] hover:text-[var(--color-accent-blue-text)] transition-colors"
        >
          Explore Full Portfolio & Production Architecture
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  )
}
