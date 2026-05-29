'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

export function ServicesSection() {
  return (
    <section id="services" className="section-space scroll-mt-20">
      <SectionHeading
        eyebrow="Services"
        title="What I build for clients"
        description="Available for freelance engagements, contract work, and product collaborations — fixed-scope or ongoing."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            className="surface-card flex flex-col rounded-2xl p-5"
          >
            <service.icon className="mb-4 text-sky-300" size={20} />
            <h3 className="text-sm font-semibold text-white">{service.title}</h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400">
              {service.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
