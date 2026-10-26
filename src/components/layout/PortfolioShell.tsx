'use client'

import React, { useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Footer } from '@/components/layout/Footer'

const emptySubscribe = () => () => {}

export function PortfolioShell({
  children,
  isAgencyInitial = false,
}: {
  children: React.ReactNode
  isAgencyInitial?: boolean
}) {
  const pathname = usePathname()
  const isAgencyClient = useSyncExternalStore(
    emptySubscribe,
    () => {
      if (typeof window === 'undefined') return isAgencyInitial
      const host = window.location.hostname
      return host.startsWith('agency.') || host === 'agency.ghulam-mustafa.com'
    },
    () => isAgencyInitial
  )

  const isAgency =
    isAgencyInitial ||
    isAgencyClient ||
    pathname?.startsWith('/agency')

  // If viewing GM Labs agency routes or subdomain, render children without portfolio shell, header, or footer
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
