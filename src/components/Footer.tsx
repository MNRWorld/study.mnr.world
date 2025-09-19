import Link from 'next/link';
import { StudyLogo } from './icons/StudyLogo';
import { footerLinks, footerShortcuts, socialLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-16">
      <div className="container max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center md:text-left">
          <div className="logo flex items-center gap-3 justify-center md:justify-start">
            <StudyLogo />
            <div>
              <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Study
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                Your Study Partner
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-5 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xl transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="footer-heading font-bangla text-xl font-semibold mb-5 relative pb-2">
            লিঙ্কস
          </h3>
          <ul className="space-y-3 font-bangla">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="flex items-center justify-center md:justify-start gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="footer-heading font-bangla text-xl font-semibold mb-5 relative pb-2">
            শর্টকাট
          </h3>
          <ul className="space-y-3 font-bangla">
            {footerShortcuts.map((link, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="flex items-center justify-center md:justify-start gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
