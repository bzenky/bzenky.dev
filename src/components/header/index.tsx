'use client';

import { useEffect, useState } from "react";
import { DrawerMenu } from "./DrawerMenu";
import { LinkMenu } from "./LinkMenu";

export function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 720)

    window.addEventListener('resize', () => {
      setIsSmallScreen(window.innerWidth < 720)
    })
  }, [])

  // This removes the glitch of changing components when the window is being defined
  if (!window) return null;

  if (isSmallScreen) return <DrawerMenu />

  return <LinkMenu />
}