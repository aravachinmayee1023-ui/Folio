import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface AboutProps {
  data: PortfolioData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  const paragraphs = data.bioParagraphs || [data.bio];

  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">About me</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 max-w-prose text-stone-300 text-base leading-relaxed">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        <dl className="ui text-sm space-y-3 border-l border-stone-700 pl-5">
          <div>
            <dt className="text-stone-400">Experience</dt>
            <dd className="text-white font-medium">{data.experienceYears || '8+ years'}</dd>
          </div>
          <div>
            <dt className="text-stone-400">Currently</dt>
            <dd className="text-white font-medium">{data.currentlyRole || 'Staff AI Systems Architect, Aravind Labs'}</dd>
          </div>
          <div>
            <dt className="text-stone-400">Availability</dt>
            <dd className="text-white font-medium">{data.availability || 'Open to freelance work'}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
