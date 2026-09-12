import { Smartphone, Globe, Code, Server, Sparkles, Cloud, Database, Monitor, Layers, Cpu } from 'lucide-react'
import { Service } from '@/types/portfolio'

export const seoServices: Service[] = [
  // --- MOBILE & REACT NATIVE ---
  {
    slug: 'freelance-react-native-developer',
    title: 'Freelance React Native Developer',
    description: 'Hire a top-tier freelance React Native developer to build scalable, high-performance cross-platform mobile apps for iOS and Android.',
    tags: ['React Native', 'Freelance', 'iOS', 'Android', 'Mobile App Development'],
    icon: Smartphone,
    showOnHomepage: false,
    metricDrivenHeader: 'Build your mobile app twice as fast with React Native.',
    capabilities: ['Cross-Platform Development', 'Custom UI/UX', 'Native Module Integration', 'App Store Publishing'],
    caseStudySlugs: ['udhaar-book', 'lumida-wealth'],
    faqs: [
      { question: 'Why hire a freelance React Native developer?', answer: 'Hiring a specialist allows you to launch on both iOS and Android simultaneously using a single codebase, drastically reducing time-to-market and costs.' },
      { question: 'Can you integrate third-party APIs into React Native?', answer: 'Yes, I regularly integrate Stripe, Firebase, REST APIs, and GraphQL endpoints to power complex React Native applications.' }
    ]
  },
  {
    slug: 'hire-react-native-expert',
    title: 'Hire a React Native Expert',
    description: 'Looking to hire a React Native expert? I architect enterprise-grade mobile applications with offline support and complex state management.',
    tags: ['React Native', 'Expert', 'Mobile Architecture', 'Enterprise'],
    icon: Smartphone,
    showOnHomepage: false,
    metricDrivenHeader: 'Expert-level React Native architectures for serious startups.',
    capabilities: ['Architecture Design', 'State Management (Zustand/Redux)', 'Complex Animations', 'Offline Sync'],
    caseStudySlugs: ['udhaar-book'],
    faqs: [
      { question: 'What makes someone a React Native expert?', answer: 'An expert goes beyond building UI; they understand the React Native bridge, the Hermes engine, memory management, and how to write custom native code when necessary.' },
      { question: 'Do you offer code audits for existing React Native apps?', answer: 'Yes, I can audit your existing codebase for performance bottlenecks, memory leaks, and architectural flaws.' }
    ]
  },
  {
    slug: 'react-native-app-development-consultant',
    title: 'React Native App Development Consultant',
    description: 'Get expert advice and technical leadership for your mobile team from a Senior React Native App Development Consultant.',
    tags: ['Consultant', 'React Native', 'Technical Leadership', 'Code Review'],
    icon: Layers,
    showOnHomepage: false,
    metricDrivenHeader: 'Technical leadership for your mobile engineering team.',
    capabilities: ['Code Reviews', 'Team Mentorship', 'Architecture Planning', 'CI/CD Setup'],
    caseStudySlugs: ['lumida-wealth'],
    faqs: [
      { question: 'What does a React Native consultant do?', answer: 'I help teams establish best practices, design scalable architectures, set up CI/CD pipelines (like Fastlane), and unblock developers on complex technical challenges.' },
      { question: 'Can you help us migrate to React Native?', answer: 'Yes, I can design a strategy to incrementally adopt React Native within your existing native iOS or Android applications.' }
    ]
  },
  {
    slug: 'offline-first-react-native-developer',
    title: 'Offline-First React Native Developer',
    description: 'Specializing in offline-first React Native development using WatermelonDB, SQLite, and Firebase to ensure apps work without internet connectivity.',
    tags: ['Offline-First', 'React Native', 'WatermelonDB', 'Sync'],
    icon: Database,
    showOnHomepage: false,
    metricDrivenHeader: 'Mobile apps that work flawlessly without an internet connection.',
    capabilities: ['WatermelonDB Integration', 'Optimistic UI Updates', 'Conflict Resolution', 'Background Sync'],
    caseStudySlugs: ['udhaar-book'],
    faqs: [
      { question: 'Why do I need an offline-first mobile app?', answer: 'If your app is used in fields like logistics, retail, or developing markets with spotty connections, offline-first ensures users never lose data or get blocked from working.' },
      { question: 'How do you handle data sync when the connection returns?', answer: 'I build robust synchronization queues that resolve conflicts and push changes to your backend seamlessly in the background.' }
    ]
  },
  {
    slug: 'react-native-performance-optimization-expert',
    title: 'React Native Performance Optimization Expert',
    description: 'Is your React Native app slow? Hire a performance optimization expert to fix memory leaks, JS thread blocks, and rendering issues.',
    tags: ['Performance', 'React Native', 'Optimization', 'Profiling'],
    icon: Cpu,
    showOnHomepage: false,
    metricDrivenHeader: 'Make your React Native app feel indistinguishable from Native.',
    capabilities: ['JS Thread Profiling', 'Memory Leak Detection', 'Re-render Optimization', 'Hermes Engine Tuning'],
    caseStudySlugs: ['udhaar-book'],
    faqs: [
      { question: 'Why is my React Native app lagging on Android?', answer: 'Android lag is often caused by heavy JS thread blocking or unoptimized lists. I use Flipper and Hermes profiling to identify and fix the exact bottleneck.' },
      { question: 'Can you improve my app startup time?', answer: 'Yes, by optimizing bundle sizes, lazy loading screens, and upgrading to the latest Hermes engine, startup times can often be cut by 30-50%.' }
    ]
  },
  {
    slug: 'senior-ios-android-react-native-engineer',
    title: 'Senior iOS & Android React Native Engineer',
    description: 'Deliver native-quality experiences on both Apple and Google platforms with a Senior iOS and Android React Native Engineer.',
    tags: ['iOS', 'Android', 'Senior Engineer', 'React Native'],
    icon: Smartphone,
    showOnHomepage: false,
    metricDrivenHeader: 'One senior engineer to lead both your iOS and Android platforms.',
    capabilities: ['iOS (Swift/Objective-C) Integration', 'Android (Kotlin/Java) Integration', 'App Store Connect', 'Google Play Console'],
    caseStudySlugs: ['lumida-wealth', 'udhaar-book'],
    faqs: [
      { question: 'Do you know native iOS and Android development?', answer: 'Yes, while I build primarily in React Native, I have the native expertise required to write custom bridges and debug Xcode/Android Studio build issues.' },
      { question: 'Can you handle the entire app publishing process?', answer: 'Absolutely. I manage certificates, provisioning profiles, and automated Fastlane deployments to both app stores.' }
    ]
  },
  {
    slug: 'react-native-migration-specialist',
    title: 'React Native Migration Specialist',
    description: 'Migrate your legacy mobile app or web platform to a modern React Native codebase with zero downtime.',
    tags: ['Migration', 'React Native', 'Modernization', 'Legacy Code'],
    icon: Cloud,
    showOnHomepage: false,
    metricDrivenHeader: 'Seamlessly migrate to modern React Native architectures.',
    capabilities: ['Web to Mobile Migration', 'Legacy Version Upgrades', 'Cordova/Ionic to React Native', 'Brownfield Integration'],
    caseStudySlugs: ['saddar'],
    faqs: [
      { question: 'Can you upgrade my extremely old React Native app?', answer: 'Yes, upgrading older React Native versions (e.g., pre-0.60) is notoriously difficult. I specialize in resolving the dependency hell and migrating you to the latest architecture.' },
      { question: 'How do you migrate a web app to React Native?', answer: 'We share your core business logic and state management from the web, and rewrite the presentation layer using React Native UI components.' }
    ]
  },
  {
    slug: 'hire-expo-developer',
    title: 'Hire Expert Expo Developer',
    description: 'Accelerate your mobile development by hiring an expert Expo developer. I specialize in Expo Go, EAS Build, and Expo Router.',
    tags: ['Expo', 'EAS', 'React Native', 'Expo Router'],
    icon: Smartphone,
    showOnHomepage: false,
    metricDrivenHeader: 'Ship React Native apps faster with Expo and EAS.',
    capabilities: ['Expo Router (File-based Routing)', 'EAS Build & Submit', 'OTA Updates', 'Custom Dev Clients'],
    caseStudySlugs: ['lumida-wealth'],
    faqs: [
      { question: 'Should I use Expo or bare React Native?', answer: 'For 95% of modern apps, Expo is the superior choice. It offers over-the-air updates, a managed build system (EAS), and native module support via config plugins.' },
      { question: 'Can you add custom native code to an Expo app?', answer: 'Yes, using Expo Development Builds and Config Plugins, we can include any native iOS/Android library without ejecting from the Expo ecosystem.' }
    ]
  },
  {
    slug: 'freelance-mobile-app-developer-react-native',
    title: 'Freelance Mobile App Developer (React Native)',
    description: 'Hire a dedicated freelance mobile app developer to turn your idea into a polished, App Store-ready application.',
    tags: ['Freelance', 'Mobile App', 'Startup', 'MVP'],
    icon: Globe,
    showOnHomepage: false,
    metricDrivenHeader: 'From concept to App Store launch.',
    capabilities: ['Prototyping & MVP', 'UI/UX Implementation', 'Backend API Integration', 'Launch Strategy'],
    caseStudySlugs: ['udhaar-book', 'lumida-wealth'],
    faqs: [
      { question: 'How long does it take to build a mobile MVP?', answer: 'Depending on complexity, a robust mobile MVP in React Native typically takes 4 to 8 weeks from design to app store submission.' },
      { question: 'Do you provide maintenance after launch?', answer: 'Yes, I offer ongoing retainer contracts to handle OS updates, new feature requests, and server maintenance.' }
    ]
  },
  {
    slug: 'b2b-mobile-app-developer',
    title: 'B2B Mobile App Developer',
    description: 'Architecting high-security, high-reliability B2B mobile applications for distributors, sales teams, and enterprise workforces.',
    tags: ['B2B', 'Enterprise', 'React Native', 'Internal Tools'],
    icon: Layers,
    showOnHomepage: false,
    metricDrivenHeader: 'Mission-critical mobile tools for your workforce.',
    capabilities: ['Role-Based Access Control', 'MDM Deployment', 'Enterprise SSO Integration', 'Complex Data Grids'],
    caseStudySlugs: ['saddar'],
    faqs: [
      { question: 'How do you distribute internal B2B apps?', answer: 'Internal B2B apps can be distributed via Apple Business Manager, Google Play Managed Enterprise, or directly via MDM (Mobile Device Management) solutions.' },
      { question: 'Are B2B apps secure enough for enterprise data?', answer: 'Yes, I implement keychain/keystore encryption, biometric locks, and strict OAuth2 authentication flows to protect proprietary data.' }
    ]
  },

  // --- NEXT.JS & REACT ---
  {
    slug: 'freelance-nextjs-developer',
    title: 'Freelance Next.js Developer',
    description: 'Hire a Senior Freelance Next.js Developer to build lightning-fast, SEO-optimized web applications and marketing sites.',
    tags: ['Next.js', 'React', 'Freelance', 'Web Development'],
    icon: Globe,
    showOnHomepage: false,
    metricDrivenHeader: 'Ship fast, SEO-perfect web apps with Next.js.',
    capabilities: ['Server-Side Rendering (SSR)', 'Static Site Generation (SSG)', 'Vercel Deployment', 'SEO Optimization'],
    caseStudySlugs: ['omnibid', 'borderless-ai'],
    faqs: [
      { question: 'Why should I hire a Next.js developer instead of standard React?', answer: 'Next.js provides Server-Side Rendering out of the box, which is critical for Google SEO and provides much faster initial page loads than standard React.' },
      { question: 'Can you migrate my existing React app to Next.js?', answer: 'Yes, I can incrementally migrate standard CRA (Create React App) projects to Next.js to immediately boost performance and SEO.' }
    ]
  },
  {
    slug: 'hire-nextjs-saas-developer',
    title: 'Hire Next.js SaaS Developer',
    description: 'Build your multi-tenant SaaS platform with a specialized Next.js SaaS Developer. Expert in Stripe, Authentication, and Postgres.',
    tags: ['Next.js', 'SaaS', 'Stripe', 'Multi-tenant'],
    icon: Cloud,
    showOnHomepage: false,
    metricDrivenHeader: 'Architecting scalable SaaS platforms with Next.js.',
    capabilities: ['Stripe Billing Integration', 'NextAuth / Clerk Setup', 'Multi-tenant Database Design', 'Admin Dashboards'],
    caseStudySlugs: ['devfix', 'omnibid'],
    faqs: [
      { question: 'What is the best stack for a new SaaS?', answer: 'The modern standard is Next.js for the full-stack framework, PostgreSQL for the database (via Prisma), and Stripe for subscription billing.' },
      { question: 'How do you handle user authentication?', answer: 'I typically use NextAuth (Auth.js) for custom credential and OAuth flows, or Clerk/Supabase Auth for managed, enterprise-grade security.' }
    ]
  },
  {
    slug: 'nextjs-app-router-expert',
    title: 'Next.js App Router Expert',
    description: 'Upgrade your architecture with a Next.js App Router expert. Master of React Server Components and Server Actions.',
    tags: ['App Router', 'Next.js 14', 'Server Components', 'React'],
    icon: Code,
    showOnHomepage: false,
    metricDrivenHeader: 'Leverage the power of Next.js 14 and Server Components.',
    capabilities: ['Pages to App Router Migration', 'React Server Components (RSC)', 'Server Actions', 'Streaming & Suspense'],
    caseStudySlugs: ['borderless-ai'],
    faqs: [
      { question: 'What are the benefits of the Next.js App Router?', answer: 'The App Router drastically reduces the JavaScript sent to the browser by rendering components entirely on the server, resulting in faster load times and better UX.' },
      { question: 'Can you migrate my Pages router app to the App router?', answer: 'Yes, I specialize in incrementally adopting the App Router, moving your most complex pages over one by one without breaking the app.' }
    ]
  },
  {
    slug: 'nextjs-performance-optimization-consultant',
    title: 'Next.js Performance Optimization Consultant',
    description: 'Improve your Core Web Vitals and LCP scores with a Next.js Performance Optimization Consultant.',
    tags: ['Performance', 'Core Web Vitals', 'Next.js', 'LCP'],
    icon: Cpu,
    showOnHomepage: false,
    metricDrivenHeader: 'Achieve perfect 100/100 Lighthouse scores.',
    capabilities: ['Core Web Vitals Audit', 'Image Optimization', 'Dynamic Import / Code Splitting', 'Edge Caching'],
    caseStudySlugs: ['devfix'],
    faqs: [
      { question: 'Why is my Next.js site slow on mobile?', answer: 'Usually, it is due to unoptimized images, blocking third-party scripts, or rendering too many Client Components. I can audit and fix these bottlenecks.' },
      { question: 'How do you improve Largest Contentful Paint (LCP)?', answer: 'By preloading hero images, aggressively caching on the Vercel Edge Network, and ensuring critical CSS is inline.' }
    ]
  },
  {
    slug: 'react-to-nextjs-migration-expert',
    title: 'React to Next.js Migration Expert',
    description: 'Transition your legacy React Single Page Application (SPA) to Next.js for superior SEO and load times.',
    tags: ['Migration', 'React', 'Next.js', 'SEO'],
    icon: Layers,
    showOnHomepage: false,
    metricDrivenHeader: 'Modernize your React SPA with Next.js.',
    capabilities: ['CRA to Next.js Migration', 'React Router Replacement', 'Client to Server State Refactoring', 'SEO Tag Generation'],
    caseStudySlugs: ['omnibid'],
    faqs: [
      { question: 'Will migrating to Next.js break my existing React code?', answer: 'No, Next.js is built on React. Most of your component code will work perfectly as Client Components, though we will optimize data fetching to run on the server.' },
      { question: 'Is the migration process risky for production apps?', answer: 'I mitigate risk by performing the migration on a staging environment and using E2E testing to verify that all business logic remains perfectly intact.' }
    ]
  },
  {
    slug: 'freelance-react-developer',
    title: 'Freelance React Developer',
    description: 'Hire a Senior Freelance React Developer to build complex, interactive user interfaces and web applications.',
    tags: ['React', 'Freelance', 'Frontend', 'TypeScript'],
    icon: Code,
    showOnHomepage: false,
    metricDrivenHeader: 'Pixel-perfect, high-performance React frontends.',
    capabilities: ['Complex UI Development', 'Custom Hooks', 'State Management', 'API Integration'],
    caseStudySlugs: ['borderless-ai', 'saddar'],
    faqs: [
      { question: 'Do you write tests for React components?', answer: 'Yes, I write unit tests using React Testing Library and end-to-end tests using Playwright or Cypress to ensure UI reliability.' },
      { question: 'What state management libraries do you prefer?', answer: 'For server-state I use React Query, and for local UI state I prefer the simplicity and performance of Zustand.' }
    ]
  },
  {
    slug: 'senior-react-frontend-engineer',
    title: 'Senior React Frontend Engineer',
    description: 'Bring technical leadership to your frontend team by hiring a Senior React Frontend Engineer.',
    tags: ['React', 'Senior Engineer', 'Frontend Architecture', 'Leadership'],
    icon: Monitor,
    showOnHomepage: false,
    metricDrivenHeader: 'Scalable frontend architectures for enterprise teams.',
    capabilities: ['Frontend System Design', 'Component Library Creation', 'Code Reviews', 'Performance Auditing'],
    caseStudySlugs: ['devfix'],
    faqs: [
      { question: 'How do you ensure UI consistency across a large team?', answer: 'I build and enforce strict design systems, utilizing Storybook for component documentation and ESLint for code-style enforcement.' },
      { question: 'Can you lead a team of junior developers?', answer: 'Absolutely. I have extensive experience breaking down complex epics into Jira tasks and mentoring junior developers through pair programming and code reviews.' }
    ]
  },
  {
    slug: 'react-saas-frontend-developer',
    title: 'React SaaS Frontend Developer',
    description: 'Specialized in building complex data dashboards, tables, and admin panels for B2B SaaS products using React.',
    tags: ['React', 'SaaS', 'Dashboards', 'B2B'],
    icon: Layers,
    showOnHomepage: false,
    metricDrivenHeader: 'Beautiful, data-dense dashboards for B2B SaaS.',
    capabilities: ['Complex Data Grids (AG Grid/TanStack)', 'Data Visualization (Recharts/Chart.js)', 'Role-Based UI', 'Form Management (React Hook Form)'],
    caseStudySlugs: ['omnibid'],
    faqs: [
      { question: 'How do you handle massive datasets in React tables?', answer: 'I utilize TanStack Table with server-side pagination, virtualization, and strict memoization to ensure 60fps scrolling even with thousands of rows.' },
      { question: 'Do you build custom charts?', answer: 'Yes, I build highly interactive, accessible charts using libraries like Recharts or D3.js tailored to your SaaS metrics.' }
    ]
  },
  {
    slug: 'hire-typescript-react-developer',
    title: 'Hire TypeScript React Developer',
    description: 'Eliminate runtime bugs by hiring a React developer who specializes in strict, end-to-end TypeScript architectures.',
    tags: ['TypeScript', 'React', 'Type Safety', 'Frontend'],
    icon: Code,
    showOnHomepage: false,
    metricDrivenHeader: 'Bulletproof React applications powered by strict TypeScript.',
    capabilities: ['Strict TypeScript Configuration', 'Generic Type Design', 'Zod Schema Validation', 'End-to-End Type Safety'],
    caseStudySlugs: ['borderless-ai', 'devfix'],
    faqs: [
      { question: 'Why is TypeScript important for React?', answer: 'TypeScript catches over 15% of common bugs at compile time before they ever reach production, drastically reducing runtime crashes and improving developer velocity.' },
      { question: 'How do you handle API typings?', answer: 'I use tools like tRPC or Zod to create end-to-end type safety, ensuring the frontend instantly knows if the backend API response structure changes.' }
    ]
  },
  {
    slug: 'freelance-tailwind-react-developer',
    title: 'Freelance Tailwind React Developer',
    description: 'Hire a frontend expert who builds stunning, responsive, and highly maintainable UIs using React and TailwindCSS.',
    tags: ['TailwindCSS', 'React', 'UI/UX', 'Design Systems'],
    icon: Sparkles,
    showOnHomepage: false,
    metricDrivenHeader: 'Rapid UI development with TailwindCSS.',
    capabilities: ['Figma to React', 'Responsive Design', 'Dark Mode Implementation', 'Tailwind Config Architecture'],
    caseStudySlugs: ['borderless-ai', 'omnibid'],
    faqs: [
      { question: 'Can you perfectly match a Figma design?', answer: 'Yes, I specialize in "pixel-perfect" implementations, translating complex Figma auto-layouts directly into responsive TailwindCSS utility classes.' },
      { question: 'How do you keep Tailwind classes clean?', answer: 'I use utility libraries like `clsx` and `tailwind-merge` to build reusable UI components (like buttons and inputs) that encapsulate the messy utility strings.' }
    ]
  },

  // --- BACKEND & NODE.JS ---
  {
    slug: 'hire-node-js-backend-developer',
    title: 'Hire Node.js Backend Developer',
    description: 'Hire a Senior Node.js developer to architect high-throughput, secure, and scalable backend APIs for your application.',
    tags: ['Node.js', 'Backend', 'API', 'Express'],
    icon: Server,
    showOnHomepage: false,
    metricDrivenHeader: 'Scalable backend architectures built on Node.js.',
    capabilities: ['REST API Development', 'Authentication Strategies', 'Database Optimization', 'Server Deployment'],
    caseStudySlugs: ['saddar', 'udhaar-book'],
    faqs: [
      { question: 'Why choose Node.js for backend development?', answer: 'Node.js is highly efficient for I/O-heavy operations (like database queries and API requests) and allows your team to use JavaScript/TypeScript across the entire stack.' },
      { question: 'Can you optimize a slow Node.js API?', answer: 'Yes, I optimize APIs by implementing Redis caching, optimizing SQL queries, and utilizing Node.js worker threads for heavy computation.' }
    ]
  },
  {
    slug: 'freelance-nestjs-developer',
    title: 'Freelance NestJS Developer',
    description: 'Looking for enterprise structure? Hire a freelance NestJS developer to build modular, strictly-typed backend services.',
    tags: ['NestJS', 'TypeScript', 'Enterprise', 'Backend'],
    icon: Layers,
    showOnHomepage: false,
    metricDrivenHeader: 'Enterprise-grade Node.js backends powered by NestJS.',
    capabilities: ['Dependency Injection Architecture', 'Microservices', 'GraphQL Integration', 'Swagger Documentation'],
    caseStudySlugs: [],
    faqs: [
      { question: 'Why use NestJS instead of Express?', answer: 'NestJS forces a clean, modular architecture using Dependency Injection. This makes large codebases vastly easier to test, maintain, and scale across multiple developer teams.' },
      { question: 'Is NestJS good for microservices?', answer: 'Yes, NestJS has native, built-in support for microservice transport layers like RabbitMQ, Redis, and gRPC.' }
    ]
  },
  {
    slug: 'node-js-api-developer',
    title: 'Node.js API Developer',
    description: 'Specialized Node.js API developer for building secure REST and GraphQL endpoints that power web and mobile clients.',
    tags: ['API', 'Node.js', 'REST', 'GraphQL'],
    icon: Globe,
    showOnHomepage: false,
    metricDrivenHeader: 'Robust API contracts for web and mobile clients.',
    capabilities: ['API Rate Limiting', 'OAuth2 & JWT Auth', 'Input Validation (Zod/Joi)', 'API Versioning'],
    caseStudySlugs: ['saddar'],
    faqs: [
      { question: 'Do you build REST or GraphQL APIs?', answer: 'I build both. REST is great for standard resource architectures, while GraphQL is excellent when mobile clients need to request very specific, nested data graphs.' },
      { question: 'How do you secure your APIs?', answer: 'I implement strict CORS policies, JWT validation, rate limiting, and SQL injection prevention via ORMs to ensure maximum security.' }
    ]
  },
  {
    slug: 'hire-senior-backend-engineer-node',
    title: 'Hire Senior Backend Engineer (Node.js)',
    description: 'Bring technical depth to your server-side operations by hiring a Senior Backend Engineer specializing in Node ecosystem.',
    tags: ['Senior Engineer', 'Backend', 'Node.js', 'Architecture'],
    icon: Server,
    showOnHomepage: false,
    metricDrivenHeader: 'Senior backend leadership for complex Node.js systems.',
    capabilities: ['System Architecture', 'Database Migration Strategy', 'Docker Containerization', 'AWS / Cloud Deployment'],
    caseStudySlugs: ['devfix'],
    faqs: [
      { question: 'Can you handle devops and deployment?', answer: 'Yes, as a senior backend engineer, I write Dockerfiles, configure CI/CD pipelines via GitHub Actions, and deploy to AWS or Vercel.' },
      { question: 'How do you handle database migrations without downtime?', answer: 'I use structured migration tools (like Prisma Migrate) and employ blue-green deployment strategies to ensure zero downtime during schema changes.' }
    ]
  },
  {
    slug: 'postgresql-database-architect',
    title: 'PostgreSQL Database Architect',
    description: 'Design highly efficient, normalized, and scalable PostgreSQL database schemas for your enterprise application.',
    tags: ['PostgreSQL', 'Database Design', 'SQL', 'Prisma'],
    icon: Database,
    showOnHomepage: false,
    metricDrivenHeader: 'High-performance relational data architecture.',
    capabilities: ['Schema Normalization', 'Index Optimization', 'Complex SQL Joins', 'Prisma / Drizzle ORM Setup'],
    caseStudySlugs: ['omnibid'],
    faqs: [
      { question: 'Why PostgreSQL over NoSQL (like MongoDB)?', answer: 'PostgreSQL provides strict ACID compliance, relational integrity, and incredibly powerful JSONB support, making it the most robust choice for 99% of SaaS products.' },
      { question: 'Can you optimize slow database queries?', answer: 'Yes, I analyze query execution plans (EXPLAIN ANALYZE) to add appropriate B-Tree or Hash indexes and rewrite inefficient joins.' }
    ]
  },
  
  // --- FULL STACK ---
  {
    slug: 'hire-full-stack-typescript-developer',
    title: 'Hire Full-Stack TypeScript Developer',
    description: 'Hire a developer who writes perfectly typed code from the database schema all the way to the frontend UI using TypeScript.',
    tags: ['TypeScript', 'Full Stack', 'React', 'Node.js'],
    icon: Code,
    showOnHomepage: false,
    metricDrivenHeader: 'End-to-end type safety for rapid, bug-free development.',
    capabilities: ['tRPC Integration', 'Prisma ORM', 'Shared Type Libraries', 'Full-Stack Testing'],
    caseStudySlugs: ['borderless-ai', 'devfix'],
    faqs: [
      { question: 'What is the benefit of full-stack TypeScript?', answer: 'By using TypeScript on both the frontend and backend, we can share data models. If a database column changes, the frontend code immediately throws an error during development, preventing production crashes.' },
      { question: 'Do you use tRPC?', answer: 'Yes, I frequently use tRPC in Next.js applications to completely eliminate the need for writing manual fetch calls and API types.' }
    ]
  },
  {
    slug: 'remote-full-stack-engineer-react-node',
    title: 'Remote Full-Stack Engineer (React & Node)',
    description: 'Hire a reliable, autonomous remote Full-Stack Engineer to build and maintain your React and Node.js applications.',
    tags: ['Remote', 'Full Stack', 'React', 'Node.js'],
    icon: Globe,
    showOnHomepage: false,
    metricDrivenHeader: 'Autonomous full-stack execution across timezones.',
    capabilities: ['Async Communication', 'React Frontend Dev', 'Node.js Backend Dev', 'Agile Delivery'],
    caseStudySlugs: ['lumida-wealth'],
    faqs: [
      { question: 'Are you comfortable working completely remotely?', answer: 'Yes, I have years of experience operating in remote-first environments, prioritizing clear written communication and overlapping hours for critical meetings.' },
      { question: 'Can you manage both frontend and backend tasks independently?', answer: 'Absolutely. I can take a feature ticket, design the database schema, write the API, and build the React UI without needing another engineer.' }
    ]
  },
  {
    slug: 'freelance-full-stack-saas-developer',
    title: 'Freelance Full-Stack SaaS Developer',
    description: 'Looking to build a SaaS? Hire a freelance full-stack developer who understands subscriptions, multi-tenancy, and onboarding.',
    tags: ['SaaS', 'Full Stack', 'Freelance', 'Next.js'],
    icon: Cloud,
    showOnHomepage: false,
    metricDrivenHeader: 'Build your SaaS product from idea to MRR.',
    capabilities: ['Stripe Integration', 'Tenant Isolation', 'User Onboarding Flows', 'SaaS Metrics Tracking'],
    caseStudySlugs: ['omnibid', 'devfix'],
    faqs: [
      { question: 'Can you integrate Stripe for subscription billing?', answer: 'Yes, I implement Stripe Checkout, Customer Portals, and secure Webhooks to automatically manage subscription lifecycles.' },
      { question: 'How do you handle multi-tenancy?', answer: 'I use PostgreSQL row-level security or foreign key tenant isolation to ensure user data is completely segregated and secure.' }
    ]
  },
  {
    slug: 'hire-mern-stack-developer-senior',
    title: 'Hire Senior MERN Stack Developer',
    description: 'Hire a Senior MERN (MongoDB, Express, React, Node.js) stack developer to build highly interactive, scalable web apps.',
    tags: ['MERN Stack', 'MongoDB', 'React', 'Node.js'],
    icon: Layers,
    showOnHomepage: false,
    metricDrivenHeader: 'Expert MERN stack development for modern web apps.',
    capabilities: ['MongoDB Aggregations', 'Express APIs', 'React SPA', 'Mongoose Modeling'],
    caseStudySlugs: ['saddar'],
    faqs: [
      { question: 'Do you still build with the MERN stack?', answer: 'Yes, while I often recommend PostgreSQL (Next.js/Postgres), the MERN stack remains incredibly powerful for document-heavy applications and rapid prototyping.' },
      { question: 'Can you migrate a MERN app to Next.js?', answer: 'Yes, I frequently help clients migrate the "R" (React) in MERN to Next.js for vastly improved SEO and performance.' }
    ]
  },
  {
    slug: 'startup-mvp-full-stack-developer',
    title: 'Startup MVP Full-Stack Developer',
    description: 'Hire a fast-shipping full-stack developer to architect and launch your startup MVP (Minimum Viable Product) in weeks, not months.',
    tags: ['MVP', 'Startup', 'Full Stack', 'Rapid Prototyping'],
    icon: Sparkles,
    showOnHomepage: false,
    metricDrivenHeader: 'Turn your startup idea into a launched MVP rapidly.',
    capabilities: ['Rapid Prototyping', 'Lean Architecture', 'Core Feature Focus', 'Analytics Setup'],
    caseStudySlugs: ['omnibid', 'borderless-ai'],
    faqs: [
      { question: 'How fast can you build an MVP?', answer: 'Depending on the feature set, a robust, production-ready MVP can be designed, built, and launched in 4 to 8 weeks.' },
      { question: 'Will the MVP code be scalable later?', answer: 'Yes. Unlike low-code tools, I build MVPs using Next.js and PostgreSQL. It is a true codebase that your future engineering team can easily scale.' }
    ]
  },

  // --- AI, LLMs & RAG ---
  {
    slug: 'freelance-ai-engineer',
    title: 'Freelance AI Engineer',
    description: 'Hire a freelance AI Engineer to integrate GPT-4, Claude, and intelligent automation into your existing software products.',
    tags: ['AI', 'Freelance', 'LLMs', 'Automation'],
    icon: Cpu,
    showOnHomepage: false,
    metricDrivenHeader: 'Inject artificial intelligence into your business logic.',
    capabilities: ['OpenAI Integration', 'Prompt Engineering', 'AI Feature Design', 'API Cost Optimization'],
    caseStudySlugs: ['borderless-ai', 'devfix'],
    faqs: [
      { question: 'What does a freelance AI engineer actually do?', answer: 'I bridge the gap between raw AI models (like ChatGPT) and your software by building the backend prompts, context windows, and user interfaces required to make the AI actually useful for your customers.' },
      { question: 'Can you add AI to an existing app?', answer: 'Absolutely. I can build microservices or serverless functions that add AI capabilities (like summarizing data or generating reports) to your existing legacy app.' }
    ]
  },
  {
    slug: 'hire-openai-api-developer',
    title: 'Hire OpenAI API Developer',
    description: 'Looking to build with GPT-4o or Whisper? Hire an expert OpenAI API developer to build robust, cost-effective integrations.',
    tags: ['OpenAI API', 'GPT-4', 'API Development', 'Streaming'],
    icon: Sparkles,
    showOnHomepage: false,
    metricDrivenHeader: 'Master the OpenAI API ecosystem.',
    capabilities: ['Structured Outputs (JSON)', 'Token Streaming', 'Vision API', 'Whisper Integration'],
    caseStudySlugs: ['lumida-wealth', 'borderless-ai'],
    faqs: [
      { question: 'How do you ensure the OpenAI API returns reliable data?', answer: 'I use OpenAI\'s "Structured Outputs" (Function Calling) combined with Zod validation to ensure the AI always returns exact, machine-readable JSON rather than unpredictable text.' },
      { question: 'Can you make the AI response type out smoothly?', answer: 'Yes, I implement Server-Sent Events (SSE) to stream tokens to the frontend, creating a fast, ChatGPT-like typing experience.' }
    ]
  },
  {
    slug: 'ai-saas-mvp-developer',
    title: 'AI SaaS MVP Developer',
    description: 'Launch your AI wrapper or AI-native SaaS product. I build the frontend, the billing, and the complex LLM backend orchestration.',
    tags: ['AI SaaS', 'MVP', 'Next.js', 'LLMs'],
    icon: Cloud,
    showOnHomepage: false,
    metricDrivenHeader: 'Build and launch your AI SaaS product.',
    capabilities: ['Next.js App Setup', 'AI Text/Image Generation', 'Stripe Billing', 'User Auth'],
    caseStudySlugs: ['omnibid', 'devfix'],
    faqs: [
      { question: 'Can you build an "AI Wrapper" SaaS?', answer: 'Yes, but I focus on adding deep value via RAG, complex prompt chaining, and great UI/UX so your product isn\'t easily replaced by ChatGPT.' },
      { question: 'How do you manage API costs per user?', answer: 'I implement database-backed token tracking. When a user generates content, we calculate the OpenAI token cost and deduct it from their Stripe subscription allowance.' }
    ]
  },
  {
    slug: 'rag-application-developer',
    title: 'RAG Application Developer (Retrieval-Augmented Generation)',
    description: 'Build "Chat with your Data" applications. I build RAG pipelines using Pinecone, pgvector, and LangChain.',
    tags: ['RAG', 'Vector DB', 'pgvector', 'Semantic Search'],
    icon: Database,
    showOnHomepage: false,
    metricDrivenHeader: 'Make LLMs understand your private company data.',
    capabilities: ['Document Parsing (PDF/Docx)', 'Embedding Generation', 'Vector Search', 'Context Injection'],
    caseStudySlugs: ['borderless-ai'],
    faqs: [
      { question: 'What is a RAG application?', answer: 'RAG allows an AI to search your private documents (like company policies or past tickets) and use that specific information to answer user questions accurately.' },
      { question: 'Which vector database is best for RAG?', answer: 'For Postgres-heavy apps, I use `pgvector` to keep relational and vector data together. For massive scale, I use Pinecone.' }
    ]
  },
  {
    slug: 'langchain-node-js-developer',
    title: 'LangChain Node.js Developer',
    description: 'Hire a LangChain expert to orchestrate complex AI workflows, memory management, and prompt chaining in JavaScript/TypeScript.',
    tags: ['LangChain', 'Node.js', 'TypeScript', 'AI Workflows'],
    icon: Layers,
    showOnHomepage: false,
    metricDrivenHeader: 'Complex AI orchestration using LangChain.js.',
    capabilities: ['Prompt Chaining', 'Agentic Workflows', 'Conversation Memory', 'Tool/Function Execution'],
    caseStudySlugs: ['devfix'],
    faqs: [
      { question: 'Why use LangChain instead of direct API calls?', answer: 'LangChain provides a unified interface for swapping models (e.g., moving from OpenAI to Anthropic) and includes built-in tools for document chunking, memory, and multi-step agent reasoning.' },
      { question: 'Do you use LangChain or Vercel AI SDK?', answer: 'I use both. Vercel AI SDK is best for frontend streaming, while LangChain.js is excellent for complex backend reasoning pipelines.' }
    ]
  },
  {
    slug: 'llm-integration-consultant',
    title: 'LLM Integration Consultant',
    description: 'Get strategic advice on how to securely and cost-effectively integrate Large Language Models into your existing enterprise software.',
    tags: ['LLM', 'Consultant', 'Enterprise Strategy', 'AI Security'],
    icon: Server,
    showOnHomepage: false,
    metricDrivenHeader: 'Strategic LLM integration for enterprise software.',
    capabilities: ['Architecture Review', 'Data Privacy Strategy', 'Model Selection (Open vs Closed)', 'Cost Audits'],
    caseStudySlugs: ['lumida-wealth'],
    faqs: [
      { question: 'How do we prevent the AI from leaking private data?', answer: 'We implement strict data masking before sending prompts to external APIs, or we deploy open-source models (like Llama 3) locally within your VPC.' },
      { question: 'Which LLM is best for coding tasks vs writing?', answer: 'Currently, Anthropic Claude 3.5 Sonnet excels at coding and formatting, while GPT-4o is excellent for general reasoning and API tool usage. I help you route to the right model.' }
    ]
  },
  {
    slug: 'custom-ai-chatbot-developer',
    title: 'Custom AI Chatbot Developer',
    description: 'Build a highly intelligent, context-aware AI customer service or internal knowledge chatbot tailored to your exact data.',
    tags: ['Chatbot', 'AI Assistant', 'Customer Service', 'Web'],
    icon: Smartphone,
    showOnHomepage: false,
    metricDrivenHeader: 'AI chatbots that actually solve customer problems.',
    capabilities: ['Custom UI Chat Interfaces', 'Conversation History', 'Human Handoff', 'Knowledge Base Integration'],
    caseStudySlugs: ['borderless-ai'],
    faqs: [
      { question: 'Is this better than standard Intercom/Zendesk bots?', answer: 'Yes. Instead of rigid decision trees, an LLM chatbot understands natural language nuances, corrects typos, and can synthesize answers from multiple internal documents instantly.' },
      { question: 'Can the chatbot take actions?', answer: 'Yes, using function calling, the chatbot can actually trigger API requests (like "Cancel my order" or "Book a meeting") directly within the chat.' }
    ]
  },
  {
    slug: 'freelance-ai-agent-developer',
    title: 'Freelance AI Agent Developer',
    description: 'Hire a developer to build autonomous AI agents that can browse the web, write code, or execute multi-step workflows independently.',
    tags: ['AI Agents', 'Autonomous', 'Multi-Agent', 'Workflows'],
    icon: Cpu,
    showOnHomepage: false,
    metricDrivenHeader: 'Build autonomous agents that do real work.',
    capabilities: ['Multi-Agent Architecture', 'Web Browsing Tools', 'Code Execution Sandboxes', 'Self-Correction Loops'],
    caseStudySlugs: ['devfix'],
    faqs: [
      { question: 'What is the difference between a chatbot and an AI agent?', answer: 'A chatbot waits for you to ask a question. An AI agent is given a high-level goal (e.g., "Research these 5 companies") and autonomously plans, executes tools, and reviews its own work until finished.' },
      { question: 'How do you prevent agents from getting stuck in loops?', answer: 'I implement maximum iteration limits, deterministic fallback tools, and "human-in-the-loop" approval gates for critical actions.' }
    ]
  },
  {
    slug: 'pgvector-database-expert',
    title: 'pgvector Database Expert',
    description: 'Integrate vector search directly into your PostgreSQL database using pgvector. Build scalable semantic search without external tools.',
    tags: ['pgvector', 'PostgreSQL', 'Vector Search', 'Embeddings'],
    icon: Database,
    showOnHomepage: false,
    metricDrivenHeader: 'Unified relational and vector data architecture.',
    capabilities: ['pgvector Extension Setup', 'Cosine Similarity Search', 'HNSW Indexing', 'Prisma Integration'],
    caseStudySlugs: ['omnibid'],
    faqs: [
      { question: 'Why use pgvector instead of Pinecone?', answer: 'pgvector allows you to keep your standard app data (users, posts) and your AI vectors in the exact same database. This allows for powerful queries that combine keyword filtering with semantic search.' },
      { question: 'Is pgvector fast enough for production?', answer: 'Yes, with the recent addition of HNSW (Hierarchical Navigable Small World) indexes, pgvector can query millions of embeddings in milliseconds.' }
    ]
  },
  {
    slug: 'ai-automation-developer',
    title: 'AI Automation Developer',
    description: 'Automate tedious backend business processes (like invoice processing, data extraction, and email sorting) using AI and LLMs.',
    tags: ['Automation', 'AI', 'Data Extraction', 'Workflow'],
    icon: Sparkles,
    showOnHomepage: false,
    metricDrivenHeader: 'Save thousands of hours with AI data automation.',
    capabilities: ['Unstructured Data Extraction', 'Automated Email Parsing', 'PDF OCR & LLM Analysis', 'Webhook Web-scraping'],
    caseStudySlugs: ['devfix'],
    faqs: [
      { question: 'Can AI extract data from messy PDFs?', answer: 'Yes. By passing PDFs through OCR and then into a Vision LLM (like GPT-4o), we can perfectly extract specific fields (like invoice totals) into clean JSON databases.' },
      { question: 'Do you integrate with tools like n8n or Make?', answer: 'Yes, I frequently use n8n to orchestrate complex API automations, dropping custom Node.js and AI scripts directly into the visual workflow.' }
    ]
  },

  // --- CONSULTING, REMOTE & MISC ---
  {
    slug: 'hire-remote-senior-software-engineer',
    title: 'Hire Remote Senior Software Engineer',
    description: 'Looking to expand your team globally? Hire a highly communicative, remote Senior Software Engineer to drive product delivery.',
    tags: ['Remote', 'Senior Engineer', 'Global Team', 'Communication'],
    icon: Globe,
    showOnHomepage: false,
    metricDrivenHeader: 'Reliable, autonomous remote engineering talent.',
    capabilities: ['Async Workflows', 'Code Quality Standards', 'Technical Documentation', 'Cross-Timezone Collaboration'],
    caseStudySlugs: ['lumida-wealth', 'saddar'],
    faqs: [
      { question: 'How do you ensure accountability working remotely?', answer: 'I believe in hyper-visibility. I push code frequently, write detailed Pull Request descriptions, and over-communicate project status in Slack or Jira.' },
      { question: 'Do you speak fluent English?', answer: 'Yes, I possess full professional proficiency in English and regularly collaborate directly with US and EU-based founders and stakeholders.' }
    ]
  },
  {
    slug: 'freelance-software-architect',
    title: 'Freelance Software Architect',
    description: 'Ensure your startup is built on a solid foundation. Hire a freelance software architect to design your database schema, API, and cloud deployment.',
    tags: ['Software Architect', 'System Design', 'Consulting', 'Infrastructure'],
    icon: Layers,
    showOnHomepage: false,
    metricDrivenHeader: 'Build it right the first time.',
    capabilities: ['System Design (Draw.io/Eraser)', 'Tech Stack Selection', 'Database Normalization', 'Scalability Planning'],
    caseStudySlugs: ['borderless-ai', 'omnibid'],
    faqs: [
      { question: 'Why do I need a software architect?', answer: 'Choosing the wrong database or framework early on can cost months of rewrite time later. An architect ensures your technical choices align with your business goals and scale.' },
      { question: 'Do you just draw diagrams, or do you code?', answer: 'I am a hands-on architect. I design the system, but I also write the core boilerplates, setup the CI/CD, and establish the patterns for the rest of the team to follow.' }
    ]
  },
  {
    slug: 'fractional-cto-react-node',
    title: 'Fractional CTO (React & Node.js)',
    description: 'Get executive-level technical leadership part-time. I act as a Fractional CTO to guide your development team, manage vendors, and oversee architecture.',
    tags: ['Fractional CTO', 'Leadership', 'React', 'Node.js'],
    icon: Monitor,
    showOnHomepage: false,
    metricDrivenHeader: 'Executive technical leadership, on demand.',
    capabilities: ['Vendor Management', 'Technical Hiring', 'Sprint Planning', 'Code Audits'],
    caseStudySlugs: ['lumida-wealth'],
    faqs: [
      { question: 'What is a Fractional CTO?', answer: 'A Fractional CTO serves as your part-time technical co-founder. I help non-technical founders make critical tech decisions without the cost of a full-time executive salary.' },
      { question: 'Can you interview developers for my team?', answer: 'Yes, I conduct rigorous technical interviews to ensure you are hiring competent engineers who fit your stack and culture.' }
    ]
  },
  {
    slug: 'b2b-saas-developer-for-hire',
    title: 'B2B SaaS Developer for Hire',
    description: 'Hire a specialist in B2B SaaS development. I build scalable platforms with complex permissions, org management, and secure data handling.',
    tags: ['B2B', 'SaaS', 'Enterprise', 'Multi-tenant'],
    icon: Cloud,
    showOnHomepage: false,
    metricDrivenHeader: 'Complex logic and secure data for B2B SaaS.',
    capabilities: ['Organization/Team Management', 'Role-Based Access Control (RBAC)', 'Audit Logging', 'SOC2 Compliant Architecture Patterns'],
    caseStudySlugs: ['saddar', 'omnibid'],
    faqs: [
      { question: 'How is B2B SaaS different from B2C?', answer: 'B2B requires "Organization" level data architecture. Users belong to Teams, and data must be strictly scoped to the Team level rather than just the individual User.' },
      { question: 'Can you implement complex user permissions?', answer: 'Yes, I implement granular RBAC (Role-Based Access Control) ensuring Admins, Editors, and Viewers only access exactly what they are permitted to.' }
    ]
  },
  {
    slug: 'fintech-app-developer-react-native',
    title: 'Fintech App Developer (React Native & Node.js)',
    description: 'Build secure, performant financial technology applications. Experienced in transaction handling, Ledger architectures, and high-security mobile apps.',
    tags: ['Fintech', 'React Native', 'Security', 'Ledger'],
    icon: Database,
    showOnHomepage: false,
    metricDrivenHeader: 'Secure, robust architecture for Fintech applications.',
    capabilities: ['Ledger Database Design', 'Transaction Safety (ACID)', 'Plaid / Stripe Integration', 'Biometric App Security'],
    caseStudySlugs: ['lumida-wealth', 'udhaar-book'],
    faqs: [
      { question: 'How do you ensure transaction data is never lost?', answer: 'I utilize PostgreSQL with strict ACID transactions, ensuring that financial debits and credits either completely succeed together or completely roll back if an error occurs.' },
      { question: 'Are your React Native apps secure enough for Fintech?', answer: 'Yes, I implement secure keystores, prevent screen recording/screenshots on sensitive views, and obfuscate the JavaScript bundle for maximum security.' }
    ]
  },
  {
    slug: 'multi-tenant-saas-architect',
    title: 'Multi-Tenant SaaS Architect',
    description: 'Hire an architect who understands the complexities of multi-tenant databases, custom domains, and scalable cloud deployments.',
    tags: ['Multi-tenant', 'SaaS', 'Architecture', 'Next.js'],
    icon: Layers,
    showOnHomepage: false,
    metricDrivenHeader: 'Securely scale your application to thousands of businesses.',
    capabilities: ['Postgres RLS', 'Subdomain Routing (Vercel)', 'Tenant-Specific Styling', 'Shared vs Isolated Database Strategies'],
    caseStudySlugs: ['omnibid'],
    faqs: [
      { question: 'Should we use one database or multiple databases for our tenants?', answer: 'For 90% of SaaS apps, a shared database with strict Row-Level Security (RLS) or tenant_id columns is best. I only recommend isolated databases for strict enterprise compliance.' },
      { question: 'Can you implement custom subdomains (e.g., tenant.myapp.com)?', answer: 'Yes, utilizing Next.js middleware and Vercel\'s wildcard domains, I can route users dynamically based on their subdomain.' }
    ]
  },
  {
    slug: 'stripe-integration-expert',
    title: 'Stripe Integration Expert',
    description: 'Stop fighting with billing logic. Hire a Stripe integration expert to implement complex SaaS subscriptions, metered billing, and secure webhooks.',
    tags: ['Stripe', 'Billing', 'SaaS', 'API'],
    icon: Code,
    showOnHomepage: false,
    metricDrivenHeader: 'Flawless subscription billing and payment processing.',
    capabilities: ['Stripe Checkout', 'Customer Portal', 'Metered / Usage-Based Billing', 'Webhook Security (Signature Verification)'],
    caseStudySlugs: ['devfix'],
    faqs: [
      { question: 'Can you handle usage-based (metered) billing for AI apps?', answer: 'Yes, I integrate Stripe Metered Billing. We report the exact number of AI tokens a user consumes to Stripe via API, and Stripe automatically bills them at the end of the month.' },
      { question: 'How do you prevent users from bypassing paywalls?', answer: 'By never trusting the frontend. Access is strictly validated on the backend API using the customer\'s real-time Stripe subscription status.' }
    ]
  },
  {
    slug: 'vercel-deployment-expert',
    title: 'Vercel Deployment & Infrastructure Expert',
    description: 'Optimize your Vercel hosting. I specialize in Edge Functions, Serverless API tuning, and reducing bandwidth/execution costs.',
    tags: ['Vercel', 'DevOps', 'Next.js', 'Serverless'],
    icon: Cloud,
    showOnHomepage: false,
    metricDrivenHeader: 'Maximize Vercel performance while minimizing costs.',
    capabilities: ['Edge Functions', 'Vercel KV / Blob', 'Custom Domain Config', 'Serverless Cold-Start Optimization'],
    caseStudySlugs: ['borderless-ai', 'omnibid'],
    faqs: [
      { question: 'Why is my Vercel bill so high?', answer: 'Often it is due to unoptimized images eating bandwidth, or slow database queries keeping serverless functions running too long. I audit and fix these inefficiencies.' },
      { question: 'Can you optimize cold starts on serverless APIs?', answer: 'Yes, by reducing dependency weight, utilizing the Edge Runtime where possible, and keeping database connections pooled properly (via Prisma Accelerate or PgBouncer).' }
    ]
  },
  {
    slug: 'hire-pakistan-senior-software-engineer',
    title: 'Hire Senior Software Engineer (Pakistan)',
    description: 'Looking to hire top-tier engineering talent in Pakistan? I offer Silicon Valley-level architecture and code quality at competitive remote rates.',
    tags: ['Remote', 'Pakistan', 'Senior Engineer', 'Outsourcing'],
    icon: Globe,
    showOnHomepage: false,
    metricDrivenHeader: 'World-class engineering talent, highly competitive rates.',
    capabilities: ['Fluent English Communication', 'US/EU Timezone Overlap', 'Silicon Valley Tech Stack', 'Autonomous Work Ethic'],
    caseStudySlugs: ['lumida-wealth', 'saddar'],
    faqs: [
      { question: 'Is the time difference a problem for US/EU clients?', answer: 'Not at all. I explicitly manage my schedule to provide several hours of direct overlap with US (EST) and European timezones for daily standups and syncs.' },
      { question: 'How does payment work for international contracts?', answer: 'I accept payments via standard platforms like Deel, Payoneer, Wise, or direct wire transfers, making the accounting process seamless for your company.' }
    ]
  },
  {
    slug: 'remote-asian-timezone-senior-developer',
    title: 'Remote Asian Timezone Senior Developer',
    description: 'Hire a Senior Developer located in the Asian timezone to provide "follow-the-sun" development, ensuring your codebase progresses while your US team sleeps.',
    tags: ['Remote', 'Asia Timezone', 'Follow-The-Sun', 'Development'],
    icon: Globe,
    showOnHomepage: false,
    metricDrivenHeader: 'Accelerate development with follow-the-sun execution.',
    capabilities: ['Async Handoffs', 'Overnight Bug Fixing', 'Independent Problem Solving', 'Clear Documentation'],
    caseStudySlugs: ['udhaar-book', 'saddar'],
    faqs: [
      { question: 'What is "follow-the-sun" development?', answer: 'It means when your US-based team finishes their day, they hand off tasks to me in Asia. I work while they sleep, and when they wake up, the features are complete and ready for review.' },
      { question: 'Can you work independently without hand-holding?', answer: 'Yes. As a senior engineer, I am extremely comfortable reading existing codebases, interpreting loose PRDs, and making smart architectural decisions autonomously.' }
    ]
  }
]
