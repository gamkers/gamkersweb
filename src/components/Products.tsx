import { motion } from 'framer-motion';
import { Brain, Database, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const products = [
  {
    title: 'GamkersGPT',
    description: 'Advanced AI-powered learning assistant',
    icon: Brain,
    link: 'https://gamkersgpt.studentbae.in/',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'Gamkers Hub',
    description: 'Your central learning platform',
    icon: Database,
    link: 'https://learn.studentbae.in/',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'StudentBae',
    description: 'Student resources and community',
    icon: Users,
    link: 'https://studentbae.in/',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop'
  },
];

export default function Products() {
  return (
    <section id="products" className="min-h-screen flex items-center py-24 md:py-32 relative overflow-hidden gradient-bg-products section-divider">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground">Discover our suite of cybersecurity learning tools</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <Card className="group card-shadow card-hover overflow-hidden bg-card/95">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <CardHeader>
                    <product.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm text-primary group-hover:underline">Learn More →</span>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}