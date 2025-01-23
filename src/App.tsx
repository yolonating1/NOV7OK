import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  MessageSquare,
  Star,
  Target,
  Trophy,
  Zap,
  ArrowRight,
  Clock
} from 'lucide-react';
import HeadlineAnalyzer from './components/HeadlineAnalyzer';
import TemplateLibrary from './components/TemplateLibrary';
import CourseSection from './components/CourseSection';
import CategoryTabs from './components/CategoryTabs';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

interface PageState {
  name: string;
  params?: {
    slug?: string;
  };
}

function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeToolTab, setActiveToolTab] = useState<'analyzer' | 'templates'>('analyzer');
  const [currentPage, setCurrentPage] = useState<PageState>({ name: 'home' });

  const handlePageChange = (page: string, params?: { slug?: string }) => {
    setCurrentPage({ name: page, params });
  };

  const renderPage = () => {
    switch (currentPage.name) {
      case 'blog':
        return currentPage.params?.slug ? (
          <BlogPost 
            slug={currentPage.params.slug} 
            setCurrentPage={(page) => handlePageChange(page)} 
          />
        ) : (
          <BlogList onPostClick={(slug) => handlePageChange('blog', { slug })} />
        );
      case 'about':
        return <AboutUs setCurrentPage={(page) => handlePageChange(page)} />;
      case 'contact':
        return <ContactUs />;
      default:
        return (
          <>
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 text-white">
              <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Professional Copywriting Courses
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                    Master the art of copywriting with expert-led training and certification
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="#courses"
                      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      View Courses <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </header>

            {/* Courses Section */}
            <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <CourseSection activeTab={activeTab} />

            {/* Team Section */}
            <Team />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Tools Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-12">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setActiveToolTab('analyzer')}
                      className={`px-6 py-3 rounded-lg font-medium ${
                        activeToolTab === 'analyzer'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Headline Analyzer
                    </button>
                    <button
                      onClick={() => setActiveToolTab('templates')}
                      className={`px-6 py-3 rounded-lg font-medium ${
                        activeToolTab === 'templates'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Copy Templates
                    </button>
                  </div>
                </div>
                {activeToolTab === 'analyzer' ? <HeadlineAnalyzer /> : <TemplateLibrary />}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation 
        setCurrentPage={(page) => handlePageChange(page)} 
        currentPage={currentPage.name} 
      />
      {renderPage()}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">© {new Date().getFullYear()} CopywritingCourses.org - Professional Copywriting Training</p>
            <p>Transform your writing skills into a profitable copywriting career.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;