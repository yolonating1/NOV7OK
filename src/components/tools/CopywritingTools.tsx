import React, { useState } from 'react';
import HeadlineAnalyzer from '../HeadlineAnalyzer';
import TemplateLibrary from '../TemplateLibrary';
import EmailSubjectGenerator from './EmailSubjectGenerator';
import PowerWordFinder from './PowerWordFinder';
import { Wand2, Mail, Sparkles, Layout } from 'lucide-react';

const tools = [
  {
    id: 'analyzer',
    name: 'Headline Analyzer',
    icon: <Wand2 className="h-6 w-6" />,
    description: 'Analyze and optimize your headlines for maximum impact'
  },
  {
    id: 'templates',
    name: 'Copy Templates',
    icon: <Layout className="h-6 w-6" />,
    description: 'Professional copywriting templates for various purposes'
  },
  {
    id: 'email',
    name: 'Email Subject Generator',
    icon: <Mail className="h-6 w-6" />,
    description: 'Generate high-converting email subject lines'
  },
  {
    id: 'power-words',
    name: 'Power Word Finder',
    icon: <Sparkles className="h-6 w-6" />,
    description: 'Find and integrate persuasive power words'
  }
];

export default function CopywritingTools() {
  const [activeTool, setActiveTool] = useState('analyzer');

  const renderTool = () => {
    switch (activeTool) {
      case 'analyzer':
        return <HeadlineAnalyzer />;
      case 'templates':
        return <TemplateLibrary />;
      case 'email':
        return <EmailSubjectGenerator />;
      case 'power-words':
        return <PowerWordFinder />;
      default:
        return <HeadlineAnalyzer />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Copywriting Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your copywriting with our suite of professional tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                activeTool === tool.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow hover:-translate-y-1'
              }`}
            >
              <div className={`mb-3 ${activeTool === tool.id ? 'text-white' : 'text-blue-600'}`}>
                {tool.icon}
              </div>
              <h3 className="font-semibold mb-2">{tool.name}</h3>
              <p className={`text-sm ${activeTool === tool.id ? 'text-blue-100' : 'text-gray-500'}`}>
                {tool.description}
              </p>
            </button>
          ))}
        </div>

        {renderTool()}
      </div>
    </section>
  );
}