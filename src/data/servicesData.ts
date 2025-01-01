import { Brain, Code, Server, Smartphone } from 'lucide-react';

export const servicesData = {
  webDevelopment: {
    title: 'Web Development',
    icon: Code,
    description: 'Create modern, responsive, and scalable web applications using cutting-edge technologies and best practices.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    technologies: [
      {
        name: 'React',
        icon: '/icons/react.svg',
        description: 'Building interactive UIs with React and Next.js'
      },
      {
        name: 'Node.js',
        icon: '/icons/nodejs.svg',
        description: 'Scalable backend solutions with Express and NestJS'
      },
      {
        name: 'TypeScript',
        icon: '/icons/typescript.svg',
        description: 'Type-safe development for robust applications'
      }
    ],
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'SEO Optimization',
      'Performance Optimization',
      'API Integration',
      'Database Design'
    ],
    process: [
      {
        title: 'Requirements Analysis',
        description: 'Understanding your needs and planning the solution'
      },
      {
        title: 'Design & Architecture',
        description: 'Creating scalable and maintainable architecture'
      },
      {
        title: 'Development',
        description: 'Building with modern technologies and best practices'
      },
      {
        title: 'Testing & Deployment',
        description: 'Ensuring quality and smooth deployment'
      }
    ]
  },
  aiSolutions: {
    title: 'AI Solutions',
    icon: Brain,
    description: 'Leverage the power of artificial intelligence to transform your business processes and decision-making.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80',
    technologies: [
      {
        name: 'TensorFlow',
        icon: '/icons/tensorflow.svg',
        description: 'Deep learning and neural networks'
      },
      {
        name: 'PyTorch',
        icon: '/icons/pytorch.svg',
        description: 'Advanced machine learning models'
      },
      {
        name: 'OpenAI',
        icon: '/icons/openai.svg',
        description: 'Natural language processing and generation'
      }
    ],
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Machine Learning Models',
      'AI Integration',
      'Data Analysis'
    ],
    process: [
      {
        title: 'Data Collection',
        description: 'Gathering and preprocessing relevant data'
      },
      {
        title: 'Model Development',
        description: 'Creating and training AI models'
      },
      {
        title: 'Integration',
        description: 'Implementing AI solutions in your systems'
      },
      {
        title: 'Monitoring & Optimization',
        description: 'Ensuring optimal performance and results'
      }
    ]
  },
  // Add more services here
};

export type ServiceKey = keyof typeof servicesData;