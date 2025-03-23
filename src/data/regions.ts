export const regions = {
  TAMIL_NADU: 'tamil-nadu',
  INDIA: 'india'
} as const;

export type Region = typeof regions[keyof typeof regions];

export const cities = {
  tamilNadu: [
    'Chennai',
    'Coimbatore',
    'Madurai',
    'Salem',
    'Tiruchirappalli',
    'Vellore'
  ],
  india: [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Kolkata',
    'Chennai'
  ]
} as const;