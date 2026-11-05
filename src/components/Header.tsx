import React from 'react';
import { Sun, Moon, Sliders, Download } from 'lucide-react';

interface HeaderProps {
  userName: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenStudio: () => void;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  userName,
  isDark,
  onToggleTheme,
  onOpenStudio,
  onOpenExport
}) => {
  return (
    <header className="ui sticky top-0 z-40 bg-stone-950/90 dark:bg-stone-950/90 backdrop-blur border-b border-stone-800 transition-colors">
      <nav aria-label="Main" className="mx-auto max-w-5xl px-5 py-3 flex items-center justify-between gap-4">
        {/* Brand Link */}
        <a 
          href="#top" 
          className="font-semibold text-white hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 text-base"
        >
          {userName}
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-4 sm:gap-6 text-sm text-stone-300 overflow-x-auto">
          <li><a className="hover:text-amber-300 transition-colors whitespace-nowrap" href="#about">About</a></li>
          <li><a className="hover:text-amber-300 transition-colors" href="#projects">Projects</a></li>
          <li><a className="hover:text-amber-300 transition-colors" href="#skills">Skills</a></li>
          <li><a className="hover:text-amber-300 transition-colors" href="#embeds">Integrations</a></li>
          <li><a className="hover:text-amber-300 transition-colors" href="#reviews">Reviews</a></li>
          <li><a className="hover:text-amber-300 transition-colors" href="#news">News</a></li>
          <li><a className="hover:text-amber-300 transition-colors" href="#contact">Contact</a></li>
        </ul>

        {/* Actions: Theme, Customize, Export */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button 
            type="button" 
            onClick={onToggleTheme} 
            aria-label={isDark ? 'Switch to warm light mode' : 'Switch to dark mode'}
            className="p-2 rounded-md bg-stone-900 border border-stone-700 text-stone-300 hover:text-white hover:border-amber-300 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-stone-300" />}
          </button>

          <button
            type="button"
            onClick={onOpenStudio}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-300 text-stone-200 transition-colors whitespace-nowrap"
          >
            <Sliders className="w-3.5 h-3.5 text-amber-300" />
            <span>Customize Data</span>
          </button>

          <button
            type="button"
            onClick={onOpenExport}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md bg-amber-300 hover:bg-amber-200 text-stone-950 transition-colors whitespace-nowrap shadow-sm"
            title="Download or copy valid standalone production HTML"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export HTML</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
