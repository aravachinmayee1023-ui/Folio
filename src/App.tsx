/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ThirdPartyEmbeds } from './components/ThirdPartyEmbeds';
import { TestimonialsAndBusiness } from './components/TestimonialsAndBusiness';
import { LocalNewsAndMedia } from './components/LocalNewsAndMedia';
import { ContactForm } from './components/ContactForm';
import { LegalSection } from './components/LegalSection';
import { CookieBanner } from './components/CookieBanner';
import { StudioDrawer } from './components/StudioDrawer';
import { HtmlExportModal } from './components/HtmlExportModal';
import { LegalModals } from './components/LegalModals';
import { INITIAL_PORTFOLIO_DATA } from './utils/portfolio-data';
import { PortfolioData, ProjectItem } from './types/portfolio';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(INITIAL_PORTFOLIO_DATA);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isStudioOpen, setIsStudioOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(false);

  // Sync theme
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  };

  const handleOpenLegalDetails = (hashId: string) => {
    const el = document.getElementById(hashId);
    if (el && el.tagName === 'DETAILS') {
      (el as HTMLDetailsElement).open = true;
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 antialiased leading-relaxed transition-colors duration-200">
      {/* Skip to main content accessible link */}
      <a 
        href="#main" 
        className="ui sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-amber-300 focus:text-stone-950 focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      {/* Sticky Header */}
      <Header
        userName={portfolioData.userName}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenStudio={() => setIsStudioOpen(true)}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* Main Content */}
      <main id="main">
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <ProjectsGrid 
          projects={portfolioData.projects} 
          onSelectProject={(p) => setSelectedProject(p)} 
        />
        <SkillsMatrix skillsTable={portfolioData.skillsTable} />
        <ThirdPartyEmbeds />
        <TestimonialsAndBusiness 
          testimonials={portfolioData.testimonials} 
          businessDetails={portfolioData.businessDetails} 
        />
        <LocalNewsAndMedia 
          localNews={portfolioData.localNews} 
          mediaLicensing={portfolioData.mediaLicensing} 
        />
        <ContactForm onOpenPrivacy={() => handleOpenLegalDetails('privacy')} />
        <LegalSection 
          policies={portfolioData.policies} 
          onResetCookieConsent={() => setShowCookieBanner(true)} 
        />
      </main>

      {/* Semantic Accessible Footer */}
      <footer className="ui border-t border-stone-800 py-8 text-sm">
        <div className="mx-auto max-w-5xl px-5 flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
          <p>© {new Date().getFullYear()} {portfolioData.userName}. All rights reserved.</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <a 
                  className="underline hover:text-amber-300 transition-colors" 
                  href="#privacy" 
                  onClick={() => handleOpenLegalDetails('privacy')}
                >
                  Privacy
                </a>
              </li>
              <li>
                <a 
                  className="underline hover:text-amber-300 transition-colors" 
                  href="#data" 
                  onClick={() => handleOpenLegalDetails('data')}
                >
                  Data
                </a>
              </li>
              <li>
                <a 
                  className="underline hover:text-amber-300 transition-colors" 
                  href="#terms" 
                  onClick={() => handleOpenLegalDetails('terms')}
                >
                  Terms
                </a>
              </li>
              <li>
                <a 
                  className="underline hover:text-amber-300 transition-colors" 
                  href="#cookies" 
                  onClick={() => handleOpenLegalDetails('cookies')}
                >
                  Cookies
                </a>
              </li>
              <li>
                <a 
                  className="underline hover:text-amber-300 transition-colors" 
                  href="#refunds" 
                  onClick={() => handleOpenLegalDetails('refunds')}
                >
                  Refunds
                </a>
              </li>
              <li>
                <a 
                  className="underline hover:text-amber-300 transition-colors" 
                  href="#access" 
                  onClick={() => handleOpenLegalDetails('access')}
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      {/* Fixed Bottom Cookie Banner */}
      <CookieBanner 
        forceOpen={showCookieBanner} 
        onCloseBanner={() => setShowCookieBanner(false)} 
      />

      {/* Project Case Study Details Modal */}
      {selectedProject && (
        <LegalModals
          activeModal="project"
          policies={portfolioData.policies}
          selectedProject={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Studio Customizer Drawer */}
      <StudioDrawer
        isOpen={isStudioOpen}
        portfolioData={portfolioData}
        onClose={() => setIsStudioOpen(false)}
        onUpdatePortfolio={(updated) => setPortfolioData(updated)}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* Standalone Production Single-File HTML Export Modal */}
      <HtmlExportModal
        isOpen={isExportModalOpen}
        portfolioData={portfolioData}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
