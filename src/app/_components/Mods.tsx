'use client'
import React, { useState } from 'react'

function Mods() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
      document.documentElement.classList.toggle('dark', !darkMode);
    };
  return (
    <button 
    onClick={toggleDarkMode} 
    className="absolute top-4 right-4 max-lg:text-sm p-2 rounded-full bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none"
  >
    {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
  </button>
  )
}

export default Mods
