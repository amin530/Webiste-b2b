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

const serversData = [
  {
    id: "server-1",
    name: "Dell PowerEdge R750",
    sku: "PER750-001",
    image: "/dell-poweredge-server.png",
    description: "2U rack server with Intel Xeon Scalable processors, up to 32 DIMM slots",
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
    sku: "P20174-B21",
    image: "/placeholder.svg?height=300&width=300",
    description: "2U rack server designed for virtualization and cloud computing",
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
  {
    id: "server-3",
    name: "Lenovo ThinkSystem SR650",
    sku: "7X06A0EAAU",
    image: "/placeholder.svg?height=300&width=300",
    description: "2U rack server with balanced performance for diverse workloads",
    category: "servers",
    brand: "lenovo",
    price: 3199,
    specifications: {
      ram: "64GB",
      storage: "4TB",
      processor: "Intel Xeon",
      graphics: "Integrated"
    }
  },
  {
    id: "server-4",
    name: "Cisco UCS C240 M6",
    sku: "UCSC-C240-M6SX",
    image: "/placeholder.svg?height=300&width=300",
    description: "2U rack server optimized for storage and I/O intensive applications",
    category: "servers",
    brand: "cisco",
    price: 4299,
    specifications: {
      ram: "128GB",
      storage: "8TB",
      processor: "Intel Xeon",
      graphics: "Integrated"
    }
  },
  {
    id: "server-5",
    name: "Dell PowerEdge T350",
    sku: "PET350-001",
    image: "/placeholder.svg?height=300&width=300",
    description: "Tower server ideal for small businesses and remote offices",
    category: "servers",
    brand: "dell",
    price: 1899,
    specifications: {
      ram: "16GB",
      storage: "1TB",
      processor: "Intel Xeon",
      graphics: "Integrated"
    }
  },
  {
    id: "server-6",
    name: "HPE ProLiant ML350 Gen10",
    sku: "P21786-421",
    image: "/placeholder.svg?height=300&width=300",
    description: "Tower server with enterprise-class performance and reliability",
    category: "servers",
    brand: "hpe",
    price: 2499,
    specifications: {
      ram: "32GB",
      storage: "2TB",
      processor: "Intel Xeon",
      graphics: "Integrated"
    }
  },
  {
    id: "server-7",
    name: "Lenovo ThinkSystem ST250",
    sku: "7Y45A02LEA",
    image: "/placeholder.svg?height=300&width=300",
    description: "Single-socket tower server for small to medium businesses",
    category: "servers",
    brand: "lenovo",
    price: 1599,
    specifications: {
      ram: "8GB",
      storage: "1TB",
      processor: "Intel Xeon",
      graphics: "Integrated"
    }
  },
  {
    id: "server-8",
    name: "Dell PowerEdge R450",
    sku: "PER450-001",
    image: "/placeholder.svg?height=300&width=300",
    description: "1U rack server optimized for space-constrained environments",
    category: "servers",
    brand: "dell",
    price: 2799,
    specifications: {
      ram: "32GB",
      storage: "1TB",
      processor: "Intel Xeon",
      graphics: "Integrated"
    }
  },
]

function ServersContent() {
  const { filters, updateFilters } = useFilters()
  const filteredServers = useProductFiltering(serversData)

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
              <h1 className="text-3xl font-bold tracking-tight">Enterprise Servers</h1>
              <p className="text-muted-foreground">Rack servers, tower servers, and enterprise computing solutions</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search servers..."
                  className="w-full pl-8 md:w-[300px]"
                  value={filters.searchQuery}
                  onChange={(e) => updateFilters({ searchQuery: e.target.value })}
                />
              </div>
              <AdvancedProductFilters />
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredServers.length} of {serversData.length} servers
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <AdvancedProductFilters className="sticky top-24" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredServers.map((server) => (
                  <ProductCard key={server.id} product={server} />
                ))}
              </div>
              {filteredServers.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No servers match your current filters.</p>
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

export default function ServersPage() {
  return (
    <FilterProvider>
      <ServersContent />
    </FilterProvider>
  )
}
