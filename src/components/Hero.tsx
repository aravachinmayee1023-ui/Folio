import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface HeroProps {
  data: PortfolioData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pt-16 pb-14 sm:pt-24 sm:pb-16">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-4">
          <p className="ui text-amber-300 text-sm font-medium">
            {data.roleTitle} based in {data.location}
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight max-w-3xl">
            {data.tagline}
          </h1>

          <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
            {data.bio}
          </p>

          <div className="ui pt-4 flex flex-wrap gap-3">
            <a 
              href="#projects" 
              className="bg-amber-300 text-stone-950 font-semibold px-5 py-3 rounded-md hover:bg-amber-200 transition-colors shadow-sm"
            >
              View my projects
            </a>
            <a 
              href="#contact" 
              className="border border-stone-500 text-stone-200 px-5 py-3 rounded-md hover:border-amber-300 hover:text-amber-300 transition-colors"
            >
              Send me a message
            </a>
          </div>

          <p className="ui text-xs text-stone-400 pt-2 font-mono">
            Status: {data.availability}
          </p>
        </div>

        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900">
            <img 
              src={data.heroPortraitUrl} 
              alt={data.heroPortraitAlt} 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Quantitative KPI Strip */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-stone-800">
        {data.stats.map((stat, i) => (
          <div key={i} className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {stat.value}
            </div>
            <div className="ui text-sm text-stone-300 mt-0.5">
              {stat.label}
            </div>
            <div className="ui text-xs text-stone-500">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
