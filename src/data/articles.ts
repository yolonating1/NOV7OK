import { generateArticleContent, generateTopicalArticleContent } from '../utils/articleGenerator';

// Location-based articles
const locations = [
  // US States
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
  
  // UK Counties
  'Bedfordshire', 'Berkshire', 'Bristol', 'Buckinghamshire', 'Cambridgeshire', 'Cheshire',
  'Cornwall', 'Cumbria', 'Derbyshire', 'Devon', 'Dorset', 'Durham', 'East Riding of Yorkshire',
  'East Sussex', 'Essex', 'Gloucestershire', 'Greater London', 'Greater Manchester', 'Hampshire',
  'Herefordshire', 'Hertfordshire', 'Isle of Wight', 'Kent', 'Lancashire', 'Leicestershire',
  'Lincolnshire', 'Merseyside', 'Norfolk', 'North Yorkshire', 'Northamptonshire', 'Northumberland',
  'Nottinghamshire', 'Oxfordshire', 'Rutland', 'Shropshire', 'Somerset', 'South Yorkshire',
  'Staffordshire', 'Suffolk', 'Surrey', 'Tyne and Wear', 'Warwickshire', 'West Midlands',
  'West Sussex', 'West Yorkshire', 'Wiltshire', 'Worcestershire',
  
  // Australian States/Territories
  'Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland',
  'South Australia', 'Tasmania', 'Victoria', 'Western Australia',
  
  // Indian States/Territories
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
  'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi',
  'Puducherry', 'Ladakh', 'Jammu and Kashmir'
];

// Topical articles
const topics = [
  'What is copywriting',
  'How to become a copywriter',
  'Tips for effective copywriting',
  'Examples of great copywriting',
  'The importance of copywriting',
  'Differences between copywriting and content writing',
  'How to write copy that sells',
  'Best practices for copywriting',
  'What makes good copywriting',
  'How to write compelling copy',
  'How to write persuasive copy',
  'The role of copywriting in marketing',
  'How to write copy for social media',
  'The art of copywriting',
  'Copywriting formulas that work',
  'How to write headlines that grab attention',
  'How to write email copy that converts',
  'Copywriting mistakes to avoid',
  'How to write copy for landing pages',
  'Copywriting techniques for SEO',
  'The psychology of copywriting',
  'How to write copy for product descriptions',
  'How to write copy for websites',
  'How to write copy for sales pages',
  'How to write copy for video scripts',
  'How to write copy for print ads',
  'How to write copy for radio ads',
  'How to write copy for billboards',
  'How to write copy for direct mail',
  'How to write copy for brochures',
  'Copywriting courses online',
  'Copywriting best practices',
  'Award-winning copywriting samples',
  'Copywriting techniques for high conversion',
  'Writing persuasive marketing content',
  'Crafting convincing advertising messages',
  'Social media copywriting strategies',
  'Proven copywriting templates',
  'Effective headline writing tips',
  'Email marketing copywriting techniques',
  'Common pitfalls in copywriting',
  'Landing page content optimization',
  'SEO-friendly content writing methods',
  'Crafting engaging product listings',
  'Website content writing guidelines',
  'Sales page copy optimization',
  'Scriptwriting tips for marketing videos',
  'Designing effective print advertisements',
  'Creating engaging radio commercial scripts',
  'Brochure content development strategies'
];

const getRegionForLocation = (location: string): string => {
  if (locations.indexOf(location) < 50) return 'us';
  if (locations.indexOf(location) < 96) return 'uk';
  if (locations.indexOf(location) < 104) return 'australia';
  return 'india';
};

const getImageForLocation = (location: string): string => {
  const region = getRegionForLocation(location);
  const images = {
    us: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200'
    ],
    uk: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200'
    ],
    australia: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200'
    ],
    india: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=1200'
    ]
  };
  
  const regionImages = images[region as keyof typeof images];
  return regionImages[Math.floor(Math.random() * regionImages.length)];
};

const getTopicalImage = (topic: string): string => {
  const images = [
    'https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  ];
  return images[Math.floor(Math.random() * images.length)];
};

// Generate location-based articles
const locationArticles = locations.map(location => ({
  title: `Copywriting in ${location}`,
  location,
  slug: location.toLowerCase().replace(/\s+/g, '-'),
  type: 'location' as const,
  region: getRegionForLocation(location),
  image: getImageForLocation(location),
  excerpt: `Discover everything you need to know about copywriting opportunities, training, and career growth in ${location}. Get expert insights and practical tips for success.`,
  content: generateArticleContent(location, getRegionForLocation(location))
}));

// Generate topical articles
const topicalArticles = topics.map(topic => ({
  title: topic,
  slug: topic.toLowerCase().replace(/\s+/g, '-'),
  type: 'topic' as const,
  image: getTopicalImage(topic),
  excerpt: `Master the art of ${topic.toLowerCase()}. Learn proven strategies, expert techniques, and practical tips to enhance your copywriting skills.`,
  content: generateTopicalArticleContent(topic)
}));

export const articles = [...locationArticles, ...topicalArticles];