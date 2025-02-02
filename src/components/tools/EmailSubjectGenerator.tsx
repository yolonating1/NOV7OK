import React, { useState } from 'react';
import { Mail, Copy, CheckCheck } from 'lucide-react';

const templates = {
  urgency: [
    "🔥 Last Chance: [Offer] Ends Tonight",
    "⏰ Only [X] Hours Left: [Benefit]",
    "Don't Miss Out: [Exclusive Offer] Closing Soon"
  ],
  curiosity: [
    "The Unusual [Method] That [Achievement]",
    "What [Experts] Don't Want You to Know About [Topic]",
    "Here's What [Industry] Insiders Are Talking About"
  ],
  benefit: [
    "Get [Benefit] in Just [Timeframe]",
    "Transform Your [Pain Point] Into [Desired Outcome]",
    "[X] Ways to [Achieve Goal] Without [Common Problem]"
  ],
  social_proof: [
    "How [Customer] Achieved [Result] Using [Product]",
    "Join [X] Others Who Have [Achievement]",
    "See Why [X] Professionals Choose [Product]"
  ]
};

export default function EmailSubjectGenerator() {
  const [category, setCategory] = useState('urgency');
  const [customVariables, setCustomVariables] = useState<Record<string, string>>({});
  const [copiedSubject, setCopiedSubject] = useState<string | null>(null);

  const replaceVariables = (template: string) => {
    let result = template;
    const variables = template.match(/\[(.*?)\]/g) || [];
    
    variables.forEach(variable => {
      const key = variable.replace(/[\[\]]/g, '');
      result = result.replace(variable, customVariables[key] || variable);
    });
    
    return result;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSubject(text);
    setTimeout(() => setCopiedSubject(null), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Mail className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold">Email Subject Line Generator</h3>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.keys(templates).map((key) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              className={`px-4 py-3 rounded-lg font-medium capitalize ${
                category === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {key.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {templates[category as keyof typeof templates].map((template, index) => {
          const variables = template.match(/\[(.*?)\]/g) || [];
          const subject = replaceVariables(template);

          return (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold">{subject}</h4>
                <button
                  onClick={() => copyToClipboard(subject)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {copiedSubject === subject ? (
                    <CheckCheck className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>

              {variables.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {variables.map((variable, i) => {
                    const key = variable.replace(/[\[\]]/g, '');
                    return (
                      <div key={i}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {key}:
                        </label>
                        <input
                          type="text"
                          value={customVariables[key] || ''}
                          onChange={(e) =>
                            setCustomVariables({
                              ...customVariables,
                              [key]: e.target.value
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={`Enter ${key.toLowerCase()}`}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}