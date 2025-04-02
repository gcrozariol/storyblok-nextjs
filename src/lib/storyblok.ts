import DefaultPage from '@/components/default-page'
import FallbackComponent from '@/components/fallback-component'
import HeroSection from '@/components/hero-section'
import TextSection from '@/components/text-section'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    'default-page': DefaultPage,
    'text-section': TextSection,
    'hero-section': HeroSection,
  },
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
})
