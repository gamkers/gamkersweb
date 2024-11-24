import { motion } from 'framer-motion';
import { Youtube as YoutubeIcon } from 'lucide-react';
import { Button } from './ui/button';

export default function Youtube() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <YoutubeIcon className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Gamkers YouTube Channel</h2>
          <a
            href="https://www.youtube.com/@gamkeryt/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="group">
              <YoutubeIcon className="w-5 h-5 mr-2 group-hover:text-red-500 transition-colors" />
              Watch Our Videos
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}