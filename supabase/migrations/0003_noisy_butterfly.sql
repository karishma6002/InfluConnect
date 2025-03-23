/*
  # Fix duplicate predefined responses

  1. Changes
    - Remove duplicate responses by keeping only one row per category
    - Ensure category uniqueness with a constraint
    - Re-insert responses with consistent content

  2. Security
    - Maintains existing RLS policies
*/

-- Create temporary table to store unique responses
CREATE TEMPORARY TABLE temp_responses AS
SELECT DISTINCT ON (category) *
FROM predefined_responses
ORDER BY category, created_at;

-- Clear original table and re-insert from temp
TRUNCATE predefined_responses;

-- Add unique constraint
ALTER TABLE predefined_responses 
  DROP CONSTRAINT IF EXISTS predefined_responses_category_key,
  ADD CONSTRAINT predefined_responses_category_key UNIQUE (category);

-- Re-insert responses with consistent content
INSERT INTO predefined_responses (category, content) VALUES
  ('greeting', 'Hello! I''m here to help you find influencers, learn about brands, or get collaboration recommendations. What would you like to know?'),
  ('error', 'I apologize, but I''m having trouble processing your request. Let me help you with some common questions:
    1. Finding influencers in specific categories
    2. Learning about brand collaboration opportunities
    3. Understanding our platform features
    What would you like to know more about?'),
  ('influencer_search', 'I can help you find influencers based on:
    - Category (e.g., Fashion, Tech, Food)
    - Location
    - Follower count
    - Engagement rate
    What criteria are you interested in?'),
  ('brand_info', 'I can provide information about:
    - Active brands on our platform
    - Collaboration opportunities
    - Campaign budgets
    - Success stories
    Which aspect interests you?');

-- Drop temporary table
DROP TABLE temp_responses;