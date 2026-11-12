import React from 'react';

interface HeaderProps {
  onOpenPostModal: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPostModal, activeSection, setActiveSection }) => {
  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
          className="text-xl font-bold tracking-tight text-slate-950 font-display flex items-center gap-1.5 whitespace-nowrap shrink-0"
        >
          <span className="w-3 h-3 bg-amber-500 rounded-xs" />
          <span>SobraMart</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => scrollTo('marketplace')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-950 ${
              activeSection === 'marketplace' ? 'text-slate-950 font-semibold' : ''
            }`}
          >
            Marketplace
          </button>
          <button
            onClick={() => scrollTo('features')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-950 ${
              activeSection === 'features' ? 'text-slate-950 font-semibold' : ''
            }`}
          >
            Features
          </button>
          <button
            onClick={() => scrollTo('target-customers')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-950 ${
              activeSection === 'target-customers' ? 'text-slate-950 font-semibold' : ''
            }`}
          >
            Target Users
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-950 ${
              activeSection === 'how-it-works' ? 'text-slate-950 font-semibold' : ''
            }`}
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo('pricing')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-950 ${
              activeSection === 'pricing' ? 'text-slate-950 font-semibold' : ''
            }`}
          >
            Pricing
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPostModal}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-xs transition-colors whitespace-nowrap shrink-0"
          >
            + List Surplus
          </button>
        </div>
      </div>
    </header>
  );
};
