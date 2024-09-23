import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to the Quote App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover and enjoy inspiring quotes tailored to your mood.
        </p>
        <Link href="/quote" className="inline-block px-10 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-400 transition hover:scale-105 active:scale-95">
            Start
        </Link>
      </div>
    </div>
  )
}
