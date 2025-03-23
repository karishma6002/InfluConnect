export const influencerCategories = [
  'Entertainment',
  'Lifestyle',
  'Food',
  'Technology',
  'Fashion',
  'Travel',
  'Education',
  'Gaming',
  'Fitness',
  'Beauty',
  'Business',
  'Comedy'
] as const;

export const industries = [
  'Textile & Fashion',
  'Electronics Retail',
  'Food & Spices',
  'Beauty & Personal Care',
  'E-commerce',
  'Technology',
  'Entertainment',
  'Education'
] as const;

export type InfluencerCategory = typeof influencerCategories[number];
export type Industry = typeof industries[number];