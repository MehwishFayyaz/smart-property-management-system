'use client'

import { useState } from 'react'
import Layout from '@/components/layout'
import { Wrench, Plus, Clock, CheckCircle, AlertTriangle, User, MapPin, DollarSign } from 'lucide-react'

const maintenanceRequests = [
  {
    id: 1,
    title: 'AC Unit Repair',
    description: 'Air conditioning unit not cooling properly in unit 302',
    property: 'Sunset Apartments #302',
    tenant: 'John Doe',
    priority: 'High',
    status: 'Pending',
    category: 'HVAC',
    estimatedCost: 300,
    actualCost: null,
    createdDate: '2024-09-20',
    scheduledDate: '2024-09-23',
    completedDate: null,
    contractor: null,
    images: []
  },
  {
    id: 2,
    title: 'Kitchen Faucet Leak',
    description: 'Small leak under kitchen sink, water damage possible',
    property: 'Downtown Loft #15',
    tenant: 'Jane Smith',
    priority: 'Medium',
    status: 'In Progress',
    category: 'Plumbing',
    estimatedCost: 150,
    actualCost: null,
    createdDate: '2024-09-18',
    scheduledDate: '2024-09-22',
    completedDate: null,
    contractor: 'Mike\'s Plumbing',
    images: []
  },
  {
    id: 3,
    title: 'Front Door Lock Replacement',
    description: 'Key sticking in lock, tenant having difficulty accessing unit',
    property: 'Oak Street House',
    tenant: null,
    priority: 'Low',
    status: 'Completed',
    category: 'Security',
    estimatedCost: 100,
    actualCost: 85,
    createdDate: '2024-09-15',
    scheduledDate: '2024-09-17',
    completedDate: '2024-09-17',
    contractor: 'SecureLock Services',
    images: []
  }
]

const contractors = [
  {
    id: 1,
    name: 'Mike\'s Plumbing',
    specialty: 'Plumbing',
    rating: 4.8,
    phone: '+1-555-PLUMB-01',
    email: 'mike@mikesplumbing.com',
    hourlyRate: 85,
    availability: 'Available'
  },
  {
    id: 2,
    name: 'SecureLock Services',
    specialty: 'Security & Locks',
    rating: 4.6,
    phone: '+1-555-LOCK-SEC',
    email: 'info@securelock.com',
    hourlyRate: 75,
    availability: 'Busy until Sept 25'
  },
  {
    id: 3,
    name: 'CoolAir HVAC',
    specialty: 'HVAC',
    rating: 4.9,
    phone: '+1-555-COOL-AIR',
    email: 'service@coolairhvac.com',
    hourlyRate: 95,
    availability: 'Available'
  }
]

export default function Maintenance() {
  const [activeTab, setActiveTab] = useState('requests')
  const [statusFilter, setStatusFilter] = useState('All')
  const [priorityFilter, setPriorityFilter] = useState('All')

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'in progress':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return <Clock className="h-4 w-4" />
      case 'in progress':
        return <Wrench className="h-4 w-4" />
      case 'completed':
        return <CheckCircle className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const filteredRequests = maintenanceRequests.filter(request => {
    const matchesStatus = statusFilter === 'All' || request.status === statusFilter
    const matchesPriority = priorityFilter === 'All' || request.priority === priorityFilter
    return matchesStatus && matchesPriority
  })

  return (
    <Layout>
      <div className="min-h-full">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                  Maintenance Management
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Track and manage property maintenance requests
                </p>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Plus className="mr-2 h-4 w-4" />
                  New Request
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Wrench className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Requests</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{maintenanceRequests.length}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Pending</dt>
                      <dd className="text-2xl font-semibold text-gray-900">
                        {maintenanceRequests.filter(r => r.status === 'Pending').length}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">High Priority</dt>
                      <dd className="text-2xl font-semibold text-gray-900">
                        {maintenanceRequests.filter(r => r.priority === 'High').length}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Avg. Cost</dt>
                      <dd className="text-2xl font-semibold text-gray-900">
                        $
                        {Math.round(
                          maintenanceRequests.reduce((sum, r) => sum + (r.actualCost || r.estimatedCost), 0) / 
                          maintenanceRequests.length
                        )}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('requests')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'requests'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Maintenance Requests
              </button>
              <button
                onClick={() => setActiveTab('contractors')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contractors'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Contractors
              </button>
            </nav>
          </div>

          {activeTab === 'requests' && (
            <div>
              {/* Filters */}
              <div className="mb-6 flex space-x-4">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="All">All Priority</option>
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </select>
              </div>

              {/* Maintenance Requests List */}
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {filteredRequests.map((request) => (
                    <li key={request.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 mr-3">
                              {getStatusIcon(request.status)}
                            </div>
                            <p className="text-lg font-medium text-indigo-600">{request.title}</p>
                            <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                              {request.priority} Priority
                            </span>
                            <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                              {request.status}
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-medium text-gray-900">
                              ${request.actualCost || request.estimatedCost}
                              {!request.actualCost && <span className="text-sm text-gray-500"> (est.)</span>}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-600">{request.description}</p>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                              {request.property}
                            </p>
                            {request.tenant && (
                              <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                <User className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                {request.tenant}
                              </p>
                            )}
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <p>Created: {request.createdDate}</p>
                            {request.scheduledDate && (
                              <p className="ml-4">Scheduled: {request.scheduledDate}</p>
                            )}
                          </div>
                        </div>
                        <div className="mt-3 flex space-x-3">
                          <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                            View Details
                          </button>
                          <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                            Assign Contractor
                          </button>
                          <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                            Update Status
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'contractors' && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contractors.map((contractor) => (
                <div key={contractor.id} className="bg-white overflow-hidden shadow-lg rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{contractor.name}</h3>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{contractor.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Specialty: {contractor.specialty}</p>
                    <p className="text-sm text-gray-600 mb-2">Rate: ${contractor.hourlyRate}/hour</p>
                    <p className="text-sm text-gray-600 mb-4">Status: {contractor.availability}</p>
                    <div className="space-y-2">
                      <button className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700">
                        Assign to Request
                      </button>
                      <button className="w-full bg-gray-100 text-gray-700 text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-200">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* AI Maintenance Insights */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">🤖 Predictive Maintenance</h2>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">Upcoming Maintenance</h3>
                  <p className="text-sm text-gray-600">
                    Based on usage patterns, HVAC systems in Sunset Apartments will likely need servicing within 30-45 days.
                  </p>
                  <div className="mt-2 text-sm font-semibold text-orange-600">
                    Schedule preventive maintenance to avoid $2,500 emergency repair
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">Cost Optimization</h3>
                  <p className="text-sm text-gray-600">
                    Scheduling regular maintenance could reduce annual repair costs by 35% across your portfolio.
                  </p>
                  <div className="mt-2 text-sm font-semibold text-green-600">
                    Potential savings: $4,200/year
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