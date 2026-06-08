
"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-amber to-brand-coral py-16 lg:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-none rounded-full px-4 py-1 uppercase text-[10px] font-bold tracking-widest">
                10-Day Skin Transformation
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white uppercase italic">
                Transform Rough Skin Into a Baby-Smooth Glow
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl font-medium">
                Get a younger, brighter face in just 10 days with our 2-in-1 Anti-Aging Glow Set. No bleaching, no irritation—just pure collagen restoration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => router.push('/order')}
                className="h-14 px-10 rounded-full bg-white text-brand-amber text-lg font-bold hover:bg-white/90 shadow-heroPanel transition-all hover:scale-105"
              >
                PLACE YOUR ORDER NOW
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-white/20">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-brand-amber bg-white/20 overflow-hidden relative">
                    <Image 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User" 
                      width={40} 
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex gap-0.5 text-white">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-[11px] font-semibold text-white/90 uppercase tracking-wider">
                  Join 3,500+ Men & Women who transformed their skin
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 bg-black/10 rounded-full blur-3xl" />
              
              <Image 
                src="https://i.ibb.co/WNPMRZHH/Untitled-500-x-300-px-20251012-014242-0000-removebg-preview-1-2.png"
                alt="product bundle"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
                data-ai-hint="product bundle"
              />
              
              <div className="absolute top-1/4 -left-4 z-20 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 animate-pulse-subtle">
                <p className="text-[10px] font-bold text-white uppercase tracking-wider">Bonus Gift</p>
                <p className="text-sm font-black text-white">Free Face Mask Included!</p>
              </div>

              <div className="absolute bottom-1/4 -right-4 z-20 bg-white p-4 rounded-2xl shadow-heroPanel text-brand-amber">
                <p className="text-2xl font-black tabular-nums text-brand-dark">₦27,500</p>
                <p className="text-xs text-muted-foreground line-through font-bold">₦38,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
