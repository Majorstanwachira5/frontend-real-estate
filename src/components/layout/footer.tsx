import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-neutral-gray/20 bg-neutral-light">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-4">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <span>SmartEstate<span className="text-secondary">KE</span></span>
            </Link>
            <p className="text-sm text-neutral-gray leading-relaxed">
              Kenya&apos;s most trusted platform for verified real estate listings. Professional agents, legitimate properties.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-neutral-dark mb-4">Properties</h3>
            <ul className="space-y-2 text-sm text-neutral-gray">
              <li><Link href="/properties?type=sale" className="hover:text-primary">For Sale</Link></li>
              <li><Link href="/properties?type=rent" className="hover:text-primary">For Rent</Link></li>
              <li><Link href="/properties?category=land" className="hover:text-primary">Land & Plots</Link></li>
              <li><Link href="/properties?category=commercial" className="hover:text-primary">Commercial</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-neutral-dark mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-neutral-gray">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/agents" className="hover:text-primary">For Agents</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
             <h3 className="font-semibold text-neutral-dark mb-4">Contact</h3>
             <ul className="space-y-2 text-sm text-neutral-gray">
               <li>Nairobi, Kenya</li>
               <li>support@smartestate.co.ke</li>
               <li>+254 700 000 000</li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-gray/10 mt-8 pt-6 text-center text-xs text-neutral-gray">
          &copy; {new Date().getFullYear()} Smart Estate Kenya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
