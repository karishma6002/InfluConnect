import { Influencer, Brand } from '../../types';

export const fashionInfluencers: Influencer[] = [
  // Global Fashion Influencers
  {
    id: 'fashion-global-1',
    name: 'Chiara Ferragni',
    image: 'https://example.com/chiara.jpg',
    followers: 29000000,
    category: ['Fashion', 'Lifestyle', 'Beauty'],
    location: 'Milan, Italy',
    engagement: 8.2,
    platforms: ['Instagram', 'YouTube', 'TikTok'],
    previousCollaborations: ['Gucci', 'Dior', 'Prada'],
    socialLinks: {
      instagram: 'https://instagram.com/chiaraferragni',
      youtube: 'https://youtube.com/chiaraferragni'
    }
  },
  {
    id: 'fashion-global-2',
    name: 'Aimee Song',
    image: 'https://example.com/aimee.jpg',
    followers: 7200000,
    category: ['Fashion', 'Travel', 'Lifestyle'],
    location: 'Los Angeles, USA',
    engagement: 7.8,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Louis Vuitton', 'Revolve'],
    socialLinks: {
      instagram: 'https://instagram.com/aimeesong',
      youtube: 'https://youtube.com/songofstyle'
    }
  },
  // Indian Fashion Influencers
  {
    id: 'fashion-india-1',
    name: 'Komal Pandey',
    image: 'https://example.com/komal.jpg',
    followers: 2100000,
    category: ['Fashion', 'Beauty', 'Lifestyle'],
    location: 'Delhi, India',
    engagement: 8.5,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Myntra', 'Nykaa Fashion'],
    socialLinks: {
      instagram: 'https://instagram.com/komalpandey',
      youtube: 'https://youtube.com/komalpandey'
    }
  },
  // Tamil Nadu Fashion Influencers
  {
    id: 'fashion-tn-1',
    name: 'Chennai Fashion Guide',
    image: 'https://example.com/chennaifashion.jpg',
    followers: 500000,
    category: ['Fashion', 'Traditional Wear'],
    location: 'Chennai, India',
    engagement: 6.8,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Nalli Silks', 'Pothys'],
    socialLinks: {
      instagram: 'https://instagram.com/chennaifashion',
      youtube: 'https://youtube.com/chennaifashion'
    }
  },
  {
    id: 'fashion-tn-2',
    name: 'Coimbatore Style',
    image: 'https://example.com/coimbatorestyle.jpg',
    followers: 350000,
    category: ['Fashion', 'Textile'],
    location: 'Coimbatore, India',
    engagement: 7.1,
    platforms: ['Instagram', 'YouTube'],
    previousCollaborations: ['Chennai Silks', 'KG Fabrics'],
    socialLinks: {
      instagram: 'https://instagram.com/coimbatorestyle',
      youtube: 'https://youtube.com/coimbatorestyle'
    }
  }
];

export const fashionBrands: Brand[] = [
  // Global Fashion Brands
  {
    id: 'fashion-brand-global-1',
    name: 'Zara',
    logo: 'https://example.com/zara.png',
    industry: 'Fashion Retail',
    location: 'Global',
    campaignBudget: '₹1Cr+',
    requirements: ['Fashion influencers', 'Global reach'],
    previousCampaigns: ['Summer Collection 2024'],
    website: 'https://zara.com'
  },
  // Indian Fashion Brands
  {
    id: 'fashion-brand-india-1',
    name: 'Myntra',
    logo: 'https://example.com/myntra.png',
    industry: 'Fashion E-commerce',
    location: 'Bangalore, India',
    campaignBudget: '₹50L - ₹1Cr',
    requirements: ['Fashion influencers', 'Lifestyle creators'],
    previousCampaigns: ['End of Season Sale'],
    website: 'https://myntra.com'
  },
  // Tamil Nadu Fashion Brands
  {
    id: 'fashion-brand-tn-1',
    name: 'Pothys',
    logo: 'https://example.com/pothys.png',
    industry: 'Traditional Fashion',
    location: 'Chennai, India',
    campaignBudget: '₹20L - ₹50L',
    requirements: ['Traditional wear influencers'],
    previousCampaigns: ['Diwali Collection 2024'],
    website: 'https://pothys.com'
  },
  {
    id: 'fashion-brand-tn-2',
    name: 'Chennai Silks',
    logo: 'https://example.com/chennaisilks.png',
    industry: 'Traditional Fashion',
    location: 'Tamil Nadu, India',
    campaignBudget: '₹25L - ₹60L',
    requirements: ['Bridal wear influencers'],
    previousCampaigns: ['Wedding Season 2024'],
    website: 'https://chennaisilks.com'
  },
  {
    id: 'fashion-brand-coimbatore-1',
    name: 'KG Fabrics',
    logo: 'https://example.com/kgfabrics.png',
    industry: 'Textile',
    location: 'Coimbatore, India',
    campaignBudget: '₹15L - ₹40L',
    requirements: ['Fashion bloggers', 'Textile experts'],
    previousCampaigns: ['Festival Collection'],
    website: 'https://kgfabrics.com'
  }
];