import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Shield } from 'lucide-react';

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  }
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Empowering Future Cybersecurity Experts
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community of cybersecurity enthusiasts and start your journey towards becoming a security expert.
            </p>
            <Button size="lg" className="animate-pulse">
              Explore Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative"
          >
            <motion.div 
              className="relative w-full aspect-square max-w-md mx-auto"
              animate={floatingAnimation}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
              <Shield className="w-full h-full text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}