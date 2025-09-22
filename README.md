# 🏢 Smart Property Management System

An AI-powered property management solution built with Next.js, React, and modern web technologies. This comprehensive system helps property managers streamline operations, predict maintenance needs, optimize rental income, and provide excellent tenant experiences.

## ✨ Features

### 🎯 Core Functionality
- **Property Portfolio Management** - Add, edit, and track multiple properties
- **Tenant Management** - Complete tenant profiles, lease tracking, and communication
- **Maintenance System** - Work orders, contractor management, and scheduling
- **Financial Management** - Rent collection, expense tracking, and financial reporting
- **Real-time Notifications** - Automated alerts for rent, maintenance, and lease renewals

### 🤖 AI-Powered Features
- **Predictive Maintenance** - AI predicts when maintenance is needed before issues occur
- **Rent Optimization** - Market analysis and rent suggestions to maximize income
- **Tenant Screening** - AI-assisted evaluation of tenant applications
- **Financial Insights** - Automated reporting and profitability analysis
- **Market Analytics** - Real-time market trends and investment recommendations

### 🔐 Security & Authentication
- **NextAuth.js Integration** - Secure authentication with multiple providers
- **Role-Based Access Control** - Different permissions for managers, tenants, and contractors
- **Data Protection** - Encrypted data storage and secure API endpoints

## 🛠️ Technology Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes, Prisma ORM
- **Database:** SQLite (development), PostgreSQL (production ready)
- **Authentication:** NextAuth.js with Google OAuth and credentials
- **AI Integration:** OpenAI API for intelligent insights
- **UI Components:** Headless UI, Radix UI, Lucide Icons
- **Charts & Analytics:** Recharts for data visualization

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd smart-property-management-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="file:./dev.db"

   # NextAuth.js
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"

   # OpenAI API (Optional for AI features)
   OPENAI_API_KEY="your-openai-api-key-here"

   # Google OAuth (Optional)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Set up the database:**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   npx ts-node prisma/seed.ts
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to `http://localhost:3000`

## 👤 Demo Credentials

Use these credentials to test the application:

**Property Manager:**
- Email: `admin@example.com`
- Password: `password123`

**Tenant:**
- Email: `john.doe@example.com`
- Password: `password123`

## 📱 Main Features Overview

### 🏠 Dashboard
- Property portfolio overview
- Key performance metrics
- Recent activity feed
- AI-powered insights and recommendations

### 🏢 Property Management
- Property listings with photos and details
- Occupancy tracking and status management
- Market value analysis and rent optimization suggestions
- Property performance analytics

### 👥 Tenant Portal
- Complete tenant profiles and contact information
- Lease management and renewal tracking
- Payment history and status monitoring
- Communication tools and document sharing

### 🔧 Maintenance System
- Maintenance request tracking and prioritization
- Contractor management and assignment
- Cost estimation and budget tracking
- Predictive maintenance recommendations

### 💰 Financial Management
- Income and expense tracking
- Automated rent collection monitoring
- Financial reporting and analytics
- ROI calculations and profitability analysis

### 🔔 Smart Notifications
- Automated rent reminders and overdue alerts
- Maintenance request notifications
- Lease expiration warnings
- AI-generated insights and recommendations

## 🤖 AI Features Explained

### Predictive Maintenance
The system analyzes historical maintenance data, property age, usage patterns, and external factors to predict when maintenance will be needed. This helps prevent costly emergency repairs and extends equipment life.

### Rent Optimization
AI analyzes market data, property features, location factors, and demand patterns to suggest optimal rental prices. This ensures competitive pricing while maximizing revenue.

### Tenant Screening
The system evaluates tenant applications using multiple factors including financial stability, rental history, and employment status to provide risk assessments and recommendations.

### Financial Analytics
AI-powered financial analysis provides insights into spending patterns, identifies cost-saving opportunities, and predicts future cash flow trends.

## 📊 Database Schema

The application uses a comprehensive database schema with the following main entities:

- **Users** - Property managers, tenants, contractors
- **Properties** - Property details, images, amenities
- **Leases** - Lease agreements and terms
- **Maintenance Requests** - Work orders and contractor assignments
- **Payments** - Rent payments and transaction history
- **Notifications** - System alerts and user communications
- **AI Analytics** - Machine learning insights and predictions

## 🔧 Development

### Project Structure
```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── lib/                # Utility functions and configurations
├── prisma/             # Database schema and migrations
└── types/              # TypeScript type definitions
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npx prisma studio` - Open database browser
- `npx prisma migrate dev` - Run database migrations

### Adding New Features

1. **Database Changes:**
   ```bash
   # Update schema.prisma
   npx prisma migrate dev --name your-feature-name
   npx prisma generate
   ```

2. **Create New Pages:**
   ```bash
   # Add new page in src/app/your-page/page.tsx
   ```

3. **Add API Endpoints:**
   ```bash
   # Create API route in src/app/api/your-endpoint/route.ts
   ```

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically with each commit

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔒 Security Considerations

- All sensitive data is encrypted
- API routes are protected with authentication
- Role-based access control prevents unauthorized access
- Input validation and sanitization on all forms
- Secure session management with NextAuth.js

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@example.com or create an issue in the GitHub repository.

## 🎯 Future Enhancements

- [ ] Mobile app development (React Native)
- [ ] Advanced reporting and analytics dashboard
- [ ] Integration with accounting software (QuickBooks, Xero)
- [ ] Automated lease document generation
- [ ] Tenant screening API integrations
- [ ] IoT device integration for smart properties
- [ ] Multi-language support
- [ ] Advanced AI features (image recognition, voice commands)

## 🏆 Acknowledgments

- Next.js team for the amazing framework
- Prisma for the excellent database toolkit
- OpenAI for AI capabilities
- All the open-source contributors

---

Built with ❤️ using modern web technologies for efficient property management.
