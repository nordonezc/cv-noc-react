"use client"

import * as React from "react"
import Link from "next/link"
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <span className="font-bold text-xl tracking-tight">CV-NOC</span>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-2">
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="#about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="#projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="#contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}