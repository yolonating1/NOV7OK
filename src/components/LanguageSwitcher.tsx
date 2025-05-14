import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'ur', name: 'اردو' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    // Force reload components to ensure all content is translated
    window.location.reload();
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium">{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2 max-h-96 overflow-y-auto">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                i18n.language === language.code ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}