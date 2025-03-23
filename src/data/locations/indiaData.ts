import { Influencer, Brand } from '../../types';

export const indiaInfluencers: Influencer[] = [
  {
    id: 'india-1',
    name: 'Technical Guruji',
    image: 'https://example.com/techguruji.jpg',
    followers: 15000000,
    category: ['Technology', 'Gadgets'],
    location: 'Mumbai',
    engagement: 8.5,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Samsung', 'OnePlus'],
    socialLinks: {
      youtube: 'https://youtube.com/technicalguruji',
      instagram: 'https://instagram.com/technicalguruji'
    }
  },
  {
    id: 'india-2',
    name: 'Fit Tuber',
    image: 'https://example.com/fittuber.jpg',
    followers: 8000000,
    category: ['Health', 'Fitness'],
    location: 'Delhi',
    engagement: 7.8,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Himalaya', 'Oziva'],
    socialLinks: {
      youtube: 'https://youtube.com/fittuber',
      instagram: 'https://instagram.com/fittuber'
    }
  }
];

export const indiaBrands: Brand[] = [
  {
    id: 'india-brand-1',
    name: 'Boat',
    logo: 'https://example.com/boat.png',
    industry: 'Electronics',
    location: 'Delhi',
    campaignBudget: '₹50L - ₹1Cr',
    requirements: ['Tech reviewers', 'Lifestyle creators'],
    previousCampaigns: ['Airdopes Launch', 'Fitness Series'],
    website: 'https://boat-lifestyle.com'
  },
  {
    id: 'india-brand-2',
    name: 'MamaEarth',
    logo: 'https://example.com/mamaearth.png',
    industry: 'Beauty & Personal Care',
    location: 'Bangalore',
    campaignBudget: '₹30L - ₹80L',
    requirements: ['Beauty influencers', 'Mom bloggers'],
    previousCampaigns: ['Natural Beauty', 'Skin First'],
    website: 'https://mamaearth.in'
  }
];