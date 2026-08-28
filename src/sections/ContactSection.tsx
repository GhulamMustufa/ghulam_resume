'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics/react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { contactActions, contactDetails, socialLinks } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'
import { useTheme } from '@/components/ThemeProvider'
import { ContactForm } from '@/components/ui/ContactForm'

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const { theme } = useTheme()
  const email = 'hello@ghulam-mustafa.com'
  const isLightPremium = theme === 'light-premium'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      track('Copy Email')
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 1800)
    } catch {
      setCopiedEmail(false)
    }
  }

  /* ────────────────────────────────────────────
     Light-Premium: inverted dark CTA block
  ──────────────────────────────────────────── */
  if (isLightPremium) {
    return (
      <motion.section
        id="contact"
        {...fadeInUp}
        className="cta-dark-section scroll-mt-20 p-8 sm:p-14"
        aria-label="Contact"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <p
              className="text-mono mb-5 inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-widest whitespace-normal"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '4px',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              ⬡ CONTACT
            </p>

            <h2
              className="cta-title text-section-title font-bold"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Let&apos;s build something{' '}
              <span style={{ fontStyle: 'italic' }}>extraordinary</span>{' '}
              together.
            </h2>

            <p className="cta-body text-body-lg mt-4 max-w-xl">
              Available for remote senior roles and high-impact product builds. I work best where performance, reliability, and outcomes are non-negotiable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {contactActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith('http') ? '_blank' : undefined}
                  rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
                  onClick={() => track('Click Contact Action', { action: action.label })}
                  className="cta-btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
                >
                  <action.icon size={15} />
                  {action.label}
                </a>
              ))}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '4px',
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                {copiedEmail ? <Check size={15} /> : <Copy size={15} />}
                {copiedEmail ? 'Email Copied' : 'Copy Email'}
              </button>
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
             {/* The dark theme form will adapt to css variables, but we can override text colors if needed, or let ContactForm handle it via CSS variables */}
            <ContactForm />
          </div>
        </div>
      </motion.section>
    )
  }

  /* ────────────────────────────────────────────
     All other themes: themed card style
  ──────────────────────────────────────────── */
  return (
    <motion.section
      id="contact"
      {...fadeInUp}
      className="scroll-mt-20 p-6 sm:p-10"
      style={{
        background: 'var(--color-surface-1)',
        border: '1px solid var(--color-border-default)',
        borderRadius: 'var(--radius-base, 8px)',
      }}
      aria-label="Contact"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p
            className="text-mono mb-4"
            style={{ color: 'var(--color-accent-text)', fontSize: '0.65rem', letterSpacing: '0.18em' }}
          >
            ⬡ CONTACT
          </p>

          <h2
            className="text-section-title max-w-2xl font-bold"
            style={{ color: 'var(--color-text-main)', letterSpacing: '-0.02em' }}
          >
            Let&apos;s build something{' '}
            <span style={{ color: 'var(--color-cta-bg)', fontStyle: 'italic' }}>extraordinary</span>{' '}
            together.
          </h2>

          <p
            className="text-body-lg mt-3 max-w-2xl"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Available for remote senior roles and high-impact product builds. I work best
            where performance, reliability, and outcomes are non-negotiable.
          </p>

          {/* Contact detail cards */}
          <div className="mt-8 flex flex-col gap-3">
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.href?.startsWith('http') ? '_blank' : undefined}
                rel={detail.href?.startsWith('http') ? 'noreferrer' : undefined}
                onClick={() => track('Click Contact Detail', { detail: detail.label })}
                className="surface-card group flex h-full items-start gap-3 p-4"
              >
                <span
                  className="mt-0.5 shrink-0"
                  style={{ color: 'var(--color-accent-text)', display: 'flex' }}
                >
                  <detail.icon size={15} />
                </span>
                <div>
                  <p
                    className="text-mono"
                    style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem', letterSpacing: '0.14em' }}
                  >
                    {detail.label.toUpperCase()}
                  </p>
                  <p
                    className="mt-1 text-sm font-medium break-all"
                    style={{ color: 'var(--color-text-main)' }}
                  >
                    {detail.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social links */}
          <div
            className="mt-8 flex flex-wrap gap-5 pt-5"
            style={{ borderTop: '1px solid var(--color-border-default)' }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => track('Click Social Link', { platform: social.label })}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <social.icon size={14} />
                {social.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:border-l lg:border-[var(--color-border-default)] lg:pl-12">
          <ContactForm />
        </div>
      </div>
    </motion.section>
  )
}
