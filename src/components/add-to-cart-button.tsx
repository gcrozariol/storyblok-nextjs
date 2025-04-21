/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'

export default function AddToCartButton({ product }: { product: any }) {
  const { addItem } = useCart()

  function handleAddToCart() {
    addItem(product)
  }

  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={handleAddToCart}
      className="cursor-pointer"
    >
      Add to Cart
    </Button>
  )
}
