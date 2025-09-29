"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Newspaper,
  Home,
} from "lucide-react";
import { navItems } from "@/lib/data/navigation";
import HeaderAuth from "./HeaderAuth";
import React, { memo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const icons: { [key: string]: React.ElementType } = {
  Home,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Newspaper,
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
        "relative flex cursor-pointer items-center justify-center rounded-full transition-colors duration-300",
        "h-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        isActive && "bg-accent text-accent-foreground",
        "px-3 font-bengali",
      )}
    >
      <div className="relative z-10 flex items-center">
        <div className="shrink-0">{Icon && <Icon size={20} />}</div>
        <div className={cn("ml-2 hidden sm:block", { "sm:block": isActive })}>
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
          "flex items-center gap-x-1 rounded-full border border-border bg-card/80 backdrop-blur-lg p-1.5 shadow-lg transition-all duration-300 w-full max-w-fit",
        )}
      >
        <Link
          href="/"
          aria-label="হোমপেজে যান"
          className="flex items-center space-x-2 pl-3 pr-2 shrink-0"
        >
          <Image
            src="/logo.svg"
            alt="Study Platform Logo"
            width={28}
            height={25}
            className="h-7 w-7"
          />
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
