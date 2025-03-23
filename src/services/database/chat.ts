import { createClient } from '@supabase/supabase-js';
import { Message } from '../../types/chat';
import { FallbackService } from '../chat/fallbackService';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const chatService = {
  async createSession() {
    try {
      const { data, error } = await supabase
        .from('chat_sessions')
        .insert([{}])
        .select()
        .single();
      
      if (error) {
        console.error('Failed to create chat session:', error);
        return null;
      }
      return data;
    } catch (error) {
      console.error('Failed to create chat session:', error);
      return null;
    }
  },

  async saveMessage(sessionId: string | null, message: Message) {
    if (!sessionId) return;
    
    try {
      const { error } = await supabase
        .from('chat_messages')
        .insert([{
          session_id: sessionId,
          role: message.role,
          content: message.content
        }]);
      
      if (error) {
        console.error('Failed to save message:', error);
      }
    } catch (error) {
      console.error('Failed to save message:', error);
    }
  },

  async getFallbackResponse(category: string): Promise<Message> {
    try {
      const { data, error } = await supabase
        .from('predefined_responses')
        .select('content, category')
        .eq('category', category)
        .maybeSingle();
      
      if (error || !data) {
        console.error('Failed to get predefined response:', error);
        return FallbackService.getResponse(category);
      }
      
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date().toISOString(),
        suggestions: FallbackService.getSuggestions(data.category)
      };
    } catch (error) {
      console.error('Failed to get fallback response:', error);
      return FallbackService.getResponse(category);
    }
  }
};