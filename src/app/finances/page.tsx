'use client'

import { useState } from 'react'
import Layout from '@/components/layout'
import { DollarSign, TrendingUp, TrendingDown, PieChart, BarChart3, Calendar, Download } from 'lucide-react'

const monthlyData = [
  { month: 'Jan', income: 12000, expenses: 3200, profit: 8800 },
  { month: 'Feb', income: 12000, expenses: 2800, profit: 9200 },
  { month: 'Mar', income: 12000, expenses: 4100, profit: 7900 },
  { month: 'Apr', income: 12000, expenses: 2600, profit: 9400 },
  { month: 'May', income: 12000, expenses: 3800, profit: 8200 },
  { month: 'Jun', income: 12000, expenses: 2900, profit: 9100 },
  { month: 'Jul', income: 12000, expenses: 3400, profit: 8600 },
  { month: 'Aug', income: 12000, expenses: 2700, profit: 9300 },
  { month: 'Sep', income: 12000, expenses: 3100, profit: 8900 },
]

const recentTransactions = [
  {
    id: 1,
    type: 'income',
    description: 'Rent Payment - John Doe',
    amount: 2800,
    date: '2024-09-01',
    property: 'Sunset Apartments #302',
    category: 'Rent'
  },
  {
    id: 2,
    type: 'expense',
    description: 'AC Repair Service',
    amount: -285,
    date: '2024-09-15',
    property: 'Sunset Apartments #302',
    category: 'Maintenance'
  },
  {
    id: 3,
    type: 'income',
    description: 'Rent Payment - Jane Smith',
    amount: 3200,
    date: '2024-08-31',
    property: 'Downtown Loft #15',
    category: 'Rent'
  },
  {
    id: 4,
    type: 'expense',
    description: 'Property Insurance',
    amount: -450,
    date: '2024-09-10',
    property: 'All Properties',
    category: 'Insurance'
  },
  {
    id: 5,
    type: 'expense',
    description: 'Property Tax',
    amount: -1250,
    date: '2024-09-05',
    property: 'Oak Street House',
    category: 'Taxes'
  }
]

const expenseCategories = [
  { category: 'Maintenance', amount: 2850, percentage: 35, color: 'bg-blue-500' },
  { category: 'Insurance', amount: 1800, percentage: 22, color: 'bg-green-500' },
  { category: 'Taxes', amount: 2100, percentage: 26, color: 'bg-yellow-500' },
  { category: 'Utilities', amount: 890, percentage: 11, color: 'bg-purple-500' },
  { category: 'Legal', amount: 480, percentage: 6, color: 'bg-red-500' },
]

export default function Finances() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')

  const totalIncome = recentTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = Math.abs(recentTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0))

  const netProfit = totalIncome - totalExpenses

  const currentMonth = monthlyData[monthlyData.length - 1]

  return (
    <Layout>
      <div className="min-h-full">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                  Financial Management
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Track income, expenses, and profitability
                </p>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Download className="mr-2 h-4 w-4" />
                  Export Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Financial Summary */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Income</dt>
                      <dd className="text-2xl font-semibold text-gray-900">${currentMonth.income.toLocaleString()}</dd>
                      <dd className="text-sm text-green-600">+5.2% from last month</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingDown className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Expenses</dt>
                      <dd className="text-2xl font-semibold text-gray-900">${currentMonth.expenses.toLocaleString()}</dd>
                      <dd className="text-sm text-red-600">+8.1% from last month</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Net Profit</dt>
                      <dd className="text-2xl font-semibold text-gray-900">${currentMonth.profit.toLocaleString()}</dd>
                      <dd className="text-sm text-green-600">+3.8% from last month</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Profit Margin</dt>
                      <dd className="text-2xl font-semibold text-gray-900">
                        {Math.round((currentMonth.profit / currentMonth.income) * 100)}%
                      </dd>
                      <dd className="text-sm text-green-600">Excellent performance</dd>
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
                onClick={() => setActiveTab('overview')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('transactions')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'transactions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Transactions
              </button>
              <button
                onClick={() => setActiveTab('expenses')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'expenses'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Expense Analysis
              </button>
            </nav>
          </div>

          {activeTab === 'overview' && (
            <div>
              {/* Monthly Trend Chart Placeholder */}
              <div className="bg-white shadow rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Monthly Financial Trend</h3>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Interactive chart would be displayed here</p>
                    <p className="text-sm text-gray-400">Showing income vs expenses trend</p>
                  </div>
                </div>
              </div>

              {/* Property Performance */}
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Property Performance</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Sunset Apartments', income: 2800, expenses: 850, profit: 1950, roi: 15.2 },
                    { name: 'Downtown Loft', income: 3200, expenses: 900, profit: 2300, roi: 18.7 },
                    { name: 'Oak Street House', income: 0, expenses: 420, profit: -420, roi: -2.1 }
                  ].map((property) => (
                    <div key={property.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{property.name}</h4>
                        <p className="text-sm text-gray-500">Monthly performance</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">
                          ${property.profit.toLocaleString()}
                        </p>
                        <p className={`text-sm ${property.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {property.roi > 0 ? '+' : ''}{property.roi}% ROI
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Transactions</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Property
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {transaction.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {transaction.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {transaction.property}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {transaction.category}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                            transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'expenses' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Expense Categories */}
                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Expense Categories</h3>
                  <div className="space-y-4">
                    {expenseCategories.map((category) => (
                      <div key={category.category} className="flex items-center">
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-900">{category.category}</span>
                            <span className="text-sm text-gray-500">${category.amount.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${category.color}`}
                              style={{ width: `${category.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="ml-4 text-sm text-gray-500">{category.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expense Trends */}
                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Expense Trends</h3>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Expense trend chart</p>
                      <p className="text-sm text-gray-400">Breakdown by category over time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Financial Insights */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">🤖 Financial AI Insights</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">Revenue Optimization</h3>
                  <p className="text-sm text-gray-600">
                    Based on market analysis, you could increase total portfolio revenue by 12% through strategic rent adjustments.
                  </p>
                  <div className="mt-2 text-lg font-semibold text-green-600">
                    Potential increase: +$1,440/month
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">Cost Reduction Opportunities</h3>
                  <p className="text-sm text-gray-600">
                    Maintenance costs are 23% higher than similar properties. Implementing predictive maintenance could reduce expenses.
                  </p>
                  <div className="mt-2 text-lg font-semibold text-blue-600">
                    Potential savings: $780/month
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