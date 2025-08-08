"use client"

import Link from "next/link"
import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { AdvancedProductFilters } from "@/components/advanced-product-filters"
import { FilterProvider, useFilters } from "@/contexts/filter-context"
import { useProductFiltering } from "@/hooks/use-product-filtering"

const allProducts = [
  // Laptops
  {
    id: "laptop-1",
    name: "Dell XPS 13 9320",
    sku: "DXPS13-9320",
    image: "/dell-xps-laptop.png",
    description: "13-inch business laptop with Intel Core i7-1260P, 16GB RAM, 512GB SSD, Windows 11 Pro",
    category: "laptops",
    brand: "dell",
    price: 1299,
    specifications: {
      ram: "16GB",
      storage: "512GB",
      processor: "Intel Core i7",
      graphics: "Integrated"
    }
  },
  {
    id: "laptop-2",
    name: "HP EliteBook 840 G9",
    sku: "EB840-G9",
    image: "/placeholder-1ma0o.png",
    description: "14-inch business laptop with Intel Core i5-1235U, 8GB RAM, 256GB SSD, Windows 11 Pro",
    category: "laptops",
    brand: "hp",
    price: 999,
    specifications: {
      ram: "8GB",
      storage: "256GB",
      processor: "Intel Core i5",
      graphics: "Integrated"
    }
  },
  {
    id: "laptop-3",
    name: "Apple MacBook Pro 14-inch",
    sku: "MBP14-M2",
    image: "/apple-macbook-pro.png",
    description: "14-inch MacBook Pro with M2 Pro chip, 16GB unified memory, 512GB SSD storage",
    category: "laptops",
    brand: "apple",
    price: 1999,
    specifications: {
      ram: "16GB",
      storage: "512GB",
      processor: "Apple M2",
      graphics: "Integrated"
    }
  },
  {
    id: "laptop-4",
    name: "Lenovo ThinkPad X1 Carbon",
    sku: "TP-X1C-G10",
    image: "/placeholder.svg?height=300&width=300",
    description: "14-inch ultrabook with Intel Core i7-1255U, 16GB RAM, 1TB SSD, Windows 11 Pro",
    category: "laptops",
    brand: "lenovo",
    price: 1599,
    specifications: {
      ram: "16GB",
      storage: "1TB",
      processor: "Intel Core i7",
      graphics: "Integrated"
    }
  },
  {
    id: "laptop-5",
    name: "ASUS ZenBook Pro 15",
    sku: "ZB-PRO15",
    image: "/placeholder.svg?height=300&width=300",
    description: "15.6-inch creative laptop with Intel Core i7-12700H, 32GB RAM, 1TB SSD, RTX 3050 Ti",
    category: "laptops",
    brand: "asus",
    price: 1799,
    specifications: {
      ram: "32GB",
      storage: "1TB",
      processor: "Intel Core i7",
      graphics: "RTX 3050"
    }
  },

  // Accessories
  {
    id: "acc-1",
    name: "Logitech MX Master 3S",
    sku: "910-006556",
    image: "/logitech-mx-master-mouse.png",
    description: "Advanced wireless mouse with ultra-fast scrolling and app-specific customization",
    category: "accessories",
    brand: "logitech",
    price: 99,
    specifications: {
      graphics: "N/A"
    }
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
      graphics: "N/A"
    }
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
      graphics: "N/A"
    }
  },

  // Networking
  {
    id: "net-1",
    name: "Cisco Meraki MR46",
    sku: "MR46-HW",
    image: "/placeholder-x05bk.png",
    description: "Cloud-managed Wi-Fi 6 access point with 2.5 Gbps Ethernet and advanced security",
    category: "networking",
    brand: "cisco",
    price: 695,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-2",
    name: "Ubiquiti UniFi Switch 24 PoE",
    sku: "USW-24-POE",
    image: "/ubiquiti-unifi-switch.png",
    description: "24-port managed Gigabit switch with 16 PoE+ ports and 2 SFP+ uplinks",
    category: "networking",
    brand: "ubiquiti",
    price: 399,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "net-3",
    name: "NETGEAR Nighthawk Pro Gaming",
    sku: "XR1000-100NAS",
    image: "/placeholder.svg?height=300&width=300",
    description: "AX5400 Wi-Fi 6 router with gaming accelerator and advanced QoS",
    category: "networking",
    brand: "netgear",
    price: 299,
    specifications: {
      graphics: "N/A"
    }
  },

  // Gaming
  {
    id: "gaming-1",
    name: "ASUS ROG Strix G15",
    sku: "G513QM-HN064",
    image: "/asus-gaming-pc.png",
    description: "15.6-inch gaming laptop with AMD Ryzen 7 5800H, RTX 3060, 16GB RAM, 1TB SSD",
    category: "gaming",
    brand: "asus",
    price: 1299,
    specifications: {
      ram: "16GB",
      storage: "1TB",
      processor: "AMD Ryzen 7",
      graphics: "RTX 3060"
    }
  },
  {
    id: "gaming-2",
    name: "Razer DeathAdder V3",
    sku: "RZ01-04910100",
    image: "/placeholder.svg?height=300&width=300",
    description: "Ergonomic gaming mouse with Focus Pro 30K sensor and 90-hour battery",
    category: "gaming",
    brand: "razer",
    price: 99,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "gaming-3",
    name: "Xbox Series X",
    sku: "RRT-00001",
    image: "/placeholder.svg?height=300&width=300",
    description: "Next-generation gaming console with 4K gaming and Quick Resume",
    category: "gaming",
    brand: "microsoft",
    price: 499,
    specifications: {
      storage: "1TB",
      graphics: "Custom RDNA 2"
    }
  },

  // Servers
  {
    id: "server-1",
    name: "Dell PowerEdge R750",
    sku: "PE-R750-S1",
    image: "/dell-poweredge-server.png",
    description: "2U rack server with dual Intel Xeon Scalable processors, up to 8TB memory",
    category: "servers",
    brand: "dell",
    price: 3499,
    specifications: {
      ram: "32GB",
      storage: "2TB",
      processor: "Intel Xeon",
      graphics: "Integrated"
    }
  },
  {
    id: "server-2",
    name: "HPE ProLiant DL380 Gen10",
    sku: "P40425-B21",
    image: "/placeholder.svg?height=300&width=300",
    description: "2U rack server with Intel Xeon Scalable processors and advanced security",
    category: "servers",
    brand: "hpe",
    price: 2999,
    specifications: {
      ram: "16GB",
      storage: "1TB",
      processor: "Intel Xeon",
      graphics: "Integrated"
    }
  },

  // Displays
  {
    id: "display-1",
    name: "Samsung 34\" Curved Monitor",
    sku: "LC34J791WTNXZA",
    image: "/samsung-curved-monitor.png",
    description: "34-inch ultrawide curved monitor with USB-C connectivity and Thunderbolt 3",
    category: "displays",
    brand: "samsung",
    price: 699,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "display-2",
    name: "Dell UltraSharp U2723QE",
    sku: "U2723QE",
    image: "/computer-monitors.png",
    description: "27-inch 4K USB-C hub monitor with 90W power delivery and KVM switch",
    category: "displays",
    brand: "dell",
    price: 549,
    specifications: {
      graphics: "N/A"
    }
  },
  {
    id: "display-3",
    name: "LG 27UP850-W",
    sku: "27UP850-W",
    image: "/placeholder.svg?height=300&width=300",
    description: "27-inch 4K UHD monitor with USB-C connectivity and HDR10 support",
    category: "displays",
    brand: "lg",
    price: 399,
    specifications: {
      graphics: "N/A"
    }
  }
]

