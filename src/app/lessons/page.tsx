import Image from 'next/image'
import { Music, Award, Clock, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LessonsPage() {
  const instructors = [
    {
      name: 'Sarah Johnson',
      instrument: 'Piano',
      experience: '15+ years',
      image: 'https://i.pravatar.cc/400?img=26',
    },
    {
      name: 'Marcus Rivera',
      instrument: 'Guitar',
      experience: '20+ years',
      image: 'https://i.pravatar.cc/400?img=11',
    },
    {
      name: 'Aisha Williams',
      instrument: 'Drums',
      experience: '12+ years',
      image: 'https://i.pravatar.cc/400?img=16',
    },
    {
      name: 'David Chen',
      instrument: 'Bass',
      experience: '18+ years',
      image: 'https://i.pravatar.cc/400?img=69',
    },
  ]

  return (
    <div className="bg-background text-white">
      {/* Hero Section */}
      <section aria-labelledby="contact-hero-heading">
        <div className="h-72 bg-[#111] overflow-hidden relative">
          <div className="text-center container mx-auto px-4 relative z-20 h-full flex flex-col align-center justify-center">
            <h1 className="text-3xl font-bold mb-2">Learn From The Best</h1>
            <p className="text-gray-400">
              Our world-class instructors bring decades of professional
              experience to your music journey.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Our Lessons Stand Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Professional Instructors
              </h3>
              <p className="text-gray-400">
                Learn from musicians with real-world performance and recording
                experience
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
              <p className="text-gray-400">
                Customized lesson plans tailored to your skill level and musical
                goals
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Music className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">All Genres & Styles</h3>
              <p className="text-gray-400">
                From classical to jazz, rock to hip-hop, we cover all musical
                styles
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-pink-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-400">
                Book lessons at times that work for your busy lifestyle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Meet Our Instructors
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto">
            Our team of professional musicians brings decades of performance,
            recording, and teaching experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="aspect-square bg-gradient-to-br from-purple-900 to-indigo-900 relative">
                    <Image
                      src={instructor.image || '/placeholder.svg'}
                      alt={instructor.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-all"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold">{instructor.name}</h3>
                    <p className="text-gray-300">{instructor.instrument}</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  {instructor.experience} professional experience
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-white text-black hover:bg-gray-200 text-lg w-48 py-6 rounded-full cursor-pointer">
              Book a lesson
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-10 rounded-2xl border border-gray-800">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-500 text-3xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xl md:text-2xl italic mb-8">
                &quot;The instructors here are incredible. I&apos;ve learned
                more in 3 months than I did in years of trying to teach myself.
                The personalized approach makes all the difference.&quot;
              </p>
              <p className="font-bold text-lg">Michael T.</p>
              <p className="text-gray-400">Guitar Student - 6 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-black to-[#0a0a0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join hundreds of students who have transformed their musical
            abilities with our expert instruction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full">
              Book Your First Lesson
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
            >
              Explore Lesson Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
