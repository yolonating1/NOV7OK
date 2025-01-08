import React from 'react';
import { Award, Users, Globe, BookOpen, Clock, Shield } from 'lucide-react';

interface AboutUsProps {
  setCurrentPage: (page: string) => void;
}

export default function AboutUs({ setCurrentPage }: AboutUsProps) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Copywriting Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best copywriting courses online, trusted by over 50,000 successful writers. Our certified copywriting training programs deliver proven results in content writing, digital marketing, and direct response copywriting.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Leading Online Copywriting Courses</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our comprehensive copywriting courses are designed for both beginners and experienced writers. Whether you're seeking copywriting certification or looking to enhance your content writing skills, our expert-led programs provide practical, results-driven training.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            From free copywriting courses to advanced certification programs, we offer flexible learning paths tailored to your goals. Master essential copywriting techniques, SEO content writing, and persuasive marketing strategies through hands-on practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Copywriting Courses</h2>
            <p className="text-gray-600 leading-relaxed">
              Our professional copywriting training combines proven methodologies with practical experience. Learn from successful copywriters and access real-world projects that prepare you for high-paying writing opportunities.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certified Copywriting Training</h2>
            <p className="text-gray-600 leading-relaxed">
              Earn industry-recognized copywriting certification while mastering in-demand skills. Our courses cover everything from web copywriting and email marketing to content strategy and SEO writing.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p>Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p>Certified Writers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$100K+</div>
              <p>Average Writer Income</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <a
            href="https://copywritingcourses.org"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg font-medium"
          >
            Start Your Copywriting Career Today
          </a>
        </div>
      </div>
    </div>
  );
}