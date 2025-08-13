import Link from "next/link"
import Image from "next/image"
import { Award, Users, Globe, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About TechWholesale</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Your trusted partner in wholesale electronics distribution since 2010. We connect businesses with the
                technology they need to succeed.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="mt-4 text-gray-500">
                  Founded in 2010, TechWholesale began as a small electronics distributor with a simple mission: to
                  provide businesses with access to high-quality technology products at competitive wholesale prices.
                </p>
                <p className="mt-4 text-gray-500">
                  Over the years, we've grown into a trusted partner for thousands of businesses across North America,
                  from small retailers to large enterprises. Our commitment to quality, service, and competitive pricing
                  has made us a leader in the wholesale electronics industry.
                </p>
                <p className="mt-4 text-gray-500">
                  Today, we offer an extensive catalog of products from leading manufacturers, backed by exceptional
                  customer service and flexible credit terms that help our partners grow their businesses.
                </p>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/about-warehouse.png"
                  alt="TechWholesale warehouse facility"
                  width={600}
                  height={400}
                  className="h-[400px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Why Choose TechWholesale?</h2>
              <p className="text-gray-500">We're more than just a distributor - we're your technology partner.</p>
            </div>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Quality Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We partner with leading manufacturers to ensure you receive only authentic, high-quality products.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our knowledgeable team provides personalized support to help you find the right products for your
                    needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Fast Shipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    With multiple distribution centers, we ensure fast and reliable shipping across North America.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Flexible Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We offer competitive pricing and flexible credit terms to help your business grow.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                To empower businesses with access to the latest technology products and exceptional service, helping
                them succeed in an increasingly digital world.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">10,000+</h3>
                  <p className="text-sm text-muted-foreground">Products in Stock</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">5,000+</h3>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">99.5%</h3>
                  <p className="text-sm text-muted-foreground">Order Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Partner with Us?</h2>
              <p className="text-gray-500">
                Join thousands of businesses who trust TechWholesale for their technology needs.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/register">Get Started Today</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
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
