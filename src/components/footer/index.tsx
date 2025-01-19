'use client'

import { SocialMediaLink } from "@/app/_home/SocialMediaLink";
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import { socialMedias } from "./constants";

export function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 720)

    window.addEventListener('resize', () => {
      setIsSmallScreen(window.innerWidth < 720)
    })
  }, [])

  // This removes the glitch of changing components when the window is being defined
  if (typeof(window) === undefined || isSmallScreen) return null; 

  if (isSmallScreen === false) return (
    <motion.div 
      className="flex items-center justify-items-center gap-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4 },
      }}  
    >
      {socialMedias.map((socialMedia) => (
        <SocialMediaLink key={socialMedia.name} href={socialMedia.url} name={socialMedia.name} />
      ))}
    </motion.div>
  );
}