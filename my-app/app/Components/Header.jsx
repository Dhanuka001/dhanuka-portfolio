import React from 'react'
import { LuGithub , LuLinkedin} from "react-icons/lu";
import { FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-8 border-b">
    <div className="flex items-center space-x-4">
      <img src="./profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
      <span className="text-xl font-semibold">DR</span>
      
    </div>
    <div className="flex  space-x-8">
    <a className="text-center items-center justify-center px-3 py-1 rounded-lg hover:bg-gray-100" href='#experience'>Work Experience</a>
      <a className="text-center items-center justify-center px-3 py-1 rounded-lg hover:bg-gray-100" href='#projects'>Projects</a>
      <a className="text-center items-center justify-center px-3 py-1 rounded-lg hover:bg-gray-100" href='#about'>About</a>
      <a className="text-center items-center justify-center px-3 py-1 rounded-lg hover:bg-gray-100" href='#contact'>Contact Me</a>
    </div>
    <div className="flex items-center space-x-4">
      
      <a href="https://github.com/your-github" target="_blank"><LuLinkedin className="w-7 h-7"/></a>
      <a href="https://linkedin.com/in/your-linkedin" target="_blank"><LuGithub className="w-7 h-7"/></a>
      <button className="bg-black text-white px-4 py-2 rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">Sign In</button>
    </div>
  </header>
  )
}
