import Link from "next/link"
import { Package, RefreshCw, Shield, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function WarrantyReturnsPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Warranty & Returns</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Our comprehensive warranty and return policies ensure your satisfaction with every purchase.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Return Policy</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">30-Day Return Window</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Items can be returned within 30 days of purchase for a full refund or exchange. Items must be in
                        original, unopened packaging with all accessories and documentation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Condition Requirements</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Items must be in original packaging</li>
                        <li>• All accessories and manuals included</li>
                        <li>• No physical damage or wear</li>
                        <li>• Serial numbers must match purchase records</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <RefreshCw className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Restocking Fee</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        A 15% restocking fee may apply to returns of opened items or special orders. Defective items are
                        exempt from restocking fees.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Warranty Coverage</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Manufacturer Warranties</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        All products include full manufacturer warranties. Warranty periods vary by product and
                        manufacturer, typically ranging from 1-3 years.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Laptops & Computers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">1-3 Years</Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          Standard manufacturer warranty with optional extended coverage
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Networking Equipment</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">1-5 Years</Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          Varies by manufacturer, enterprise products typically longer
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Accessories</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">1-2 Years</Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          Standard warranty on mice, keyboards, cables, and peripherals
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Servers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">3-5 Years</Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          Enterprise-grade warranty with next-business-day support options
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Return Process</h2>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <h3 className="font-medium mb-2">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Call or email our customer service team to initiate a return request.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <h3 className="font-medium mb-2">Get RMA Number</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive your Return Merchandise Authorization (RMA) number and return instructions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <h3 className="font-medium mb-2">Ship Items</h3>
                  <p className="text-sm text-muted-foreground">
                    Package items securely and ship to our returns center using the provided label.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <h3 className="font-medium mb-2">Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll process your return within 3-5 business days and issue refund or replacement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Special Policies</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Custom & Special Orders</CardTitle>
                    <CardDescription>Items ordered specifically for your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Custom configured systems and special order items are non-returnable unless defective. These items
                      are built to your specifications and cannot be resold.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Software & Licenses</CardTitle>
                    <CardDescription>Digital products and software licenses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Software licenses and digital products are non-returnable once activated or downloaded. Physical
                      software media can be returned if unopened.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Defective Items</CardTitle>
                    <CardDescription>Products with manufacturing defects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Defective items can be returned at any time during the warranty period for full credit,
                      replacement, or repair. No restocking fees apply to defective returns.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Damage</CardTitle>
                    <CardDescription>Items damaged during shipping</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Report shipping damage within 48 hours of delivery. We'll arrange for replacement or repair at no
                      cost to you. Keep all packaging materials for inspection.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Need Help with a Return?</h2>
              <p className="text-gray-500">
                Our customer service team is ready to assist you with returns, warranties, and any questions you may
                have.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Start Return Process</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:returns@techwholesale.com">Email Returns Team</a>
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
