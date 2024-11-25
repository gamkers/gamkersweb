import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';

export default function Courses() {
  return (
    <section id="courses" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-background to-background" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Upcoming Courses</h2>
          <p className="text-muted-foreground">Master cybersecurity with our comprehensive courses</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop"
                alt="Python Programming"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            <CardHeader className="relative">
              <div className="absolute top-4 right-4">
                <Code2 className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <CardTitle className="text-2xl">Python with Ethical Hacking</CardTitle>
              <CardDescription>Learn ethical hacking using Python</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-yellow-500 animate-pulse">Coming Soon</span>
                </div>
                <Button className="w-full">Register Now</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}