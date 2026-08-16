'use client'

import { motion } from 'framer-motion'
import { track } from '@vercel/analytics/react'

export function IntroVideoSection() {
  return (
    <section className="mb-20 px-4 sm:px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] p-2 shadow-2xl"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#0a0a0a]">
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            playsInline
            muted
            onPlay={() => track('Play Intro Video')}
          >
            <source src="/intro_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  )
}
