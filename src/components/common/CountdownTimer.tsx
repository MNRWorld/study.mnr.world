
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export interface Deadline {
  title: string;
  date: Date;
}

interface CountdownTimerProps {
  deadlines: Deadline[];
}

const CountdownTimer = ({ deadlines }: CountdownTimerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const upcomingDeadlines = deadlines.filter(d => d.date > new Date());
    if (upcomingDeadlines.length === 0) {
      setIsCompleted(true);
      setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      return;
    }

    const firstUpcomingIndex = deadlines.findIndex(d => d.date === upcomingDeadlines[0].date);
    setCurrentIndex(firstUpcomingIndex);

  }, [deadlines]);


  useEffect(() => {
    if (currentIndex >= deadlines.length) return;

    const update = () => {
      const now = new Date();
      const diff = deadlines[currentIndex].date.getTime() - now.getTime();

      if (diff <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        
        const upcoming = deadlines.filter(d => d.date > now);
        if (upcoming.length > 0) {
          const nextIndex = deadlines.findIndex(d => d.date === upcoming[0].date);
          setCurrentIndex(nextIndex);
        } else {
          setIsCompleted(true);
          setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        }
        return;
      }

      setIsCompleted(false);
      const totalSeconds = Math.floor(diff / 1000);
      setTimeLeft({
        days: String(Math.floor(totalSeconds / (3600 * 24))).padStart(2, '0'),
        hours: String(Math.floor((totalSeconds % (3600 * 24)) / 3600)).padStart(2, '0'),
        minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0'),
        seconds: String(totalSeconds % 60).padStart(2, '0'),
      });
    };

    update();
    intervalRef.current = setInterval(update, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, deadlines]);


  if (isCompleted && currentIndex >= deadlines.length - 1) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center font-bold text-lg p-4 bg-card rounded-2xl"
      >
        সকল পরীক্ষার সময়সূচী শীঘ্রই আপডেট করা হবে।
      </motion.div>
    );
  }

  const currentDeadline = deadlines[currentIndex];

  const TimeCircle = ({ unit, value, max }: { unit: string; value: string, max: number }) => {
    const numValue = parseInt(value, 10);
    const progress = isNaN(numValue) ? 1 : 1 - (numValue / max);
    const circumference = 2 * Math.PI * 45;
    const offset = circumference * progress;

    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle className="text-muted/50 dark:text-muted/20" strokeWidth="6" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
          <motion.circle
            className="text-primary"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isCompleted ? 0 : offset }}
            transition={{ duration: 1, ease: 'linear' }}
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
      <motion.div
        key={currentDeadline.title}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="text-base sm:text-lg font-bold mb-3 text-foreground"
      >
        {currentDeadline.title}
        <div className="font-normal text-xs sm:text-sm mt-1 text-muted-foreground">
          {currentDeadline.date.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </motion.div>
      {isCompleted ? (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl text-destructive font-bold mt-2.5"
        >
          সময় শেষ!
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex gap-2 sm:gap-4 justify-center flex-nowrap"
        >
          <TimeCircle unit="দিন" value={timeLeft.days} max={365} />
          <TimeCircle unit="ঘন্টা" value={timeLeft.hours} max={24} />
          <TimeCircle unit="মিনিট" value={timeLeft.minutes} max={60} />
          <TimeCircle unit="সেকেন্ড" value={timeLeft.seconds} max={60} />
        </motion.div>
      )}
    </div>
  );
};

export default CountdownTimer;
