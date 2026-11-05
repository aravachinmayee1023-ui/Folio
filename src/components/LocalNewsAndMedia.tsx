import React from 'react';
import { LocalNewsItem, MediaLicensing } from '../types/portfolio';

interface LocalNewsAndMediaProps {
  localNews: LocalNewsItem[];
  mediaLicensing: MediaLicensing;
}

export const LocalNewsAndMedia: React.FC<LocalNewsAndMediaProps> = ({
  localNews
}) => {
  return (
    <section id="news" className="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Applicable local news & press features</h2>
      <p className="text-stone-300 mb-6 text-sm">
        Regional technology developments and industry milestones across Hyderabad and global open-source communities.
      </p>

      <div className="grid sm:grid-cols-3 gap-5">
        {localNews.map(news => (
          <article key={news.id} className="p-5 rounded-lg bg-stone-900 border border-stone-800 space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="ui text-xs text-stone-400 font-mono">
                {news.publication} · {news.date}
              </div>
              <h3 className="text-base font-semibold text-white leading-snug">
                {news.headline}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {news.summary}
              </p>
            </div>
            <div className="ui text-xs text-amber-300 pt-2 font-medium">
              {news.category}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
