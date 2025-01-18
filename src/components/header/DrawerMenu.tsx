import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { RouteLink } from "./RouteLink"
import { Menu } from "lucide-react"
import { routes } from "./constants"

export function DrawerMenu() {
  return (
    <Drawer direction="top">
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-2xl">Pages</DrawerTitle>
          <DrawerDescription className="text-lg">Paths you can go into</DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col h-full justify-center items-center gap-4">
          {routes.map((route) => (
            <RouteLink key={route.routeName} href={route.href} routeName={route.routeName} />
          ))}
        </div>

        <DrawerFooter>
          <DrawerClose>
            <span>Close</span>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}