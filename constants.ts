
import { Greeting, Project, Experience, Blog } from './types';

export const GREETINGS: Greeting[] = [
  { lang: 'English', text: 'Hello' },
  { lang: 'Hindi', text: 'नमस्ते' },
  { lang: 'Marathi', text: 'नमस्कार' },
  { lang: 'Punjabi', text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ' }
];

export const PROJECTS: Project[] = [
  {
    id: 'cm-ai',
    title: 'CodeMigrator AI',
    description: 'A web application designed to modernise legacy code. De-risks modernization by semantically extracting business logic, reducing migration timelines from years to minutes and cutting costs by 60–80%. Powered by Gemini 3 Pro.',
    tech: ['Gemini 3 Pro', 'TypeScript', 'Next.js', 'LLMs'],
    link: 'https://github.com'
  },
  {
    id: '1',
    title: 'EcoRetail AI',
    description: 'Engineered ML-powered eco-score and spoilage prediction system, increasing decision accuracy for inventory planning.',
    tech: ['Python', 'Machine Learning', 'API'],
    link: 'https://ecoretailai.vercel.app/'
  },
  {
    id: '3',
    title: 'Sakshatkar',
    description: 'Full-stack preparation tool improving user focus for interviews; won Global Hackathon NOSU among 200+ teams.',
    tech: ['Python', 'HTML/CSS', 'JavaScript'],
    link: 'https://jotunn9025.github.io/Sakshatkar-Your_Interview_Buddy/'
  }
];

export const BLOGS: Blog[] = [
  {
    id: 'blog-1',
    title: 'AI Solutions for Emerging, Resource-Constrained Cities: The Quiet Work',
    description: 'While AI headlines focus on wealthy cities, meaningful deployments are emerging elsewhere. This article examines how practical, low-cost AI systems are quietly improving infrastructure and services in resource-constrained regions.',
    tags: ['Artificial Intelligence', 'Climate Resilience', 'Urban Planning', 'Emerging Markets', 'Sustainable Development'],
    link: 'https://medium.com/@akshira/ai-solutions-for-emerging-resource-constrained-cities-the-quiet-revolution-were-not-talking-c49ab8b5b585'
  },
  {
    id: 'blog-2',
    title: 'From Pilot to Policy: Why AI Projects Rarely Scale in Emerging Cities',
    description: 'AI pilots are widespread across emerging cities, yet very few become permanent systems. This article examines the institutional, governance, and capacity constraints that prevent AI projects from scaling beyond pilot phases.',
    tags: ['Artificial Intelligence', 'Public Policy', 'Urban Governance'],
    link: 'https://medium.com/@akshira/from-pilot-to-policy-why-ai-projects-rarely-scale-in-emerging-cities-79a3a664e764'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Risk Analytics Intern',
    company: 'Piramal Finance',
    period: 'June 2025 — July 2025',
    description: 'Improved credit-risk pipeline by applying ML models on 10,000+ borrower profiles, resulting in clearer risk segmentation. Interpreted model outputs using SHAP to increase transparency and reducing model-related queries by ~30%.'
  }
];

export const SKILLS = {
  languages: ['Python', 'Java', 'C', 'JavaScript'],
  backend: ['REST APIs', 'FastAPI', 'Node.js', 'Express.js'],
  databases: ['MySQL', 'SQL', 'Snowflake'],
  tools: ['Git', 'GitHub', 'Tableau', 'Excel', 'Postman'],
  concepts: ['OOP', 'DSA', 'ML', 'SHAP', 'SDLC']
};
