import {
  type SbBlokData,
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'
import { LandingPageStoryblok } from './components-schema'

export default function LandingPage({ blok }: LandingPageStoryblok) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: SbBlokData) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
