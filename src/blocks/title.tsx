import { TitleStoryblok } from '@/components/components-schema'

interface TitleStoryblokProps {
  blok: TitleStoryblok
}

export default function TitleBlok({ blok }: TitleStoryblokProps) {
  return (
    <section aria-labelledby="title-heading">
      <div className="h-56 bg-backgroud boverflow-hidden relative">
        <div className="text-center container mx-auto px-4 relative z-20 h-full flex flex-col align-center justify-center">
          <h1 className="text-3xl font-bold mb-2">{blok.value}</h1>
          <p className="text-gray-400">{blok.description}</p>
        </div>
      </div>
    </section>
  )
}
