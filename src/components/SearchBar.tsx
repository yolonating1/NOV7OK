import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchResult {
  title: string;
  type: 'course' | 'tool' | 'article' | 'blog';
  url: string;
  description: string;
}

interface SearchBarProps {
  onClose?: () => void;
  isFullScreen?: boolean;
}

export default function SearchBar({ onClose, isFullScreen = false }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated search function - replace with actual search implementation
  const performSearch = (searchQuery: string) => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const searchResults: SearchResult[] = [
        {
          title: "Professional Copywriting Course",
          type: "course",
          url: "#courses",
          description: "Comprehensive copywriting certification program for beginners and professionals."
        },
        {
          title: "Headline Analyzer",
          type: "tool",
          url: "#tools",
          description: "Free tool to analyze and optimize your headlines for better conversion."
        },
        // Add more results as needed
      ].filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(searchResults);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (query.length >= 2) {
      performSearch(query);
    } else {
      setResults([]);
    }
  }, [query]);

  const containerClasses = isFullScreen
    ? 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20'
    : 'relative';

  const searchBarClasses = isFullScreen
    ? 'w-full max-w-2xl bg-white rounded-lg shadow-2xl'
    : 'w-full';

  return (
    <div className={containerClasses}>
      <div className={searchBarClasses}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses, tools, articles..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isFullScreen && (
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {query.length >= 2 && (
          <div className="absolute w-full bg-white rounded-b-lg shadow-lg mt-1 max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">Searching...</div>
            ) : results.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {results.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    className="block p-4 hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setQuery('');
                      onClose?.();
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{result.title}</h4>
                      <span className="text-sm text-blue-600 capitalize">{result.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                  </a>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}