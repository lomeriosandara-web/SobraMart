import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Filter, 
  Ruler, 
  Box, 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  Plus, 
  ArrowUpDown,
  Sparkles,
  Layers,
  HelpCircle,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { MaterialListing, MaterialRequest, MaterialCategory } from '../types';
import { MaterialVisual } from './MaterialVisual';

interface MarketplaceViewProps {
  listings: MaterialListing[];
  requests: MaterialRequest[];
  onSelectListing: (listing: MaterialListing) => void;
  onOpenPostModal: () => void;
  onOpenRequestModal: () => void;
  onOpenOfferMatchModal: (request: MaterialRequest) => void;
}

export const MarketplaceView: React.FC<MarketplaceViewProps> = ({
  listings,
  requests,
  onSelectListing,
  onOpenPostModal,
  onOpenRequestModal,
  onOpenOfferMatchModal
}) => {
  const [activeTab, setActiveTab] = useState<'inventory' | 'requests'>('inventory');
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategory>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedSellingMode, setSelectedSellingMode] = useState<'all' | 'piece' | 'lot'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MaterialCategory; label: string }[] = [
    { id: 'all', label: 'All Materials' },
    { id: 'tiles', label: 'Tiles & Pavers' },
    { id: 'lumber', label: 'Lumber & Wood' },
    { id: 'plumbing', label: 'Plumbing & Pipes' },
    { id: 'electrical', label: 'Electrical & Wire' },
    { id: 'doors-windows', label: 'Doors & Windows' },
    { id: 'paint-finishing', label: 'Paints & Finishing' },
    { id: 'masonry', label: 'Cement & Masonry' },
  ];

  const cities = ['all', 'Pasig', 'Quezon City', 'Mandaluyong', 'Taguig', 'Marikina', 'Parañaque'];

  // Filter listings
  const filteredListings = listings.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (selectedCity !== 'all' && item.city !== selectedCity) return false;
    if (selectedSellingMode === 'piece' && item.sellingMode === 'lot-only') return false;
    if (selectedSellingMode === 'lot' && item.sellingMode === 'piece-only') return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match = 
        item.title.toLowerCase().includes(q) ||
        item.dimensions.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.brand && item.brand.toLowerCase().includes(q)) ||
        item.location.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  // Filter requests
  const filteredRequests = requests.filter((req) => {
    if (selectedCategory !== 'all' && req.category !== selectedCategory) return false;
    if (selectedCity !== 'all' && req.city !== selectedCity) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match = 
        req.title.toLowerCase().includes(q) ||
        req.specsNeeded.toLowerCase().includes(q) ||
        req.location.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <section id="marketplace" className="py-14 bg-[#f8f8f6] border-b border-stone-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1 font-mono">
              <span>Section 01</span>
              <span aria-hidden="true">·</span>
              <span>Live Marketplace Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 font-display">
              Browse Surplus Construction Inventory
            </h2>
            <p className="mt-1 text-sm text-stone-600 max-w-2xl">
              Inspect verified dimensions, quantities, and condition before contacting sellers. 
              Pick up locally without middleman fees or delivery markups.
            </p>
          </div>

          {/* Dual Action buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenRequestModal}
              className="px-3.5 py-2 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300/80 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Post Material Request</span>
            </button>
            <button
              onClick={onOpenPostModal}
              className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Post Surplus Listing</span>
            </button>
          </div>
        </div>

        {/* View Switcher: Inventory vs Material Request Board */}
        <div className="flex items-center justify-between border-b border-stone-200/80 mb-6 pb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'inventory'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 bg-transparent'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>Available Surplus ({filteredListings.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'requests'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-950 bg-transparent'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Material Request Board ({filteredRequests.length})</span>
            </button>
          </div>

          <span className="hidden sm:inline-block text-xs font-mono text-stone-500">
            Updated in real-time · Direct local pickup
          </span>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-stone-200/80 shadow-2xs mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by material (e.g., 60x60 tiles, 2x4 lumber, PVC 3-inch, wire)..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-stone-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-xs text-stone-400 hover:text-stone-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* City Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                aria-label="Filter by city location"
                className="w-full py-2 px-3 text-xs sm:text-sm border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-stone-50/50 text-stone-800"
              >
                <option value="all">All Metro Manila Locations</option>
                {cities.filter(c => c !== 'all').map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Price Mode Selector (Per Piece vs Full Lot) */}
            <div className="md:col-span-3">
              <select
                value={selectedSellingMode}
                onChange={(e) => setSelectedSellingMode(e.target.value as any)}
                aria-label="Filter by selling mode (per piece or full lot)"
                className="w-full py-2 px-3 text-xs sm:text-sm border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-stone-50/50 text-stone-800"
              >
                <option value="all">All Selling Modes (Piece & Lot)</option>
                <option value="piece">Per-Piece Allowed (Single Items)</option>
                <option value="lot">Take-All / Lot Deals Only</option>
              </select>
            </div>
          </div>

          {/* Category Chips (Interactive filter tabs) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-stone-950 font-semibold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Available Surplus Listings Grid */}
        {activeTab === 'inventory' && (
          <div>
            {filteredListings.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border border-stone-200/80">
                <Box className="w-10 h-10 text-stone-300 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-stone-900">No surplus materials matched your filter</h3>
                <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                  Try clearing your search query or reset the location and category filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedCity('all');
                    setSelectedSellingMode('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectListing(item)}
                    className="bg-white rounded-xl border border-stone-200/80 hover:border-stone-400 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col cursor-pointer group"
                  >
                    {/* Visual Asset Container */}
                    <div className="relative">
                      <MaterialVisual
                        type={item.visualType}
                        title={item.title}
                        dimensions={item.dimensions}
                        className="h-44 group-hover:scale-[1.01] transition-transform duration-200"
                        showStudioBadge={item.featured}
                      />

                      {/* Featured banner if applicable */}
                      {item.featured && (
                        <div className="absolute top-2 left-2 bg-amber-500 text-stone-950 font-bold text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-xs shadow-xs flex items-center gap-1 font-mono">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Featured Surplus</span>
                        </div>
                      )}

                      {/* Distance / City badge */}
                      <div className="absolute top-2 right-2 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded-xs flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{item.city}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Clean unboxed metadata with typographic separators (§1.A Zero-Pill rule) */}
                        <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5 font-medium">
                          <span className="text-amber-700">{item.categoryLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.condition}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-stone-950 group-hover:text-amber-700 transition-colors line-clamp-1">
                          {item.title}
                        </h3>

                        {/* Dimensions & Quantity Specs */}
                        <div className="mt-3 bg-stone-50 rounded-lg p-2.5 border border-stone-100 text-xs font-mono space-y-1">
                          <div className="flex items-center justify-between text-stone-600">
                            <span className="text-stone-400 text-[11px]">SPECS:</span>
                            <span className="text-stone-900 font-semibold">{item.dimensions}</span>
                          </div>
                          <div className="flex items-center justify-between text-stone-600">
                            <span className="text-stone-400 text-[11px]">AVAILABLE:</span>
                            <span className="text-stone-900">{item.quantity} {item.unit}</span>
                          </div>
                        </div>

                        {/* Location preview */}
                        <p className="mt-2 text-xs text-stone-500 line-clamp-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                          <span>{item.location}</span>
                        </p>
                      </div>

                      {/* Pricing Footer (distinguishing per piece vs lot price as highlighted in PDF) */}
                      <div className="mt-4 pt-3 border-t border-stone-100 flex items-end justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-mono text-stone-400 block">Asking Lot Price</span>
                          <div className="text-xl font-bold font-mono text-stone-950 tabular-nums">
                            ₱{item.lotPrice.toLocaleString()}
                          </div>
                        </div>

                        <div className="text-right">
                          {item.pricePerUnit ? (
                            <div>
                              <span className="text-[10px] text-stone-400 font-mono block">Or by Piece</span>
                              <span className="text-xs font-semibold text-amber-700 font-mono">
                                ₱{item.pricePerUnit} / unit
                              </span>
                            </div>
                          ) : (
                            <span className="text-[11px] text-stone-500 font-mono bg-stone-100 px-2 py-0.5 rounded-xs">
                              Lot Deal Only
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Seller info line */}
                      <div className="mt-3 pt-2 border-t border-stone-50 flex items-center justify-between text-[11px] text-stone-500">
                        <span className="flex items-center gap-1">
                          {item.sellerTier === 'pro' && (
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                          )}
                          <span>{item.sellerName}</span>
                          <span className="text-stone-400">({item.sellerRole})</span>
                        </span>
                        <span className="text-stone-400 flex items-center gap-1 font-mono">
                          <Eye className="w-3 h-3" />
                          <span>{item.viewsCount}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Material Request Board ("Wanted / Looking For" - PDF Section 8 Key Innovation) */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-bold">What is the Material Request Board?</span>
                <p className="mt-0.5 text-amber-800">
                  Buyers post specific surplus items they need (e.g. 15 pcs of 60x60 travertine tiles or 4 plywood offcuts). 
                  Local contractors with matching leftover materials can respond immediately.
                </p>
              </div>
              <button
                onClick={onOpenRequestModal}
                className="px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                + Post a Material Request
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white rounded-xl border border-stone-200/80 p-5 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-amber-700">{req.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{req.city}</span>
                        <span aria-hidden="true">·</span>
                        <span>{req.postedAgo}</span>
                      </div>
                      <span className="text-stone-600 font-mono text-[11px] bg-stone-100 px-2 py-0.5 rounded-xs">
                        {req.status}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-stone-900">
                      {req.title}
                    </h3>

                    {/* Spec Requirements */}
                    <div className="mt-3 bg-stone-50 rounded-lg p-3 border border-stone-100 text-xs font-mono space-y-1.5">
                      <div className="text-stone-700">
                        <span className="text-stone-400">SPECIFICATION: </span>
                        <span className="font-medium">{req.specsNeeded}</span>
                      </div>
                      <div className="flex items-center justify-between text-stone-700">
                        <span>
                          <span className="text-stone-400">QUANTITY: </span>
                          <span className="font-medium">{req.quantityNeeded}</span>
                        </span>
                        <span>
                          <span className="text-stone-400">BUDGET: </span>
                          <span className="text-stone-950 font-bold">{req.targetBudget}</span>
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
                      <span>Posted by: <strong className="text-stone-700">{req.buyerName}</strong> ({req.buyerRole})</span>
                      <span className="text-stone-400 font-mono">{req.responsesCount} matching offers</span>
                    </div>
                  </div>

                  {/* Offer Surplus Action */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-stone-400">
                      Have matching leftover materials in {req.city}?
                    </span>
                    <button
                      onClick={() => onOpenOfferMatchModal(req)}
                      className="px-3 py-1.5 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                    >
                      Offer My Surplus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
