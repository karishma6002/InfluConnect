import { Influencer, Brand } from '../../types';

export const educationInfluencers: Influencer[] = [
  {
    id: 'edu-1',
    name: 'Khan Academy',
    image: 'https://example.com/khan.jpg',
    followers: 7500000,
    category: ['Education', 'Technology'],
    location: 'Global',
    engagement: 8.5,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Google', 'Microsoft'],
    socialLinks: {
      youtube: 'https://youtube.com/khanacademy',
      instagram: 'https://instagram.com/khanacademy'
    }
  },
  {
    id: 'edu-2',
    name: 'Tamil Educator',
    image: 'https://example.com/tamileducator.jpg',
    followers: 1200000,
    category: ['Education', 'Language'],
    location: 'Chennai',
    engagement: 7.8,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Local Schools', 'Education Boards'],
    socialLinks: {
      youtube: 'https://youtube.com/tamileducator',
      instagram: 'https://instagram.com/tamileducator'
    }
  },
  {
    id: 'edu-3',
    name: 'Tech Learning Tamil',
    image: 'https://example.com/techlearning.jpg',
    followers: 900000,
    category: ['Education', 'Technology'],
    location: 'Coimbatore',
    engagement: 7.1,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Coding Schools', 'Tech Companies'],
    socialLinks: {
      youtube: 'https://youtube.com/techlearningtamil',
      instagram: 'https://instagram.com/techlearningtamil'
    }
  }
];

export const educationBrands: Brand[] = [
  {
    id: 'edu-brand-1',
    name: 'BYJU\'S',
    logo: 'https://example.com/byjus.png',
    industry: 'Education',
    location: 'India',
    campaignBudget: '₹1Cr+',
    requirements: ['Education creators', 'Subject experts'],
    previousCampaigns: ['Learn From Home'],
    website: 'https://byjus.com'
  },
  {
    id: 'edu-brand-2',
    name: 'Tamil Learning Center',
    logo: 'https://example.com/tlc.png',
    industry: 'Education',
    location: 'Chennai',
    campaignBudget: '₹15L - ₹40L',
    requirements: ['Language teachers', 'Education influencers'],
    previousCampaigns: ['Learn Tamil Online'],
    website: 'https://tamillearning.com'
  },
  {
    id: 'edu-brand-3',
    name: 'Coimbatore Tech Institute',
    logo: 'https://example.com/cti.png',
    industry: 'Education',
    location: 'Coimbatore',
    campaignBudget: '₹10L - ₹30L',
    requirements: ['Tech educators', 'Programming instructors'],
    previousCampaigns: ['Coding Bootcamp'],
    website: 'https://coimbatoretech.com'
  }
];