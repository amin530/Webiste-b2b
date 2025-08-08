import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Heart } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <Link href={`/catalog/product/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{product.sku}</span>
        </div>
        <Link href={`/catalog/product/${product.id}`}>
          <h3 className="font-semibold leading-tight hover:underline">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        {product.specifications && (
          <div className="mt-3 flex flex-wrap gap-1">
            {product.specifications.ram && (
              <Badge variant="outline" className="text-xs">
                {product.specifications.ram}
              </Badge>
            )}
            {product.specifications.storage && (
              <Badge variant="outline" className="text-xs">
                {product.specifications.storage}
              </Badge>
            )}
            {product.specifications.processor && (
              <Badge variant="outline" className="text-xs">
                {product.specifications.processor}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            {product.price && (
              <span className="text-lg font-bold">${product.price.toLocaleString()}</span>
            )}
            <span className="text-xs text-muted-foreground capitalize">
              {product.brand}
            </span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
