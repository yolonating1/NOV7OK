import React, { useState } from 'react';
import { Search, Book, ChevronRight, Filter } from 'lucide-react';
import { articles } from '../data/articles';

interface ArticlesProps {
  onArticleClick: (slug: string) => void;
}

export default function Articles({ onArticleClick }: ArticlesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'location' | 'topic'>('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = {
    all: 'All Regions',
    us: 'United States',
    uk: 'United Kingdom',
    australia: 'Australia',
    india: 'India'
  };

  const filteredArticles = articles.filter(article => 
    (selectedType === 'all' || article.type === selectedType) &&
    (selectedRegion === 'all' || (article.type === 'location' && article.region === selectedRegion)) &&
    (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     (article.type === 'location' && article.location.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Copywriting Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover expert copywriting insights, guides, and opportunities across the globe.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as 'all' | 'location' | 'topic')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="location">Locations</option>
                <option value="topic">Topics</option>
              </select>
              {selectedType !== 'topic' && (
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {Object.entries(regions).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    article.type === 'location' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {article.type === 'location' ? article.region.toUpperCase() : 'GUIDE'}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button
                  onClick={() => onArticleClick(article.slug)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read more <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}