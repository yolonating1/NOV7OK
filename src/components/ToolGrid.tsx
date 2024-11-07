import React from 'react';
import { tools } from '../data/tools';
import { CheckCircle2, ExternalLink } from 'lucide-react';

export default function ToolGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Professional Copywriting Tools</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Enhance your copywriting workflow with these industry-leading tools and resources.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="relative h-48">
                <img 
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {tool.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-bold shadow-lg">
                      {tool.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {tool.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                <div className="mb-6">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={tool.link}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Now <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}