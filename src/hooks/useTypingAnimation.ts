
import { useState, useEffect } from 'react';

interface UseTypingAnimationProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export const useTypingAnimation = ({
  phrases,
  typingSpeed = 150,
  deletingSpeed = 75,
  delay = 2000,
}: UseTypingAnimationProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[index % phrases.length];

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
        return;
      }
      const timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else {
      if (subIndex === currentPhrase.length) {
        const timeout = setTimeout(() => setIsDeleting(true), delay);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [
    subIndex,
    index,
    isDeleting,
    phrases,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return text;
};
