import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from './theme-provider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#courses', label: 'Courses' },
    { href: '#workshops', label: 'Workshops' },
    { href: '#challenges', label: 'Challenges' },
    { href: '#community', label: 'Community' },
    { href: '#newsletter', label: 'Subscribe' },
  ];

  // Update active section based on scroll position
  const handleScroll = () => {
    const sections = navLinks.map(link => link.href.substring(1));
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  // Add scroll event listener
  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, );

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Gamkers
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-muted-foreground hover:text-primary transition-colors",
                  activeSection === link.href.substring(1) && "text-primary font-semibold"
                )}
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => window.location.href = '#community'}>Join Now</Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden',
          'transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2 text-muted-foreground hover:text-primary transition-colors",
                activeSection === link.href.substring(1) && "text-primary font-semibold"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            className="w-full mt-4"
            onClick={() => {
              window.location.href = '#community';
              setIsOpen(false);
            }}
          >
            Join Now
          </Button>
        </div>
      </div>
    </nav>
  );
}