import { RouteLink } from "./RouteLink";
import { motion } from "motion/react"
import { routes } from "./constants";

export function LinkMenu() {
  return (
    <motion.div 
      className="flex items-center justify-center gap-16 overflow-x-auto max-w-full py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4 },
      }}
    >
      {routes.map((route) => (
        <RouteLink key={route.routeName} href={route.href} routeName={route.routeName} />
      ))}
    </motion.div>
  )
}
