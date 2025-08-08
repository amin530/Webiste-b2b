import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8 flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to homepage</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: January 1, 2024</p>
            </div>
          </div>

          <Card className="mx-auto max-w-4xl">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using our wholesale platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Business Account Requirements</h2>
                <p className="text-muted-foreground mb-4">
                  Our services are exclusively available to verified business customers. To maintain an account, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete business information</li>
                  <li>Maintain current contact and billing information</li>
                  <li>Use the account only for legitimate business purposes</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Pricing and Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Wholesale pricing is available only to approved business customers. Payment terms include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Net 30 terms for qualified businesses</li>
                  <li>Credit card and ACH payment options</li>
                  <li>Late payment fees may apply</li>
                  <li>Prices subject to change without notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Order Processing and Shipping</h2>
                <p className="text-muted-foreground mb-4">
                  Orders are processed subject to product availability and credit approval:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Orders typically ship within 1-2 business days</li>
                  <li>Shipping costs calculated at checkout</li>
                  <li>Risk of loss transfers upon shipment</li>
                  <li>Delivery dates are estimates only</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Returns and Warranties</h2>
                <p className="text-muted-foreground mb-4">
                  Return policy and warranty terms:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>30-day return policy for most products</li>
                  <li>Items must be in original packaging</li>
                  <li>Manufacturer warranties apply</li>
                  <li>Return authorization required</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  In no event shall Sidq Ventures LLC be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at{" "}
                  <Link href="mailto:legal@sidqventures.com" className="text-primary underline-offset-4 hover:underline">
                    legal@sidqventures.com
                  </Link>
                  .
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
