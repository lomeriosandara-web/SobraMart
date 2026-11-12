import React, { useState } from 'react';
import { X, Plus, Info, Check, ShieldCheck, Ruler } from 'lucide-react';
import { MaterialListing, MaterialCategory, MaterialCondition } from '../types';

interface PostListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddListing: (listing: MaterialListing) => void;
}

export const PostListingModal: React.FC<PostListingModalProps> = ({
  isOpen,
  onClose,
  onAddListing,
}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<MaterialCategory>('tiles');
  const [brand, setBrand] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [quantity, setQuantity] = useState<number>(20);
  const [unit, setUnit] = useState('pcs');
  const [lotPrice, setLotPrice] = useState<number>(3500);
  const [pricePerUnit, setPricePerUnit] = useState<number | undefined>(180);
  const [sellingMode, setSellingMode] = useState<'both' | 'lot-only' | 'piece-only'>('both');
  const [condition, setCondition] = useState<MaterialCondition>('Brand New Surplus');
  const [defectsNote, setDefectsNote] = useState('');
  const [city, setCity] = useState('Quezon City');
  const [location, setLocation] = useState('Barangay Holy Spirit, Quezon City');
  const [pickupNotes, setPickupNotes] = useState('Ground floor garage loading. Easy parking.');
  const [sellerName, setSellerName] = useState('Engr. Aris Valdez');
  const [sellerRole, setSellerRole] = useState<'Contractor' | 'Homeowner' | 'Hardware Store' | 'Tradesperson'>('Contractor');
  const [featured, setFeatured] = useState(false);
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const categoryLabels: Record<MaterialCategory, string> = {
      all: 'General Construction',
      tiles: 'Tiles & Pavers',
      lumber: 'Lumber & Woodwork',
      plumbing: 'Plumbing & Fixtures',
      electrical: 'Electrical & Lighting',
      'doors-windows': 'Doors & Windows',
      'paint-finishing': 'Paints & Finishing',
      masonry: 'Cement & Masonry',
    };

    const visualMap: Record<MaterialCategory, MaterialListing['visualType']> = {
      all: 'tiles',
      tiles: 'tiles',
      lumber: 'lumber',
      plumbing: 'plumbing',
      electrical: 'electrical',
      'doors-windows': 'doors',
      'paint-finishing': 'paint',
      masonry: 'pavers',
    };

    const newListing: MaterialListing = {
      id: `sm-${Date.now().toString().slice(-4)}`,
      title,
      category,
      categoryLabel: categoryLabels[category] || 'Materials',
      brand: brand || undefined,
      dimensions: dimensions || 'Standard Construction Size',
      quantity: Number(quantity),
      unit,
      lotPrice: Number(lotPrice),
      pricePerUnit: sellingMode !== 'lot-only' ? Number(pricePerUnit) : undefined,
      sellingMode,
      condition,
      defectsNote: defectsNote || 'None reported. Leftover in good condition.',
      location,
      city,
      pickupNotes,
      sellerName,
      sellerRole,
      sellerTier: 'basic',
      featured,
      postedAgo: 'Just now',
      description: description || `Unused surplus from recent renovation project. Selling to clear yard space. Direct pickup in ${city}.`,
      viewsCount: 1,
      inquiriesCount: 0,
      visualType: visualMap[category] || 'tiles',
    };

    onAddListing(newListing);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <span>SobraMart Listing Creator</span>
              <span aria-hidden="true">·</span>
              <span>Free Basic Listing</span>
            </div>
            <h2 className="text-xl font-bold text-slate-950 font-display mt-0.5">
              List Your Surplus Construction Material
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
          {/* Item Title */}
          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              Material Title & Description <span className="text-amber-600">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Mariwasa 60x60 Glazed Porcelain Floor Tiles (Ivory Travertine)"
              className="w-full text-sm p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          {/* Category & Brand */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Material Category <span className="text-amber-600">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as MaterialCategory)}
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
              >
                <option value="tiles">Tiles & Pavers</option>
                <option value="lumber">Lumber & Woodwork</option>
                <option value="plumbing">Plumbing & Fixtures</option>
                <option value="electrical">Electrical & Lighting</option>
                <option value="doors-windows">Doors & Windows</option>
                <option value="paint-finishing">Paints & Finishing</option>
                <option value="masonry">Cement & Masonry</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Brand / Manufacturer (if known)
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g., Mariwasa, Boysen, Neltex, Phelps Dodge"
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>
          </div>

          {/* Construction Specific Listing Fields (Dimensions & Quantity) */}
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-3">
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-slate-700 uppercase">
              <Ruler className="w-3.5 h-3.5 text-amber-600" />
              <span>Construction Engineering Specifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Dimensions & Thickness <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="e.g., 60cm × 60cm × 9mm or 2x4x10ft"
                  className="w-full p-2 border border-slate-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Available Quantity <span className="text-amber-600">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full p-2 border border-slate-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-mono"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Selling Unit <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder="e.g., pcs, boxes, lengths, pails"
                  className="w-full p-2 border border-slate-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>
            </div>

            {/* Condition & Known Defects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Condition Rating <span className="text-amber-600">*</span>
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value as MaterialCondition)}
                  className="w-full p-2 border border-slate-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                >
                  <option value="Brand New Surplus">Brand New Surplus (Unopened/Pristine)</option>
                  <option value="Unopened Excess">Unopened Excess (Sealed Packaging)</option>
                  <option value="Clean Project Leftover">Clean Project Leftover (Dry stored)</option>
                  <option value="Minor Cosmetic Flaw">Minor Cosmetic Flaw (Described below)</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Known Defects or Storage Details
                </label>
                <input
                  type="text"
                  value={defectsNote}
                  onChange={(e) => setDefectsNote(e.target.value)}
                  placeholder="e.g., 2 tiles chipped at corner, stored indoors dry"
                  className="w-full p-2 border border-slate-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Pricing: Distinction between price per piece and entire lot (PDF Section 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Total Lot Asking Price (₱) <span className="text-amber-600">*</span>
              </label>
              <input
                type="number"
                required
                min="0"
                value={lotPrice}
                onChange={(e) => setLotPrice(Number(e.target.value))}
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-mono text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Selling Arrangement
              </label>
              <select
                value={sellingMode}
                onChange={(e) => setSellingMode(e.target.value as any)}
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
              >
                <option value="both">Both (Lot or Per Piece)</option>
                <option value="lot-only">Take All / Full Lot Only</option>
                <option value="piece-only">Per Piece Only</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Price Per Piece / Unit (₱)
              </label>
              <input
                type="number"
                disabled={sellingMode === 'lot-only'}
                value={pricePerUnit || ''}
                onChange={(e) => setPricePerUnit(e.target.value ? Number(e.target.value) : undefined)}
                placeholder="Optional piece price"
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-mono text-sm disabled:bg-slate-100 disabled:text-slate-400"
              />
            </div>
          </div>

          {/* Location & Pickup Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                City / Municipality <span className="text-amber-600">*</span>
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
              >
                <option value="Quezon City">Quezon City</option>
                <option value="Pasig">Pasig</option>
                <option value="Mandaluyong">Mandaluyong</option>
                <option value="Taguig">Taguig</option>
                <option value="Marikina">Marikina</option>
                <option value="Parañaque">Parañaque</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Barangay & General Area <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Barangay Kapitolyo, Pasig"
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>
          </div>

          {/* Pickup Details */}
          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              Pickup & Vehicle Access Notes
            </label>
            <input
              type="text"
              value={pickupNotes}
              onChange={(e) => setPickupNotes(e.target.value)}
              placeholder="e.g., Ground level garage loading, helpers available to lift"
              className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          {/* Seller Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Your Name / Business Name <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                required
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Seller Segment <span className="text-amber-600">*</span>
              </label>
              <select
                value={sellerRole}
                onChange={(e) => setSellerRole(e.target.value as any)}
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
              >
                <option value="Contractor">Small Contractor / Builder</option>
                <option value="Homeowner">Homeowner with Renovation Leftovers</option>
                <option value="Hardware Store">Hardware Store with Excess Inventory</option>
                <option value="Tradesperson">Independent Tradesperson / Plumber / Electrician</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              Project Background & Reason for Surplus
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Surplus from our townhouse project. Client changed tile color at last minute, leaving 8 unopened cartons..."
              className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          {/* Featured Boost Checkbox (₱99 for 7 days) */}
          <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="boost-listing"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
              />
              <label htmlFor="boost-listing" className="text-xs text-amber-950 font-medium cursor-pointer">
                <strong>Upgrade to Featured Listing</strong> (₱99 for 7 days) · Top placement & 4× more buyer inquiries
              </label>
            </div>
            <span className="text-[11px] font-mono text-amber-800 bg-amber-100 px-2 py-0.5 rounded-xs">
              {featured ? '₱99 applied' : 'Free ₱0'}
            </span>
          </div>

          {/* Submit Footer */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              0% transaction commission · Buyer pays direct at pickup
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Publish Listing</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
