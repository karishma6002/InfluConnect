import { Influencer } from '../types';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

interface Props {
  influencer: Influencer;
}

export default function InfluencerCard({ influencer }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={influencer.image}
            alt={influencer.name}
          />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">{influencer.name}</h3>
            <p className="text-sm text-gray-500">{influencer.location}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            {influencer.platforms.includes('Instagram') && <FaInstagram className="text-pink-500" />}
            {influencer.platforms.includes('YouTube') && <FaYoutube className="text-red-500" />}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {influencer.followers.toLocaleString()} followers
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {influencer.category.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}