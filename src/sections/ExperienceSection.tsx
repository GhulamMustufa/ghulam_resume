'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/portfolioData'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-space scroll-mt-20">
      {/* Section header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p
            className="text-mono mb-1"
            style={{ color: 'var(--color-accent-text)', fontSize: '0.65rem', letterSpacing: '0.18em' }}
          >
            ⬡ EXPERIENCE
          </p>
          <h2
            className="text-section-title font-bold"
            style={{ color: 'var(--color-text-main)' }}
          >
            Professional history
          </h2>
        </div>
        <span
          className="text-mono hidden sm:inline"
          style={{ color: 'var(--color-text-muted)', fontSize: '0.65rem', letterSpacing: '0.14em' }}
        >
          {experiences.length} ROLES
        </span>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="space-y-3"
      >
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            variants={fadeInUp}
            transition={{ delay: index * 0.07 }}
            className="surface-card p-5 sm:p-6"
          >
            {/* Header row */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: 'var(--color-text-main)', letterSpacing: '-0.01em' }}
                >
                  {experience.role}
                </h3>
                <p
                  className="mt-0.5 text-sm"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {experience.company}
                  {experience.mode ? ` · ${experience.mode}` : ''}
                </p>
              </div>

              {/* Period badge */}
              <span
                className="text-mono shrink-0 px-2.5 py-1 text-xs"
                style={{
                  background: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: '4px',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.05em',
                }}
              >
                {experience.period}
              </span>
            </div>

            {/* Highlight */}
            {experience.highlight && (
              <p
                className="mt-3 text-xs font-medium"
                style={{
                  color: 'var(--color-accent-text)',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--color-border-default)',
                }}
              >
                {experience.highlight}
              </p>
            )}

            {/* Outcomes */}
            <ul className="mt-4 space-y-2">
              {experience.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex gap-2.5 text-sm"
                  style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ background: 'var(--color-border-strong)' }}
                    aria-hidden="true"
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
