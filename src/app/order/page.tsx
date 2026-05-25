
import React from 'react'
import { Header } from '@/components/landing/Header'
import { OrderForm } from '@/components/landing/OrderForm'
import { Toaster } from '@/components/ui/toaster'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-secondary-foreground hover:text-brand-amber transition-colors mb-8 group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          BACK TO HOME
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <OrderForm />
        </div>
      </div>

      <footer className="py-12 bg-white border-t border-divider">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
              This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
            </p>
            <div className="pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <p>&copy; 2024 Sadoer Youthful Glow. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-brand-amber">Privacy Policy</a>
                <a href="#" className="hover:text-brand-amber">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </main>
  )
}
