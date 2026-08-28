'use client'

import React from 'react'
import QRCode from 'react-qr-code'
import { motion } from 'framer-motion'
import { contactDetails } from '@/data/portfolioData'
import { ArrowLeft, Download, UserPlus } from 'lucide-react'
import Link from 'next/link'

export default function QRPage() {
  const email = contactDetails.find((c) => c.label === 'Email')?.value || 'hello@ghulam-mustafa.com'
  const myPhoneRaw = contactDetails.find((c) => c.label === 'WhatsApp (MY)')?.href || 'https://wa.me/60148130908'
  const pkPhoneRaw = contactDetails.find((c) => c.label === 'WhatsApp (PK)')?.href || 'https://wa.me/923087015957'
  
  const myPhone = myPhoneRaw.replace('https://wa.me/', '+')
  const pkPhone = pkPhoneRaw.replace('https://wa.me/', '+')

  // The raw vCard text that goes directly into the QR Code
  // This allows offline scanning and instant "Add Contact" popups on iOS/Android
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Mustafa;Ghulam;;;
FN:Ghulam Mustafa
TITLE:Senior Full-Stack & AI Engineer
EMAIL;TYPE=INTERNET;TYPE=WORK:${email}
TEL;TYPE=CELL;TYPE=PREF:${myPhone}
TEL;TYPE=WORK:${pkPhone}
URL:https://ghulam-mustafa.com
URL:https://www.linkedin.com/in/ghulam909
URL:https://github.com/GhulamMustufa
END:VCARD`

  // For the manual download button
  const handleDownloadVCard = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Ghulam_Mustafa.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-12 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[var(--color-surface-1)] border border-[var(--color-border-default)] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[var(--color-cta-bg)]/10 flex items-center justify-center mb-6">
          <UserPlus className="text-[var(--color-cta-bg)]" size={28} />
        </div>
        
        <h1 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">Ghulam Mustafa</h1>
        <p className="text-[var(--color-text-secondary)] font-medium mb-8">Senior Full-Stack & AI Engineer</p>

        {/* QR Code Container */}
        <div className="bg-white p-4 rounded-2xl shadow-inner border border-gray-100 mb-8">
          <QRCode
            value={vCardData}
            size={220}
            level="M" // Medium error correction allows for a slightly less dense QR code
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>

        <p className="text-sm text-[var(--color-text-muted)] mb-8 max-w-[250px]">
          Scan with your phone camera to instantly save my contact card.
        </p>

        <div className="flex flex-col w-full gap-3">
          <button
            onClick={handleDownloadVCard}
            className="w-full accent-button flex items-center justify-center gap-2 px-6 py-3 font-semibold transition-opacity rounded-xl"
          >
            <Download size={18} />
            Download vCard
          </button>
          
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold transition-colors rounded-xl bg-[var(--color-surface-2)] text-[var(--color-text-main)] hover:bg-[var(--color-border-default)] border border-[var(--color-border-subtle)]"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
