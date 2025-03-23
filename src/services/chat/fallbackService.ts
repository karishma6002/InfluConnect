import { fallbackResponses } from '../../data/chatResponses';
import type { Message } from '../../types/chat';

export class FallbackService {
  static getResponse(category: keyof typeof fallbackResponses): Message {
    // Default to error response if category doesn't exist
    const response = fallbackResponses[category] || fallbackResponses.error;
    
    return {
      id: Date.now().toString(),
      role: 'assistant',
      content: response.content,
      timestamp: new Date().toISOString(),
      suggestions: response.followUp
    };
  }

  static getSuggestions(category: keyof typeof fallbackResponses): string[] {
    return fallbackResponses[category]?.followUp || fallbackResponses.error.followUp;
  }

  static getCategoryFromQuery(query: string): keyof typeof fallbackResponses {
    const normalizedQuery = query.toLowerCase();
    
    if (normalizedQuery.includes('brand') || normalizedQuery.includes('company')) {
      return 'brand_info';
    }
    if (normalizedQuery.includes('influencer') || normalizedQuery.includes('creator')) {
      return 'influencer_search';
    }
    if (normalizedQuery.includes('hi') || normalizedQuery.includes('hello')) {
      return 'greeting';
    }
    return 'error';
  }
}