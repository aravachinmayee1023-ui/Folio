import React, { useEffect } from 'react';
import { X, Shield, FileText, Cookie, RotateCcw, Database, Layers } from 'lucide-react';
import { LegalPolicies, ProjectItem } from '../types/portfolio';

interface LegalModalsProps {
  activeModal: 'privacy' | 'terms' | 'cookies' | 'refund' | 'userData' | 'project' | null;
  policies: LegalPolicies;
  selectedProject: ProjectItem | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  activeModal,
  policies,
  selectedProject,
  onClose
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden transition-all">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg">
            {activeModal === 'privacy' && (
              <>
                <Shield className="w-5 h-5 text-blue-500" />
                <span>Privacy & Data Protection Policy</span>
              </>
            )}
            {activeModal === 'terms' && (
              <>
                <FileText className="w-5 h-5 text-blue-500" />
                <span>Terms of Service & Engagement</span>
              </>
            )}
            {activeModal === 'cookies' && (
              <>
                <Cookie className="w-5 h-5 text-amber-500" />
                <span>Cookie Policy & Tracking Governance</span>
              </>
            )}
            {activeModal === 'refund' && (
              <>
                <RotateCcw className="w-5 h-5 text-emerald-500" />
                <span>Engineering Retainer & Refund Policy</span>
              </>
            )}
            {activeModal === 'userData' && (
              <>
                <Database className="w-5 h-5 text-purple-500" />
                <span>What User Data We Collect & Retain</span>
              </>
            )}
            {activeModal === 'project' && selectedProject && (
              <>
                <Layers className="w-5 h-5 text-blue-500" />
                <span>{selectedProject.title}</span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {/* Privacy Policy */}
          {activeModal === 'privacy' && (
            <div className="space-y-4">
              <div className="text-slate-400 font-mono">
                Statutory Regulatory Standard: GDPR (EU) 2016/679 & CCPA/CPRA · Last Updated: {policies.privacyPolicy.lastUpdated}
              </div>
              {policies.privacyPolicy.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* Terms & Conditions */}
          {activeModal === 'terms' && (
            <div className="space-y-4">
              <div className="text-slate-400 font-mono">
                Master Terms of Engagement · Last Updated: {policies.termsAndConditions.lastUpdated}
              </div>
              {policies.termsAndConditions.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* Cookie Policy */}
          {activeModal === 'cookies' && (
            <div className="space-y-4">
              <div className="text-slate-400 font-mono">
                ePrivacy Directive & Cookie Disclosures · Last Updated: {policies.cookiePolicy.lastUpdated}
              </div>
              {policies.cookiePolicy.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* Refund Policy */}
          {activeModal === 'refund' && (
            <div className="space-y-4">
              <div className="text-slate-400 font-mono">
                Consulting Retainers & Escrow Milestone Terms · Last Updated: {policies.refundPolicy.lastUpdated}
              </div>
              {policies.refundPolicy.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* What User Data We Collect */}
          {activeModal === 'userData' && (
            <div className="space-y-6">
              <p className="text-slate-500">
                In strict compliance with GDPR Article 13 & CCPA § 1798.100, we maintain granular transparency regarding all data points processed:
              </p>
              {policies.userDataCollected.categories.map((cat, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {cat.category}
                  </h4>
                  <p>
                    <strong className="text-slate-700 dark:text-slate-300">Data Points:</strong> {cat.dataPoints.join(', ')}
                  </p>
                  <p>
                    <strong className="text-slate-700 dark:text-slate-300">Statutory Purpose:</strong> {cat.purpose}
                  </p>
                  <p>
                    <strong className="text-slate-700 dark:text-slate-300">Retention Horizon:</strong> {cat.retentionPeriod}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Project Details Modal */}
          {activeModal === 'project' && selectedProject && (
            <div className="space-y-6">
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.imageAlt} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="text-xs font-mono text-blue-500">{selectedProject.category}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-0.5">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Production Case Study Narrative</h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  {selectedProject.fullCaseStudy}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Architectural Invariants & Implementations</h4>
                <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-400">
                  {selectedProject.architectureDetails.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
                Verified Outcome: {selectedProject.metrics}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
