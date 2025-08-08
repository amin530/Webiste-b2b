import { useMemo } from 'react'
import { useFilters } from '@/contexts/filter-context'

interface Product {
  id: string
  name: string
  sku: string
  image: string
  description: string
  category: string
  brand: string
  price?: number
  specifications?: {
    ram?: string
    storage?: string
    processor?: string
    graphics?: string
  }
}

export function useProductFiltering(products: Product[]) {
  const { filters } = useFilters()

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query)
      )
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.category.toLowerCase())
      )
    }

    // Filter by brands
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product =>
        filters.brands.includes(product.brand.toLowerCase())
      )
    }

    // Filter by price range
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 5000) {
      filtered = filtered.filter(product =>
        product.price !== undefined &&
        product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1]
      )
    }

    // Filter by specifications
    if (filters.specifications.ram && filters.specifications.ram.length > 0) {
      filtered = filtered.filter(product =>
        product.specifications?.ram &&
        filters.specifications.ram!.some(ram =>
          product.specifications!.ram!.includes(ram)
        )
      )
    }

    if (filters.specifications.storage && filters.specifications.storage.length > 0) {
      filtered = filtered.filter(product =>
        product.specifications?.storage &&
        filters.specifications.storage!.some(storage =>
          product.specifications!.storage!.includes(storage)
        )
      )
    }

    if (filters.specifications.processor && filters.specifications.processor.length > 0) {
      filtered = filtered.filter(product =>
        product.specifications?.processor &&
        filters.specifications.processor!.some(processor =>
          product.specifications!.processor!.includes(processor)
        )
      )
    }

    if (filters.specifications.graphics && filters.specifications.graphics.length > 0) {
      filtered = filtered.filter(product =>
        product.specifications?.graphics &&
        filters.specifications.graphics!.some(graphics =>
          product.specifications!.graphics!.includes(graphics)
        )
      )
    }

    // Sort products
    switch (filters.sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'price-low':
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0))
        break
      case 'price-high':
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0))
        break
      case 'brand':
        filtered.sort((a, b) => a.brand.localeCompare(b.brand))
        break
      case 'newest':
        // For now, just reverse the order to simulate newest first
        filtered.reverse()
        break
    }

    return filtered
  }, [products, filters])

  return filteredProducts
}
