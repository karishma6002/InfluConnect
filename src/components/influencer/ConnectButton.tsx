import { useState } from 'react';
import { Influencer } from '../../types';

interface Props {
  influencer: Influencer;
}

export default function ConnectButton({ influencer }: Props) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }, 1000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleConnect}
        disabled={isConnecting}
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
      >
        {isConnecting ? 'Connecting...' : 'Connect'}
      </button>
      
      {showMessage && (
        <div className="absolute top-full mt-2 w-full bg-green-100 text-green-800 px-4 py-2 rounded-md text-sm">
          Connection request sent to {influencer.name}!
        </div>
      )}
    </div>
  );
}