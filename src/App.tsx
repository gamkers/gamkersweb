import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Courses from '@/components/Courses';
import Workshops from '@/components/Workshops';
import Challenges from '@/components/Challenges';
import Community from '@/components/Community';
import Youtube from '@/components/Youtube';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="gamkers-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Courses />
          <Workshops />
          <Challenges />
          <Community />
          <Youtube />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}