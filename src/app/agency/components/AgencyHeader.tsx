'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X, Shield, ExternalLink } from 'lucide-react'

export function AgencyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070A10]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link 
          href="/agency" 
          className="flex items-center gap-2.5 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono font-bold text-xs group-hover:border-blue-500/40 transition-colors">
            GM
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-base font-bold tracking-wider text-white">
              GM LABS
            </span>
            <span className="text-[0.62rem] font-mono tracking-widest text-blue-400/90 -mt-0.5 uppercase">
              AI &amp; SYSTEMS STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="/agency#services" className="hover:text-white transition-colors">Practice Areas</a>
          <a href="/agency#case-studies" className="hover:text-white transition-colors">Client Work</a>
          <a href="/agency#engagement" className="hover:text-white transition-colors">Engagement Models</a>
          <a href="/agency#process" className="hover:text-white transition-colors">Process</a>
          <a href="/agency#founder" className="hover:text-white transition-colors">Founder</a>
          <Link href="/agency/terms" className="hover:text-white transition-colors">Terms</Link>
        </nav>

        {/* Desktop Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href="/agency#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-all hover:scale-[1.02]"
          >
            Start a Project
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[53px] bottom-0 z-50 bg-[#070A10]/95 backdrop-blur-xl border-t border-white/[0.08] px-5 py-6 flex flex-col justify-between overflow-y-auto md:hidden">
          <nav className="space-y-4">
            <p className="text-[0.68rem] font-mono uppercase tracking-widest text-slate-500 font-bold px-2">
              Navigation
            </p>
            <div className="flex flex-col space-y-1">
              <a
                href="/agency#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors"
              >
                Practice Areas
              </a>
              <a
                href="/agency#case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors"
              >
                Client Work &amp; Case Studies
              </a>
              <a
                href="/agency#engagement"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors"
              >
                Engagement Models &amp; Pricing
              </a>
              <a
                href="/agency#process"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors"
              >
                Delivery Process
              </a>
              <a
                href="/agency#founder"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors"
              >
                Founder (Ghulam Mustafa)
              </a>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex flex-col space-y-1">
              <p className="text-[0.68rem] font-mono uppercase tracking-widest text-slate-500 font-bold px-2 mb-1">
                Legal &amp; Portfolio
              </p>
              <Link
                href="/agency/terms"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Terms of Service</span>
                <Shield size={13} className="text-blue-400" />
              </Link>
              <Link
                href="/agency/privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Privacy Policy</span>
                <Shield size={13} className="text-emerald-400" />
              </Link>
              <a
                href="https://ghulam-mustafa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl text-xs font-medium text-blue-400 hover:bg-blue-500/10 transition-colors flex items-center justify-between"
              >
                <span>Ghulam&apos;s Personal Portfolio</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </nav>

          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <a
              href="/agency#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 active:bg-blue-500 transition-colors"
            >
              Start a Project Discovery
              <ArrowUpRight size={16} />
            </a>
            <p className="text-center font-mono text-[0.65rem] text-slate-500">
              Q4 ENGAGEMENTS OPEN · RESPONSE WITHIN 24H
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
