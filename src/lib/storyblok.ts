import ButtonBlock from '@/blocks/button'
import CategoriesBlock from '@/blocks/categories'
import CategoryCardBlock from '@/blocks/category-card'
import FeaturedProductCardBlock from '@/blocks/product-card'
import FeaturedProductsBlock from '@/blocks/featured-products'
import HeroBlock from '@/blocks/hero'
import LessonsBlock from '@/blocks/lessons'
import FallbackComponent from '@/components/fallback-component'
import ProductsPage from '@/components/products'
import LandingPage from '@/components/landing-page'
import ProductDetailPage from '@/components/product-detail'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import TitleBlok from '@/blocks/title'
import GridBlok from '@/blocks/grid'

export const getStoryblokApi = storyblokInit({
  use: [apiPlugin],
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
  components: {
    'landing-page': LandingPage,
    button: ButtonBlock,
    categories: CategoriesBlock,
    'category-card': CategoryCardBlock,
    'featured-product-card': FeaturedProductCardBlock,
    'featured-products': FeaturedProductsBlock,
    hero: HeroBlock,
    lessons: LessonsBlock,
    'product-detail': ProductDetailPage,
    products: ProductsPage,
    equipments: ProductsPage,
    title: TitleBlok,
    grid: GridBlok,
  },
})
