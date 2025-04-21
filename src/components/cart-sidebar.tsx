'use client'

import { useRef, useEffect } from 'react'
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/cart-context'
import { Button } from '@/components/ui/button'

export function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    totalItems,
  } = useCart()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const firstItemButtonRef = useRef<HTMLButtonElement>(null)

  // Handle focus management when sidebar opens
  useEffect(() => {
    if (isOpen && firstItemButtonRef.current) {
      setTimeout(() => {
        firstItemButtonRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeCart()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart"
    >
      <div
        ref={sidebarRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-[#111] shadow-xl transition-transform animate-in slide-in-from-right"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
            <h2 className="text-xl font-semibold flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" aria-hidden="true" />
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm text-gray-400">
                  ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </span>
              )}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeCart}
              aria-label="Close cart"
              className="text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-none"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag
                  className="h-16 w-16 text-gray-600 mb-4"
                  aria-hidden="true"
                />
                <p className="text-xl font-medium mb-2">Your cart is empty</p>
                <p className="text-gray-400 mb-6">
                  Looks like you haven&apos;t added any items to your cart yet.
                </p>
                <Button
                  onClick={closeCart}
                  className="bg-white text-black hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none cursor-pointer"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-800 -mx-6" role="list">
                {items.map((item, index) => (
                  <li key={index} className="flex py-6 px-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-800 bg-gray-900">
                      <Image
                        src={item.image.filename || '/placeholder.svg'}
                        alt={item.product_name || ''}
                        width={48}
                        height={48}
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium">
                          <h3>{item.product_name}</h3>
                          <p className="ml-4">${item.price.toLocaleString()}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-400">
                          {item.category}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Button
                            ref={index === 0 ? firstItemButtonRef : null}
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-md border-gray-700 bg-[#1c2030] text-white hover:bg-gray-700 focus:ring-2 focus:ring-white focus:outline-none"
                            onClick={() => {
                              if (item.quantity === 1) {
                                removeItem(item.id)
                              } else {
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            }}
                            aria-label={
                              item.quantity === 1
                                ? `Remove ${item.product_name} from cart`
                                : `Decrease ${item.product_name} quantity`
                            }
                          >
                            {item.quantity === 1 ? (
                              <Trash2 className="h-4 w-4" />
                            ) : (
                              <Minus className="h-4 w-4" />
                            )}
                          </Button>

                          <span
                            className="text-gray-300 w-6 text-center"
                            aria-label={`Quantity: ${item.quantity}`}
                          >
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-md border-gray-700 bg-[#1c2030] text-white hover:bg-gray-700 focus:ring-2 focus:ring-white focus:outline-none"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label={`Increase ${item.product_name} quantity`}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-800 px-6 py-6">
              <div className="flex justify-between text-base font-medium mb-4">
                <p>Subtotal</p>
                <p>${subtotal.toLocaleString()}</p>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <Button
                asChild
                onClick={closeCart}
                className="w-full bg-white text-black hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
              >
                <Link href="/checkout">
                  <span className="flex items-center justify-center">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </span>
                </Link>
              </Button>
              <div className="mt-4 flex justify-center">
                <Button
                  variant="link"
                  onClick={closeCart}
                  className="text-gray-400 hover:text-white focus:outline-none focus:underline cursor-pointer"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
