import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { agencyBrand } from '@/data/agencyData'

export const metadata: Metadata = {
  title: 'Commercial Terms of Service | GM Labs',
  description:
    'Commercial terms of service, engagement policies, intellectual property transfer, milestone billing, and warranty terms for GM Labs clients.',
}

export default function AgencyTermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Back button */}
      <Link
        href="/agency"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={14} />
        Back to GM Labs
      </Link>

      <div className="border-b border-white/[0.08] pb-6 mb-8 sm:mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
          <ShieldCheck size={13} />
          COMMERCIAL AGREEMENT
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Terms of Service &amp; Client Agreement
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Last updated: October 2026 · Operating Entity: {agencyBrand.legalName}
        </p>
      </div>

      <div className="space-y-8 sm:space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">1. Overview &amp; Engagement Scope</h2>
          <p>
            These Terms of Service govern all software engineering, technical architecture, consulting, and AI systems implementation services provided by <strong>{agencyBrand.legalName}</strong> (&quot;GM Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to our business clients (&quot;Client&quot;, &quot;you&quot;).
          </p>
          <p>
            Each client engagement is defined by an agreed Statement of Work (SOW), technical proposal, or milestone schedule specifying the deliverables, timeline, and associated compensation.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">2. Intellectual Property (IP) Ownership</h2>
          <p>
            We operate on a <strong>100% Client Ownership</strong> standard:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              Upon receipt of full payment for each respective milestone or invoice, all custom source code, documentation, designs, and digital assets produced specifically for the Client become the exclusive intellectual property of the Client.
            </li>
            <li>
              GM Labs retains ownership of pre-existing proprietary developer tooling, boilerplate libraries, and open-source packages, granting Client a perpetual, royalty-free, non-exclusive license to use such components integrated into the final deliverable.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">3. Invoicing, Payments &amp; Milestones</h2>
          <p>
            Engagements are billed in United States Dollars (USD) or equivalent agreed currencies via secure electronic payment gateways (including Stripe, direct wire transfer, or escrow):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              <strong>Fixed-Price Sprints:</strong> Billed on a milestone basis (typically 50% deposit upon kickoff, remainder tied to delivery and verified staging sign-off).
            </li>
            <li>
              <strong>Monthly Retainers:</strong> Billed in advance at the start of each 30-day sprint cycle.
            </li>
            <li>
              Invoices are payable within seven (7) business days of issuance unless otherwise stipulated in the SOW.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">4. 30-Day Bug Warranty &amp; SLA</h2>
          <p>
            We stand behind our production quality:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              All fixed-scope deliverables include a complimentary <strong>30-day warranty</strong> starting upon production deployment or delivery handover.
            </li>
            <li>
              Any reproducible defects, bugs, or deviations from the mutually agreed SOW identified within this window will be remediated at zero additional charge.
            </li>
            <li>
              Warranty does not cover third-party breaking changes (e.g., unexpected upstream API deprecations, infrastructure outages by hosting providers), or modifications made to the codebase by third parties after handover.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">5. Confidentiality &amp; Mutual NDA</h2>
          <p>
            Both parties agree to hold all proprietary trade secrets, user data, source code, and commercial strategies disclosed during the engagement in strict confidence. We routinely execute bilateral Non-Disclosure Agreements (NDAs) prior to codebase access or architecture discovery.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">6. Cancellation, Termination &amp; Refunds</h2>
          <p>
            Either party may terminate an ongoing engagement with fourteen (14) days written notice:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              In the event of early termination, Client is responsible solely for work completed up to the date of notice, and all completed work and code will be immediately transferred to Client upon settlement.
            </li>
            <li>
              Deposits for unscheduled or uninitiated sprint work are refundable minus any incurred transaction or architecture setup costs.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">7. Contact &amp; Legal Notices</h2>
          <p>
            For commercial inquiries, invoicing disputes, or legal documentation, please contact our team directly:
          </p>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 font-mono text-xs text-slate-300 space-y-1">
            <p><strong className="text-white">Entity:</strong> {agencyBrand.legalName}</p>
            <p><strong className="text-white">Direct Email:</strong> {agencyBrand.email}</p>
            <p><strong className="text-white">Inquiries:</strong> https://agency.ghulam-mustafa.com</p>
          </div>
        </section>
      </div>
    </div>
  )
}
