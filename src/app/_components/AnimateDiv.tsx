"use client";
import { useEffect, useState } from "react";

const AnimatedDiv = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [scrollPositionX, setScrollPositionX] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = documentHeight - viewportHeight;

      const scrollPercentage = (scrollTop / scrollableHeight) * 100;
  
      if (scrollPercentage < 33) {
        setScrollPositionX(scrollPercentage * 3.3);
      } else if (scrollPercentage < 67) {
        setScrollPositionX(100 - (scrollPercentage - 33) * 3.3);
      } else {
        setScrollPositionX((scrollPercentage - 66) * 2.7);
      }

      if (scrollPercentage < 67) {
        setScrollPositionY(scrollPercentage);
      } else {
        setScrollPositionY(scrollPercentage - 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="animation"
      className="rounded-full size-8 md:size-20 bg-yellow-500 hidden dark:flex dark:bg-white z-0 transition-transform duration-500 absolute  blur-xl md:blur-3xl "
      style={{ top: scrollPositionY + "%", left: scrollPositionX + "%" }}
    ></div>
  );
};
// transform: `translateX(${scrollPositionX}px) translateY(${scrollPositionY}px)`

export default AnimatedDiv;
