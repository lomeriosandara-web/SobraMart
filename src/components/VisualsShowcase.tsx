import React, { useState } from 'react';
import { 
  Smartphone, 
  Monitor, 
  Layers, 
  Ruler, 
  ShieldCheck, 
  MapPin, 
  Camera, 
  Sparkles,
  Maximize2,
  CheckCircle2,
  Eye,
  Sliders
} from 'lucide-react';
import { MaterialVisual } from './MaterialVisual';

export const VisualsShowcase: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('mobile');
  const [inspectedMaterial, setInspectedMaterial] = useState<'tiles' | 'lumber' | 'doors' | 'plumbing' | 'electrical' | 'paint' | 'pavers'>('tiles');

  const materialSpecs = {
    tiles: {
      name: 'Mariwasa Spain Porcelain Floor Tiles',
      specs: '600 × 600 mm · 9.5 mm thickness',
      packaging: '8 intact cartons · 6 pcs per box',
      inspectionTip: 'Check rectified edge straightness and confirm identical dye-lot codes across all 8 cartons.',
      finish: 'Matte Glazed Travertine Vein'
    },
    lumber: {
      name: 'Kiln-Dried S4S Tanguile Hardwood',
      specs: '2" × 4" × 10ft (50 × 100 × 3000 mm)',
      packaging: 'Bundle of 26 pcs with plastic strapping',
      inspectionTip: 'Sight down the board length to verify zero bow, crown, or twist. Confirm dry indoor storage.',
      finish: 'Surfaced 4-Sides (S4S) · 12% Moisture'
    },
    doors: {
      name: 'Solid Philippine Mahogany Exterior Door',
      specs: '2100 × 900 × 45 mm',
      packaging: 'Single unit in protective shrink-wrap',
      inspectionTip: 'Measure diagonal corner-to-corner to verify squareness. Check unbored mortise areas.',
      finish: 'Natural Deep Mahogany Grain'
    },
    plumbing: {
      name: 'Neltex Saniguard Series 1000 PVC Pipes',
      specs: '3-inch (75mm) × 3m + 22 sanitary fittings',
      packaging: '14 lengths bundled + 1 fittings crate',
      inspectionTip: 'Check socket rubber gaskets are pliable and pipe walls bear genuine inkjet standard stamp.',
      finish: 'Sewer Orange High-Gloss PVC-U'
    },
    electrical: {
      name: 'Phelps Dodge THHN Copper Building Wire',
      specs: '3.5 mm² (#12 AWG) · 110m continuous length',
      packaging: 'Original manufacturer spool',
      inspectionTip: 'Examine insulation for abrasion and check copper core has bright metallic luster with zero oxidation.',
      finish: 'UL-Listed Dual-Rated 90°C Nylon Jacket'
    },
    paint: {
      name: 'Boysen Permacoat Semi-Gloss White #715',
      specs: '16 Liters (4 Gallons) Industrial Drums',
      packaging: '3 factory sealed steel bail pails',
      inspectionTip: 'Verify tear-strip seal ring is unbroken and manufacturing stamp is within 6 months.',
      finish: '100% Acrylic Water-Based Latex'
    },
    pavers: {
      name: 'Heavy-Duty Interlocking Cobblestone Pavers',
      specs: '100 × 200 × 60 mm (SUV traffic rated)',
      packaging: 'Stack of 320 pcs on timber pallet',
      inspectionTip: 'Check top chamfers are crisp and free of cement mortar residue or hairline structural fractures.',
      finish: 'Cast Stone Textured Charcoal'
    }
  };

  const activeSpec = materialSpecs[inspectedMaterial];

  return (
    <section className="py-16 bg-[#fdfdfc] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1 font-mono">
            <span>Section 06</span>
            <span aria-hidden="true">·</span>
            <span>Visual Architecture & Product Mock-ups</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 font-display">
            High-Fidelity Real-Life Visuals & Inspection Anatomy
          </h2>
          <p className="mt-2 text-base text-stone-600 leading-relaxed">
            Engineered for job site practicality. Contractors and tradespeople access clear dimensional specs, neighborhood radius maps, and direct seller communication right from their phone or desktop.
          </p>
        </div>

        {/* Minimalist Material Specimen Inspection Bar */}
        <div className="mb-10 bg-white rounded-2xl border border-stone-200/80 p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-stone-100">
            <div>
              <span className="text-[10px] font-mono uppercase text-amber-700 font-bold tracking-wider">
                STUDIO SPECIMEN GALLERY
              </span>
              <h3 className="text-base font-bold text-stone-950">
                Inspect Real-Life Construction Surplus Materials
              </h3>
            </div>
            
            {/* Material Switcher */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
              {(Object.keys(materialSpecs) as Array<keyof typeof materialSpecs>).map((key) => (
                <button
                  key={key}
                  onClick={() => setInspectedMaterial(key)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase rounded-md transition-colors cursor-pointer ${
                    inspectedMaterial === key
                      ? 'bg-stone-950 text-white font-bold'
                      : 'bg-stone-100 text-stone-600 hover:text-stone-950'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Specimen Stage */}
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-stone-200 bg-stone-50">
              <MaterialVisual 
                type={inspectedMaterial} 
                title={activeSpec.name}
                dimensions={activeSpec.specs}
                className="h-56"
                showStudioBadge={true}
              />
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs font-mono text-amber-700 uppercase font-semibold">
                {activeSpec.finish}
              </div>
              <h4 className="text-lg font-bold text-stone-950">
                {activeSpec.name}
              </h4>

              <div className="bg-stone-50 rounded-lg p-3.5 border border-stone-200/80 text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">SPECIFICATIONS:</span>
                  <span className="text-stone-900 font-semibold">{activeSpec.specs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">PACKAGING LOT:</span>
                  <span className="text-stone-900">{activeSpec.packaging}</span>
                </div>
                <div className="pt-2 border-t border-stone-200/60">
                  <span className="text-stone-500 block text-[10px] uppercase">Job Site Verification Guide:</span>
                  <span className="text-amber-900 font-sans text-xs mt-0.5 block leading-relaxed">
                    {activeSpec.inspectionTip}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Mockups Showcase: 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Device Simulator (Mobile vs Desktop) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <span className="text-xs font-bold text-stone-950 uppercase font-mono">
                Interactive Device Frame Mockup
              </span>
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-md text-xs">
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`px-3 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer ${
                    deviceMode === 'mobile' ? 'bg-white text-stone-950 shadow-xs font-bold' : 'text-stone-600'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile PWA</span>
                </button>
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={`px-3 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer ${
                    deviceMode === 'desktop' ? 'bg-white text-stone-950 shadow-xs font-bold' : 'text-stone-600'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop View</span>
                </button>
              </div>
            </div>

            {/* Mockup Frame */}
            {deviceMode === 'mobile' ? (
              <div className="mx-auto max-w-[340px] bg-stone-950 p-3 rounded-[38px] shadow-2xl border-4 border-stone-800">
                {/* Phone Notch */}
                <div className="w-28 h-4 bg-stone-900 rounded-b-xl mx-auto mb-2" />
                
                {/* Mobile Screen Content */}
                <div className="bg-stone-50 rounded-[28px] overflow-hidden border border-stone-200 text-xs">
                  {/* Mini App Header */}
                  <div className="bg-white px-3 py-2.5 border-b border-stone-200 flex items-center justify-between">
                    <span className="font-bold text-stone-950 font-display flex items-center gap-1">
                      <span className="w-2.5 h-2.5 bg-amber-500 rounded-xs" />
                      SobraMart
                    </span>
                    <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                      Pasig (2km)
                    </span>
                  </div>

                  {/* Active Screen Card */}
                  <div className="p-3 space-y-2.5">
                    <div className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-xs">
                      <MaterialVisual type="tiles" title="Floor Tiles" dimensions="600 × 600 mm" className="h-28" />
                      <div className="p-2.5">
                        <div className="text-[10px] text-amber-700 font-mono">Tiles · Brand New Surplus</div>
                        <div className="font-bold text-stone-900 text-xs mt-0.5">Mariwasa Glazed Porcelain</div>
                        <div className="mt-1.5 flex justify-between font-mono text-[11px]">
                          <span className="font-bold text-stone-950">₱6,500 lot</span>
                          <span className="text-amber-700 font-semibold">₱145/pc</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-100/70 p-2.5 rounded-lg border border-amber-200 text-[11px] text-amber-950">
                      <strong>1-Tap Seller Contact:</strong> Send SMS or call to reserve before another contractor arrives.
                    </div>

                    <button className="w-full py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-md text-[11px] transition-colors text-center cursor-pointer">
                      Confirm Pickup at Site
                    </button>
                  </div>
                </div>

                <div className="w-24 h-1 bg-stone-700 rounded-full mx-auto mt-3 mb-1" />
              </div>
            ) : (
              <div className="bg-stone-950 p-3 rounded-xl shadow-2xl border border-stone-800">
                <div className="flex items-center gap-1.5 mb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-[10px] font-mono text-stone-400">sobramart.ph/marketplace/metro-manila</span>
                </div>
                <div className="bg-stone-50 rounded-lg p-3 text-xs border border-stone-200 space-y-2">
                  <div className="flex justify-between items-center bg-white p-2 rounded border border-stone-200">
                    <span className="font-bold text-stone-900">SobraMart Construction Exchange</span>
                    <span className="text-stone-500 font-mono text-[11px]">850+ Verified Pros</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2 rounded border border-stone-200">
                      <span className="text-[10px] font-mono text-stone-400">LUMBER</span>
                      <div className="font-bold text-stone-900">2x4x10ft S4S KD Tanguile</div>
                      <div className="text-amber-700 font-mono text-[11px] mt-1">₱8,200 lot (26 pcs)</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-stone-200">
                      <span className="text-[10px] font-mono text-stone-400">ELECTRICAL</span>
                      <div className="font-bold text-stone-900">Phelps Dodge 3.5mm² THHN</div>
                      <div className="text-amber-700 font-mono text-[11px] mt-1">₱3,800 (110m spool)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Construction Listing Anatomy Screenshot / Blueprint */}
          <div className="lg:col-span-6 space-y-5">
            <div className="pb-2 border-b border-stone-100 flex items-center justify-between">
              <span className="text-xs font-bold text-stone-950 uppercase font-mono">
                Listing Anatomy: Civil Engineering Fields
              </span>
              <span className="text-[11px] text-amber-700 font-mono">PDF Standard Compliant</span>
            </div>

            {/* Annotated Anatomy Card */}
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/80 space-y-4">
              <p className="text-xs text-stone-600 leading-relaxed">
                Every SobraMart listing requires standardized technical attributes so builders never show up to find the wrong thickness or unsuitable dimensions.
              </p>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="bg-white p-3 rounded-lg border border-stone-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    1
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Dimensions & Unit of Measure</span>
                    <span className="text-stone-500 text-[11px]">Exact metric/imperial specs (e.g. 60cm × 60cm × 9.5mm, 3.5mm² wire gauge).</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-stone-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    2
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Available Quantity & Selling Mode</span>
                    <span className="text-stone-500 text-[11px]">Explicit distinction: Buy the full lot OR purchase single pieces as needed.</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-stone-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    3
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Condition & Defect Disclosure</span>
                    <span className="text-stone-500 text-[11px]">Must state if carton was opened, unlaid pavers, or chipped corners exist.</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-stone-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    4
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">Road Access & Vehicle Loading Protocol</span>
                    <span className="text-stone-500 text-[11px]">Helps buyers know whether an L300 truck or sedan trunk can load the materials.</span>
                  </div>
                </div>
              </div>

              {/* Safety inspection reminder */}
              <div className="pt-2 flex items-center gap-2 text-xs text-stone-600 bg-amber-50/50 p-2.5 rounded border border-amber-200/60">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Zero-risk policy: Buyers physically inspect specs before cash handover.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
