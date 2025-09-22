'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Directly redirect to dashboard - no login needed
    router.push('/dashboard')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Smart Property Management</h1>
        <p className="text-gray-600 mt-2">Redirecting to dashboard...</p>
      </div>
    </div>
  )
}