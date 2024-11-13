'use client'
import { useEffect, useState } from 'react';

export default function Hero() {

  const [typing, setTyping] = useState('');
  const text = "Full Stack Developer crafting elegant digital experiences with modern web technologies.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTyping(text.substring(0, index)); // Use substring to avoid concatenation issues
      index++;
      if (index > text.length) clearInterval(interval);
    }, 50); // Adjust speed of typing animation here

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      {/* Adjust the top margin to move the text upwards */}
      <div className="mb-40"> 
        {/* Gradient Text */}
        <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent animate-fadeInUp">
          Dhanuka Rathnayaka
        </h1>

        {/* Typing Animation */}
        <p className="mt-4 text-lg text-foreground animate-fadeInUp delay-500">
          {typing}
        </p>
      </div>
    </div>
  );
}
