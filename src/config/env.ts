// Environment variables configuration
export const env = {
  OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY,
  NODE_ENV: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
} as const;