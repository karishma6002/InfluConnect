import { Influencer, Brand } from '../../types';

export const travelInfluencers: Influencer[] = [
  {
    id: 'travel-1',
    name: 'Nomadic Matt',
    image: 'https://example.com/matt.jpg',
    followers: 2500000,
    category: ['Travel', 'Lifestyle'],
    location: 'Global',
    engagement: 7.8,
    platforms: ['Instagram', 'YouTube', 'Blog'],
    previousCollaborations: ['Airbnb', 'Booking.com'],
    socialLinks: {
      instagram: 'https://instagram.com/nomadicmatt',
      youtube: 'https://youtube.com/nomadicmatt'
    }
  },
  {
    id: 'travel-2',
    name: 'Tamil Traveller',
    image: 'https://example.com/tamiltraveller.jpg',
    followers: 850000,
    category: ['Travel', 'Culture'],
    location: 'Chennai',
    engagement: 6.9,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['MakeMyTrip', 'TamilNadu Tourism'],
    socialLinks: {
      youtube: 'https://youtube.com/tamiltraveller',
      instagram: 'https://instagram.com/tamiltraveller'
    }
  },
  {
    id: 'travel-3',
    name: 'Coimbatore Explorer',
    image: 'https://example.com/coimbatoreexplorer.jpg',
    followers: 450000,
    category: ['Travel', 'Local Tourism'],
    location: 'Coimbatore',
    engagement: 7.2,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Local Hotels', 'Travel Agencies'],
    socialLinks: {
      instagram: 'https://instagram.com/coimbatoreexplorer',
      youtube: 'https://youtube.com/coimbatoreexplorer'
    }
  }
];

export const travelBrands: Brand[] = [
  {
    id: 'travel-brand-1',
    name: 'MakeMyTrip',
    logo: 'https://example.com/mmt.png',
    industry: 'Travel',
    location: 'India',
    campaignBudget: '₹50L - ₹1Cr',
    requirements: ['Travel content creators', 'Vloggers'],
    previousCampaigns: ['Domestic Travel 2024'],
    website: 'https://makemytrip.com'
  },
  {
    id: 'travel-brand-2',
    name: 'Tamil Nadu Tourism',
    logo: 'https://example.com/tntourism.png',
    industry: 'Tourism',
    location: 'Tamil Nadu',
    campaignBudget: '₹20L - ₹50L',
    requirements: ['Local travel creators', 'Culture promoters'],
    previousCampaigns: ['Enchanting Tamil Nadu'],
    website: 'https://tamilnadutourism.com'
  },
  {
    id: 'travel-brand-3',
    name: 'Coimbatore Tours',
    logo: 'https://example.com/cbetours.png',
    industry: 'Travel',
    location: 'Coimbatore',
    campaignBudget: '₹10L - ₹25L',
    requirements: ['Local influencers', 'Travel bloggers'],
    previousCampaigns: ['Discover Coimbatore'],
    website: 'https://coimbatoretours.com'
  }
];