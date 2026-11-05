import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { INITIAL_PORTFOLIO_DATA } from './src/utils/portfolio-data';
import { generateProductionHtml } from './src/utils/html-exporter';
import { PortfolioData, ProjectItem } from './src/types/portfolio';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Gemini SDK if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Gemini client initialization warning:', err);
  }
}

/**
 * POST /api/generate-portfolio
 * Transforms raw user background data (projects, skills, experience, bio)
 * into structured portfolio data + production-ready single-file HTML.
 */
app.post('/api/generate-portfolio', async (req: Request, res: Response) => {
  try {
    const {
      user_name = 'Chinmayee Aravind',
      bio,
      skills = [],
      projects = [],
      role_title,
      location = 'San Francisco, CA & Remote Worldwide',
      style = 'dark'
    } = req.body;

    // Start with rich defaults as the solid architectural foundation
    let updatedData: PortfolioData = JSON.parse(JSON.stringify(INITIAL_PORTFOLIO_DATA));
    updatedData.userName = user_name || updatedData.userName;
    if (role_title) updatedData.roleTitle = role_title;
    if (location) updatedData.location = location;
    if (bio) updatedData.bio = bio;

    // Map projects if user provided them
    if (Array.isArray(projects) && projects.length > 0) {
      const mappedProjects: ProjectItem[] = projects.map((p: any, idx: number) => {
        if (typeof p === 'string') {
          return {
            id: `proj-${idx + 1}`,
            title: p,
            subtitle: 'Enterprise Architectural Milestone',
            category: (idx % 2 === 0 ? 'AI Systems' : 'Cloud Infra') as any,
            categories: idx % 2 === 0 ? ['ai', 'backend'] : ['web', 'backend'],
            description: `High-throughput production system architected and deployed by ${user_name}. Engineered for sub-50ms latency, high availability, and zero-defect uptime.`,
            fullCaseStudy: `Case study for ${p}. Solved critical bottlenecks in latency and data partitioning while cutting infrastructure costs.`,
            architectureDetails: [
              'Event-driven streaming pipeline with backpressure control',
              'Distributed consensus layer for zero-data-loss failover',
              'Strict schema contracts and automated observability metrics'
            ],
            techStack: ['TypeScript', 'Python', 'Go', 'Redis', 'Docker'],
            metrics: '99.99% availability in production testing',
            imageUrl: idx % 2 === 0 ? updatedData.projects[0].imageUrl : updatedData.projects[1].imageUrl,
            imageAlt: `Architectural blueprint and interface diagram for ${p}`
          };
        }
        return {
          id: p.id || `proj-${idx + 1}`,
          title: p.title || `Project ${idx + 1}`,
          subtitle: p.subtitle || 'Production Engineering System',
          category: p.category || 'AI Systems',
          categories: Array.isArray(p.categories) ? p.categories : (idx % 2 === 0 ? ['ai', 'backend'] : ['web', 'backend']),
          description: p.description || 'Enterprise architecture project.',
          fullCaseStudy: p.fullCaseStudy || p.description || 'Full architecture study.',
          architectureDetails: p.architectureDetails || ['Modular architecture', 'High-throughput concurrency'],
          techStack: Array.isArray(p.techStack) ? p.techStack : ['TypeScript', 'Node.js', 'Tailwind CSS'],
          metrics: p.metrics || 'Verified production impact',
          imageUrl: p.imageUrl || updatedData.projects[0].imageUrl,
          imageAlt: p.imageAlt || `Diagram for ${p.title || 'Project'}`
        };
      });
      updatedData.projects = mappedProjects;
    }

    // Map skills if user provided them
    if (Array.isArray(skills) && skills.length > 0) {
      const skillsList = skills.map((s: string) => s.trim()).filter(Boolean);
      if (skillsList.length > 0) {
        updatedData.skillCategories[0].skills = skillsList.slice(0, 4).map((skillName: string, idx: number) => ({
          name: skillName,
          level: 90 + (idx % 8),
          experience: '4+ yrs',
          context: `Production systems implementation for ${skillName}`
        }));
      }
    }

    // Optionally augment with Gemini AI if key is configured
    if (aiClient) {
      try {
        const prompt = `You are an elite AI Portfolio Architect. Enhance the following portfolio bio and tagline for ${user_name}:
Current Role: ${updatedData.roleTitle}
Current Bio: ${updatedData.bio}
Skills: ${skills.join(', ')}
Projects: ${projects.join(', ')}

Return ONLY a valid JSON object with the following schema:
{
  "enhanced_tagline": "string",
  "enhanced_bio": "string",
  "system_motto": "string"
}`;

        const response = await aiClient.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json'
          }
        });

        if (response.text) {
          const parsed = JSON.parse(response.text);
          if (parsed.enhanced_tagline) updatedData.tagline = parsed.enhanced_tagline;
          if (parsed.enhanced_bio) updatedData.bio = parsed.enhanced_bio;
        }
      } catch (aiErr) {
        console.warn('AI enhancement skipped, using procedural synthesis:', aiErr);
      }
    }

    // Generate production-ready standalone HTML
    const productionHtml = generateProductionHtml(updatedData);

    return res.json({
      success: true,
      portfolio_data: updatedData,
      html_content: productionHtml
    });
  } catch (error: any) {
    console.error('Error generating portfolio:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate portfolio'
    });
  }
});

/**
 * POST /api/export-html
 * Exports given portfolio data into complete single-file HTML.
 */
app.post('/api/export-html', (req: Request, res: Response) => {
  try {
    const portfolioData: PortfolioData = req.body || INITIAL_PORTFOLIO_DATA;
    const html = generateProductionHtml(portfolioData);
    return res.json({ success: true, html });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Setup Vite development server middleware or serve built dist
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server active on http://localhost:${PORT}`);
  });
}

startServer();
