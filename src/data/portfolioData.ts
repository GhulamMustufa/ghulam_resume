import { Mail, Phone, ExternalLink, Monitor, Smartphone, Sparkles, Server } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'
import type {
  Achievement,
  AIFocusItem,
  ContactAction,
  ContactDetail,
  Education,
  Experience,
  Project,
  Service,
  SkillGroup,
  SocialLink,
  Stat,
  Testimonial,
} from '@/types/portfolio'

export const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'AI Focus', href: '#ai-focus' },
  { label: 'Contact', href: '#contact' },
]

/* Hero stat cards — context-labelled so they're meaningful at a glance */
export const heroStats: Stat[] = [
  { value: '0 rollbacks', label: '6+ consecutive sprints — Lumida Wealth' },
  { value: '100K+', label: 'Active users — Udhaar Book' },
  { value: '40%', label: 'App startup speed — Udhaar Book' },
  { value: '50%', label: 'API latency cut — Dastgyr' },
]

export const keyAchievements: Achievement[] = [
  {
    metric: 'Zero rollbacks',
    statement: 'Delivered optimised investor features on a fast monthly sprint cadence — zero production rollbacks across 6+ consecutive releases on a live high-net-worth investor platform.',
    company: 'Lumida Wealth',
  },
  {
    metric: '100K+ users impacted',
    statement: 'Built and maintained critical ledger, payment, and credit features used daily by 100K+ SMB users — while cutting app startup by 40% through Hermes tuning, FlatList virtualisation, and strategic memoisation.',
    company: 'Udhaar Book',
  },
  {
    metric: '30% more engagement',
    statement: "Grew user engagement on Unilever's nationwide B2B retail app through targeted UX redesigns and onboarding flow optimisation.",
    company: "Unilever 'Roll'",
  },
  {
    metric: 'End-to-end delivery',
    statement: "Acted as a critical individual contributor on Roll — owning full sprint cycles end-to-end and consistently shipping fast, impactful features that kept the platform responsive to distributor demands.",
    company: "Unilever 'Roll'",
  },
  {
    metric: '50% faster APIs',
    statement: 'Contributed to backend optimisations that halved API response times and enabled the platform to handle 3× the order volume with no additional infrastructure.',
    company: 'Dastgyr',
  },
  {
    metric: '5% → 2% crash rate',
    statement: 'Halved mobile crash rate across three React Native apps through Crashlytics monitoring, structured error handling, and native module fixes.',
    company: 'Dastgyr',
  },
]

