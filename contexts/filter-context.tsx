"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface FilterState {
  searchQuery: string
  categories: string[]
  brands: string[]
  priceRange: [number, number]
  specifications: {
    ram?: string[]
    storage?: string[]
    processor?: string[]
    graphics?: string[]
  }
  sortBy: 'name' | 'price-low' | 'price-high' | 'brand' | 'newest'
}

interface FilterContextType {
  filters: FilterState
  updateFilters: (updates: Partial<FilterState>) => void
  clearFilters: () => void
}

const defaultFilters: FilterState = {
  searchQuery: '',
  categories: [],
  brands: [],
  priceRange: [0, 5000],
  specifications: {},
  sortBy: 'name'
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)

  const updateFilters = (updates: Partial<FilterState>) => {
    setFilters(prev => ({
      ...prev,
      ...updates,
      specifications: {
        ...prev.specifications,
        ...updates.specifications
      }
    }))
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <FilterContext.Provider value={{ filters, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider')
  }
  return context
}
