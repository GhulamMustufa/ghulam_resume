import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Footer } from '@/components/layout/Footer'
import { DynamicScrollToTop } from '@/components/ui/DynamicScrollToTop'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = 'https://ghulam-mustafa.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ghulam Mustafa | Product-Minded AI, SaaS & Mobile Engineer',
    template: '%s | Ghulam Mustafa',
  },
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
    title: {
      default: 'Ghulam Mustafa | Product-Minded AI, SaaS & Mobile Engineer',
      template: '%s | Ghulam Mustafa',
    },
    description:
      'Senior engineer building AI-powered SaaS and high-performance web/mobile products. 5+ years · React · React Native · Node.js.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Ghulam Mustafa — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Ghulam Mustafa | Product-Minded AI, SaaS & Mobile Engineer',
      template: '%s | Ghulam Mustafa',
    },
    description: 'Senior engineer · React · Node.js · AI · Open to senior remote roles',
  },

  icons: {
    icon: [
      { url: '/icon-light.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Ghulam Mustafa',
      jobTitle: 'Product-Minded AI, SaaS & Mobile Engineer',
      url: SITE_URL,
      email: 'hello@ghulam-mustafa.com',
      sameAs: [
        'https://github.com/GhulamMustufa',
        'https://www.linkedin.com/in/ghulam909',
        'https://twitter.com/GhulamMustufa',
      ],
      knowsAbout: [
        'React',
        'React Native',
        'Next.js',
        'TypeScript',
        'Next.js',
        'OpenAI API',
        'AI Engineering',
        'SaaS Architecture',
        'PostgreSQL',
        'Firebase',
        'Node.js',
        'Artificial Intelligence',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'Ghulam Mustafa — Portfolio',
      url: SITE_URL,
    },
    {
      '@type': 'ProfilePage',
      isPartOf: {
        '@id': SITE_URL,
      },
      about: {
        '@type': 'Person',
        name: 'Ghulam Mustafa',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ fontFamily: 'var(--font-geist-sans, var(--font-sans, ui-sans-serif, system-ui))' }}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent theme flash before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('portfolio-theme');const valid=['dark-ide','light-premium','dark-midnight','dark-graphite','dark-oled','dark-violet','light-minimal','light-warm','light-mono'];if(valid.includes(t))document.documentElement.setAttribute('data-theme',t);else document.documentElement.setAttribute('data-theme','dark-ide')}catch(e){document.documentElement.setAttribute('data-theme','dark-ide')}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
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
        <DynamicScrollToTop />
        
        {/* Vercel Analytics (Standard First-Party Analytics) */}
        <Analytics />
        
        {/* 
          10x Ad-Blocker Bypass Analytics (Self-Hosted Umami/Plausible).
          Once your VPS is running, uncomment this script. 
          Ad-blockers won't block it because it requests a local asset '/assets/ui-metrics.js' 
          and sends data to a local API route '/api/ui-metrics/send', both of which are 
          secretly rewritten by next.config.ts to your stats.ghulam-mustafa.com server!
        */}
        {/* <script defer src="/assets/ui-metrics.js" data-website-id="your-uuid-here" data-host-url="/api/ui-metrics/send"></script> */}
      </body>
    </html>
  )
}
