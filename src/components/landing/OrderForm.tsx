"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useToast } from '@/hooks/use-toast'
import { Lock, Truck, Loader2 } from 'lucide-react'
import { submitOrder } from '@/app/actions/order'

const formSchema = z.object({
  package: z.string().min(1, 'Please select a package'),
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  whatsapp: z.string().min(10, 'WhatsApp number is required'),
  address: z.string().min(10, 'Full address with state is required'),
  questions: z.string().optional(),
})

export function OrderForm() {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      package: '',
      fullName: '',
      phone: '',
      whatsapp: '',
      address: '',
      questions: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = await submitOrder(values)
      if (result.success) {
        form.reset()
        router.push('/thank-you')
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.error || "There was an error processing your order. Please try again.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="order-form" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-heroPanel shadow-card border border-border space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark tracking-tight">Complete Your Order</h2>
            <p className="text-secondary-foreground font-semibold flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
              <Truck className="h-4 w-4 text-brand-amber" />
              Pay on Delivery + Free Doorstep Delivery
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-xs font-bold text-secondary-foreground uppercase tracking-widest">Select Your Package</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="grid grid-cols-1 gap-3"
                      >
                        {[
                          { id: '1-combo', label: '1 Combo set (1 serum & 1 Cream) + Free Delivery', price: '₦27,500' },
                          { id: '2-combo', label: '2 Combo set + Free Doorstep Delivery', price: '₦50,000' },
                          { id: '3-combo', label: '3 Combo set + Free Doorstep Delivery', price: '₦68,500' },
                        ].map((pkg) => (
                          <div
                            key={pkg.id}
                            className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                              field.value === pkg.id 
                                ? 'border-brand-amber bg-brand-amber/5 shadow-sm' 
                                : 'border-border bg-brand-warmGrey hover:border-gray-300'
                            }`}
                            onClick={() => field.onChange(pkg.id)}
                          >
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value={pkg.id} id={pkg.id} className="border-brand-amber text-brand-amber" />
                              <span className="font-bold text-sm text-brand-dark">{pkg.label}</span>
                            </div>
                            <span className="font-black text-brand-amber text-sm tabular-nums">{pkg.price}</span>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" className="rounded-md border-border bg-brand-warmGrey h-11 text-sm focus:ring-brand-amber" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" className="rounded-md border-border bg-brand-warmGrey h-11 text-sm focus:ring-brand-amber" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">WhatsApp Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your WhatsApp number" className="rounded-md border-border bg-brand-warmGrey h-11 text-sm focus:ring-brand-amber" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Delivery Address (With State)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter your full delivery address" className="rounded-md border-border bg-brand-warmGrey min-h-[100px] text-sm focus:ring-brand-amber" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4 pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-button bg-brand-amber hover:bg-brand-amber/90 text-white text-lg font-bold shadow-none transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      PROCESSING ORDER...
                    </>
                  ) : (
                    'SUBMIT MY ORDER'
                  )}
                </Button>
                <p className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                  <Lock className="h-3 w-3" /> Secure Order Processing
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}