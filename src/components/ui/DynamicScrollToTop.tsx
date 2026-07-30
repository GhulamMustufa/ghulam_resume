'use client'

import dynamic from 'next/dynamic'

export const DynamicScrollToTop = dynamic(
  () => import('./ScrollToTop').then((mod) => mod.ScrollToTop),
  { ssr: false }
)
