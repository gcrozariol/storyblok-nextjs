import { HeroStoryblok } from '@/components/components-schema'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface HeroStoryblokProps {
  blok: HeroStoryblok
}

export default function HeroBlock({ blok }: HeroStoryblokProps) {
  const {
    title,
    description,
    image,
    primary_link: primaryLink,
    secondary_link: secondayLink,
  } = blok

  return (
    <section className="flex justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {title}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {primaryLink && (
                <Button size="lg" className="px-8 cursor-pointer" asChild>
                  <Link href={primaryLink.url || primaryLink.cached_url}>
                    Shop Now
                  </Link>
                </Button>
              )}
              {secondayLink && (
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 cursor-pointer"
                  asChild
                >
                  <Link href={secondayLink.url || secondayLink.cached_url}>
                    Take a Tour
                  </Link>
                </Button>
              )}
            </div>
          </div>
          {image && (
            <Image
              src={image.filename}
              width={550}
              height={550}
              alt={image.alt || ''}
              className="rounded-lg object-cover"
              priority
            />
          )}
        </div>
      </div>
    </section>
  )
}
