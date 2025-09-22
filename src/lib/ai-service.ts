import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export class AIService {
  // Predictive maintenance analysis
  static async analyzeMaintenanceNeeds(propertyData: any, maintenanceHistory: any[]) {
    try {
      const prompt = `
        Analyze this property data and maintenance history to predict future maintenance needs:
        
        Property: ${JSON.stringify(propertyData, null, 2)}
        Maintenance History: ${JSON.stringify(maintenanceHistory, null, 2)}
        
        Provide insights on:
        1. Likely upcoming maintenance issues
        2. Estimated costs
        3. Recommended timeline
        4. Priority level
        
        Return as JSON with structured recommendations.
      `

      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
      })

      return JSON.parse(response.choices[0].message.content || '{}')
    } catch (error) {
      console.error('AI maintenance analysis error:', error)
      return null
    }
  }

  // Rent optimization
  static async optimizeRentPricing(propertyData: any, marketData?: any) {
    try {
      const prompt = `
        Analyze this property to suggest optimal rent pricing:
        
        Property Details: ${JSON.stringify(propertyData, null, 2)}
        Market Data: ${JSON.stringify(marketData || {}, null, 2)}
        
        Consider:
        1. Property features and amenities
        2. Location factors
        3. Market trends
        4. Comparable properties
        
        Provide rent recommendations with reasoning.
        Return as JSON with suggested price range and justification.
      `

      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
      })

      return JSON.parse(response.choices[0].message.content || '{}')
    } catch (error) {
      console.error('AI rent optimization error:', error)
      return null
    }
  }

  // Tenant screening analysis
  static async analyzeTenantApplication(applicationData: any) {
    try {
      const prompt = `
        Analyze this tenant application and provide screening insights:
        
        Application: ${JSON.stringify(applicationData, null, 2)}
        
        Evaluate:
        1. Financial stability
        2. Rental history
        3. Employment stability
        4. Overall risk assessment
        
        Provide a risk score (1-10) and detailed analysis.
        Return as JSON with score and reasoning.
      `

      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.2,
      })

      return JSON.parse(response.choices[0].message.content || '{}')
    } catch (error) {
      console.error('AI tenant screening error:', error)
      return null
    }
  }

  // Property market analysis
  static async analyzePropertyMarket(propertyLocation: string, propertyType: string) {
    try {
      const prompt = `
        Provide market analysis for ${propertyType} properties in ${propertyLocation}:
        
        Include:
        1. Current market trends
        2. Average rental rates
        3. Occupancy rates
        4. Growth projections
        5. Investment recommendations
        
        Return as JSON with structured market insights.
      `

      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
      })

      return JSON.parse(response.choices[0].message.content || '{}')
    } catch (error) {
      console.error('AI market analysis error:', error)
      return null
    }
  }

  // Generate property description
  static async generatePropertyDescription(propertyData: any) {
    try {
      const prompt = `
        Create an attractive property listing description based on this data:
        
        ${JSON.stringify(propertyData, null, 2)}
        
        Make it engaging, highlight key features, and optimize for rental appeal.
        Keep it professional but appealing to potential tenants.
      `

      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      })

      return response.choices[0].message.content
    } catch (error) {
      console.error('AI description generation error:', error)
      return null
    }
  }
}