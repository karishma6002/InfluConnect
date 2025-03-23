import TeamSection from '../components/about/TeamSection';
import { teamMembers } from '../data/teamData';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Building Tamil Nadu's largest influencer marketing ecosystem
          </p>
        </div>

        <div className="prose prose-lg mx-auto mb-12">
          <p>
            Founded in 2024, our platform connects Tamil Nadu's most creative influencers
            with brands looking to reach authentic, engaged audiences. We understand the
            unique cultural context of Tamil Nadu and help create meaningful partnerships
            that resonate with local audiences.
          </p>
        </div>

        <TeamSection team={teamMembers} />
      </div>
    </div>
  );
}