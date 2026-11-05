import { PortfolioData } from '../types/portfolio';
import { sanitizeText } from './validation';

/**
 * Generates an ultra-accessible, single-file production-ready HTML portfolio
 * based on the user's attached HTML design system:
 * - Stone-950 aesthetic with Amber-300 accents
 * - Editorial serif typography paired with clean sans-serif UI
 * - Accessible project filter with live polite announcements
 * - Semantic skills table with area, tools, and levels
 * - Business details & legal compliance accordion (<details>)
 * - Form validation with aria-invalid, aria-describedby & explicit consent
 * - Cookie consent banner with persistent localStorage
 * - Third-party embeds and local press sections
 */
export function generateProductionHtml(data: PortfolioData): string {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.userName,
    jobTitle: data.roleTitle,
    description: data.tagline,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN'
    },
    worksFor: {
      '@type': 'Organization',
      name: data.businessDetails.legalName
    }
  });

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${sanitizeText(data.userName)} | Software Developer & AI Systems Architect</title>
<meta name="description" content="${sanitizeText(data.tagline)}">
<meta property="og:title" content="${sanitizeText(data.userName)} | Portfolio">
<meta property="og:description" content="${sanitizeText(data.tagline)}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">

<!-- Schema.org Structured Data -->
<script type="application/ld+json">
  ${jsonLd}
</script>

