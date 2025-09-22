'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Building2 } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simple email validation - no passwords needed
      if (email.includes('@') && email.includes('.')) {
        // Store user info in localStorage for demo
        localStorage.setItem('currentUser', JSON.stringify({
          email,
          name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          role: email.includes('admin') ? 'PROPERTY_MANAGER' : 'TENANT'
        }))
        router.push('/dashboard')
      } else {
        alert('Please enter a valid email address')
      }
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setLoading(false)
    }
  }

  const quickLogin = (demoEmail: string) => {
    setEmail(demoEmail)
    const event = { preventDefault: () => {} } as React.FormEvent
    handleEmailLogin(event)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <Building2 className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Smart Property Management
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email to access the system (No password required)
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Quick Demo Access</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <button
                type="button"
                onClick={() => quickLogin('admin@example.com')}
                className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:text-blue-500 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors"
              >
                <div className="font-medium">Property Manager Access</div>
                <div className="text-xs text-gray-500">admin@example.com</div>
              </button>
              <button
                type="button"
                onClick={() => quickLogin('john.doe@example.com')}
                className="w-full text-left px-4 py-2 text-sm text-green-600 hover:text-green-500 border border-green-300 rounded-md hover:bg-green-50 transition-colors"
              >
                <div className="font-medium">Tenant Access</div>
                <div className="text-xs text-gray-500">john.doe@example.com</div>
              </button>
              <button
                type="button"
                onClick={() => quickLogin('jane.smith@example.com')}
                className="w-full text-left px-4 py-2 text-sm text-green-600 hover:text-green-500 border border-green-300 rounded-md hover:bg-green-50 transition-colors"
              >
                <div className="font-medium">Tenant Access</div>
                <div className="text-xs text-gray-500">jane.smith@example.com</div>
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="text-xs text-gray-500">
              🎯 Demo Mode: No passwords required - just click any demo account or enter any valid email
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}