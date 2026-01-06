'use client';

import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export function PropertyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // This is a very basic MVP filter UI.
  // In a real app we'd using proper form state and sync with URL.
  
  return (
    <div className="bg-white p-4 rounded-lg border border-neutral-gray/10 shadow-sm space-y-4">
      <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-gray">Filters</h3>
      
      <div>
        <label className="block text-sm font-medium mb-1">Type</label>
        <select 
          className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          defaultValue={searchParams.get('type') || ''}
          onChange={(e) => {
             const params = new URLSearchParams(searchParams.toString());
             if (e.target.value) params.set('type', e.target.value);
             else params.delete('type');
             router.push(`?${params.toString()}`);
          }}
        >
          <option value="">All Types</option>
          <option value="SALE">For Sale</option>
          <option value="RENT">For Rent</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select 
          className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
           defaultValue={searchParams.get('category') || ''}
           onChange={(e) => {
             const params = new URLSearchParams(searchParams.toString());
             if (e.target.value) params.set('category', e.target.value);
             else params.delete('category');
             router.push(`?${params.toString()}`);
          }}
        >
          <option value="">All Categories</option>
          <option value="APARTMENT">Apartment</option>
          <option value="HOUSE">House</option>
          <option value="LAND">Land</option>
          <option value="COMMERCIAL">Commercial</option>
        </select>
      </div>
      
      <Button className="w-full" onClick={() => router.push('/properties')}>
        Clear Filters
      </Button>
    </div>
  );
}
