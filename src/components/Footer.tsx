import React, { useState } from 'react';
import { Mail, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenSignup: () => void;
  onOpenPostListing: () => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenSignup,
  onOpenPostListing,
  onShowToast
}) => {
  const [alertEmail, setAlertEmail] = useState('');
  const [alertCity, setAlertCity] = useState('Pasig');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    onShowToast(`Subscribed! You will receive weekly surplus inventory digests for ${alertCity}.`);
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      {/* Alert Subscription Banner */}
      <div className="border-b border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold tracking-wider">
                SURPLUS ALERTS NEWSLETTER
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                Get Weekly Local Surplus Drops in Your City
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                Be the first to know when contractors release unopened tile batches, lumber cutoffs, or discounted plumbing fixtures in your community.
              </p>
            </div>

            {/* Subscribe Form */}
            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Check your inbox for the weekly Metro Manila digest.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <select
                    value={alertCity}
                    onChange={(e) => setAlertCity(e.target.value)}
                    aria-label="Select city for surplus alerts"
                    className="py-2.5 px-3 text-xs bg-slate-950 border border-slate-700 rounded-md text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="Pasig">Pasig City</option>
                    <option value="Quezon City">Quezon City</option>
                    <option value="Mandaluyong">Mandaluyong</option>
                    <option value="Taguig">Taguig / BGC</option>
                    <option value="Marikina">Marikina</option>
                  </select>

                  <input
                    type="email"
                    required
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="py-2.5 px-3.5 text-xs bg-slate-950 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 min-w-[220px]"
                  />

                  <button
                    type="submit"
                    className="py-2.5 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Civil Engineering Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-amber-500 rounded-xs" />
              <span className="text-xl font-bold font-display text-white tracking-tight">SobraMart</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              “Don’t let it pile up. Put your surplus up for sale.”
              Connecting contractors, homeowners, and hardware stores to recover value from excess materials.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              Pilot Coverage: Pasig, Quezon City, Mandaluyong, Taguig & Marikina.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-2 text-xs">
            <div className="font-bold text-white font-mono uppercase text-[11px]">Platform</div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#marketplace" className="hover:text-amber-400 transition-colors">Browse Materials</a></li>
              <li><a href="#features" className="hover:text-amber-400 transition-colors">Core Features</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Community & Safety */}
          <div className="md:col-span-2 space-y-2 text-xs">
            <div className="font-bold text-white font-mono uppercase text-[11px]">Community</div>
            <ul className="space-y-1.5 text-slate-400">
              <li><button onClick={onOpenPostListing} className="hover:text-amber-400 transition-colors text-left">Post Free Listing</button></li>
              <li><button onClick={onOpenSignup} className="hover:text-amber-400 transition-colors text-left">Join Pilot Launch</button></li>
              <li><button onClick={onOpenContact} className="hover:text-amber-400 transition-colors text-left">Contact Team</button></li>
            </ul>
          </div>

          {/* Statutory Civil Engineering Disclaimer */}
          <div className="md:col-span-3 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono font-bold">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Safety & Inspection Notice</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Listings will not constitute certification that a material is suitable for a particular construction application. Buyers are required to physically inspect specifications, dimensions, and structural conditions prior to completing transactions.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} SobraMart. All rights reserved. Built as an online construction materials marketplace.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>0% Commission Model</span>
            <span aria-hidden="true">·</span>
            <span>Direct Cash on Pickup</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
