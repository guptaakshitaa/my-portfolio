
import React from 'react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'About', value: Page.About },
    { label: 'Projects', value: Page.Projects },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[12.5%] flex flex-col justify-between py-12 border-r border-neutral-100 dark:border-neutral-800 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-12">
        <div 
          className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-sm"
          onClick={() => onNavigate(Page.Home)}
        >
          <span className="text-white dark:text-neutral-900 font-bold text-xs">AG</span>
        </div>

        <nav className="flex flex-col gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-sm uppercase tracking-widest text-left transition-all duration-300 transform ${
                currentPage === item.value 
                  ? 'text-neutral-900 dark:text-white font-semibold' 
                  : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:translate-x-1'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col items-center gap-6">
        <span className="text-[10px] text-neutral-300 dark:text-neutral-600 font-medium rotate-90 whitespace-nowrap mb-8 uppercase tracking-tighter">
          © 2025 AKSHITA GUPTA
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
