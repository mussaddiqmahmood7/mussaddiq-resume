'use client'
import React, { useEffect } from 'react'
function generateStarsCSS() {
    let styles = '';
  
    for (let i = 0; i < 200; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 99;
      const size = Math.random() * 3 + 2;
      const duration = Math.random() * 5 + 2;
      styles += `
        .star-${i} {
          top: ${top}%;
          left: ${left}%;
          width: ${size}px;
          height: ${size}px;
          animation-duration: ${duration}s;
        }
      `;
    }
  
    return styles;
  }
function Stars() {
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = generateStarsCSS();
        document.head.appendChild(styleSheet);
      }, []);
  return (
    <div className='hidden dark:flex'>
      {Array.from({ length: 200 }).map((_, index) => (
          <div key={index} className={`star-${index} star absolute transition-all `}></div>
        ))}
    </div>
  )
}

export default Stars
