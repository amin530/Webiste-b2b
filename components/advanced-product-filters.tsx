"use client"

import { useState } from 'react'
import { Filter, X, ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { useFilters } from '@/contexts/filter-context'
import { cn } from '@/lib/utils'

interface AdvancedProductFiltersProps {
  className?: string
}

const brands = [
  'apple', 'dell', 'hp', 'lenovo', 'asus', 'acer', 'microsoft', 'samsung', 
  'lg', 'cisco', 'ubiquiti', 'netgear', 'corsair', 'logitech', 'razer'
]

const categories = [
  'laptops', 'accessories', 'networking', 'gaming', 'servers', 'displays'
]

const ramOptions = ['4GB', '8GB', '16GB', '32GB', '64GB', '128GB']
const storageOptions = ['128GB', '256GB', '512GB', '1TB', '2TB', '4TB', '8TB']
const processorOptions = ['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'Intel Core i9', 'AMD Ryzen 5', 'AMD Ryzen 7', 'AMD Ryzen 9', 'Apple M1', 'Apple M2']
const graphicsOptions = ['Integrated', 'RTX 3050', 'RTX 3060', 'RTX 3070', 'RTX 3080', 'RTX 4060', 'RTX 4070', 'RTX 4080', 'RTX A1000', 'RTX A2000']

export function AdvancedProductFilters({ className }: AdvancedProductFiltersProps) {
  const { filters, updateFilters, clearFilters } = useFilters()
  const [isOpen, setIsOpen] = useState(false)

  const activeFilterCount = 
    filters.categories.length + 
    filters.brands.length + 
    (filters.searchQuery ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 5000 ? 1 : 0) +
    Object.values(filters.specifications).reduce((acc, spec) => acc + (spec?.length || 0), 0)

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked 
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand)
    updateFilters({ brands: newBrands })
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked 
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category)
    updateFilters({ categories: newCategories })
  }

  const handleSpecificationChange = (type: keyof typeof filters.specifications, value: string, checked: boolean) => {
    const currentSpecs = filters.specifications[type] || []
    const newSpecs = checked
      ? [...currentSpecs, value]
      : currentSpecs.filter(spec => spec !== value)
    
    updateFilters({
      specifications: {
        ...filters.specifications,
        [type]: newSpecs
      }
    })
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Sort By */}
      <div>
        <Label className="text-sm font-medium">Sort By</Label>
        <Select value={filters.sortBy} onValueChange={(value: any) => updateFilters({ sortBy: value })}>
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name (A-Z)</SelectItem>
            <SelectItem value="price-low">Price (Low to High)</SelectItem>
            <SelectItem value="price-high">Price (High to Low)</SelectItem>
            <SelectItem value="brand">Brand</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div>
        <Label className="text-sm font-medium">Price Range</Label>
        <div className="mt-4 px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
            max={5000}
            min={0}
            step={50}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <Label className="text-sm font-medium">Categories</Label>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={`category-${category}`} className="text-sm capitalize">
                {category}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Brands */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <Label className="text-sm font-medium">Brands</Label>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
              />
              <Label htmlFor={`brand-${brand}`} className="text-sm capitalize">
                {brand}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* RAM */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <Label className="text-sm font-medium">RAM</Label>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2">
          {ramOptions.map((ram) => (
            <div key={ram} className="flex items-center space-x-2">
              <Checkbox
                id={`ram-${ram}`}
                checked={filters.specifications.ram?.includes(ram) || false}
                onCheckedChange={(checked) => handleSpecificationChange('ram', ram, checked as boolean)}
              />
              <Label htmlFor={`ram-${ram}`} className="text-sm">
                {ram}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Storage */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <Label className="text-sm font-medium">Storage</Label>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2">
          {storageOptions.map((storage) => (
            <div key={storage} className="flex items-center space-x-2">
              <Checkbox
                id={`storage-${storage}`}
                checked={filters.specifications.storage?.includes(storage) || false}
                onCheckedChange={(checked) => handleSpecificationChange('storage', storage, checked as boolean)}
              />
              <Label htmlFor={`storage-${storage}`} className="text-sm">
                {storage}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Processor */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <Label className="text-sm font-medium">Processor</Label>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2 max-h-48 overflow-y-auto">
          {processorOptions.map((processor) => (
            <div key={processor} className="flex items-center space-x-2">
              <Checkbox
                id={`processor-${processor}`}
                checked={filters.specifications.processor?.includes(processor) || false}
                onCheckedChange={(checked) => handleSpecificationChange('processor', processor, checked as boolean)}
              />
              <Label htmlFor={`processor-${processor}`} className="text-sm">
                {processor}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Graphics */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <Label className="text-sm font-medium">Graphics</Label>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 space-y-2">
          {graphicsOptions.map((graphics) => (
            <div key={graphics} className="flex items-center space-x-2">
              <Checkbox
                id={`graphics-${graphics}`}
                checked={filters.specifications.graphics?.includes(graphics) || false}
                onCheckedChange={(checked) => handleSpecificationChange('graphics', graphics, checked as boolean)}
              />
              <Label htmlFor={`graphics-${graphics}`} className="text-sm">
                {graphics}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Clear Filters */}
      {activeFilterCount > 0 && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="relative">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className={cn("hidden lg:block", className)}>
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Filters</h3>
            {activeFilterCount > 0 && (
              <Badge variant="secondary">
                {activeFilterCount} active
              </Badge>
            )}
          </div>
          <FilterContent />
        </div>
      </div>
    </>
  )
}
