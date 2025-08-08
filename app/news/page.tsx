import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "New Partnership with Leading Tech Manufacturers",
      excerpt: "We're excited to announce new partnerships that expand our product catalog with the latest technology solutions.",
      date: "2024-01-15",
      category: "Partnership",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Q1 2024 Promotional Pricing Now Available",
      excerpt: "Take advantage of special promotional pricing on select product categories throughout Q1 2024.",
      date: "2024-01-10",
      category: "Promotion",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Enhanced API Features Released",
      excerpt: "Our API now includes advanced inventory tracking and automated reorder capabilities for enterprise customers.",
      date: "2024-01-05",
      category: "Product Update",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Holiday Season Shipping Updates",
      excerpt: "Important information about shipping schedules and deadlines during the holiday season.",
      date: "2023-12-20",
      category: "Shipping",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Promotions</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Stay updated with the latest news, product announcements, and special promotions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                    <Button variant="link" className="mt-2 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
