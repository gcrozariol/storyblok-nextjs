import Link from 'next/link'
import { Music } from 'lucide-react'
import { Button } from './ui/button'
import CartButton from './cart-button'

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between p-6 max-w-[1550px] mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold w-48"
        >
          <Music className="h-6 w-6" />
          <span>Harmony Haven</span>
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
            Lessons
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
          <Button variant="outline" size="icon" className="md:hidden">
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
    </header>
  )
}
