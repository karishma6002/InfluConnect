import { Link } from 'react-router-dom';
import { Influencer } from '../../types';
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import ConnectButton from './ConnectButton';

interface Props {
  influencer: Influencer;
}

export default function InfluencerCard({ influencer }: Props) {
  const formatFollowers = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900">
                {formatFollowers(influencer.followers)}
              </span>
              <span className="text-sm text-gray-500">followers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900">
                {influencer.engagement}%
              </span>
              <span className="text-sm text-gray-500">engagement</span>
            </div>
          </div>

          <div className="mt-3 flex items-center space-x-3">
            {influencer.platforms.includes('Instagram') && (
              <FaInstagram className="h-5 w-5 text-pink-500" />
            )}
            {influencer.platforms.includes('YouTube') && (
              <FaYoutube className="h-5 w-5 text-red-500" />
            )}
            {influencer.platforms.includes('Twitter') && (
              <FaTwitter className="h-5 w-5 text-blue-400" />
            )}
            {influencer.platforms.includes('LinkedIn') && (
              <FaLinkedin className="h-5 w-5 text-blue-600" />
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {influencer.category.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {/* <Link
              to={`/influencer/${influencer.id}`}
              className="block w-full text-center text-indigo-600 hover:text-indigo-500 font-medium"
            >
              View Profile
            </Link>*/}
            <a href={influencer.socialLinks.instagram}
            className="block w-full text-center text-indigo-600 hover:text-indigo-500 font-medium">View Profile</a>
            <ConnectButton influencer={influencer} /> 
          </div>
        </div>
      </div>
    </div>
  );
}