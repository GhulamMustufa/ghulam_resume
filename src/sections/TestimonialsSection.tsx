'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
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
            key={index}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            className="surface-card rounded-2xl p-5 flex flex-col justify-between"
          >
            <p className="text-sm leading-relaxed text-[var(--color-text-main)]">&ldquo;{item.quote}&rdquo;</p>
            
            <footer className="mt-4 flex flex-col gap-1.5 pt-4 border-t border-[var(--color-border-subtle)]">
              <div className="text-sm font-semibold text-[var(--color-accent-blue-text)] line-clamp-1">{item.author}</div>
              
              {(item.rating || item.platform) && (
                <div className="flex items-center gap-2 text-xs font-medium">
                  {item.platform && (
                    <span className="px-1.5 py-0.5 rounded bg-[var(--color-surface-2)] border border-[var(--color-border-default)] text-[var(--color-text-muted)]">
                      {item.platform}
                    </span>
                  )}
                  {item.rating && (
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      {[...Array(Math.floor(item.rating))].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                      <span className="ml-1 font-bold text-yellow-600 dark:text-yellow-400">{item.rating.toFixed(1)}</span>
                    </div>
                  )}
                </div>
              )}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
