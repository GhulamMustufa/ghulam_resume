'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "A standard MVP takes 4-8 weeks, while enterprise SaaS or complex AI integrations range from 3-6 months depending on scope and requirements. We'll establish clear milestones before kicking off.",
  },
  {
    question: "Do you work fixed-price or hourly?",
    answer:
      "I typically work on a fixed-price milestone basis for clear deliverables. However, I'm open to retainer or hourly arrangements for ongoing staff-augmentation or continuous development.",
  },
  {
    question: "What happens after delivery?",
    answer:
      "I offer a standard 30-day bug-fixing warranty after launch. Following that, we can set up a monthly maintenance retainer or I can seamlessly hand over the codebase to your internal team.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. Once the final milestone is paid, all intellectual property, source code, and assets are fully transferred to you.",
  },
  {
    question: "Can you join an existing team or codebase?",
    answer:
      "Absolutely. As a Senior Software Engineer, I frequently parachute into existing Next.js or React Native codebases to clear technical debt, accelerate feature delivery, or lead a specific AI initiative.",
  },
  {
    question: "What's your communication style?",
    answer:
      "Async-first: daily Slack or WhatsApp updates, a weekly Loom progress walkthrough, and a shared board so you always know exactly where things stand.",
  },
  {
    question: "How do you handle AI integration?",
    answer:
      "I leverage the latest LLMs and APIs (like OpenAI, Anthropic, or local models) to add semantic search, automated content generation, and intelligent conversational agents directly into your product.",
  },
  {
    question: "Do you build for both web and mobile?",
    answer:
      "Yes, I offer full-stack web development using Next.js, and cross-platform mobile app development using React Native. A unified backend can serve both clients efficiently.",
  },
  {
    question: "What is your primary tech stack?",
    answer:
      "My expertise lies in the React ecosystem: Next.js for web, React Native for mobile, styled with Tailwind CSS. On the backend, I heavily rely on Node.js, Firebase, and PostgreSQL.",
  },
  {
    question: "How do we get started?",
    answer:
      "We start with a quick discovery call to align on goals. If it's a fit, I'll provide a technical proposal, timeline, and quote. We kick off as soon as the first milestone is funded.",
  },
  {
    question: "Do you offer UI/UX design services as well?",
    answer:
      "I focus primarily on engineering and architecture. However, I often collaborate with talented UI/UX designers, or I can implement beautiful, highly-functional interfaces using premium component libraries like Tailwind UI and shadcn/ui based on your wireframes.",
  },
  {
    question: "Can you migrate my existing React app to Next.js?",
    answer:
      "Yes, this is one of my specialties. I can incrementally or fully migrate your standard single-page React app to a Next.js architecture (App Router) to drastically improve SEO, performance, and Core Web Vitals.",
  },
  {
    question: "How do you ensure the apps you build are secure?",
    answer:
      "Security is baked into the architecture from day one. I implement strict authentication (OAuth2, JWT), Row-Level Security (RLS) in databases like PostgreSQL/Supabase, and secure payment handling via Stripe webhooks to protect user data.",
  },
  {
    question: "What if my project requires complex backend infrastructure?",
    answer:
      "As a full-stack engineer, I design robust backend systems using Node.js, NestJS, and PostgreSQL. Whether you need microservices, real-time WebSockets, or a high-throughput API, I can architect a solution that scales.",
  },
  {
    question: "Do you provide long-term maintenance and support?",
    answer:
      "Yes! After the initial build and warranty period, many of my clients opt for a monthly retainer. This covers dependency updates, server maintenance, performance monitoring, and ongoing feature enhancements.",
  },
  {
    question: "How do you handle testing and quality assurance?",
    answer:
      "I believe in a 'zero-rollbacks' philosophy. I write comprehensive unit and integration tests using Jest and Cypress. Additionally, I integrate proactive error monitoring tools like Sentry and Crashlytics to catch issues before users do.",
  },
  {
    question: "Can you build cross-platform mobile apps for iOS and Android?",
    answer:
      "Absolutely. I specialize in React Native and Expo, which allows me to maintain a single codebase that deploys high-performance, native-feeling applications to both the Apple App Store and Google Play Store.",
  },
  {
    question: "What industries or niches do you have experience in?",
    answer:
      "I have extensive experience building scalable solutions for Fintech (wealth management platforms), B2B SaaS, E-Commerce marketplaces, and cutting-edge AI-native products (like RAG-based copilots).",
  },
  {
    question: "How do you manage intellectual property (IP) and NDAs?",
    answer:
      "I take confidentiality very seriously. I am always happy to sign a Non-Disclosure Agreement (NDA) before we even discuss your project details. Your ideas and proprietary data remain strictly yours.",
  },
  {
    question: "Why should I hire a freelance Senior Engineer instead of an agency?",
    answer:
      "Hiring me means you get direct communication with the person actually writing the code—no account managers or junior devs learning on your dime. You get enterprise-grade architecture delivered with startup speed and agility.",
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faqs" className="section-space scroll-mt-20 py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p
            className="text-mono mb-2"
            style={{ color: 'var(--color-accent-text, #7c3aed)', fontSize: '0.65rem', letterSpacing: '0.18em' }}
          >
            ⬡ FAQ
          </p>
          <h2
            className="text-section-title font-bold text-2xl sm:text-4xl tracking-tight"
            style={{ color: 'var(--color-text-main)' }}
          >
            Frequently Asked Questions
          </h2>
        </div>
        
        <div 
          className="border-t transition-colors"
          style={{ borderColor: 'var(--color-border-default)' }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="transition-colors border-b"
                style={{ 
                  borderColor: 'var(--color-border-default)',
                  backgroundColor: isOpen ? 'var(--color-bg-subtle)' : 'transparent'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between py-5 px-3 sm:px-4 text-left focus:outline-none transition-colors group"
                  aria-expanded={isOpen}
                >
                  <span 
                    className="text-base sm:text-lg font-medium pr-4 transition-colors group-hover:opacity-80"
                    style={{ color: 'var(--color-text-main)' }}
                  >
                    {faq.question}
                  </span>
                  <span 
                    className="flex-shrink-0 h-6 w-6 rounded-md flex items-center justify-center transition-transform duration-200"
                    style={{ 
                      color: 'var(--color-text-muted)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div 
                        className="px-3 sm:px-4 pb-5 text-sm sm:text-base leading-relaxed"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
