import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, MapPin, Bed, Bath, Square, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InquiryForm } from '@/components/features/inquiry-form';
import { MOCK_PROPERTIES } from '@/lib/mock-data';

// Force dynamic because we are using mock data lookup which acts like dynamic fetch
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = MOCK_PROPERTIES.find(p => p.id === id);
  if (!property) return { title: 'Property Not Found' };
  
  return {
    title: `${property.title} | Smart Estate Kenya`,
    description: property.description.substring(0, 160),
    openGraph: {
      images: [property.images[0]],
    }
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const property = MOCK_PROPERTIES.find(p => p.id === id);

  if (!property) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: property.currency,
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb / Back */}
      <div className="mb-6">
        <Link href="/properties">
          <Button variant="ghost" size="sm" className="pl-0 hover:bg-transparent hover:text-primary">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Properties
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Gallery placeholder */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-light border border-neutral-gray/10">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 800px"
            />
            <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded text-sm text-white font-medium uppercase backdrop-blur-sm">
              {property.type}
            </div>
          </div>
          
          {/* Title & Price */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
             <div>
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-2">{property.title}</h1>
                <div className="flex items-center text-neutral-gray text-sm md:text-base">
                   <MapPin className="h-4 w-4 mr-1" />
                   {property.location.address}, {property.location.city}, {property.location.county}
                </div>
             </div>
             <div className="text-2xl md:text-3xl font-bold text-primary">
                {formattedPrice}
             </div>
          </div>
          
          {/* Key Specs */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-6 bg-neutral-light/50 rounded-lg border border-neutral-gray/10">
             {property.features.bedrooms !== undefined && (
               <div className="flex flex-col items-center justify-center text-center p-2">
                 <Bed className="h-6 w-6 text-neutral-gray mb-1" />
                 <span className="font-bold text-neutral-dark text-lg">{property.features.bedrooms}</span>
                 <span className="text-xs text-neutral-gray uppercase">Bedrooms</span>
               </div>
             )}
             {property.features.bathrooms !== undefined && (
               <div className="flex flex-col items-center justify-center text-center p-2">
                 <Bath className="h-6 w-6 text-neutral-gray mb-1" />
                 <span className="font-bold text-neutral-dark text-lg">{property.features.bathrooms}</span>
                 <span className="text-xs text-neutral-gray uppercase">Bathrooms</span>
               </div>
             )}
             {property.features.area !== undefined && (
               <div className="flex flex-col items-center justify-center text-center p-2">
                 <Square className="h-6 w-6 text-neutral-gray mb-1" />
                 <span className="font-bold text-neutral-dark text-lg">{property.features.area}</span>
                 <span className="text-xs text-neutral-gray uppercase">{property.features.areaUnit}</span>
               </div>
             )}
             <div className="flex flex-col items-center justify-center text-center p-2">
                 <CheckCircle className="h-6 w-6 text-neutral-gray mb-1" />
                 <span className="font-bold text-neutral-dark text-lg">Verified</span>
                 <span className="text-xs text-neutral-gray uppercase">Status</span>
               </div>
          </div>
          
          {/* Description */}
          <div>
            <h2 className="text-xl font-bold text-neutral-dark mb-4">Description</h2>
            <div className="prose prose-neutral max-w-none text-neutral-gray">
              <p className="whitespace-pre-line">{property.description}</p>
            </div>
          </div>
          
          {/* Metadata */}
           <div className="flex items-center gap-4 text-xs text-neutral-gray border-t border-neutral-gray/10 pt-4">
             <span className="flex items-center gap-1">
               <Calendar className="h-3.5 w-3.5" />
               Listed {new Date(property.createdAt).toLocaleDateString()}
             </span>
             <span>ID: {property.id}</span>
           </div>
        </div>

        {/* Sidebar / Inquiry Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <InquiryForm 
              propertyId={property.id} 
              propertyTitle={property.title}
              agent={property.agent!} // Mock data ensures agent exists
            />
          </div>
        </div>
      </div>
    </div>
  );
}
