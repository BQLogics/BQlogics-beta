export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const productsList: Product[] = [
  {
    id: '1',
    name: 'AI Analytics Suite',
    description: 'Advanced analytics platform powered by artificial intelligence for data-driven decisions.',
    price: 'Starting at $299/mo',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    name: 'Smart CRM',
    description: 'Intelligent customer relationship management system with predictive insights.',
    price: 'Starting at $199/mo',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    name: 'CloudSecure',
    description: 'Enterprise-grade cloud security solution with real-time threat detection.',
    price: 'Starting at $399/mo',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
  }
];