const keywordMap = {
  greeting: ['hi', 'hello', 'hey'],
  influencer: ['influencer', 'creator', 'content'],
  brand: ['brand', 'company', 'business'],
  collaboration: ['collab', 'partnership', 'work together']
} as const;

export type ResponseType = keyof typeof keywordMap;

export const matchKeywords = (message: string): ResponseType => {
  const lowerMessage = message.toLowerCase();
  
  for (const [type, keywords] of Object.entries(keywordMap)) {
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return type as ResponseType;
    }
  }
  
  return 'default';
};