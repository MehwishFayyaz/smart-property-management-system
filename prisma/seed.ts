import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create users
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Property Manager',
      role: 'PROPERTY_MANAGER',
      phone: '+1-555-123-4567',
    },
  })

  const tenant1 = await prisma.user.create({
    data: {
      email: 'john.doe@example.com',
      name: 'John Doe',
      role: 'TENANT',
      phone: '+1-555-234-5678',
    },
  })

  const tenant2 = await prisma.user.create({
    data: {
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      role: 'TENANT',
      phone: '+1-555-345-6789',
    },
  })

  // Create properties
  const property1 = await prisma.property.create({
    data: {
      name: 'Sunset Apartments',
      description: 'Beautiful 2-bedroom apartment with city views',
      address: '123 Sunset Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90028',
      type: 'APARTMENT',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      status: 'OCCUPIED',
      monthlyRent: 2800,
      purchasePrice: 450000,
      currentValue: 520000,
      amenities: {
        "parking": true,
        "gym": true,
        "pool": false,
        "laundry": true
      },
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400"
      ],
      ownerId: adminUser.id,
      managerId: adminUser.id,
    },
  })

  const property2 = await prisma.property.create({
    data: {
      name: 'Oak Street House',
      description: 'Spacious family home with garden',
      address: '456 Oak Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      type: 'HOUSE',
      bedrooms: 3,
      bathrooms: 2.5,
      area: 1800,
      status: 'AVAILABLE',
      monthlyRent: 4200,
      purchasePrice: 750000,
      currentValue: 850000,
      amenities: {
        "parking": true,
        "garden": true,
        "fireplace": true,
        "garage": true
      },
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400",
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400"
      ],
      ownerId: adminUser.id,
      managerId: adminUser.id,
    },
  })

  const property3 = await prisma.property.create({
    data: {
      name: 'Downtown Loft',
      description: 'Modern loft in the heart of downtown',
      address: '789 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      type: 'APARTMENT',
      bedrooms: 1,
      bathrooms: 1,
      area: 900,
      status: 'OCCUPIED',
      monthlyRent: 3200,
      purchasePrice: 550000,
      currentValue: 600000,
      amenities: {
        "parking": false,
        "gym": true,
        "concierge": true,
        "rooftop": true
      },
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400"
      ],
      ownerId: adminUser.id,
      managerId: adminUser.id,
    },
  })

  // Create leases
  const lease1 = await prisma.lease.create({
    data: {
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      monthlyRent: 2800,
      securityDeposit: 2800,
      status: 'ACTIVE',
      terms: 'Standard 12-month lease agreement',
      propertyId: property1.id,
      tenantId: tenant1.id,
    },
  })

  const lease2 = await prisma.lease.create({
    data: {
      startDate: new Date('2024-03-01'),
      endDate: new Date('2025-02-28'),
      monthlyRent: 3200,
      securityDeposit: 3200,
      status: 'ACTIVE',
      terms: 'Standard 12-month lease agreement',
      propertyId: property3.id,
      tenantId: tenant2.id,
    },
  })

  // Create maintenance requests
  await prisma.maintenanceRequest.create({
    data: {
      title: 'AC Unit Repair',
      description: 'Air conditioning unit not cooling properly',
      priority: 'HIGH',
      status: 'PENDING',
      category: 'HVAC',
      estimatedCost: 300,
      images: [],
      propertyId: property1.id,
      tenantId: tenant1.id,
    },
  })

  await prisma.maintenanceRequest.create({
    data: {
      title: 'Kitchen Faucet Leak',
      description: 'Small leak under kitchen sink',
      priority: 'MEDIUM',
      status: 'IN_PROGRESS',
      category: 'Plumbing',
      estimatedCost: 150,
      scheduledDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      images: [],
      propertyId: property3.id,
      tenantId: tenant2.id,
    },
  })

  // Create payments
  await prisma.payment.create({
    data: {
      amount: 2800,
      dueDate: new Date('2024-09-01'),
      paidDate: new Date('2024-08-31'),
      method: 'BANK_TRANSFER',
      status: 'PAID',
      type: 'RENT',
      description: 'September 2024 rent',
      leaseId: lease1.id,
      tenantId: tenant1.id,
    },
  })

  await prisma.payment.create({
    data: {
      amount: 3200,
      dueDate: new Date('2024-09-01'),
      status: 'PENDING',
      type: 'RENT',
      description: 'September 2024 rent',
      leaseId: lease2.id,
      tenantId: tenant2.id,
    },
  })

  // Create AI Analytics
  await prisma.aIAnalytics.create({
    data: {
      type: 'RENT_OPTIMIZATION',
      data: {
        currentRent: 4200,
        suggestedRent: 4830,
        marketAverage: 4815,
        confidence: 0.85
      },
      insights: {
        recommendation: 'Increase rent by 15%',
        reasoning: 'Property is underpriced compared to market average'
      },
      confidence: 0.85,
      propertyId: property2.id,
    },
  })

  // Create notifications
  await prisma.notification.create({
    data: {
      title: 'Rent Payment Overdue',
      message: 'Rent payment for Downtown Loft is 3 days overdue',
      type: 'RENT_OVERDUE',
      priority: 'HIGH',
      userId: adminUser.id,
    },
  })

  await prisma.notification.create({
    data: {
      title: 'Maintenance Request Submitted',
      message: 'New maintenance request for AC repair at Sunset Apartments',
      type: 'MAINTENANCE_REQUEST',
      priority: 'MEDIUM',
      userId: adminUser.id,
    },
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })