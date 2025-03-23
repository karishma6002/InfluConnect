// API configuration
export const API_CONFIG = {
  OPENAI: {
    URL: 'https://api.openai.com/v1/chat/completions',
    MODEL: 'gpt-3.5-turbo',
    MAX_TOKENS: 150,
    TEMPERATURE: 0.7,
  },
} as const;