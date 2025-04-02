import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h2 className="font-bold">Not Found</h2>
        <span className="opacity-50 text-sm">|</span>
        <p>404</p>
      </div>
      <Link href="/home">Return Home</Link>
    </div>
  )
}
