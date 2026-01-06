import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  areaUnit?: string;
  imageUrl: string;
  isVerified?: boolean; // For listing or agent? Maybe just verified agent indicator.
  agent: {
    id: string;
    name: string;
    isVerified: boolean;
    agencyName?: string;
  };
}

export function PropertyCard({
  id,
  title,
  price,
  currency,
  location,
  type,
  bedrooms,
  bathrooms,
  area,
  areaUnit,
  imageUrl,
  agent,
}: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className="group rounded-lg border border-neutral-gray/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-light">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white font-medium uppercase backdrop-blur-sm">
          {type}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
         <div className="mb-2">
            <h3 className="text-lg font-bold text-primary truncate" title={title}>
              {formattedPrice}
            </h3>
            <p className="text-sm font-medium text-neutral-dark truncate">{title}</p>
         </div>
         
         <div className="flex items-center text-neutral-gray text-xs mb-3">
           <MapPin className="h-3 w-3 mr-1" />
           <span className="truncate">{location}</span>
         </div>
         
         {/* Features Grid */}
         <div className="grid grid-cols-3 gap-2 border-y border-neutral-gray/10 py-3 mb-3 text-xs text-neutral-gray">
           {bedrooms !== undefined && (
             <div className="flex items-center gap-1">
               <Bed className="h-3.5 w-3.5" />
               <span>{bedrooms} Beds</span>
             </div>
           )}
           {bathrooms !== undefined && (
             <div className="flex items-center gap-1">
               <Bath className="h-3.5 w-3.5" />
               <span>{bathrooms} Baths</span>
             </div>
           )}
           {area !== undefined && (
             <div className="flex items-center gap-1">
               <Square className="h-3.5 w-3.5" />
               <span>{area} {areaUnit}</span>
             </div>
           )}
         </div>
         
         {/* Footer */}
         <div className="mt-auto flex items-center justify-between pt-1">
           <div className="flex flex-col text-xs">
             <span className="text-neutral-gray">Agent</span>
             <Link href={`/agents/${agent.id}`} className="hover:underline hover:text-primary">
               <span className="font-medium text-neutral-dark flex items-center gap-1">
                 {agent.name}
                 {agent.isVerified && (
                   <span className="text-secondary" title="Verified Agent">✓</span>
                 )}
               </span>
             </Link>
           </div>
           
           <Link href={`/properties/${id}`}>
             <Button size="sm" variant="outline" className="h-8 text-xs">
               View <ChevronRight className="h-3 w-3 ml-1" />
             </Button>
           </Link>
         </div>
      </div>
    </div>
  );
}
