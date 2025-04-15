import { ButtonStoryblok } from '@/components/components-schema'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ButtonBlock({ link, label }: ButtonStoryblok) {
  return (
    <Button asChild>
      <Link
        href={link?.url || link?.cached_url || '#'}
        target={link?.target || '_self'}
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        {label || 'No label found'}
      </Link>
    </Button>
  )
}
