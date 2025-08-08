import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search, ShieldCheck, TrendingUp, Truck } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { BrandCarousel } from "@/components/brand-carousel"
import { FeaturedCategories } from "@/components/featured-categories"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:flex">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-slate-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Wholesale Electronics for Your Business
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Access premium electronics at competitive wholesale prices. Exclusive for verified business customers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/register">
                      Become a Partner <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/catalog">Browse Catalog</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder-7yppi.png"
                  alt="Wholesale Electronics Distribution"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted Brands</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We source directly from trusted distributors and industry leaders to ensure genuine products, competitive pricing, and fast fulfillment.
                </p>
              </div>
            </div>
            <BrandCarousel />
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Product Categories</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our extensive catalog of electronics products for your business needs.
                </p>
              </div>
            </div>
            <FeaturedCategories />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <ShieldCheck className="h-8 w-8 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold">Verified Business Access</h3>
                <p className="text-gray-500">
                  Exclusive wholesale pricing available only to verified business customers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <TrendingUp className="h-8 w-8 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold">Net 30 Credit Terms</h3>
                <p className="text-gray-500">
                  Qualified businesses can enjoy flexible payment terms to help manage cash flow.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <Truck className="h-8 w-8 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold">Fast & Reliable Shipping</h3>
                <p className="text-gray-500">
                  Quick order processing and shipping to meet your business timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-12 md:py-16 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Become a Partner Today
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {""}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/partner">
                      Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-black hover:bg-black hover:text-slate-900" asChild>
                    <Link href="/terms">Learn About Terms</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/business-partnership-handshake.png"
                  alt="Business Partnership"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
