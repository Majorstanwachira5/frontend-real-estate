import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, Phone, Mail, Building, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PropertyCard } from '@/components/ui/property-card';
import { MOCK_PROPERTIES } from '@/lib/mock-data';

// Force dynamic because we are using mock data lookup which acts like dynamic fetch
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = MOCK_PROPERTIES.find(p => p.agentId === id);
  const agent = property?.agent;

  if (!agent) return { title: 'Agent Not Found' };
  
  return {
    title: `${agent.firstName} ${agent.lastName} - Verified Agent | Smart Estate Kenya`,
    description: `Contact ${agent.firstName} ${agent.lastName} for verified property listings in Kenya.`,
  };
}

export default async function AgentProfilePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  
  // Find agent via property link (Mock limitation)
  const agentProperties = MOCK_PROPERTIES.filter(p => p.agentId === id);
  const agent = agentProperties.length > 0 ? agentProperties[0].agent : null;

  if (!agent) {
    // In real app we'd fetch agent by ID separately
    notFound();
  }

  return (
     <div className="container mx-auto px-4 py-8">
      {/* Back */}
      <div className="mb-6">
        <Link href="/properties">
          <Button variant="ghost" size="sm" className="pl-0 hover:bg-transparent hover:text-primary">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Properties
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Agent Profile Card */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg border border-neutral-gray/10 shadow-sm sticky top-24">
             <div className="flex flex-col items-center text-center">
                {agent.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={agent.avatarUrl} 
                    alt={agent.firstName} 
                    className="h-24 w-24 rounded-full object-cover mb-4 border-2 border-neutral-light"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl mb-4">
                    {agent.firstName[0]}{agent.lastName[0]}
                  </div>
                )}
                
                <h1 className="text-xl font-bold text-neutral-dark mb-1">
                  {agent.firstName} {agent.lastName}
                </h1>
                <p className="text-sm text-neutral-gray mb-4">{agent.agencyName || 'Independent Agent'}</p>
                
                {agent.isVerified && (
                  <div className="flex items-center gap-1 bg-green-50 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-6">
                    <ShieldCheck className="h-3 w-3" />
                    Verified Agent
                  </div>
                )}
                
                <div className="w-full space-y-3 text-sm text-neutral-gray text-left border-t border-neutral-gray/10 pt-6">
                   <div className="flex items-center gap-2">
                     <Building className="h-4 w-4 text-neutral-dark" />
                     <span>{agent.agencyName || 'Independent'}</span>
                   </div>
                   {agent.phone && (
                     <div className="flex items-center gap-2">
                       <Phone className="h-4 w-4 text-neutral-dark" />
                       <span>{agent.phone}</span>
                     </div>
                   )}
                   <div className="flex items-center gap-2">
                     <Mail className="h-4 w-4 text-neutral-dark" />
                     <span className="truncate">{agent.email}</span>
                   </div>
                </div>
                
                <div className="mt-8 w-full">
                  <a 
                    href={`https://wa.me/${agent.phone?.replace(/[^0-9]/g, '') || '254700000000'}?text=Hi ${agent.firstName}, I saw your profile on Smart Estate Kenya`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none">
                     Contact via WhatsApp
                   </Button>
                  </a>
                </div>
             </div>
          </div>
        </div>

        {/* Listings */}
        <div className="md:col-span-3">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-neutral-dark mb-1">Active Listings</h2>
            <p className="text-neutral-gray text-sm">
              {agentProperties.length} properties listed by {agent.firstName}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {agentProperties.map((property) => (
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
        </div>
      </div>
     </div>
  );
}
