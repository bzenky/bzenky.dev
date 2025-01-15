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

  if (isSmallScreen) {
    return <DrawerMenu />;
  }

  return <LinkMenu />
}