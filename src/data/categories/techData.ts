import { Influencer, Brand } from '../../types';

export const techInfluencers: Influencer[] = [
  {
    id: 'tech-1',
    name: 'Tamil Tech Reviews',
    image: 'https://example.com/tech1.jpg',
    followers: 900000,
    category: ['Technology', 'Gadgets'],
    location: 'Coimbatore',
    engagement: 6.9,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Poorvika', 'Sangeetha Mobiles'],
    socialLinks: {
      youtube: 'https://youtube.com/tamiltech',
      instagram: 'https://instagram.com/tamiltech'
    }
  },
  // Add 4 more tech influencers
];

export const techBrands: Brand[] = [
  {
    id: 'tech-brand-1',
    name: 'Poorvika Mobiles',
    logo: 'https://example.com/poorvika.png',
    industry: 'Electronics Retail',
    location: 'Chennai',
    campaignBudget: '₹25L - ₹60L',
    requirements: ['Tech reviewers', 'Gadget enthusiasts'],
    previousCampaigns: ['Mobile Launch 2024'],
    website: 'https://poorvika.com'
  },
  // Add 4 more tech brands
];