export interface Agent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatarUrl?: string; // Optional
  agencyName?: string;
  isVerified: boolean;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string; // 'KES' or 'USD'
  type: 'SALE' | 'RENT'; // Listing type
  category: 'APARTMENT' | 'HOUSE' | 'LAND' | 'COMMERCIAL' | 'OFFICE';
  location: {
    address: string;
    city: string;
    county: string;
    latitude?: number;
    longitude?: number;
  };
  features: {
    bedrooms?: number;
    bathrooms?: number;
    area?: number;
    areaUnit?: string; // 'SQFT' | 'ACRES' | 'SQM'
    parkingSpots?: number;
  };
  images: string[];
  status: 'AVAILABLE' | 'SOLD' | 'RENTED';
  agentId: string;
  agent?: Agent;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface PropertyFilterParams {
  type?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  bedrooms?: number;
}
