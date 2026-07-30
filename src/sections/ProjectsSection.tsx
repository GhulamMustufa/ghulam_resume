'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/components/ThemeProvider'
import { projects } from '@/data/portfolioData'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export function ProjectsSection() {
  const { theme } = useTheme()
  const isDark = theme.includes('dark')

  return (
    <section id="projects" className="section-space scroll-mt-20">
      {/* Section header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p
            className="text-mono mb-1"
            style={{ color: 'var(--color-accent-text)', fontSize: '0.65rem', letterSpacing: '0.18em' }}
          >
            ⬡ SELECTED_PROJECTS
          </p>
          <h2
            className="text-section-title font-bold"
            style={{ color: 'var(--color-text-main)' }}
          >
            Production case studies
          </h2>
        </div>
        <span
          className="text-mono hidden sm:inline"
          style={{ color: 'var(--color-text-muted)', fontSize: '0.65rem', letterSpacing: '0.14em' }}
        >
          {projects.length} PROJECTS
        </span>
      </div>

      {/* Projects — two-column bento on desktop */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-3 sm:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            transition={{ delay: index * 0.07 }}
            className="surface-card group relative flex flex-col p-4 sm:p-5"
          >
            {/* Full-card clickable overlay */}
            <Link
              href={`/projects/${project.slug}`}
              className="absolute inset-0 z-10 rounded-[inherit]"
              aria-label={`View details for ${project.title}`}
            />
            {/* Card top: category badge + link */}
            <div className="mb-3 flex items-start justify-between gap-3">
              <span
                className="text-mono inline-block px-2 py-0.5"
                style={{
                  background: 'var(--color-accent-blue-bg)',
                  border: '1px solid var(--color-accent-blue-border)',
                  borderRadius: '3px',
                  color: 'var(--color-accent-blue-text)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                }}
              >
                {project.category.toUpperCase()}
              </span>
              {project.url && (
                <div
                  className="shrink-0 p-1 -m-1 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <ArrowUpRight size={16} className="transition-colors group-hover:text-[var(--color-text-main)]" />
                </div>
              )}
            </div>

            {/* Title */}
            <h3
              className="mb-3 text-base font-semibold"
              style={{ color: 'var(--color-text-main)', letterSpacing: '-0.01em' }}
            >
              {project.title}
            </h3>

            {/* Optional Theme-Aware Image */}
            {(project.image || (isDark && project.imageDark) || (!isDark && project.imageLight)) && (
              <div
                className="relative mb-4 w-full overflow-hidden aspect-video"
                style={{
                  borderRadius: '6px',
                  border: '1px solid var(--color-border-default)',
                  background: 'var(--color-bg-subtle)'
                }}
              >
                <Image
                  src={(isDark ? project.imageDark : project.imageLight) || project.image || ''}
                  alt={project.title}
                  fill
                  className={clsx('object-cover object-center transition-opacity', isDark && 'opacity-[0.85]')}
                />
              </div>
            )}

            {/* Divider */}
            <div style={{ borderTop: '1px solid var(--color-border-default)', marginBottom: '0.875rem' }} />

            {/* Problem / Solution / Result stack */}
            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              {[
                { label: 'PROBLEM', text: project.problem },
                { label: 'SOLUTION', text: project.solution },
                { label: 'RESULT', text: project.result },
              ].map(({ label, text }) => (
                <div key={label}>
                  <p
                    className="text-mono mb-1.5 font-semibold"
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{text}</p>
                </div>
              ))}
            </div>

            {/* Metrics chips */}
            {project.metrics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="inline-block px-2 py-0.5 text-xs font-medium"
                    style={{
                      background: 'var(--color-accent-green-bg)',
                      border: '1px solid var(--color-accent-green-border)',
                      borderRadius: '4px',
                      color: 'var(--color-accent-green-text)',
                    }}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            )}

            {/* Stack chips */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-2 py-0.5 text-xs"
                  style={{
                    background: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border-default)',
                    borderRadius: '4px',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'ui-monospace, monospace',
                    fontSize: '0.68rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
