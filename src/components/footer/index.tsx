'use client'

import { SocialMediaLink } from "@/app/_home/SocialMediaLink";
import { useEffect, useState } from "react";
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
    <div className="flex items-center justify-items-center gap-16">
      {socialMedias.map((socialMedia) => (
        <SocialMediaLink key={socialMedia.name} href={socialMedia.url} name={socialMedia.name} />
      ))}
    </div>
  );
}