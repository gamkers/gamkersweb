import { Instagram, MessageCircle, Youtube } from 'lucide-react';
import { Button } from './ui/button';

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
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <a href="https://gamkers.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Subscribe Now</Button>
            </a>
          </div>

          <div className="flex justify-center md:justify-end space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-6 h-6" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gamkers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}