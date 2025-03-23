/*
  # Chat System Database Schema

  1. New Tables
    - `chat_sessions`
      - Stores user chat sessions
      - Links messages to specific users/sessions
    - `chat_messages`
      - Stores all chat messages
      - Links to chat sessions
    - `predefined_responses`
      - Stores fallback responses for different scenarios
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create chat_sessions table
CREATE TABLE IF NOT EXISTS chat_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create chat_messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES chat_sessions(id),
  role text NOT NULL CHECK (role IN ('user', 'assistant')),
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create predefined_responses table
CREATE TABLE IF NOT EXISTS predefined_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE predefined_responses ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can access their own chat sessions"
  ON chat_sessions
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can access messages from their sessions"
  ON chat_messages
  FOR ALL
  TO authenticated
  USING (
    session_id IN (
      SELECT id FROM chat_sessions WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Everyone can read predefined responses"
  ON predefined_responses
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert predefined responses
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