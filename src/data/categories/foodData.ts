import { Influencer, Brand } from '../../types';

export const foodInfluencers: Influencer[] = [
  // Global Food Influencers
  {
    id: 'food-global-1',
    name: 'Gordon Ramsay',
    image: 'https://example.com/gordon.jpg',
    followers: 15000000,
    category: ['Food', 'Cooking', 'Lifestyle'],
    location: 'London, UK',
    engagement: 9.2,
    platforms: ['Instagram', 'YouTube', 'TikTok'],
    previousCollaborations: ['MasterChef', 'HexClad'],
    socialLinks: {
      instagram: 'https://instagram.com/gordongram',
      youtube: 'https://youtube.com/gordonramsay'
    }
  },
  // Indian Food Influencers
  {
    id: 'food-india-1',
    name: 'Ranveer Brar',
    image: 'https://example.com/ranveer.jpg',
    followers: 4500000,
    category: ['Food', 'Cooking', 'Culture'],
    location: 'Mumbai, India',
    engagement: 8.5,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Godrej', 'ITC Foods'],
    socialLinks: {
      instagram: 'https://instagram.com/ranveerbrar',
      youtube: 'https://youtube.com/ranveerbrar'
    }
  },
  // Tamil Nadu Food Influencers
  {
    id: 'food-tn-1',
    name: 'Village Food Factory',
    image: 'https://example.com/villagefood.jpg',
    followers: 9000000,
    category: ['Food', 'Culture', 'Traditional'],
    location: 'Tamil Nadu, India',
    engagement: 9.8,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Aachi Masala', 'Double Horse'],
    socialLinks: {
      youtube: 'https://youtube.com/villagefoodfactory',
      instagram: 'https://instagram.com/villagefoodfactory'
    }
  },
  {
    id: 'food-coimbatore-1',
    name: 'Coimbatore Food Guide',
    image: 'https://example.com/coimbatorefood.jpg',
    followers: 450000,
    category: ['Food', 'Restaurant Reviews'],
    location: 'Coimbatore, India',
    engagement: 7.5,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Annapoorna', 'Haribhavanam'],
    socialLinks: {
      instagram: 'https://instagram.com/coimbatorefood',
      youtube: 'https://youtube.com/coimbatorefood'
    }
  }
];

export const foodBrands: Brand[] = [
  // Global Food Brands
  {
    id: 'food-brand-global-1',
    name: 'Nestlé',
    logo: 'https://example.com/nestle.png',
    industry: 'Food & Beverages',
    location: 'Global',
    campaignBudget: '₹1Cr+',
    requirements: ['Food creators', 'Recipe developers'],
    previousCampaigns: ['Healthy Living'],
    website: 'https://nestle.com'
  },
  // Indian Food Brands
  {
    id: 'food-brand-india-1',
    name: 'MTR Foods',
    logo: 'https://example.com/mtr.png',
    industry: 'Packaged Foods',
    location: 'Bangalore, India',
    campaignBudget: '₹40L - ₹80L',
    requirements: ['Food bloggers', 'Recipe creators'],
    previousCampaigns: ['Traditional Recipes'],
    website: 'https://mtrfoods.com'
  },
  // Tamil Nadu Food Brands
  {
    id: 'food-brand-tn-1',
    name: 'Aachi Masala',
    logo: 'https://example.com/aachi.png',
    industry: 'Spices & Masalas',
    location: 'Chennai, India',
    campaignBudget: '₹20L - ₹50L',
    requirements: ['Food creators', 'Home chefs'],
    previousCampaigns: ['Authentic Flavors'],
    website: 'https://aachimasala.com'
  },
  {
    id: 'food-brand-coimbatore-1',
    name: 'Annapoorna',
    logo: 'https://example.com/annapoorna.png',
    industry: 'Restaurant Chain',
    location: 'Coimbatore, India',
    campaignBudget: '₹10L - ₹30L',
    requirements: ['Food reviewers', 'Local influencers'],
    previousCampaigns: ['Traditional Taste'],
    website: 'https://annapoorna.com'
  }
];