import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === text.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (currentIndex === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, delay]);

  return (
    <span className="relative">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
