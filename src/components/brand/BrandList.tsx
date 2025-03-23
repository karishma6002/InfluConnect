import { topBrands } from '../../data/mockData';
import BrandCard from './BrandCard';

export default function BrandList() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-none mt-24">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Featured Brands
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
        {topBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
}