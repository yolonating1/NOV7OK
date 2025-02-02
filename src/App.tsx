import React, { useState } from 'react';
import {
  ArrowRight,
  Zap
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
            {/* Hero Section with Modern Gradient */}
            <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
              <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Professional Copywriting Courses
                  </h1>
                  <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100">
                    Master the art of copywriting with expert-led training and certification
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="#courses"
                      className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                      View Courses <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <a
                      href="#tools"
                      className="inline-flex items-center px-8 py-4 bg-blue-700/30 text-white rounded-full hover:bg-blue-700/40 transition-all transform hover:-translate-y-1 backdrop-blur-sm border border-white/10"
                    >
                      Explore Tools <Zap className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Hero Bottom Wave */}
              <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                  <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
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
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-12">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setActiveToolTab('analyzer')}
                      className={`px-8 py-4 rounded-full font-medium transition-all transform hover:-translate-y-1 ${
                        activeToolTab === 'analyzer'
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
                      }`}
                    >
                      Headline Analyzer
                    </button>
                    <button
                      onClick={() => setActiveToolTab('templates')}
                      className={`px-8 py-4 rounded-full font-medium transition-all transform hover:-translate-y-1 ${
                        activeToolTab === 'templates'
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
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
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Transform your writing skills into a profitable copywriting career with professional training and certification.</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors">Tools</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Questions? Reach out to our support team for assistance.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>© {new Date().getFullYear()} CopywritingCourses.org - Professional Copywriting Training</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;