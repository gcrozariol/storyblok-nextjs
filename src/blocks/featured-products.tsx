import { FeaturedProductsStoryblok } from '@/components/components-schema'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import FeaturedProductCardBlock from './product-card'

interface FeaturedProductsStoryblokProps {
  blok: FeaturedProductsStoryblok
}

export default function FeaturedProductsBlock({
  blok,
}: FeaturedProductsStoryblokProps) {
  const { title, description, products } = blok

  return (
    <section
      id="equipment"
      className="flex justify-center py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products &&
            products.map(
              ({
                _uid,
                image,
                product_name: productName,
                price,
                link,
                body,
              }) => (
                <FeaturedProductCardBlock
                  key={_uid}
                  _uid={_uid}
                  product_name={productName}
                  price={price}
                  link={link}
                  component={body}
                  image={image}
                />
              ),
            )}
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="secondary" asChild>
            <Link href="#">View all products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
