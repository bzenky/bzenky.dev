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
import { ArrowUp, Menu } from "lucide-react"
import { routes } from "./constants"
import { socialMedias } from "../footer/constants"

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
          <div className="flex gap-8 justify-center items-center mb-4">
            {socialMedias.map((socialMedia) => (
              <a 
                href={socialMedia.url}
                key={socialMedia.name} 
                target="_blank"
                title={socialMedia.name}
              >
                {socialMedia.icon}  
              </a>
            ))}
          </div>

          <DrawerClose>
            <div className="flex items-center justify-end gap-2">
              <span>
                Close
              </span>

              <ArrowUp color="#FFF" />
            </div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}