'use client'

import { useActionState } from 'react'
import { submitContactForm } from '@/actions/contact'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] rounded-xl h-full">
        <CheckCircle2 size={48} className="text-[var(--color-accent-green-text)] mb-4" />
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-main)' }}>Message Sent!</h3>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Thank you for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {state?.error && (
        <div className="flex items-center gap-2 p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
          <AlertCircle size={16} />
          {state.error}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium" style={{ color: 'var(--color-text-main)' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jane Doe"
            className="px-4 py-2.5 rounded-lg border focus:outline-none transition-colors"
            style={{ 
              background: 'var(--color-bg-subtle)', 
              borderColor: 'var(--color-border-default)',
              color: 'var(--color-text-main)'
            }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium" style={{ color: 'var(--color-text-main)' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="jane@example.com"
            className="px-4 py-2.5 rounded-lg border focus:outline-none transition-colors"
            style={{ 
              background: 'var(--color-bg-subtle)', 
              borderColor: 'var(--color-border-default)',
              color: 'var(--color-text-main)'
            }}
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium" style={{ color: 'var(--color-text-main)' }}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me about your project..."
          className="px-4 py-2.5 rounded-lg border focus:outline-none transition-colors resize-none"
          style={{ 
            background: 'var(--color-bg-subtle)', 
            borderColor: 'var(--color-border-default)',
            color: 'var(--color-text-main)'
          }}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="accent-button flex items-center justify-center gap-2 px-6 py-3 font-semibold w-full sm:w-auto sm:self-start disabled:opacity-70 transition-opacity mt-2"
      >
        {isPending ? 'Sending...' : 'Send Message'}
        {!isPending && <Send size={16} />}
      </button>
    </form>
  )
}
