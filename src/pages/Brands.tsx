import { useState } from 'react';
import { tamilNaduBrands } from '../data/tamilNaduData';
import { industries, type Industry } from '../data/categories';
import BrandCard from '../components/brand/BrandCard';

export default function Brands() {
  const [industry, setIndustry] = useState<Industry | 'all'>('all');
  
  const filteredBrands = industry === 'all'
    ? tamilNaduBrands
    : tamilNaduBrands.filter(brand => brand.industry === industry);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Featured Brands</h1>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value as Industry | 'all')}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="all">All Industries</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}