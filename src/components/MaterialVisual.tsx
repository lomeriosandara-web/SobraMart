import React from 'react';

interface MaterialVisualProps {
  type: 'tiles' | 'lumber' | 'plumbing' | 'electrical' | 'doors' | 'paint' | 'cement' | 'pavers';
  title: string;
  dimensions?: string;
  className?: string;
  showStudioBadge?: boolean;
}

export const MaterialVisual: React.FC<MaterialVisualProps> = ({ 
  type, 
  title, 
  dimensions, 
  className = 'h-52',
  showStudioBadge = false
}) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-b from-[#f9f9f8] to-[#f0f0ee] flex items-center justify-center p-3 select-none ${className}`}>
      {/* Studio lighting background radial glow */}
      <div className="absolute inset-0 bg-radial from-white via-transparent to-stone-200/40 pointer-events-none" />

      {/* Studio ground shadow plane */}
      <div className="absolute bottom-2 inset-x-8 h-4 bg-stone-900/10 rounded-full blur-md pointer-events-none" />

      {/* Real-life product SVG renders */}
      <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]">
        {renderProductSvg(type, dimensions)}
      </div>

      {/* Minimalist engineering dimension tag */}
      <div className="absolute bottom-2.5 left-2.5 z-20 flex items-center gap-1.5 bg-stone-900/85 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-sm shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
        <span className="tracking-tight">{dimensions || getFallbackDimensions(type)}</span>
      </div>

      {showStudioBadge && (
        <div className="absolute top-2.5 right-2.5 z-20 text-[9px] font-mono uppercase tracking-wider text-stone-500 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded border border-stone-200/80">
          Real Spec
        </div>
      )}
    </div>
  );
};

function getFallbackDimensions(type: string): string {
  switch (type) {
    case 'tiles': return '60 × 60 cm · 9.5mm';
    case 'lumber': return '2" × 4" × 10ft · KD';
    case 'doors': return '210 × 90 cm · 45mm';
    case 'plumbing': return '3" PVC + 22 Fittings';
    case 'electrical': return '3.5 mm² (#12 AWG) · 110m';
    case 'paint': return '16 L / 4 Gal Pails';
    case 'pavers': return '10 × 20 × 6 cm · Heavy Duty';
    default: return 'Construction Surplus';
  }
}

