import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const socialLinks = [
  {
    platform: 'Instagram',
    icon: Instagram,
    stats: '200k+ followers',
    link: 'https://www.instagram.com/gamkers/',
  },
  {
    platform: 'Discord',
    icon: MessageCircle,
    stats: 'Join our server',
    link: 'https://discord.gg/hmtHepaX',
  },
];

export default function Community() {
  return (
    <section id="community" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
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
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
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