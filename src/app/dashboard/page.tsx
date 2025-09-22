'use client'

import Layout from '@/components/layout'
import { Building2, Users, Wrench, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react'

const stats = [
  { name: 'Total Properties', stat: '12', icon: Building2, change: '+2', changeType: 'increase' },
  { name: 'Active Tenants', stat: '34', icon: Users, change: '+5', changeType: 'increase' },
  { name: 'Maintenance Requests', stat: '8', icon: Wrench, change: '-2', changeType: 'decrease' },
  { name: 'Monthly Revenue', stat: '$45,600', icon: DollarSign, change: '+12%', changeType: 'increase' },
]

const recentActivity = [
  {
    id: 1,
    type: 'maintenance',
    title: 'AC Repair Request',
    property: 'Sunset Apartments #302',
    time: '2 hours ago',
    status: 'pending'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Rent Payment Received',
    property: 'Oak Street House',
    time: '4 hours ago',
    status: 'completed'
  },
  {
    id: 3,
    type: 'lease',
    title: 'Lease Renewal Due',
    property: 'Downtown Loft #15',
    time: '1 day ago',
    status: 'pending'
  }
]

const aiInsights = [
  {
    id: 1,
    title: 'Rent Optimization Opportunity',
    description: 'Based on market analysis, you can increase rent by 8% for Oak Street House',
    impact: '+$240/month',
    confidence: 85,
    type: 'revenue'
  },
  {
    id: 2,
    title: 'Predictive Maintenance Alert',
    description: 'HVAC system in Sunset Apartments likely needs maintenance within 30 days',
    impact: 'Prevent $2,500 repair',
    confidence: 72,
    type: 'maintenance'
  }
]

export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-full">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Dashboard
                      </h1>
                    </div>
                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                      <dt className="sr-only">Company</dt>
                      <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                        Welcome back! Here's your property overview.
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                          <dd>
                            <div className="flex items-baseline">
                              <div className="text-2xl font-semibold text-gray-900">{item.stat}</div>
                              <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                                item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {item.change}
                              </div>
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">🤖 AI Insights</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {aiInsights.map((insight) => (
                <div key={insight.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className={`inline-flex items-center justify-center p-3 rounded-md shadow-lg ${
                        insight.type === 'revenue' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}>
                        {insight.type === 'revenue' ? (
                          <TrendingUp className="h-6 w-6 text-white" />
                        ) : (
                          <AlertTriangle className="h-6 w-6 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{insight.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{insight.description}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-lg font-semibold text-green-600">{insight.impact}</span>
                        <span className="text-sm text-gray-500">{insight.confidence}% confidence</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h2>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {recentActivity.map((activity) => (
                  <li key={activity.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {activity.title}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            activity.status === 'completed' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {activity.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <Building2 className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            {activity.property}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}