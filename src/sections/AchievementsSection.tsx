'use client'

import { motion } from 'framer-motion'
import { keyAchievements } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-space" aria-labelledby="achievements-heading">
      <h2 id="achievements-heading" className="sr-only">Key Achievements & Production Metrics</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {keyAchievements.map((item, index) => (
          <motion.div
            key={item.label}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.06 }}
            className="surface-card rounded-2xl p-4 text-center"
          >
            <p className="text-2xl font-bold tracking-tight text-white">{item.metric}</p>
            <p className="mt-1 text-xs font-semibold text-sky-300">{item.label}</p>
            <p className="mt-1 text-xs leading-tight text-slate-400">{item.context}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
