import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarketplaceView } from './components/MarketplaceView';
import { FeaturesSection } from './components/FeaturesSection';
import { TargetCustomersSection } from './components/TargetCustomersSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { VisualsShowcase } from './components/VisualsShowcase';
import { Footer } from './components/Footer';
import { ListingDetailModal } from './components/ListingDetailModal';
import { PostListingModal } from './components/PostListingModal';
import { MaterialRequestModal } from './components/MaterialRequestModal';
import { SignupModal, ContactModal, OfferMatchModal } from './components/CallToActionModals';
import { INITIAL_LISTINGS, INITIAL_REQUESTS } from './data/mockData';
import { MaterialListing, MaterialRequest } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [listings, setListings] = useState<MaterialListing[]>(INITIAL_LISTINGS);
  const [requests, setRequests] = useState<MaterialRequest[]>(INITIAL_REQUESTS);
  
  // Modals state
  const [selectedListing, setSelectedListing] = useState<MaterialListing | null>(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [matchingRequest, setMatchingRequest] = useState<MaterialRequest | null>(null);

  // Active section tracking
  const [activeSection, setActiveSection] = useState('home');

  // Interactive feedback toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleAddListing = (newListing: MaterialListing) => {
    setListings([newListing, ...listings]);
    showToast(`Success! Your listing "${newListing.title}" has been published to the marketplace.`);
  };

  const handleAddRequest = (newRequest: MaterialRequest) => {
    setRequests([newRequest, ...requests]);
    showToast(`Request posted! Contractors in ${newRequest.city} will be alerted.`);
  };

  const handleInquireSeller = (listing: MaterialListing, message: string) => {
    showToast(`Inquiry sent to ${listing.sellerName} for "${listing.title}".`);
  };

  const handleSelectPlan = (planId: string) => {
    if (planId === 'seller-pro') {
      showToast('Seller Pro registration selected! Complete your business profile below.');
      setIsSignupModalOpen(true);
    } else if (planId === 'featured') {
      showToast('Select one of your listings or post a new material to apply the ₱99 7-day boost.');
      setIsPostModalOpen(true);
    }
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl border border-slate-700 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header complying with Top Bar Contract */}
      <Header
        onOpenPostModal={() => setIsPostModalOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero & Tagline */}
        <Hero
          onExploreMarketplace={() => scrollTo('marketplace')}
          onOpenPostModal={() => setIsPostModalOpen(true)}
          onOpenSignupModal={() => setIsSignupModalOpen(true)}
        />

        {/* Section 2: Live Marketplace Engine & Material Request Board */}
        <MarketplaceView
          listings={listings}
          requests={requests}
          onSelectListing={(listing) => setSelectedListing(listing)}
          onOpenPostModal={() => setIsPostModalOpen(true)}
          onOpenRequestModal={() => setIsRequestModalOpen(true)}
          onOpenOfferMatchModal={(req) => setMatchingRequest(req)}
        />

        {/* Section 3: Product/Service Description & Core Architectural Features */}
        <FeaturesSection
          onExplore={() => scrollTo('marketplace')}
        />

        {/* Section 4: Target Customers & Stakeholders */}
        <TargetCustomersSection
          onListMaterial={() => setIsPostModalOpen(true)}
        />

        {/* Section 5: How It Works & Step-by-Step Interactive Demo */}
        <HowItWorksSection
          onStartAction={() => scrollTo('marketplace')}
        />

        {/* Section 6: Revenue Model, Transparent Pricing & ROI Calculator */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onOpenPostModal={() => setIsPostModalOpen(true)}
        />

        {/* Section 7: Visuals, Mobile Device Mockups & Spec Anatomy */}
        <VisualsShowcase />
      </main>

      {/* Footer with alert subscription, navigation, and civil engineering disclaimer */}
      <Footer
        onOpenContact={() => setIsContactModalOpen(true)}
        onOpenSignup={() => setIsSignupModalOpen(true)}
        onOpenPostListing={() => setIsPostModalOpen(true)}
        onShowToast={showToast}
      />

      {/* Modals */}
      <ListingDetailModal
        listing={selectedListing}
        onClose={() => setSelectedListing(null)}
        onInquireSeller={handleInquireSeller}
      />

      <PostListingModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onAddListing={handleAddListing}
      />

      <MaterialRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        onAddRequest={handleAddRequest}
      />

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSuccess={showToast}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSuccess={showToast}
      />

      <OfferMatchModal
        request={matchingRequest}
        onClose={() => setMatchingRequest(null)}
        onSuccess={showToast}
      />
    </div>
  );
}
