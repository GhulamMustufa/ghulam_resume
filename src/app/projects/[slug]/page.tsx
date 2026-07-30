import { projects } from '@/data/portfolioData'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'

// Note: Ensure `generateStaticParams` matches the Next.js 13+ App Router API
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-8 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--color-text-main)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <header className="mb-12">
        <span
          className="text-mono inline-block px-2 py-1 mb-4"
          style={{
            background: 'var(--color-accent-blue-bg)',
            border: '1px solid var(--color-accent-blue-border)',
            borderRadius: '4px',
            color: 'var(--color-accent-blue-text)',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
          }}
        >
          {project.category.toUpperCase()}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-main)' }}>
          {project.title}
        </h1>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--color-text-main)]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Visit Project <ExternalLink size={16} />
          </a>
        )}
      </header>

      {(project.image || project.imageLight || project.imageDark) && (
        <div className="relative mb-12 w-full overflow-hidden aspect-video rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-subtle)]">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
            />
          )}
        </div>
      )}

      <div className="grid gap-12 sm:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-8 text-base sm:text-lg">
          <section>
            <h2 className="text-mono mb-3 font-semibold" style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', letterSpacing: '0.12em' }}>
              PROBLEM
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{project.problem}</p>
          </section>
          
          <section>
            <h2 className="text-mono mb-3 font-semibold" style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', letterSpacing: '0.12em' }}>
              SOLUTION
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{project.solution}</p>
          </section>
          
          <section>
            <h2 className="text-mono mb-3 font-semibold" style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', letterSpacing: '0.12em' }}>
              RESULT
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{project.result}</p>
          </section>
        </div>

        <div className="flex flex-col gap-8">
          {project.metrics.length > 0 && (
            <section>
              <h2 className="text-mono mb-4 font-semibold" style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', letterSpacing: '0.12em' }}>
                KEY METRICS
              </h2>
              <div className="flex flex-col gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="px-3 py-2 text-sm font-medium"
                    style={{
                      background: 'var(--color-accent-green-bg)',
                      border: '1px solid var(--color-accent-green-border)',
                      borderRadius: '6px',
                      color: 'var(--color-accent-green-text)',
                    }}
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-mono mb-4 font-semibold" style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', letterSpacing: '0.12em' }}>
              TECH STACK
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-3 py-1.5 text-xs"
                  style={{
                    background: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border-default)',
                    borderRadius: '6px',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'ui-monospace, monospace',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
