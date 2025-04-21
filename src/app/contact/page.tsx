'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Music, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  subject: z.string({
    required_error: 'Please select a subject.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log(values)
    setIsSubmitting(false)
    setIsSuccess(true)
    form.reset()

    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <div className="min-h-[calc(100vh-420px)] bg-background text-white">
      <section className="relative" aria-labelledby="contact-hero-heading">
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
                id="contact-hero-heading"
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Contact Us
              </h1>
              <p className="text-xl text-gray-200">
                Have questions about our instruments or lessons? We&apos;re here
                to help.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-1 space-y-8">
              <div className="h-118 bg-background p-6 rounded-xl border border-gray-800">
                <h2 className="text-xl font-bold mb-10">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-400">info@musicshop.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-400">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-400">
                        123 Music Avenue
                        <br />
                        Nashville, TN 37203
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Music className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Store Hours</h3>
                      <p className="text-gray-400">
                        Monday - Friday: 9am - 7pm
                        <br />
                        Saturday: 10am - 6pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-background p-8 rounded-xl border border-gray-800">
                {isSuccess ? (
                  <div className="h-100 flex flex-col items-center justify-center py-10 text-center">
                    <div className="bg-green-600/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                    <p className="text-gray-400 max-w-md">
                      Thank you for reaching out. We&apos;ve received your
                      message and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your name"
                                  {...field}
                                  className="bg-[#1c2030] border-gray-700"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your email"
                                  {...field}
                                  className="bg-[#1c2030] border-gray-700"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your phone number"
                                  {...field}
                                  className="bg-[#1c2030] border-gray-700"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl className="w-72">
                                  <SelectTrigger className="bg-[#1c2030] border-gray-700">
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="general">
                                    General Inquiry
                                  </SelectItem>
                                  <SelectItem value="instruments">
                                    Instrument Purchase
                                  </SelectItem>
                                  <SelectItem value="lessons">
                                    Music Lessons
                                  </SelectItem>
                                  <SelectItem value="repairs">
                                    Instrument Repairs
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="How can we help you?"
                                className="min-h-[150px] bg-[#1c2030] border-gray-700"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-white text-black hover:bg-gray-200 py-6 cursor-pointer"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
