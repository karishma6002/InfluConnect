export interface APIResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

export interface OpenAIConfig {
  model: string;
  temperature: number;
  maxTokens: number;
}

export interface AIResponse {
  content: string;
  timestamp: string;
}