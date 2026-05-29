'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { navItems } from '@/data/portfolioData'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

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
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="site-header sticky top-3 z-50 mb-12 rounded-2xl border px-4 py-3 backdrop-blur sm:px-6"
    >
      <div className="flex items-center justify-between gap-4">
        <a href="#" className="text-sm font-semibold tracking-wide text-white">
          Ghulam Mustafa
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.label}
                href={item.href}
                className={clsx(
                  'text-sm transition-colors duration-150',
                  isActive
                    ? 'font-medium text-white'
                    : 'text-slate-400 hover:text-white',
                )}
              >
                {item.label}
                {isActive && (
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-sky-400 align-middle" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-100 transition hover:bg-sky-400/20"
          >
            Hire Me
            <ArrowRight size={14} />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:text-white md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 pb-1 pt-3">
              {navItems.map((item) => {
                const sectionId = item.href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      'rounded-lg px-3 py-2 text-sm transition',
                      isActive
                        ? 'bg-white/5 font-medium text-white'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white',
                    )}
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
