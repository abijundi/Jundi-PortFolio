"use client"
import Pattern1 from "../icons/pattern1.svg";
import Pattern2 from "../icons/pattern2.svg";
import { useState, useEffect } from 'react';
import { motion } from "motion/react";

export default function BgAnimation(){

  const [scale, setScale] = useState(7);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      const rawScale = vw / 100; // contoh: basis skala = 1vw
      const clamped = Math.min(Math.max(rawScale, 5), 10); // clamp(5, raw, 10)
      setScale(clamped);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return(
      <div className="absolute w-full h-full overflow-hidden shadow-lg">
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,_rgba(26,26,25,1)_2%,_transparent_20%,_transparent_85%,_rgba(133,159,61,1)_100%)]"></div>  
      <motion.svg
        initial={{x: -150,
                  y: -150,
          }}
        animate={{x: -18,
                  y: -18,
          }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          duration: 2,
          }}
          style={{ overflow: "visible" }}
        className="absolute inset-0 z-0"
      >
        <g transform={`scale(${scale})`}>
          <Pattern1/>
        </g>
      </motion.svg>
    </div>
  )
}