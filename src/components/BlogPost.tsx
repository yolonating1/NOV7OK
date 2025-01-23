import React from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogPostProps {
  slug: string;
  setCurrentPage: (page: string, params?: { slug?: string }) => void;
}

export default function BlogPost({ slug, setCurrentPage }: BlogPostProps) {
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <button
            onClick={() => setCurrentPage('blog')}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ChevronLeft className="h-5 w-5 mr-2" /> Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentPage('blog')}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-2" /> Back to Blog
        </button>

        <article className="prose max-w-none">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.excerpt}</p>
          </header>

          {post.content.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="text-gray-600 mb-6">{section.content}</div>
            </section>
          ))}

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}