'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  text: string[];
}

const LETTER_DELAY = 0.050;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 4;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 4500; // 4.5 seconds

export function TypewriterText({ text }: TypeWriterProps) {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % text.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl space-y-6">
      <p className="text-lg mt-8 mb-4 text-slate-300 font-semibold">
        {text[textIndex].split("").map((letter, index) => (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ 
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${textIndex}-${index}`}
            className="relative"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.1, 
                delay: index * LETTER_DELAY,
              }}
            >
              {letter}
            </motion.span>

            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION, 
                delay: index * LETTER_DELAY,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-sky-100/90" 
            />
          </motion.span>
        ))}
      </p>
    </div>
  ) 
}