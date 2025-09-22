'use client'

import { useState } from 'react'
import Layout from '@/components/layout'
import { Users, Mail, Phone, MapPin, Calendar, DollarSign, AlertCircle, CheckCircle } from 'lucide-react'

const tenants = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-555-234-5678',
    property: 'Sunset Apartments #302',
    leaseStart: '2024-01-01',
    leaseEnd: '2024-12-31',
    monthlyRent: 2800,
    status: 'Active',
    paymentStatus: 'Current',
    lastPayment: '2024-08-31',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1-555-345-6789',
    property: 'Downtown Loft #15',
    leaseStart: '2024-03-01',
    leaseEnd: '2025-02-28',
    monthlyRent: 3200,
    status: 'Active',
    paymentStatus: 'Overdue',
    lastPayment: '2024-07-31',
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith'
  }
]

const paymentHistory = [
  {
    tenant: 'John Doe',
    amount: 2800,
    date: '2024-08-31',
    status: 'Paid',
    method: 'Bank Transfer'
  },
  {
    tenant: 'Jane Smith',
    amount: 3200,
    date: '2024-09-01',
    status: 'Overdue',
    method: 'Check'
  },
  {
    tenant: 'John Doe',
    amount: 2800,
    date: '2024-07-31',
    status: 'Paid',
    method: 'Bank Transfer'
  }
]

export default function Tenants() {
  const [activeTab, setActiveTab] = useState('tenants')

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Current':
      case 'Paid':
        return 'text-green-600 bg-green-100'
      case 'Overdue':
        return 'text-red-600 bg-red-100'
      case 'Pending':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <Layout>
      <div className="min-h-full">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                  Tenant Management
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage tenants, leases, and payments
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('tenants')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'tenants'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Tenants
              </button>
              <button
                onClick={() => setActiveTab('payments')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'payments'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Payment History
              </button>
            </nav>
          </div>

          {activeTab === 'tenants' && (
            <div>
              {/* Tenants Overview */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Users className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Tenants</dt>
                          <dd className="text-2xl font-semibold text-gray-900">2</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Current Payments</dt>
                          <dd className="text-2xl font-semibold text-gray-900">1</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-6 w-6 text-red-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Overdue Payments</dt>
                          <dd className="text-2xl font-semibold text-gray-900">1</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tenants List */}
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {tenants.map((tenant) => (
                    <li key={tenant.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              className="h-12 w-12 rounded-full"
                              src={tenant.avatar}
                              alt=""
                            />
                            <div className="ml-4">
                              <div className="flex items-center">
                                <p className="text-lg font-medium text-indigo-600">{tenant.name}</p>
                                <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPaymentStatusColor(tenant.paymentStatus)}`}>
                                  {tenant.paymentStatus}
                                </span>
                              </div>
                              <div className="mt-2 flex items-center text-sm text-gray-500">
                                <Mail className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                <p>{tenant.email}</p>
                                <Phone className="flex-shrink-0 ml-6 mr-1.5 h-4 w-4 text-gray-400" />
                                <p>{tenant.phone}</p>
                              </div>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <div className="text-right">
                              <p className="text-lg font-medium text-gray-900">${tenant.monthlyRent}/month</p>
                              <p className="text-sm text-gray-500">Last payment: {tenant.lastPayment}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              {tenant.property}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              {tenant.leaseStart} - {tenant.leaseEnd}
                            </p>
                          </div>
                          <div className="mt-2 flex space-x-3 sm:mt-0">
                            <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                              View Details
                            </button>
                            <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Payment History</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tenant
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Method
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {paymentHistory.map((payment, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {payment.tenant}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              ${payment.amount.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {payment.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {payment.method}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPaymentStatusColor(payment.status)}`}>
                                {payment.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Tenant Insights */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">🤖 Tenant Insights</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">Payment Risk Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Jane Smith has a 72% risk of continued late payments based on historical patterns.
                  </p>
                  <div className="mt-2 text-sm font-semibold text-yellow-600">
                    Recommendation: Schedule payment reminder automation
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">Lease Renewal Probability</h3>
                  <p className="text-sm text-gray-600">
                    John Doe has a 85% probability of lease renewal based on satisfaction indicators.
                  </p>
                  <div className="mt-2 text-sm font-semibold text-green-600">
                    Start renewal process 90 days early
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}