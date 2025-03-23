import { fashionInfluencers, fashionBrands } from './fashionData';
import { foodInfluencers, foodBrands } from './foodData';
import { techInfluencers, techBrands } from './techData';
import { travelInfluencers, travelBrands } from './travelData';
import { educationInfluencers, educationBrands } from './educationData';
import { gamingInfluencers, gamingBrands } from './gamingData';
import { fitnessInfluencers, fitnessBrands } from './fitnessData';
import { beautyInfluencers, beautyBrands } from './beautyData';
import { businessInfluencers, businessBrands } from './businessData';
import { comedyInfluencers, comedyBrands } from './comedyData';
import { globalInfluencers } from './globalInfluencers';
import { globalBrands } from './globalBrands';

export const allInfluencers = {
  Fashion: [...fashionInfluencers, ...globalInfluencers.filter(i => i.category.includes('Fashion'))],
  Food: [...foodInfluencers],
  Technology: [...techInfluencers],
  Travel: [...travelInfluencers],
  Education: [...educationInfluencers],
  Gaming: [...gamingInfluencers, ...globalInfluencers.filter(i => i.category.includes('Gaming'))],
  Fitness: [...fitnessInfluencers, ...globalInfluencers.filter(i => i.category.includes('Fitness'))],
  Beauty: [...beautyInfluencers, ...globalInfluencers.filter(i => i.category.includes('Beauty'))],
  Business: [...businessInfluencers],
  Comedy: [...comedyInfluencers]
};

export const allBrands = {
  Fashion: [...fashionBrands, ...globalBrands.filter(b => b.industry.includes('Fashion'))],
  Food: [...foodBrands],
  Technology: [...techBrands],
  Travel: [...travelBrands],
  Education: [...educationBrands],
  Gaming: [...gamingBrands, ...globalBrands.filter(b => b.industry.includes('Gaming'))],
  Fitness: [...fitnessBrands, ...globalBrands.filter(b => b.industry.includes('Fitness'))],
  Beauty: [...beautyBrands, ...globalBrands.filter(b => b.industry.includes('Beauty'))],
  Business: [...businessBrands],
  Comedy: [...comedyBrands]
};

export const getInfluencersByCategory = (category: string) => {
  return allInfluencers[category as keyof typeof allInfluencers] || [];
};

export const getBrandsByCategory = (category: string) => {
  return allBrands[category as keyof typeof allBrands] || [];
};