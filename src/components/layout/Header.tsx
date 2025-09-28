
'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Newspaper,
  Home,
} from 'lucide-react';
import { navItems } from '@/lib/data/navigation';
import HeaderAuth from './HeaderAuth';
import React, { memo } from 'react';
import { usePathname } from 'next/navigation';

const icons: { [key: string]: React.ElementType } = {
    Home,
    BookOpen,
    CalendarDays,
    GraduationCap,
    Newspaper
};

interface NavItemProps {
  item: {
    id: string;
    label: string;
    icon: string;
    href: string;
  };
  isActive: boolean;
}

const NavItem = memo(function NavItem({ item, isActive }: NavItemProps) {
  const Icon = icons[item.icon];
  return (
    <Link
      href={item.href}
      aria-label={item.label}
      className={cn(
        'relative flex cursor-pointer items-center justify-center rounded-full transition-colors duration-300',
        'h-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'text-muted-foreground hover:text-accent-foreground',
        isActive && 'text-primary',
        'px-3 font-bengali'
      )}
    >
      <div className="relative z-10 flex items-center">
        <div className="shrink-0">{Icon && <Icon size={20} />}</div>
        <div className={cn("ml-2 hidden sm:block", { "block": isActive })}>
          <span className="whitespace-nowrap text-sm font-medium">
            {item.label}
          </span>
        </div>
      </div>
    </Link>
  );
});


const Header = memo(function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-2 sm:top-4 z-50 w-full flex justify-center px-2 sm:px-0">
        <div
            className={cn(
            'flex items-center gap-x-1 rounded-full border border-border bg-card/80 backdrop-blur-lg p-1.5 shadow-lg transition-all duration-300 w-full max-w-fit'
            )}
        >
            <Link href="/" aria-label="হোমপেজে যান" className="flex items-center space-x-2 pl-3 pr-2 text-primary shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28" zoomAndPan="magnify" viewBox="0 0 192 171.000002" height="24.9375" preserveAspectRatio="xMidYMid meet" version="1.0" className="h-7 w-7"><defs><clipPath id="88c186c220"><path d="M 70.5 59.503906 L 74.226562 59.503906 L 74.226562 65.527344 L 70.5 65.527344 Z M 70.5 59.503906 " clipRule="nonzero"></path></clipPath><clipPath id="7ad24fbbad"><path d="M 0.5 0.503906 L 4.226562 0.503906 L 4.226562 6.527344 L 0.5 6.527344 Z M 0.5 0.503906 " clipRule="nonzero"></path></clipPath><clipPath id="a6440f8e39"><rect x="0" width="5" y="0" height="7"></rect></clipPath><clipPath id="45aa596125"><path d="M 76 1 L 190 1 L 190 120 L 76 120 Z M 76 1 " clipRule="nonzero"></path></clipPath><clipPath id="06345456c5"><path d="M 2.144531 50.269531 L 112.421875 -13.730469 L 189.894531 119.765625 L 79.617188 183.765625 Z M 2.144531 50.269531 " clipRule="nonzero"></path></clipPath><clipPath id="f0c746cdc9"><path d="M 2.144531 50.269531 L 112.421875 -13.730469 L 189.894531 119.765625 L 79.617188 183.765625 Z M 2.144531 50.269531 " clipRule="nonzero"></path></clipPath><clipPath id="e8da47b22c"><path d="M 2 50 L 116 50 L 116 169 L 2 169 Z M 2 50 " clipRule="nonzero"></path></clipPath><clipPath id="09232aead5"><path d="M 2.144531 50.269531 L 112.421875 -13.730469 L 189.894531 119.765625 L 79.617188 183.765625 Z M 2.144531 50.269531 " clipRule="nonzero"></path></clipPath><clipPath id="8f0df3d1af"><path d="M 2.144531 50.269531 L 112.421875 -13.730469 L 189.894531 119.765625 L 79.617188 183.765625 Z M 2.144531 50.269531 " clipRule="nonzero"></path></clipPath></defs><g clipPath="url(#88c186c220)"><g transform="matrix(1, 0, 0, 1, 70, 59)"><g clipPath="url(#a6440f8e39)"><g clipPath="url(#7ad24fbbad)"><path fill="#16c324" d="M 0.5 0.503906 L 4.226562 0.503906 L 4.226562 6.53125 L 0.5 6.53125 Z M 0.5 0.503906 " fillOpacity="1" fillRule="nonzero"></path></g></g></g></g><g clipPath="url(#45aa596125)"><g clipPath="url(#06345456c5)"><g clipPath="url(#f0c746cdc9)"><path fill="#f41212" d="M 149.0625 94.191406 L 76.863281 94.355469 L 91.703125 119.929688 L 189.824219 119.707031 L 121.246094 1.542969 L 101.832031 12.808594 L 149.0625 94.191406 " fillOpacity="1" fillRule="nonzero"></path></g></g></g><g clipPath="url(#e8da47b22c)"><g clipPath="url(#09232aead5)"><g clipPath="url(#8f0df3d1af)"><path fill="#009f0b" d="M 2.144531 50.253906 L 70.722656 168.417969 L 90.140625 157.152344 L 42.910156 75.769531 L 115.109375 75.605469 L 100.265625 50.035156 L 2.144531 50.253906 " fillOpacity="1" fillRule="nonzero"></path></g></g></g></svg>
            </Link>

            <div className="flex-grow flex items-center overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-x-1">
                <div className="h-6 w-px bg-border/50"></div>
                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        item={item}
                        isActive={pathname === item.href}
                    />
                ))}
              </div>
            </div>

             <div className="h-6 w-px bg-border/50"></div>
            
             <HeaderAuth />
        </div>
    </header>
  );
});

export default Header;
