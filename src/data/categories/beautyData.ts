import { Influencer, Brand } from '../../types';

export const beautyInfluencers: Influencer[] = [
  {
    id: 'beauty-1',
    name: 'Glamour Guide',
    image: 'https://example.com/glamourguide.jpg',
    followers: 1800000,
    category: ['Beauty', 'Fashion'],
    location: 'Chennai',
    engagement: 7.8,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Lakme', 'MAC'],
    socialLinks: {
      instagram: 'https://instagram.com/glamourguide',
      youtube: 'https://youtube.com/glamourguide'
    }
  },
  {
    id: 'beauty-2',
    name: 'Tamil Beauty Tips',
    image: 'https://example.com/tamilbeauty.jpg',
    followers: 950000,
    category: ['Beauty', 'Skincare'],
    location: 'Madurai',
    engagement: 8.2,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Forest Essentials', 'Nykaa'],
    socialLinks: {
      youtube: 'https://youtube.com/tamilbeauty',
      instagram: 'https://instagram.com/tamilbeauty'
    }
  },
  {
    id: 'beauty-3',
    name: 'Coimbatore Beauty',
    image: 'https://example.com/coimbatorebeauty.jpg',
    followers: 600000,
    category: ['Beauty', 'Lifestyle'],
    location: 'Coimbatore',
    engagement: 7.4,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Sugar Cosmetics', 'Plum'],
    socialLinks: {
      instagram: 'https://instagram.com/coimbatorebeauty',
      youtube: 'https://youtube.com/coimbatorebeauty'
    }
  }
];

export const beautyBrands: Brand[] = [
  {
    id: 'beauty-brand-1',
    name: 'Forest Essentials',
    logo: 'https://example.com/forestessentials.png',
    industry: 'Beauty',
    location: 'India',
    campaignBudget: '₹40L - ₹80L',
    requirements: ['Beauty influencers', 'Skincare experts'],
    previousCampaigns: ['Ayurvedic Beauty'],
    website: 'https://forestessentials.com'
  },
  {
    id: 'beauty-brand-2',
    name: 'Chennai Beauty Store',
    logo: 'https://example.com/chennaibeauty.png',
    industry: 'Beauty Retail',
    location: 'Chennai',
    campaignBudget: '₹15L - ₹35L',
    requirements: ['Beauty creators', 'Makeup artists'],
    previousCampaigns: ['Summer Glow'],
    website: 'https://chennaibeauty.com'
  },
  {
    id: 'beauty-brand-3',
    name: 'Coimbatore Cosmetics',
    logo: 'https://example.com/coimbatorecosmetics.png',
    industry: 'Beauty',
    location: 'Coimbatore',
    campaignBudget: '₹10L - ₹25L',
    requirements: ['Beauty bloggers', 'Local influencers'],
    previousCampaigns: ['Natural Beauty'],
    website: 'https://coimbatorecosmetics.com'
  }
];