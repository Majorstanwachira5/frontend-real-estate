import { Property } from '@/types';

export const MOCK_PROPERTIES: Property[] = [
  // AGENCY 1: Premier Realty (Agents: John Kamau, Alice Wairimu)
  {
    id: '1',
    title: 'Luxury 4 Bedroom Villa in Karen',
    description: 'Expansive family home sitting on 0.5 acres in the heart of Karen. Features a lush garden, swimming pool, DSQ for 2, and high-end finishes. Perfect for diplomats or expatriates looking for serenity.',
    price: 85000000,
    currency: 'KES',
    type: 'SALE',
    category: 'HOUSE',
    location: {
      address: 'Miotoni Road',
      city: 'Karen',
      county: 'Nairobi',
    },
    features: {
      bedrooms: 4,
      bathrooms: 4,
      area: 4500,
      areaUnit: 'SQFT',
      parkingSpots: 4,
    },
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a1',
    agent: {
      id: 'a1',
      firstName: 'John',
      lastName: 'Kamau',
      email: 'john@premierrealty.co.ke',
      isVerified: true,
      agencyName: 'Premier Realty'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Modern 2BR Apartment in Kilimani',
    description: 'Chic urban living near Yaya Centre. This apartment offers a rooftop gym, heated pool, and 24-hour security. Ideal for young professionals or investment.',
    price: 13500000,
    currency: 'KES',
    type: 'SALE',
    category: 'APARTMENT',
    location: {
      address: 'Kindaruma Road',
      city: 'Kilimani',
      county: 'Nairobi',
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      area: 110,
      areaUnit: 'SQM',
      parkingSpots: 1,
    },
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a1',
    agent: {
      id: 'a1',
      firstName: 'John',
      lastName: 'Kamau',
      email: 'john@premierrealty.co.ke',
      isVerified: true,
      agencyName: 'Premier Realty'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Prime 1/8th Acre Plot in Ruiru',
    description: 'Ready to build plot in a gated community. Water and electricity on site. Located 2km from Thika Superhighway.',
    price: 2500000,
    currency: 'KES',
    type: 'SALE',
    category: 'LAND',
    location: {
      address: 'Mugutha',
      city: 'Ruiru',
      county: 'Kiambu',
    },
    features: {
      area: 0.125,
      areaUnit: 'ACRES'
    },
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a2',
    agent: {
      id: 'a2',
      firstName: 'Alice',
      lastName: 'Wairimu',
      email: 'alice@premierrealty.co.ke',
      isVerified: true,
      agencyName: 'Premier Realty'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Classic Colonial Bungalow in Muthaiga',
    description: 'A rare find in Old Muthaiga. 5 bedrooms, wooden floors, mature garden on 1 acre. Needs some renovation but oozes character.',
    price: 180000000,
    currency: 'KES',
    type: 'SALE',
    category: 'HOUSE',
    location: {
      address: 'Limuru Road',
      city: 'Muthaiga',
      county: 'Nairobi',
    },
    features: {
      bedrooms: 5,
      bathrooms: 3,
      area: 6000,
      areaUnit: 'SQFT',
      parkingSpots: 6,
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a2',
    agent: {
      id: 'a2',
      firstName: 'Alice',
      lastName: 'Wairimu',
      email: 'alice@premierrealty.co.ke',
      isVerified: true,
      agencyName: 'Premier Realty'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  // AGENCY 2: City Heights (Agent: David Ochieng)
  {
    id: '5',
    title: 'Fully Furnished 1BR in Westlands',
    description: 'Walk to work. Luxury furnished apartment suitable for expats. Includes housekeeping and internet.',
    price: 150000,
    currency: 'KES', // Monthly Rent
    type: 'RENT',
    category: 'APARTMENT',
    location: {
      address: 'Westlands Road',
      city: 'Westlands',
      county: 'Nairobi',
    },
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 75,
      areaUnit: 'SQM',
      parkingSpots: 1,
    },
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a3',
    agent: {
      id: 'a3',
      firstName: 'David',
      lastName: 'Ochieng',
      email: 'david@cityheights.co.ke',
      isVerified: true,
      agencyName: 'City Heights Agents'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Office Space in Upper Hill',
    description: 'Premium Grade A office space. 3000 sqft partitionable. High speed lifts, borehole, backup generator.',
    price: 120,
    currency: 'KES', // Price per sqft
    type: 'RENT',
    category: 'COMMERCIAL',
    location: {
      address: 'Hospital Road',
      city: 'Upper Hill',
      county: 'Nairobi',
    },
    features: {
      area: 3000,
      areaUnit: 'SQFT',
      parkingSpots: 5,
    },
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a3',
    agent: {
      id: 'a3',
      firstName: 'David',
      lastName: 'Ochieng',
      email: 'david@cityheights.co.ke',
      isVerified: true,
      agencyName: 'City Heights Agents'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Spacious Townhouse in Lavington',
    description: '4 Bedroom townhouse in a compound of 8. Private garden, quiet neighborhood.',
    price: 250000,
    currency: 'KES',
    type: 'RENT',
    category: 'HOUSE',
    location: {
      address: 'James Gichuru Road',
      city: 'Lavington',
      county: 'Nairobi',
    },
    features: {
      bedrooms: 4,
      bathrooms: 4,
      area: 300,
      areaUnit: 'SQM',
      parkingSpots: 2,
    },
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a1',
    agent: {
      id: 'a1',
      firstName: 'John',
      lastName: 'Kamau',
      email: 'john@premierrealty.co.ke',
      isVerified: true,
      agencyName: 'Premier Realty'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'Affordable 50x100 in Joska',
    description: 'Up and coming area. Great for speculation or future home. Clean title.',
    price: 850000,
    currency: 'KES',
    type: 'SALE',
    category: 'LAND',
    location: {
      address: 'Kangundo Road',
      city: 'Joska',
      county: 'Machakos',
    },
    features: {
      area: 0.125,
      areaUnit: 'ACRES'
    },
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a2',
    agent: {
      id: 'a2',
      firstName: 'Alice',
      lastName: 'Wairimu',
      email: 'alice@premierrealty.co.ke',
      isVerified: true,
      agencyName: 'Premier Realty'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '9',
    title: 'Swahili Style House in Malindi',
    description: 'Holiday home or Airbnb investment. 3 bedrooms, courtyard pool, authentic Lamu doors.',
    price: 22000000,
    currency: 'KES',
    type: 'SALE',
    category: 'HOUSE',
    location: {
      address: 'Casuarina',
      city: 'Malindi',
      county: 'Kilifi',
    },
    features: {
      bedrooms: 3,
      bathrooms: 3,
      area: 280,
      areaUnit: 'SQM',
      parkingSpots: 2,
    },
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a3',
    agent: {
      id: 'a3',
      firstName: 'David',
      lastName: 'Ochieng',
      email: 'david@cityheights.co.ke',
      isVerified: true,
      agencyName: 'City Heights Agents'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '10',
    title: 'Warehouse in Syokimau',
    description: '10,000 sqft warehouse space. High ceilings, 3 phase power, wide access for trailers.',
    price: 35,
    currency: 'KES', // Price per sqft
    type: 'RENT',
    category: 'COMMERCIAL',
    location: {
      address: 'Mombasa Road',
      city: 'Syokimau',
      county: 'Machakos',
    },
    features: {
      area: 10000,
      areaUnit: 'SQFT',
      parkingSpots: 10,
    },
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    ],
    status: 'AVAILABLE',
    agentId: 'a1',
    agent: {
      id: 'a1',
      firstName: 'John',
      lastName: 'Kamau',
      email: 'john@premierrealty.co.ke',
      isVerified: true,
      agencyName: 'Premier Realty'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];
