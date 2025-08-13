"use client"

import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { AdvancedProductFilters } from "@/components/advanced-product-filters"
import { FilterProvider, useFilters } from "@/contexts/filter-context"
import { useProductFiltering } from "@/hooks/use-product-filtering"

const accessoriesData = [
  {
    id: "acc-1",
    name: "Logitech MX Master 3S",
    sku: "910-006556",
    image: "/images/logitech-mx-master-mouse.png",
    description: "Advanced wireless mouse with ultra-fast scrolling and app-specific customization",
    category: "accessories",
    brand: "logitech",
    price: 99,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-2",
    name: "Dell USB-C Hub WD19S",
    sku: "WD19S-180W",
    image: "/placeholder.svg?height=300&width=300",
    description: "180W USB-C docking station with dual 4K display support and multiple ports",
    category: "accessories",
    brand: "dell",
    price: 249,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-3",
    name: "Logitech MX Keys",
    sku: "920-009294",
    image: "/placeholder.svg?height=300&width=300",
    description: "Advanced wireless illuminated keyboard with smart backlighting",
    category: "accessories",
    brand: "logitech",
    price: 129,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-4",
    name: "Anker PowerCore 26800",
    sku: "A1277011",
    image: "/placeholder.svg?height=300&width=300",
    description: "High-capacity portable charger with 26800mAh battery and fast charging",
    category: "accessories",
    brand: "anker",
    price: 79,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-5",
    name: "Belkin Thunderbolt 3 Dock",
    sku: "F4U097",
    image: "/placeholder.svg?height=300&width=300",
    description: "Thunderbolt 3 dock with 85W charging and dual 4K display support",
    category: "accessories",
    brand: "belkin",
    price: 299,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-6",
    name: "Jabra Evolve2 65",
    sku: "26599-989-999",
    image: "/placeholder.svg?height=300&width=300",
    description: "Professional wireless headset with active noise cancellation",
    category: "accessories",
    brand: "jabra",
    price: 199,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-7",
    name: "Cable Matters USB-C to HDMI",
    sku: "201355-BLK",
    image: "/placeholder.svg?height=300&width=300",
    description: "USB-C to HDMI 4K adapter cable supporting up to 4K@60Hz resolution",
    category: "accessories",
    brand: "cable matters",
    price: 29,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-8",
    name: "Kensington SD5700T",
    sku: "K33999WW",
    image: "/placeholder.svg?height=300&width=300",
    description: "Thunderbolt 4 docking station with 90W power delivery and dual 4K support",
    category: "accessories",
    brand: "kensington",
    price: 349,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-9",
    name: "Logitech C920s HD Pro",
    sku: "960-001257",
    image: "/placeholder.svg?height=300&width=300",
    description: "Full HD 1080p webcam with privacy shutter and stereo audio",
    category: "accessories",
    brand: "logitech",
    price: 89,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-10",
    name: "SanDisk Extreme Pro USB 3.2",
    sku: "SDCZ880-128G",
    image: "/placeholder.svg?height=300&width=300",
    description: "128GB high-speed USB flash drive with up to 420MB/s read speeds",
    category: "accessories",
    brand: "sandisk",
    price: 49,
    specifications: {
      storage: "128GB",
      graphics: "N/A",
    },
  },
  {
    id: "acc-11",
    name: "Targus Corporate Traveler",
    sku: "CUCT02R15S",
    image: "/placeholder.svg?height=300&width=300",
    description: "15.6-inch laptop backpack with checkpoint-friendly design",
    category: "accessories",
    brand: "targus",
    price: 69,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "acc-12",
    name: "APC Back-UPS Pro 1500",
    sku: "BR1500MS",
    image: "/placeholder.svg?height=300&width=300",
    description: "1500VA UPS battery backup with surge protection and LCD display",
    category: "accessories",
    brand: "apc",
    price: 199,
    specifications: {
      graphics: "N/A",
    },
  },
]

function AccessoriesContent() {
  const { filters, updateFilters } = useFilters()
  const filteredAccessories = useProductFiltering(accessoriesData)

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
              <h1 className="text-3xl font-bold tracking-tight">Computer Accessories</h1>
              <p className="text-muted-foreground">Mice, keyboards, docks, cables, and essential peripherals</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search accessories..."
                  className="w-full pl-8 md:w-[300px]"
                  value={filters.searchQuery}
                  onChange={(e) => updateFilters({ searchQuery: e.target.value })}
                />
              </div>
              <AdvancedProductFilters />
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredAccessories.length} of {accessoriesData.length} accessories
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <AdvancedProductFilters className="sticky top-24" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredAccessories.map((accessory) => (
                  <ProductCard key={accessory.id} product={accessory} />
                ))}
              </div>
              {filteredAccessories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No accessories match your current filters.</p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent"
                    onClick={() =>
                      updateFilters({
                        categories: [],
                        brands: [],
                        specifications: {},
                        priceRange: [0, 5000],
                        searchQuery: "",
                      })
                    }
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

export default function AccessoriesPage() {
  return (
    <FilterProvider>
      <AccessoriesContent />
    </FilterProvider>
  )
}
