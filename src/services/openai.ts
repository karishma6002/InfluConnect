import { API_CONFIG } from '../config/constants';

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export const generateAIResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch(API_CONFIG.OPENAI.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_CONFIG.OPENAI.API_KEY}`
      },
      body: JSON.stringify({
        model: API_CONFIG.OPENAI.MODEL,
        messages: [{ role: 'user', content: prompt }],
        temperature: API_CONFIG.OPENAI.TEMPERATURE,
        max_tokens: API_CONFIG.OPENAI.MAX_TOKENS
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate AI response');
    }

    const data: OpenAIResponse = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    return 'Unable to generate response at this time.';
  }
};