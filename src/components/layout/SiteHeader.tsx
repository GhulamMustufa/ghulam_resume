'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X, Sun, Moon } from 'lucide-react'
import clsx from 'clsx'
import { navItems } from '@/data/portfolioData'
import { useTheme } from '@/components/ThemeProvider'
import type { ThemeName } from '@/types/theme'

const themes: { value: ThemeName; label: string; group: string }[] = [
  { value: 'dark-ide', label: 'IDE Dark', group: 'Dark' },
  { value: 'dark-midnight', label: 'Midnight Navy', group: 'Dark' },
  { value: 'dark-graphite', label: 'Graphite', group: 'Dark' },
  { value: 'dark-oled', label: 'OLED Black', group: 'Dark' },
  { value: 'dark-violet', label: 'Violet Space', group: 'Dark' },
  { value: 'light-premium', label: 'Premium Light', group: 'Light' },
  { value: 'light-minimal', label: 'Minimal', group: 'Light' },
  { value: 'light-warm', label: 'Warm', group: 'Light' },
  { value: 'light-mono', label: 'Monochrome', group: 'Light' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  /* Track which section is in the viewport centre */
  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="site-header sticky top-3 z-50 mb-12 px-4 py-3 sm:px-5"
      style={{ borderRadius: '8px' }}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Logo / wordmark */}
        <a href="#" className="flex shrink-0 items-center transition-opacity hover:opacity-80">
          <span className="text-mono text-base font-bold tracking-widest sm:text-lg" style={{ color: 'var(--color-text-main)' }}>
            GHULAM.DEV
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.label}
                href={item.href}
                className={clsx(
                  'rounded px-3 py-1.5 text-xs font-medium transition-colors duration-150',
                  isActive
                    ? 'text-[var(--color-text-main)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]',
                )}
                style={isActive ? { color: 'var(--color-accent-text)' } : {}}
              >
                {item.label}
                {isActive && (
                  <span
                    className="ml-1 inline-block h-1 w-1 rounded-full align-middle"
                    style={{ background: 'var(--color-accent-text)' }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark-ide' ? 'light-premium' : 'dark-ide')}
              className="flex h-7 w-7 items-center justify-center transition"
              style={{
                border: '1px solid var(--color-border-default)',
                borderRadius: '6px',
                color: 'var(--color-text-muted)',
                background: 'var(--color-bg-subtle)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark-ide' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="accent-button inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold"
          >
            Hire Me
            <ArrowRight size={12} />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-7 w-7 items-center justify-center transition md:hidden"
            style={{
              border: '1px solid var(--color-border-default)',
              borderRadius: '6px',
              color: 'var(--color-text-muted)',
            }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-full mt-2 z-50 md:hidden"
            aria-label="Mobile navigation"
          >
            <div
              className="flex flex-col gap-0.5 p-3 rounded-lg shadow-2xl"
              style={{
                background: 'var(--color-header-bg)',
                border: '1px solid var(--color-header-border)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >

              {navItems.map((item) => {
                const sectionId = item.href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileOpen(false)
                      setTimeout(() => {
                        const target = document.querySelector(item.href)
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' })
                          window.history.pushState(null, '', item.href)
                        }
                      }, 250)
                    }}
                    className={clsx(
                      'rounded px-3 py-2 text-sm transition',
                      isActive
                        ? 'font-medium'
                        : 'hover:text-[var(--color-text-main)]',
                    )}
                    style={
                      isActive
                        ? { background: 'var(--color-bg-hover)', color: 'var(--color-text-main)' }
                        : { color: 'var(--color-text-muted)' }
                    }
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
