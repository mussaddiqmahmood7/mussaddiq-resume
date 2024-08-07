import React from 'react';

function Download() {
  return (
    <div className='flex justify-end w-full items-center py-10'>
      <a
        href="/MussaddiqResume.pdf" 
        download="MussaddiqResume.pdf"
        className='px-6 py-3 bg-teal-500 text-white font-bold rounded-md hover:rounded-xl shadow-md hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-800 dark:text-gray-200 transition-all transform hover:scale-105 dark:hover:scale-105'
      >
        Download CV
      </a>
    </div>
  );
}

export default Download;
