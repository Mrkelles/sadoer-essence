
"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function ImageGrid() {
  const router = useRouter()
  const gridImages = [
    PlaceHolderImages.find(img => img.id === 'grid-1'),
    PlaceHolderImages.find(img => img.id === 'grid-2'),
    PlaceHolderImages.find(img => img.id === 'grid-3'),
    PlaceHolderImages.find(img => img.id === 'grid-4'),
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {gridImages.map((img, i) => (
              <div key={i} className="aspect-square relative rounded-3xl overflow-hidden shadow-card border border-divider group">
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={img.imageHint}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={() => router.push('/order')}
              className="h-16 px-12 rounded-full bg-brand-red hover:bg-brand-red/90 text-white text-xl font-black shadow-2xl shadow-brand-red/30 transition-all hover:scale-105 active:scale-95 uppercase tracking-tight"
            >
              PLACE YOUR ORDER NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
