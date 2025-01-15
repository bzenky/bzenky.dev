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
  BLOG: {
    href: '/blog',
    routeName: 'BLOG',
  }
}

export function LinkMenu() {
  return (
    <div className="flex items-center justify-center gap-16 overflow-x-auto max-w-full">
      <RouteLink href={routes.HOME.href} routeName={routes.HOME.routeName} />
      <RouteLink href={routes.ABOUT.href} routeName={routes.ABOUT.routeName} />
      <RouteLink href={routes.PROJECTS.href} routeName={routes.PROJECTS.routeName} />
      <RouteLink href={routes.BLOG.href} routeName={routes.BLOG.routeName} />
    </div>
  )
}