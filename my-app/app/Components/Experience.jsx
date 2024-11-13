// components/Experience.js
'use client'
import { useEffect, useState } from 'react';

export default function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch('http://localhost:5000/experience');
        const data = await response.json();
        setExperience(data);
      } catch (error) {
        console.error("Error fetching experience:", error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-black mb-12">Experience</h2>
      <div className="relative">
        {/* Timeline Vertical Line */}
        <div className="absolute left-7 top-0 w-0.5 h-full bg-gray-200"></div>

        <div className="space-y-12 pl-16">
          {experience.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-11 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600"></div>

              {/* Experience Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <p className="text-blue-600 font-semibold">{item.yearRange}</p>
                <h3 className="text-xl font-bold text-black mt-1">{item.position}</h3>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
                <p className="text-sm font-medium text-purple-600 bg-purple-100 px-5 w-80 rounded-xl py-1 mt-2">Company: {item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
