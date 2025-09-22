
'use client';

import React, { useState, useEffect, useRef } from 'react';

const deadlines = [
    {
      title: "🎓 ঢাবি 'ক' ইউনিট পরীক্ষার কাউন্টডাউন",
      date: new Date("2025-02-15T09:00:00")
    },
    {
      title: "💡 আবেদন শুরু",
      date: new Date("2024-11-04T12:00:00")
    },
    {
      title: "🔔 আবেদন শেষ",
      date: new Date("2024-11-25T23:59:59")
    },
    {
      title: "🩺 মেডিকেল ভর্তি পরীক্ষা",
      date: new Date("2025-03-10T10:00:00")
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
          // Filter out past deadlines to find the next upcoming one
          const upcomingDeadlines = deadlines.filter(d => d.date > now);
          if(upcomingDeadlines.length === 0) {
              if (intervalRef.current) clearInterval(intervalRef.current);
              setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00'});
              setIsCompleted(true);
              return;
          }

          // Find the index of the next deadline in the original array
          const nextDeadlineIndex = deadlines.findIndex(d => d.date === upcomingDeadlines[0].date);
          setCurrentIndex(nextDeadlineIndex);
          
          const diff = deadlines[nextDeadlineIndex].date.getTime() - now.getTime();

          if (diff <= 0) {
              setIsCompleted(true);
              // Automatically move to the next timer after a delay
              setTimeout(() => {
                  setIsCompleted(false);
                  const nextIndex = (currentIndex + 1) % deadlines.length;
                  setCurrentIndex(nextIndex);
              }, 3000); // 3 second delay before switching
              
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

      if (intervalRef.current) clearInterval(intervalRef.current);
      update(); // Initial call
      intervalRef.current = setInterval(update, 1000);

      return () => {
          if(intervalRef.current) clearInterval(intervalRef.current);
      };
  }, [currentIndex]);


  if (currentIndex >= deadlines.length) {
      return (
        <div className="text-center font-bold text-lg p-4 bg-card rounded-2xl animate-fadeIn">
            সকল পরীক্ষার সময়সূচী শীঘ্রই আপডেট করা হবে।
        </div>
      );
  }
  
  const currentDeadline = deadlines[currentIndex];

  const TimeCircle = ({ unit, value, max }: { unit: string; value: string, max: number }) => {
      const numValue = parseInt(value, 10);
      const progress = isNaN(numValue) ? 0 : (numValue / max);
      const circumference = 2 * Math.PI * 45; // Corresponds to r="45"
      const offset = circumference - progress * circumference;

      return (
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-muted-foreground/20" strokeWidth="6" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                  <circle className="text-primary transition-all duration-1000 ease-linear"
                      strokeWidth="6"
                      strokeDasharray={circumference}
                      strokeDashoffset={isCompleted ? circumference : offset}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                  />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-xl sm:text-2xl font-bold">{value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{unit}</div>
              </div>
          </div>
      );
  };

  return (
      <div className="text-center p-4 rounded-2xl bg-card">
          <div className="text-lg font-bold mb-3 animate-fadeIn">
              {currentDeadline.title}
              <div className="font-normal text-sm mt-1 text-muted-foreground">
                  {currentDeadline.date.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
          </div>
          {isCompleted ? (
              <div className="text-xl text-red-500 font-bold mt-2.5 animate-fadeInUp">সময় শেষ! পরবর্তী আপডেটের জন্য অপেক্ষা করুন।</div>
          ) : (
              <div className="flex gap-2 sm:gap-4 justify-center flex-nowrap animate-fadeInUp">
                 <TimeCircle unit="দিন" value={timeLeft.days} max={365}/>
                 <TimeCircle unit="ঘন্টা" value={timeLeft.hours} max={24}/>
                 <TimeCircle unit="মিনিট" value={timeLeft.minutes} max={60}/>
                 <TimeCircle unit="সেকেন্ড" value={timeLeft.seconds} max={60}/>
              </div>
          )}
      </div>
  );
};

export default CountdownTimer;
