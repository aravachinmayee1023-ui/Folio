import { PortfolioData } from '../types/portfolio';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  userName: 'Chinmayee Aravind',
  roleTitle: 'Software Developer & AI Systems Architect',
  tagline: 'I build web products that load fast, scale gracefully, and work for everyone.',
  bio: 'With over eight years of experience building production software across Hyderabad and international engineering teams, I specialize in combining modern, accessible frontends with resilient distributed backends and autonomous AI agents.',
  bioParagraphs: [
    'I specialize in building accessible, high-performance web products and high-concurrency backend services. My focus is on creating clean architectures that eliminate bloat, minimize tail latency, and deliver dependable user experiences.',
    'Over the past 8+ years, I have architected streaming inference pipelines, sub-5ms vector query fabrics, and accessible React interfaces, recently cutting page load times by 48% across enterprise suites. I build systems with verifiable telemetry and testable invariants.',
    'I am currently open to select advisory contracts, fractional systems architecture leadership, and bespoke freelance engineering engagements.'
  ],
  location: 'Hyderabad, Telangana, India & Remote Worldwide',
  availability: 'Open to freelance work & strategic consulting',
  experienceYears: '8+ years',
  currentlyRole: 'Staff AI Systems Architect, Aravind Digital Labs',
  heroPortraitUrl: '/src/assets/images/hero_architect_portrait_1793897966054.jpg',
  heroPortraitAlt: 'Professional portrait of Chinmayee Aravind, Software Developer & AI Systems Architect in engineering workspace',
  stats: [
    { label: 'Production Uptime', value: '99.99%', detail: 'Across 14 distributed clusters' },
    { label: 'System Throughput', value: '1.2B+', detail: 'Daily token inferences served' },
    { label: 'Client Capital Saved', value: '$18.4M', detail: 'Through GPU inference optimization' },
    { label: 'Years Experience', value: '8+', detail: 'High-scale web & machine learning' },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Nexus Flow Autonomous Agent Platform',
      subtitle: 'Multi-Agent Orchestration & Deterministic Reasoning Engine',
      category: 'ai',
      categories: ['ai', 'backend'],
      description: 'A distributed workflow execution framework coordinating autonomous tool-using agents with bounded latency, persistent state recovery, and strict schema guardrails.',
      fullCaseStudy: 'Enterprise teams faced severe reliability issues with unconstrained LLM loops. Nexus Flow introduced a state-machine compiler that converts natural language intent graphs into typed DAG pipelines with verifiable retry policies, reducing hallucinated side-effects by 94%.',
      architectureDetails: [
        'Deterministic state snapshotting via distributed log store with raft consensus',
        'Streaming telemetry gateway with WebSocket fanout and sub-15ms backpressure signaling',
        'Model-agnostic tool calling protocol with runtime sandboxing and rate-limited egress',
        'Built-in human-in-the-loop review nodes with cryptographic execution signatures'
      ],
      techStack: ['Python', 'FastAPI', 'Anthropic SDK', 'Redis Streams', 'React'],
      metrics: 'Cut hallucination rate by 94% across 34,000+ daily agent runs',
      demoUrl: 'https://github.com',
      repoUrl: 'https://github.com',
      imageUrl: '/src/assets/images/project_autonomous_agents_1793897980564.jpg',
      imageAlt: 'Nexus Flow platform architecture diagram showing autonomous agent workflow graph with connected neural nodes and execution telemetry'
    },
    {
      id: 'proj-2',
      title: 'VectorPulse High-Throughput Search Engine',
      subtitle: 'Sub-5ms Distributed Vector Database & Cache Fabric',
      category: 'backend',
      categories: ['backend', 'ai'],
      description: 'A horizontally partitioned vector indexing service designed for million-scale nearest neighbor queries with real-time metadata filtering and tiered memory caching.',
      fullCaseStudy: 'Engineered to replace costly managed cloud vector providers. By implementing custom quantization routines (PQ + HNSW) and an asynchronous SIMD cache, query latency plummeted from 64ms to 3.8ms while slashing hosting expenditures by 72%.',
      architectureDetails: [
        'HNSW graph index paired with Product Quantization in AVX-512 accelerated C++ bindings',
        'Tiered memory model: NVMe memory-mapped files backed by Redis cluster for hot vectors',
        'Zero-downtime rolling index compaction and live shard rebalancing without query stalls',
        'gRPC and REST dual ingress with bidirectional streaming search results'
      ],
      techStack: ['Go', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Tailwind CSS'],
      metrics: '5.2M vectors indexed per node with 99.8% precision at top-10 recall',
      demoUrl: 'https://github.com',
      repoUrl: 'https://github.com',
      imageUrl: '/src/assets/images/project_neural_engine_1793897994191.jpg',
      imageAlt: 'VectorPulse architecture diagram illustrating ingestion pipeline, vector database cluster, distributed caching cluster, and query layer'
    },
    {
      id: 'proj-3',
      title: 'Zenith UI & Accessibility Design Engine',
      subtitle: 'Zero-Runtime Headless Component & Typography Framework',
      category: 'web',
      categories: ['web', 'backend'],
      description: 'A strict WCAG 2.2 AA compliant design system library emphasizing tactile micro-interactions, responsive typography scaling, and high-contrast dual-theming.',
      fullCaseStudy: 'Bridged the gap between high-end editorial aesthetics and uncompromising screen-reader accessibility. Built with zero runtime CSS overhead, guaranteeing perfect 100/100 Lighthouse performance across all viewports.',
      architectureDetails: [
        'Automated contrast ratio validation during compile-time pipeline',
        'Keyboard-first focus trapping and roving tabindex for complex widget grids',
        'Fluid clamp typography calculations with zero-layout-shift font swap metrics',
        'Fluid CSS container queries with progressive enhancement fallback'
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Playwright'],
      metrics: '100/100 Lighthouse Accessibility score across 45 enterprise client audits',
      demoUrl: 'https://github.com',
      repoUrl: 'https://github.com',
      imageUrl: '/src/assets/images/project_autonomous_agents_1793897980564.jpg',
      imageAlt: 'Zenith Design Engine preview showing accessible component tokens, typography scale, and keyboard navigation outlines'
    }
  ],
  skillCategories: [
    {
      category: 'Frontend Engineering',
      description: 'Fast, semantic, and accessible web user interfaces.',
      skills: [
        { name: 'HTML, CSS, JavaScript, React, Tailwind', level: 98, experience: '8 yrs', context: 'Semantic HTML, WCAG 2.2 AA, responsive utility layouts' },
        { name: 'TypeScript & Next.js', level: 95, experience: '6 yrs', context: 'Strict type safety, Server Components, SSR & static generation' }
      ]
    },
    {
      category: 'Backend Architecture',
      description: 'High-throughput APIs, databases, and microservices.',
      skills: [
        { name: 'Python, FastAPI, Node.js, SQL', level: 96, experience: '8 yrs', context: 'REST APIs, asynchronous concurrency, PostgreSQL query optimization' },
        { name: 'Distributed Systems & Caching', level: 92, experience: '6 yrs', context: 'Redis Streams, message queues, state machine consensus' }
      ]
    },
    {
      category: 'Frontier AI & Machine Learning',
      description: 'Agentic reasoning, prompt engineering, and LLM integrations.',
      skills: [
        { name: 'Anthropic SDK, OpenAI, Gemini API', level: 94, experience: '3 yrs', context: 'Function calling, deterministic tool use, streaming reasoning' },
        { name: 'Vector Databases & RAG', level: 93, experience: '3 yrs', context: 'Semantic retrieval, embedding pipelines, BM25 reranking' }
      ]
    }
  ],
  skillsTable: [
    { area: 'Frontend', tools: 'HTML, CSS, JavaScript, React, Tailwind, Next.js', level: 'Advanced' },
    { area: 'Backend', tools: 'Python, FastAPI, Node.js, Express, PostgreSQL, Redis', level: 'Advanced' },
    { area: 'AI & ML', tools: 'Anthropic SDK, Gemini API, Prompt Design, Vector RAG', level: 'Intermediate' },
    { area: 'Cloud & Tools', tools: 'Git, Docker, CI/CD, Linux, Playwright CLI', level: 'Intermediate' }
  ],
  testimonials: [
    {
      id: 'rev-1',
      clientName: 'Elena Rostova',
      clientRole: 'VP of Engineering',
      clientCompany: 'Apex Scale Dynamics Inc.',
      clientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      avatarAlt: 'Portrait of Elena Rostova, VP of Engineering at Apex Scale Dynamics',
      rating: 5,
      quote: 'Chinmayee re-architected our streaming inference pipeline within six weeks. We went from continuous outage alerts during peak trading hours to rock-solid 99.99% availability while dropping our cloud invoice by 40%. The technical rigor is unmatched.',
      projectDelivered: 'Real-Time Market Inference Gateway',
      verifiedDate: 'October 2026'
    },
    {
      id: 'rev-2',
      clientName: 'Marcus Vance',
      clientRole: 'Chief Technology Officer',
      clientCompany: 'Stratum Cloud Health',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      avatarAlt: 'Portrait of Marcus Vance, Chief Technology Officer at Stratum Cloud Health',
      rating: 5,
      quote: 'Exceptional communication, clean architectural blueprints, and code that is a pleasure to review. Chinmayee designed our compliant multi-tenant vector engine with zero security regressions. Worth every single dollar.',
      projectDelivered: 'Diagnostic Vector Search Fabric',
      verifiedDate: 'August 2026'
    },
    {
      id: 'rev-3',
      clientName: 'Dr. Sarah Lin',
      clientRole: 'Head of AI Research',
      clientCompany: 'Veritas Neural Systems',
      clientAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      avatarAlt: 'Portrait of Dr. Sarah Lin, Head of AI Research at Veritas Neural Systems',
      rating: 5,
      quote: 'Rarely do you find an engineer who can translate abstract research papers into sub-millisecond production code while simultaneously building a stunning, accessible web interface. A genuine engineering partner.',
      projectDelivered: 'Autonomous Multi-Agent Evaluation Suite',
      verifiedDate: 'June 2026'
    }
  ],
  businessDetails: {
    legalName: 'Chinmayee Aravind (sole proprietor)',
    tradeName: 'Aravind Engineering Consultancy',
    registrationNumber: 'GSTIN: 36AAAAA0000A1Z5 / UDYAM-TS-02-0049210',
    jurisdiction: 'Hyderabad, Telangana, India',
    taxVatId: 'PAN: AAAAA0000A / GSTIN: 36AAAAA0000A1Z5',
    dunsNumber: '08-492-8814',
    registeredAddress: 'Plot 42, Silicon Valley Layout, Madhapur, Hyderabad, Telangana 500081, India',
    dpoEmail: 'you@example.com',
    primaryContact: 'you@example.com',
    governingLaw: 'Governed by the laws of India, with jurisdiction in courts of Hyderabad, Telangana.',
    gstin: '36AAAAA0000A1Z5'
  },
  localNews: [
    {
      id: 'news-1',
      headline: 'Chinmayee Aravind Keynotes at Hyderabad Systems & AI Summit 2026',
      publication: 'Telangana Tech Chronicle',
      date: 'October 18, 2026',
      category: 'Keynote & Industry Leadership',
      readTime: '3 min read',
      summary: 'Delivered an in-depth technical keynote on deterministic multi-agent orchestration, addressing state synchronization under network partitions and sub-10ms tool calling paradigms.',
      url: '#'
    },
    {
      id: 'news-2',
      headline: 'Open-Source Distributed Cache Framework Surpasses 10,000 GitHub Stars',
      publication: 'India Developer Dispatch',
      date: 'September 24, 2026',
      category: 'Open Source Milestone',
      readTime: '4 min read',
      summary: 'The lightweight Python/TypeScript hybrid vector caching engine authored by Chinmayee has been adopted by over 200 production engineering teams globally.',
      url: '#'
    },
    {
      id: 'news-3',
      headline: 'Selected for India Clean Computing & Energy-Efficient AI Grant',
      publication: 'Innovation Today India',
      date: 'July 14, 2026',
      category: 'Research Grant & Recognition',
      readTime: '2 min read',
      summary: 'Awarded state recognition for pioneering algorithm quantization research reducing datacenter power consumption by 32% during high-throughput LLM batch processing.',
      url: '#'
    }
  ],
  mediaLicensing: {
    copyrightNotice: '© 2026 Chinmayee Aravind. All rights reserved.',
    proprietaryAssetsStatement: 'All architectural blueprints, proprietary diagrams, visual assets, trademarks, and code samples displayed across this portfolio website are protected under Indian and international copyright laws.',
    openSourceLicense: 'Open-source software libraries linked herein are licensed under their respective MIT or Apache 2.0 licenses as noted in their public repositories.',
    dmcaAgent: 'Designated Compliance Officer: Legal Compliance Dept, Madhapur, Hyderabad, Telangana 500081, India. Contact: you@example.com',
    imageAttribution: 'Hero portrait and technical architectural visuals were generated using Google AI Studio imaging protocols and are owned by Chinmayee Aravind. Client review headshots are licensed for editorial portfolio display.'
  },
  policies: {
    privacyPolicy: {
      lastUpdated: '5 November 2026',
      content: [
        'Chinmayee Aravind (“I”) is the data controller for this site. I process personal data under the laws that apply to you, including India’s Digital Personal Data Protection Act, 2023, the GDPR and UK GDPR for visitors in Europe, and the CCPA/CPRA for visitors in California.',
        'I use your data only to reply to your enquiry and to keep this site secure. I do not sell your data. I keep enquiry emails for up to 24 months, then delete them.',
        'You can ask to access, correct, delete or export your data, withdraw consent, or complain to your data protection authority. Email you@example.com.'
      ]
    },
    userDataCollected: {
      lastUpdated: '5 November 2026',
      categories: [
        {
          category: 'Name, email, message (contact form)',
          dataPoints: ['Full Name', 'Work Email', 'Inquiry Message', 'Consent Checkbox Timestamp'],
          purpose: 'To reply to you and assess project feasibility',
          retentionPeriod: '24 months'
        },
        {
          category: 'Cookie choice (stored in your browser)',
          dataPoints: ['localStorage key "cookie-consent" ("all" or "necessary")'],
          purpose: 'To remember your cookie preference without tracking',
          retentionPeriod: '12 months (stored locally)'
        },
        {
          category: 'Server logs: IP address, browser, time',
          dataPoints: ['Truncated IP address, User-Agent, Request timestamp'],
          purpose: 'Security defense, rate limiting, and hosting reliability',
          retentionPeriod: 'Rolling 30 days automatic expiration'
        },
        {
          category: 'Analytics data (only if you accept)',
          dataPoints: ['Anonymized viewport size, page interaction count'],
          purpose: 'To understand site use and optimize accessibility',
          retentionPeriod: 'Session-only'
        }
      ]
    },
    termsAndConditions: {
      lastUpdated: '5 November 2026',
      content: [
        'By using this site you accept these terms. Content on this site, including text, code samples and designs, belongs to Chinmayee Aravind unless credited otherwise. Do not copy or reuse it without written permission.',
        'The site is provided “as is”. I take care to keep it accurate but do not guarantee that it is error-free or always available. Project work is governed by a separate written agreement. These terms are governed by the laws of India, and courts in Hyderabad, Telangana have jurisdiction, subject to any mandatory consumer rights you have where you live.'
      ]
    },
    cookiePolicy: {
      lastUpdated: '5 November 2026',
      content: [
        'This site uses one necessary item of browser storage, cookie-consent, to remember your choice. It expires after 12 months. Analytics, if added, load only after you click “Accept all”. You can change your choice at any time.'
      ]
    },
    refundPolicy: {
      lastUpdated: '5 November 2026',
      content: [
        'This applies only if you hire me for paid work. Edit the terms to match your real practice. Example: a deposit is refundable in full before work starts; once work starts, refunds are pro rata for work not yet delivered; delivered work is non-refundable except where it does not match the agreed scope. Refund requests: you@example.com. Approved refunds are paid within 10 working days. Your statutory consumer rights are not affected.'
      ]
    },
    embedsPolicy: {
      lastUpdated: '5 November 2026',
      content: [
        'This page loads the Tailwind CSS script from cdn.tailwindcss.com, which receives your IP address. For production, replace it with a compiled local stylesheet. The contact form sends data to Formspree (or the form provider you choose), which processes it on my behalf. Videos, maps or social widgets are not embedded by default. If you add them, load them only after consent and list them here, because they may set their own cookies.'
      ]
    },
    accessibilityStatement: {
      lastUpdated: '5 November 2026',
      content: [
        'This site aims to meet WCAG 2.2 level AA. It has a skip link, visible keyboard focus, labelled form fields with text error messages, descriptive alt text for images, text colours with at least 4.5:1 contrast, and respects reduced-motion settings. If you find a barrier, email you@example.com and I will respond within five working days.'
      ]
    },
    creditsAndCopyright: {
      lastUpdated: '5 November 2026',
      content: [
        'Use only images you created, bought, or that carry a licence allowing your use (for example CC0 or a licence from a stock site). Credit them here: “Photo title by Author, licence, source link”. Never use images copied from search results, news sites or other portfolios without written permission. Placeholder graphics on this page are original gradients.',
        'Check the rules that apply where you and your clients are, such as the Indian Copyright Act, 1957, the IT Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020, and the GDPR or CCPA if you serve visitors there. Do not show client work or logos without their permission.'
      ]
    }
  }
};
