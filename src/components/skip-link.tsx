'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function SkipLink() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && !e.shiftKey) {
        setIsVisible(true)
      } else if (e.key === 'Escape' && !e.shiftKey) {
        setIsVisible(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Link
      href="/landing-page-1"
      className={`fixed top-4 left-4 z-50 bg-white text-black px-4 py-2 rounded-md transition-opacity focus:outline-none focus:ring-2 focus:ring-white ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onBlur={() => setIsVisible(false)}
    >
      Skip to main content
    </Link>
  )
}
