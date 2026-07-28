'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

export function EducationSection() {
  return (
    <section id="education" className="section-space scroll-mt-20">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation"
        description="Computer science degree with a strong focus on software engineering fundamentals."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.institute}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            className="surface-card rounded-2xl p-5"
          >
            <h3 className="text-base font-semibold text-[var(--color-text-main)]">{item.institute}</h3>
            <p className="mt-2 text-sm text-[var(--color-accent-blue-text)]">{item.degree}</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">{item.years}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
