import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Clock, CreditCard, FileText, ShieldCheck } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function TermsPage() {
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
                    Credit Terms & Payment Options
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Flexible payment solutions designed to support your business growth and cash flow management.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Business Credit"
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
            <Tabs defaultValue="net30" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="net30">Net 30 Terms</TabsTrigger>
                <TabsTrigger value="credit">Credit Line</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
              </TabsList>
              <TabsContent value="net30" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Net 30 Payment Terms</h2>
                    <p className="text-gray-500">
                      Our Net 30 payment terms allow qualified business customers to pay for their purchases within 30 days of the invoice date, helping you manage cash flow and align payments with your revenue cycle.
                    </p>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Benefits of Net 30 Terms</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <span className="text-gray-500">Improve cash flow management</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <span className="text-gray-500">Align payments with your revenue cycle</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <span className="text-gray-500">No interest charges when paid within terms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <span className="text-gray-500">Build business credit history</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Qualification Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Clock className="mt-0.5 h-5 w-5 text-slate-600" />
                          <span className="text-gray-500">Minimum 1 year in business</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <FileText className="mt-0.5 h-5 w-5 text-slate-600" />
                          <span className="text-gray-500">Completed credit application</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ShieldCheck className="mt-0.5 h-5 w-5 text-slate-600" />
                          <span className="text-gray-500">Satisfactory business credit check</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CreditCard className="mt-0.5 h-5 w-5 text-slate-600" />
                          <span className="text-gray-500">Valid business banking references</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Apply for Net 30 Terms</CardTitle>
                        <CardDescription>
                          Complete our credit application to get started with Net 30 payment terms.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          To apply for Net 30 terms, you'll need to provide:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>Completed credit application form</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>Business registration documents</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>Bank references</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>Trade references</span>
                          </li>
                        </ul>
                        <Button className="w-full" asChild>
                          <Link href="/credit-application">
                            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          Applications are typically processed within 3-5 business days.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="credit" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Business Credit Line</h2>
                    <p className="text-gray-500">
                      Our business credit line program offers qualified partners a revolving line of credit to support larger purchases and ongoing inventory needs.
                    </p>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Credit Line Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <span className="text-gray-500">Revolving credit line for ongoing purchases</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <span className="text-gray-500">Credit limits based on business needs and history</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <span className="text-gray-500">Opportunity for credit line increases over time</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <span className="text-gray-500">Simplified purchasing process for regular orders</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Qualification Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Clock className="mt-0.5 h-5 w-5 text-slate-600" />
                          <span className="text-gray-500">Minimum 2 years in business</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <FileText className="mt-0.5 h-5 w-5 text-slate-600" />
                          <span className="text-gray-500">Financial statements</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ShieldCheck className="mt-0.5 h-5 w-5 text-slate-600" />
                          <span className="text-gray-500">Strong business credit profile</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CreditCard className="mt-0.5 h-5 w-5 text-slate-600" />
                          <span className="text-gray-500">Established purchase history</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Apply for a Credit Line</CardTitle>
                        <CardDescription>
                          Submit your application for a business credit line.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          The credit line application process requires:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>Comprehensive credit application</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>Business financial statements</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>Tax ID and business registration</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                            <span>Bank and trade references</span>
                          </li>
                        </ul>
                        <Button className="w-full" asChild>
                          <Link href="/credit-line-application">
                            Apply for Credit Line <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          Credit line applications are typically processed within 5-7 business days.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="payment" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Payment Methods</h2>
                    <p className="text-gray-500">
                      We offer multiple payment methods to accommodate your business needs and preferences.
                    </p>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Credit Card</h3>
                        <p className="text-gray-500">
                          We accept all major credit cards including Visa, Mastercard, American Express, and Discover. Credit card payments are processed securely and immediately.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">ACH/Bank Transfer</h3>
                        <p className="text-gray-500">
                          Direct bank transfers provide a secure and efficient way to make payments without credit card fees. ACH payments typically process within 1-2 business days.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Wire Transfer</h3>
                        <p className="text-gray-500">
                          For larger orders or international payments, wire transfers offer a secure and reliable payment method. Wire transfers are typically received within 24 hours.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Check</h3>
                        <p className="text-gray-500">
                          We accept business checks for payment. Please note that orders paid by check may be held until the check clears, which typically takes 5-7 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Payment Processing Information</CardTitle>
                        <CardDescription>
                          Important details about our payment processing policies.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Processing Times</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-start space-x-2">
                              <span className="font-medium">Credit Card:</span>
                              <span className="text-muted-foreground">Immediate</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="font-medium">ACH/Bank Transfer:</span>
                              <span className="text-muted-foreground">1-2 business days</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="font-medium">Wire Transfer:</span>
                              <span className="text-muted-foreground">Same day to 24 hours</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="font-medium">Check:</span>
                              <span className="text-muted-foreground">5-7 business days to clear</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Payment Security</h4>
                          <p className="text-sm text-muted-foreground">
                            All payment information is encrypted and processed securely. We comply with PCI DSS standards to ensure your payment data is protected.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">International Payments</h4>
                          <p className="text-sm text-muted-foreground">
                            For international orders, we accept wire transfers and select credit cards. Additional documentation may be required for customs clearance.
                          </p>
                        </div>
                        <Button className="w-full" variant="outline" asChild>
                          <Link href="/contact">
                            Contact Billing Support
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-slate-900 py-12 md:py-16 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Ready to Get Started?
                  </h2>
                  <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Apply for a wholesale account today to access our exclusive pricing and flexible payment terms.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/register">
                      Create Account <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
                    <Link href="/contact">Contact Sales Team</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
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
