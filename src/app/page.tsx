
import React from 'react'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { PromoBanner } from '@/components/landing/PromoBanner'
import { SideFeature } from '@/components/landing/SideFeature'
import { StoryFeature } from '@/components/landing/StoryFeature'
import { ProblemSolution } from '@/components/landing/ProblemSolution'
import { ProductShowcase } from '@/components/landing/ProductShowcase'
import { ReviewGrid } from '@/components/landing/ReviewGrid'
import { UsageGuide } from '@/components/landing/UsageGuide'
import { BeforeAfter } from '@/components/landing/BeforeAfter'
import { ResultFocus } from '@/components/landing/ResultFocus'
import { Toaster } from '@/components/ui/toaster'
import Image from 'next/image'
import { ImageGrid } from '@/components/landing/ImageGrid'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />
      
      {/* Trust Banner */}
      <div className="bg-[#F8F7F5] py-12 border-y border-divider">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">Trusted by families in Lagos, Abuja, Ibadan & more</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {['Beauty Daily', 'Glow Mag', 'Health Hub', 'Nigeria Skincare'].map((name, i) => (
              <span key={i} className="text-xl font-black text-brand-dark">{name}</span>
            ))}
          </div>
        </div>
      </div>

      <StoryFeature />

      <ImageGrid />

      <BeforeAfter />

      <PromoBanner />

      <SideFeature />

      <ProblemSolution />

      <ReviewGrid />

      <ResultFocus />

      <ProductShowcase />

      <UsageGuide />

      {/* WhatsApp Testimonials */}
      <section className="py-24 bg-[#F4F2F0]">
        <div className="container mx-auto px-4 text-center space-y-12">
          <h2 className="text-4xl font-black text-brand-dark tracking-tight">More WhatsApp Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
              <Image 
                src="https://i.ibb.co/WWdgWfgW/IMG-20251013-WA0036.jpg"
                alt="WhatsApp Proof"
                width={400} 
                height={600} 
                className="w-full"
                data-ai-hint="WhatsApp Proof" 
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
              <Image 
                src="https://i.ibb.co/Xf2Mb8c9/IMG-20251014-WA0009-533x1024.jpg" 
                alt="WhatsApp Proof 2" 
                width={400} 
                height={600} 
                className="w-full"
                data-ai-hint="WhatsApp Proof 2" 
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
              <Image 
                src="https://i.ibb.co/pBT4PYwQ/IMG-20251015-WA0019-1.jpg"
                alt="WhatsApp Proof 3" 
                width={400} 
                height={600} 
                className="w-full"
                data-ai-hint="WhatsApp Proof 3" 
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
                <Image 
                  src="https://i.ibb.co/zTqsjdnb/IMG-20250731-WA00061.jpg"
                  alt="WhatsApp Proof 4" 
                  width={400} 
                  height={600} 
                  className="w-full"
                  data-ai-hint="WhatsApp Proof 4" 
                />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
                <Image 
                  src="https://i.ibb.co/svgW9yBB/IMG-20250731-WA00001.jpg"
                  alt="WhatsApp Proof 5" 
                  width={400} 
                  height={600} 
                  className="w-full"
                  data-ai-hint="WhatsApp Proof 5" 
                />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
                <Image 
                  src="https://i.ibb.co/G3C0sNdn/IMG-20251011-WA0005.jpg"
                  alt="WhatsApp Proof 6" 
                  width={400} 
                  height={600} 
                  className="w-full"
                  data-ai-hint="WhatsApp Proof 6" 
                />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-divider">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
              This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
            </p>
            <div className="pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <p>&copy; 2026 Oello Shop. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-brand-coral">Privacy Policy</a>
                <a href="#" className="hover:text-brand-coral">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </main>
  )
}