export const projects: Project[] = [
  {
    title: 'Lumida Wealth Investor Platform',
    category: 'AI + Fintech SaaS',
    problem:
      'High-net-worth investors needed reliable portfolio visibility, secure access, and faster decision support across web and mobile.',
    solution:
      'Shipped OAuth2-secured investor workflows, real-time portfolio sync, and LLM-powered insight experiences using OpenAI API across iOS, Android, and web.',
    result:
      'Zero production rollbacks across 6+ consecutive sprints with a consistent monthly release cadence. Reduced UI bug reports by 35% through WCAG 2.1 enforcement.',
    metrics: ['0 rollbacks in 6+ sprints', '35% fewer UI bugs', 'Monthly release cadence'],
    stack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'OpenAI API', 'OAuth2'],
    url: 'https://apps.apple.com/us/app/lumida-invest/id6753766251',
  },
  {
    title: 'Udhaar Book Ledger & Payment Flows',
    category: 'B2B Mobile Product',
    problem:
      'SMB users faced slow app startup and unstable sessions while handling daily credit and payment operations on low-bandwidth networks.',
    solution:
      'Built offline-first sync with Firebase Realtime Database and optimised the React Native runtime via FlatList virtualisation, Hermes engine tuning, and strategic memoisation — profiled with Flipper.',
    result:
      'Delivered a 40% faster startup, 25% drop-off reduction, and consistent monthly releases for 3 years across 100K+ active users.',
    metrics: ['100K+ active users', '40% faster load times', '25% drop-off reduction', 'sub-200ms UI response'],
    stack: ['React Native', 'Firebase', 'Hermes', 'Flipper', 'Node.js'],
    url: 'https://play.google.com/store/apps/details?id=com.oscarudhaarapp&hl=en',
  },
  {
    title: "Unilever 'Roll' Retail Platform",
    category: 'Enterprise Mobile',
    problem:
      'Distributor ordering operations needed reliability and better UX to drive retailer engagement across Pakistan.',
    solution:
      'Maintained and scaled the app with targeted UX redesigns, onboarding optimisations, and Sentry-based proactive error monitoring with structured incident response.',
    result:
      '30% engagement growth and 99% uptime across thousands of daily B2B distributor transactions nationwide.',
    metrics: ['30% engagement growth', '99% uptime', 'Thousands of daily transactions'],
    stack: ['React Native', 'Sentry', 'Mobile Performance Tuning'],
    url: 'https://play.google.com/store/apps/details?id=com.oscar_unilever_app&hl=en',
  },
  {
    title: 'Dastgyr Multi-App Commerce Engine',
    category: 'Operational Commerce Infrastructure',
    problem:
      'High-order-volume operations needed faster APIs and stable app performance across retailer, picker, and driver experiences.',
    solution:
      'Built the picker app from scratch as sole developer. Contributed to driver and retailer app features alongside the engineering team. Collaborated on Node.js/PostgreSQL service optimisations and owned Crashlytics crash monitoring across all three apps.',
    result:
      'Cut API latency 50%, scaled 3× traffic with zero infrastructure changes, and reduced crash rate from 5% to 2% — all while processing 10K+ daily orders.',
    metrics: ['10K+ daily orders', '50% faster API response', '3× traffic scaled', 'Crash rate 5%→2%', 'sub-200ms UI'],
    stack: ['Node.js', 'PostgreSQL', 'React Native', 'Crashlytics', 'AWS'],
    url: 'https://play.google.com/store/apps/details?id=com.dstgyr.dastgyr',
  },
  {
    title: 'AI Visa Advisor',
    category: 'AI · Immigration Tech',
    problem:
      'Visa applicants rely on overly optimistic eligibility checkers that ignore real refusal rates — leading to wasted fees, failed applications, and false confidence going into the process.',
    solution:
      'Built an AI-powered scoring engine that cross-references 17 official government sources across 10 immigration regions. A structured questionnaire captures nationality, education, finances, and language scores; the model returns ranked pathway scores (0–100) with document checklists, timeline estimates, and actionable improvement recommendations.',
    result:
      'Transparent, calibrated assessments grounded in real refusal data. Each result shows exact point attribution (e.g. "Master\'s degree: +12 pts") so applicants know precisely what to improve before committing to a costly application.',
    metrics: ['10 immigration regions', '17 government sources cited', '0–100 pathway scoring', 'Document checklist per pathway'],
    stack: ['Next.js', 'OpenAI API', 'TypeScript', 'Vercel'],
    url: 'https://ai-visa-advisor.vercel.app/',
  },
  {
    title: 'Proposalio — AI Proposal Generator',
    category: 'AI · Freelance SaaS',
    problem:
      'On platforms like Upwork, articulate non-experts routinely beat more qualified freelancers — "better talkers beat better doers." Writing a targeted, personalised proposal for every job is time-consuming and inconsistent.',
    solution:
      'Built a full-stack SaaS with real-time streaming AI that generates job-targeted proposals in under 90 seconds. The system trains on the user\'s past proposals for voice matching, analyses job posts to lead with the most relevant experience, and ships with a proposal pipeline tracker, integrated job feed, and freemium monetisation.',
    result:
      'A complete freelance productivity tool in production — with Pro tier ($19/month), A/B proposal testing, live streaming output, and style-matched personalisation that sounds like the user, not a template.',
    metrics: ['Sub-90s proposal generation', 'Real-time streaming output', 'Freemium + $19/mo Pro tier', 'Voice-matched personalisation'],
    stack: ['Next.js', 'OpenAI API', 'TypeScript', 'Streaming', 'Vercel'],
    url: 'https://ai-proposal-generator-chi.vercel.app/',
  },
  {
    title: 'Satolearn — Bitcoin Education Platform',
    category: 'EdTech · Web3 · Blockchain',
    problem:
      'Blockchain engineers are in critical global shortage, yet most learning resources are passive and theory-heavy — disconnected from real development environments and impossible to act on without external tooling.',
    solution:
      'Contributed to the React frontend of an interactive Bitcoin/blockchain learning platform — working alongside the Vaionex engineering team to build and maintain course interfaces, mentor booking flows, and the in-browser coding environment.',
    result:
      'Platform grew into the leading Bitcoin education resource — integrated into the University of Exeter\'s official curriculum for 2+ consecutive years, showcased at BSV Global Blockchain Convention, and backed by Vaionex Corporation with a global developer community.',
    metrics: ['University of Exeter curriculum partner', 'Showcased at BSV Global Blockchain Convention', 'In-browser blockchain coding IDE', 'Freemium + mentor marketplace'],
    stack: ['React', 'Node.js', 'Bitcoin SV', 'Blockchain SDK', 'Google Analytics'],
    url: 'https://www.satolearn.com/',
  },
  {
    title: 'Saddar — B2B Wholesale Marketplace',
    category: 'B2B E-Commerce · Marketplace',
    problem:
      "Pakistan's retail supply chain was fragmented across opaque wholesale channels — retailers had no reliable way to verify supplier authenticity, compare prices transparently, or place bulk orders without physically visiting wholesale markets.",
    solution:
      'Built the Next.js storefront for Pakistan\'s largest B2B wholesale marketplace, connecting verified suppliers with retailers across 8+ product categories. Delivered wholesale pricing (up to 30% below retail), flexible MOQs, and a Sentry-monitored checkout experience with 3-day delivery across major cities.',
    result:
      'A high-traffic B2B marketplace serving retail shop owners across Karachi, Lahore, and Islamabad — thousands of SKUs, a verified supplier network, and a performant Next.js frontend handling daily wholesale ordering volume at scale.',
    metrics: ['8+ product categories', 'Up to 30% below retail pricing', '3-day nationwide delivery SLA', 'Sentry-monitored reliability'],
    stack: ['Next.js', 'React', 'TypeScript', 'Sentry', 'SEO Optimisation'],
    url: 'https://www.saddar.com.pk/',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'TailwindCSS', 'Redux', 'Material UI'],
  },
  {
    name: 'Mobile',
    items: ['React Native (iOS & Android)', 'Expo', 'React Navigation', 'Native Modules', 'Offline-First Architecture', 'Hermes', 'Flipper'],
  },
  {
    name: 'Backend + Databases',
    items: ['Node.js', 'Express.js', 'Koa.js', 'GraphQL', 'RESTful APIs', 'WebSockets', 'JWT', 'OAuth2', 'PostgreSQL', 'MongoDB', 'Firebase (Realtime DB & Firestore)'],
  },
  {
    name: 'AI + SaaS',
    items: ['OpenAI API', 'LLM Integration', 'AI Feature Development', 'Real-time Pipelines', 'SaaS Architecture', 'Prompt Engineering'],
  },
  {
    name: 'Cloud + Practices + Tools',
    items: ['AWS (EC2, S3)', 'Docker', 'CI/CD', 'GitHub Actions', 'Vercel', 'System Design', 'Agile/Scrum', 'WCAG 2.1 Accessibility', 'Sentry', 'Crashlytics', 'Jira', 'Figma', 'Swagger'],
  },
]

