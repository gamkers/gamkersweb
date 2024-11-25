import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';

const workshops = [
  {
    title: 'Ethical Hacking Basics',
    link: 'https://youtu.be/N4UzREeDUH8?si=taMUeRWqqNC_QQpi',
    thumbnail: 'https://img.youtube.com/vi/N4UzREeDUH8/maxresdefault.jpg'
  },
  {
    title: 'Network Hacking Basics',
    link: 'https://youtu.be/S8XiBBwp95U?si=Sz6VaMXX4AYM_Gsp',
    thumbnail: 'https://img.youtube.com/vi/S8XiBBwp95U/maxresdefault.jpg'
  },
  {
    title: 'Python Programming',
    link: 'https://youtu.be/OspiqFAmv0Q?si=CTonWAocDWphXtpN',
    thumbnail: 'https://img.youtube.com/vi/OspiqFAmv0Q/maxresdefault.jpg'
  }
];

export default function Workshops() {
  return (
    <section id="workshops" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-background to-background" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Workshops</h2>
          <p className="text-muted-foreground">Watch our recorded workshop sessions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={workshop.thumbnail} 
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={workshop.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Watch Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}