interface ArticleSection {
  title: string;
  content: string;
  relatedArticles?: Array<{
    title: string;
    slug: string;
  }>;
}

interface FAQ {
  question: string;
  answer: string;
}

interface TableData {
  headers: string[];
  rows: string[][];
}

interface KeyTakeaway {
  point: string;
  description: string;
}

interface ArticleContent {
  sections: ArticleSection[];
  faqs: FAQ[];
  tables: TableData[];
  keyTakeaways: KeyTakeaway[];
}

export function generateArticleContent(location: string, region: string): ArticleContent {
  const marketStats = {
    us: {
      avgSalary: '$65,000',
      growthRate: '7.6%',
      topIndustries: ['Technology', 'Healthcare', 'E-commerce', 'Finance', 'Real Estate']
    },
    uk: {
      avgSalary: '£45,000',
      growthRate: '6.8%',
      topIndustries: ['Digital Marketing', 'Financial Services', 'Retail', 'Technology', 'Media']
    },
    australia: {
      avgSalary: 'AUD 85,000',
      growthRate: '8.2%',
      topIndustries: ['Digital Media', 'E-commerce', 'Professional Services', 'Tourism', 'Education']
    },
    india: {
      avgSalary: '₹6,00,000',
      growthRate: '12.4%',
      topIndustries: ['IT Services', 'E-commerce', 'Digital Marketing', 'Education', 'Healthcare']
    }
  };

  const stats = marketStats[region as keyof typeof marketStats];

  const tables: TableData[] = [
    {
      headers: ['Industry', 'Growth Rate', 'Average Salary'],
      rows: stats.topIndustries.map(industry => [
        industry,
        stats.growthRate,
        stats.avgSalary
      ])
    }
  ];

  const faqs: FAQ[] = [
    {
      question: `What is the average copywriter salary in ${location}?`,
      answer: `The average copywriter salary in ${location} is ${stats.avgSalary}, with experienced professionals earning significantly more.`
    },
    {
      question: `What are the top industries for copywriters in ${location}?`,
      answer: `The top industries hiring copywriters in ${location} include ${stats.topIndustries.join(', ')}.`
    },
    {
      question: `What is the market growth rate for copywriting in ${location}?`,
      answer: `The copywriting market in ${location} is growing at ${stats.growthRate} annually.`
    }
  ];

  return {
    sections: [
      {
        title: `Copywriting in ${location}: Market Overview`,
        content: `The copywriting industry in ${location} is experiencing significant growth...`,
        relatedArticles: [
          { title: 'How to become a copywriter', slug: 'how-to-become-a-copywriter' },
          { title: 'What is copywriting', slug: 'what-is-copywriting' },
          { title: 'Copywriting best practices', slug: 'copywriting-best-practices' }
        ]
      },
      {
        title: 'Current Industry Trends',
        content: `Current trends in the ${location} copywriting market include...`
      },
      {
        title: 'Salary and Growth Prospects',
        content: `Copywriters in ${location} can expect competitive salaries...`
      },
      {
        title: 'Required Skills and Qualifications',
        content: 'Essential skills for successful copywriters include...'
      },
      {
        title: 'Top Employers and Opportunities',
        content: `Leading employers in ${location} include...`
      },
      {
        title: 'Training and Certification Options',
        content: 'Available training and certification programs...'
      },
      {
        title: 'Success Stories and Case Studies',
        content: 'Real-world success stories from copywriters...'
      }
    ],
    tables,
    faqs,
    keyTakeaways: [
      {
        point: 'Market Growth',
        description: `The copywriting market in ${location} is growing at ${stats.growthRate} annually`
      },
      {
        point: 'Earning Potential',
        description: `Average copywriter salary in ${location} is ${stats.avgSalary}`
      },
      {
        point: 'Top Industries',
        description: `Key industries hiring copywriters: ${stats.topIndustries.join(', ')}`
      }
    ]
  };
}

export function generateTopicalArticleContent(topic: string): ArticleContent {
  const tables: TableData[] = [
    {
      headers: ['Aspect', 'Description', 'Impact'],
      rows: [
        ['Research', 'Understanding target audience', 'High'],
        ['Writing', 'Creating compelling content', 'Critical'],
        ['Testing', 'Optimizing performance', 'Medium']
      ]
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'What are the key elements of successful copywriting?',
      answer: 'The key elements include understanding your audience, clear messaging, and compelling calls-to-action.'
    },
    {
      question: 'How can I measure copywriting effectiveness?',
      answer: 'Measure through conversion rates, engagement metrics, and A/B testing results.'
    },
    {
      question: 'What tools can help improve my copywriting?',
      answer: 'Popular tools include Grammarly, Hemingway Editor, and CoSchedule Headline Analyzer.'
    }
  ];

  return {
    sections: [
      {
        title: 'Understanding the Core Concepts',
        content: 'The fundamental principles of copywriting include...',
        relatedArticles: [
          { title: 'Copywriting best practices', slug: 'copywriting-best-practices' },
          { title: 'How to write compelling copy', slug: 'how-to-write-compelling-copy' },
          { title: 'The psychology of copywriting', slug: 'the-psychology-of-copywriting' }
        ]
      },
      {
        title: 'Key Principles and Techniques',
        content: 'Essential copywriting techniques that drive results...'
      },
      {
        title: 'Implementation Strategies',
        content: 'Step-by-step guide to implementing effective copy...'
      },
      {
        title: 'Common Challenges and Solutions',
        content: 'Addressing typical copywriting challenges...'
      },
      {
        title: 'Best Practices and Guidelines',
        content: 'Industry-proven best practices for success...'
      },
      {
        title: 'Tools and Resources',
        content: 'Recommended tools and resources for copywriters...'
      },
      {
        title: 'Measuring Success and ROI',
        content: 'Methods to track and improve copywriting performance...'
      }
    ],
    tables,
    faqs,
    keyTakeaways: [
      {
        point: 'Core Principles',
        description: 'Master the fundamental principles of effective copywriting'
      },
      {
        point: 'Implementation',
        description: 'Follow a systematic approach to writing and testing copy'
      },
      {
        point: 'Success Metrics',
        description: 'Track key performance indicators to measure effectiveness'
      }
    ]
  };
}