import React, { useState } from 'react';
import { X, Copy, Download, Check, FileCheck, ExternalLink } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';
import { generateProductionHtml } from '../utils/html-exporter';

interface HtmlExportModalProps {
  isOpen: boolean;
  portfolioData: PortfolioData;
  onClose: () => void;
}

export const HtmlExportModal: React.FC<HtmlExportModalProps> = ({
  isOpen,
  portfolioData,
  onClose
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const htmlContent = generateProductionHtml(portfolioData);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Export Production Single-File HTML"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
              <FileCheck className="w-5 h-5 text-emerald-500" />
              <span>Production-Ready Standalone HTML Export</span>
            </div>
            <p className="text-xs text-slate-500">
              Valid single-file HTML document with embedded Tailwind CSS, all compliance policies, consent management, and responsive layouts.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
            aria-label="Close export dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500">
            Output: <span className="text-slate-800 dark:text-slate-200 font-semibold">index.html</span> ({Math.round(htmlContent.length / 1024)} KB · 100% Standalone)
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied HTML!' : 'Copy Code'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download index.html</span>
            </button>
          </div>
        </div>

        {/* Code Preview Container */}
        <div className="flex-1 overflow-auto p-4 bg-slate-950 font-mono text-[11px] text-slate-300 leading-relaxed select-all">
          <pre className="whitespace-pre-wrap break-all">
            {htmlContent}
          </pre>
        </div>

        {/* Deployment hints footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>Ready for immediate deployment to GitHub Pages, Vercel, Netlify, or Cloud Run.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-medium hover:bg-slate-700"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
