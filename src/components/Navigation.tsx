import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import SearchBar from './SearchBar';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: 'home', label: t('nav.home') },
    { name: 'courses', label: t('nav.courses') },
    { name: 'blog', label: t('nav.blog') },
    { name: 'contact', label: t('nav.contact') }
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                >
                  CopywritingCourses
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentPage === link.name
                      ? 'text-white bg-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.name)}
                  className={`block w-full px-4 py-3 rounded-lg text-base font-medium text-left transition-all ${
                    currentPage === link.name
                      ? 'text-white bg-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className="py-3 px-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}