import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const socialLinks = [
  {
    platform: 'Instagram',
    icon: Instagram,
    stats: '200k+ followers',
    link: 'https://www.instagram.com/gamkers/',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=500&auto=format&fit=crop'
  },
  {
    platform: 'Discord',
    icon: MessageCircle,
    stats: 'Join our server',
    link: 'https://discord.gg/hmtHepaX',
    image: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=500&auto=format&fit=crop'
  },
];

export default function Community() {
  return (
    <section id="community" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground">Connect with fellow cybersecurity enthusiasts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.platform}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="group-hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={social.image} 
                    alt={social.platform}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <social.icon className="w-16 h-16 text-white opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <social.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <CardTitle>{social.platform}</CardTitle>
                      <CardDescription>{social.stats}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}