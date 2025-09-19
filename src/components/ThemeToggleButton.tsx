'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle('dark');
    const newIsDark = htmlEl.classList.contains('dark');
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 w-12 h-12 bg-violet-100 dark:bg-custom-dark-card text-violet-700 dark:text-violet-300 rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-all duration-300 z-50 border border-slate-200 dark:border-slate-700"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
