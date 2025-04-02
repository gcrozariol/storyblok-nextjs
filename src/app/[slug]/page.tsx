import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'

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

  return <StoryblokStory story={data.story} />
}
