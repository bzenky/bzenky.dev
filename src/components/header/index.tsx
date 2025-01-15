'use client';

import { DrawerMenu } from "./DrawerMenu";
import { LinkMenu } from "./LinkMenu";



export function Header() {
  const isSmallScreen = window.innerWidth < 720;

  if (isSmallScreen) {
    return <DrawerMenu />;
  }

  return <LinkMenu />
}