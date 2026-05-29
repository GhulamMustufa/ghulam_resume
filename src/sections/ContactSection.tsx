'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { contactActions, contactDetails, socialLinks } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const email = 'ghulammustafa.mf@gmail.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 1800)
    } catch {
      setCopiedEmail(false)
    }
  }

  return (
    <motion.section
      id="contact"
      {...fadeInUp}
      className="glow-soft scroll-mt-20 rounded-3xl border border-white/10 bg-gradient-to-b from-sky-400/10 to-slate-900 p-6 sm:p-10"
      aria-label="Contact"
    >
      <p className="text-caption mb-3 font-semibold text-sky-300">Contact</p>
      <h2 className="text-section-title max-w-2xl font-semibold text-white">
        Building an AI feature, SaaS product, or high-impact mobile platform? Let&apos;s ship it.
      </h2>
      <p className="text-body-lg mt-3 max-w-2xl text-slate-200">
        Available for remote senior roles and freelance product builds. I work best where
        performance, reliability, and product outcomes are non-negotiable.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {contactActions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            <action.icon size={16} />
            {action.label}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
          {copiedEmail ? 'Email Copied' : 'Copy Email'}
        </button>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {contactDetails.map((detail) => (
          <a
            key={detail.label}
            href={detail.href}
            target={detail.href?.startsWith('http') ? '_blank' : undefined}
            rel={detail.href?.startsWith('http') ? 'noreferrer' : undefined}
            className="transition hover:opacity-90"
          >
            <div className="surface-card flex h-full items-start gap-3 rounded-xl p-4">
              <detail.icon size={16} className="mt-0.5 text-sky-300" />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">{detail.label}</p>
                <p className="mt-1 text-sm text-slate-100">{detail.value}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-4 border-t border-white/15 pt-5">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-200 transition hover:text-white"
          >
            <social.icon size={14} />
            {social.label}
            <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
    </motion.section>
  )
}
