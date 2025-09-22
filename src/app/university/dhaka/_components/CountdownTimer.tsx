'use client';

import React, { useState, useEffect, useRef } from 'react';

const deadlines = [
    {
      title: "🎓 Exam Countdown",
      date: new Date("2025-05-20T23:27:00")
    },
    {
      title: "আবেদন শুরু",
      date: new Date("2026-12-31T23:59:59")
    },
    {
      title: "🇧🇩 National Day",
      date: new Date("2025-08-15T12:00:00")
    }
  ];

const CountdownTimer = () => {
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
      if (currentIndex >= deadlines.length) {
          return;
      }

      const update = () => {
          const now = new Date();
          const diff = deadlines[currentIndex].date.getTime() - now.getTime();

          if (diff <= 0) {
              setIsCompleted(true);
              if (intervalRef.current) clearInterval(intervalRef.current);
              
              // Automatically move to the next timer after a delay
              setTimeout(() => {
                  setIsCompleted(false);
                  if (currentIndex < deadlines.length - 1) {
                      setCurrentIndex(currentIndex + 1);
                  } else {
                      // Last timer finished, maybe do nothing or loop
                  }
              }, 2000); // 2 second delay before switching
              
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
          if(intervalRef.current) clearInterval(intervalRef.current);
      };
  }, [currentIndex]);


  if (currentIndex >= deadlines.length) {
      return <div className="text-center font-bold text-lg">All timers finished.</div>;
  }
  
  const currentDeadline = deadlines[currentIndex];

  const TimeCircle = ({ unit, value, max }: { unit: string; value: string, max: number }) => {
      const numValue = parseInt(value, 10);
      const progress = isNaN(numValue) ? 0 : (numValue / max);
      const circumference = 2 * Math.PI * 45;
      const offset = circumference - progress * circumference;

      return (
          <div className="relative w-[110px] h-[110px] sm:w-[65px] sm:h-[65px] shrink-0">
              <svg className="transform -scale-x-100" viewBox="0 0 100 100">
                  <circle className="text-muted-foreground/20" strokeWidth="6" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                  <circle className="text-primary"
                      strokeWidth="6"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                      style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
                  />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl sm:text-lg font-bold">{value}</div>
                  <div className="text-xs sm:text-[10px] text-muted-foreground">{unit}</div>
              </div>
          </div>
      );
  };

  return (
      <div className="text-center p-5 m-2.5 rounded-2xl bg-card">
          <div className="text-lg font-bold mb-3">
              {currentDeadline.title}
              <div className="font-normal text-sm mt-1 text-muted-foreground">
                  {currentDeadline.date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
          </div>
          {isCompleted ? (
              <div className="text-xl text-red-500 font-bold mt-2.5">সময় শেষ</div>
          ) : (
              <div className="flex gap-3 sm:gap-2 justify-center flex-nowrap">
                 <TimeCircle unit="Days" value={timeLeft.days} max={365}/>
                 <TimeCircle unit="Hours" value={timeLeft.hours} max={24}/>
                 <TimeCircle unit="Minutes" value={timeLeft.minutes} max={60}/>
                 <TimeCircle unit="Seconds" value={timeLeft.seconds} max={60}/>
              </div>
          )}
      </div>
  );
};

export default CountdownTimer;