function CatalogContent() {
  const { filters, updateFilters } = useFilters()
  const filteredProducts = useProductFiltering(allProducts)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Product Catalog</h1>
              <p className="text-muted-foreground">Browse our complete wholesale electronics inventory</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-8 md:w-[300px]"
                  value={filters.searchQuery}
                  onChange={(e) => updateFilters({ searchQuery: e.target.value })}
                />
              </div>
              <AdvancedProductFilters />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {/* Quick Category Filters */}
              <Button
                variant={filters.categories.length === 0 ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilters({ categories: [] })}
              >
                All Products
              </Button>
              <Button
                variant={filters.categories.includes("laptops") ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilters({ categories: ["laptops"] })}
              >
                Laptops
              </Button>
              <Button
                variant={filters.categories.includes("accessories") ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilters({ categories: ["accessories"] })}
              >
                Accessories
              </Button>
              <Button
                variant={filters.categories.includes("networking") ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilters({ categories: ["networking"] })}
              >
                Networking
              </Button>
              <Button
                variant={filters.categories.includes("gaming") ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilters({ categories: ["gaming"] })}
              >
                Gaming
              </Button>
              <Button
                variant={filters.categories.includes("servers") ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilters({ categories: ["servers"] })}
              >
                Servers
              </Button>
              <Button
                variant={filters.categories.includes("displays") ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilters({ categories: ["displays"] })}
              >
                Displays
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <AdvancedProductFilters className="sticky top-24" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg font-medium text-muted-foreground mb-2">
                    No products match your current filters
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Try adjusting your search criteria or clearing some filters
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => updateFilters({ 
                      categories: [], 
                      brands: [], 
                      specifications: {},
                      priceRange: [0, 5000],
                      searchQuery: ''
                    })}
                  >
                    Clear All Filters
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

export default function CatalogPage() {
  return (
    <FilterProvider>
      <CatalogContent />
    </FilterProvider>
  )
}
