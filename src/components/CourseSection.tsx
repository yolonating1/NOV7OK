import React from 'react';
import CourseCard from './CourseCard';
import { courses } from '../data/courses';
import HeadlineAnalyzer from './HeadlineAnalyzer';
import { Sparkles, Zap, Brain, Code, Bot, ArrowRight, DollarSign, Users, Briefcase, PenTool, Search } from 'lucide-react';

interface CourseSectionProps {
  activeTab: string;
}

export default function CourseSection({ activeTab }: CourseSectionProps) {
  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  const toolCards = [
    {
      title: "NeuronWriter SEO",
      description: "Advanced SEO optimization and content creation platform. Create high-ranking content with AI-powered insights and recommendations.",
      link: "https://app.neuronwriter.com/ar/b3a3b98151d0867de337d7e7f1be9a16",
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Rytr AI Copywriting",
      description: "Professional AI copywriting assistant for creating engaging content. Generate high-converting copy in seconds.",
      link: "https://rytr.me/?via=frank-couchman",
      icon: <PenTool className="h-6 w-6" />
    },
    {
      title: "Gizzmo AI",
      description: "Advanced AI writing assistant powered by GPT-4, designed specifically for professional copywriters. Create high-converting copy with AI assistance.",
      link: "https://gizzmo.ai/?via=frank",
      icon: <Bot className="h-6 w-6" />
    },
    {
      title: "EverNeed AI",
      description: "All-in-one AI content creation platform for copywriters. Generate engaging content, optimize for SEO, and scale your writing business.",
      link: "https://everneedai.idevaffiliate.com/232.html",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Mixo.io",
      description: "Create stunning landing pages and marketing websites that convert. Perfect for copywriters building their online presence.",
      link: "https://www.mixo.io/?via=1ff8b1",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "AWeber Email Marketing",
      description: "Professional email marketing platform for copywriters. Create and manage high-converting email campaigns.",
      link: "https://www.aweber.com/easy-email.htm?id=558313",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Scalenut AI Writing",
      description: "Scale your content creation with AI-powered writing assistance",
      link: "https://scalenut.com/?fpr=frank19",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "What qualifications do I need to become a copywriter?",
      answer: "No formal qualifications are required to become a copywriter. However, strong writing skills, creativity, and understanding of marketing principles are essential. Our courses provide comprehensive training to help you develop these skills and earn professional certification."
    },
    {
      question: "How much can I earn as a copywriter?",
      answer: "Copywriting income varies based on experience, specialization, and client base. Entry-level copywriters typically earn $30-50K annually, while experienced professionals can earn $80K-150K+. Freelance copywriters often charge $50-250+ per hour depending on their expertise and market."
    },
    {
      question: "How long does it take to complete the copywriting courses?",
      answer: "Course completion times vary by program and individual pace. Most students complete foundation courses in 4-8 weeks with dedicated study. Advanced specialization courses may take 2-3 months. All courses offer lifetime access, allowing you to learn at your own pace."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "While we don't guarantee job placement, our courses include comprehensive career guidance, portfolio development, and access to job opportunities through our network. Many courses also provide direct access to paid writing opportunities during and after training."
    },
    {
      question: "What types of copywriting are in highest demand?",
      answer: "Digital copywriting, including SEO content, email marketing, and social media copy, shows consistently high demand. Direct response copywriting and sales page creation also remain highly sought-after skills in the current market."
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Professional Copywriting Courses</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Choose from our selection of expert-led copywriting courses designed to help you master the art of persuasive writing.
        </p>
        
        {/* Writer Opportunities Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a
            href="https://textroyal.com/r/198665"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold">Hire Writers</h3>
            </div>
            <p className="text-gray-600 mb-4">Find professional copywriters for your projects. Access a pool of talented writers ready to deliver quality content.</p>
            <span className="text-blue-600 font-medium">Post Your Project →</span>
          </a>
          
          <a
            href="https://textroyal.com/writing-jobs/r/198665"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex items-center mb-4">
              <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold">Become A Writer</h3>
            </div>
            <p className="text-gray-600 mb-4">Earn $0.05 per word writing content. Start your professional writing career today.</p>
            <span className="text-blue-600 font-medium">Apply Now →</span>
          </a>
          
          <a
            href="https://d95c8xp93dfgwbi9dh2p2h27w6.hop.clickbank.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold">Writing Jobs</h3>
            </div>
            <p className="text-gray-600 mb-4">Make $25 per hour writing from home. Access exclusive writing opportunities.</p>
            <span className="text-blue-600 font-medium">Start Earning →</span>
          </a>
        </div>
        
        {/* 2025 Breakthrough Message */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-4">Make 2025 Your Breakthrough Year in Copywriting!</h3>
          <p className="text-lg mb-6">
            Master your craft, attract premium clients, and confidently raise your rates. Secure enviable copywriting jobs and stand out as a top-tier writer. Start now and transform your career for a lucrative 2025!
          </p>
          <a
            href="https://www.freelancecopywriting.net/articles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Explore Professional Tools <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* Headline Analyzer */}
        <div className="mb-16">
          <HeadlineAnalyzer />
        </div>

        {/* Essential Tools Section */}
        <div className="mb-16" id="tools">
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

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-xl font-semibold mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 rounded-xl p-8 text-center text-sm text-gray-600">
          <p>
            No promises or guarantees of income or financial success are provided. Our mission is to clearly explain our methods and share our knowledge to help individuals pursue their objectives. Achieving results depends entirely on your dedication to learning, applying the skills we teach, and tailoring them to fit your unique circumstances, abilities, and environment. We're here as educators, guiding you to unlock your potential. Always remember, success lies in your hands and the effort you commit when engaging with anything from these copywriting courses.
          </p>
        </div>
      </div>
    </section>
  );
}