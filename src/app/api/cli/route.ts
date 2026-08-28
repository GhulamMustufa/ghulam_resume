import { NextResponse } from 'next/server'

// ANSI escape codes for terminal coloring
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  
  // Foreground Colors
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  
  // Bright Colors
  brightCyan: '\x1b[96m',
  brightBlue: '\x1b[94m',
  brightYellow: '\x1b[93m',
}

export async function GET() {
  const resume = `
${C.bold}${C.brightCyan}GHULAM MUSTAFA${C.reset}
${C.gray}Senior Full-Stack & AI Engineer${C.reset}

${C.bold}${C.brightYellow}> ABOUT${C.reset}
  Specializing in React, Next.js, React Native, Node.js, and LLM integrations.
  Proven track record of shipping high-performance, scalable products for 
  B2B enterprises, fintech startups, and high-traffic consumer apps.

${C.bold}${C.brightYellow}> EXPERIENCE${C.reset}
  ${C.bold}Senior Full-Stack & AI Engineer${C.reset} @ Early-Stage Startups (2026-Present)
  ${C.bold}Senior Software Engineer${C.reset}        @ Lumida Wealth (2025-2026)
  ${C.bold}Software Engineer${C.reset}               @ Udhaar Book (2022-2025)
  ${C.bold}Mobile App Developer${C.reset}            @ Unilever Pakistan (2022-2024)
  ${C.bold}Full-Stack Engineer${C.reset}             @ Dastgyr (2021-2022)

${C.bold}${C.brightYellow}> TOP SKILLS${C.reset}
  ${C.green}Frontend:${C.reset} React, Next.js, TypeScript, TailwindCSS
  ${C.green}Backend:${C.reset}  Node.js, PostgreSQL, Prisma, NestJS
  ${C.green}Mobile:${C.reset}   React Native, Expo, Hermes, Offline-First
  ${C.green}AI & LLM:${C.reset} OpenAI API, Prompt Engineering, RAG, Streaming APIs

${C.bold}${C.brightYellow}> CONTACT & LINKS${C.reset}
  Email:    hello@ghulam-mustafa.com
  GitHub:   https://github.com/GhulamMustufa
  LinkedIn: https://www.linkedin.com/in/ghulam909
  JSON API: ${C.dim}curl ghulam-mustafa.com/api/v1/resume${C.reset}

${C.italic}To view my full interactive portfolio, visit this URL in a browser.${C.reset}
`

  return new NextResponse(resume, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
