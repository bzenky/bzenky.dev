import Link from "next/link";

interface RouteLinkProps {
  href: string;
  routeName: string;
}

export function RouteLink({ href, routeName }: RouteLinkProps) {
  return (
    <Link href={href} className="text-sm">
      {routeName}
    </Link>
  )
}