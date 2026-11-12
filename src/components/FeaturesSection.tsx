import React, { useState } from 'react';
import { 
  Ruler, 
  MapPin, 
  Layers, 
  Truck, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  DollarSign,
  Package
} from 'lucide-react';

export const FeaturesSection: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      id: 'construction-specs',
      title: 'Construction-Specific Listing Engine',
      category: 'Civil Engineering Design',
      summary: 'Unlike generic marketplaces where people just post a blurry photo and a price, SobraMart is engineered with structured construction fields.',
      bullets: [
        'Precise dimensions (thickness, length, width, gauge)',
        'Quantity and exact unit of measurement (pcs, board-ft, pails, spools)',
        'Clear distinction between price per piece and entire lot price',
        'Condition rating and disclosed storage defect notes'
      ],
      mockupData: {
        title: 'Mariwasa Porcelain Tile Specification',
        tag: 'STRUCTURED SPEC SHEET',
        fields: [
          { label: 'DIMENSIONS', val: '600 mm × 600 mm × 9.5 mm' },
          { label: 'QUANTITY', val: '48 pcs (8 sealed boxes)' },
          { label: 'SELLING UNIT', val: 'Sold by box or entire lot' },
          { label: 'PRICE BREAKDOWN', val: '₱145/pc vs ₱6,500 lot deal' },
          { label: 'STORAGE', val: 'Indoors dry garage, sealed' }
        ]
      }
    },
    {
      id: 'local-discovery',
      title: 'Hyper-Local Radius & Direct Pickup',
      category: 'Proximity Network',
      summary: 'Heavy construction materials are costly to ship. SobraMart links you with surplus available within a 2–10 km neighborhood radius.',
      bullets: [
        'Search by city and barangay proximity',
        'Zero expensive freight or long-distance courier markups',
        'Direct vehicle access guidelines (garage loading, truck clearance)',
        'Physical tape-measure inspection before cash or GCash handover'
      ],
      mockupData: {
        title: 'Neighborhood Proximity Radar',
        tag: 'RADIUS-BASED DISCOVERY',
        fields: [
          { label: 'DISTANCE', val: '2.4 km from your project site' },
          { label: 'COMMUNITY', val: 'Barangay Kapitolyo, Pasig' },
          { label: 'VEHICLE ACCESS', val: 'Direct driveway, ground floor' },
          { label: 'EST. TRANSIT', val: '12 min pickup via light van / truck' },
          { label: 'DELIVERY COST', val: '₱0 (Self-arranged pickup)' }
        ]
      }
    },
    {
      id: 'request-board',
      title: 'Buyer Material Request Board',
      category: 'Crowdsourcing Supply',
      summary: 'Short by 12 tiles for a bathroom finish? Need 3 plywood cutoffs? Post to the Request Board and let contractors with matching scrap respond.',
      bullets: [
        'Broadcast specific missing materials and target budget',
        'Instant alerts sent to local contractors and hardware stores',
        'Turn dormant site cutoffs into matching solutions',
        'Fast turnaround for time-sensitive contractor punch-lists'
      ],
      mockupData: {
        title: 'Live Contractor Request Match',
        tag: 'PUNCH-LIST CROWDSOURCING',
        fields: [
          { label: 'REQUESTED ITEM', val: '15 pcs 60x60 glazed porcelain' },
          { label: 'MATCH STATUS', val: '3 local contractors responded' },
          { label: 'BEST OFFER', val: '₱140/pc in Capitol Commons' },
          { label: 'TIME SAVED', val: 'Avoided 2-week factory wait time' },
          { label: 'RESPONSE TIME', val: 'First offer in 42 minutes' }
        ]
      }
    },
    {
      id: 'inventory-light',
      title: 'Inventory-Light & Zero Commission',
      category: 'Marketplace Economics',
      summary: 'SobraMart functions purely as a matchmaking platform rather than a materials middleman, keeping overhead minimal and prices unbeatable.',
      bullets: [
        'No warehouse markups or inventory carrying costs',
        '0% commission on material sales in initial launch phase',
        'Sellers keep 100% of their recovered capital',
        'Monetized through optional Featured Boosts & Seller Pro subscriptions'
      ],
      mockupData: {
        title: 'Zero-Middleman Transaction Flow',
        tag: 'PEER-TO-PEER SETTLEMENT',
        fields: [
          { label: 'WAREHOUSE FEE', val: '₱0 (No middleman storage)' },
          { label: 'COMMISSION CUT', val: '₱0 (100% goes to seller)' },
          { label: 'PAYMENT METHOD', val: 'Cash on pickup or bank transfer' },
          { label: 'PLATFORM REVENUE', val: '₱99 Featured / ₱299 Pro plan' },
          { label: 'BUYER SAVINGS', val: 'Up to 60% vs store SRP' }
        ]
      }
    }
  ];

  const currentFeature = features[activeFeatureIndex];

  return (
    <section id="features" className="py-16 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            <span>Section 02</span>
            <span aria-hidden="true">·</span>
            <span>Platform Architecture & Features</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
            Built for Construction, Not General Clutter
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            General classifieds fail for construction because they omit vital civil engineering specifications like thickness, grade, lot vs piece pricing, and vehicle loading access. SobraMart solves this with four core differentiators.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 p-1.5 bg-slate-100 rounded-lg">
          {features.map((feat, idx) => (
            <button
              key={feat.id}
              onClick={() => setActiveFeatureIndex(idx)}
              className={`p-3 text-left rounded-md transition-all cursor-pointer ${
                activeFeatureIndex === idx
                  ? 'bg-white text-slate-950 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-amber-700">
                0{idx + 1}. {feat.category}
              </div>
              <div className="text-xs sm:text-sm font-bold truncate mt-0.5">
                {feat.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Feature Showcase: 2-column Layout */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Explanatory Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block text-xs font-mono font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-xs">
              CORE INNOVATION 0{activeFeatureIndex + 1}
            </div>

            <h3 className="text-2xl font-bold text-slate-950 font-display">
              {currentFeature.title}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {currentFeature.summary}
            </p>

            <div className="space-y-2.5 pt-2">
              {currentFeature.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onExplore}
                className="text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-md shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Test in Live Marketplace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Interactive Architectural Spec Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 text-white rounded-lg p-5 shadow-xl border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3 text-[11px] font-mono">
                <span className="text-amber-400 font-bold">{currentFeature.mockupData.tag}</span>
                <span className="text-slate-400">ENGINEERING SPEC SHEET</span>
              </div>

              <h4 className="text-sm font-bold text-white mb-3">
                {currentFeature.mockupData.title}
              </h4>

              <div className="space-y-2 text-xs font-mono">
                {currentFeature.mockupData.fields.map((f, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800/80">
                    <span className="text-slate-400 text-[10px]">{f.label}</span>
                    <span className="text-slate-200 font-semibold">{f.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Field Schema</span>
                <span className="text-emerald-400">Standardized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
