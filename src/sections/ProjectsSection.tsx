'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/portfolioData'
import { fadeInUp } from '@/lib/motion'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-space scroll-mt-20">
      <SectionHeading
        eyebrow="Work"
        title="Production case studies"
        description="Eight projects across fintech, B2B commerce, enterprise mobile, AI SaaS, EdTech, and Web3 — each with real metrics from live systems."
      />

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
            className="surface-card rounded-2xl p-5 transition-all duration-200 hover:border-sky-300/25 sm:p-7"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
                <span className="rounded-full border border-sky-300/35 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100">
                  {project.category}
                </span>
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300 transition hover:border-sky-300/40 hover:text-sky-300"
                >
                  View Live
                  <ExternalLink size={12} />
                </a>
              )}
            </div>

            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Problem
                </span>
                <p>{project.problem}</p>
              </div>
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Solution
                </span>
                <p>{project.solution}</p>
              </div>
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Result
                </span>
                <p>{project.result}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span key={metric} className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  {metric}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
