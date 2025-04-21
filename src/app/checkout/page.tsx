'use client'

import { ArrowLeft, CreditCard, Truck, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'

export default function CheckoutPage() {
  const { subtotal } = useCart()

  return (
    <div className="min-h-[calc(100vh-420px)] bg-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <Link
            href="/instruments"
            className="inline-flex items-center text-gray-400 hover:text-white focus:outline-none focus:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to shopping
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-gray-400">Complete your purchase securely</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <CreditCard className="mr-2 h-5 w-5" aria-hidden="true" />
                Payment Information
              </h2>
              <p className="text-gray-400 text-center py-12">
                Checkout functionality will be implemented here.
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Truck className="mr-2 h-5 w-5" aria-hidden="true" />
                Shipping Information
              </h2>
              <p className="text-gray-400 text-center py-12">
                Shipping details will be collected here.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800 sticky top-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-green-400 font-bold">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax</span>
                  <span>${(subtotal * 0.13).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-800 pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(subtotal * 1.13).toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full bg-white text-black hover:bg-gray-200 mb-4 cursor-pointer">
                Complete Order
              </Button>

              <div className="flex items-center justify-center text-sm text-gray-400">
                <ShieldCheck className="h-4 w-4 mr-2" aria-hidden="true" />
                Secure checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
