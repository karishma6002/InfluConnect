export default function FeatureSection() {
  const features = [
    {
      title: 'Regional Focus',
      description: 'Connect with creators who understand Tamil culture and speak the language',
      icon: '🎯'
    },
    {
      title: 'Verified Profiles',
      description: 'All influencers and brands are verified for authenticity',
      icon: '✓'
    },
    {
      title: 'Local Insights',
      description: 'Get detailed analytics about Tamil Nadu\'s market and audience',
      icon: '📊'
    },
    {
      title: 'Cultural Connect',
      description: 'Create campaigns that resonate with Tamil audience',
      icon: '🎭'
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed in Tamil Nadu
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="text-3xl">{feature.icon}</span>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}