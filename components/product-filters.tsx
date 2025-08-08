"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const categories = [
  { id: 'laptops', name: 'Laptops', count: 12 },
  { id: 'accessories', name: 'Accessories', count: 8 },
  { id: 'networking', name: 'Networking', count: 15 },
  { id: 'gaming', name: 'Gaming', count: 10 },
  { id: 'servers', name: 'Servers', count: 6 },
  { id: 'displays', name: 'Displays', count: 9 },
]

const brands = [
  { id: 'apple', name: 'Apple', count: 5 },
  { id: 'dell', name: 'Dell', count: 8 },
  { id: 'hp', name: 'HP', count: 6 },
  { id: 'lenovo', name: 'Lenovo', count: 4 },
  { id: 'asus', name: 'ASUS', count: 7 },
  { id: 'samsung', name: 'Samsung', count: 3 },
  { id: 'cisco', name: 'Cisco', count: 5 },
  { id: 'ubiquiti', name: 'Ubiquiti', count: 4 },
]

const priceRanges = [
  { id: 'under-100', name: 'Under $100', count: 12 },
  { id: '100-500', name: '$100 - $500', count: 18 },
  { id: '500-1000', name: '$500 - $1,000', count: 15 },
  { id: '1000-2000', name: '$1,000 - $2,000', count: 10 },
  { id: 'over-2000', name: 'Over $2,000', count: 5 },
]

export function ProductFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId))
    }
  }

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId])
    } else {
      setSelectedBrands(selectedBrands.filter(id => id !== brandId))
    }
  }

  const handlePriceRangeChange = (priceRangeId: string, checked: boolean) => {
    if (checked) {
      setSelectedPriceRanges([...selectedPriceRanges, priceRangeId])
    } else {
      setSelectedPriceRanges(selectedPriceRanges.filter(id => id !== priceRangeId))
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setSelectedPriceRanges([])
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedBrands.length > 0 || selectedPriceRanges.length > 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filters</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear all
          </Button>
        )}
      </div>

      {/* Categories */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <h4 className="text-sm font-medium">Categories</h4>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
              />
              <Label htmlFor={category.id} className="flex-1 text-sm">
                {category.name}
              </Label>
              <span className="text-xs text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Brands */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <h4 className="text-sm font-medium">Brands</h4>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox
                id={brand.id}
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
              />
              <Label htmlFor={brand.id} className="flex-1 text-sm">
                {brand.name}
              </Label>
              <span className="text-xs text-muted-foreground">({brand.count})</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Price Range */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <h4 className="text-sm font-medium">Price Range</h4>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          {priceRanges.map((priceRange) => (
            <div key={priceRange.id} className="flex items-center space-x-2">
              <Checkbox
                id={priceRange.id}
                checked={selectedPriceRanges.includes(priceRange.id)}
                onCheckedChange={(checked) => handlePriceRangeChange(priceRange.id, checked as boolean)}
              />
              <Label htmlFor={priceRange.id} className="flex-1 text-sm">
                {priceRange.name}
              </Label>
              <span className="text-xs text-muted-foreground">({priceRange.count})</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
