'use client'

import { SocialMediaLink } from "@/app/_home/SocialMediaLink";
import { useEffect, useState } from "react";
import { socialMedias } from "./constants";

export function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 720)

    window.addEventListener('resize', () => {
      setIsSmallScreen(window.innerWidth < 720)
    })
  }, [])

  if (isSmallScreen) return null;

  return (
    <div className="flex items-center justify-items-center gap-16">
      {socialMedias.map((socialMedia) => (
        <SocialMediaLink key={socialMedia.name} href={socialMedia.url} name={socialMedia.name} />
      ))}
    </div>
  );
}