import type React from 'react'

export type IconComponent = React.ComponentType<{ size?: number; className?: string }>

export type Stat = {
  label: string
  value: string
}

export type Achievement = {
  metric: string
  statement: string
  company: string
}

export type Project = {
  title: string
  category: string
  problem: string
  solution: string
  result: string
  metrics: string[]
  stack: string[]
  url?: string
}

export type SkillGroup = {
  name: string
  items: string[]
}

export type Experience = {
  role: string
  company: string
  period: string
  mode: string
  highlight: string
  outcomes: string[]
}

export type AIFocusItem = {
  title: string
  description: string
  status: 'shipping' | 'active' | 'building'
}

export type ContactAction = {
  label: string
  href: string
  icon: IconComponent
}

export type ContactDetail = {
  label: string
  value: string
  href?: string
  icon: IconComponent
}

export type Education = {
  institute: string
  degree: string
  years: string
  note?: string
}

export type Testimonial = {
  quote: string
  author: string
}

export type SocialLink = {
  label: string
  href: string
  icon: IconComponent
}

export type Service = {
  title: string
  description: string
  tags: string[]
  icon: IconComponent
}
