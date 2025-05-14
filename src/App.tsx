import React, { useState } from 'react';
import { 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Globe, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  PenTool as Tool, 
  GraduationCap 
} from 'lucide-react';
import HeadlineAnalyzer from './components/HeadlineAnalyzer';
import CourseSection from './components/CourseSection';
import CategoryTabs from './components/CategoryTabs';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import TrustBar from './components/TrustBar';

interface PageState {
  name: string;
  params?: {
    slug?: string;
  };
}

function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<PageState>({ name: 'home' });

  const handlePageChange = (page: string, params?: { slug?: string }) => {
    setCurrentPage({ name: page, params });
    window.scrollTo(0, 0);
  };

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Professional Copywriting Courses
            </h1>
            <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your writing career with expert-led training and certification. Join 50,000+ successful graduates earning competitive incomes through our comprehensive programs.
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xl font-medium"
              >
                View Courses
              </button>
              <button
                onClick={() => handlePageChange('blog')}
                className="px-10 py-5 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xl font-medium"
              >
                Read Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      <TrustBar />

      {/* Featured In Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            <a href="https://www.freelancecopywriting.net" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all transform hover:scale-105">
              <div className="text-2xl font-bold text-blue-600">FreelanceCopywriting.net</div>
            </a>
            <a href="https://aiautomationspot.com" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all transform hover:scale-105">
              <div className="text-2xl font-bold text-blue-600">AIAutomationSpot</div>
            </a>
            <a href="https://www.automationsoftwarehub.com" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all transform hover:scale-105">
              <div className="text-2xl font-bold text-blue-600">AutomationSoftwareHub</div>
            </a>
            <a href="https://seostrategies.org" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all transform hover:scale-105">
              <div className="text-2xl font-bold text-blue-600">SEOStrategies.org</div>
            </a>
          </div>
        </div>
      </div>

      {/* Industry Recognition Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <Award className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Best Copywriting Course 2024</h3>
              <p className="text-gray-600 text-lg">Awarded by Digital Marketing Institute</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <Globe className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Global Excellence Award</h3>
              <p className="text-gray-600 text-lg">International Content Marketing Association</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <Users className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Top Education Provider</h3>
              <p className="text-gray-600 text-lg">Professional Writers Association</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Section */}
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <CourseSection activeTab={activeTab} />

      {/* Testimonials */}
      <Testimonials />

      {/* Team Section */}
      <Team />

      {/* Success Metrics Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100">Transforming careers and delivering results since 2008</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold mb-4">50K+</div>
              <p className="text-lg text-blue-100">Certified Writers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold mb-4">95%</div>
              <p className="text-lg text-blue-100">Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold mb-4">$85K</div>
              <p className="text-lg text-blue-100">Average Income</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold mb-4">15+</div>
              <p className="text-lg text-blue-100">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Writing Career?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community of successful copywriters and start your journey towards a rewarding career in professional writing.
            </p>
            <button
              onClick={() => handlePageChange('contact')}
              className="px-10 py-5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xl font-medium"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const renderPage = () => {
    switch (currentPage.name) {
      case 'home':
        return renderHomePage();
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
      case 'courses':
        return (
          <>
            <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <CourseSection activeTab={activeTab} />
          </>
        );
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation 
        setCurrentPage={(page) => handlePageChange(page)} 
        currentPage={currentPage.name} 
      />
      {renderPage()}
    </div>
  );
}

export default App;