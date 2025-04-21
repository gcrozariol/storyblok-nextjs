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

  const { data } = await fetchData(slug)
  const products = await getShopifyProducts()

  data.story.products = products

  return <StoryblokStory story={data.story} />
}
