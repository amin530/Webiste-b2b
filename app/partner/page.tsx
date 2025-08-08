import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function PartnerPage() {
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Become a TechWholesale Partner
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join our network of trusted business partners and gain access to exclusive wholesale pricing on premium electronics products.
                  </p>
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

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Wholesale Pricing</CardTitle>
                  <CardDescription>Access competitive pricing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Exclusive wholesale pricing on all products
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Volume discounts for larger orders
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Special pricing on new product launches
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flexible Terms</CardTitle>
                  <CardDescription>Payment options for businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Net 30 payment terms for qualified businesses
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Credit line options to support your growth
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Multiple payment methods accepted
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Partner Benefits</CardTitle>
                  <CardDescription>Additional advantages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Dedicated account manager for personalized support
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Priority shipping and order processing
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Access to API integration for seamless ordering
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Partner Application</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Complete the form below to apply for a wholesale partnership. Our team will review your application and contact you within 2 business days.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-2xl">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Business Information</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name</Label>
                          <Input id="company-name" placeholder="Your Business Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="business-type">Business Type</Label>
                          <Input id="business-type" placeholder="e.g., Retailer, Reseller, etc." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input id="website" type="url" placeholder="https://yourbusiness.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="years-in-business">Years in Business</Label>
                          <Input id="years-in-business" placeholder="e.g., 5" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Contact Information</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">Contact Name</Label>
                          <Input id="contact-name" placeholder="Full Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="job-title">Job Title</Label>
                          <Input id="job-title" placeholder="Your Position" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Business Email</Label>
                          <Input id="email" type="email" placeholder="your-business@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Additional Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="monthly-volume">Estimated Monthly Purchase Volume</Label>
                        <Input id="monthly-volume" placeholder="e.g., $10,000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product-interest">Products of Interest</Label>
                        <Input id="product-interest" placeholder="e.g., Laptops, Networking Equipment, etc." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="comments">Additional Comments</Label>
                        <Textarea
                          id="comments"
                          placeholder="Tell us more about your business and specific needs"
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
