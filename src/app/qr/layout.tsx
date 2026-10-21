import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Contact Card & vCard | Ghulam Mustafa',
  description: 'Download the official vCard contact card for Ghulam Mustafa, Senior Full-Stack & AI Engineer.',
  alternates: {
    canonical: '/qr',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function QRLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
