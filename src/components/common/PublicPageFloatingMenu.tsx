"use client";

import { Button } from "@/components/ui/button";
import {
  Menu,
  Blocks,
  University,
  Leaf,
  Cog,
  Atom,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PublicPageFloatingMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const linkClasses =
    "block p-2 text-foreground hover:bg-accent rounded-md transition-colors";

  const menuItems = [
    { href: "#cluster-system", label: "গুচ্ছ", Icon: Blocks },
    { href: "#general", label: "সাধারণ", Icon: University },
    { href: "#agriculture", label: "কৃষি", Icon: Leaf },
    { href: "#engineering", label: "প্রকৌশল", Icon: Cog },
    {
      href: "#science-and-technology",
      label: "বিজ্ঞান ও প্রযুক্তি",
      Icon: Atom,
    },
    { href: "#medical", label: "মেডিকেল", Icon: HeartPulse },
    { href: "#special", label: "বিশেষ", Icon: Sparkles },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        ref={menuRef}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50"
      >
        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-primary text-primary-foreground rounded-l-full rounded-r-none px-4 py-3 text-lg hover:bg-primary hover:text-primary-foreground"
        >
          <Menu />
        </Button>
        <div
          className={cn(
            "absolute right-full top-1/2 -translate-y-1/2 w-64 bg-card border border-border rounded-lg shadow-lg p-2.5 transition-all duration-300 ease-in-out",
            menuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4 pointer-events-none",
          )}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                linkClasses,
                "transition-transform duration-200 ease-in-out flex items-center font-bengali",
              )}
              style={{
                transitionDelay: `${index * 30}ms`,
                transform: menuOpen ? "translateX(0)" : "translateX(20px)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <item.Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PublicPageFloatingMenu;
