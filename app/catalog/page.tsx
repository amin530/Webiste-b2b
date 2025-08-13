"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Grid, List, Filter, Star, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const categories = [
  { id: "laptops", name: "Laptops", count: 156 },
  { id: "desktops", name: "Desktops", count: 89 },
  { id: "servers", name: "Servers", count: 45 },
  { id: "networking", name: "Networking", count: 234 },
  { id: "accessories", name: "Accessories", count: 567 },
  { id: "displays", name: "Displays", count: 123 },
  { id: "gaming", name: "Gaming", count: 78 },
]

const brands = [
  { id: "dell", name: "Dell", count: 234 },
  { id: "hp", name: "HP", count: 189 },
  { id: "lenovo", name: "Lenovo", count: 156 },
  { id: "apple", name: "Apple", count: 89 },
  { id: "asus", name: "ASUS", count: 134 },
  { id: "acer", name: "Acer", count: 98 },
  { id: "microsoft", name: "Microsoft", count: 67 },
]

const products = [
  {
    id: 1,
    name: "Dell XPS 13 Plus",
    category: "Laptops",
    brand: "Dell",
    price: 1299,
    originalPrice: 1499,
    image: "/images/dell-xps-laptop.png",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    specs: ["Intel i7-1260P", "16GB RAM", "512GB SSD", '13.4" OLED'],
    description: "Premium ultrabook with stunning OLED display and powerful performance.",
  },
  {
    id: 2,
    name: "HP EliteBook 840 G9",
    category: "Laptops",
    brand: "HP",
    price: 1199,
    image: "/images/hp-laptop-placeholder.png",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    specs: ["Intel i5-1235U", "8GB RAM", "256GB SSD", '14" FHD'],
    description: "Business laptop with enterprise-grade security and reliability.",
  },
  {
    id: 3,
    name: 'MacBook Pro 14"',
    category: "Laptops",
    brand: "Apple",
    price: 1999,
    image: "/images/apple-macbook-pro.png",
    rating: 4.9,
    reviews: 256,
    inStock: true,
    specs: ["Apple M2 Pro", "16GB RAM", "512GB SSD", '14.2" Liquid Retina XDR'],
    description: "Professional laptop with M2 Pro chip and stunning Liquid Retina XDR display.",
  },
  {
    id: 4,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    brand: "Logitech",
    price: 99,
    image: "/images/logitech-mx-master-mouse.png",
    rating: 4.7,
    reviews: 342,
    inStock: true,
    specs: ["8000 DPI", "Wireless", "70-day battery", "Multi-device"],
    description: "Advanced wireless mouse with precision tracking and multi-device connectivity.",
  },
  {
    id: 5,
    name: "ASUS ROG Strix GT35",
    category: "Gaming",
    brand: "ASUS",
    price: 2499,
    originalPrice: 2799,
    image: "/images/asus-gaming-pc.png",
    rating: 4.8,
    reviews: 67,
    inStock: true,
    featured: true,
    specs: ["Intel i7-11700KF", "RTX 3070", "16GB RAM", "1TB SSD"],
    description: "High-performance gaming desktop with RGB lighting and liquid cooling.",
  },
  {
    id: 6,
    name: "Ubiquiti UniFi Switch 24",
    category: "Networking",
    brand: "Ubiquiti",
    price: 379,
    image: "/images/ubiquiti-unifi-switch.png",
    rating: 4.5,
    reviews: 156,
    inStock: true,
    specs: ["24 Gigabit ports", "PoE+", "Layer 2", "Managed"],
    description: "Professional managed switch with PoE+ support for enterprise networks.",
  },
  {
    id: 7,
    name: 'Samsung Odyssey G7 32"',
    category: "Displays",
    brand: "Samsung",
    price: 699,
    originalPrice: 799,
    image: "/images/samsung-curved-monitor.png",
    rating: 4.6,
    reviews: 234,
    inStock: false,
    specs: ['32" QLED', "240Hz", "1ms", "G-Sync Compatible"],
    description: "Curved gaming monitor with ultra-fast refresh rate and vibrant QLED display.",
  },
  {
    id: 8,
    name: "Dell PowerEdge R750",
    category: "Servers",
    brand: "Dell",
    price: 4999,
    image: "/images/dell-poweredge-server.png",
    rating: 4.7,
    reviews: 45,
    inStock: true,
    specs: ["Intel Xeon Silver", "32GB RAM", "2x 480GB SSD", "2U Rack"],
    description: "Enterprise server with dual processors and redundant power supplies.",
  },
]

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category.toLowerCase())
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesStock = !showInStockOnly || product.inStock

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesStock
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    }
  })

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId])
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId))
    }
  }

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
              />
              <label htmlFor={category.id} className="text-sm flex-1 cursor-pointer">
                {category.name}
              </label>
              <span className="text-xs text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox
                id={brand.id}
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
              />
              <label htmlFor={brand.id} className="text-sm flex-1 cursor-pointer">
                {brand.name}
              </label>
              <span className="text-xs text-muted-foreground">({brand.count})</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={5000} min={0} step={50} className="mb-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex items-center space-x-2">
        <Checkbox id="in-stock" checked={showInStockOnly} onCheckedChange={setShowInStockOnly} />
        <label htmlFor="in-stock" className="text-sm cursor-pointer">
          In stock only
        </label>
      </div>
    </div>
  )

  const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && <Badge className="absolute top-2 left-2 bg-orange-500">Featured</Badge>}
          {product.originalPrice && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Save ${product.originalPrice - product.price}
            </Badge>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">{product.category}</Badge>
          <Badge variant="secondary">{product.brand}</Badge>
        </div>
        <Link href={`/catalog/product/${product.id}`}>
          <h3 className="font-semibold hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-1 mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {product.specs.slice(0, 2).map((spec, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <span className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <Button size="sm" disabled={!product.inStock}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  )

  const ProductListItem = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="group hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover rounded" />
            {product.featured && <Badge className="absolute -top-1 -left-1 bg-orange-500 text-xs">Featured</Badge>}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {product.brand}
                  </Badge>
                </div>
                <Link href={`/catalog/product/${product.id}`}>
                  <h3 className="font-semibold hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {product.specs.map((spec, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="text-right ml-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                  <Button size="sm" disabled={!product.inStock}>
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Product Catalog</h1>
        <p className="text-muted-foreground">Browse our extensive collection of business technology solutions</p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <FilterSidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Controls */}
          <div className="mb-6 space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your product search</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">{sortedProducts.length} products found</span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p>Try adjusting your filters or search terms</p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategories([])
                  setSelectedBrands([])
                  setPriceRange([0, 5000])
                  setShowInStockOnly(false)
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {sortedProducts.map((product) =>
                viewMode === "grid" ? (
                  <ProductCard key={product.id} product={product} />
                ) : (
                  <ProductListItem key={product.id} product={product} />
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
