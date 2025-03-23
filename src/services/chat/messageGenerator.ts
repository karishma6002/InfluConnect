import type { Message } from '../../types/chat';
import { defaultResponses } from './responses/defaultResponses';
import { matchKeywords } from './responses/keywordMatcher';

export const generateMessage = (content: string, role: 'user' | 'assistant'): Message => ({
  id: Date.now().toString(),
  role,
  content,
  timestamp: new Date().toISOString()
});

export const generateResponse = (userMessage: string): Message => {
  const responseType = matchKeywords(userMessage);
  const content = defaultResponses[responseType];
  return generateMessage(content, 'assistant');
};