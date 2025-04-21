import type { Metadata } from 'next'
import { Geist, Geist_Mono as GeistMono } from 'next/font/google'

import ThemeProvider from '@/components/theme-provider'
import StoryblokProvider from '@/components/storyblok-provider'

import './globals.css'
import { CartProvider } from '@/context/cart-context'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { SkipLink } from '@/components/skip-link'
import { CartSidebar } from '@/components/cart-sidebar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://harmony-haven.gcrozariol.me',
  ),
  title: {
    default: 'Harmony Haven | Instruments & Lessons',
    template: '%s | Harmony Haven',
  },
  description:
    'Find premium musical instruments and expert music lessons for all skill levels at Harmony Haven. Serving musicians since 1991.',
  keywords: [
    'musical instruments',
    'music lessons',
    'guitars',
    'pianos',
    'drums',
    'harmony Haven',
    'music store',
  ],
  authors: [{ name: 'Harmony Haven' }],
  creator: 'Harmony Haven',
  publisher: 'Harmony Haven',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harmony-haven.gcrozariol.me',
    siteName: 'Harmony Haven',
    title: 'Harmony Haven | Premium Instruments & Expert Lessons',
    description:
      'Find premium musical instruments and expert music lessons for all skill levels at Harmony Haven. Serving musicians since 1995.',
    images: [
      {
        url: 'https://harmony-haven.gcrozariol.me/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Harmony Haven - Premium Instruments & Expert Lessons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harmony Haven | Premium Instruments & Expert Lessons',
    description:
      'Find premium musical instruments and expert music lessons for all skill levels at Harmony Haven. Serving musicians since 1995.',
    creator: '@harmonyhaven',
    images: ['https://harmony-haven.gcrozariol.me/images/twitter-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://harmony-haven.gcrozariol.me',
    languages: {
      'en-US': 'https://harmony-haven.gcrozariol.me',
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      me: ['mailto:guicrozariol@gmail.com'],
    },
  },
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
              <CartSidebar />
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
