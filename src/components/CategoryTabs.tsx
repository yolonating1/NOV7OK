import React from 'react';

interface CategoryTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function CategoryTabs({ activeTab, setActiveTab }: CategoryTabsProps) {
  const categories = ['all', 'foundation', 'marketing', 'beginner', 'web'];

  return (
    <div className="flex justify-center mb-12 px-4 overflow-x-auto py-4">
      <div className="inline-flex space-x-2 bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-lg">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full font-medium transition-all transform hover:-translate-y-0.5 ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}