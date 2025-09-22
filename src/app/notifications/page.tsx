'use client'

import { useState } from 'react'
import Layout from '@/components/layout'
import { Bell, CheckCircle, AlertTriangle, Info, X, Calendar, DollarSign, Wrench } from 'lucide-react'

const notifications = [
  {
    id: 1,
    title: 'Rent Payment Overdue',
    message: 'Jane Smith\'s rent payment for Downtown Loft is 5 days overdue ($3,200)',
    type: 'RENT_OVERDUE',
    priority: 'HIGH',
    isRead: false,
    createdAt: '2024-09-20T10:30:00Z',
    metadata: {
      tenant: 'Jane Smith',
      property: 'Downtown Loft #15',
      amount: 3200,
      daysPastDue: 5
    }
  },
  {
    id: 2,
    title: 'Maintenance Request Submitted',
    message: 'New maintenance request: AC Unit Repair at Sunset Apartments #302',
    type: 'MAINTENANCE_REQUEST',
    priority: 'MEDIUM',
    isRead: true,
    createdAt: '2024-09-19T14:15:00Z',
    metadata: {
      property: 'Sunset Apartments #302',
      requestType: 'HVAC',
      priority: 'High'
    }
  },
  {
    id: 3,
    title: 'Lease Renewal Due',
    message: 'Lease for John Doe at Sunset Apartments expires in 45 days',
    type: 'LEASE_EXPIRING',
    priority: 'MEDIUM',
    isRead: false,
    createdAt: '2024-09-18T09:00:00Z',
    metadata: {
      tenant: 'John Doe',
      property: 'Sunset Apartments #302',
      expirationDate: '2024-12-31',
      daysUntilExpiration: 45
    }
  },
  {
    id: 4,
    title: 'Payment Received',
    message: 'Rent payment of $2,800 received from John Doe',
    type: 'PAYMENT_RECEIVED',
    priority: 'LOW',
    isRead: true,
    createdAt: '2024-09-17T16:45:00Z',
    metadata: {
      tenant: 'John Doe',
      amount: 2800,
      property: 'Sunset Apartments #302'
    }
  },
  {
    id: 5,
    title: 'AI Rent Optimization Alert',
    message: 'Opportunity to increase rent at Oak Street House by 15% based on market analysis',
    type: 'AI_INSIGHT',
    priority: 'MEDIUM',
    isRead: false,
    createdAt: '2024-09-16T11:20:00Z',
    metadata: {
      property: 'Oak Street House',
      currentRent: 4200,
      suggestedRent: 4830,
      potentialIncrease: 630
    }
  },
  {
    id: 6,
    title: 'Predictive Maintenance Alert',
    message: 'HVAC system maintenance recommended for Sunset Apartments within 30 days',
    type: 'AI_INSIGHT',
    priority: 'MEDIUM',
    isRead: true,
    createdAt: '2024-09-15T08:30:00Z',
    metadata: {
      property: 'Sunset Apartments',
      maintenanceType: 'HVAC',
      recommendedDate: '2024-10-15',
      estimatedCost: 450
    }
  }
]

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('all')
  const [notificationList, setNotificationList] = useState(notifications)

  const markAsRead = (id: number) => {
    setNotificationList(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    )
  }

  const dismissNotification = (id: number) => {
    setNotificationList(prev => 
      prev.filter(notification => notification.id !== id)
    )
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'RENT_OVERDUE':
        return <DollarSign className="h-5 w-5 text-red-500" />
      case 'MAINTENANCE_REQUEST':
        return <Wrench className="h-5 w-5 text-orange-500" />
      case 'LEASE_EXPIRING':
        return <Calendar className="h-5 w-5 text-yellow-500" />
      case 'PAYMENT_RECEIVED':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'AI_INSIGHT':
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'HIGH':
        return 'border-l-red-500 bg-red-50'
      case 'MEDIUM':
        return 'border-l-yellow-500 bg-yellow-50'
      case 'LOW':
        return 'border-l-green-500 bg-green-50'
      default:
        return 'border-l-gray-500 bg-gray-50'
    }
  }

  const filteredNotifications = notificationList.filter(notification => {
    switch (activeTab) {
      case 'unread':
        return !notification.isRead
      case 'high-priority':
        return notification.priority === 'HIGH'
      case 'ai-insights':
        return notification.type === 'AI_INSIGHT'
      default:
        return true
    }
  })

  const unreadCount = notificationList.filter(n => !n.isRead).length
  const highPriorityCount = notificationList.filter(n => n.priority === 'HIGH').length
  const aiInsightCount = notificationList.filter(n => n.type === 'AI_INSIGHT').length

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <Layout>
      <div className="min-h-full">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                  Notifications
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Stay updated with property alerts and AI insights
                </p>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <button
                  onClick={markAllAsRead}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Mark All as Read
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Notification Stats */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Bell className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Notifications</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{notificationList.length}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Unread</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{unreadCount}</dd>
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
                      <dd className="text-2xl font-semibold text-gray-900">{highPriorityCount}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Info className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">AI Insights</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{aiInsightCount}</dd>
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
                onClick={() => setActiveTab('all')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'all'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                All ({notificationList.length})
              </button>
              <button
                onClick={() => setActiveTab('unread')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'unread'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Unread ({unreadCount})
              </button>
              <button
                onClick={() => setActiveTab('high-priority')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'high-priority'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                High Priority ({highPriorityCount})
              </button>
              <button
                onClick={() => setActiveTab('ai-insights')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'ai-insights'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                🤖 AI Insights ({aiInsightCount})
              </button>
            </nav>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <div className="text-center py-12">
                <Bell className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-sm font-medium text-gray-900">No notifications</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {activeTab === 'unread' ? "You're all caught up!" : 'No notifications in this category'}
                </p>
              </div>
            ) : (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`border-l-4 p-4 rounded-r-lg shadow-sm transition-all duration-200 hover:shadow-md ${
                    getPriorityColor(notification.priority)
                  } ${notification.isRead ? 'opacity-75' : 'opacity-100'}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="flex-shrink-0">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className={`text-sm font-medium ${
                            notification.isRead ? 'text-gray-700' : 'text-gray-900'
                          }`}>
                            {notification.title}
                          </h3>
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            notification.priority === 'HIGH' ? 'bg-red-100 text-red-800' :
                            notification.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {notification.priority}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">
                          {notification.message}
                        </p>
                        <p className="mt-2 text-xs text-gray-500">
                          {formatDate(notification.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                        >
                          Mark as Read
                        </button>
                      )}
                      <button
                        onClick={() => dismissNotification(notification.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Notification Settings */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-3">Email Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Rent payment reminders</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Maintenance requests</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded" />
                      <span className="ml-2 text-sm text-gray-700">Lease expiration alerts</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">AI insights and recommendations</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-3">Push Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">High priority alerts only</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded" />
                      <span className="ml-2 text-sm text-gray-700">All notifications</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Daily summary</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}