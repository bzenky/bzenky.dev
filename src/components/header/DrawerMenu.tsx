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
          <RouteLink href="/" routeName="Home" style="text-xl" />
          <RouteLink href="/about" routeName="About" style="text-xl" />
          <RouteLink href="/projects" routeName="Projects" style="text-xl" />
          <RouteLink href="/blog" routeName="Blog" style="text-xl" />
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