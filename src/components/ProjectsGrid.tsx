import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsGridProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'backend' | 'ai'>('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI' }
  ] as const;

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => {
        if (p.categories && Array.isArray(p.categories)) {
          return p.categories.includes(activeFilter);
        }
        return p.category.toLowerCase().includes(activeFilter);
      });

  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Projects</h2>
      
      {/* Category Filter Group */}
      <div className="ui flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter projects">
        {filters.map(f => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(f.id)}
              className={`filter px-4 py-2 rounded-full border text-sm transition-colors cursor-pointer ${
                isActive
                  ? 'bg-amber-300 text-stone-950 font-semibold border-amber-300'
                  : 'border-stone-600 text-stone-300 hover:border-amber-300 hover:text-amber-300'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Screen reader live filter status */}
      <p id="filter-status" className="sr-only" role="status" aria-live="polite">
        {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'} shown
      </p>

      {/* Project Card List */}
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((proj) => (
          <li 
            key={proj.id}
            className="project bg-stone-900 border border-stone-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-stone-700 transition-colors"
          >
            <div>
              <div className="h-44 overflow-hidden bg-stone-950 border-b border-stone-800 relative group cursor-pointer" onClick={() => onSelectProject(proj)}>
                <img 
                  src={proj.imageUrl} 
                  alt={proj.imageAlt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {proj.title}
                </h3>
                <p className="text-sm mt-2 text-stone-300 leading-relaxed">
                  {proj.description}
                </p>
                <p className="ui text-xs mt-3 text-stone-400 font-mono">
                  {proj.techStack.join(', ')}
                </p>
                <div className="ui text-xs text-amber-300 mt-2 font-medium">
                  {proj.metrics}
                </div>
              </div>
            </div>

            <div className="px-5 pb-5 pt-1 flex items-center justify-between gap-4">
              <a 
                className="ui text-sm text-amber-300 underline hover:text-amber-200" 
                href={proj.demoUrl || '#'}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${proj.title} on GitHub`}
              >
                View on GitHub
              </a>
              <button
                type="button"
                onClick={() => onSelectProject(proj)}
                className="ui text-xs text-stone-400 hover:text-white underline cursor-pointer"
              >
                Architecture Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
