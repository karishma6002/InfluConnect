import { Influencer } from '../types';

export const generateInfluencerPrompt = (influencer: Influencer): string => {
  return `Given an influencer with the following details:
    - Name: ${influencer.name}
    - Categories: ${influencer.category.join(', ')}
    - Followers: ${influencer.followers}
    - Location: ${influencer.location}
    
    Suggest 3 potential brand collaboration ideas that would be a good fit.`;
};