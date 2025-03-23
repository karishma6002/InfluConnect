import { Influencer, Brand } from '../../types';

export const businessInfluencers: Influencer[] = [
  {
    id: 'business-1',
    name: 'Business Mentor',
    image: 'https://example.com/businessmentor.jpg',
    followers: 1500000,
    category: ['Business', 'Entrepreneurship'],
    location: 'Chennai',
    engagement: 7.6,
    platforms: ['LinkedIn', 'Instagram', 'YouTube'],
    previousCollaborations: ['Zoho', 'Freshworks'],
    socialLinks: {
      linkedin: 'https://linkedin.com/businessmentor',
      youtube: 'https://youtube.com/businessmentor'
    }
  },
  {
    id: 'business-2',
    name: 'Tamil Entrepreneur',
    image: 'https://example.com/tamilentrepreneur.jpg',
    followers: 850000,
    category: ['Business', 'Startups'],
    location: 'Madurai',
    engagement: 7.9,
    platforms: ['YouTube', 'LinkedIn'],
    previousCollaborations: ['Bank of Baroda', 'SIDBI'],
    socialLinks: {
      youtube: 'https://youtube.com/tamilentrepreneur',
      linkedin: 'https://linkedin.com/tamilentrepreneur'
    }
  },
  {
    id: 'business-3',
    name: 'Coimbatore Business Guide',
    image: 'https://example.com/coimbatorebusiness.jpg',
    followers: 500000,
    category: ['Business', 'Industry'],
    location: 'Coimbatore',
    engagement: 7.3,
    platforms: ['LinkedIn', 'YouTube'],
    previousCollaborations: ['CII', 'CODISSIA'],
    socialLinks: {
      linkedin: 'https://linkedin.com/coimbatorebusiness',
      youtube: 'https://youtube.com/coimbatorebusiness'
    }
  }
];

export const businessBrands: Brand[] = [
  {
    id: 'business-brand-1',
    name: 'Zoho',
    logo: 'https://example.com/zoho.png',
    industry: 'Software',
    location: 'Chennai',
    campaignBudget: '₹1Cr+',
    requirements: ['Business influencers', 'Tech reviewers'],
    previousCampaigns: ['Digital Transformation'],
    website: 'https://zoho.com'
  },
  {
    id: 'business-brand-2',
    name: 'Tamil Business Network',
    logo: 'https://example.com/tamilbusiness.png',
    industry: 'Business Network',
    location: 'Tamil Nadu',
    campaignBudget: '₹20L - ₹50L',
    requirements: ['Business mentors', 'Industry experts'],
    previousCampaigns: ['Entrepreneurship Summit'],
    website: 'https://tamilbusiness.com'
  },
  {
    id: 'business-brand-3',
    name: 'CODISSIA',
    logo: 'https://example.com/codissia.png',
    industry: 'Industry Association',
    location: 'Coimbatore',
    campaignBudget: '₹15L - ₹40L',
    requirements: ['Industry experts', 'Business leaders'],
    previousCampaigns: ['Industrial Expo'],
    website: 'https://codissia.com'
  }
];