
import React, { useState, useEffect } from 'react';
import { GREETINGS } from '../constants';

const Home: React.FC = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const RESUME_URL = 'https://drive.google.com/file/d/1UzM5qT-eVC3wcrkgHUSdL2hvSYmYefHT/view'; // Correcting to a placeholder of her vercel URL

  return (
    <div className="flex flex-col gap-12 max-w-2xl">
      <div className="overflow-hidden" style={{ height: `80px` }}>
        <div 
          className="transition-all duration-700 ease-in-out transform flex flex-col items-start"
          style={{ transform: `translateY(-${greetingIndex * 80}px)` }}
        >
          {GREETINGS.map((g) => (
            <h1 
              key={g.lang} 
              className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap"
              style={{ height: `80px`, lineHeight: `80px` }}
            >
              {g.text}
            </h1>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <a 
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-left inline-block"
        >
          <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-neutral-900 dark:text-white hover:opacity-80 transition-opacity whitespace-nowrap">
            Akshita Gupta
          </h2>
          <div className="flex items-center gap-2 mt-4 text-sm font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-blue-600 transition-colors">
            <span>View Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>
        </a>

        <p className="text-xl md:text-2xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-light max-w-xl mt-4">
          Backend & ML engineer skilled in building data-driven systems, improving model transparency, and developing scalable APIs. 
          Experienced across Python, Java, SQL, and end-to-end SDLC.
        </p>

        <div className="flex gap-6 mt-8">
          <a href="https://github.com/guptaakshitaa" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-1 hover:border-neutral-900 dark:hover:border-white transition-all">GitHub</a>
          <a href="https://www.linkedin.com/in/akshita-gupta-67aa752ab/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-1 hover:border-neutral-900 dark:hover:border-white transition-all">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
