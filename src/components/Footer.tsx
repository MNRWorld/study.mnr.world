import Link from 'next/link';
import { StudyLogo } from '@/components/icons/StudyLogo';
import { footerLinks, footerShortcuts, socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5 text-center md:text-left">
          <Link
            href="#"
            className="logo flex items-center gap-3 justify-center md:justify-start w-fit mx-auto md:mx-0"
          >
            <StudyLogo />
            <div>
              <span className="text-2xl font-bold">Study</span>
              <p className="text-xs text-muted-foreground -mt-1">
                Your Study Partner
              </p>
            </div>
          </Link>
          <p className="text-muted-foreground mt-4 max-w-xs mx-auto md:mx-0">
            A modern learning platform to help you achieve your academic goals.
          </p>
          <div className="flex gap-4 mt-5 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-3">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Shortcuts</h3>
          <ul className="space-y-3">
            {footerShortcuts.map((link, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Join Us</h3>
          <p className="text-muted-foreground mb-4">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form className="flex gap-2">
            <Input type="email" placeholder="Your Email" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="text-center text-muted-foreground mt-12 pt-8 border-t border-border/50">
        <p>&copy; {new Date().getFullYear()} Study. All rights reserved.</p>
      </div>
    </footer>
  );
}
