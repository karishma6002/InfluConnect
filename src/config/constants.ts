// Route Constants
export const ROUTES = {
  HOME: '/',
  EXPLORE: '/explore',
  BRANDS: '/brands',
  INFLUENCER: '/influencer/:id',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  CAREERS: '/careers',
  BLOG: '/blog',
  ABOUT: '/about',
} as const;

// API Configuration
export const API_CONFIG = {
  OPENAI: {
    API_KEY: import.meta.env.VITE_OPENAI_API_KEY,
    API_URL: 'https://api.openai.com/v1/chat/completions',
    MODEL: 'gpt-3.5-turbo',
    MAX_TOKENS: 150,
    TEMPERATURE: 0.7,
  },
} as const;