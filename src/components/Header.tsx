import React from 'react';
import { Star } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

const GITHUB_REPO_URL = 'https://github.com/rizwanislam-FireFolk/json2js';

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

interface HeaderProps {
  onNavigate: (view: 'converter' | 'about' | 'privacy' | 'terms') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="w-full bg-zinc-900 border-b border-zinc-800 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate('converter')}
          className="flex items-center select-none cursor-pointer focus:outline-hidden group"
          title="Return to Converter"
        >
          <span className="text-xl sm:text-2xl font-normal font-sans leading-none tracking-normal">
            <span className="text-white group-hover:text-gray-200 transition-colors">json2</span>
            <span className="text-[#F7DF1E]">js</span>
            <span className="text-white group-hover:text-gray-200 transition-colors"></span>
          </span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-gray-200 hover:text-white text-xs font-semibold transition-all"
            title="Star json2js on GitHub"
            aria-label="Star json2js on GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Star</span>
            <Star className="w-3.5 h-3.5 text-[#F7DF1E]" />
          </a>
          <PWAInstallButton />
        </div>
      </div>
    </header>
  );
};