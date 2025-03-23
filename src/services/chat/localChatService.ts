import type { Message } from '../../types/chat';

const defaultResponses = {
  greeting: 'Hi! I can help you find influencers and brands. What are you looking for?',
  error: 'I apologize, I\'m having trouble understanding. Could you rephrase that?',
  notFound: 'I couldn\'t find what you\'re looking for. Try being more specific.',
  default: 'I\'m here to help! Ask me about influencers or brands.'
};

export const localChatService = {
  getResponse(message: string): Message {
    // Simple keyword-based response system
    const lowerMessage = message.toLowerCase();
    let content = defaultResponses.default;

    if (lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
      content = defaultResponses.greeting;
    } else if (lowerMessage.includes('influencer') || lowerMessage.includes('creator')) {
      content = 'I can help you find influencers based on category, location, or followers count.';
    } else if (lowerMessage.includes('brand') || lowerMessage.includes('company')) {
      content = 'I can show you brands looking for collaborations in various industries.';
    }

    return {
      id: Date.now().toString(),
      role: 'assistant',
      content,
      timestamp: new Date().toISOString()
    };
  }
};