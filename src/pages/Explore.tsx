import { useState } from 'react';
import { tamilNaduInfluencers } from '../data/tamilNaduData';
import { indiaInfluencers } from '../data/indiaData';
import { influencerCategories, type InfluencerCategory } from '../data/categories';
import { regions, type Region } from '../data/regions';
import InfluencerCard from '../components/influencer/InfluencerCard';

export default function Explore() {
  const [region, setRegion] = useState<Region>(regions.TAMIL_NADU);
  const [category, setCategory] = useState<InfluencerCategory | 'all'>('all');

  const influencers = region === regions.TAMIL_NADU ? tamilNaduInfluencers : indiaInfluencers;
  const filteredInfluencers = category === 'all' 
    ? influencers 
    : influencers.filter(inf => inf.category.includes(category));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Explore Creators</h1>
            <div className="flex space-x-4">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as Region)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value={regions.TAMIL_NADU}>Tamil Nadu</option>
                <option value={regions.INDIA}>All India</option>
              </select>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as InfluencerCategory | 'all')}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="all">All Categories</option>
                {influencerCategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredInfluencers.map((influencer) => (
              <InfluencerCard key={influencer.id} influencer={influencer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}