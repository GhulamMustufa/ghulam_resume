import { NextResponse } from 'next/server'
import {
  experiences,
  education,
  skillGroups,
  projects,
  contactDetails,
  socialLinks,
} from '@/data/portfolioData'

export async function GET() {
  const resume = {
    personalInfo: {
      name: 'Ghulam Mustafa',
      title: 'Senior Full-Stack & AI Engineer',
      email: contactDetails.find((c) => c.label === 'Email')?.value,
      phone: {
        primary: contactDetails.find((c) => c.label === 'WhatsApp (MY)')?.value,
        secondary: contactDetails.find((c) => c.label === 'WhatsApp (PK)')?.value,
      },
      socials: socialLinks.map((link) => ({
        platform: link.label,
        url: link.href,
      })),
    },
    summary:
      'Senior Full-Stack & AI Engineer specializing in React, Next.js, React Native, Node.js, and LLM integrations. Proven track record of shipping high-performance, scalable products for B2B enterprises, fintech startups, and high-traffic consumer apps.',
    experience: experiences.map((exp) => ({
      role: exp.role,
      company: exp.company,
      period: exp.period,
      type: exp.mode,
      headline: exp.highlight,
      achievements: exp.outcomes,
    })),
    skills: skillGroups.map((group) => ({
      category: group.name,
      technologies: group.items,
    })),
    featuredProjects: projects.map((proj) => ({
      name: proj.title,
      category: proj.category,
      techStack: proj.stack,
      summary: {
        problem: proj.problem,
        solution: proj.solution,
        result: proj.result,
      },
      url: proj.url,
    })),
    education: education.map((edu) => ({
      institute: edu.institute,
      degree: edu.degree,
      years: edu.years,
    })),
  }

  // Adding CORS headers so anyone can fetch this from a terminal or frontend
  return NextResponse.json(resume, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Content-Type': 'application/json',
    },
  })
}
