"use client";
import React, { useEffect, useState } from "react";

function generateStarsCSS(starCount: number) {
  let styles = "";

  for (let i = 0; i < starCount; i++) {
    const top = Math.random() * 100;
    let left;
    if (window.innerWidth <= 768) {
      left = Math.random() < 0.5
        ? Math.floor(Math.random() * 5) + 1
        : Math.floor(Math.random() * 5) + 94;
    } else {
      left = Math.random() < 0.5
        ? Math.floor(Math.random() * 25)
        : Math.ceil(Math.random() * 24) + 75;
    }
    console.log(left);
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
  const [starCount, setStarCount] = useState(50);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setStarCount(25);
    }
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = generateStarsCSS(starCount);
    document.head.appendChild(styleSheet);
  }, [starCount]);

  return (
    <div className="hidden dark:flex">
      {Array.from({ length: starCount }).map((_, index) => (
        <div
          key={index}
          className={`star-${index} star absolute transition-all `}
        ></div>
      ))}
    </div>
  );
}

export default Stars;
