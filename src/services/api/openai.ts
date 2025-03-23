import { API_CONFIG } from '../../config/api';

interface OpenAIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export class OpenAIService {
  private static headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  };

  static async generateResponse(prompt: string): Promise<string> {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    try {
      const response = await fetch(API_CONFIG.OPENAI.URL, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          model: API_CONFIG.OPENAI.MODEL,
          messages: [{ role: 'user', content: prompt }],
          temperature: API_CONFIG.OPENAI.TEMPERATURE,
          max_tokens: API_CONFIG.OPENAI.MAX_TOKENS,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to generate AI response');
      }

      const data: OpenAIResponse = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw error;
    }
  }
}