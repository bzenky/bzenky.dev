import { RouteLink } from "./RouteLink";
import { routes } from "./constants";

export function LinkMenu() {
  return (
    <div className="flex items-center justify-center gap-16 overflow-x-auto max-w-full">
      {routes.map((route) => (
        <RouteLink key={route.routeName} href={route.href} routeName={route.routeName} />
      ))}
    </div>
  )
}
