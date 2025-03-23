// Local fallback responses
export const fallbackResponses = {
  greeting: {
    content: 'Hello! I\'m here to help you find influencers, learn about brands, or get collaboration recommendations. What would you like to know?',
    followUp: ['Find Influencers', 'Browse Brands', 'Learn About Collaborations']
  },
  error: {
    content: `I apologize, but I'm having trouble connecting to our AI service. Let me help you with some common questions:
    1. Finding influencers in specific categories
    2. Learning about brand collaboration opportunities
    3. Understanding our platform features
    What would you like to know more about?`,
    followUp: ['Search Categories', 'View Opportunities', 'Platform Guide']
  },
  influencer_search: {
    content: `I can help you find influencers based on:
    - Category (e.g., Fashion, Tech, Food)
    - Location
    - Follower count
    - Engagement rate
    What criteria are you interested in?`,
    followUp: ['Fashion', 'Tech', 'Food']
  },
  brand_info: {
    content: `I can provide information about:
    - Active brands on our platform
    - Collaboration opportunities
    - Campaign budgets
    - Success stories
    Which aspect interests you?`,
    followUp: ['View Brands', 'See Opportunities', 'Success Stories']
  }
} as const;