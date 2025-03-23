export interface Influencer {
  id: string;
  name: string;
  image: string;
  followers: number;
  category: string[];
  location: string;
  engagement: number;
  platforms: string[];
  previousCollaborations: string[];
  socialLinks: {
    youtube?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  campaignBudget: string;
  requirements: string[];
  previousCampaigns: string[];
  website: string;
}