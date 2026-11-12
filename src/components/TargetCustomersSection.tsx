import React, { useState } from 'react';
import { 
  HardHat, 
  Home, 
  Store, 
  Wrench, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  Quote, 
  ArrowRight
} from 'lucide-react';
import { TARGET_CUSTOMERS } from '../data/mockData';
import { TargetCustomerSegment } from '../types';

export const TargetCustomersSection: React.FC<{ onListMaterial: () => void }> = ({ onListMaterial }) => {
  const [activeSegmentId, setActiveSegmentId] = useState<string>('contractors');

  const getIcon = (name: string) => {
    switch (name) {
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-amber-500" />;
      case 'Home':
        return <Home className="w-5 h-5 text-amber-500" />;
      case 'Store':
        return <Store className="w-5 h-5 text-amber-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      default:
        return <HardHat className="w-5 h-5 text-amber-500" />;
    }
  };

  const activeSegment = TARGET_CUSTOMERS.find((c) => c.id === activeSegmentId) || TARGET_CUSTOMERS[0];

  return (
    <section id="target-customers" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            <span>Section 03</span>
            <span aria-hidden="true">·</span>
            <span>Customer Segments & Stakeholders</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
            Who SobraMart Serves
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            SobraMart unites two connected customer groups across the construction ecosystem. Many participants act as both sellers and buyers—such as a contractor selling leftover tile lots and buying excess fixtures for another site.
          </p>
        </div>

        {/* Segment Selector Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {TARGET_CUSTOMERS.map((seg) => (
            <button
              key={seg.id}
              onClick={() => setActiveSegmentId(seg.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                activeSegmentId === seg.id
                  ? 'bg-white border-amber-500 shadow-md ring-1 ring-amber-500/30'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200/60">
                    {getIcon(seg.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                    {seg.userType}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-950">
                  {seg.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                {seg.subTitle}
              </p>
            </button>
          ))}
        </div>

        {/* Segment Deep-Dive Display */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Problem vs Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-700 font-bold mb-1">
                  <span>Persona Focus</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeSegment.userType} Segment</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                  {activeSegment.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1 font-medium">
                  {activeSegment.subTitle}
                </p>
              </div>

              {/* Pain Point vs How SobraMart Helps */}
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-red-50/70 border border-red-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-900 uppercase font-mono mb-1">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>The Problem Today</span>
                  </div>
                  <p className="text-xs sm:text-sm text-red-900/90 leading-relaxed">
                    {activeSegment.painPoint}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase font-mono mb-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>How SobraMart Solves It</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                    {activeSegment.howSobraMartHelps}
                  </p>
                </div>
              </div>

              {/* Typical Surplus Items */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-500 mb-2">
                  Frequently Traded Materials & Supplies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeSegment.typicalItems.map((item, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Financial Impact & Verified Testimonial */}
            <div className="lg:col-span-5 space-y-5">
              {/* Financial Benefit Card */}
              <div className="bg-slate-950 text-white rounded-xl p-5 border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Estimated Financial Return</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">
                  {activeSegment.financialBenefit}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Based on initial pilot surveys in Metro Manila across small residential renovations and trade contractor punch-lists.
                </p>
              </div>

              {/* Real scenario quote from pilot survey */}
              <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-200/80 relative">
                <Quote className="w-6 h-6 text-amber-400 mb-2" />
                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                  “{activeSegment.realScenarioQuote.quote}”
                </p>
                <div className="mt-3 pt-3 border-t border-amber-200/60">
                  <div className="text-xs font-bold text-slate-900">
                    {activeSegment.realScenarioQuote.author}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {activeSegment.realScenarioQuote.detail}
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <button
                onClick={onListMaterial}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Put Your Surplus Up for Sale</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
