import { TitleStoryblok } from '@/components/components-schema'

interface TitleStoryblokProps {
  blok: TitleStoryblok
}

export default function TitleBlok({ blok }: TitleStoryblokProps) {
  return <h1 className="text-3xl font-bold">{blok.value}</h1>
}
