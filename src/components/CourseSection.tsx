import React from 'react';
import CourseCard from './CourseCard';
import { courses } from '../data/courses';
import HeadlineAnalyzer from './HeadlineAnalyzer';
import { Sparkles, Zap, Brain, Palette, Mail } from 'lucide-react';

interface CourseSectionProps {
  activeTab: string;
}

export default function CourseSection({ activeTab }: CourseSectionProps) {
  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  const toolCards = [
    {
      title: "Scalenut AI Writing",
      description: "Scale your content creation with AI-powered writing assistance",
      link: "https://scalenut.com/?fpr=frank19",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Rytr AI Copywriting",
      description: "Create high-converting copy in seconds with advanced AI",
      link: "https://rytr.me/?via=frank-couchman",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "NeuronWriter SEO",
      description: "Optimize your content for search engines with AI assistance",
      link: "https://app.neuronwriter.com/ar/b3a3b98151d0867de337d7e7f1be9a16",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Mixo Website Builder",
      description: "Create professional landing pages for your copywriting business",
      link: "https://www.mixo.io/?via=1ff8b1",
      icon: <Palette className="h-6 w-6" />
    },
    {
      title: "AWeber Email Marketing",
      description: "Build your email list and automate your marketing",
      link: "https://www.aweber.com/easy-email.htm?id=558313",
      icon: <Mail className="h-6 w-6" />
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Professional Copywriting Courses</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Choose from our selection of expert-led copywriting courses designed to help you master the art of persuasive writing.
        </p>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCourses.map((course, index) => {
            // Update Nico Engler's course link
            if (course.title === "Nico Engler's Freelance Copywriting Blueprint") {
              course.link = "https://www.copyspace.ai/?ref=8fjcm";
            }
            return <CourseCard key={index} {...course} />;
          })}
        </div>

        {/* Headline Analyzer */}
        <div className="mb-16">
          <HeadlineAnalyzer />
        </div>

        {/* Essential Tools Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Essential Copywriting Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolCards.map((tool, index) => (
              <a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    {tool.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{tool.title}</h4>
                </div>
                <p className="text-gray-600">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Hosting Partner */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Premium WordPress Hosting for Writers</h3>
          <p className="text-gray-600 mb-6">Launch your copywriting portfolio with lightning-fast, secure hosting</p>
          <a
            href="https://wpx.net/?affid=11409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started with WPX
          </a>
        </div>
      </div>
    </section>
  );
}