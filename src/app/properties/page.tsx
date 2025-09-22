'use client'

import { useState } from 'react'
import Layout from '@/components/layout'
import { Building2, Plus, Search, MapPin, DollarSign, Users, Wrench, Star } from 'lucide-react'

const properties = [
  {
    id: 1,
    name: 'Sunset Apartments',
    address: '123 Sunset Blvd, Los Angeles, CA 90028',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    monthlyRent: 2800,
    status: 'Occupied',
    tenant: 'John Doe',
    image: '/api/placeholder/400/300',
    occupancyRate: 95,
    maintenanceRequests: 2,
    rating: 4.5
  },
  {
    id: 2,
    name: 'Oak Street House',
    address: '456 Oak Street, San Francisco, CA 94102',
    type: 'House',
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    monthlyRent: 4200,
    status: 'Available',
    tenant: null,
    image: '/api/placeholder/400/300',
    occupancyRate: 0,
    maintenanceRequests: 0,
    rating: 4.8
  },
  {
    id: 3,
    name: 'Downtown Loft',
    address: '789 Main St, New York, NY 10001',
    type: 'Loft',
    bedrooms: 1,
    bathrooms: 1,
    area: 900,
    monthlyRent: 3200,
    status: 'Occupied',
    tenant: 'Jane Smith',
    image: '/api/placeholder/400/300',
    occupancyRate: 100,
    maintenanceRequests: 1,
    rating: 4.2
  }
]

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || property.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Occupied':
        return 'bg-green-100 text-green-800'
      case 'Available':
        return 'bg-blue-100 text-blue-800'
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
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
                  Properties
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your property portfolio
                </p>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Property
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filter Bar */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search properties..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="All">All Status</option>
              <option value="Occupied">Occupied</option>
              <option value="Available">Available</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      <span>{property.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.address}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>{property.bedrooms} bed • {property.bathrooms} bath</span>
                    <span>{property.area} sq ft</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-green-600 font-semibold">
                      <DollarSign className="h-5 w-5 mr-1" />
                      ${property.monthlyRent.toLocaleString()}/month
                    </div>
                  </div>
                  
                  {property.tenant && (
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Users className="h-4 w-4 mr-2" />
                      Tenant: {property.tenant}
                    </div>
                  )}
                  
                  {property.maintenanceRequests > 0 && (
                    <div className="flex items-center text-sm text-orange-600 mb-4">
                      <Wrench className="h-4 w-4 mr-2" />
                      {property.maintenanceRequests} maintenance request{property.maintenanceRequests > 1 ? 's' : ''}
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      View Details
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">🤖 AI Property Insights</h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-2">Market Opportunity</h3>
                <p className="text-sm text-gray-600">
                  Oak Street House rent is 15% below market average. Consider increasing to $4,830/month.
                </p>
                <div className="mt-2 text-lg font-semibold text-green-600">
                  Potential: +$630/month
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-2">Predictive Maintenance</h3>
                <p className="text-sm text-gray-600">
                  HVAC systems in 2 properties are due for seasonal maintenance within 60 days.
                </p>
                <div className="mt-2 text-lg font-semibold text-blue-600">
                  Prevent $3,200 in repairs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}