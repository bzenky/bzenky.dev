import Link from "next/link";

interface RouteLinkProps {
  href: string;
  routeName: string;
}

export function RouteLink({ href, routeName }: RouteLinkProps) {
  return (
    <Link href={href} className="text-sm hover:text-violet-500 hover:bg-slate-700 transition-all p-2 font-bold">
      {routeName}
    </Link>
  )
}