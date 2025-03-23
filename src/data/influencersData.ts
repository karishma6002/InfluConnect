import { coimbatoreInfluencers } from './locations/coimbatoreData';
import { indiaInfluencers } from './locations/indiaData';
import { tamilNaduInfluencers } from './locations/tamilNaduData';

export const allInfluencers = [
  ...coimbatoreInfluencers,
  ...tamilNaduInfluencers,
  ...indiaInfluencers
];

export const getInfluencersByLocation = (location: string) => {
  return allInfluencers.filter(influencer => 
    influencer.location.toLowerCase() === location.toLowerCase()
  );
};