import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-8">
        <span className="text-gray-600">{post.author}</span>
        <span className="mx-2">•</span>
        <span className="text-gray-600">{post.date}</span>
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}