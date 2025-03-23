export default function Blog() {
  const posts = [
    {
      title: 'The Rise of Tamil Content Creators',
      author: 'Priya Raman',
      date: '2024-02-15',
      excerpt: 'How Tamil content creators are shaping the digital landscape...',
      category: 'Industry Insights',
    },
    {
      title: 'Successful Brand Campaigns in Tamil Nadu',
      author: 'Karthik Kumar',
      date: '2024-02-10',
      excerpt: 'Case studies of successful influencer marketing campaigns...',
      category: 'Case Studies',
    },
    {
      title: 'Understanding Tamil Nadu\'s Digital Audience',
      author: 'Deepa Shankar',
      date: '2024-02-05',
      excerpt: 'Deep dive into the preferences and behaviors...',
      category: 'Market Research',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <p className="mt-4 text-lg text-gray-600">
            Insights and updates from the Tamil Nadu influencer marketing scene
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-indigo-600 mb-2">{post.category}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}