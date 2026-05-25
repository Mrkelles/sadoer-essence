
"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function ResultFocus() {
  const router = useRouter()

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="aspect-[21/9] relative rounded-[40px] overflow-hidden shadow-heroPanel border-8 border-brand-offwhite">
            <Image
              src="https://i.ibb.co/WNPMRZHH/Untitled-500-x-300-px-20251012-014242-0000-removebg-preview-1-2.png"
              alt="Skin Transformation"
              fill
              className="object-contain"
              data-ai-hint="skincare results"
            />
          </div>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight uppercase">
                The Result You've Been Praying For
              </h2>
              <p className="text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                Stop wasting money on products that don't work. Our Collagen set is the final answer to your skin struggles. Get the glow you deserve today.
              </p>
            </div>
            <Button 
              onClick={() => router.push('/order')}
              className="h-16 px-12 rounded-full bg-brand-red hover:bg-brand-red/90 text-white text-xl font-black shadow-2xl shadow-brand-red/30 transition-all hover:scale-105 uppercase tracking-tight"
            >
              GET YOURS NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
