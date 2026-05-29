import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const SITE_URL = 'https://resume-ghulam.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ghulam Mustafa | Senior Full-Stack & Mobile Engineer',
  description:
    'Ghulam Mustafa — Senior Full-Stack & Mobile Engineer with 5+ years shipping production React, Node.js, and AI-integrated applications. Open to senior remote roles.',
  authors: [{ name: 'Ghulam Mustafa' }],
  keywords: [
    'Ghulam Mustafa',
    'Senior Full-Stack Engineer',
    'Senior React Native Developer',
    'React Native Engineer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript Engineer',
    'AI Engineer',
    'LLM Integration',
    'SaaS Developer',
    'Fintech Engineer',
    'Remote Full-Stack Engineer',
    'Remote React Native Developer',
    'Remote Mobile Engineer',
  ],
  openGraph: {
    title: 'Ghulam Mustafa | Senior Full-Stack & Mobile Engineer',
    description:
      'Senior engineer building AI-powered SaaS and high-performance web/mobile products. 5+ years · React · React Native · Node.js.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Ghulam Mustafa — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghulam Mustafa | Senior Full-Stack & Mobile Engineer',
    description: 'Senior engineer · React · Node.js · AI · Open to senior remote roles',
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ghulam Mustafa',
  jobTitle: 'Senior Full-Stack & Mobile Engineer',
  url: SITE_URL,
  email: 'ghulammustafa.mf@gmail.com',
  sameAs: [
    'https://github.com/GhulamMustufa',
    'https://www.linkedin.com/in/ghulam909',
  ],
  knowsAbout: [
    'React',
    'React Native',
    'Node.js',
    'TypeScript',
    'Next.js',
    'OpenAI API',
    'AI Engineering',
    'SaaS Architecture',
    'PostgreSQL',
    'Firebase',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Prevent theme flash before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('portfolio-theme');if(t==='executive'||t==='neon-saas')document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="app-shell relative min-h-screen text-slate-100">
            <div className="theme-radial pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto max-w-6xl px-4 pb-0 pt-6 sm:px-6 lg:px-8">
              <SiteHeader />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
