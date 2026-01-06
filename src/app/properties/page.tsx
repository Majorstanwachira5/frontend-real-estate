import { PropertyCard } from '@/components/ui/property-card';
import { PropertyFilters } from '@/components/features/property-filters';
import { MOCK_PROPERTIES } from '@/lib/mock-data';
import { Property } from '@/types';

export const metadata = {
  title: 'All Properties',
  description: 'Browse verified properties for sale and rent in Kenya.',
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const type = typeof params.type === 'string' ? params.type : undefined;
  const category = typeof params.category === 'string' ? params.category : undefined;

  // Filter properties (Mock Logic)
  let filteredProperties = [...MOCK_PROPERTIES];

  if (type) {
    filteredProperties = filteredProperties.filter(p => p.type === type);
  }

  if (category) {
    filteredProperties = filteredProperties.filter(p => p.category === category);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24">
             <PropertyFilters />
          </div>
        </aside>

        {/* Listings Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-dark">
              {type === 'SALE' ? 'Properties for Sale' : type === 'RENT' ? 'Properties for Rent' : 'All Properties'}
            </h1>
            <p className="text-neutral-gray">
              Showing {filteredProperties.length} verified listings
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <div key={property.id} className="h-full">
                  <PropertyCard
                    id={property.id}
                    title={property.title}
                    price={property.price}
                    currency={property.currency}
                    location={`${property.location.city}, ${property.location.county}`}
                    type={property.type}
                    bedrooms={property.features.bedrooms}
                    bathrooms={property.features.bathrooms}
                    area={property.features.area}
                    areaUnit={property.features.areaUnit}
                    imageUrl={property.images[0]}
                    agent={{
                      id: property.agent?.id || 'unknown',
                      name: `${property.agent?.firstName} ${property.agent?.lastName}`,
                      isVerified: property.agent?.isVerified ?? false,
                      agencyName: property.agent?.agencyName
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
             <div className="text-center py-12 bg-neutral-light rounded-lg border border-dashed border-neutral-gray/30">
               <p className="text-neutral-gray text-lg">No properties found matching your criteria.</p>
               <p className="text-sm text-neutral-gray/60 mt-2">Try adjusting your filters.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
