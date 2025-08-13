import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

export function FeaturedCategories() {
  const categories = [
    {
      name: "Laptops",
      image: "/images/business-laptops.png",
      href: "/catalog/laptops",
      description: "Business laptops, workstations, and accessories",
    },
    {
      name: "Networking",
      image: "/images/networking-equipment-setup.png",
      href: "/catalog/networking",
      description: "Routers, switches, and networking equipment",
    },
    {
      name: "Accessories",
      image: "/images/computer-accessories-flatlay.png",
      href: "/catalog/accessories",
      description: "Cables, adapters, and peripherals",
    },
    {
      name: "Gaming",
      image: "/images/gaming-setup.png",
      href: "/catalog/gaming",
      description: "Gaming PCs, consoles, and accessories",
    },
    {
      name: "Servers",
      image: "/images/server-rack.png",
      href: "/catalog/servers",
      description: "Enterprise servers and storage solutions",
    },
    {
      name: "Displays",
      image: "/images/computer-monitors.png",
      href: "/catalog/displays",
      description: "Monitors, digital signage, and projectors",
    },
  ]

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link key={category.name} href={category.href}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video relative">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
