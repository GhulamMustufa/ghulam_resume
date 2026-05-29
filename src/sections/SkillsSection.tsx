'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillGroups } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

export function SkillsSection() {
  return (
    <section id="skills" className="section-space scroll-mt-20">
      <SectionHeading
        eyebrow="Skills"
        title="Languages, frameworks, and tools used in production"
        description="Production-tested stack across 6 years of real product builds — expanded to match the depth used in each engagement."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.name}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.07 }}
            className="surface-card rounded-2xl p-5"
          >
            <h3 className="mb-3 text-base font-semibold text-white">{group.name}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