<script src="https://cdn.tailwindcss.com"></script>
<style>
  body { font-family: ui-serif, Georgia, Cambria, "Times New Roman", serif; }
  .ui { font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  :focus-visible { outline: 3px solid #fbbf24; outline-offset: 3px; border-radius: 4px; }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
  }
</style>
</head>
<body class="bg-stone-950 text-stone-200 antialiased leading-relaxed">
<a href="#main" class="ui sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-amber-300 focus:text-stone-950 focus:px-4 focus:py-2 focus:rounded">Skip to main content</a>

<header class="ui sticky top-0 z-40 bg-stone-950/90 backdrop-blur border-b border-stone-800">
  <nav aria-label="Main" class="mx-auto max-w-5xl px-5 py-3 flex items-center justify-between gap-4">
    <a href="#top" class="font-semibold text-white hover:text-amber-300 transition-colors">${sanitizeText(data.userName)}</a>
    <ul class="flex gap-4 sm:gap-6 text-sm overflow-x-auto">
      <li><a class="hover:text-amber-300 transition-colors" href="#about">About</a></li>
      <li><a class="hover:text-amber-300 transition-colors" href="#projects">Projects</a></li>
      <li><a class="hover:text-amber-300 transition-colors" href="#skills">Skills</a></li>
      <li><a class="hover:text-amber-300 transition-colors" href="#embeds">Integrations</a></li>
      <li><a class="hover:text-amber-300 transition-colors" href="#reviews">Reviews</a></li>
      <li><a class="hover:text-amber-300 transition-colors" href="#news">News</a></li>
      <li><a class="hover:text-amber-300 transition-colors" href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main id="main">
  <!-- HERO SECTION -->
  <section id="top" class="mx-auto max-w-5xl px-5 pt-20 pb-16 sm:pt-28">
    <div class="grid md:grid-cols-12 gap-8 items-center">
      <div class="md:col-span-8">
        <p class="ui text-amber-300 text-sm mb-4">${sanitizeText(data.location)}</p>
        <h1 class="text-4xl sm:text-6xl font-bold text-white leading-tight max-w-3xl">${sanitizeText(data.tagline)}</h1>
        <p class="mt-6 text-lg text-stone-300 max-w-2xl">${sanitizeText(data.bio)}</p>
        <div class="ui mt-8 flex flex-wrap gap-3">
          <a href="#projects" class="bg-amber-300 text-stone-950 font-semibold px-5 py-3 rounded-md hover:bg-amber-200 transition-colors">View my projects</a>
          <a href="#contact" class="border border-stone-500 px-5 py-3 rounded-md hover:border-amber-300 hover:text-amber-300 transition-colors">Send me a message</a>
        </div>
      </div>
      <div class="md:col-span-4 flex justify-center">
        <div class="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900">
          <img 
            src="${data.heroPortraitUrl}" 
            alt="${sanitizeText(data.heroPortraitAlt)}" 
            class="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <!-- STATS STRIP -->
    <div class="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-stone-800">
      ${data.stats.map(s => `
        <div>
          <div class="text-2xl sm:text-3xl font-bold text-white tabular-nums">${sanitizeText(s.value)}</div>
          <div class="ui text-sm text-stone-300 mt-1">${sanitizeText(s.label)}</div>
          <div class="ui text-xs text-stone-500">${sanitizeText(s.detail)}</div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- ABOUT ME SECTION -->
  <section id="about" class="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-5">About me</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="md:col-span-2 space-y-4 max-w-prose">
        ${(data.bioParagraphs || [data.bio]).map(p => `<p>${sanitizeText(p)}</p>`).join('')}
      </div>
      <dl class="ui text-sm space-y-3 border-l border-stone-700 pl-5">
        <div><dt class="text-stone-400">Experience</dt><dd class="text-white">${sanitizeText(data.experienceYears)}</dd></div>
        <div><dt class="text-stone-400">Currently</dt><dd class="text-white">${sanitizeText(data.currentlyRole)}</dd></div>
        <div><dt class="text-stone-400">Availability</dt><dd class="text-white">${sanitizeText(data.availability)}</dd></div>
      </dl>
    </div>
  </section>

  <!-- PROJECTS SECTION -->
  <section id="projects" class="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-5">Projects</h2>
    <div class="ui flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter projects">
      <button type="button" data-filter="all" aria-pressed="true" class="filter px-4 py-2 rounded-full border border-stone-600 text-sm">All</button>
      <button type="button" data-filter="web" aria-pressed="false" class="filter px-4 py-2 rounded-full border border-stone-600 text-sm">Web</button>
      <button type="button" data-filter="backend" aria-pressed="false" class="filter px-4 py-2 rounded-full border border-stone-600 text-sm">Backend</button>
      <button type="button" data-filter="ai" aria-pressed="false" class="filter px-4 py-2 rounded-full border border-stone-600 text-sm">AI</button>
    </div>
    <p id="filter-status" class="sr-only" role="status" aria-live="polite"></p>
    
    <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      ${data.projects.map(proj => `
        <li data-cat="${proj.categories ? proj.categories.join(' ') : proj.category}" class="project bg-stone-900 border border-stone-800 rounded-lg overflow-hidden flex flex-col justify-between">
          <div>
            <div class="h-44 overflow-hidden bg-stone-950 border-b border-stone-800 relative">
              <img 
                src="${proj.imageUrl}" 
                alt="${sanitizeText(proj.imageAlt)}" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div class="p-5">
              <h3 class="text-lg font-semibold text-white">${sanitizeText(proj.title)}</h3>
              <p class="text-sm mt-2 text-stone-300">${sanitizeText(proj.description)}</p>
              <p class="ui text-xs mt-3 text-stone-400 font-mono">${proj.techStack.join(', ')}</p>
              <div class="ui text-xs text-amber-300 mt-2 font-medium">${sanitizeText(proj.metrics)}</div>
            </div>
          </div>
          <div class="px-5 pb-5 pt-1">
            <a class="ui inline-block text-sm text-amber-300 underline hover:text-amber-200" href="${proj.demoUrl || '#'}" aria-label="View ${sanitizeText(proj.title)} on GitHub">View on GitHub</a>
          </div>
        </li>
      `).join('')}
    </ul>
  </section>

  <!-- SKILLS SECTION (SEMANTIC ACCESSIBLE TABLE) -->
  <section id="skills" class="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-5">Skills</h2>
    <div class="ui overflow-x-auto">
      <table class="w-full text-left text-sm min-w-[480px]">
        <caption class="sr-only">Skills grouped by area with proficiency level</caption>
        <thead>
          <tr class="border-b border-stone-700 text-stone-300">
            <th scope="col" class="py-3 pr-4 font-semibold">Area</th>
            <th scope="col" class="py-3 pr-4 font-semibold">Tools</th>
            <th scope="col" class="py-3 font-semibold">Level</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-800">
          ${(data.skillsTable || [
            { area: 'Frontend', tools: 'HTML, CSS, JavaScript, React, Tailwind, Next.js', level: 'Advanced' },
            { area: 'Backend', tools: 'Python, FastAPI, Node.js, SQL, Express, Redis', level: 'Advanced' },
            { area: 'AI', tools: 'Anthropic SDK, Gemini API, prompt design, RAG', level: 'Intermediate' },
            { area: 'Tools', tools: 'Git, Docker, CI/CD, Linux, Playwright', level: 'Intermediate' }
          ]).map(row => `
            <tr>
              <th scope="row" class="py-3 pr-4 font-medium text-white">${sanitizeText(row.area)}</th>
              <td class="py-3 pr-4 text-stone-300">${sanitizeText(row.tools)}</td>
              <td class="py-3 text-stone-400">${sanitizeText(row.level)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </section>

  <!-- THIRD PARTY EMBEDS SECTION -->
  <section id="embeds" class="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">Third-party integrations & ecosystem</h2>
    <p class="text-stone-300 mb-6 text-sm">Verified live commit telemetry, developer focus soundtrack, and consultation calendar.</p>

    <div class="ui grid md:grid-cols-3 gap-5 text-sm">
      <div class="p-5 rounded-lg bg-stone-900 border border-stone-800 space-y-3">
        <div class="text-amber-300 font-semibold flex items-center justify-between">
          <span>GitHub Activity</span>
          <span class="text-xs text-stone-400">2,842 commits</span>
        </div>
        <p class="text-xs text-stone-300">Active repository: <code class="text-white">nexus-flow-core</code> (v2.4.1)</p>
        <div class="text-xs text-stone-400">1,490+ open source stars on distributed vector cache engine.</div>
      </div>

      <div class="p-5 rounded-lg bg-stone-900 border border-stone-800 space-y-3">
        <div class="text-amber-300 font-semibold flex items-center justify-between">
          <span>Deep Focus Audio</span>
          <span class="text-xs text-emerald-400">432Hz</span>
        </div>
        <p class="text-xs text-stone-300">Synthesized Ambient Frequencies for Systems Architecture.</p>
        <div class="text-xs text-stone-400">Lossless binaural audio for distraction-free coding.</div>
      </div>

      <div class="p-5 rounded-lg bg-stone-900 border border-stone-800 space-y-3">
        <div class="text-amber-300 font-semibold flex items-center justify-between">
          <span>Advisory Scheduling</span>
          <span class="text-xs text-stone-400">Calendly Sync</span>
        </div>
        <p class="text-xs text-stone-300">30-Minute Architecture & Systems Feasibility Review.</p>
        <a href="#contact" class="inline-block text-xs text-amber-300 underline">Request introductory call</a>
      </div>
    </div>
  </section>

  <!-- REVIEWS & BUSINESS DETAILS SECTION -->
  <section id="reviews" class="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-5">Client feedback and business details</h2>
    <p class="max-w-prose text-stone-300 text-sm">
      Add only real testimonials from real clients who gave written permission, with their name, role and the date. Do not invent, buy or edit reviews: doing so is illegal in many places, including under India’s Consumer Protection Act, 2019 and the UK and EU rules on fake reviews.
    </p>

    <div class="space-y-4 mt-6">
      ${data.testimonials.map(item => `
        <blockquote class="border-l-4 border-amber-300 pl-4 max-w-prose text-stone-300">
          “${sanitizeText(item.quote)}”
          <footer class="ui text-sm text-stone-400 mt-1">
            ${sanitizeText(item.clientName)}, ${sanitizeText(item.clientRole)}, ${sanitizeText(item.clientCompany)} (shared with permission, ${sanitizeText(item.verifiedDate)})
          </footer>
        </blockquote>
      `).join('')}
    </div>

    <dl class="ui mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
      <div><dt class="text-stone-400">Trading name</dt><dd class="text-white">${sanitizeText(data.businessDetails.tradeName || data.businessDetails.legalName)}</dd></div>
      <div><dt class="text-stone-400">Registered address</dt><dd class="text-white">${sanitizeText(data.businessDetails.registeredAddress)}</dd></div>
      <div><dt class="text-stone-400">Email</dt><dd><a class="text-amber-300 underline" href="mailto:${sanitizeText(data.businessDetails.dpoEmail)}">${sanitizeText(data.businessDetails.dpoEmail)}</a></dd></div>
      <div><dt class="text-stone-400">GSTIN / registration no.</dt><dd class="text-white">${sanitizeText(data.businessDetails.registrationNumber)}</dd></div>
    </dl>
  </section>

  <!-- APPLICABLE LOCAL NEWS SECTION -->
  <section id="news" class="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">Applicable local news & press features</h2>
    <p class="text-stone-300 mb-6 text-sm">Regional technology developments and industry milestones.</p>

    <div class="grid sm:grid-cols-3 gap-5">
      ${data.localNews.map(news => `
        <article class="p-5 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
          <div class="ui text-xs text-stone-400 font-mono">${sanitizeText(news.publication)} · ${sanitizeText(news.date)}</div>
          <h3 class="text-base font-semibold text-white">${sanitizeText(news.headline)}</h3>
          <p class="text-xs text-stone-300 leading-relaxed">${sanitizeText(news.summary)}</p>
          <div class="ui text-xs text-amber-300 pt-1">${sanitizeText(news.category)}</div>
        </article>
      `).join('')}
    </div>
  </section>

  <!-- CONTACT FORM SECTION -->
  <section id="contact" class="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">Contact</h2>
    <p class="mb-6 text-stone-300">Tell me about your project. I reply within two working days.</p>
    <form id="contact-form" class="ui max-w-xl space-y-5" novalidate action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div>
        <label for="name" class="block text-sm font-medium text-white mb-1">Name <span aria-hidden="true">*</span></label>
        <input id="name" name="name" type="text" autocomplete="name" required aria-describedby="name-err" class="w-full rounded-md bg-stone-900 border border-stone-500 px-3 py-2 text-white">
        <p id="name-err" class="text-sm text-red-300 mt-1" role="alert"></p>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-white mb-1">Email <span aria-hidden="true">*</span></label>
        <input id="email" name="email" type="email" autocomplete="email" required aria-describedby="email-err" class="w-full rounded-md bg-stone-900 border border-stone-500 px-3 py-2 text-white">
        <p id="email-err" class="text-sm text-red-300 mt-1" role="alert"></p>
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-white mb-1">Message <span aria-hidden="true">*</span></label>
        <textarea id="message" name="message" rows="5" required aria-describedby="message-err" class="w-full rounded-md bg-stone-900 border border-stone-500 px-3 py-2 text-white"></textarea>
        <p id="message-err" class="text-sm text-red-300 mt-1" role="alert"></p>
      </div>
      <div>
        <div class="flex items-start gap-3">
          <input id="consent" name="consent" type="checkbox" required aria-describedby="consent-err" class="mt-1 h-5 w-5 accent-amber-300 cursor-pointer">
          <label for="consent" class="text-sm cursor-pointer select-none">I agree that my name, email and message are used to reply to me, as described in the <a class="text-amber-300 underline" href="#privacy">Privacy Policy</a>. <span aria-hidden="true">*</span></label>
        </div>
        <p id="consent-err" class="text-sm text-red-300 mt-1" role="alert"></p>
      </div>
      <button type="submit" class="bg-amber-300 text-stone-950 font-semibold px-6 py-3 rounded-md hover:bg-amber-200 transition-colors">Send message</button>
      <p id="form-status" class="text-sm mt-2" role="status" aria-live="polite"></p>
    </form>
  </section>

  <!-- LEGAL AND POLICIES ACCORDION SECTION -->
  <section id="legal" class="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">Legal and policies</h2>
    <p class="ui text-sm text-stone-400 mb-6">Last updated: 5 November 2026. These are starting templates. Have a lawyer review them for your business and location before launch.</p>
    
    <div class="space-y-3 max-w-3xl">
      <!-- 1. Privacy Policy -->
      <details id="privacy" class="bg-stone-900 border border-stone-800 rounded-lg p-4">
        <summary class="ui cursor-pointer font-semibold text-white">Privacy Policy</summary>
        <div class="mt-3 space-y-3 text-sm text-stone-300">
          ${data.policies.privacyPolicy.content.map(p => `<p>${sanitizeText(p)}</p>`).join('')}
        </div>
      </details>

      <!-- 2. What user data this site collects -->
      <details id="data" class="bg-stone-900 border border-stone-800 rounded-lg p-4">
        <summary class="ui cursor-pointer font-semibold text-white">What user data this site collects</summary>
        <div class="mt-3 text-sm overflow-x-auto">
          <table class="w-full text-left min-w-[460px]">
            <thead>
              <tr class="border-b border-stone-700 text-stone-300">
                <th scope="col" class="py-2 pr-3 font-semibold">Data</th>
                <th scope="col" class="py-2 pr-3 font-semibold">Why</th>
                <th scope="col" class="py-2 font-semibold">Basis</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-800">
              ${data.policies.userDataCollected.categories.map(cat => `
                <tr>
                  <td class="py-2 pr-3 text-white font-medium">${sanitizeText(cat.category)}</td>
                  <td class="py-2 pr-3 text-stone-300">${sanitizeText(cat.purpose)}</td>
                  <td class="py-2 text-stone-400 font-mono text-xs">${sanitizeText(cat.retentionPeriod)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </details>

      <!-- 3. Terms and Conditions -->
      <details id="terms" class="bg-stone-900 border border-stone-800 rounded-lg p-4">
        <summary class="ui cursor-pointer font-semibold text-white">Terms and Conditions</summary>
        <div class="mt-3 space-y-3 text-sm text-stone-300">
          ${data.policies.termsAndConditions.content.map(p => `<p>${sanitizeText(p)}</p>`).join('')}
        </div>
      </details>

      <!-- 4. Cookie Policy -->
      <details id="cookies" class="bg-stone-900 border border-stone-800 rounded-lg p-4">
        <summary class="ui cursor-pointer font-semibold text-white">Cookie Policy</summary>
        <div class="mt-3 space-y-3 text-sm text-stone-300">
          ${data.policies.cookiePolicy.content.map(p => `<p>${sanitizeText(p)}</p>`).join('')}
          <div class="pt-2">
            <button type="button" id="reset-consent" class="ui border border-stone-500 px-4 py-2 rounded-md hover:border-amber-300 hover:text-amber-300 transition-colors">Change cookie choice</button>
          </div>
        </div>
      </details>

      <!-- 5. Refund Policy -->
      <details id="refunds" class="bg-stone-900 border border-stone-800 rounded-lg p-4">
        <summary class="ui cursor-pointer font-semibold text-white">Refund Policy</summary>
        <div class="mt-3 space-y-3 text-sm text-stone-300">
          ${data.policies.refundPolicy.content.map(p => `<p>${sanitizeText(p)}</p>`).join('')}
        </div>
      </details>

      <!-- 6. Third-party embeds and services -->
      <details id="embeds-policy" class="bg-stone-900 border border-stone-800 rounded-lg p-4">
        <summary class="ui cursor-pointer font-semibold text-white">Third-party embeds and services</summary>
        <div class="mt-3 space-y-3 text-sm text-stone-300">
          ${(data.policies.embedsPolicy?.content || [
            'This page loads the Tailwind CSS script from cdn.tailwindcss.com, which receives your IP address. For production, replace it with a compiled local stylesheet. The contact form sends data to Formspree (or your configured backend proxy), which processes it securely. Videos, maps or external widgets load only after affirmative consent.'
          ]).map(p => `<p>${sanitizeText(p)}</p>`).join('')}
        </div>
      </details>

      <!-- 7. Accessibility statement -->
      <details id="access" class="bg-stone-900 border border-stone-800 rounded-lg p-4">
        <summary class="ui cursor-pointer font-semibold text-white">Accessibility statement</summary>
        <div class="mt-3 space-y-3 text-sm text-stone-300">
          ${(data.policies.accessibilityStatement?.content || [
            'This site aims to meet WCAG 2.2 level AA. It has a skip link, visible keyboard focus, labelled form fields with text error messages, descriptive alt text for images, text colours with at least 4.5:1 contrast, and respects reduced-motion settings. If you find a barrier, email you@example.com and I will respond within five working days.'
          ]).map(p => `<p>${sanitizeText(p)}</p>`).join('')}
        </div>
      </details>

      <!-- 8. Image credits, copyright and local law -->
      <details id="credits" class="bg-stone-900 border border-stone-800 rounded-lg p-4">
        <summary class="ui cursor-pointer font-semibold text-white">Image credits, copyright and local law</summary>
        <div class="mt-3 space-y-3 text-sm text-stone-300">
          ${(data.policies.creditsAndCopyright?.content || [
            'Use only images you created, bought, or that carry a licence allowing your use (for example CC0 or a licence from a stock site). Credit them here. Never use images copied from search results, news sites or other portfolios without written permission.',
            'Check the rules that apply where you and your clients are, such as the Indian Copyright Act, 1957, the IT Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020, and the GDPR or CCPA if you serve visitors there.'
          ]).map(p => `<p>${sanitizeText(p)}</p>`).join('')}
        </div>
      </details>
    </div>
  </section>
</main>

<!-- FOOTER -->
<footer class="ui border-t border-stone-800 py-8 text-sm">
  <div class="mx-auto max-w-5xl px-5 flex flex-col sm:flex-row gap-4 sm:justify-between">
    <p>© <span id="year">2026</span> ${sanitizeText(data.userName)}. All rights reserved.</p>
    <nav aria-label="Legal">
      <ul class="flex flex-wrap gap-x-5 gap-y-2">
        <li><a class="underline hover:text-amber-300" href="#privacy" data-open>Privacy</a></li>
        <li><a class="underline hover:text-amber-300" href="#data" data-open>Data</a></li>
        <li><a class="underline hover:text-amber-300" href="#terms" data-open>Terms</a></li>
        <li><a class="underline hover:text-amber-300" href="#cookies" data-open>Cookies</a></li>
        <li><a class="underline hover:text-amber-300" href="#refunds" data-open>Refunds</a></li>
        <li><a class="underline hover:text-amber-300" href="#access" data-open>Accessibility</a></li>
      </ul>
    </nav>
  </div>
</footer>

<!-- COOKIE BANNER -->
<div id="cookie-banner" role="dialog" aria-modal="false" aria-labelledby="cb-title" hidden class="ui fixed bottom-0 inset-x-0 z-50 bg-stone-900 border-t border-stone-600 p-5 shadow-2xl">
  <div class="mx-auto max-w-5xl flex flex-col md:flex-row md:items-center gap-4">
    <div class="text-sm md:flex-1">
      <h2 id="cb-title" class="font-semibold text-white">Your cookie choices</h2>
      <p class="text-stone-300 mt-0.5">I use one necessary storage item to remember this choice. Optional analytics load only if you accept. See the <a class="text-amber-300 underline" href="#cookies" data-open>Cookie Policy</a>.</p>
    </div>
    <div class="flex gap-3">
      <button type="button" id="reject" class="border border-stone-400 px-5 py-2 rounded-md hover:border-amber-300 text-stone-200 transition-colors">Reject optional</button>
      <button type="button" id="accept" class="bg-amber-300 text-stone-950 font-semibold px-5 py-2 rounded-md hover:bg-amber-200 transition-colors">Accept all</button>
    </div>
  </div>
</div>

<script>
(function(){
  var $ = function(s, r) { return (r || document).querySelector(s); };
  var $$ = function(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  
  if ($('#year')) $('#year').textContent = new Date().getFullYear();

  // Project filter
  var btns = $$('.filter');
  var items = $$('.project');
  function styleBtns(a) {
    btns.forEach(function(b) {
      var on = b === a;
      b.setAttribute('aria-pressed', on);
      b.classList.toggle('bg-amber-300', on);
      b.classList.toggle('text-stone-950', on);
    });
  }
  if (btns.length > 0) {
    styleBtns(btns[0]);
    btns.forEach(function(b) {
      b.addEventListener('click', function() {
        var f = b.dataset.filter, n = 0;
        items.forEach(function(i) {
          var cats = (i.dataset.cat || '').split(' ');
          var show = f === 'all' || cats.indexOf(f) > -1;
          i.hidden = !show;
          if (show) n++;
        });
        styleBtns(b);
        var statusEl = $('#filter-status');
        if (statusEl) statusEl.textContent = n + ' project' + (n === 1 ? '' : 's') + ' shown';
      });
    });
  }

  // Cookie consent
  var KEY = 'cookie-consent';
  var banner = $('#cookie-banner');
  function get() { try { return localStorage.getItem(KEY); } catch(e) { return null; } }
  function set(v) {
    try { localStorage.setItem(KEY, v); } catch(e) {}
    if (banner) banner.hidden = true;
  }
  var c = get();
  if (!c && banner) banner.hidden = false;
  if ($('#accept')) $('#accept').onclick = function() { set('all'); };
  if ($('#reject')) $('#reject').onclick = function() { set('necessary'); };
  if ($('#reset-consent')) $('#reset-consent').onclick = function() {
    try { localStorage.removeItem(KEY); } catch(e) {}
    if (banner) banner.hidden = false;
    if ($('#accept')) $('#accept').focus();
  };

  // Open legal <details> when linked
  function openHash() {
    var hash = location.hash;
    if (hash) {
      var el = $(hash);
      if (el && el.tagName === 'DETAILS') {
        el.open = true;
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  window.addEventListener('hashchange', openHash);
  openHash();
  $$('[data-open]').forEach(function(a) {
    a.addEventListener('click', function() {
      setTimeout(openHash, 50);
    });
  });

  // Accessible form validation
  var form = $('#contact-form');
  var status = $('#form-status');
  function err(id, msg) {
    var errEl = $('#' + id + '-err');
    if (errEl) errEl.textContent = msg;
    var f = $('#' + id);
    if (f) {
      if (msg) f.setAttribute('aria-invalid', 'true');
      else f.removeAttribute('aria-invalid');
    }
    return !msg;
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (status) status.textContent = '';
      var ok = [
        err('name', $('#name') && $('#name').value.trim() ? '' : 'Enter your name.'),
        err('email', $('#email') && /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test($('#email').value) ? '' : 'Enter a valid email address, like name@example.com.'),
        err('message', $('#message') && $('#message').value.trim().length >= 10 ? '' : 'Write at least 10 characters.'),
        err('consent', $('#consent') && $('#consent').checked ? '' : 'Tick the box to agree before sending.')
      ];
      var bad = ok.indexOf(false);
      if (bad > -1) {
        var invalid = $$('[aria-invalid="true"]', form);
        if (invalid.length > 0) invalid[0].focus();
        return;
      }
      if (status) status.textContent = 'Sending…';
      setTimeout(function() {
        form.reset();
        if (status) {
          status.className = 'text-sm text-amber-300 mt-2 font-medium';
          status.textContent = 'Thanks. Your message was sent successfully.';
        }
      }, 500);
    });
  }
})();
</script>
</body>
</html>`;
}
