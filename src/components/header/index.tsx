import { RouteLink } from "./RouteLink";

const routes = {
  HOME: {
    href: '/',
    routeName: 'HOME',
  },
  ABOUT: {
    href: '/about',
    routeName: 'ABOUT',
  },
  PROJECTS: {
    href: '/projects',
    routeName: 'PROJECTS',
  },
}

export function Header() {
  return (
    <div className="flex items-center justify-items-center gap-16">
      <RouteLink href={routes.HOME.href} routeName={routes.HOME.routeName} />
      <RouteLink href={routes.ABOUT.href} routeName={routes.ABOUT.routeName} />
      <RouteLink href={routes.PROJECTS.href} routeName={routes.PROJECTS.routeName} />
    </div>
  );
}