import { Influencer, Brand } from '../../types';

export const gamingInfluencers: Influencer[] = [
  {
    id: 'gaming-1',
    name: 'Shroud',
    image: 'https://example.com/shroud.jpg',
    followers: 10200000,
    category: ['Gaming', 'Esports'],
    location: 'Canada',
    engagement: 8.5,
    platforms: ['Twitch', 'YouTube'],
    previousCollaborations: ['Logitech', 'PUBG'],
    socialLinks: {
      youtube: 'https://youtube.com/shroud',
      twitter: 'https://twitter.com/shroud'
    }
  },
  {
    id: 'gaming-2',
    name: 'Pokimane',
    image: 'https://example.com/pokimane.jpg',
    followers: 9000000,
    category: ['Gaming', 'Entertainment'],
    location: 'USA',
    engagement: 7.8,
    platforms: ['Twitch', 'YouTube'],
    previousCollaborations: ['HyperX', 'CashApp'],
    socialLinks: {
      youtube: 'https://youtube.com/pokimane',
      twitter: 'https://twitter.com/pokimanelol'
    }
  },
  {
    id: 'gaming-3',
    name: 'Dr Disrespect',
    image: 'https://example.com/drdisrespect.jpg',
    followers: 4500000,
    category: ['Gaming', 'Entertainment'],
    location: 'USA',
    engagement: 9.1,
    platforms: ['YouTube', 'Twitter'],
    previousCollaborations: ['Mountain Dew', 'Turtle Beach'],
    socialLinks: {
      youtube: 'https://youtube.com/drdisrespect',
      twitter: 'https://twitter.com/drdisrespect'
    }
  }
];

export const gamingBrands: Brand[] = [
  {
    id: 'gaming-brand-1',
    name: 'SteelSeries',
    logo: 'https://example.com/steelseries.png',
    industry: 'Gaming Hardware',
    location: 'Denmark',
    campaignBudget: '₹50L - ₹1Cr',
    requirements: ['Pro gamers', 'Tech reviewers'],
    previousCampaigns: ['Arctis Launch', 'Prime Series'],
    website: 'https://steelseries.com'
  },
  {
    id: 'gaming-brand-2',
    name: 'MSI',
    logo: 'https://example.com/msi.png',
    industry: 'Gaming Hardware',
    location: 'Taiwan',
    campaignBudget: '₹80L - ₹1.5Cr',
    requirements: ['Gaming creators', 'Tech experts'],
    previousCampaigns: ['Dragon Series', 'Gaming Laptop Launch'],
    website: 'https://msi.com'
  },
  {
    id: 'gaming-brand-3',
    name: 'ASUS ROG',
    logo: 'https://example.com/rog.png',
    industry: 'Gaming Hardware',
    location: 'Taiwan',
    campaignBudget: '₹90L - ₹1.8Cr',
    requirements: ['Esports players', 'Tech influencers'],
    previousCampaigns: ['ROG Phone', 'Strix Series'],
    website: 'https://rog.asus.com'
  }
];