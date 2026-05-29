'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-space scroll-mt-20">
      <SectionHeading
        eyebrow="Client Testimonials"
        title="What clients say after working together"
        description="Feedback highlights delivery reliability, responsiveness, and quality under real project constraints."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.author}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            className="surface-card rounded-2xl p-5"
          >
            <p className="text-sm leading-relaxed text-slate-200">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-sky-200">{item.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
