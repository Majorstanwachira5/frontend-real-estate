'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Agent } from '@/types';
import { MessageSquare, Phone } from 'lucide-react';
import { clsx } from 'clsx';

interface InquiryFormProps {
  propertyId: string;
  propertyTitle: string;
  agent: Agent;
}

export function InquiryForm({ propertyTitle, agent }: InquiryFormProps) {
  const [showPhone, setShowPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // simulate data 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
        <h3 className="font-bold text-green-800 mb-2">Inquiry Sent!</h3>
        <p className="text-green-700 text-sm mb-4">
          {agent.firstName} will contact you shortly.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="bg-white">
          Send another
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-neutral-gray/10 shadow-sm">
      <div className="flex items-center gap-4 mb-6 border-b border-neutral-gray/10 pb-4">
        {agent.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={agent.avatarUrl} 
            alt={agent.firstName} 
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {agent.firstName[0]}{agent.lastName[0]}
          </div>
        )}
        <div>
          <h3 className="font-bold text-neutral-dark">{agent.firstName} {agent.lastName}</h3>
          <p className="text-xs text-neutral-gray mb-0.5">{agent.agencyName || 'Independent Agent'}</p>
          {agent.isVerified && (
             <span className="inline-flex items-center text-[10px] font-medium bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
               Verified
             </span>
          )}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <Button 
          variant="outline" 
          className={clsx("w-full justify-center gap-2", showPhone ? "text-lg font-bold" : "")}
          onClick={() => setShowPhone(!showPhone)}
        >
          <Phone className="h-4 w-4" />
          {showPhone ? agent.phone || '+254 7XX XXX XXX' : 'Show Phone Number'}
        </Button>

        <a 
          href={`https://wa.me/${agent.phone?.replace(/[^0-9]/g, '') || '254700000000'}?text=Hi ${agent.firstName}, I am interested in ${propertyTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none mt-2">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat on WhatsApp
          </Button>
        </a>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-neutral-gray/20" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-neutral-gray">Or send email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <input 
            type="text" 
            placeholder="Your Name" 
            required
            className="w-full h-10 px-3 rounded-md border border-input bg-background/50 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
        <div>
           <input 
            type="tel" 
            placeholder="Phone Number" 
            required
            className="w-full h-10 px-3 rounded-md border border-input bg-background/50 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
         <div>
          <textarea 
            placeholder="Message (Optional)" 
            rows={3}
            className="w-full p-3 rounded-md border border-input bg-background/50 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>
    </div>
  );
}
