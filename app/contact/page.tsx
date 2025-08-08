import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function ContactPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Have questions or need assistance? Our team is here to help you with all your wholesale electronics needs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and our team will get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your Business Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry-type">Inquiry Type</Label>
                        <Select>
                          <SelectTrigger id="inquiry-type">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="account">Account Management</SelectItem>
                            <SelectItem value="billing">Billing & Payments</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your inquiry..."
                          className="min-h-[150px]"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="mt-2 text-gray-500">
                    Reach out to us directly using the contact information below.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Sales: (800) 555-1234
                            <br />
                            Support: (800) 555-5678
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Monday - Friday: 8am - 6pm EST
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Sales: sales@techwholesale.com
                            <br />
                            Support: support@techwholesale.com
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            We typically respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Office Location</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          123 Business Avenue
                          <br />
                          Suite 200
                          <br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Office Location Map"
                    width={600}
                    height={300}
                    className="h-[300px] w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground">8:00 AM - 6:00 PM EST</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-muted-foreground">10:00 AM - 2:00 PM EST</p>
                    </div>
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="text-gray-500">
                Find quick answers to common questions about our wholesale program.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I apply for a wholesale account?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You can apply for a wholesale account by completing our registration form. Once submitted, our team will review your application and contact you within 2 business days.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What are your shipping options?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We offer standard, expedited, and overnight shipping options. Shipping costs are calculated based on order weight, dimensions, and destination. Volume discounts are available for larger orders.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer international shipping?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes, we ship to select international destinations. International orders may require additional documentation and customs fees. Contact our sales team for specific information about shipping to your country.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is your return policy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We offer a 30-day return policy for most products. Items must be in original packaging and in resalable condition. Some products may have specific return restrictions. Please contact our support team before initiating a return.
                  </p>
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
