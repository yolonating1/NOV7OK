import React from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';

interface ArticleViewProps {
  slug: string;
  setCurrentPage: (page: string, params?: { slug?: string }) => void;
}

export default function ArticleView({ slug, setCurrentPage }: ArticleViewProps) {
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <button
            onClick={() => setCurrentPage('articles')}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ChevronLeft className="h-5 w-5 mr-2" /> Back to Articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentPage('articles')}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-2" /> Back to Articles
        </button>

        <article className="prose max-w-none">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <p className="text-xl text-gray-600">{article.excerpt}</p>
          </header>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                {article.content.sections.map((section, index) => (
                  <li key={index}>
                    <a href={`#section-${index}`} className="text-blue-600 hover:text-blue-800">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          {article.content.sections.map((section, index) => (
            <section key={index} id={`section-${index}`} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="text-gray-600 mb-6">{section.content}</div>
              
              {section.relatedArticles && (
                <div className="bg-blue-50 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Related Articles</h3>
                  <div className="space-y-2">
                    {section.relatedArticles.map((related, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage('article', { slug: related.slug })}
                        className="block text-blue-600 hover:text-blue-800"
                      >
                        <span className="inline-flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          {related.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Data Tables */}
          {article.content.tables.map((table, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Analysis</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {table.headers.map((header, i) => (
                        <th
                          key={i}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {table.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          {/* Key Takeaways */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.content.keyTakeaways.map((takeaway, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{takeaway.point}</h3>
                  <p className="text-blue-800">{takeaway.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {article.content.faqs.map((faq, index) => (
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