import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ShieldCheck, Home as HomeIcon, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-theme(spacing.16))]">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 px-4 text-center text-white">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Find <span className="text-secondary">Verified</span> Properties in Kenya
          </h1>
          <p className="text-lg md:text-xl text-neutral-light/90 max-w-2xl mx-auto">
            Browse legitimate listings from vetted agents. Whether it&apos;s land, apartments, or commercial space, trust starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="w-full sm:w-auto bg-secondary text-primary hover:bg-secondary/90 text-base px-8 h-12">
              <Link href="/properties">
                <Search className="mr-2 h-5 w-5" />
                Browse Properties
              </Link>
            </Button>
          </div>
          
          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-neutral-light/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span>Verified Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-neutral-gray/10 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Trust</h3>
              <p className="text-neutral-gray">
                Every agent on our platform is vetted with government ID verification to ensure you deal with real professionals.
              </p>
            </div>
            
             <div className="p-6 rounded-lg border border-neutral-gray/10 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <HomeIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Listings</h3>
              <p className="text-neutral-gray">
                 Clean, professional listings with accurate photos, prices, and locations. No more fake or duplicate properties.
              </p>
            </div>
            
             <div className="p-6 rounded-lg border border-neutral-gray/10 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
              <p className="text-neutral-gray">
                Connect directly with agents via WhatsApp or phone. No middlemen, no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured CTA Strip */}
      <section className="py-12 px-4 bg-neutral-light border-y border-neutral-gray/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl">
          <div>
             <h2 className="text-2xl font-bold text-neutral-dark mb-2">Are you a Real Estate Agent?</h2>
             <p className="text-neutral-gray">List your properties and get leads from verified buyers today.</p>
          </div>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/agents/join">
              Join as Agent
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
