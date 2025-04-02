import { storyblokEditable } from '@storyblok/react/rsc'
import { HeroSectionStoryblok } from './components-schema'
import Image from 'next/image'

interface HeroSectionProps {
  blok: HeroSectionStoryblok
}

export default function HeroSection({ blok }: HeroSectionProps) {
  return (
    <div data-cy="hero-dection" {...storyblokEditable(blok)}>
      <h2>{blok.headline}</h2>
      <h3>{blok.subheadline}</h3>
      {blok.background_image && (
        <Image
          alt=""
          width="300"
          height="200"
          src={blok.background_image.filename + '/m/300x200'}
        />
      )}
    </div>
  )
}
