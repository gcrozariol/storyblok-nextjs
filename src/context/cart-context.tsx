/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { createContext, useContext, useState } from 'react'

const CartContext = createContext({
  cartItems: [],
  addToCart: (product: any) => {},
  clearCart: () => {},
})

export const CartProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product: any) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }])
  }

  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
