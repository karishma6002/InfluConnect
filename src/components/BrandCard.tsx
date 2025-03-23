import { Brand } from '../types';

interface Props {
  brand: Brand;
}

export default function BrandCard({ brand }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <img
            className="h-12 w-12 object-contain"
            src={brand.logo}
            alt={brand.name}
          />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">{brand.name}</h3>
            <p className="text-sm text-gray-500">{brand.industry}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Location:</span> {brand.location}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Campaign Budget:</span> {brand.campaignBudget}
          </p>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-900">Requirements:</p>
            <ul className="mt-2 space-y-1">
              {brand.requirements.map((req, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}