import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  MessageSquare, 
  Banknote, 
  Search, 
  Ruler, 
  Calendar, 
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const HowItWorksSection: React.FC<{ onStartAction: () => void }> = ({ onStartAction }) => {
  const [activeRole, setActiveRole] = useState<'seller' | 'buyer'>('seller');
  const [activeStep, setActiveStep] = useState<number>(0);

  const sellerSteps = [
    {
      step: '01',
      title: 'Snap & Detail Exact Dimensions',
      icon: <Camera className="w-5 h-5 text-amber-500" />,
      shortDesc: 'Enter construction specs that matter: length, width, thickness, and quantity.',
      detail: 'No guesswork for buyers. Enter actual dimensions (e.g., 60×60 cm, 2"×4"×10ft), unit of sale (per piece or entire lot), brand, and disclose any minor storage defects or chipped edges.',
      screenMockup: {
        badge: 'STEP 1: LISTING SPECS',
        heading: 'Enter Construction Dimensions',
        fields: ['Category: Tiles & Pavers', 'Dimensions: 60 cm × 60 cm (9.5mm)', 'Quantity: 48 pcs in 8 boxes', 'Selling: ₱145/piece or ₱6,500 lot']
      }
    },
    {
      step: '02',
      title: 'Set Pickup Logistics & General Location',
      icon: <MapPin className="w-5 h-5 text-amber-500" />,
      shortDesc: 'Specify your barangay and vehicle loading access to prevent logistics surprises.',
      detail: 'Indicate your city and barangay, plus vehicle access notes (e.g. ground-floor garage, driveway clearance for light truck, or whether your crew can assist in loading).',
      screenMockup: {
        badge: 'STEP 2: PICKUP PROTOCOL',
        heading: 'Vehicle & Road Access Details',
        fields: ['City: Pasig City', 'Area: Barangay Kapitolyo', 'Access: Ground floor garage load-out', 'Vehicle: Suitable for L300 / pickup truck']
      }
    },
    {
      step: '03',
      title: 'Receive Direct Inquiries From Local Builders',
      icon: <MessageSquare className="w-5 h-5 text-amber-500" />,
      shortDesc: 'Nearby contractors and homeowners reach out directly to coordinate inspection.',
      detail: 'Interested buyers in your area send direct inquiries or call you. Agree on a mutually convenient inspection and pickup time without platform interference.',
      screenMockup: {
        badge: 'STEP 3: DIRECT BUYER CONNECT',
        heading: 'Inquiry from Engr. Dante R.',
        fields: ['Buyer: Contractor in Mandaluyong (2.1 km away)', 'Message: "Can I inspect the 48 tiles today at 2 PM?"', 'Direct Phone: +63 (917) ***-****', 'Status: Inspection confirmed']
      }
    },
    {
      step: '04',
      title: 'Handover & Cash on Inspection (0% Commission)',
      icon: <Banknote className="w-5 h-5 text-amber-500" />,
      shortDesc: 'Buyer inspects materials in person and pays you directly. Zero middleman fees.',
      detail: 'Buyer arrives, checks specifications with a tape measure, and pays you via Cash or GCash. You recover your capital immediately, and SobraMart takes ₱0 commission.',
      screenMockup: {
        badge: 'STEP 4: ZERO COMMISSION PAYOUT',
        heading: 'Direct Capital Recovered',
        fields: ['Payment Mode: Cash / GCash direct to seller', 'SobraMart Commission: ₱0.00 (0%)', 'Net Cash to Seller: ₱6,500.00', 'Yard Status: De-cluttered & project finished']
      }
    }
  ];

  const buyerSteps = [
    {
      step: '01',
      title: 'Filter Local Surplus by Radius & Specs',
      icon: <Search className="w-5 h-5 text-amber-500" />,
      shortDesc: 'Search materials available in your barangay or city without delivery markups.',
      detail: 'Browse active surplus lots by material category, dimensions, and selling mode. Find contractors with open boxes so you do not have to buy retail minimums.',
      screenMockup: {
        badge: 'STEP 1: LOCAL SPEC SEARCH',
        heading: 'Filtering 60x60 Porcelain Tiles',
        fields: ['Radius: Within 5 km of Ortigas', 'Selling Mode: Piece-by-piece accepted', 'Condition: Brand New Surplus', 'Average Savings: 40% vs Hardware Retail']
      }
    },
    {
      step: '02',
      title: 'Evaluate Civil Engineering Specifications',
      icon: <Ruler className="w-5 h-5 text-amber-500" />,
      shortDesc: 'Compare lot prices vs single piece rates, brand authenticity, and storage condition.',
      detail: 'Review full technical specifications: gauge, thickness, lot discount, and defect notes. Check the seller’s verified rating before inquiring.',
      screenMockup: {
        badge: 'STEP 2: SPEC EVALUATION',
        heading: 'Technical Inspection Card',
        fields: ['Brand: Mariwasa Spain Glazed Porcelain', 'Available: 48 pcs (need 15 pcs)', 'Unit Price: ₱145/pc (save ₱75/pc)', 'Seller: Verified Contractor (Pro Badge)']
      }
    },
    {
      step: '03',
      title: 'Inquire & Schedule Same-Day Pickup',
      icon: <Calendar className="w-5 h-5 text-amber-500" />,
      shortDesc: 'Reach the seller via 1-click messaging and set an on-site inspection schedule.',
      detail: 'Contact the seller directly with your required quantity. Schedule a quick site visit to inspect the materials in person before handing over money.',
      screenMockup: {
        badge: 'STEP 3: SITE PICKUP COORDINATION',
        heading: 'Arranging Pickup Schedule',
        fields: ['Seller Response: In under 15 minutes', 'Pickup Location: Ground floor driveway', 'Inspection Date: Today at 2:30 PM', 'Vehicle: Personal SUV / Van trunk']
      }
    },
    {
      step: '04',
      title: 'Inspect with Tape Measure & Pay Direct',
      icon: <CheckCircle2 className="w-5 h-5 text-amber-500" />,
      shortDesc: 'Inspect tiles, pipes, or lumber on-site. Pay only after you are 100% satisfied.',
      detail: 'Check dimensions, count pieces, inspect corners. If everything matches the listing, pay the seller directly. Complete your repair project at a fraction of store price.',
      screenMockup: {
        badge: 'STEP 4: INSPECT & VERIFY',
        heading: 'Tape Measure Inspection',
        fields: ['Inspection: 15 tiles verified intact', 'Paid: ₱2,175 for 15 pcs', 'Saved: ₱1,125 vs buying retail carton box', 'Project completed on schedule!']
      }
    }
  ];

  const currentSteps = activeRole === 'seller' ? sellerSteps : buyerSteps;
  const activeStepData = currentSteps[activeStep] || currentSteps[0];

  return (
    <section id="how-it-works" className="py-16 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              <span>Section 04</span>
              <span aria-hidden="true">·</span>
              <span>How It Works & Interactive Demo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
              Step-by-Step Marketplace Workflow
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              An inventory-light intermediary process built on transparency, standardized construction specifications, and direct on-site inspection.
            </p>
          </div>

          {/* Role Switcher Button Group */}
          <div className="flex items-center p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              onClick={() => { setActiveRole('seller'); setActiveStep(0); }}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                activeRole === 'seller'
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              I Want to Sell Surplus
            </button>
            <button
              onClick={() => { setActiveRole('buyer'); setActiveStep(0); }}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                activeRole === 'buyer'
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              I Want to Buy Surplus
            </button>
          </div>
        </div>

        {/* Step-by-Step Interactive Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Step Navigation List */}
          <div className="lg:col-span-6 space-y-3">
            {currentSteps.map((step, idx) => (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-slate-50 border-amber-500 shadow-xs ring-1 ring-amber-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    activeStep === idx ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-amber-700 font-bold">
                        STEP {step.step}
                      </span>
                      {activeStep === idx && (
                        <span className="text-[10px] font-mono text-slate-400">ACTIVE PREVIEW</span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-slate-950 mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      {step.shortDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Interactive Preview Screen */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-slate-950 text-white rounded-xl p-6 border border-slate-800 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                {/* Simulator header bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs font-mono">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    {activeStepData.screenMockup.badge}
                  </span>
                  <span className="text-slate-400 font-normal">SOBRAMART INTERACTIVE DEMO</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Interactive Simulation</span>
                    <h4 className="text-lg font-bold text-white mt-0.5">
                      {activeStepData.screenMockup.heading}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900 p-4 rounded-lg border border-slate-800">
                    {activeStepData.detail}
                  </p>

                  {/* Mockup Data fields */}
                  <div className="space-y-2 pt-1 font-mono text-xs">
                    {activeStepData.screenMockup.fields.map((field, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded bg-slate-900/80 border border-slate-800/80">
                        <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="text-slate-200">{field}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action footer inside demo */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Step {activeStep + 1} of 4 ({activeRole.toUpperCase()} JOURNEY)
                </span>
                <button
                  onClick={onStartAction}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{activeRole === 'seller' ? 'List Surplus Now' : 'Browse Inventory'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
