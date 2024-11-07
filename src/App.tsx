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
  Clock,
  Rocket
} from 'lucide-react';
import HeadlineAnalyzer from './components/HeadlineAnalyzer';
import TemplateLibrary from './components/TemplateLibrary';
import CourseSection from './components/CourseSection';
import CategoryTabs from './components/CategoryTabs';
import ToolGrid from './components/ToolGrid';
import TrustBar from './components/TrustBar';
import ResourceSection from './components/ResourceSection';

function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeToolTab, setActiveToolTab] = useState<'analyzer' | 'templates'>('analyzer');

  const faqs = [
    {
      question: "Which copywriting course is best for beginners?",
      answer: "For beginners, we recommend starting with TextRoyal's Professional Writing Certification for immediate earning opportunities, followed by AWAI's Accelerated Program for comprehensive copywriting training."
    },
    {
      question: "How much can I earn after completing these copywriting courses?",
      answer: "Our graduates typically start earning $25-$35 per hour, with experienced copywriters making $100+ per hour. Many successful students earn six-figure incomes through client work and royalties."
    },
    {
      question: "Are these copywriting courses suitable for remote work?",
      answer: "Yes! All our copywriting courses are designed for remote work success. You'll learn how to find clients, manage projects, and deliver quality work from anywhere in the world."
    },
    {
      question: "How long does it take to complete the copywriting courses?",
      answer: "Course completion times vary: TextRoyal certification can be completed in days, while comprehensive programs like AWAI's Accelerated Program typically take 3-6 months, depending on your pace."
    },
    {
      question: "Do I get a certificate after completing the copywriting courses?",
      answer: "Yes, all our copywriting courses include professional certificates upon completion. These certificates are recognized by top marketing agencies and businesses worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              Master the Art of <span className="text-yellow-400">Copywriting</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join over 50,000 successful graduates who've transformed their writing into high-income skills. Start earning $25-$35+ per hour from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#courses" 
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-yellow-400 text-blue-900 hover:bg-yellow-300 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                View Copywriting Courses <ChevronDown className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://textroyal.com/writing-jobs/r/198665" 
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Start Earning Today <Rocket className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <TrustBar />

      {/* Quick Start Section */}
      <section id="quick-start" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 py-2 px-6 rounded-bl-lg font-semibold">
              Limited Time Offer
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Start Your Copywriting Career Today
                </h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2" />
                    <span>No Experience Required</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2" />
                    <span>Professional Training Included</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2" />
                    <span>Work From Anywhere</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2" />
                    <span>Weekly Payments</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-4">
                  <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-sm text-blue-100">Limited Spots Available</p>
                </div>
                <a
                  href="https://textroyal.com/r/198665"
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-300 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg font-medium"
                >
                  Begin Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <CourseSection activeTab={activeTab} />

      {/* Tools Grid */}
      <ToolGrid />

      {/* Resources Section */}
      <ResourceSection />

      {/* Copywriting Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Free Copywriting Tools</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Professional tools to enhance your copywriting skills and boost your results.
          </p>
          
          <div className="flex justify-center mb-8 space-x-4">
            <button
              onClick={() => setActiveToolTab('analyzer')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeToolTab === 'analyzer'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Headline Analyzer
            </button>
            <button
              onClick={() => setActiveToolTab('templates')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeToolTab === 'templates'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Template Library
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeToolTab === 'analyzer' ? <HeadlineAnalyzer /> : <TemplateLibrary />}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl hover:border-blue-200 transition-colors shadow-sm hover:shadow-md">
                <button
                  className="w-full py-4 px-6 flex justify-between items-center text-left"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Transform Your Writing Career Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of successful copywriters who have launched their careers through our professional training programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#courses"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Browse Courses
            </a>
            <a
              href="https://textroyal.com/r/198665"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-300 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <Star className="mr-2 h-5 w-5" />
              Start Now
            </a>
          </div>
        </div>
      </section>

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