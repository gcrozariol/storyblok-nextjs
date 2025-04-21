import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'
import { getShopifyProducts } from '@/lib/shopify'

async function fetchData(slug: string) {
  const storyblokApi = getStoryblokApi()
  return storyblokApi.get('cdn/stories/' + slug, { version: 'draft' })
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const [storyblok, shopify] = await Promise.all([
    await fetchData(slug),
    await getShopifyProducts(),
  ])

  // FIX: Shopify should be implemented as a Storyblok add-on
  storyblok.data.story.products = shopify.products

  return <StoryblokStory story={storyblok.data.story} />
}
