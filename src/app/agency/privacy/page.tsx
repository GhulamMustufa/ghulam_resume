import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Lock } from 'lucide-react'
import { agencyBrand } from '@/data/agencyData'

export const metadata: Metadata = {
  title: 'Privacy Policy | GM Labs',
  description:
    'Privacy Policy for GM Labs Technology Consulting. How we protect client information, proprietary project data, and ensure GDPR/CCPA compliance.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function AgencyPrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={14} />
        Back to GM Labs
      </Link>

      <div className="border-b border-white/[0.08] pb-6 mb-8 sm:mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
          <Lock size={13} />
          DATA PROTECTION &amp; PRIVACY
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Last updated: October 2026 · Operating Entity: {agencyBrand.legalName}
        </p>
      </div>

      <div className="space-y-8 sm:space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">1. Introduction &amp; Scope</h2>
          <p>
            At <strong>{agencyBrand.legalName}</strong> (&quot;GM Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect the privacy of our website visitors, clients, and prospective engineering partners. This Privacy Policy details how we collect, handle, store, and safeguard personal and business information gathered through our agency portal (<code>agency.ghulam-mustafa.com</code>) and during our technical consulting engagements.
          </p>
          <p>
            This policy adheres to modern international data protection standards, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">2. Information We Collect</h2>
          <p>
            We strictly limit data collection to what is necessary to evaluate, scope, execute, and deliver client software projects:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              <strong>Direct Inquiries &amp; Contact Details:</strong> When you submit a project inquiry, schedule an architecture audit, or reach out via email/WhatsApp, we collect your name, business email address, phone number, company name, and technical project description.
            </li>
            <li>
              <strong>Project &amp; Infrastructure Credentials:</strong> During contracted engagements, you may share API keys, staging access credentials, or repository permissions. All such sensitive technical data is stored in encrypted password managers and deleted upon project completion or offboarding.
            </li>
            <li>
              <strong>Log &amp; Technical Diagnostics:</strong> Standard web server logs collect basic telemetry (IP addresses, browser type, operating system, and request timestamps) strictly for security monitoring and DDoS mitigation.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">3. Protection of Client Code &amp; AI Training Policy</h2>
          <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/[0.04]">
            <p className="font-semibold text-white mb-1">
              Zero Public AI Training Guarantee:
            </p>
            <p className="text-xs text-slate-300">
              We strictly guarantee that your proprietary source code, internal schemas, API payloads, and project documentation are <strong>never used to train public machine learning models</strong>. Any LLM tooling utilized during development employs enterprise zero-data-retention APIs.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">4. How We Use Your Information</h2>
          <p>We process collected data exclusively for the following legitimate business purposes:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>To review project inquiries and prepare technical architecture proposals or Statements of Work (SOW).</li>
            <li>To execute engineering deliverables, run tests, and deploy software services under active contracts.</li>
            <li>To generate milestone invoices, verify payments via commercial processors (e.g., Stripe, direct wire), and maintain required accounting records.</li>
            <li>To provide technical warranty support and SLA incident response during the post-launch period.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">5. Third-Party Service Providers</h2>
          <p>
            We do not sell, rent, or trade your personal or business data. We may share necessary information with trusted enterprise service providers under strict confidentiality agreements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>Payment Gateways:</strong> Stripe and banking institutions to facilitate compliant global credit card or wire transactions.</li>
            <li><strong>Infrastructure &amp; Hosting:</strong> Vercel and AWS for application hosting, performance monitoring, and DNS management.</li>
            <li><strong>Version Control:</strong> GitHub for collaborative code repository management under private, secure permissions.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">6. Data Security &amp; Retention</h2>
          <p>
            We implement stringent technical and organizational security controls, including TLS 1.3 encryption for web transit, two-factor authentication (2FA) across all administrative tools, and automated security scans.
          </p>
          <p>
            Project communication records and billing records are retained for the statutory period required by tax and corporate regulations (typically 5 to 7 years), after which they are securely archived or purged.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">7. Your Rights (GDPR &amp; CCPA)</h2>
          <p>
            Depending on your jurisdiction, you possess the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>The right to request access to the personal data we hold about you.</li>
            <li>The right to request rectification or deletion of inaccurate or unnecessary data.</li>
            <li>The right to object to or restrict processing of your personal information.</li>
            <li>The right to request data portability in a machine-readable format.</li>
          </ul>
          <p>
            To exercise any of these rights, contact our Data Protection representative directly at <a href={`mailto:${agencyBrand.email}`} className="text-blue-400 hover:underline">{agencyBrand.email}</a>.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">8. Contact &amp; Privacy Officer</h2>
          <p>
            If you have questions or concerns regarding this Privacy Policy or our security practices, please reach out to:
          </p>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 font-mono text-xs text-slate-300 space-y-1.5">
            <p><strong className="text-white">Operating Entity:</strong> {agencyBrand.legalName}</p>
            <p><strong className="text-white">Operational Hubs:</strong> Karachi, Pakistan &amp; Kuala Lumpur, Malaysia (Remote-First Digital Practice)</p>
            <p><strong className="text-white">Data Protection Officer:</strong> Ghulam Mustafa</p>
            <p><strong className="text-white">Support SLA:</strong> Response within 24 business hours</p>
            <p><strong className="text-white">Email:</strong> {agencyBrand.email}</p>
            <p><strong className="text-white">Website:</strong> https://agency.ghulam-mustafa.com</p>
          </div>
        </section>
      </div>
    </div>
  )
}
