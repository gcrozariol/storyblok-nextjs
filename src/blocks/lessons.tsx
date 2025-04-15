import { LessonsStoryblok } from '@/components/components-schema'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface LessonsStoryblokProps {
  blok: LessonsStoryblok
}

export default function LessonsBlock({ blok }: LessonsStoryblokProps) {
  const {
    title,
    description,
    // bullet_points: bulletPoints,
    primary_link: primaryLink,
    secondary_link: secondaryLink,
  } = blok

  return (
    <section
      id="lessons"
      className="flex justify-center py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=500&width=500&text=Music+Lessons"
              width={500}
              height={500}
              alt="Music Lessons"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            </div>
            <ul className="grid gap-2">
              {[
                'One-on-one instruction',
                'Group classes',
                'Online lessons',
                'All skill levels welcome',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {primaryLink && (
                <Button size="lg" asChild>
                  <Link href={primaryLink.url || primaryLink.cached_url}>
                    Book a Lesson
                  </Link>
                </Button>
              )}
              {secondaryLink && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={secondaryLink.url || secondaryLink.cached_url}>
                    Learn More
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
