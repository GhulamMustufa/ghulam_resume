'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Footer } from '@/components/layout/Footer'

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAgency = pathname?.startsWith('/agency')

  // If viewing GM Labs agency routes, render children without portfolio shell, header, or footer
  if (isAgency) {
    return <>{children}</>
  }

  // Personal portfolio layout
  return (
    <ThemeProvider>
      <div className="app-shell relative min-h-screen text-[var(--color-text-main)]">
        <div className="theme-radial pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pb-0 pt-6 sm:px-6 lg:px-8">
          <SiteHeader />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}
