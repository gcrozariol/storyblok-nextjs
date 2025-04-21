'use client'

import { useCart } from '@/context/cart-context'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function CartButton() {
  const { cartItems } = useCart()

  return (
    <Link href="/cart" className="flex justify-end relative w-48">
      <ShoppingCart className="h-5 w-5" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
        {cartItems.length}
      </span>
    </Link>
  )
}
