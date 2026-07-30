import { Metadata } from 'next'
import { services, projects } from '@/data/portfolioData'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug)

  if (!service) {
    return {}
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug)

  if (!service) {
    notFound()
  }

  const relatedProjects = service.caseStudySlugs
    ? projects.filter((p) => service.caseStudySlugs?.includes(p.slug))
    : []

  // Generate FAQ JSON-LD Schema
  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null

  return (
    <div className="pt-8 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="mb-8">
        <Link 
          href="/#services" 
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--color-text-main)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <div className="surface-card p-8 sm:p-12 rounded-2xl mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-default)] w-fit">
            <service.icon className="text-[var(--color-accent-blue-text)]" size={32} />
          </div>
          {service.metricDrivenHeader && (
            <span className="text-sm font-medium text-[var(--color-accent-green-text)] bg-[var(--color-accent-green-bg)] px-3 py-1.5 rounded-full border border-[var(--color-accent-green-border)] w-fit">
              {service.metricDrivenHeader}
            </span>
          )}
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--color-text-main)' }}>
          {service.title}
        </h1>
        
        <p className="text-lg sm:text-xl mb-8 max-w-2xl" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
          {service.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1.5 text-sm font-medium"
              style={{
                background: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border-default)',
                borderRadius: '6px',
                color: 'var(--color-text-main)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Capabilities Section */}
      {service.capabilities && service.capabilities.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-text-main)' }}>
            Core Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.capabilities.map((cap, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)]">
                <CheckCircle2 className="text-[var(--color-accent-blue-text)] shrink-0 mt-0.5" size={20} />
                <span style={{ color: 'var(--color-text-secondary)' }}>{cap}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Case Studies */}
      {relatedProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-text-main)' }}>
            Related Case Studies
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedProjects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug} className="group block">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-[var(--color-border-subtle)]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[var(--color-bg-subtle)] flex items-center justify-center">
                      <span className="text-[var(--color-text-muted)]">No image</span>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-[var(--color-accent-blue-text)] transition-colors" style={{ color: 'var(--color-text-main)' }}>
                  {project.title}
                </h3>
                <p className="text-sm line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
                  {project.problem}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-text-main)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="surface-card p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--color-text-main)' }}>
                  {faq.question}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
