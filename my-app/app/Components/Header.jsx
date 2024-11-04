import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
    <div className="flex items-center space-x-4">
      <img src="/path/to/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
      <span className="text-xl font-bold">DR</span>
    </div>
    <div className="flex items-center space-x-4">
      <a href="https://github.com/your-github" target="_blank"><FaLinkedin className="w-7 h-7"/></a>
      <a href="https://linkedin.com/in/your-linkedin" target="_blank"><FaGithub className="w-7 h-7"/></a>
      <button className="bg-black text-white px-4 py-2 rounded font-semibold">Sign In</button>
    </div>
  </header>
  )
}
