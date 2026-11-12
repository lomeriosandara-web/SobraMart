import React, { useState } from 'react';
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  Calculator, 
  ArrowRight, 
  Info,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
  onOpenPostModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onOpenPostModal
}) => {
  const [estimatedSurplusValue, setEstimatedSurplusValue] = useState<number>(35000);

  // Recovery calculation: average 55% of retail value recovered on SobraMart
  const estimatedRecovery = Math.round(estimatedSurplusValue * 0.55);
  const sellerProCost = 299;
  const netGain = estimatedRecovery - sellerProCost;

  return (
    <section id="pricing" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            <span>Section 05</span>
            <span aria-hidden="true">·</span>
            <span>Revenue Model & Pricing Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
            Transparent Pricing. 0% Transaction Commission.
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            SobraMart operates on a sustainable freemium model. Standard participation is free to seed marketplace liquidity, while frequent sellers and hardware stores can purchase optional featured visibility and listing management tools.
          </p>
        </div>

        {/* Pricing Cards Grid (Free Basic, Featured Boost ₱99, Seller Pro ₱299) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-all ${
                plan.highlighted
                  ? 'bg-white border-amber-500 shadow-lg ring-2 ring-amber-500/20 relative'
                  : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div>
                {/* Badge if present */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-xs ${
                    plan.highlighted ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {plan.badge}
                  </span>
                  {plan.highlighted && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-amber-600 font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      PRO PLAN
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-950 font-display">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-950 tabular-nums">
                      {plan.priceTag}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      / {plan.cadence}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Best for: {plan.bestFor}
                  </span>
                </div>

                {/* Features List */}
                <div className="mt-5 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                    What's included:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    if (plan.id === 'basic') {
                      onOpenPostModal();
                    } else {
                      onSelectPlan(plan.id);
                    }
                  }}
                  className={`w-full py-2.5 px-4 text-xs font-bold rounded-md transition-colors cursor-pointer text-center ${
                    plan.highlighted
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Model Boundary & Transparency Note (from PDF Section 4) */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs mb-12">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-amber-700 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
              <h4 className="text-sm font-bold text-slate-950 font-display">
                Revenue Model Boundary & Operating Assumptions
              </h4>
              <p>
                <strong>Why 0% transaction commission?</strong> During the initial pilot launch, SobraMart facilitates direct discovery and communication without purchasing or warehousing inventory. Payments and physical collections occur directly between buyer and seller.
              </p>
              <p>
                By keeping standard listings free and charging only for optional promotional tools (₱99 featured placement) and pro subscriptions (₱299/month for hardware stores & frequent contractors), we eliminate barriers to adoption for local builders.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Surplus Value & ROI Simulator */}
        <div className="bg-slate-950 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Slider */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                <Calculator className="w-4 h-4" />
                <span>INTERACTIVE CONTRACTOR ROI CALCULATOR</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Calculate How Much Cash Is Locked in Your Surplus
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Enter the approximate original retail cost of unused tiles, lumber, electrical wire, or fittings currently taking up space in your warehouse, garage, or job site:
              </p>

              {/* Slider control */}
              <div className="space-y-2 bg-slate-900 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400">Retail Value of Leftovers:</span>
                  <span className="text-amber-400 font-bold text-base tabular-nums">
                    ₱{estimatedSurplusValue.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={estimatedSurplusValue}
                  onChange={(e) => setEstimatedSurplusValue(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />

                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>₱5,000 (Small DIY leftover)</span>
                  <span>₱75,000 (Contractor site lot)</span>
                  <span>₱150,000+ (Hardware store batch)</span>
                </div>
              </div>
            </div>

            {/* Right: Concrete Outcome Comparison */}
            <div className="lg:col-span-5 bg-slate-900 p-5 rounded-lg border border-slate-800 space-y-4">
              <div className="text-xs font-mono uppercase text-slate-400">
                Projected Cash Recovery Breakdown
              </div>

              {/* Comparison Rows */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Without SobraMart (Scrap/Dump):</span>
                  <span className="text-red-400 font-bold">₱0.00 loss</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Estimated Cash Recovery (55%):</span>
                  <span className="text-emerald-400 font-bold text-sm tabular-nums">
                    +₱{estimatedRecovery.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Optional Seller Pro Plan:</span>
                  <span className="text-slate-300">-₱299 / mo</span>
                </div>
              </div>

              {/* Net Result Highlight */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Net Recovered Capital</span>
                  <span className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">
                    ₱{netGain.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={onOpenPostModal}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                >
                  List Materials Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
