import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-gray/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary font-[family-name:var(--font-geist-sans)]">
          <ShieldCheck className="h-6 w-6 text-secondary" />
          <span>SmartEstate<span className="text-secondary">KE</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-dark">
          <Link href="/properties" className="hover:text-primary transition-colors">
            Properties
          </Link>
          <Link href="/agents" className="hover:text-primary transition-colors">
            Verified Agents
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            How it Works
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/login">
              Agent Login
            </Link>
          </Button>
          <Button asChild variant="default" size="sm">
            <Link href="/properties">
              Browse Listings
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle (Placeholder) */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  );
}
