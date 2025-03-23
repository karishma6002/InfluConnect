import { Influencer, Brand } from '../../types';

export const coimbatoreInfluencers: Influencer[] = [
  {
    id: 'cbe-1',
    name: 'Coimbatore Foodie',
    image: 'https://example.com/cbe-foodie.jpg',
    followers: 850000,
    category: ['Food', 'Lifestyle'],
    location: 'Coimbatore',
    engagement: 7.2,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['KovaiPazhamudir', 'Annapoorna'],
    socialLinks: {
      instagram: 'https://instagram.com/coimbatorefoodie',
      youtube: 'https://youtube.com/coimbatorefoodie'
    }
  },
  {
    id: 'cbe-2',
    name: 'Tech Tamil',
    image: 'https://example.com/techtamil.jpg',
    followers: 1200000,
    category: ['Technology', 'Education'],
    location: 'Coimbatore',
    engagement: 6.8,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Poorvika', 'Sangeetha Mobiles'],
    socialLinks: {
      youtube: 'https://youtube.com/techtamil',
      instagram: 'https://instagram.com/techtamil'
    }
  }
];

export const coimbatoreBrands: Brand[] = [
  {
    id: 'cbe-brand-1',
    name: 'Annapoorna',
    logo: 'https://example.com/annapoorna.png',
    industry: 'Food & Restaurant',
    location: 'Coimbatore',
    campaignBudget: '₹5L - ₹15L',
    requirements: ['Food bloggers', 'Local influencers'],
    previousCampaigns: ['Traditional Food Festival', 'South Indian Delights'],
    website: 'https://annapoorna.com'
  },
  {
    id: 'cbe-brand-2',
    name: 'Kirtilals',
    logo: 'https://example.com/kirtilals.png',
    industry: 'Jewellery',
    location: 'Coimbatore',
    campaignBudget: '₹20L - ₹50L',
    requirements: ['Fashion influencers', 'Luxury lifestyle creators'],
    previousCampaigns: ['Bridal Collection 2024', 'Diamond Festival'],
    website: 'https://kirtilals.com'
  }
];