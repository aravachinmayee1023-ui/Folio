import React, { useEffect, useRef } from 'react';
import { LegalPolicies } from '../types/portfolio';

interface LegalSectionProps {
  policies: LegalPolicies;
  onResetCookieConsent: () => void;
}

export const LegalSection: React.FC<LegalSectionProps> = ({ policies, onResetCookieConsent }) => {
  const privacyRef = useRef<HTMLDetailsElement>(null);
  const dataRef = useRef<HTMLDetailsElement>(null);
  const termsRef = useRef<HTMLDetailsElement>(null);
  const cookiesRef = useRef<HTMLDetailsElement>(null);
  const refundsRef = useRef<HTMLDetailsElement>(null);
  const embedsRef = useRef<HTMLDetailsElement>(null);
  const accessRef = useRef<HTMLDetailsElement>(null);
  const creditsRef = useRef<HTMLDetailsElement>(null);

  // Automatically open <details> when hash changes in URL
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el && el.tagName === 'DETAILS') {
        (el as HTMLDetailsElement).open = true;
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="legal" className="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Legal and policies</h2>
      <p className="ui text-sm text-stone-400 mb-6">
        Last updated: 5 November 2026. These are starting templates. Have a lawyer review them for your business and location before launch.
      </p>

      <div className="space-y-3 max-w-3xl">
        {/* 1. Privacy Policy */}
        <details id="privacy" ref={privacyRef} className="bg-stone-900 border border-stone-800 rounded-lg p-4 group">
          <summary className="ui cursor-pointer font-semibold text-white hover:text-amber-300 transition-colors list-none flex items-center justify-between">
            <span>Privacy Policy</span>
            <span className="text-stone-500 text-xs font-mono group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-3">
            {policies.privacyPolicy.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>

        {/* 2. What user data this site collects */}
        <details id="data" ref={dataRef} className="bg-stone-900 border border-stone-800 rounded-lg p-4 group">
          <summary className="ui cursor-pointer font-semibold text-white hover:text-amber-300 transition-colors list-none flex items-center justify-between">
            <span>What user data this site collects</span>
            <span className="text-stone-500 text-xs font-mono group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 text-sm overflow-x-auto border-t border-stone-800 pt-3">
            <table className="w-full text-left min-w-[460px]">
              <thead>
                <tr className="border-b border-stone-700 text-stone-300">
                  <th scope="col" className="py-2 pr-3 font-semibold">Data</th>
                  <th scope="col" className="py-2 pr-3 font-semibold">Why</th>
                  <th scope="col" className="py-2 font-semibold">Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                {policies.userDataCollected.categories.map((cat, i) => (
                  <tr key={i}>
                    <td className="py-2 pr-3 text-white font-medium">{cat.category}</td>
                    <td className="py-2 pr-3 text-stone-300">{cat.purpose}</td>
                    <td className="py-2 text-stone-400 font-mono text-xs">{cat.retentionPeriod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* 3. Terms and Conditions */}
        <details id="terms" ref={termsRef} className="bg-stone-900 border border-stone-800 rounded-lg p-4 group">
          <summary className="ui cursor-pointer font-semibold text-white hover:text-amber-300 transition-colors list-none flex items-center justify-between">
            <span>Terms and Conditions</span>
            <span className="text-stone-500 text-xs font-mono group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-3">
            {policies.termsAndConditions.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>

        {/* 4. Cookie Policy */}
        <details id="cookies" ref={cookiesRef} className="bg-stone-900 border border-stone-800 rounded-lg p-4 group">
          <summary className="ui cursor-pointer font-semibold text-white hover:text-amber-300 transition-colors list-none flex items-center justify-between">
            <span>Cookie Policy</span>
            <span className="text-stone-500 text-xs font-mono group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-3">
            {policies.cookiePolicy.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="pt-2">
              <button 
                type="button" 
                onClick={onResetCookieConsent}
                className="ui border border-stone-500 px-4 py-2 rounded-md hover:border-amber-300 hover:text-amber-300 transition-colors cursor-pointer text-xs"
              >
                Change cookie choice
              </button>
            </div>
          </div>
        </details>

        {/* 5. Refund Policy */}
        <details id="refunds" ref={refundsRef} className="bg-stone-900 border border-stone-800 rounded-lg p-4 group">
          <summary className="ui cursor-pointer font-semibold text-white hover:text-amber-300 transition-colors list-none flex items-center justify-between">
            <span>Refund Policy</span>
            <span className="text-stone-500 text-xs font-mono group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-3">
            {policies.refundPolicy.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>

        {/* 6. Third-party embeds and services */}
        <details id="embeds-policy" ref={embedsRef} className="bg-stone-900 border border-stone-800 rounded-lg p-4 group">
          <summary className="ui cursor-pointer font-semibold text-white hover:text-amber-300 transition-colors list-none flex items-center justify-between">
            <span>Third-party embeds and services</span>
            <span className="text-stone-500 text-xs font-mono group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-3">
            {(policies.embedsPolicy?.content || [
              'This page loads the Tailwind CSS script from cdn.tailwindcss.com, which receives your IP address. For production, replace it with a compiled local stylesheet. The contact form sends data to Formspree (or your configured backend proxy), which processes it securely. Videos, maps or external widgets load only after affirmative consent.'
            ]).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>

        {/* 7. Accessibility statement */}
        <details id="access" ref={accessRef} className="bg-stone-900 border border-stone-800 rounded-lg p-4 group">
          <summary className="ui cursor-pointer font-semibold text-white hover:text-amber-300 transition-colors list-none flex items-center justify-between">
            <span>Accessibility statement</span>
            <span className="text-stone-500 text-xs font-mono group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-3">
            {(policies.accessibilityStatement?.content || [
              'This site aims to meet WCAG 2.2 level AA. It has a skip link, visible keyboard focus, labelled form fields with text error messages, descriptive alt text for images, text colours with at least 4.5:1 contrast, and respects reduced-motion settings. If you find a barrier, email you@example.com and I will respond within five working days.'
            ]).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>

        {/* 8. Image credits, copyright and local law */}
        <details id="credits" ref={creditsRef} className="bg-stone-900 border border-stone-800 rounded-lg p-4 group">
          <summary className="ui cursor-pointer font-semibold text-white hover:text-amber-300 transition-colors list-none flex items-center justify-between">
            <span>Image credits, copyright and local law</span>
            <span className="text-stone-500 text-xs font-mono group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-3">
            {(policies.creditsAndCopyright?.content || [
              'Use only images you created, bought, or that carry a licence allowing your use (for example CC0 or a licence from a stock site). Credit them here. Never use images copied from search results, news sites or other portfolios without written permission.',
              'Check the rules that apply where you and your clients are, such as the Indian Copyright Act, 1957, the IT Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020, and the GDPR or CCPA if you serve visitors there.'
            ]).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
};
