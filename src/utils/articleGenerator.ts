export function generateUniqueContent(topic: string, context: string, length: number = 500): string {
  const templates = {
    copywriting: `Professional ${topic} requires a deep understanding of audience psychology and market dynamics. By focusing on ${context}, businesses can achieve better results and stronger engagement.`,
    
    marketing: `Effective ${topic} strategies drive business growth through targeted ${context}. Success depends on understanding key metrics and continuously optimizing performance.`,
    
    seo: `Modern ${topic} combines technical expertise with creative content development. ${context} plays a crucial role in achieving sustainable results.`,
    
    strategy: `Developing a comprehensive ${topic} approach requires careful planning and execution. ${context} helps ensure consistent results and measurable impact.`
  };

  const template = templates[topic.split(' ')[0] as keyof typeof templates] || templates.copywriting;
  const content = template.replace(/\$\{topic\}/g, topic).replace(/\$\{context\}/g, context);
  
  const words = content.split(' ');
  return words.slice(0, length).join(' ');
}