'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-space scroll-mt-20">
      <SectionHeading
        eyebrow="Experience"
        title="Professional work history"
        description="6 roles across fintech, B2B mobile, enterprise, and contract engagements — from 2019 to present."
      />

      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.07 }}
            className="surface-card rounded-2xl p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-white sm:text-lg">{experience.role}</h3>
                <p className="mt-1 text-sm text-slate-300">
                  {experience.company} · {experience.mode}
                </p>
              </div>
              <p className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
                {experience.period}
              </p>
            </div>

            <p className="mt-3 text-sm text-sky-200">{experience.highlight}</p>

            <ul className="mt-4 space-y-2">
              {experience.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2.5 text-sm text-slate-300">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/60"
                    aria-hidden="true"
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
