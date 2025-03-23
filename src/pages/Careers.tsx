export default function Careers() {
  const positions = [
    {
      title: 'Senior Frontend Developer',
      location: 'Chennai',
      type: 'Full-time',
      description: 'Looking for an experienced frontend developer with React expertise.',
    },
    {
      title: 'Marketing Manager',
      location: 'Chennai',
      type: 'Full-time',
      description: 'Seeking a marketing professional with influencer marketing experience.',
    },
    {
      title: 'Content Strategist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Content expert with understanding of Tamil Nadu market.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Join Our Team</h1>
          <p className="mt-4 text-lg text-gray-600">
            Help us connect brands with the best creators in Tamil Nadu
          </p>
        </div>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900">{position.title}</h2>
              <div className="mt-2 flex space-x-4 text-sm text-gray-500">
                <span>{position.location}</span>
                <span>•</span>
                <span>{position.type}</span>
              </div>
              <p className="mt-4 text-gray-600">{position.description}</p>
              <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}