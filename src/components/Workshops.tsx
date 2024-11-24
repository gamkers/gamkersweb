import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';

const workshops = [
  {
    title: 'Ethical Hacking Basics',
    link: 'https://youtu.be/N4UzREeDUH8?si=taMUeRWqqNC_QQpi',
  },
  {
    title: 'Network Hacking Basics',
    link: 'https://youtu.be/S8XiBBwp95U?si=Sz6VaMXX4AYM_Gsp',
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary" />
                    {workshop.title}
                  </CardTitle>
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