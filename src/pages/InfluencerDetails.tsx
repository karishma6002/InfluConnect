import React, { useEffect, useState } from 'react';

// Assuming the getAICollaborationSuggestions function looks something like this
const getAICollaborationSuggestions = (category: string) => {
  // Logic to fetch AI suggestions based on the category
  // For demonstration, returning a mock response
  return [
    `Collaboration suggestion for ${category} 1`,
    `Collaboration suggestion for ${category} 2`,
    `Collaboration suggestion for ${category} 3`,
  ];
};

const InfluencerDetails = ({ found }) => {
  const [aiSuggestions, setAiSuggestions] = useState([]);

  useEffect(() => {
    if (found && found.category && found.category.length > 0) {
      // Ensure the category exists and is valid before calling the function
      const category = found.category[0];
      const suggestions = getAICollaborationSuggestions(category);
      setAiSuggestions(suggestions);
    }
  }, [found]);

  return (
    <div>
      <h2>Influencer Details</h2>
      {aiSuggestions.length > 0 ? (
        <ul>
          {aiSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      ) : (
        <p>No suggestions available.</p>
      )}
    </div>
  );
};

export default InfluencerDetails;
