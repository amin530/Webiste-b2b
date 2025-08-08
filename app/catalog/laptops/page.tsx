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

const laptopsData = [
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
    id: "laptop-4",
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
  {
    id: "laptop-6",
    name: "Microsoft Surface Laptop 5",
    sku: "SL5-13",
    image: "/placeholder.svg?height=300&width=300",
    description: "13.5-inch touchscreen laptop with Intel Core i5-1235U, 8GB RAM, 256GB SSD",
    category: "laptops",
    brand: "microsoft",
    price: 1199,
    specifications: {
      ram: "8GB",
      storage: "256GB",
      processor: "Intel Core i5",
      graphics: "Integrated"
    }
  },
  {
    id: "laptop-7",
    name: "HP ZBook Studio G9",
    sku: "ZB-STU-G9",
    image: "/placeholder.svg?height=300&width=300",
    description: "15.6-inch mobile workstation with Intel Core i7-12800H, 32GB RAM, RTX A2000",
    category: "laptops",
    brand: "hp",
    price: 2499,
    specifications: {
      ram: "32GB",
      storage: "1TB",
      processor: "Intel Core i7",
      graphics: "RTX A2000"
    }
  },
  {
    id: "laptop-8",
    name: "Dell Precision 5570",
    sku: "PREC-5570",
    image: "/placeholder.svg?height=300&width=300",
    description: "15.6-inch mobile workstation with Intel Core i7-12700H, 16GB RAM, RTX A1000",
    category: "laptops",
    brand: "dell",
    price: 2199,
    specifications: {
      ram: "16GB",
      storage: "512GB",
      processor: "Intel Core i7",
      graphics: "RTX A1000"
    }
  },
  {
    id: "laptop-9",
    name: "Lenovo Legion 5 Pro",
    sku: "LEG-5PRO",
    image: "/placeholder.svg?height=300&width=300",
    description: "16-inch gaming laptop with AMD Ryzen 7 6800H, 16GB RAM, RTX 3070 Ti, 1TB SSD",
    category: "laptops",
    brand: "lenovo",
    price: 1899,
    specifications: {
      ram: "16GB",
      storage: "1TB",
      processor: "AMD Ryzen 7",
      graphics: "RTX 3070"
    }
  },
]

function LaptopsContent() {
  const { filters, updateFilters } = useFilters()
  const filteredLaptops = useProductFiltering(laptopsData)

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
              <h1 className="text-3xl font-bold tracking-tight">Business Laptops</h1>
              <p className="text-muted-foreground">Professional laptops, ultrabooks, and mobile workstations</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search laptops..."
                  className="w-full pl-8 md:w-[300px]"
                  value={filters.searchQuery}
                  onChange={(e) => updateFilters({ searchQuery: e.target.value })}
                />
              </div>
              <AdvancedProductFilters />
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredLaptops.length} of {laptopsData.length} laptops
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <AdvancedProductFilters className="sticky top-24" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredLaptops.map((laptop) => (
                  <ProductCard key={laptop.id} product={laptop} />
                ))}
              </div>
              {filteredLaptops.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No laptops match your current filters.</p>
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

export default function LaptopsPage() {
  return (
    <FilterProvider>
      <LaptopsContent />
    </FilterProvider>
  )
}
