import { useState } from 'react';
import { OpenAIService } from '../../services/api/openai';
import { Influencer } from '../../types';
import { generateInfluencerPrompt } from '../../utils/ai/prompts';

export const useAIRecommendations = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCollaborationSuggestions = async (influencer: Influencer) => {
    setLoading(true);
    setError(null);
    try {
      const prompt = generateInfluencerPrompt(influencer);
      const response = await OpenAIService.generateResponse(prompt);
      return response;
    } catch (err) {
      setError('Failed to generate recommendations');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { getCollaborationSuggestions, loading, error };
};