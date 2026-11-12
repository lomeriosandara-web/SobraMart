import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle, ShieldCheck, Ruler, Sparkles, ChevronRight } from 'lucide-react';
import { SOBRAMART_METRICS } from '../data/mockData';
import { MaterialVisual } from './MaterialVisual';

interface HeroProps {
  onExploreMarketplace: () => void;
  onOpenPostModal: () => void;
  onOpenSignupModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMarketplace,
  onOpenPostModal,
  onOpenSignupModal,
}) => {
  // Interactive product showcase selector in the Hero stage
  const [featuredProduct, setFeaturedProduct] = useState<'tiles' | 'lumber' | 'electrical' | 'doors'>('tiles');

  const showcaseItems = {
    tiles: {
      type: 'tiles' as const,
      category: 'Tiles & Pavers · Mariwasa Spain',
      title: 'Glazed Porcelain Floor Tiles',
      specs: '60 cm × 60 cm (9.5mm)',
      qty: '48 pcs (8 boxes · 17.3 sqm)',
      lotPrice: 6500,
      unitPrice: 145,
      retailSrp: 10560,
      location: 'Pasig City (2.4 km away)',
      seller: 'Engr. Marco (Seller Pro)',
    },
    lumber: {
      type: 'lumber' as const,
      category: 'Lumber & Wood · S4S KD Hardwood',
      title: 'Kiln-Dried Tanguile Framing Lumber',
      specs: '2" × 4" × 10ft (50×100×3000mm)',
      qty: '26 pcs (~173.3 board ft)',
      lotPrice: 8200,
      unitPrice: 340,
      retailSrp: 12480,
      location: 'Quezon City (4.1 km away)',
      seller: 'Archt. Lea (Seller Pro)',
    },
    electrical: {
      type: 'electrical' as const,
      category: 'Electrical & Wire · Phelps Dodge',
      title: 'THHN Pure Copper Stranded Wire',
      specs: '3.5 mm² (#12 AWG) · 90°C Rated',
      qty: '110m continuous spool leftover',
      lotPrice: 3800,
      unitPrice: undefined,
      retailSrp: 5800,
      location: 'Pasig City (1.8 km away)',
      seller: 'ElectriTech Solutions',
    },
    doors: {
      type: 'doors' as const,
      category: 'Doors & Windows · Custom Millwork',
      title: 'Solid Mahogany 6-Panel Exterior Door',
      specs: '210 cm × 90 cm × 45 mm',
      qty: '1 unit (shrink-wrapped uncut)',
      lotPrice: 6800,
      unitPrice: 6800,
      retailSrp: 12500,
      location: 'Parañaque City (Driveway pickup)',
      seller: 'Teresa V. (Homeowner)',
    }
  };

  const currentItem = showcaseItems[featuredProduct];

  return (
    <section id="home" className="relative pt-8 pb-14 md:pt-14 md:pb-20 border-b border-stone-200/80 bg-[#fdfdfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand Statement & Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3 font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>SobraMart Construction Marketplace</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-500">Metro Manila Pilot</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-extrabold tracking-tight text-stone-950 font-display text-balance leading-[1.12]">
              “Don’t let it pile up. Put your surplus up for sale.”
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
              The hyper-local online marketplace dedicated to surplus construction & renovation materials. 
              Contractors, homeowners, and hardware stores list unused tiles, lumber, fixtures, and pipes with civil engineering precision—while nearby builders save up to 60% with direct local pickup.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreMarketplace}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Browse Live Surplus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenPostModal}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300/80 rounded-md transition-colors cursor-pointer"
              >
                + Post Leftover Materials
              </button>
              <button
                onClick={onOpenSignupModal}
                className="px-4 py-3 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
              >
                Join Pilot Community
              </button>
            </div>

            {/* Trust points */}
            <div className="mt-8 pt-6 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Zero middleman commission</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Standardized dimensions & units</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Inspect in person before paying</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Product Pedestal & Interactive Spec Inspector */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-stone-200/90 relative">
              {/* Product Type Selector Tabs */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-3">
                <span className="text-[11px] font-mono text-stone-400 uppercase font-semibold">
                  Interactive Studio Specimen:
                </span>
                <div className="flex items-center gap-1">
                  {(['tiles', 'lumber', 'electrical', 'doors'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setFeaturedProduct(key)}
                      className={`px-2 py-0.5 text-[10px] font-mono uppercase rounded transition-colors cursor-pointer ${
                        featuredProduct === key 
                          ? 'bg-stone-900 text-white font-bold' 
                          : 'text-stone-500 hover:text-stone-900 bg-stone-100'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minimalist Product Stage */}
              <div className="rounded-xl overflow-hidden border border-stone-200/80 bg-stone-50">
                <MaterialVisual 
                  type={currentItem.type} 
                  title={currentItem.title}
                  dimensions={currentItem.specs}
                  className="h-48"
                  showStudioBadge={true}
                />
              </div>

              {/* Product Info & Construction Metrics */}
              <div className="mt-4 space-y-3">
                <div>
                  <div className="text-[11px] font-mono text-amber-700 uppercase tracking-wide">
                    {currentItem.category}
                  </div>
                  <h3 className="text-base font-bold text-stone-950 mt-0.5">
                    {currentItem.title}
                  </h3>
                </div>

                {/* Construction engineering spec rows */}
                <div className="bg-stone-50/80 rounded-lg p-3 border border-stone-200/60 text-xs font-mono space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-stone-500">DIMENSIONS:</span>
                    <span className="text-stone-900 font-semibold">{currentItem.specs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">LOT QUANTITY:</span>
                    <span className="text-stone-900 font-medium">{currentItem.qty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">SELLER / RATING:</span>
                    <span className="text-stone-900 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                      {currentItem.seller}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">PICKUP AREA:</span>
                    <span className="text-stone-900">{currentItem.location}</span>
                  </div>
                </div>

                {/* Price highlight */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 line-through font-mono block">
                      Retail SRP ₱{currentItem.retailSrp.toLocaleString()}
                    </span>
                    <div className="text-2xl font-extrabold font-mono text-stone-950 tabular-nums">
                      ₱{currentItem.lotPrice.toLocaleString()}
                      <span className="text-xs text-stone-500 font-normal ml-1">lot price</span>
                    </div>
                  </div>

                  <div className="text-right">
                    {currentItem.unitPrice && (
                      <span className="text-xs font-semibold text-amber-700 font-mono block">
                        ₱{currentItem.unitPrice} / piece
                      </span>
                    )}
                    <span className="text-[11px] text-emerald-700 font-medium font-mono">
                      Save {Math.round((1 - currentItem.lotPrice / currentItem.retailSrp) * 100)}% vs Hardware
                    </span>
                  </div>
                </div>

                {/* Direct CTA */}
                <button
                  onClick={onExploreMarketplace}
                  className="w-full py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Inspect in Live Marketplace</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {SOBRAMART_METRICS.map((kpi, index) => (
            <div key={index} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-mono tracking-tight tabular-nums">
                {kpi.value}
              </div>
              <div className="text-sm font-semibold text-stone-900">
                {kpi.label}
              </div>
              <div className="text-xs text-stone-500">
                {kpi.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
