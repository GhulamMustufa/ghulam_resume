'use client'

import { motion } from 'framer-motion'
import { skillGroups } from '@/data/portfolioData'
import { fadeInUp, staggerContainer } from '@/lib/motion'

/* Map skill groups to bento slot sizes */
const bentoSizes: Record<number, string> = {
  0: 'md:col-span-2', // Frontend — wide
  1: 'md:col-span-1', // Mobile
  2: 'md:col-span-2', // Backend — wide
  3: 'md:col-span-1', // AI + SaaS
  4: 'md:col-span-3', // Cloud + Practices — full width
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-space scroll-mt-20">
      {/* Section label */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p
            className="text-mono mb-1"
            style={{ color: 'var(--color-accent-text)', fontSize: '0.65rem', letterSpacing: '0.18em' }}
          >
            ⬡ TECH_STACK
          </p>
          <h2
            className="text-section-title font-bold"
            style={{ color: 'var(--color-text-main)' }}
          >
            Technical proficiencies
          </h2>
        </div>
        <span
          className="text-mono hidden sm:inline"
          style={{ color: 'var(--color-text-muted)', fontSize: '0.65rem', letterSpacing: '0.14em' }}
        >
          SYSTEM_STACK_v4.0
        </span>
      </div>

      {/* Bento Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-3 md:grid-cols-3"
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.name}
            variants={fadeInUp}
            transition={{ delay: index * 0.06 }}
            className={`surface-card p-5 ${bentoSizes[index] ?? 'md:col-span-1'}`}
          >
            {/* Card header */}
            <div className="mb-4 flex items-center justify-between">
              <h3
                className="text-sm font-semibold"
                style={{ color: 'var(--color-text-main)', letterSpacing: '-0.01em' }}
              >
                {group.name}
              </h3>
              <span
                className="text-mono"
                style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem', letterSpacing: '0.12em' }}
              >
                {String(group.items.length).padStart(2, '0')} ITEMS
              </span>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid var(--color-border-default)', marginBottom: '0.875rem' }} />

            {/* Skills chips */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-block px-2.5 py-1 text-xs font-medium transition-colors"
                  style={{
                    background: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border-default)',
                    borderRadius: '4px',
                    color: 'var(--color-text-secondary)',
                    cursor: 'default',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
