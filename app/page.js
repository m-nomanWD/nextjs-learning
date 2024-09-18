import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-2xl text-yellow-400 capitalize mb-4'>
      <h1>Next Js Learning</h1>

      <Link href='/client' className='btn btn-accent mt-6'>
        Client Counter
      </Link>
    </div>
  )
}
