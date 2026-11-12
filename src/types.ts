export type MaterialCategory = 
  | 'all'
  | 'tiles'
  | 'lumber'
  | 'plumbing'
  | 'electrical'
  | 'doors-windows'
  | 'paint-finishing'
  | 'masonry';

export type MaterialCondition = 
  | 'Brand New Surplus'
  | 'Unopened Excess'
  | 'Minor Cosmetic Flaw'
  | 'Clean Project Leftover';

export interface MaterialListing {
  id: string;
  title: string;
  category: MaterialCategory;
  categoryLabel: string;
  brand?: string;
  dimensions: string;
  quantity: number;
  unit: string;
  pricePerUnit?: number;
  lotPrice: number;
  sellingMode: 'both' | 'lot-only' | 'piece-only';
  condition: MaterialCondition;
  defectsNote?: string;
  location: string;
  city: string;
  pickupNotes: string;
  sellerName: string;
  sellerRole: 'Contractor' | 'Homeowner' | 'Hardware Store' | 'Tradesperson';
  sellerTier: 'basic' | 'pro';
  featured: boolean;
  postedAgo: string;
  description: string;
  viewsCount: number;
  inquiriesCount: number;
  visualType: 'tiles' | 'lumber' | 'plumbing' | 'electrical' | 'doors' | 'paint' | 'cement' | 'pavers';
  colorTone?: string;
}

export interface MaterialRequest {
  id: string;
  title: string;
  category: MaterialCategory;
  categoryLabel: string;
  specsNeeded: string;
  quantityNeeded: string;
  targetBudget: string;
  location: string;
  city: string;
  buyerName: string;
  buyerRole: 'Contractor' | 'Homeowner' | 'Tradesperson';
  postedAgo: string;
  status: 'Open' | 'Matching Offers';
  responsesCount: number;
}

export interface TargetCustomerSegment {
  id: string;
  title: string;
  subTitle: string;
  iconName: string;
  userType: 'Seller' | 'Buyer' | 'Both';
  painPoint: string;
  howSobraMartHelps: string;
  typicalItems: string[];
  financialBenefit: string;
  realScenarioQuote: {
    quote: string;
    author: string;
    detail: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceTag: string;
  cadence: string;
  description: string;
  highlighted: boolean;
  ctaText: string;
  features: string[];
  bestFor: string;
}
