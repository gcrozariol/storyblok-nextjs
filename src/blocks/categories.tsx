import { CategoriesStoryblok } from '@/components/components-schema'
import CategoryCardBlock from './category-card'

interface CategoriesStoryblokProps {
  blok: CategoriesStoryblok
}

export default function CategoriesBlock({ blok }: CategoriesStoryblokProps) {
  const { title, description, categories } = blok

  return (
    <section
      id="instruments"
      className="flex justify-center py-12 md:py-24 lg:py-32"
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
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
          {categories &&
            categories.map(
              ({ _uid, title, description, body, link, image }) => (
                <CategoryCardBlock
                  _uid={_uid}
                  key={_uid}
                  title={title}
                  description={description}
                  component={body}
                  link={link}
                  image={image}
                />
              ),
            )}
        </div>
      </div>
    </section>
  )
}
