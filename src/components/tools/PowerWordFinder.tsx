import React, { useState } from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';

const POWER_WORDS = {
  emotion: [
    'amazing', 'astonishing', 'breathtaking', 'brilliant', 'captivating',
    'charming', 'delightful', 'enchanting', 'exciting', 'extraordinary'
  ],
  urgency: [
    'instant', 'limited', 'now', 'quick', 'hurry',
    'fast', 'deadline', 'today', 'urgent', 'immediate'
  ],
  trust: [
    'authentic', 'certified', 'guaranteed', 'proven', 'trusted',
    'verified', 'legitimate', 'official', 'tested', 'endorsed'
  ],
  value: [
    'exclusive', 'premium', 'elite', 'luxury', 'valuable',
    'special', 'limited-edition', 'unique', 'custom', 'signature'
  ],
  persuasion: [
    'discover', 'unlock', 'reveal', 'transform', 'master',
    'boost', 'enhance', 'maximize', 'optimize', 'elevate'
  ]
};

export default function PowerWordFinder() {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);

  const analyzeText = () => {
    const words = text.toLowerCase().split(/\s+/);
    const results: Record<string, string[]> = {};
    let totalPowerWords = 0;

    Object.entries(POWER_WORDS).forEach(([category, powerWords]) => {
      const found = words.filter(word => powerWords.includes(word));
      if (found.length > 0) {
        results[category] = found;
        totalPowerWords += found.length;
      }
    });

    const density = (totalPowerWords / words.length) * 100;

    setAnalysis({
      results,
      totalWords: words.length,
      totalPowerWords,
      density: density.toFixed(1)
    });
  };

  const getSuggestions = () => {
    const suggestions = [];
    const words = text.toLowerCase().split(/\s+/);
    
    // Check power word density
    if (analysis.density < 5) {
      suggestions.push("Consider adding more power words to increase emotional impact");
    } else if (analysis.density > 15) {
      suggestions.push("Be careful not to overuse power words - aim for natural flow");
    }

    // Check category balance
    const categories = Object.keys(analysis.results);
    if (categories.length < 3) {
      suggestions.push("Try incorporating power words from more categories for better balance");
    }

    return suggestions;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Sparkles className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold">Power Word Finder</h3>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter your copy:
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your copy here to analyze its power words..."
        />
        <button
          onClick={analyzeText}
          className="mt-4 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Analyze Power Words
        </button>
      </div>

      {analysis && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{analysis.totalWords}</div>
              <p className="text-sm text-gray-600">Total Words</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{analysis.totalPowerWords}</div>
              <p className="text-sm text-gray-600">Power Words</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{analysis.density}%</div>
              <p className="text-sm text-gray-600">Power Word Density</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">
                {Object.keys(analysis.results).length}
              </div>
              <p className="text-sm text-gray-600">Categories Used</p>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(analysis.results).map(([category, words]) => (
              <div key={category} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 capitalize">{category} Words</h4>
                <div className="flex flex-wrap gap-2">
                  {(words as string[]).map((word, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-2">Suggestions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {getSuggestions().map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}