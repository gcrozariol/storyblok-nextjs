import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Music,
  Users,
  Award,
  Heart,
  Star,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Piano Instructor & Founder',
      bio: 'With over 15 years of experience, Sarah founded Harmony Haven to create a community where musicians of all levels could find quality instruments and expert instruction.',
      image: 'https://i.pravatar.cc/400?img=26',
    },
    {
      name: 'Marcus Rivera',
      role: 'Guitar Instructor & Store Manager',
      bio: 'Marcus brings 20+ years of performance experience to our team, specializing in everything from classical to metal. He oversees our guitar collection and lesson programs.',
      image: 'https://i.pravatar.cc/400?img=11',
    },
    {
      name: 'Aisha Williams',
      role: 'Drum Instructor & Workshop Coordinator',
      bio: 'A session drummer with 12+ years of experience, Aisha leads our percussion department and coordinates our popular weekend workshops and jam sessions.',
      image: 'https://i.pravatar.cc/400?img=16',
    },
    {
      name: 'David Chen',
      role: 'Bass Instructor & Repair Specialist',
      bio: "David's 18+ years of experience spans performance, recording, and instrument repair. He heads our instrument maintenance department and bass instruction program.",
      image: 'https://i.pravatar.cc/400?img=69',
    },
  ]

  const values = [
    {
      icon: <Music className="h-6 w-6" aria-hidden="true" />,
      title: 'Musical Excellence',
      description:
        'We believe in providing the highest quality instruments and instruction to help every musician reach their full potential.',
    },
    {
      icon: <Users className="h-6 w-6" aria-hidden="true" />,
      title: 'Community',
      description:
        'We foster a supportive community where musicians can connect, collaborate, and grow together.',
    },
    {
      icon: <Award className="h-6 w-6" aria-hidden="true" />,
      title: 'Expertise',
      description:
        'Our team consists of professional musicians with decades of real-world performance and teaching experience.',
    },
    {
      icon: <Heart className="h-6 w-6" aria-hidden="true" />,
      title: 'Passion',
      description:
        "We're driven by our love for music and dedicated to sharing that passion with our students and customers.",
    },
    {
      icon: <Sparkles className="h-6 w-6" aria-hidden="true" />,
      title: 'Innovation',
      description:
        'We continuously evolve our teaching methods and inventory to reflect the latest in music education and technology.',
    },
    {
      icon: <BookOpen className="h-6 w-6" aria-hidden="true" />,
      title: 'Lifelong Learning',
      description:
        'We believe music is a journey of continuous growth and discovery at every age and skill level.',
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative" aria-labelledby="about-hero-heading">
        <div className="absolute bg-gradient-to-r from-purple-900/70 to-blue-900/70 z-10" />
        <div className="h-[400px] bg-[#111] overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full opacity-30" aria-hidden="true">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500 blur-3xl" />
              <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-indigo-500 blur-3xl" />
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
            <div className="max-w-3xl">
              <h1
                id="about-hero-heading"
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                About Harmony Haven
              </h1>
              <p className="text-xl text-gray-200">
                Bringing quality instruments and expert instruction to musicians
                of all levels since 1995.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20" aria-labelledby="our-story-heading">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="our-story-heading" className="text-3xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4">
                <p>
                  Harmony Haven began in 1995 as a small guitar store with a
                  vision to create a space where musicians of all levels could
                  find quality instruments and expert guidance. Founded by Sarah
                  Johnson, a classically trained pianist with a passion for
                  music education, our shop quickly became known for its
                  personalized approach and community atmosphere.
                </p>
                <p>
                  Over the years, we expanded from our humble beginnings to
                  become a comprehensive music center offering a wide range of
                  instruments, from electric guitars and drum kits to digital
                  pianos and synthesizers. In 2005, we launched our music lesson
                  program, bringing together professional musicians to share
                  their knowledge and experience with students of all ages.
                </p>
                <p>
                  Today, Harmony Haven is proud to serve thousands of musicians
                  across the region, from beginners picking up their first
                  instrument to professionals seeking the perfect sound for
                  their next performance or recording. Our commitment to
                  quality, expertise, and community remains at the heart of
                  everything we do.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="The interior of Harmony Haven, showing rows of guitars and a lesson room with a student and teacher"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section
        className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]"
        aria-labelledby="team-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="team-heading" className="text-3xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our team of professional musicians brings decades of performance,
              recording, and teaching experience to Harmony Haven
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-white"
                tabIndex={0}
                role="listitem"
              >
                <div className="aspect-square relative">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
            >
              <Link href="/lessons">
                <span className="flex items-center">
                  Meet All Our Instructors
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section
        className="py-20 bg-[#0a0a0a]"
        aria-labelledby="approach-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="approach-heading" className="text-3xl font-bold mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-400">
              At Harmony Haven, we believe that learning music should be both
              enjoyable and effective. Our approach combines technical skill
              development with creative expression and practical application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 p-8 rounded-xl border border-purple-900/20 focus-within:ring-2 focus-within:ring-white"
              tabIndex={0}
            >
              <div
                className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Learning</h3>
              <p className="text-gray-400">
                We recognize that every student has unique goals, learning
                styles, and musical interests. Our instructors create customized
                lesson plans tailored to each student&apos;s individual needs
                and aspirations.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 p-8 rounded-xl border border-blue-900/20 focus-within:ring-2 focus-within:ring-white"
              tabIndex={0}
            >
              <div
                className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Practical Application</h3>
              <p className="text-gray-400">
                We believe in learning by doing. Our lessons incorporate
                real-world musical experiences, from playing along with
                recordings to performing in student showcases and community
                events.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-indigo-900/20 to-indigo-900/5 p-8 rounded-xl border border-indigo-900/20 focus-within:ring-2 focus-within:ring-white"
              tabIndex={0}
            >
              <div
                className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Connection</h3>
              <p className="text-gray-400">
                Music is inherently social. We foster a supportive community
                through group classes, workshops, jam sessions, and performance
                opportunities that allow students to connect with fellow
                musicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-black" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="values-heading" className="text-3xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do at Harmony Haven,
              from selecting our inventory to designing our lesson programs
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-[#111] rounded-xl border border-gray-800 focus-within:ring-2 focus-within:ring-white"
                tabIndex={0}
                role="listitem"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]"
        aria-labelledby="testimonial-heading"
      >
        <div className="container mx-auto px-4">
          <h2 id="testimonial-heading" className="sr-only">
            What Our Customers Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center mb-4" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <blockquote className="mb-4">
                  <p className="italic text-gray-300">
                    &quot;I&apos;ve been taking guitar lessons here for over a
                    year, and the improvement in my playing has been incredible.
                    The instructors are patient, knowledgeable, and truly care
                    about your progress.&quot;
                  </p>
                </blockquote>
                <p className="font-semibold">James K.</p>
                <p className="text-sm text-gray-400">
                  Guitar Student - 14 months
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center mb-4" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <blockquote className="mb-4">
                  <p className="italic text-gray-300">
                    &quot;The selection of instruments is impressive, but what
                    really sets this place apart is the staff. They took the
                    time to understand exactly what I was looking for and helped
                    me find the perfect keyboard.&quot;
                  </p>
                </blockquote>
                <p className="font-semibold">Sophia L.</p>
                <p className="text-sm text-gray-400">
                  Customer - Purchased Roland FP-90X
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience our collection of premium instruments and meet our team
            of expert instructors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
            >
              <Link href="/contact">
                <span className="flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
            >
              <Link href="/instruments">Browse Instruments</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
