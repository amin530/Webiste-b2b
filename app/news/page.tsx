import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "New Partnership with Leading Laptop Manufacturer",
      excerpt:
        "We're excited to announce our expanded partnership with a major laptop manufacturer, bringing you even more competitive pricing on business laptops.",
      date: "2024-01-15",
      category: "Partnership",
      image: "/images/news-partnership.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Q1 2024 Promotions Now Available",
      excerpt:
        "Take advantage of our Q1 promotional pricing on networking equipment, accessories, and select laptop models.",
      date: "2024-01-10",
      category: "Promotion",
      image: "/images/news-promotion.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Extended Warehouse Hours for Holiday Season",
      excerpt:
        "To better serve our customers during the busy season, we're extending our warehouse hours and adding weekend shipping options.",
      date: "2024-01-05",
      category: "Operations",
      image: "/images/news-warehouse.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "New Gaming Product Line Launch",
      excerpt:
        "Introducing our expanded gaming product line featuring the latest graphics cards, gaming laptops, and peripherals from top manufacturers.",
      date: "2023-12-20",
      category: "Product Launch",
      image: "/images/news-gaming.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Customer Portal Enhancements",
      excerpt:
        "We've upgraded our customer portal with new features including real-time inventory tracking, enhanced order management, and improved reporting tools.",
      date: "2023-12-15",
      category: "Technology",
      image: "/images/news-portal.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Holiday Shipping Schedule",
      excerpt:
        "Important information about our shipping schedule during the holiday season to ensure your orders arrive on time.",
      date: "2023-12-10",
      category: "Shipping",
      image: "/images/news-shipping.jpg",
      featured: false,
    },
  ]

  const featuredNews = newsItems.filter((item) => item.featured)
  const regularNews = newsItems.filter((item) => !item.featured)

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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Updates</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Stay informed about the latest product launches, promotions, and company updates.
              </p>
            </div>
          </div>
        </section>

        {featuredNews.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold tracking-tight mb-8">Featured News</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {featuredNews.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <Badge className="absolute top-4 left-4">{item.category}</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription>{item.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full bg-transparent">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Recent Updates</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularNews.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {item.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{item.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" className="w-full">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Stay Updated</h2>
              <p className="text-gray-500">
                Subscribe to our newsletter to receive the latest news, promotions, and product updates directly in your
                inbox.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Subscribe to Newsletter</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Sales Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
