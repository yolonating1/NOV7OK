import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function ResourceSection() {
  const resources = [
    {
      title: "Freelance Copywriting Guide",
      description: "Comprehensive articles and tutorials on building a successful copywriting career",
      link: "https://www.freelancecopywriting.net/articles",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Free Copywriting Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our curated collection of professional copywriting resources to enhance your skills and grow your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-200 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Access Resources
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}