function renderProductSvg(type: string, dimensions?: string) {
  switch (type) {
    case 'tiles':
      // Realistic 60x60cm Glazed Travertine Porcelain Tiles with depth biscuit edge and warm marble veining
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tileSurface" x1="20" y1="20" x2="220" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#faf7f2" />
              <stop offset="40%" stopColor="#f3eee3" />
              <stop offset="70%" stopColor="#ede5d8" />
              <stop offset="100%" stopColor="#e4dacb" />
            </linearGradient>
            <linearGradient id="tileEdge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8baa6" />
              <stop offset="100%" stopColor="#8d7c67" />
            </linearGradient>
            <linearGradient id="tileSheen" x1="0" y1="0" x2="1" y2="0.8">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
            </linearGradient>
            <filter id="tileShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1e1810" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Stacked bottom tile biscuit layers (showing realistic thickness) */}
          <polygon points="44,52 196,52 208,60 56,60" fill="url(#tileEdge)" opacity="0.6" />
          <polygon points="40,56 192,56 204,64 52,64" fill="url(#tileEdge)" />

          {/* Main Top Tile with 3D isometric bevel */}
          <g filter="url(#tileShadow)">
            {/* Front & Side thickness biscuits (9.5mm rectified porcelain) */}
            <polygon points="36,118 188,118 188,124 36,124" fill="#a4937d" />
            <polygon points="188,118 214,92 214,86 188,118" fill="#887865" />
            
            {/* Top glazed face */}
            <polygon points="36,118 188,118 214,86 62,86" fill="url(#tileSurface)" stroke="#dcd3c5" strokeWidth="0.8" />
            <polygon points="36,118 188,118 214,86 62,86" fill="url(#tileSheen)" />

            {/* Organic travertine marble veining paths */}
            <path d="M52,106 Q90,102 124,96 T194,92" stroke="#d5c8b5" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
            <path d="M70,114 Q110,110 148,103 T202,100" stroke="#cbbca8" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
            <path d="M96,92 Q130,90 162,88" stroke="#dfd4c3" strokeWidth="1.4" opacity="0.8" />
            
            {/* Second stacked tile behind */}
            <polygon points="76,78 198,78 220,52 98,52" fill="url(#tileSurface)" stroke="#dcd3c5" strokeWidth="0.6" opacity="0.9" />
            <path d="M90,70 Q130,68 170,64 T210,60" stroke="#d5c8b5" strokeWidth="1" opacity="0.6" />

            {/* Rectified corner alignment guide */}
            <circle cx="36" cy="118" r="1.5" fill="#c49b66" />
            <circle cx="188" cy="118" r="1.5" fill="#c49b66" />
            <circle cx="214" cy="86" r="1.5" fill="#c49b66" />
            <circle cx="62" cy="86" r="1.5" fill="#c49b66" />
          </g>
        </svg>
      );

    case 'lumber':
      // Realistic Kiln-Dried S4S Tanguile Hardwood with natural grain and timber end-grain stamp
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="woodFace" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c88b48" />
              <stop offset="50%" stopColor="#b67a3a" />
              <stop offset="100%" stopColor="#9c652b" />
            </linearGradient>
            <linearGradient id="woodEnd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#965f29" />
              <stop offset="100%" stopColor="#75471a" />
            </linearGradient>
            <linearGradient id="woodTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dc9f5e" />
              <stop offset="100%" stopColor="#b87b3b" />
            </linearGradient>
            <filter id="woodShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#2a1606" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Stack of 3 structural timbers */}
          <g filter="url(#woodShadow)">
            {/* Timber 1 (bottom left) */}
            <polygon points="30,115 190,75 190,95 30,135" fill="url(#woodFace)" />
            <polygon points="30,115 50,105 210,65 190,75" fill="url(#woodTop)" />
            <polygon points="190,75 210,65 210,85 190,95" fill="url(#woodEnd)" />

            {/* Timber 2 (middle) */}
            <polygon points="38,98 198,58 198,78 38,118" fill="url(#woodFace)" />
            <polygon points="38,98 58,88 218,48 198,58" fill="url(#woodTop)" />
            <polygon points="198,58 218,48 218,68 198,78" fill="url(#woodEnd)" />

            {/* Grain lines along long edge */}
            <line x1="42" y1="102" x2="194" y2="64" stroke="#875121" strokeWidth="0.8" opacity="0.6" />
            <line x1="40" y1="110" x2="196" y2="72" stroke="#75441a" strokeWidth="0.9" opacity="0.5" />
            <line x1="44" y1="114" x2="192" y2="76" stroke="#875121" strokeWidth="0.6" opacity="0.7" />

            {/* End grain growth rings on timber 2 */}
            <ellipse cx="208" cy="63" rx="4" ry="7" fill="none" stroke="#683d16" strokeWidth="0.8" opacity="0.7" />
            <ellipse cx="208" cy="63" rx="7" ry="11" fill="none" stroke="#683d16" strokeWidth="0.8" opacity="0.5" />

            {/* Mill inspection stamp (S4S KD-12%) */}
            <g transform="translate(90, 80) rotate(-14)">
              <rect x="0" y="0" width="46" height="13" rx="2" fill="none" stroke="#5a2f0e" strokeWidth="0.8" strokeDasharray="2,1" opacity="0.65" />
              <text x="5" y="9.5" fill="#4d280a" fontSize="7" fontFamily="monospace" fontWeight="bold" opacity="0.75">S4S KD 12%</text>
            </g>
          </g>
        </svg>
      );

    case 'doors':
      // Realistic Solid Mahogany Exterior Paneled Door with architectural bevels and brass mortise hardware
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="doorStile" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7a3617" />
              <stop offset="50%" stopColor="#8d421e" />
              <stop offset="100%" stopColor="#672c12" />
            </linearGradient>
            <linearGradient id="panelRecess" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4e1f0b" />
              <stop offset="100%" stopColor="#7d3b19" />
            </linearGradient>
            <linearGradient id="brassHandle" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffd875" />
              <stop offset="50%" stopColor="#f3b83c" />
              <stop offset="100%" stopColor="#a3731a" />
            </linearGradient>
            <filter id="doorShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#1a0b04" floodOpacity="0.3" />
            </filter>
          </defs>

          <g filter="url(#doorShadow)">
            {/* Outer solid door slab */}
            <rect x="80" y="14" width="80" height="132" rx="2" fill="url(#doorStile)" stroke="#4a1c09" strokeWidth="1.2" />

            {/* Recessed Panels - Top Pair */}
            <rect x="88" y="24" width="28" height="32" rx="1" fill="url(#panelRecess)" stroke="#3e1606" strokeWidth="1" />
            <rect x="90" y="26" width="24" height="28" rx="0.5" fill="#753517" />
            
            <rect x="124" y="24" width="28" height="32" rx="1" fill="url(#panelRecess)" stroke="#3e1606" strokeWidth="1" />
            <rect x="126" y="26" width="24" height="28" rx="0.5" fill="#753517" />

            {/* Recessed Panels - Middle Pair */}
            <rect x="88" y="64" width="28" height="32" rx="1" fill="url(#panelRecess)" stroke="#3e1606" strokeWidth="1" />
            <rect x="90" y="66" width="24" height="28" rx="0.5" fill="#753517" />

            <rect x="124" y="64" width="28" height="32" rx="1" fill="url(#panelRecess)" stroke="#3e1606" strokeWidth="1" />
            <rect x="126" y="66" width="24" height="28" rx="0.5" fill="#753517" />

            {/* Recessed Panels - Bottom Pair */}
            <rect x="88" y="104" width="28" height="32" rx="1" fill="url(#panelRecess)" stroke="#3e1606" strokeWidth="1" />
            <rect x="90" y="106" width="24" height="28" rx="0.5" fill="#753517" />

            <rect x="124" y="104" width="28" height="32" rx="1" fill="url(#panelRecess)" stroke="#3e1606" strokeWidth="1" />
            <rect x="126" y="106" width="24" height="28" rx="0.5" fill="#753517" />

            {/* Brass Mortise Lockset Plate & Lever Handle */}
            <rect x="150" y="74" width="6" height="18" rx="1" fill="url(#brassHandle)" stroke="#805b15" strokeWidth="0.5" />
            {/* Lever */}
            <path d="M148,80 L140,80 Q138,80 138,82 Q138,84 140,84 L148,84 Z" fill="url(#brassHandle)" />
            {/* Keyhole */}
            <circle cx="153" cy="86" r="0.8" fill="#301f05" />

            {/* Subtle natural grain highlights */}
            <line x1="84" y1="20" x2="84" y2="140" stroke="#9e4c23" strokeWidth="0.6" opacity="0.4" />
            <line x1="120" y1="20" x2="120" y2="140" stroke="#521f09" strokeWidth="0.8" opacity="0.5" />
            <line x1="156" y1="20" x2="156" y2="140" stroke="#9e4c23" strokeWidth="0.6" opacity="0.4" />
          </g>
        </svg>
      );

    case 'plumbing':
      // Realistic Neltex Saniguard Series 1000 3" PVC Sewer Pipes and Sanitary Tee Fitting with gloss reflection
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pvcOrangeCylinder" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="25%" stopColor="#fb923c" />
              <stop offset="50%" stopColor="#fdba74" />
              <stop offset="75%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>
            <linearGradient id="pvcSpecular" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="35%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id="pvcShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#431407" floodOpacity="0.25" />
            </filter>
          </defs>

          <g filter="url(#pvcShadow)">
            {/* Long main PVC pipe length */}
            <rect x="25" y="70" width="165" height="28" rx="2" fill="url(#pvcOrangeCylinder)" />
            <rect x="25" y="70" width="165" height="28" rx="2" fill="url(#pvcSpecular)" />

            {/* Socket bell end (enlarged joint end) */}
            <rect x="186" y="67" width="24" height="34" rx="3" fill="url(#pvcOrangeCylinder)" stroke="#9a3412" strokeWidth="0.8" />
            <ellipse cx="210" cy="84" rx="3" ry="17" fill="#7c2d12" stroke="#ea580c" strokeWidth="0.8" />
            {/* Rubber gasket groove */}
            <line x1="194" y1="67" x2="194" y2="101" stroke="#431407" strokeWidth="1.2" />

            {/* Sanitary Tee junction fitting standing beside it */}
            <g transform="translate(70, 30)">
              <rect x="16" y="10" width="22" height="42" rx="2" fill="url(#pvcOrangeCylinder)" />
              <rect x="0" y="20" width="54" height="22" rx="2" fill="url(#pvcOrangeCylinder)" />
              <ellipse cx="27" cy="10" rx="11" ry="3" fill="#fdba74" stroke="#9a3412" strokeWidth="0.8" />
              <ellipse cx="54" cy="31" rx="3" ry="11" fill="#7c2d12" stroke="#ea580c" strokeWidth="0.8" />
            </g>

            {/* Authentic printed manufacturer inkjet marking */}
            <text x="45" y="86" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold" letterSpacing="0.8" opacity="0.85">
              NELTEX SANIGUARD SERIES 1000 · 3" (75mm) PVC-U
            </text>
          </g>
        </svg>
      );

    case 'electrical':
      // Realistic Phelps Dodge THHN Copper Building Wire Spool with wound cable strands and bare copper core
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flangeBlack" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="wireBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="copperGleam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fdba74" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            <filter id="spoolShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#090d16" floodOpacity="0.3" />
            </filter>
          </defs>

          <g filter="url(#spoolShadow)">
            {/* Back Flange of Spool */}
            <ellipse cx="140" cy="74" rx="42" ry="46" fill="url(#flangeBlack)" stroke="#475569" strokeWidth="1" />

            {/* Wound Wire Cylinder Body */}
            <path d="M98,40 C110,32 140,32 152,40 L152,108 C140,116 110,116 98,108 Z" fill="url(#wireBlue)" />
            
            {/* Tightly wound wire coils texture lines */}
            {[...Array(12)].map((_, i) => (
              <path 
                key={i} 
                d={`M98,${44 + i * 5.2} C112,${38 + i * 5.2} 138,${38 + i * 5.2} 152,${44 + i * 5.2}`} 
                stroke="#60a5fa" 
                strokeWidth="1.6" 
                opacity="0.8" 
              />
            ))}

            {/* Front Flange of Spool */}
            <ellipse cx="98" cy="74" rx="42" ry="46" fill="url(#flangeBlack)" stroke="#475569" strokeWidth="1.2" />
            
            {/* Spool Arbor Hole */}
            <ellipse cx="98" cy="74" rx="14" ry="16" fill="#090d16" stroke="#64748b" strokeWidth="1.5" />
            <ellipse cx="98" cy="74" rx="6" ry="7" fill="#020617" />

            {/* Phelps Dodge Label Disc */}
            <ellipse cx="98" cy="74" rx="30" ry="34" fill="none" stroke="#eab308" strokeWidth="0.8" strokeDasharray="3,2" />
            <text x="75" y="52" fill="#fbbf24" fontSize="6.5" fontFamily="monospace" fontWeight="bold">PHELPS DODGE</text>
            <text x="74" y="103" fill="#94a3b8" fontSize="5.5" fontFamily="monospace">THHN 3.5mm²</text>

            {/* Free end of wire showing stripped shiny multi-strand copper conductor */}
            <path d="M152,70 Q180,60 195,85" stroke="#2563eb" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M195,85 L208,92" stroke="url(#copperGleam)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="208" cy="92" r="1.5" fill="#fef08a" />
          </g>
        </svg>
      );

    case 'paint':
      // Realistic 16-Liter Boysen Permacoat Paint Pail with steel bail handle and lid seal groove
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bucketBody" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="20%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="80%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="lidWhite" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <filter id="paintShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.25" />
            </filter>
          </defs>

          <g filter="url(#paintShadow)">
            {/* Tapered Pail Body */}
            <polygon points="76,46 164,46 156,134 84,134" fill="url(#bucketBody)" />
            
            {/* Bottom rim */}
            <ellipse cx="120" cy="134" rx="36" ry="6" fill="#1e3a8a" />
            
            {/* Heavy-duty Lid with double rim and tamper seal */}
            <ellipse cx="120" cy="46" rx="44" ry="9" fill="url(#lidWhite)" stroke="#94a3b8" strokeWidth="0.8" />
            <ellipse cx="120" cy="43" rx="42" ry="7" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.6" />
            <ellipse cx="120" cy="43" rx="32" ry="5" fill="#e2e8f0" />

            {/* Boysen Brand Graphics */}
            <g transform="translate(90, 68)">
              {/* Shield badge */}
              <rect x="0" y="0" width="60" height="42" rx="2" fill="#ffffff" />
              <rect x="2" y="2" width="56" height="38" rx="1.5" fill="#f8fafc" stroke="#2563eb" strokeWidth="0.6" />
              <text x="7" y="14" fill="#1e3a8a" fontSize="9" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.8">BOYSEN</text>
              <text x="7" y="22" fill="#2563eb" fontSize="5.5" fontFamily="sans-serif" fontWeight="bold">PERMACOAT</text>
              <text x="7" y="29" fill="#64748b" fontSize="4.8" fontFamily="sans-serif">Semi-Gloss Latex #715</text>
              <rect x="7" y="32" width="46" height="5" rx="1" fill="#e0e7ff" />
              <text x="14" y="36" fill="#1e40af" fontSize="4.2" fontFamily="monospace" fontWeight="bold">16 LITERS · 4 GAL</text>
            </g>

            {/* Steel wire bail handle arching up with ergonomic plastic grip */}
            <path d="M72,58 Q120,6 168,58" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
            <rect x="106" y="16" width="28" height="6" rx="3" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
          </g>
        </svg>
      );

    case 'pavers':
      // Realistic Interlocking Concrete Heavy-Duty Cobblestone Pavers with crisp chamfer edges
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full max-h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="paverTop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="paverSide" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <filter id="paverShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.25" />
            </filter>
          </defs>

          <g filter="url(#paverShadow)">
            {/* Paver 1 */}
            <g transform="translate(40, 60)">
              <polygon points="0,30 50,10 90,30 40,50" fill="url(#paverTop)" stroke="#94a3b8" strokeWidth="0.8" />
              <polygon points="0,30 40,50 40,70 0,50" fill="url(#paverSide)" />
              <polygon points="40,50 90,30 90,50 40,70" fill="#1e293b" />
            </g>

            {/* Paver 2 (Interlocked) */}
            <g transform="translate(92, 40)">
              <polygon points="0,30 50,10 90,30 40,50" fill="url(#paverTop)" stroke="#94a3b8" strokeWidth="0.8" />
              <polygon points="0,30 40,50 40,70 0,50" fill="url(#paverSide)" />
              <polygon points="40,50 90,30 90,50 40,70" fill="#1e293b" />
            </g>

            {/* Paver 3 (Foreground) */}
            <g transform="translate(80, 80)">
              <polygon points="0,30 50,10 90,30 40,50" fill="#64748b" stroke="#cbd5e1" strokeWidth="0.8" />
              <polygon points="0,30 40,50 40,70 0,50" fill="url(#paverSide)" />
              <polygon points="40,50 90,30 90,50 40,70" fill="#1e293b" />
              {/* Chamfer edge line highlight */}
              <line x1="2" y1="31" x2="39" y2="49" stroke="#ffffff" strokeWidth="0.8" opacity="0.4" />
            </g>
          </g>
        </svg>
      );

    default:
      return (
        <div className="text-xs font-mono text-stone-500">
          {dimensions || 'Surplus Construction Item'}
        </div>
      );
  }
}
