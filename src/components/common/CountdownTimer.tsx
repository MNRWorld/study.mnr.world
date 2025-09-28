
'use client';

import React, 'useState', useEffect, useRef } from 'react';
import { admissionDeadlines } from '@/lib/data/deadlines';

const CountdownTimer = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });
  const [isCurrentCompleted, setIsCurrentCompleted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Find the first upcoming deadline on initial load
    const upcomingDeadlines = admissionDeadlines
      .filter(d => d.date > new Date())
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    if (upcomingDeadlines.length > 0) {
      const firstUpcomingIndex = admissionDeadlines.findIndex(d => d.date === upcomingDeadlines[0].date);
      setCurrentIndex(firstUpcomingIndex);
    } else {
      // If no upcoming deadlines, show the last one as completed
      setCurrentIndex(admissionDeadlines.length - 1);
      setIsCurrentCompleted(true);
      setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
    }
  }, []);

  useEffect(() => {
    if (currentIndex < 0) return;

    const updateTimer = () => {
      const now = new Date();
      const difference = admissionDeadlines[currentIndex].date.getTime() - now.getTime();

      if (difference <= 0) {
        setIsCurrentCompleted(true);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        if (intervalRef.current) clearInterval(intervalRef.current);
        
        // Wait for a bit before showing the next timer
        setTimeout(() => {
          const nextUpcomingIndex = admissionDeadlines.findIndex(d => d.date > new Date());
          if (nextUpcomingIndex !== -1) {
            setCurrentIndex(nextUpcomingIndex);
            setIsCurrentCompleted(false);
          } else {
             // To show "All deadlines passed" message, we can set index out of bounds
             setCurrentIndex(admissionDeadlines.length);
          }
        }, 2000); // 2-second delay
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };
    
    if (!isCurrentCompleted) {
        updateTimer();
        intervalRef.current = setInterval(updateTimer, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, isCurrentCompleted]);

  const currentDeadline = currentIndex >= 0 && currentIndex < admissionDeadlines.length 
    ? admissionDeadlines[currentIndex] 
    : null;

  if (currentIndex >= admissionDeadlines.length) {
    return (
      <div
        className="text-center font-bold text-lg p-4 bg-card rounded-2xl"
      >
        সকল ভর্তি পরীক্ষার সময়সীমা শেষ হয়েছে। নতুন সময়সূচী শীঘ্রই যুক্ত করা হবে।
      </div>
    );
  }

  if (!currentDeadline) {
      return null;
  }

  const TimeCircle = ({ unit, value, max }: { unit: string; value: string, max: number }) => {
    const numValue = parseInt(value, 10);
    const progress = isNaN(numValue) ? 1 : 1 - (numValue / max);
    const circumference = 2 * Math.PI * 45;
    const offset = circumference * progress;
    
    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle className="text-muted/50 dark:text-muted/20" strokeWidth="6" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
          <circle
            key={unit === 'সেকেন্ড' ? undefined : value}
            className="text-primary"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            style={{ strokeDashoffset: isCurrentCompleted ? 0 : offset, transition: unit === 'সেকেন্ড' ? 'stroke-dashoffset 1s linear' : 'stroke-dashoffset 0.5s ease-out'}}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-lg sm:text-2xl font-bold text-foreground">{value}</div>
          <div className="text-[10px] sm:text-sm text-muted-foreground">{unit}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="text-center p-2 sm:p-4 rounded-2xl bg-card">
      <div
          className="text-base sm:text-lg font-bold mb-3 text-foreground"
        >
          {currentDeadline.title}
          <div className="font-normal text-xs sm:text-sm mt-1 text-muted-foreground">
            {currentDeadline.date.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      {isCurrentCompleted ? (
        <div
          className="text-xl text-destructive font-bold mt-2.5"
        >
          সময় শেষ!
        </div>
      ) : (
        <div
          className="flex gap-2 sm:gap-4 justify-center flex-nowrap"
        >
          <TimeCircle unit="দিন" value={timeLeft.days} max={365} />
          <TimeCircle unit="ঘন্টা" value={timeLeft.hours} max={24} />
          <TimeCircle unit="মিনিট" value={timeLeft.minutes} max={60} />
          <TimeCircle unit="সেকেন্ড" value={timeLeft.seconds} max={60} />
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
