import { motion } from 'framer-motion';
import CourseCard from './courses/CourseCard';
import { courses } from '@/data/courses';

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
          <h2 className="text-3xl font-bold mb-4">Courses</h2>
          <p className="text-muted-foreground">Get Two Comprehensive Courses in One Bootcamp</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}