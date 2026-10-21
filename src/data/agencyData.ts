export interface AgencyService {
  id: string
  title: string
  eyebrow: string
  description: string
  deliverables: string[]
  technologies: string[]
}

export interface AgencyCaseStudy {
  id: string
  title: string
  client: string
  category: string
  metric: string
  context: string
  outcome: string
  technologies: string[]
}

export interface EngagementModel {
  title: string
  badge: string
  duration: string
  description: string
  idealFor: string
  features: string[]
}

export const agencyBrand = {
  name: 'GM Labs',
  legalName: 'GM Labs',
  founder: 'Ghulam Mustafa',
  founderTitle: 'Founder & Principal Systems Architect',
  email: 'hello@ghulam-mustafa.com',
  whatsappMY: '+60 14-813 0908',
  whatsappPK: '+92 308-701 5957',
  hubs: 'Karachi, Pakistan & Kuala Lumpur, Malaysia (Remote-First Digital Practice)',
  tagline: 'Engineering High-Performance Software & Autonomous AI Systems',
  subheadline:
    'We partner with venture-backed startups and growth-stage enterprises to architect production web platforms, mission-critical mobile apps, and deterministic AI systems.',
}

export const agencyStats = [
  { value: '100K+', label: 'Active Users on Deployed Platforms' },
  { value: '50%', label: 'API Latency Reduction on Core Services' },
  { value: '99.9%', label: 'Production Uptime SLA Maintained' },
  { value: '0', label: 'Rollbacks Across 6+ Consecutive Sprints' },
]

