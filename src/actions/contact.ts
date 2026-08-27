'use server'

import { Resend } from 'resend'

export async function submitContactForm(prevState: unknown, formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  if (!name || !email || !message) {
    return { error: 'Please fill out all fields.' }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_fallback')
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'ghulammustafa.mf@gmail.com',
      subject: `New Lead from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      console.error('Resend Error:', error)
      return { error: 'Failed to send message. Please try again.' }
    }

    return { success: true }
  } catch (err) {
    console.error('Contact Form Error:', err)
    return { error: 'An unexpected error occurred. Please try again.' }
  }
}
