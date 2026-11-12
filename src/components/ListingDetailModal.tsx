import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Ruler, 
  Box, 
  ShieldCheck, 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Truck, 
  Calendar,
  Share2
} from 'lucide-react';
import { MaterialListing } from '../types';
import { MaterialVisual } from './MaterialVisual';

interface ListingDetailModalProps {
  listing: MaterialListing | null;
  onClose: () => void;
  onInquireSeller: (listing: MaterialListing, message: string) => void;
}

export const ListingDetailModal: React.FC<ListingDetailModalProps> = ({
  listing,
  onClose,
  onInquireSeller
}) => {
  if (!listing) return null;

  const [messageText, setMessageText] = useState(
    `Hello ${listing.sellerName}, is your "${listing.title}" still available? I can inspect and pick up in ${listing.city}.`
  );
  const [inquirySent, setInquirySent] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    onInquireSeller(listing, messageText);
    setInquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="text-amber-700 font-semibold">{listing.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>Listing ID: {listing.id}</span>
              <span aria-hidden="true">·</span>
              <span>Posted {listing.postedAgo}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-950 font-display mt-0.5">
              {listing.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Visual Showcase */}
          <div className="rounded-lg overflow-hidden border border-slate-200">
            <MaterialVisual
              type={listing.visualType}
              title={listing.title}
              dimensions={listing.dimensions}
              className="h-56"
              showStudioBadge={true}
            />
          </div>

          {/* Pricing Highlight Box */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-mono text-slate-500 block">Total Lot Price</span>
              <div className="text-3xl font-extrabold font-mono text-slate-950 tabular-nums">
                ₱{listing.lotPrice.toLocaleString()}
              </div>
              <span className="text-xs text-slate-500">
                Covers entire available lot of {listing.quantity} {listing.unit}
              </span>
            </div>

            {listing.pricePerUnit && (
              <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-slate-200 pt-3 sm:pt-0 sm:pl-6">
                <span className="text-xs uppercase font-mono text-slate-500 block">Or Per Piece / Unit</span>
                <div className="text-xl font-bold font-mono text-amber-700 tabular-nums">
                  ₱{listing.pricePerUnit} / unit
                </div>
                <span className="text-xs text-slate-500">
                  Seller accepts piece-by-piece purchase
                </span>
              </div>
            )}
          </div>

          {/* Civil Engineering Specifications Table (PDF Section 3 & 8) */}
          <div>
            <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider font-mono mb-2.5">
              Civil Engineering Specifications & Material Details
            </h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                <div className="divide-y divide-slate-100">
                  <div className="p-3 flex justify-between bg-white">
                    <span className="text-slate-500 font-mono">Dimensions / Gauge:</span>
                    <span className="font-semibold text-slate-900 text-right">{listing.dimensions}</span>
                  </div>
                  <div className="p-3 flex justify-between bg-slate-50/50">
                    <span className="text-slate-500 font-mono">Quantity & Unit:</span>
                    <span className="font-semibold text-slate-900 text-right">{listing.quantity} {listing.unit}</span>
                  </div>
                  <div className="p-3 flex justify-between bg-white">
                    <span className="text-slate-500 font-mono">Manufacturer / Brand:</span>
                    <span className="font-semibold text-slate-900 text-right">{listing.brand || 'Unspecified Trade Grade'}</span>
                  </div>
                  <div className="p-3 flex justify-between bg-slate-50/50">
                    <span className="text-slate-500 font-mono">Material Condition:</span>
                    <span className="font-semibold text-emerald-700 text-right">{listing.condition}</span>
                  </div>
                </div>

                <div className="divide-y divide-slate-100">
                  <div className="p-3 flex justify-between bg-white">
                    <span className="text-slate-500 font-mono">Pickup Location:</span>
                    <span className="font-semibold text-slate-900 text-right">{listing.location}</span>
                  </div>
                  <div className="p-3 flex justify-between bg-slate-50/50">
                    <span className="text-slate-500 font-mono">Loading Arrangement:</span>
                    <span className="font-semibold text-slate-900 text-right">{listing.pickupNotes}</span>
                  </div>
                  <div className="p-3 flex justify-between bg-white">
                    <span className="text-slate-500 font-mono">Defects & Storage Note:</span>
                    <span className="font-semibold text-slate-900 text-right">{listing.defectsNote || 'None reported'}</span>
                  </div>
                  <div className="p-3 flex justify-between bg-slate-50/50">
                    <span className="text-slate-500 font-mono">Commission Cut:</span>
                    <span className="font-semibold text-amber-700 text-right">0% (Direct Buyer-Seller)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-500 mb-1.5">
              Project Origin & Seller Notes
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              {listing.description}
            </p>
          </div>

          {/* Mandatory Civil Engineering Disclaimer (from PDF Section 1 & 3) */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3.5 text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">SobraMart Buyer Inspection Advisory:</span>
              <p className="mt-0.5 text-amber-800 leading-relaxed">
                Listings do not constitute certification that a material is suitable for a particular construction application. 
                Buyers are encouraged to physically inspect materials, verify dimensions with a tape measure, and check condition before completing payment.
              </p>
            </div>
          </div>

          {/* Seller Profile & Direct Inquire Action */}
          <div className="border-t border-slate-200 pt-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center font-mono">
                  {listing.sellerName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 text-sm">{listing.sellerName}</span>
                    {listing.sellerTier === 'pro' && (
                      <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded-xs flex items-center gap-0.5 font-mono">
                        <ShieldCheck className="w-3 h-3 text-amber-600" />
                        SELLER PRO
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500">{listing.sellerRole} · {listing.city}</span>
                </div>
              </div>

              <div>
                {showPhone ? (
                  <span className="font-mono text-sm font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-300">
                    +63 (917) 554-0829
                  </span>
                ) : (
                  <button
                    onClick={() => setShowPhone(true)}
                    className="text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-md border border-slate-300 font-medium transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Show Direct Number</span>
                  </button>
                )}
              </div>
            </div>

            {/* Direct inquiry form */}
            {inquirySent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-emerald-950">Inquiry Sent to {listing.sellerName}!</h4>
                <p className="text-xs text-emerald-800 mt-1">
                  The seller was notified via SMS / push notification. They will contact you to coordinate pickup at {listing.location}.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-3 text-xs text-emerald-700 underline font-medium hover:text-emerald-900"
                >
                  Send another inquiry message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-3">
                <label className="block text-xs font-semibold text-slate-700 font-mono uppercase">
                  Send Message to Seller (Arrange Pickup & Inspection)
                </label>
                <textarea
                  rows={2}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="w-full text-xs p-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-slate-50/50"
                  required
                />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Direct arrangement · Cash / G-Cash on pickup
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send Inquiry to Seller</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
