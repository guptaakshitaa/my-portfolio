
import React from 'react';
import { PROJECTS, BLOGS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Works</h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl font-light">
          A documentation of engineered systems and written perspectives on technology, governance, and applied AI.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group p-8 rounded-[2rem] bg-neutral-50/50 dark:bg-neutral-800/20 border border-neutral-100 dark:border-neutral-800/50 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white leading-tight">{project.title}</h3>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-900 dark:hover:border-white transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </a>
                )}
              </div>
              
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 bg-white dark:bg-neutral-900/50 px-2 py-1 rounded border border-neutral-100 dark:border-neutral-800/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blogs Section */}
      <div className="flex flex-col gap-10 mt-12">
        <div className="border-b border-neutral-100 dark:border-neutral-800 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Blogs</h2>
        </div>

        <div className="flex flex-col gap-12">
          {BLOGS.map((blog) => (
            <div key={blog.id} className="group flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer leading-tight">
                  {blog.title}
                </h3>
                <p className="text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-3xl">
                  {blog.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest bg-neutral-50 dark:bg-neutral-800/40 px-3 py-1 rounded-full border border-neutral-100 dark:border-neutral-800/50">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={blog.link} 
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white hover:translate-x-1 transition-transform"
              >
                Read Article
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-8 py-16 border-t border-neutral-100 dark:border-neutral-800">
        <p className="text-neutral-400 dark:text-neutral-500 font-medium tracking-wide">READY TO START A PROJECT?</p>
        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white text-center">
          Let's build something <br /> remarkable together.
        </h3>
        <a href="mailto:akshitaguptatsec@gmail.com" className="group flex items-center gap-4 text-xl font-semibold text-neutral-900 dark:text-white hover:opacity-70 transition-opacity">
          akshitaguptatsec@gmail.com
          <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center group-hover:translate-x-2 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
