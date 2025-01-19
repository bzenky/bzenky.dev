'use client';

import { useEffect, useState } from "react";
import { DrawerMenu } from "./DrawerMenu";
import { LinkMenu } from "./LinkMenu";

export function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 720)

    window.addEventListener('resize', () => {
      setIsSmallScreen(window.innerWidth < 720)
    })
  }, [])

  // This removes the glitch of changing components when the window is being defined
  if (typeof(window) === undefined) return null;

  if (isSmallScreen) return <DrawerMenu />

  if (isSmallScreen === false) return <LinkMenu />

  return <div className="p-4"  />;
}