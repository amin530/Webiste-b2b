"use client"

import Link from "next/link"
import { ArrowLeft, Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { AdvancedProductFilters } from "@/components/advanced-product-filters"
import { FilterProvider, useFilters } from "@/contexts/filter-context"
import { useProductFiltering } from "@/hooks/use-product-filtering"

const networkingData = [
  {
    id: "net-1",
    name: "Cisco Catalyst 9300-24T",
    sku: "C9300-24T-A",
    image: "/cisco-logo.png",
    description: "24-port Gigabit Ethernet managed switch with advanced security features",
    category: "networking",
    brand: "cisco",
    price: 2499,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-2",
    name: "Ubiquiti UniFi Dream Machine",
    sku: "UDM-US",
    image: "/ubiquiti-unifi-switch.png",
    description: "All-in-one security gateway with built-in controller and 8-port switch",
    category: "networking",
    brand: "ubiquiti",
    price: 379,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-3",
    name: "NETGEAR Nighthawk Pro Gaming XR500",
    sku: "XR500-100NAS",
    image: "/placeholder.svg?height=300&width=300",
    description: "AC2600 dual-band wireless router with gaming acceleration",
    category: "networking",
    brand: "netgear",
    price: 299,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-4",
    name: "Cisco Meraki MR46",
    sku: "MR46-HW",
    image: "/placeholder.svg?height=300&width=300",
    description: "Wi-Fi 6 cloud-managed access point with advanced analytics",
    category: "networking",
    brand: "cisco",
    price: 695,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-5",
    name: "Ubiquiti UniFi Switch 24 PoE",
    sku: "US-24-250W",
    image: "/placeholder.svg?height=300&width=300",
    description: "24-port managed PoE+ switch with 250W total PoE budget",
    category: "networking",
    brand: "ubiquiti",
    price: 399,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-6",
    name: "SonicWall TZ470",
    sku: "02-SSC-5746",
    image: "/placeholder.svg?height=300&width=300",
    description: "Next-generation firewall with advanced threat protection",
    category: "networking",
    brand: "sonicwall",
    price: 449,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-7",
    name: "ASUS AX6000 WiFi 6 Router",
    sku: "RT-AX88U",
    image: "/placeholder.svg?height=300&width=300",
    description: "Dual-band WiFi 6 router with 8 Gigabit LAN ports",
    category: "networking",
    brand: "asus",
    price: 349,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-8",
    name: "Fortinet FortiGate 60F",
    sku: "FG-60F",
    image: "/placeholder.svg?height=300&width=300",
    description: "Next-generation firewall for small to medium businesses",
    category: "networking",
    brand: "fortinet",
    price: 599,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-9",
    name: "Aruba Instant On AP22",
    sku: "R2X01A",
    image: "/placeholder.svg?height=300&width=300",
    description: "Wi-Fi 6 access point designed for small businesses",
    category: "networking",
    brand: "aruba",
    price: 199,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-10",
    name: "NETGEAR ProSAFE 48-Port",
    sku: "GS748T-500NAS",
    image: "/placeholder.svg?height=300&width=300",
    description: "48-port Gigabit smart managed switch with VLAN support",
    category: "networking",
    brand: "netgear",
    price: 899,
    specifications: {
      graphics: "N/A"
    }
  },
]

function NetworkingContent() {
  const { filters, updateFilters } = useFilters()
  const filteredNetworking = useProductFiltering(networkingData)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8 flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/catalog">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to catalog</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Networking Equipment</h1>
              <p className="text-muted-foreground">Enterprise routers, switches, access points, and security appliances</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search networking equipment..."
                  className="w-full pl-8 md:w-[300px]"
                  value={filters.searchQuery}
                  onChange={(e) => updateFilters({ searchQuery: e.target.value })}
                />
              </div>
              <AdvancedProductFilters />
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredNetworking.length} of {networkingData.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <AdvancedProductFilters className="sticky top-24" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredNetworking.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {filteredNetworking.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No networking equipment matches your current filters.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => updateFilters({ 
                      categories: [], 
                      brands: [], 
                      specifications: {},
                      priceRange: [0, 5000],
                      searchQuery: ''
                    })}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function NetworkingPage() {
  return (
    <FilterProvider>
      <NetworkingContent />
    </FilterProvider>
  )
}
