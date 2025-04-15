import { CategoryCardStoryblok } from '@/components/components-schema'
import { Button } from '@/components/ui/button'
import { Guitar, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function CategoryCardBlock({
  title,
  description,
  link,
}: CategoryCardStoryblok) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
      <Guitar className="h-12 w-12 text-primary" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
      {link && (
        <Button
          variant="link"
          size="sm"
          className="mt-2 cursor-pointer"
          asChild
        >
          <Link href={link.url || link.cached_url}>
            Explore <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  )
}
