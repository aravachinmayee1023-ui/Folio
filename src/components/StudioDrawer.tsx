import React, { useState } from 'react';
import { X, Sparkles, RefreshCw, Wand2, Download, Check, FileCode } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface StudioDrawerProps {
  isOpen: boolean;
  portfolioData: PortfolioData;
  onClose: () => void;
  onUpdatePortfolio: (data: PortfolioData) => void;
  onOpenExport: () => void;
}

export const StudioDrawer: React.FC<StudioDrawerProps> = ({
  isOpen,
  portfolioData,
  onClose,
  onUpdatePortfolio,
  onOpenExport
}) => {
  const [userName, setUserName] = useState(portfolioData.userName);
  const [roleTitle, setRoleTitle] = useState(portfolioData.roleTitle);
  const [tagline, setTagline] = useState(portfolioData.tagline);
  const [bio, setBio] = useState(portfolioData.bio);
  const [skillsText, setSkillsText] = useState(
    portfolioData.skillCategories.flatMap(c => c.skills.map(s => s.name)).join(', ')
  );
  const [projectsText, setProjectsText] = useState(
    portfolioData.projects.map(p => p.title).join('\n')
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationFeedback, setGenerationFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApplyChanges = () => {
    const updated: PortfolioData = JSON.parse(JSON.stringify(portfolioData));
    updated.userName = userName;
    updated.roleTitle = roleTitle;
    updated.tagline = tagline;
    updated.bio = bio;

    // Parse skills
    const rawSkills = skillsText.split(',').map(s => s.trim()).filter(Boolean);
    if (rawSkills.length > 0) {
      updated.skillCategories[0].skills = rawSkills.slice(0, 4).map((s, idx) => ({
        name: s,
        level: 90 + (idx % 8),
        experience: '4+ yrs',
        context: `Enterprise architecture application for ${s}`
      }));
    }

    // Parse projects
    const rawProjects = projectsText.split('\n').map(p => p.trim()).filter(Boolean);
    if (rawProjects.length > 0) {
      updated.projects = rawProjects.slice(0, 3).map((title, idx) => ({
        id: `proj-${idx + 1}`,
        title,
        subtitle: 'Enterprise System Architecture',
        category: (idx % 2 === 0 ? 'AI Systems' : 'Cloud Infra') as any,
        categories: idx % 2 === 0 ? ['ai', 'backend'] : ['web', 'backend'],
        description: `Mission-critical platform engineered by ${userName}. Built with strict latency boundaries and distributed fault-tolerance.`,
        fullCaseStudy: `Detailed architectural case study for ${title}. Reduced tail latency and achieved high-availability consensus under peak workloads.`,
        architectureDetails: [
          'Modular concurrency pipelines with deterministic state replay',
          'Distributed message routing with zero packet loss guarantees',
          'Strict schema contracts and automated regression test harness'
        ],
        techStack: ['TypeScript', 'Python', 'Go', 'Docker', 'Tailwind CSS'],
        metrics: '99.99% verified uptime in production testing',
        imageUrl: portfolioData.projects[idx % portfolioData.projects.length]?.imageUrl || portfolioData.projects[0].imageUrl,
        imageAlt: `Architectural blueprint and schematic for ${title}`
      }));
    }

    onUpdatePortfolio(updated);
    setGenerationFeedback('Portfolio successfully updated with your custom background data!');
    setTimeout(() => setGenerationFeedback(null), 3500);
  };

  const handleAiGenerate = async () => {
    setIsGenerating(true);
    setGenerationFeedback(null);
    try {
      const skillsList = skillsText.split(',').map(s => s.trim()).filter(Boolean);
      const projectsList = projectsText.split('\n').map(p => p.trim()).filter(Boolean);

      const response = await fetch('/api/generate-portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_name: userName,
          role_title: roleTitle,
          bio: bio,
          skills: skillsList,
          projects: projectsList
        })
      });

      const resJson = await response.json();
      if (resJson.success && resJson.portfolio_data) {
        onUpdatePortfolio(resJson.portfolio_data);
        setTagline(resJson.portfolio_data.tagline);
        setBio(resJson.portfolio_data.bio);
        setGenerationFeedback('AI Architect synthesized and polished your portfolio data!');
      } else {
        handleApplyChanges();
      }
    } catch (err) {
      handleApplyChanges();
    } finally {
      setIsGenerating(false);
      setTimeout(() => setGenerationFeedback(null), 3500);
    }
  };

  const loadPreset = (presetType: 'architect' | 'director' | 'security') => {
    if (presetType === 'architect') {
      setUserName('Chinmayee Aravind');
      setRoleTitle('Staff AI Systems Architect & Full-Stack Engineer');
      setTagline('Architecting resilient distributed systems, autonomous agentic workflows, and high-performance neural interfaces.');
      setBio('With over eight years of hands-on engineering leadership, I specialize in bridging frontier machine learning models with carrier-grade distributed backends.');
      setSkillsText('LLM Orchestration, Vector Embeddings & RAG, Distributed Systems, Go / Node.js, React 19 & Tailwind');
      setProjectsText('Nexus Flow Autonomous Agent Platform\nVectorPulse High-Throughput Search Engine\nZenith UI & Accessibility Design Engine');
    } else if (presetType === 'director') {
      setUserName('Chinmayee Aravind');
      setRoleTitle('Creative Technology Director & Design Engineer');
      setTagline('Crafting ultra-modern digital products where avant-garde design aesthetics meet uncompromising web performance.');
      setBio('Over a decade designing and engineering high-impact digital experiences for top global brands, luxury publishing houses, and innovative tech startups.');
      setSkillsText('Design Engineering, WebGL & Shaders, Typography Systems, Tailwind CSS, Next.js / React, Micro-Interactions');
      setProjectsText('Aura Spatial 3D Showroom\nVanguard Design Token Engine\nChronicle Editorial Reader');
    } else {
      setUserName('Chinmayee Aravind');
      setRoleTitle('Principal Cloud & Cybersecurity Infrastructure Engineer');
      setTagline('Securing mission-critical hyperscale Kubernetes clusters and zero-trust edge architectures against nation-state threats.');
      setBio('Specializing in zero-trust cryptographic identity, eBPF network telemetry, and automated Kubernetes cloud infrastructure security.');
      setSkillsText('Zero-Trust Architecture, eBPF & Cilium, Kubernetes Security, Terraform, Go, Threat Modeling');
      setProjectsText('Aegis Zero-Trust Ingress Controller\nSentinel Cloud Threat Engine\nCryptic Key Vault Fabric');
    }
  };

  return (
    <aside 
      className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col transition-transform duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="AI Portfolio Architect Studio"
    >
      {/* Drawer Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wand2 className="w-5 h-5 text-blue-500" />
          <h2 className="font-display font-bold text-slate-900 dark:text-white text-base">
            AI Portfolio Architect Studio
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
          aria-label="Close studio panel"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-slate-700 dark:text-slate-300">
        {/* Preset Selector */}
        <div className="space-y-2">
          <div className="font-semibold text-slate-900 dark:text-white">Quick Architectural Archetypes:</div>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => loadPreset('architect')}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[11px] text-center font-medium transition-colors"
            >
              AI Architect
            </button>
            <button
              type="button"
              onClick={() => loadPreset('director')}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[11px] text-center font-medium transition-colors"
            >
              Creative Tech
            </button>
            <button
              type="button"
              onClick={() => loadPreset('security')}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[11px] text-center font-medium transition-colors"
            >
              Cloud Security
            </button>
          </div>
        </div>

        {generationFeedback && (
          <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0" />
            <span>{generationFeedback}</span>
          </div>
        )}

        {/* Inputs */}
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="font-semibold text-slate-900 dark:text-white">Engineer / Creator Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-900 dark:text-white">Role Title</label>
            <input
              type="text"
              value={roleTitle}
              onChange={(e) => setRoleTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-900 dark:text-white">Tagline / Mission</label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-900 dark:text-white">Professional Bio</label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-900 dark:text-white">Skills Matrix (Comma Separated)</label>
            <input
              type="text"
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-slate-900 dark:text-white">Featured Projects (One per line)</label>
            <textarea
              rows={3}
              value={projectsText}
              onChange={(e) => setProjectsText(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs"
            />
          </div>
        </div>
      </div>

      {/* Drawer Footer Actions */}
      <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={isGenerating}
            onClick={handleAiGenerate}
            className="flex-1 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 disabled:opacity-60 shadow-md"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Synthesizing...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Enhance (Gemini)</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleApplyChanges}
            className="py-2.5 px-4 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-xs transition-colors"
          >
            Apply Directly
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenExport();
          }}
          className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
        >
          <FileCode className="w-4 h-4" />
          <span>Export Production Single-File HTML</span>
        </button>
      </div>
    </aside>
  );
};
