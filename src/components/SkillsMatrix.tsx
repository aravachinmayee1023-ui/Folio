import React from 'react';
import { SkillTableRow, SkillCategory } from '../types/portfolio';

interface SkillsMatrixProps {
  skillsTable?: SkillTableRow[];
  categories?: SkillCategory[];
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ skillsTable }) => {
  const tableData: SkillTableRow[] = skillsTable || [
    { area: 'Frontend', tools: 'HTML, CSS, JavaScript, React, Tailwind, Next.js', level: 'Advanced' },
    { area: 'Backend', tools: 'Python, FastAPI, Node.js, SQL, Express, Redis', level: 'Advanced' },
    { area: 'AI', tools: 'Anthropic SDK, Gemini API, prompt design, RAG', level: 'Intermediate' },
    { area: 'Tools', tools: 'Git, Docker, CI/CD, Linux, Playwright', level: 'Intermediate' }
  ];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-14 border-t border-stone-800 transition-colors">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Skills</h2>
      <div className="ui overflow-x-auto">
        <table className="w-full text-left text-sm min-w-[480px]">
          <caption className="sr-only">Skills grouped by area with proficiency level</caption>
          <thead>
            <tr className="border-b border-stone-700 text-stone-300">
              <th scope="col" className="py-3 pr-4 font-semibold">Area</th>
              <th scope="col" className="py-3 pr-4 font-semibold">Tools</th>
              <th scope="col" className="py-3 font-semibold">Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {tableData.map((row, idx) => (
              <tr key={idx} className="hover:bg-stone-900/50 transition-colors">
                <th scope="row" className="py-3 pr-4 font-medium text-white">{row.area}</th>
                <td className="py-3 pr-4 text-stone-300">{row.tools}</td>
                <td className="py-3 text-stone-400 font-medium">{row.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
