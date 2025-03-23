import { Influencer, Brand } from '../../types';

export const tamilNaduInfluencers: Influencer[] = [
  {
    id: 'tn-1',
    name: 'Village Cooking Channel',
    image: 'https://example.com/vcc.jpg',
    followers: 10000000,
    category: ['Food', 'Culture'],
    location: 'Pudukkottai',
    engagement: 9.5,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Aachi Masala', 'Double Horse'],
    socialLinks: {
      youtube: 'https://youtube.com/villagecooking',
      instagram: 'https://instagram.com/villagecooking'
    }
  },
  {
    id: 'tn-2',
    name: 'Put Chutney',
    image: 'https://example.com/putchutney.jpg',
    followers: 3000000,
    category: ['Entertainment', 'Comedy'],
    location: 'Chennai',
    engagement: 8.2,
    platforms: ['YouTube', 'Instagram'],
    previousCollaborations: ['Swiggy', 'Amazon Prime'],
    socialLinks: {
      youtube: 'https://youtube.com/putchutney',
      instagram: 'https://instagram.com/putchutney'
    }
  }
];

export const tamilNaduBrands: Brand[] = [
  {
    id: 'tn-brand-1',
    name: 'Ramraj Cotton',
    logo: 'https://example.com/ramraj.png',
    industry: 'Textile & Fashion',
    location: 'Tirupur',
    campaignBudget: '₹10L - ₹30L',
    requirements: ['Fashion influencers', 'Traditional wear'],
    previousCampaigns: ['Vesti Collection', 'Traditional Series'],
    website: 'https://ramrajcotton.com'
  },
  {
    id: 'tn-brand-2',
    name: 'Nalli Silks',
    logo: 'https://example.com/nalli.png',
    industry: 'Textile & Fashion',
    location: 'Chennai',
    campaignBudget: '₹25L - ₹60L',
    requirements: ['Fashion bloggers', 'Wedding influencers'],
    previousCampaigns: ['Bridal Series', 'Festival Collection'],
    website: 'https://nalli.com'
  }
];