type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-6 max-w-3xl">
      <p
        className="text-mono mb-1"
        style={{
          color: 'var(--color-accent-text)',
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
        }}
      >
        ⬡ {eyebrow.toUpperCase()}
      </p>
      <h2
        className="text-section-title font-bold"
        style={{ color: 'var(--color-text-main)' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-3 text-body-lg"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
