// components/ProjectCard.js
'use client'
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform  hover:scale-105">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-100 text-gray-800 text-sm rounded-full px-3 py-1">
            {tech}
          </span>
        ))}
      </div>

      {/* View Project Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-800"
      >
        View Project <FaExternalLinkAlt className="ml-2" />
      </a>
    </div>
  );
}
