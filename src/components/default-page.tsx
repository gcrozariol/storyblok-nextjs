import {
  type SbBlokData,
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'
import { DefaultPageStoryblok } from './components-schema'

export default function DefaultPage({ blok }: DefaultPageStoryblok) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: SbBlokData) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
