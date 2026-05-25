
"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Header() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-divider bg-white shadow-nav h-14">
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-brand-amber" />
          <span className="text-base font-bold tracking-tight text-brand-dark uppercase">SADOER ESSENCE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          <button 
            onClick={() => {
              if (window.location.pathname !== '/') {
                router.push('/')
              } else {
                document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })
              }
            }} 
            className="text-[13px] font-medium px-4 py-2 text-secondary-foreground hover:bg-brand-offwhite rounded-full transition-colors"
          >
            Benefits
          </button>
          <button 
            onClick={() => {
              if (window.location.pathname !== '/') {
                router.push('/')
              } else {
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
              }
            }} 
            className="text-[13px] font-medium px-4 py-2 text-secondary-foreground hover:bg-brand-offwhite rounded-full transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => {
              if (window.location.pathname !== '/') {
                router.push('/')
              } else {
                document.getElementById('how-to-use')?.scrollIntoView({ behavior: 'smooth' })
              }
            }} 
            className="text-[13px] font-medium px-4 py-2 text-secondary-foreground hover:bg-brand-offwhite rounded-full transition-colors"
          >
            How to Use
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Badge className="hidden sm:flex bg-brand-amberSoft text-brand-amber border-none rounded-full px-3 py-0.5 text-[10px] font-bold">
            Limited Discount
          </Badge>
          <Button 
            onClick={() => router.push('/order')}
            className="rounded-full bg-brand-amber hover:bg-brand-amber/90 text-white font-bold h-9 px-6 text-xs shadow-none transition-all hover:scale-105"
          >
            ORDER NOW
          </Button>
        </div>
      </div>
    </header>
  )
}
