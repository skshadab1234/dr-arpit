'use client';
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 20);
    };

    // Ensure we are mounted before checking scroll position
    setHasMounted(true);
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Avoid rendering until component has mounted (fixes flash on first paint)
  if (!hasMounted || !isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      aria-label="Scroll to Top"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
