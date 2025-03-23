import { Brand } from '../../types';

interface Props {
  brand: Brand;
}

export default function BrandCard({ brand }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center">
          <img
            className="h-16 w-16 object-contain"
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
          
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-900">Requirements:</p>
            <ul className="mt-2 space-y-1">
              {brand.requirements.map((req, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <span className="mr-2">•</span> {req}
                </li>
              ))}
            </ul>
          </div>

          {brand.previousCampaigns && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-900">Recent Campaigns:</p>
              <p className="text-sm text-gray-600 mt-1">
                {brand.previousCampaigns.join(', ')}
              </p>
            </div>
          )}

          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500"
          >
            Visit Website
            <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}