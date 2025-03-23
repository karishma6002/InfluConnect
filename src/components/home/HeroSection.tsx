import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-multiply"
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Tamil Nadu culture"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Connect with Tamil Nadu's
          <span className="block text-indigo-200">Top Influencers & Brands</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
          Join Tamil Nadu's largest influencer marketing platform connecting creative minds with innovative brands.
          Create impactful campaigns that resonate with millions across South India.
        </p>
        <div className="mt-10 flex space-x-4">
          <Link
            to="/register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
          >
            Get Started
          </Link>
          <Link
            to="/explore"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70"
          >
            Explore Creators
          </Link>
        </div>
      </div>
    </div>
  );
}