
"use client";

import { useState, useEffect, useRef } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const calculateTimeLeft = (targetDate: string | null): TimeLeft => {
  if (!targetDate) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: false };
  }

  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    completed: difference <= 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      completed: false,
    };
  }

  return timeLeft;
};

export const useCountdown = (targetDate: string | null) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const updateCountdown = () => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      if (!newTimeLeft.completed) {
        animationFrameId.current = requestAnimationFrame(updateCountdown);
      }
    };

    animationFrameId.current = requestAnimationFrame(updateCountdown);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [targetDate]);

  return timeLeft;
};

export const formatCountdown = (timeLeft: TimeLeft) => {
  if (timeLeft.completed) {
    return "পরীক্ষা হয়ে গেছে";
  }
  if (timeLeft.days > 0) {
    return `${timeLeft.days} দিন বাকি`;
  }
  if (timeLeft.hours > 0) {
    return `${timeLeft.hours} ঘণ্টা বাকি`;
  }
  if (timeLeft.minutes > 0) {
    return `${timeLeft.minutes} মিনিট বাকি`;
  }
  if (timeLeft.seconds > 0) {
    return `কিছুক্ষণ বাকি`;
  }
  return "সময় শেষ";
};

export const getStatusColor = (timeLeft: TimeLeft) => {
  if (timeLeft.completed) {
    return "text-red-500 dark:text-red-400";
  }
  return "";
};
