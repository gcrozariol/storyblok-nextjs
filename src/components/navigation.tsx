'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Music, X } from 'lucide-react'
import { Button } from './ui/button'
import CartButton from './cart-button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  function handleOnClickMenu() {
    setIsOpen(!isOpen)
  }

  function closeSidebar() {
    setIsOpen(false)
  }

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar()
      }
    }

    // Close sidebar when pressing Escape key
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeSidebar()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscKey)
      // Prevent scrolling when sidebar is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between p-6 max-w-[1550px] mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 md:text-xl font-bold w-48"
        >
          <Music className="h-6 w-6" />
          <span className="hidden md:inline">Harmony Haven</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/instruments"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Instruments
          </Link>
          <Link
            href="/equipments"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Equipments
          </Link>
          <Link
            href="/lessons"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Learn
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center pr-2">
          <CartButton />
          <Button
            onClick={handleOnClickMenu}
            variant="outline"
            size="icon"
            className="md:hidden ml-5"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          aria-hidden="true"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={sidebarRef}
            id="mobile-menu"
            className="fixed right-0 top-0 h-full w-full bg-background shadow-lg transform transition-transform animate-in slide-in-from-top"
          >
            <div className="p-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeSidebar}
                aria-label="Close menu"
                className="rounded-full hover:bg-muted"
                asChild
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-6 bg-background p-8">
              <Link
                href="/instruments"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={closeSidebar}
              >
                Instruments
              </Link>
              <Link
                href="/equipments"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={closeSidebar}
              >
                Equipments
              </Link>
              <Link
                href="/lessons"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={closeSidebar}
              >
                Learn
              </Link>
              <Link
                href="/about"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={closeSidebar}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={closeSidebar}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
