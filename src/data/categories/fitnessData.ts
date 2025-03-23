import { Influencer, Brand } from '../../types';

export const fitnessInfluencers: Influencer[] = [
  {
    id: 'fitness-1',
    name: 'Jeff Cavaliere',
    image: 'https://example.com/jeff.jpg',
    followers: 14500000,
    category: ['Fitness', 'Health'],
    location: 'USA',
    engagement: 8.9,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Athlean-X', 'Under Armour'],
    socialLinks: {
      youtube: 'https://youtube.com/athleanx',
      instagram: 'https://instagram.com/jeffcavaliere'
    }
  },
  {
    id: 'fitness-2',
    name: 'Chloe Ting',
    image: 'https://example.com/chloe.jpg',
    followers: 25000000,
    category: ['Fitness', 'Lifestyle'],
    location: 'Australia',
    engagement: 9.2,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Gymshark', 'Women\'s Best'],
    socialLinks: {
      youtube: 'https://youtube.com/chloeting',
      instagram: 'https://instagram.com/chloe_t'
    }
  },
  {
    id: 'fitness-3',
    name: 'Noel Deyzel',
    image: 'https://example.com/noel.jpg',
    followers: 8000000,
    category: ['Fitness', 'Bodybuilding'],
    location: 'South Africa',
    engagement: 8.7,
    platforms: ['Instagram', 'TikTok'],
    previousCollaborations: ['Gorilla Mind', 'YoungLA'],
    socialLinks: {
      instagram: 'https://instagram.com/noel_deyzel',
      youtube: 'https://youtube.com/noeldeyzel'
    }
  }
];

export const fitnessBrands: Brand[] = [
  {
    id: 'fitness-brand-1',
    name: 'Optimum Nutrition',
    logo: 'https://example.com/on.png',
    industry: 'Sports Nutrition',
    location: 'USA',
    campaignBudget: '₹80L - ₹1.5Cr',
    requirements: ['Fitness influencers', 'Athletes'],
    previousCampaigns: ['Gold Standard', 'Informed Choice'],
    website: 'https://optimumnutrition.com'
  },
  {
    id: 'fitness-brand-2',
    name: 'Rogue Fitness',
    logo: 'https://example.com/rogue.png',
    industry: 'Fitness Equipment',
    location: 'USA',
    campaignBudget: '₹60L - ₹1.2Cr',
    requirements: ['CrossFit athletes', 'Strength trainers'],
    previousCampaigns: ['Home Gym Series', 'Competition Gear'],
    website: 'https://roguefitness.com'
  },
  {
    id: 'fitness-brand-3',
    name: 'Lululemon',
    logo: 'https://example.com/lululemon.png',
    industry: 'Fitness Apparel',
    location: 'Canada',
    campaignBudget: '₹70L - ₹1.3Cr',
    requirements: ['Yoga instructors', 'Fitness lifestyle'],
    previousCampaigns: ['Align Collection', 'Run Series'],
    website: 'https://lululemon.com'
  }
];