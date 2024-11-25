import { motion } from 'framer-motion';
import { Youtube as YoutubeIcon, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const featuredVideos = [
  {
    title: "Ethical Hacking",
    thumbnail: "https://img.youtube.com/vi/NdctGBVLoic/maxresdefault.jpg"
  },
  {
    title: "Network Security",
    thumbnail: "https://img.youtube.com/vi/wd33hPF6GQQ/maxresdefault.jpg"
  },
  {
    title: "Python Programming",
    thumbnail: "https://img.youtube.com/vi/_-cGB0KlwuE/maxresdefault.jpg"
  }
];

export default function Youtube() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-background to-background" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <YoutubeIcon className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Gamkers YouTube Channel</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our channel for the latest cybersecurity tutorials, workshops, and tech insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://www.youtube.com/@gamkeryt/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="group bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white transition-colors">
              <YoutubeIcon className="w-5 h-5 mr-2" />
              Subscribe Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}