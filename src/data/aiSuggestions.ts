export const getAICollaborationSuggestions = (category: string): string => {
  const suggestions = {
    Fashion: `Based on the profile analysis:
1. Luxury Fashion Line Collaboration - Create a limited edition collection
2. Sustainable Fashion Campaign - Promote eco-friendly fashion choices
3. Fashion Week Coverage - Live content from major fashion events`,
    Beauty: `Recommended collaborations:
1. Seasonal Beauty Box Launch - Curated product collection
2. Beauty Tutorial Series - Educational content partnership
3. Skincare Awareness Campaign - Focus on skin health`,
    Gaming: `Strategic partnership opportunities:
1. Gaming Hardware Review Series - Featured product showcases
2. ESports Tournament Hosting - Competition sponsorship
3. Gaming Lifestyle Collection - Merchandise collaboration`,
    Fitness: `Suggested partnerships:
1. Workout Program Launch - Custom fitness routine
2. Health Supplements Campaign - Product integration
3. Fitness Challenge Series - Community engagement`,
    Business: `Business collaboration ideas:
1. Masterclass Series - Share expertise and insights
2. Business Tools Review - Software and solutions
3. Entrepreneurship Mentorship - Knowledge sharing`,
    Comedy: `Entertainment partnership suggestions:
1. Comedy Special Production - Original content creation
2. Brand Integration Shows - Sponsored entertainment
3. Live Event Series - Tour sponsorship`
  };

  return suggestions[category as keyof typeof suggestions] || 
    `Default collaboration suggestions:
1. Content Creation Partnership
2. Brand Ambassador Program
3. Social Media Campaign`;
};