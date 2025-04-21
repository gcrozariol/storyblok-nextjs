import type { Metadata } from 'next'
import { Geist, Geist_Mono as GeistMono } from 'next/font/google'

import ThemeProvider from '@/components/theme-provider'
import StoryblokProvider from '@/components/storyblok-provider'

import './globals.css'
import { CartProvider } from '@/context/cart-context'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { SkipLink } from '@/components/skip-link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Harmony Haven',
  description: 'Music store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoryblokProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CartProvider>
              <Navigation />
              <SkipLink />
              {children}
              <Footer />
            </CartProvider>
          </ThemeProvider>
        </body>
      </html>
    </StoryblokProvider>
  )
}
