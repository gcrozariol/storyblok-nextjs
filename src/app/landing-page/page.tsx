import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ShoppingCart,
  Music,
  Headphones,
  Guitar,
  Mic2,
  Piano,
  Star,
  ChevronRight,
  Mail,
} from 'lucide-react'

export default function MusicStoreLanding() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between p-4">
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
              href="/equipment"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Equipment
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
            <Link href="/cart" className="flex justify-end relative w-48">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                0
              </span>
            </Link>
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
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Sound
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover premium instruments, equipment, and lessons for
                    musicians of all levels. Your musical journey starts here.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8 cursor-pointer">
                    Shop Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 cursor-pointer"
                  >
                    Take a Tour
                  </Button>
                </div>
              </div>
              <div className="">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Music Store Hero Image"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section
          id="instruments"
          className="flex justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Browse Our Categories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find everything you need to make music, from beginner to
                  professional gear.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <Guitar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Guitars</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Acoustic, electric, and bass guitars from top brands.
                </p>
                <Button
                  variant="link"
                  size="sm"
                  className="mt-2 cursor-pointer"
                >
                  Explore <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <Piano className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Keyboards</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Digital pianos, synthesizers, and MIDI controllers.
                </p>
                <Button
                  variant="link"
                  size="sm"
                  className="mt-2 cursor-pointer"
                >
                  Explore <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <Mic2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Recording</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Microphones, interfaces, and studio equipment.
                </p>
                <Button
                  variant="link"
                  size="sm"
                  className="mt-2 cursor-pointer"
                >
                  Explore <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <Headphones className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Accessories</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Headphones, cables, stands, and more.
                </p>
                <Button
                  variant="link"
                  size="sm"
                  className="mt-2 cursor-pointer"
                >
                  Explore <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section
          id="equipment"
          className="flex justify-center py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Featured Products
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our most popular instruments and equipment, loved by musicians
                  worldwide.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=400&text=Product+${i}`}
                      width={400}
                      height={400}
                      alt={`Featured Product ${i}`}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Premium Electric Guitar</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        (24 reviews)
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="font-medium">$899.99</p>
                      <Button size="sm" variant="secondary">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button size="lg">View All Products</Button>
            </div>
          </div>
        </section>

        {/* Lessons Section */}
        <section
          id="lessons"
          className="flex justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500&text=Music+Lessons"
                  width={500}
                  height={500}
                  alt="Music Lessons"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Learn From the Best
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Take your skills to the next level with our expert
                    instructors. We offer lessons for all ages and skill levels.
                  </p>
                </div>
                <ul className="grid gap-2">
                  {[
                    'One-on-one instruction',
                    'Group classes',
                    'Online lessons',
                    'All skill levels welcome',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
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
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Book a Lesson</Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="flex justify-center py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don&apos;t just take our word for it. Here&apos;s what
                  musicians have to say about Harmony Haven.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  name: 'Alex Johnson',
                  role: 'Professional Guitarist',
                  quote:
                    'The quality of instruments at Harmony Haven is unmatched. Their expert staff helped me find the perfect guitar for my touring needs.',
                },
                {
                  name: 'Sarah Williams',
                  role: 'Music Teacher',
                  quote:
                    "I've been buying equipment for my students here for years. The prices are fair and the service is always exceptional.",
                },
                {
                  name: 'Michael Chen',
                  role: 'Recording Artist',
                  quote:
                    'From microphones to mixing boards, Harmony Haven has everything I need for my home studio. Their knowledge of recording equipment is impressive.',
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                    </div>
                    <p className="text-muted-foreground">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <span className="text-sm font-medium">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          id="contact"
          className="flex justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Stay in Tune With Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for exclusive deals, new arrivals,
                  and music tips.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full"
                      aria-label="Email address"
                    />
                  </div>
                  <Button type="submit" className="inline-flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex justify-center py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Our Story
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Founded in 2005, Harmony Haven has been serving musicians of
                    all levels for nearly two decades. What started as a small
                    guitar shop has grown into a comprehensive music store with
                    a wide selection of instruments, equipment, and accessories.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our mission is to help every musician find their perfect
                    sound. Whether you&apos;re a beginner picking up your first
                    instrument or a professional looking for top-of-the-line
                    gear, our knowledgeable staff is here to help.
                  </p>
                </div>
                <Button size="lg" className="w-fit">
                  Learn More About Us
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500&text=Our+Store"
                  width={500}
                  height={500}
                  alt="Our Store"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex justify-center py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Start Your Musical Journey?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Visit our store today or shop online. We ship nationwide and
                  offer expert advice on all our products.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="px-8">
                  Shop Online
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Find Our Store
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Music className="h-6 w-6" />
              <span>Harmony Haven</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for all things music. Quality instruments,
              equipment, and lessons for musicians of all levels.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Guitars
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Keyboards
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Drums
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Recording
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Lessons
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Repairs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Rentals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Custom Orders
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Return Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="flex p-10 justify-between text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Harmony Haven Music Store. All
              rights reserved.
            </p>
            <p>Designed and built with passion for musicians everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
