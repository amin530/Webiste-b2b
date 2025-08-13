"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function BrandCarousel() {
  const [current, setCurrent] = React.useState(0)
  const brandLogos = [
    { name: "Apple", logo: "/images/apple-logo-minimalist.png" },
    { name: "Dell", logo: "/images/dell-logo.png" },
    { name: "HP", logo: "/images/generic-tech-logo.png" },
    { name: "Lenovo", logo: "/images/lenovo-logo.png" },
    { name: "Samsung", logo: "/images/samsung-logo.png" },
    { name: "Asus", logo: "/images/asus-logo.png" },
    { name: "Acer", logo: "/images/acer-logo.png" },
    { name: "Microsoft", logo: "/images/microsoft-logo.png" },
    { name: "LG", logo: "/images/lg-logo-abstract.png" },
    { name: "Cisco", logo: "/images/cisco-logo.png" },
  ]

  const visibleBrands = React.useMemo(() => {
    const visibleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 5
    const start = current % brandLogos.length
    const end = (start + visibleCount) % brandLogos.length

    if (end > start) {
      return brandLogos.slice(start, end)
    } else {
      return [...brandLogos.slice(start), ...brandLogos.slice(0, end)]
    }
  }, [current, brandLogos])

  const next = () => {
    setCurrent((current + 1) % brandLogos.length)
  }

  const previous = () => {
    setCurrent((current - 1 + brandLogos.length) % brandLogos.length)
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      next()
    }, 3000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="flex items-center justify-center gap-8 md:gap-12">
        {visibleBrands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-2">
            <div className="relative h-20 w-40 overflow-hidden">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80" onClick={previous}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80" onClick={next}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  )
}
