import Image from 'next/image'
import Link from 'next/link'

const sections = ['Instruments', 'Equipments', 'Lessons', 'About', 'Contact']

export default function Page() {
  return (
    <div className="min-h-[calc(100vh-420px)] flex flex-col items-center">
      <section aria-labelledby="title-heading">
        <div className="h-72 bg-backgroud boverflow-hidden relative">
          <div className="text-center container mx-auto px-4 relative z-20 h-full flex flex-col align-center justify-center">
            <h1 className="text-3xl font-bold mb-2">
              Welcome to Harmony Haven
            </h1>
            <p className="text-gray-400">
              Your one-stop shop for all things music!
            </p>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {sections.map((section) => (
          <Link key={section} href={`/${section.toLowerCase()}`}>
            <div className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="placeholder.svg"
                  width={400}
                  height={400}
                  alt=""
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{section}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
