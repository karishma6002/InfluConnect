import { topInfluencers } from '../../data/mockData';
import InfluencerCard from './InfluencerCard';

export default function InfluencerList() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Top Influencers
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
        {topInfluencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} />
        ))}
      </div>
    </div>
  );
}