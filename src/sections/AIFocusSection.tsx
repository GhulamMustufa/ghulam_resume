'use client'

import { motion } from 'framer-motion'
import { BrainCircuit } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { aiFocus } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

const statusTone = {
  shipping: 'bg-[var(--color-accent-green-bg)] text-[var(--color-accent-green-text)]',
  active: 'bg-[var(--color-accent-blue-bg)] text-[var(--color-accent-blue-text)]',
  building: 'bg-[var(--color-accent-violet-bg)] text-[var(--color-accent-violet-text)]',
} as const

export function AIFocusSection() {
  return (
    <section id="ai-focus" className="section-space scroll-mt-20">
      <SectionHeading
        eyebrow="AI Direction"
        title="Current direction: AI-integrated product engineering"
        description="AI features already in production at Lumida Wealth, plus ongoing investment in patterns for building reliable AI-native SaaS systems."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {aiFocus.map((item, index) => (
          <motion.article
            key={item.title}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            className="surface-card rounded-2xl p-5"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <BrainCircuit className="text-[var(--color-accent-blue-text)]" size={18} />
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusTone[item.status]}`}>
                {item.status}
              </span>
            </div>
            <h3 className="text-base font-semibold text-[var(--color-text-main)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
