import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Frank Clevero',
    role: 'Lead Copywriter',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    bio: 'Expert copywriter with 10+ years of experience in direct response and digital marketing.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'frank@example.com'
    }
  },
  {
    name: 'Stacy Pit',
    role: 'Marketing Strategist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    bio: 'Digital marketing expert specializing in conversion optimization and campaign strategy.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'stacy@example.com'
    }
  },
  {
    name: 'Trevor Salum',
    role: 'SEO Specialist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    bio: 'Technical SEO expert helping businesses achieve top rankings and organic growth.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'trevor@example.com'
    }
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to helping you succeed in your copywriting journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-600">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}