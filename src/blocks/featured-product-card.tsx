import { FeaturedProductCardStoryblok } from '@/components/components-schema'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedProductCardBlock({
  image,
  product_name: productName,
  price,
  link,
}: FeaturedProductCardStoryblok) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        {image && (
          <Image
            src={image.filename}
            width={400}
            height={400}
            alt={image.alt}
            className="object-cover transition-transform group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{productName}</h3>
        <div className="flex items-center gap-1 mt-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          <span className="text-xs text-muted-foreground ml-1">
            (24 reviews)
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-medium">{price}</p>
          {link && (
            <Button size="sm" variant="secondary" asChild>
              <Link href={link.url || link.cached_url}>Add to Cart</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
