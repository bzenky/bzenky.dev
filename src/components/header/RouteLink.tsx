'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface RouteLinkProps {
  href: string;
  routeName: string;
}

export function RouteLink({ href, routeName }: RouteLinkProps) {
  const pathname = usePathname();
  const isActive = `/${routeName.toLowerCase()}` === pathname;
  const isHome = pathname === '/' && routeName === 'HOME';
  const isCurrent = isHome || isActive;

  return (
    <Link 
    href={href} className={`text-sm hover:text-sky-50 hover:bg-slate-700 transition-all p-2 font-bold ${isCurrent && 'underline text-white drop-shadow-xl'} underline-offset-8 decoration-sky-50 decoration-2 hover:drop-shadow-sm`}>
      {routeName}
    </Link>
  )
}