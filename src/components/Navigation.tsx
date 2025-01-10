import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

export default function Navigation({ setCurrentPage, currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="/"
                onClick={(e) => handleNavClick('home', e)}
                className="text-2xl font-bold text-blue-600"
              >
                CopywritingCourses
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="/"
                onClick={(e) => handleNavClick('home', e)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  currentPage === 'home'
                    ? 'border-blue-600 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-blue-600'
                }`}
              >
                Home
              </a>
              <a
                href="/articles"
                onClick={(e) => handleNavClick('articles', e)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  currentPage === 'articles'
                    ? 'border-blue-600 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-blue-600'
                }`}
              >
                Articles
              </a>
              <a
                href="/about"
                onClick={(e) => handleNavClick('about', e)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  currentPage === 'about'
                    ? 'border-blue-600 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-blue-600'
                }`}
              >
                About Us
              </a>
              <a
                href="/contact"
                onClick={(e) => handleNavClick('contact', e)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  currentPage === 'contact'
                    ? 'border-blue-600 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-blue-600'
                }`}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="https://textroyal.com/writing-jobs/r/198665"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Start Earning Now
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="/"
              onClick={(e) => handleNavClick('home', e)}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="/articles"
              onClick={(e) => handleNavClick('articles', e)}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Articles
            </a>
            <a
              href="/about"
              onClick={(e) => handleNavClick('about', e)}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              About Us
            </a>
            <a
              href="/contact"
              onClick={(e) => handleNavClick('contact', e)}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Contact
            </a>
            <div className="pl-3 pr-4 py-2">
              <a
                href="https://textroyal.com/writing-jobs/r/198665"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Start Earning Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}