/* 6 roles — Cloud Coherence and Independent Clients removed to match resume focus */
export const experiences: Experience[] = [
  {
    role: 'Software Engineer — Full-Stack & Mobile',
    company: 'Lumida Wealth',
    period: 'Aug 2025 – Present',
    mode: 'Remote · Full-time',
    highlight: 'AI-powered wealth management SaaS · High-net-worth US investor platform',
    outcomes: [
      'Shipped investor-facing features — portfolio tracking, real-time data sync, and OAuth2 authentication — across iOS, Android, and web, collaborating cross-functionally to maintain zero production rollbacks across 6+ consecutive sprints.',
      'Integrated LLM-powered insights and AI-driven data visualisations using OpenAI API, accelerating investor decision workflows and increasing feature adoption.',
      'Contributed to a consistent monthly release cadence through disciplined CI/CD, cross-functional QA, and proactive issue resolution.',
      'Improved UI/UX consistency and responsiveness across devices, reducing UI bug reports by 35% through WCAG 2.1 accessibility enforcement.',
    ],
  },
  {
    role: 'Senior Software Engineer — Mobile & Performance',
    company: 'Udhaar Book',
    period: 'Jun 2022 – Jul 2025',
    mode: 'Full-time',
    highlight: "Pakistan's #1 digital ledger & B2B payments app · 100K+ active SMB users",
    outcomes: [
      'Owned end-to-end delivery of core ledger, credit management, and digital payment flows serving 100K+ SMBs — directly impacting company revenue and user retention.',
      'Cut app load times by 40% through React Native lazy loading, FlatList virtualisation, Hermes engine tuning, and strategic memoisation — measured via Flipper profiling.',
      'Architected an offline-first sync layer using Firebase Realtime Database, reducing session drop-off by 25% for users on low-bandwidth mobile networks.',
      'Drove a consistent monthly release cadence across iOS and Android for 3 years, improving customer retention quarter-over-quarter.',
    ],
  },
  {
    role: 'Mobile App Developer',
    company: 'Unilever Pakistan',
    period: 'Aug 2022 – Dec 2024',
    mode: 'Contract',
    highlight: "Enterprise B2B retail platform 'Roll' · Pakistan-wide distributor network",
    outcomes: [
      'Maintained and scaled Roll, Unilever\'s mission-critical retail ordering app processing thousands of B2B transactions daily across Pakistan\'s distributor network.',
      'Increased user engagement by 30% through targeted UX redesigns, onboarding flow optimisation, and performance-focused feature rollouts.',
      'Sustained 99% app uptime via Sentry-based error monitoring, proactive error boundary implementation, and a structured incident response process.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Dastgyr',
    period: 'Jun 2021 – May 2022',
    mode: 'Contract',
    highlight: 'B2B e-commerce marketplace · 10K+ daily orders · Retailer, picker & driver apps',
    outcomes: [
      'Built the picker app from scratch as sole developer; contributed to retailer and driver app features alongside the engineering team — collectively processing 10K+ daily orders with sub-200ms UI response times.',
      'Collaborated on optimising Node.js and PostgreSQL backend services, contributing to a 50% reduction in API response times and enabling 3× traffic growth without infrastructure changes.',
      'Reduced mobile crash rate from 5% to 2% by integrating Crashlytics, implementing structured error handling, and resolving critical native module issues.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Inaequo Solutions',
    period: 'Jun 2021 – May 2022',
    mode: 'Full-time',
    highlight: 'International client-facing product delivery',
    outcomes: [
      'Delivered React Native and Node.js solutions across multiple international client engagements, building interactive UIs that drove a 25% increase in user engagement.',
      'Operated in Agile sprints with cross-functional, globally distributed teams — improving code reusability and consistently meeting delivery milestones.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Quanrio',
    period: 'Nov 2019 – Aug 2020',
    mode: 'Full-time',
    highlight: 'Consumer web and mobile product development',
    outcomes: [
      'Built and deployed React and React Native applications used by thousands of users; improved backend data processing efficiency by 40% via Koa.js and PostgreSQL API redesign.',
      'Introduced Swagger API documentation and sprint tracking workflows, significantly reducing cross-team integration overhead.',
    ],
  },
]

export const aiFocus: AIFocusItem[] = [
  {
    title: 'AI Features in Production',
    description:
      'Shipping LLM-assisted investor experiences at Lumida Wealth — GPT-4 powered insights that convert raw portfolio data into actionable summaries for high-net-worth clients.',
    status: 'shipping',
  },
  {
    title: 'AI-Native SaaS Architecture',
    description:
      'Building repeatable patterns for prompt orchestration, response quality controls, and observability in production SaaS products — moving beyond demos to reliable AI systems.',
    status: 'active',
  },
  {
    title: 'Experimental AI Products',
    description:
      'Rapidly validating AI-assisted workflows for finance and operations use-cases to discover scalable product wedges with real user traction.',
    status: 'building',
  },
]

export const education: Education[] = [
  {
    institute: 'DHA Suffa University',
    degree: 'B.S. Computer Science',
    years: '2015 – 2020',
  },
  {
    institute: 'Bahria College Karsaz',
    degree: 'Pre-Engineering (HSC)',
    years: '2013 – 2015',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Very responsive to communication. Delivery was well within expectations. He made prudent suggestions that improved the app. Quality was excellent.',
    author: 'sheppardta — US Client',
  },
  {
    quote:
      'After a pleasant previous experience I returned with more work. Delivery was quick and quality was good. Recommend.',
    author: 'harrycollin — UK Client',
  },
]

export const contactActions: ContactAction[] = [
  { label: 'Email Me', href: 'mailto:ghulammustafa.mf@gmail.com', icon: Mail },
  { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/ghulam909', icon: ExternalLink },
]

export const contactDetails: ContactDetail[] = [
  {
    label: 'Email',
    value: 'ghulammustafa.mf@gmail.com',
    href: 'mailto:ghulammustafa.mf@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: 'Message on WhatsApp',
    href: 'https://wa.me/923087015957',
    icon: Phone,
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/GhulamMustufa', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ghulam909', icon: LinkedInIcon },
]

export const services: Service[] = [
  {
    title: 'SaaS & Web Apps',
    description:
      'Full-stack web products — dashboards, multi-tenant SaaS, and landing pages built to ship fast and scale further.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
    icon: Monitor,
  },
  {
    title: 'Mobile Apps',
    description:
      'Cross-platform iOS & Android apps in React Native. Production-grade UX, offline support, and App Store delivery.',
    tags: ['React Native', 'Expo', 'Firebase', 'iOS', 'Android'],
    icon: Smartphone,
  },
  {
    title: 'AI Feature Integration',
    description:
      'Add LLM-powered capabilities to your product — chat interfaces, document summarisation, data extraction, and AI workflows.',
    tags: ['OpenAI API', 'GPT-4', 'Node.js', 'Streaming', 'Prompt Engineering'],
    icon: Sparkles,
  },
  {
    title: 'API & Backend',
    description:
      'REST APIs, third-party integrations, database design, and backend architecture for web and mobile products.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Firebase', 'REST'],
    icon: Server,
  },
]
