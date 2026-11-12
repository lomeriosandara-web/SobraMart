import React, { useState } from 'react';
import { X, Layers, Plus, Check } from 'lucide-react';
import { MaterialRequest, MaterialCategory } from '../types';

interface MaterialRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRequest: (request: MaterialRequest) => void;
}

export const MaterialRequestModal: React.FC<MaterialRequestModalProps> = ({
  isOpen,
  onClose,
  onAddRequest,
}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<MaterialCategory>('tiles');
  const [specsNeeded, setSpecsNeeded] = useState('');
  const [quantityNeeded, setQuantityNeeded] = useState('');
  const [targetBudget, setTargetBudget] = useState('');
  const [city, setCity] = useState('Pasig');
  const [location, setLocation] = useState('Kapitolyo / Ortigas, Pasig');
  const [buyerName, setBuyerName] = useState('Archt. Gabriel Lim');
  const [buyerRole, setBuyerRole] = useState<'Contractor' | 'Homeowner' | 'Tradesperson'>('Contractor');

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

    const newRequest: MaterialRequest = {
      id: `req-${Date.now().toString().slice(-4)}`,
      title,
      category,
      categoryLabel: categoryLabels[category] || 'Materials',
      specsNeeded,
      quantityNeeded,
      targetBudget,
      location,
      city,
      buyerName,
      buyerRole,
      postedAgo: 'Just now',
      status: 'Open',
      responsesCount: 0,
    };

    onAddRequest(newRequest);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full max-h-[90vh] overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <span>Material Request Board</span>
              <span aria-hidden="true">·</span>
              <span>Crowdsource Surplus</span>
            </div>
            <h2 className="text-xl font-bold text-slate-950 font-display mt-0.5">
              Post Material Request (Wanted)
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
          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              What material are you looking for? <span className="text-amber-600">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Looking for 15-20 pcs 60x60 Mariwasa Beige tiles"
              className="w-full text-sm p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Category <span className="text-amber-600">*</span>
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
                Quantity Needed <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                required
                value={quantityNeeded}
                onChange={(e) => setQuantityNeeded(e.target.value)}
                placeholder="e.g., 18 pcs or 4 sheets"
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              Required Dimensions & Specifications <span className="text-amber-600">*</span>
            </label>
            <input
              type="text"
              required
              value={specsNeeded}
              onChange={(e) => setSpecsNeeded(e.target.value)}
              placeholder="e.g., 60cm × 60cm, glazed porcelain, beige or cream tone"
              className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Target Budget (Total or Per Unit) <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                required
                value={targetBudget}
                onChange={(e) => setTargetBudget(e.target.value)}
                placeholder="e.g., ₱120 - ₱150 / pc"
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                City / Location <span className="text-amber-600">*</span>
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
              >
                <option value="Pasig">Pasig</option>
                <option value="Quezon City">Quezon City</option>
                <option value="Mandaluyong">Mandaluyong</option>
                <option value="Taguig">Taguig</option>
                <option value="Marikina">Marikina</option>
                <option value="Parañaque">Parañaque</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Your Name <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                required
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Your Role <span className="text-amber-600">*</span>
              </label>
              <select
                value={buyerRole}
                onChange={(e) => setBuyerRole(e.target.value as any)}
                className="w-full p-2.5 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
              >
                <option value="Contractor">Contractor / Builder</option>
                <option value="Homeowner">Homeowner</option>
                <option value="Tradesperson">Tradesperson (Plumber/Carpenter)</option>
              </select>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Sellers in {city} will be alerted
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
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-xs transition-colors cursor-pointer"
              >
                Broadcast Request
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
