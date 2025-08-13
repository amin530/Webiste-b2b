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

const gamingData = [
  {
    id: "gaming-1",
    name: "ASUS ROG Strix G15",
    sku: "G513QM-HN064T",
    image: "/images/asus-gaming-pc.png",
    description: "15.6-inch gaming laptop with AMD Ryzen 7 5800H, RTX 3060, 16GB RAM, 512GB SSD",
    category: "gaming",
    brand: "asus",
    price: 1299,
    specifications: {
      ram: "16GB",
      storage: "512GB",
      processor: "AMD Ryzen 7",
      graphics: "RTX 3060",
    },
  },
  {
    id: "gaming-2",
    name: "Alienware Aurora R13",
    sku: "AWR13-7713BLK-PUS",
    image: "/placeholder.svg?height=300&width=300",
    description: "Gaming desktop with Intel Core i7-12700F, RTX 3070, 16GB RAM, 512GB SSD",
    category: "gaming",
    brand: "dell",
    price: 1899,
    specifications: {
      ram: "16GB",
      storage: "512GB",
      processor: "Intel Core i7",
      graphics: "RTX 3070",
    },
  },
  {
    id: "gaming-3",
    name: "Razer DeathAdder V3",
    sku: "RZ01-04910100-R3U1",
    image: "/placeholder.svg?height=300&width=300",
    description: "Ergonomic gaming mouse with Focus Pro 30K sensor and 90-hour battery",
    category: "gaming",
    brand: "razer",
    price: 99,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "gaming-4",
    name: "Corsair K95 RGB Platinum",
    sku: "CH-9127014-NA",
    image: "/placeholder.svg?height=300&width=300",
    description: "Mechanical gaming keyboard with Cherry MX switches and RGB backlighting",
    category: "gaming",
    brand: "corsair",
    price: 199,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "gaming-5",
    name: "NVIDIA GeForce RTX 4080",
    sku: "RTX4080-16GB",
    image: "/placeholder.svg?height=300&width=300",
    description: "High-performance graphics card with 16GB GDDR6X memory",
    category: "gaming",
    brand: "nvidia",
    price: 1199,
    specifications: {
      graphics: "RTX 4080",
    },
  },
  {
    id: "gaming-6",
    name: "SteelSeries Arctis 7P",
    sku: "61463",
    image: "/placeholder.svg?height=300&width=300",
    description: "Wireless gaming headset with lossless 2.4GHz connection",
    category: "gaming",
    brand: "steelseries",
    price: 149,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "gaming-7",
    name: "ASUS ROG Swift PG279QM",
    sku: "PG279QM",
    image: "/placeholder.svg?height=300&width=300",
    description: "27-inch 1440p gaming monitor with 240Hz refresh rate and G-SYNC",
    category: "gaming",
    brand: "asus",
    price: 699,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "gaming-8",
    name: "Xbox Series X",
    sku: "RRT-00001",
    image: "/placeholder.svg?height=300&width=300",
    description: "Next-generation gaming console with 4K gaming and ray tracing",
    category: "gaming",
    brand: "microsoft",
    price: 499,
    specifications: {
      storage: "1TB",
      graphics: "Custom RDNA 2",
    },
  },
  {
    id: "gaming-9",
    name: "PlayStation 5",
    sku: "CFI-1215A01X",
    image: "/placeholder.svg?height=300&width=300",
    description: "Next-gen gaming console with ultra-high speed SSD and ray tracing",
    category: "gaming",
    brand: "sony",
    price: 499,
    specifications: {
      storage: "825GB",
      graphics: "Custom RDNA 2",
    },
  },
  {
    id: "gaming-10",
    name: "Logitech G Pro X Superlight",
    sku: "910-005878",
    image: "/placeholder.svg?height=300&width=300",
    description: "Ultra-lightweight wireless gaming mouse weighing less than 63 grams",
    category: "gaming",
    brand: "logitech",
    price: 149,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "gaming-11",
    name: "HyperX Cloud II",
    sku: "KHX-HSCP-RD",
    image: "/placeholder.svg?height=300&width=300",
    description: "Gaming headset with virtual 7.1 surround sound and noise cancellation",
    category: "gaming",
    brand: "hyperx",
    price: 99,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "gaming-12",
    name: "AMD Radeon RX 7800 XT",
    sku: "RX-7800XT-16GB",
    image: "/placeholder.svg?height=300&width=300",
    description: "High-performance graphics card with 16GB GDDR6 memory for 1440p gaming",
    category: "gaming",
    brand: "amd",
    price: 899,
    specifications: {
      graphics: "RX 7800 XT",
    },
  },
]

function GamingContent() {
  const { filters, updateFilters } = useFilters()
  const filteredGaming = useProductFiltering(gamingData)

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
              <h1 className="text-3xl font-bold tracking-tight">Gaming Hardware</h1>
              <p className="text-muted-foreground">Gaming laptops, desktops, consoles, and peripherals</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search gaming products..."
                  className="w-full pl-8 md:w-[300px]"
                  value={filters.searchQuery}
                  onChange={(e) => updateFilters({ searchQuery: e.target.value })}
                />
              </div>
              <AdvancedProductFilters />
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredGaming.length} of {gamingData.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <AdvancedProductFilters className="sticky top-24" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredGaming.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {filteredGaming.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No gaming products match your current filters.</p>
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

export default function GamingPage() {
  return (
    <FilterProvider>
      <GamingContent />
    </FilterProvider>
  )
}
