import { Instagram, MessageCircle, Youtube, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Card } from './ui/card';

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/gamkers/',
    label: 'Instagram',
  },
  {
    icon: MessageCircle,
    href: 'https://discord.gg/hmtHepaX',
    label: 'Discord',
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/@gamkeryt/featured',
    label: 'YouTube',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Card className="p-8 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:scale-105 transition-transform duration-500" />
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Stay updated with the latest cybersecurity trends, tutorials, and exclusive content delivered straight to your inbox.
                </p>
                <a href="https://gamkers.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="group">
                    Subscribe Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors group"
                >
                  <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>

            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Gamkers. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}