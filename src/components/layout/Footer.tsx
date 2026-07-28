
export function Footer() {
  return (
    <footer
      className="mt-4 pb-10 pt-6"
      style={{ borderTop: '1px solid var(--color-border-default)' }}
    >
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex shrink-0 items-center">
          <span className="text-mono text-sm font-bold tracking-widest opacity-80 sm:text-base">
            GHULAM.DEV
          </span>
        </div>

        <p
          className="text-mono text-center"
          style={{ color: 'var(--color-text-muted)', fontSize: '0.65rem', letterSpacing: '0.1em' }}
        >
          © {new Date().getFullYear()} AI ENGINEER. BUILT FOR PRECISION.
        </p>

        <div className="flex items-center gap-4">
          {['GitHub', 'LinkedIn', 'Source'].map((label, i) => {
            const hrefs = [
              'https://github.com/GhulamMustufa',
              'https://www.linkedin.com/in/ghulam909',
              '#',
            ]
            return (
              <a
                key={label}
                href={hrefs[i]}
                target={hrefs[i] !== '#' ? '_blank' : undefined}
                rel={hrefs[i] !== '#' ? 'noreferrer' : undefined}
                className="text-mono transition-colors hover:text-[var(--color-text-main)]"
                style={{ color: 'var(--color-text-muted)', fontSize: '0.65rem', letterSpacing: '0.1em' }}
              >
                {label}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
