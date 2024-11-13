'use client'
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when scrolling below the hero section
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-12 right-4 md:bottom-16 md:right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}
