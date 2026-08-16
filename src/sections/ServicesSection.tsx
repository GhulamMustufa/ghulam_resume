'use client'

import { motion } from 'framer-motion'
import { track } from '@vercel/analytics/react'
import Link from 'next/link'
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
        {services.filter((s) => s.showOnHomepage !== false).map((service, index) => (
          <motion.div
            key={service.title}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            className="surface-card group relative flex flex-col rounded-2xl p-5"
          >
            <Link
              href={`/services/${service.slug}`}
              onClick={() => track('View Service', { service: service.title })}
              className="absolute inset-0 z-10 rounded-[inherit]"
              aria-label={`View details for ${service.title}`}
            />
            <service.icon className="mb-4 text-[var(--color-accent-blue-text)]" size={20} />
            <h3 className="text-sm font-semibold text-[var(--color-text-main)]">{service.title}</h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
              {service.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
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
