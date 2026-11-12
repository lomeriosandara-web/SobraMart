import React, { useState } from 'react';
import { X, CheckCircle2, Send, Mail, UserPlus, PhoneCall, Shield } from 'lucide-react';
import { MaterialRequest } from '../types';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, onSuccess }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'Contractor' | 'Homeowner' | 'Hardware Store' | 'Tradesperson'>('Contractor');
  const [city, setCity] = useState('Quezon City');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(`Welcome to SobraMart Pilot, ${name}! Your ${role} profile for ${city} has been registered.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-md w-full p-5 sm:p-6 text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
          <div>
            <span className="text-[10px] font-mono uppercase text-amber-700 font-bold">Metro Manila Pilot</span>
            <h3 className="text-lg font-bold text-slate-950 font-display mt-0.5">
              Sign Up for SobraMart Access
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block font-semibold text-slate-800 mb-1">Your Full Name / Company Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Engr. Roberto Cruz"
              className="w-full p-2.5 border border-slate-200 rounded-md focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="roberto@cruzconstruction.ph"
              className="w-full p-2.5 border border-slate-200 rounded-md focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">Mobile / WhatsApp Number</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0917 123 4567"
              className="w-full p-2.5 border border-slate-200 rounded-md focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">Primary Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full p-2.5 border border-slate-200 rounded-md bg-white focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="Contractor">Small Contractor</option>
                <option value="Homeowner">Homeowner / DIY</option>
                <option value="Hardware Store">Hardware Store</option>
                <option value="Tradesperson">Tradesperson</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">City Location</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-md bg-white focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="Quezon City">Quezon City</option>
                <option value="Pasig">Pasig</option>
                <option value="Mandaluyong">Mandaluyong</option>
                <option value="Taguig">Taguig</option>
                <option value="Marikina">Marikina</option>
                <option value="Parañaque">Parañaque</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-md shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-xs"
            >
              <UserPlus className="w-4 h-4" />
              <span>Create Free Account</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center">
            Free forever for basic listings · Zero transaction commissions
          </p>
        </form>
      </div>
    </div>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSuccess }) => {
  if (!isOpen) return null;

  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Pilot Hardware Store Inquiries');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(`Thank you ${contactName}! The SobraMart founders will reply to ${email} within 24 hours.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-md w-full p-5 sm:p-6 text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
          <div>
            <span className="text-[10px] font-mono uppercase text-amber-700 font-bold">Support & Partnerships</span>
            <h3 className="text-lg font-bold text-slate-950 font-display mt-0.5">
              Contact the SobraMart Team
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block font-semibold text-slate-800 mb-1">Your Name</label>
            <input
              type="text"
              required
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="e.g., Vicente Chua"
              className="w-full p-2.5 border border-slate-200 rounded-md focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vicente@hardware.ph"
              className="w-full p-2.5 border border-slate-200 rounded-md focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">Subject / Inquiry Type</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-md bg-white focus:ring-2 focus:ring-amber-500/20"
            >
              <option value="Pilot Hardware Store Inquiries">Hardware Store Liquidation Program</option>
              <option value="Contractor Bulk Integration">Contractor Bulk Inventory Listing</option>
              <option value="Civil Engineering Category Feedback">Civil Engineering Spec Suggestions</option>
              <option value="Listing Moderation / Report">Report Inaccurate Listing Specs</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">Message</label>
            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your surplus materials or inquiry..."
              className="w-full p-2.5 border border-slate-200 rounded-md focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-md shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-xs"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface OfferMatchModalProps {
  request: MaterialRequest | null;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const OfferMatchModal: React.FC<OfferMatchModalProps> = ({ request, onClose, onSuccess }) => {
  if (!request) return null;

  const [sellerName, setSellerName] = useState('');
  const [offerPrice, setOfferPrice] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(`Offer submitted! ${request.buyerName} has been notified about your matching materials in ${request.city}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-md w-full p-5 sm:p-6 text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
          <div>
            <span className="text-[10px] font-mono uppercase text-amber-700 font-bold">Match Request</span>
            <h3 className="text-base font-bold text-slate-950 font-display mt-0.5">
              Offer Surplus to {request.buyerName}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-4 text-xs font-mono space-y-1">
          <div><span className="text-slate-400">ITEM:</span> {request.title}</div>
          <div><span className="text-slate-400">SPECS:</span> {request.specsNeeded}</div>
          <div><span className="text-slate-400">BUDGET:</span> {request.targetBudget}</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block font-semibold text-slate-800 mb-1">Your Name</label>
            <input
              type="text"
              required
              value={sellerName}
              onChange={(e) => setSellerName(e.target.value)}
              placeholder="e.g., Engr. Dante"
              className="w-full p-2.5 border border-slate-200 rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">Your Asking Price (₱)</label>
            <input
              type="text"
              required
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              placeholder="e.g., ₱130 / piece or ₱2,500 lot"
              className="w-full p-2.5 border border-slate-200 rounded-md font-mono"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">Material Condition & Quantity You Have</label>
            <textarea
              rows={2}
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="e.g., I have 18 pcs unopened in original box at Kapitolyo garage."
              className="w-full p-2.5 border border-slate-200 rounded-md"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-md transition-colors text-xs cursor-pointer"
            >
              Submit Matching Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
