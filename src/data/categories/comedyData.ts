import { Influencer, Brand } from '../../types';

export const comedyInfluencers: Influencer[] = [
  {
    id: 'comedy-1',
    name: 'Tamil Comedy Club',
    image: 'https://example.com/tamilcomedy.jpg',
    followers: 2800000,
    category: ['Comedy', 'Entertainment'],
    location: 'Chennai',
    engagement: 8.7,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Swiggy', 'Dunzo'],
    socialLinks: {
      youtube: 'https://youtube.com/tamilcomedy',
      instagram: 'https://instagram.com/tamilcomedy'
    }
  },
  {
    id: 'comedy-2',
    name: 'Madurai Memes',
    image: 'https://example.com/maduraimemes.jpg',
    followers: 1200000,
    category: ['Comedy', 'Memes'],
    location: 'Madurai',
    engagement: 9.1,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Zomato', 'OYO'],
    socialLinks: {
      instagram: 'https://instagram.com/maduraimemes',
      youtube: 'https://youtube.com/maduraimemes'
    }
  },
  {
    id: 'comedy-3',
    name: 'Coimbatore Comedy',
    image: 'https://example.com/coimbatorecomedy.jpg',
    followers: 750000,
    category: ['Comedy', 'Sketches'],
    location: 'Coimbatore',
    engagement: 8.4,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['BookMyShow', 'PVR'],
    socialLinks: {
      youtube: 'https://youtube.com/coimbatorecomedy',
      instagram: 'https://instagram.com/coimbatorecomedy'
    }
  }
];

export const comedyBrands: Brand[] = [
  {
    id: 'comedy-brand-1',
    name: 'Evam Stand Up',
    logo: 'https://example.com/evam.png',
    industry: 'Entertainment',
    location: 'Chennai',
    campaignBudget: '₹25L - ₹50L',
    requirements: ['Comedy creators', 'Stand-up artists'],
    previousCampaigns: ['Comedy Festival'],
    website: 'https://evam.in'
  },
  {
    id: 'comedy-brand-2',
    name: 'Tamil Comedy Network',
    logo: 'https://example.com/tamilcomedynetwork.png',
    industry: 'Entertainment',
    location: 'Tamil Nadu',
    campaignBudget: '₹15L - ₹35L',
    requirements: ['Comedy influencers', 'Content creators'],
    previousCampaigns: ['Digital Comedy Show'],
    website: 'https://tamilcomedynetwork.com'
  },
  {
    id: 'comedy-brand-3',
    name: 'Kovai Comedy Club',
    logo: 'https://example.com/kovaicomedy.png',
    industry: 'Entertainment',
    location: 'Coimbatore',
    campaignBudget: '₹10L - ₹25L',
    requirements: ['Local comedians', 'Content creators'],
    previousCampaigns: ['Weekend Comedy Show'],
    website: 'https://kovaicomedy.com'
  }
];