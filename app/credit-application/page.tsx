import Link from "next/link"
import { ArrowLeft, CreditCard, Building, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function CreditApplicationPage() {
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
            <div className="mb-8 flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="/register">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back to registration</span>
                </Link>
              </Button>
            </div>
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Credit Application</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Apply for Net 30 credit terms to streamline your purchasing process and improve cash flow management.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 lg:grid-cols-3 mb-8">
                <Card>
                  <CardHeader>
                    <CreditCard className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Net 30 Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Pay invoices 30 days after delivery, giving you time to receive and process orders before payment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Building className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Business Credit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Build your business credit history with timely payments and establish a strong vendor
                      relationship.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Fast Approval</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Most credit applications are processed within 24-48 hours with instant approval for qualified
                      businesses.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Business Credit Application</CardTitle>
                  <CardDescription>
                    Complete this form to apply for Net 30 credit terms. All information is kept confidential and
                    secure.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Business Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="legalBusinessName">Legal Business Name *</Label>
                          <Input id="legalBusinessName" placeholder="ABC Corporation" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dbaName">DBA Name (if different)</Label>
                          <Input id="dbaName" placeholder="ABC Tech Solutions" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Business Type *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="corporation">Corporation</SelectItem>
                              <SelectItem value="llc">LLC</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                              <SelectItem value="non-profit">Non-Profit</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select years" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                              <SelectItem value="1-2">1-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="more-than-10">More than 10 years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="federalTaxId">Federal Tax ID (EIN) *</Label>
                          <Input id="federalTaxId" placeholder="12-3456789" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessPhone">Business Phone *</Label>
                          <Input id="businessPhone" type="tel" placeholder="(555) 123-4567" required />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Business Address</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="businessAddress">Street Address *</Label>
                          <Input id="businessAddress" placeholder="123 Business Ave" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessCity">City *</Label>
                          <Input id="businessCity" placeholder="Atlanta" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessState">State *</Label>
                          <Input id="businessState" placeholder="GA" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessZip">ZIP Code *</Label>
                          <Input id="businessZip" placeholder="30309" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="businessCountry">Country *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Financial Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="annualRevenue">Annual Revenue *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select revenue range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-100k">Under $100,000</SelectItem>
                              <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                              <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                              <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                              <SelectItem value="over-5m">Over $5,000,000</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="requestedCreditLimit">Requested Credit Limit *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select credit limit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5000">$5,000</SelectItem>
                              <SelectItem value="10000">$10,000</SelectItem>
                              <SelectItem value="25000">$25,000</SelectItem>
                              <SelectItem value="50000">$50,000</SelectItem>
                              <SelectItem value="100000">$100,000</SelectItem>
                              <SelectItem value="custom">Custom Amount</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bankName">Primary Bank Name *</Label>
                          <Input id="bankName" placeholder="First National Bank" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bankPhone">Bank Phone Number *</Label>
                          <Input id="bankPhone" type="tel" placeholder="(555) 987-6543" required />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Trade References</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Please provide at least 3 trade references from suppliers you currently work with.
                      </p>

                      {[1, 2, 3].map((ref) => (
                        <div key={ref} className="border rounded-lg p-4 mb-4">
                          <h4 className="font-medium mb-3">Reference {ref}</h4>
                          <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                              <Label htmlFor={`ref${ref}Company`}>Company Name</Label>
                              <Input id={`ref${ref}Company`} placeholder="Supplier Company" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`ref${ref}Contact`}>Contact Person</Label>
                              <Input id={`ref${ref}Contact`} placeholder="John Smith" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`ref${ref}Phone`}>Phone Number</Label>
                              <Input id={`ref${ref}Phone`} type="tel" placeholder="(555) 123-4567" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Authorized Representative</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="authName">Full Name *</Label>
                          <Input id="authName" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="authTitle">Title *</Label>
                          <Input id="authTitle" placeholder="President" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="authEmail">Email Address *</Label>
                          <Input id="authEmail" type="email" placeholder="john@company.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="authPhone">Phone Number *</Label>
                          <Input id="authPhone" type="tel" placeholder="(555) 123-4567" required />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <Link href="/terms-of-service" className="text-primary underline-offset-4 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and authorize TechWholesale to verify the information provided.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="creditCheck" required />
                        <Label htmlFor="creditCheck" className="text-sm">
                          I authorize TechWholesale to obtain credit reports and verify trade references.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="personalGuarantee" />
                        <Label htmlFor="personalGuarantee" className="text-sm">
                          I personally guarantee payment of all amounts owed (required for credit limits over $25,000).
                        </Label>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button type="submit" className="flex-1">
                        Submit Credit Application
                      </Button>
                      <Button type="button" variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href="/register">Save and Continue Later</Link>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">What Happens Next?</h2>
              <div className="grid gap-4 md:grid-cols-3 mt-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <h3 className="font-medium mb-2">Application Review</h3>
                  <p className="text-sm text-muted-foreground">
                    We review your application and verify the information provided.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <h3 className="font-medium mb-2">Credit Decision</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a credit decision within 24-48 hours via email.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <h3 className="font-medium mb-2">Start Ordering</h3>
                  <p className="text-sm text-muted-foreground">
                    Once approved, you can immediately start placing orders with Net 30 terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
