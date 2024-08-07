'use client';

import React, { useState, useEffect } from 'react';

function Mods() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 right-4 max-lg:text-sm p-2 rounded-full bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none"
    >
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default Mods;
