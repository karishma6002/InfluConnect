import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/features/FeatureSection';
import StatsSection from '../components/stats/StatsSection';
import InfluencerList from '../components/influencer/InfluencerList';
import BrandList from '../components/brand/BrandList';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <InfluencerList />
        <BrandList />
      </div>
    </div>
  );
}