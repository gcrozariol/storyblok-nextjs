import {
  type SbBlokData,
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'
import { ProductsStoryblok } from './components-schema'
import { Button } from '@/components/ui/button'

export default function ProductsPage({ blok }: ProductsStoryblok) {
  return (
    <section
      className="container mx-auto py-8 px-4 background text-white"
      {...storyblokEditable(blok)}
    >
      {blok.body.map((nestedBlok: SbBlokData) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center gap-2">
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? 'default' : 'outline'}
              className={
                page === 1
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-[#1c2030] border-gray-700'
              }
              size="icon"
            >
              {page}
            </Button>
          ))}
          <span className="px-2">...</span>
          <Button
            variant="outline"
            className="bg-[#1c2030] border-gray-700"
            size="icon"
          >
            10
          </Button>
        </nav>
      </div>
    </section>
  )
}
