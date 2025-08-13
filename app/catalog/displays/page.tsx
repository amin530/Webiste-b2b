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

const displaysData = [
  {
    id: "display-1",
    name: 'Samsung Odyssey G7 32"',
    sku: "LC32G75TQSNXZA",
    image: "/images/samsung-curved-monitor.png",
    description: "32-inch curved gaming monitor with 240Hz refresh rate and 1ms response time",
    category: "displays",
    brand: "samsung",
    price: 699,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "display-2",
    name: "Dell UltraSharp U2723QE",
    sku: "210-BDPH",
    image: "/images/computer-monitors.png",
    description: "27-inch 4K USB-C hub monitor with 99% sRGB color coverage",
    category: "displays",
    brand: "dell",
    price: 549,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "display-3",
    name: "LG UltraWide 34WP65C-B",
    sku: "34WP65C-B",
    image: "/placeholder.svg?height=300&width=300",
    description: "34-inch curved ultrawide monitor with USB-C connectivity",
    category: "displays",
    brand: "lg",
    price: 399,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "display-4",
    name: "ASUS ProArt PA278QV",
    sku: "PA278QV",
    image: "/placeholder.svg?height=300&width=300",
    description: "27-inch professional monitor with 100% sRGB and Rec. 709 color spaces",
    category: "displays",
    brand: "asus",
    price: 329,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "display-5",
    name: "HP E24 G5",
    sku: "45D44AA#ABA",
    image: "/placeholder.svg?height=300&width=300",
    description: "24-inch business monitor with adjustable stand and multiple ports",
    category: "displays",
    brand: "hp",
    price: 199,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "display-6",
    name: "BenQ PD3220U",
    sku: "PD3220U",
    image: "/placeholder.svg?height=300&width=300",
    description: "32-inch 4K designer monitor with Thunderbolt 3 and KVM switch",
    category: "displays",
    brand: "benq",
    price: 1099,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "display-7",
    name: "Acer Predator X27",
    sku: "UM.HX1AA.002",
    image: "/placeholder.svg?height=300&width=300",
    description: "27-inch 4K gaming monitor with G-SYNC Ultimate and HDR1000",
    category: "displays",
    brand: "acer",
    price: 1799,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "display-8",
    name: "MSI Optix MAG274QRF-QD",
    sku: "OPTIX MAG274QRF-QD",
    image: "/placeholder.svg?height=300&width=300",
    description: "27-inch 1440p gaming monitor with 165Hz refresh rate and Quantum Dot",
    category: "displays",
    brand: "msi",
    price: 449,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "display-9",
    name: "ViewSonic VP2468",
    sku: "VP2468",
    image: "/placeholder.svg?height=300&width=300",
    description: "24-inch professional monitor with hardware calibration and pivot function",
    category: "displays",
    brand: "viewsonic",
    price: 299,
    specifications: {
      graphics: "N/A",
    },
  },
  {
    id: "display-10",
    name: "Alienware AW3423DWF",
    sku: "AW3423DWF",
    image: "/placeholder.svg?height=300&width=300",
    description: "34-inch curved OLED gaming monitor with 165Hz and 0.1ms response time",
    category: "displays",
    brand: "dell",
    price: 1099,
    specifications: {
      graphics: "N/A",
    },
  },
]

function DisplaysContent() {
  const { filters, updateFilters } = useFilters()
  const filteredDisplays = useProductFiltering(displaysData)

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
              <h1 className="text-3xl font-bold tracking-tight">Professional Displays</h1>
              <p className="text-muted-foreground">Business monitors, gaming displays, and professional screens</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search displays..."
                  className="w-full pl-8 md:w-[300px]"
                  value={filters.searchQuery}
                  onChange={(e) => updateFilters({ searchQuery: e.target.value })}
                />
              </div>
              <AdvancedProductFilters />
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredDisplays.length} of {displaysData.length} displays
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <AdvancedProductFilters className="sticky top-24" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredDisplays.map((display) => (
                  <ProductCard key={display.id} product={display} />
                ))}
              </div>
              {filteredDisplays.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No displays match your current filters.</p>
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

export default function DisplaysPage() {
  return (
    <FilterProvider>
      <DisplaysContent />
    </FilterProvider>
  )
}
