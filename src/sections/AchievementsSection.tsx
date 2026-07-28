'use client'

import { motion } from 'framer-motion'
import { keyAchievements } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-space" aria-labelledby="achievements-heading">
      <h2 id="achievements-heading" className="sr-only">Key Achievements & Production Metrics</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {keyAchievements.map((item, index) => (
          <motion.div
            key={item.metric}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.06 }}
            className="surface-card flex flex-col gap-3 rounded-2xl p-5"
          >
            <span className="self-start rounded-full border border-[var(--color-accent-blue-border)] bg-[var(--color-accent-blue-bg)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-blue-text)]">
              {item.metric}
            </span>
            <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-main)]">{item.statement}</p>
            <p className="text-xs font-medium text-[var(--color-text-muted)]">{item.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