export const agencyServices: AgencyService[] = [
  {
    id: 'agentic-ai',
    eyebrow: 'Autonomous AI',
    title: 'Autonomous AI & Agentic Systems',
    description:
      'We build closed-loop, deterministic agentic workflows that execute real tools, verify their own outputs, and eliminate hallucinations in production.',
    deliverables: [
      'Multi-agent orchestration with LangGraph & Model Context Protocol (MCP)',
      'Deterministic pre-LLM security gates & prompt-injection defense',
      'Production RAG pipelines with pgvector & semantic retrieval',
      'Real-time streaming UI with sub-second latency feedback',
    ],
    technologies: ['LangGraph', 'MCP', 'OpenAI', 'Gemini', 'Claude', 'pgvector', 'Next.js'],
  },
  {
    id: 'mobile-engineering',
    eyebrow: 'Mobile Platforms',
    title: 'High-Scale Mobile Engineering',
    description:
      'Cross-platform iOS and Android applications engineered in React Native for offline-first reliability, instant startup, and high daily transaction volume.',
    deliverables: [
      'Offline-first synchronization with WatermelonDB & Firebase',
      'Hermes engine tuning, bundle splitting, and memory optimization',
      'Custom native bridge modules for iOS (Swift) & Android (Kotlin)',
      'Automated App Store & Google Play CI/CD deployment pipelines',
    ],
    technologies: ['React Native', 'Expo', 'WatermelonDB', 'Firebase', 'Hermes', 'Fastlane'],
  },
  {
    id: 'cloud-saas',
    eyebrow: 'Full-Stack SaaS',
    title: 'Enterprise Web & Distributed Cloud Systems',
    description:
      'Modern web applications and resilient backend microservices built to scale horizontally without unexpected infrastructure cost inflation.',
    deliverables: [
      'High-performance Next.js full-stack architectures & Server Components',
      'Node.js & NestJS distributed REST and GraphQL microservices',
      'Advanced PostgreSQL schema design, indexing, and connection pooling',
      'Multi-tenant OAuth2/SSO authentication & Stripe billing engines',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'audits-optimization',
    eyebrow: 'Advisory & Tuning',
    title: 'Architecture & Performance Audits',
    description:
      'Specialized engineering engagements to unblock stalled development, eliminate production bottlenecks, and establish zero-rollback release cadences.',
    deliverables: [
      'Comprehensive codebase & architectural security review',
      'Frontend & backend latency profiling with Flipper, Sentry & Datadog',
      'Database query optimization and index restructuring',
      'CI/CD workflow automation and automated QA testing suites',
    ],
    technologies: ['Sentry', 'Crashlytics', 'Jest', 'Cypress', 'PostgreSQL', 'Docker'],
  },
]

export const agencyCaseStudies: AgencyCaseStudy[] = [
  {
    id: 'lumida-wealth',
    title: 'AI-Powered Wealth Management Platform',
    client: 'Lumida Wealth (US WealthTech)',
    category: 'Fintech · AI Intelligence · Mobile & Web',
    metric: '99.9% SLA · Zero Rollbacks',
    context:
      'High-net-worth investors required ultra-reliable portfolio visibility, real-time sync, and rapid AI-assisted market analysis.',
    outcome:
      'Delivered OAuth2-authenticated cross-platform apps with OpenAI-powered investment insights, achieving zero rollbacks across 6+ consecutive monthly releases.',
    technologies: ['React Native', 'Node.js', 'OpenAI API', 'PostgreSQL', 'OAuth2'],
  },
  {
    id: 'udhaar-book',
    title: 'High-Concurrency Digital Ledger Engine',
    client: 'Udhaar Book (Pakistan #1 Fintech)',
    category: 'SMB Fintech · Offline-First · High Volume',
    metric: '100K+ Active Users · 40% Faster Startup',
    context:
      'A rapidly growing SMB user base on low-bandwidth networks suffered from slow startup times and dropped transaction sessions.',
    outcome:
      'Re-engineered the data layer with offline-first local database sync and tuned the Hermes JavaScript runtime, reducing session drop-offs by 25%.',
    technologies: ['React Native', 'Firebase', 'Hermes', 'Flipper', 'Node.js'],
  },
  {
    id: 'dastgyr',
    title: 'B2B Commerce & Order Processing Infrastructure',
    client: 'Dastgyr (B2B Supply Chain)',
    category: 'Logistics · High-Throughput APIs',
    metric: '50% API Latency Drop · 3× Volume Scaled',
    context:
      'Operational logistics systems needed to process 10,000+ daily orders across retailer, warehouse picker, and fleet driver applications.',
    outcome:
      'Re-architected core Node.js/PostgreSQL microservices and Crashlytics native module handlers, halving API response times with zero extra infrastructure costs.',
    technologies: ['Node.js', 'PostgreSQL', 'React Native', 'Crashlytics', 'AWS'],
  },
  {
    id: 'unilever-roll',
    title: 'Enterprise Distributor Retail Network',
    client: 'Unilever Pakistan',
    category: 'Enterprise B2B · Nationwide Network',
    metric: '30% Engagement Growth · 99.9% Uptime',
    context:
      'Nationwide distributor ordering operations needed higher user adoption and proactive error monitoring to eliminate distributor downtime.',
    outcome:
      'Executed complete UX onboarding overhauls and integrated Sentry telemetry with structured incident response, driving a 30% engagement lift.',
    technologies: ['React Native', 'Sentry', 'Mobile Performance Tuning'],
  },
]

export const engagementModels: EngagementModel[] = [
  {
    title: 'MVP Acceleration Sprint',
    badge: 'Fast Go-to-Market',
    duration: '4 – 6 Weeks',
    description:
      'Turn your product concept or specification into a production-grade, scalable web or mobile application ready for market validation and investor demos.',
    idealFor: 'Early-stage founders, startup teams launching new initiatives.',
    features: [
      'Full architectural specification & database schema design',
      'Production web (Next.js) or mobile (React Native) build',
      'Authentication, database, and Stripe payment gateway integration',
      'Automated CI/CD deployment with complete source code handover',
      '30-day post-launch bug warranty',
    ],
  },
  {
    title: 'Principal Architecture Retainer',
    badge: 'Continuous Velocity',
    duration: 'Monthly Partnership',
    description:
      'High-impact technical leadership and dedicated hands-on senior engineering to accelerate roadmap delivery, lead AI features, and mentor internal teams.',
    idealFor: 'Growth-stage companies scaling engineering capacity with senior expertise.',
    features: [
      'Dedicated sprint capacity for core feature development',
      'Direct multi-agent AI and autonomous workflow integrations',
      'System design, code reviews, and architectural governance',
      'Continuous performance tuning & zero-rollback release management',
      'Direct asynchronous Slack/WhatsApp and weekly sync cadence',
    ],
  },
  {
    title: 'Architecture & AI Advisory',
    badge: 'Targeted Remediation',
    duration: '2 Weeks Fixed',
    description:
      'A deep-dive technical diagnostic into your application stack to identify latency bottlenecks, evaluate security vulnerabilities, and design an AI adoption roadmap.',
    idealFor: 'Companies preparing for scale, investment due diligence, or AI modernization.',
    features: [
      'Full codebase, API, and database audit report',
      'Performance profiling & bottleneck remediation plan',
      'Actionable AI feasibility & architecture roadmap',
      'Executive technical findings presentation with internal leadership',
    ],
  },
]

export const agencyProcess = [
  {
    step: '01',
    title: 'Technical Discovery',
    description:
      'We analyze your product goals, technical constraints, user requirements, and system architecture to define a fixed scope and milestone timeline.',
  },
  {
    step: '02',
    title: 'Sprint Architecture & Build',
    description:
      'We engineer with high velocity in 2-week sprint cycles, providing live staging previews, async updates, and continuous integration testing.',
  },
  {
    step: '03',
    title: 'Production Handover & SLA',
    description:
      'We deploy to your cloud infrastructure, transfer 100% intellectual property rights, provide complete documentation, and support you with a 30-day warranty.',
  },
]

export interface AgencyTechItem {
  name: string
  category: string
  highlight?: boolean
}

export const agencyTechStack: AgencyTechItem[] = [
  { name: 'LangGraph', category: 'Agentic AI', highlight: true },
  { name: 'Model Context Protocol (MCP)', category: 'Agentic AI', highlight: true },
  { name: 'React Native', category: 'Mobile', highlight: true },
  { name: 'Next.js 15', category: 'Full-Stack', highlight: true },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Python & FastAPI', category: 'AI & Backend', highlight: true },
  { name: 'PostgreSQL & pgvector', category: 'Database', highlight: true },
  { name: 'Supabase', category: 'Backend' },
  { name: 'Docker & Kubernetes', category: 'DevOps' },
  { name: 'AWS & Cloudflare', category: 'Cloud Infra' },
  { name: 'Redis', category: 'Caching & Queues' },
  { name: 'Stripe API', category: 'Payments' },
]

export interface AgencyFAQ {
  question: string
  answer: string
  category: 'Services' | 'Delivery & Process' | 'Legal & IP' | 'AI & Security'
}

export const agencyFaqs: AgencyFAQ[] = [
  {
    category: 'Services',
    question: 'What engineering services does GM Labs specialize in?',
    answer:
      'GM Labs specializes in 4 core practice areas: (1) Autonomous AI & Agentic Systems using LangGraph and Model Context Protocol (MCP), (2) Cross-platform mobile engineering with React Native and Expo, (3) High-scale Full-Stack SaaS platforms with Next.js 15, FastAPI, and PostgreSQL, and (4) Technical architecture and latency optimization audits.',
  },
  {
    category: 'Delivery & Process',
    question: 'How is GM Labs different from traditional dev agencies or outsource shops?',
    answer:
      'We operate as a founder-led, high-conviction engineering studio. Ghulam Mustafa personally architects, reviews, and implements your core systems alongside vetted senior engineers. You never get passed to junior developers, offshore ticket-pushers, or non-technical account managers.',
  },
  {
    category: 'Legal & IP',
    question: 'Who owns the intellectual property (IP) and source code?',
    answer:
      'You own 100% of the code, architecture documents, and digital assets. Upon milestone invoice clearance, all custom source code created for your project transfers exclusively to your business. We retain no proprietary licensing hold or vendor lock-in.',
  },
  {
    category: 'Legal & IP',
    question: 'Do you sign bilateral Non-Disclosure Agreements (NDAs)?',
    answer:
      'Yes, absolutely. We routinely sign bilateral NDAs before receiving access to private repositories, architecture schematics, or sensitive product specifications.',
  },
  {
    category: 'AI & Security',
    question: 'How does GM Labs ensure client code and data are not used for public AI training?',
    answer:
      'We uphold a strict Zero Public AI Model Training Guarantee. All agentic pipelines, RAG systems, and LLM implementations leverage enterprise zero-data-retention APIs or self-hosted private VPC instances. Your proprietary codebase and business data are never exposed to public training datasets.',
  },
  {
    category: 'Delivery & Process',
    question: 'How quickly can GM Labs initiate a new sprint or project?',
    answer:
      'Most engagements can kick off within 48 to 72 hours following the initial technical discovery session and SOW sign-off.',
  },
  {
    category: 'Services',
    question: 'What engagement models and pricing structures do you offer?',
    answer:
      'We offer three transparent engagement models: (1) Fixed-Scope Sprints with milestone-based billing for defined MVPs or feature modules, (2) Dedicated Monthly Retainers for continuous high-velocity engineering capacity, and (3) 2-Week Architecture & AI Audits for targeted bottleneck remediation.',
  },
  {
    category: 'Delivery & Process',
    question: 'What timezones and working hours does GM Labs support?',
    answer:
      'We offer flexible overlap across North American (US Eastern/Pacific), European (GMT/CET), and Asia-Pacific working hours. We provide synchronous standups when needed and continuous asynchronous updates via Slack, Loom, and GitHub.',
  },
  {
    category: 'Legal & IP',
    question: 'What is included in the 30-day post-launch warranty?',
    answer:
      'Every fixed-scope deliverable includes a complimentary 30-day warranty starting on production handover. Any reproducible bug or deviation from the agreed Statement of Work is remediated at zero additional charge.',
  },
  {
    category: 'Services',
    question: 'Can GM Labs help audit and optimize an existing slow or legacy application?',
    answer:
      'Yes. We specialize in deep-dive performance profiling, database index optimization, and API restructuring. In past engagements (such as Lumida Wealth and Udhaar Book), we have reduced API latency by up to 50% and slashed server infrastructure costs.',
  },
  {
    category: 'Delivery & Process',
    question: 'How do we get started with GM Labs?',
    answer:
      'Reach out directly via our intake section, email hello@ghulam-mustafa.com, or contact us on WhatsApp. We schedule a 30-minute discovery session and provide a concrete technical roadmap and milestone proposal within 48 hours.',
  },
]

