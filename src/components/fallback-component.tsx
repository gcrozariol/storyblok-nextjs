import { storyblokEditable } from '@storyblok/react/rsc'

interface FallbackComponentBlok {
  blok: {
    component: string
  }
}

export default function FallbackComponent({ blok }: FallbackComponentBlok) {
  return (
    <h2 data-cy="fallback" {...storyblokEditable(blok)}>
      This component does not exists: {blok.component}
    </h2>
  )
}
