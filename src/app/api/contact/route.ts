import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const result = contactFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.format() },
        { status: 400 },
      )
    }

    // const { name, email, phone, subject, message } = result.data

    // Here we would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM, etc.

    // For now, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 },
    )
  }
}
