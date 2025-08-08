"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search, X } from 'lucide-react'
import { AuthNav } from "@/components/auth-nav"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex items-center">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="mr-2 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <div className="px-7">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-bold text-xl">TechWholesale</span>
            </Link>
          </div>
          <div className="mt-6 px-2">
            <div className="relative mb-4 px-5">
              <Search className="absolute left-7 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-full"
              />
            </div>
            <div className="flex flex-col space-y-3 px-5">
              <Link
                href="/catalog"
                className="font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/catalog/laptops"
                className="font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Laptops
              </Link>
              <Link
                href="/catalog/accessories"
                className="font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Accessories
              </Link>
              <Link
                href="/catalog/networking"
                className="font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Networking
              </Link>
              <Link
                href="/catalog/gaming"
                className="font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Gaming
              </Link>
              <Link
                href="/partner"
                className="font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Become a Partner
              </Link>
              <Link
                href="/terms"
                className="font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Credit Terms
              </Link>
              <Link
                href="/contact"
                className="font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">Sidq</span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-100 to-slate-200 p-6 no-underline outline-none focus:shadow-md"
                      href="/catalog"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Browse All Products
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Explore our complete catalog of wholesale electronics products.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/catalog/laptops" title="Laptops">
                  Business laptops, workstations, and accessories
                </ListItem>
                <ListItem href="/catalog/networking" title="Networking">
                  Routers, switches, and networking equipment
                </ListItem>
                <ListItem href="/catalog/accessories" title="Accessories">
                  Cables, adapters, and peripherals
                </ListItem>
                <ListItem href="/catalog/gaming" title="Gaming">
                  Gaming PCs, consoles, and accessories
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/partner" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Become a Partner
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/terms" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Credit Terms
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <AuthNav />
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
