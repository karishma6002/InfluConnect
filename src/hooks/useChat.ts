import { useState, useCallback } from 'react';
import type { Message } from '../types/chat';
import { OpenAIService } from '../services/api/openai';
import { chatService } from '../services/database/chat';
import { generateMessage, generateResponse } from '../services/chat/messageGenerator';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const initializeChat = useCallback(async () => {
    const greeting = generateMessage('Hello! How can I help you find influencers or brands today?', 'assistant');
    setMessages([greeting]);
    
    try {
      const session = await chatService.createSession();
      setSessionId(session?.id || null);
      if (session?.id) {
        await chatService.saveMessage(session.id, greeting);
      }
    } catch (error) {
      console.error('Failed to initialize chat session:', error);
    }
  }, []);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage = generateMessage(content, 'user');
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const aiResponse = await OpenAIService.generateResponse(content);
      const assistantMessage = generateMessage(aiResponse, 'assistant');
      
      setMessages(prev => [...prev, assistantMessage]);
      
      if (sessionId) {
        await chatService.saveMessage(sessionId, assistantMessage);
      }
    } catch (error) {
      const fallbackMessage = generateResponse(content);
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage,
    initializeChat
  };
};