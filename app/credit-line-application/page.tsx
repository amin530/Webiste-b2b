import Link from "next/link"
import { ArrowLeft, TrendingUp, DollarSign, Clock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function CreditLineApplicationPage() {
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
                <Link href="/partner">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back to partner page</span>
                </Link>
              </Button>
            </div>
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Credit Line Application</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Apply for an extended credit line to support your growing business needs and larger purchase volumes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 lg:grid-cols-4 mb-8">
                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Higher Limits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Access credit lines from $100,000 to $1,000,000+ for large volume purchases.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <DollarSign className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Better Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Enjoy extended payment terms up to Net 60 and volume-based pricing discounts.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Clock className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Priority Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Get priority order processing, dedicated account management, and expedited shipping.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Flexible Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Revolving credit lines with flexible repayment options and seasonal adjustments.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Extended Credit Line Application</CardTitle>
                  <CardDescription>
                    This application is for businesses seeking credit lines above $100,000. Additional documentation may
                    be required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Company Overview</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input id="companyName" placeholder="ABC Corporation" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="reseller">Technology Reseller</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="government">Government</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="services">Professional Services</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                          <Input id="yearsInBusiness" type="number" placeholder="10" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employeeCount">Number of Employees *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select employee count" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10</SelectItem>
                              <SelectItem value="11-50">11-50</SelectItem>
                              <SelectItem value="51-100">51-100</SelectItem>
                              <SelectItem value="101-500">101-500</SelectItem>
                              <SelectItem value="500+">500+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="businessDescription">Business Description *</Label>
                          <Textarea
                            id="businessDescription"
                            placeholder="Describe your business operations, target markets, and how you plan to use the credit line..."
                            className="min-h-[100px]"
                            required
                          />
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
                              <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                              <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                              <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                              <SelectItem value="25m-50m">$25M - $50M</SelectItem>
                              <SelectItem value="50m+">$50M+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="requestedLimit">Requested Credit Limit *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select credit limit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="100000">$100,000</SelectItem>
                              <SelectItem value="250000">$250,000</SelectItem>
                              <SelectItem value="500000">$500,000</SelectItem>
                              <SelectItem value="1000000">$1,000,000</SelectItem>
                              <SelectItem value="custom">Custom Amount</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="monthlyPurchaseVolume">Expected Monthly Purchase Volume *</Label>
                          <Input id="monthlyPurchaseVolume" placeholder="$50,000" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredTerms">Preferred Payment Terms *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment terms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="net30">Net 30</SelectItem>
                              <SelectItem value="net45">Net 45</SelectItem>
                              <SelectItem value="net60">Net 60</SelectItem>
                              <SelectItem value="custom">Custom Terms</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Banking Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="primaryBank">Primary Bank *</Label>
                          <Input id="primaryBank" placeholder="First National Bank" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bankingRelationship">Years with Bank *</Label>
                          <Input id="bankingRelationship" type="number" placeholder="5" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bankContact">Bank Contact Person</Label>
                          <Input id="bankContact" placeholder="Jane Smith" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bankPhone">Bank Phone Number</Label>
                          <Input id="bankPhone" type="tel" placeholder="(555) 987-6543" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="creditFacilities">Existing Credit Facilities</Label>
                          <Textarea
                            id="creditFacilities"
                            placeholder="List any existing credit lines, loans, or financing arrangements..."
                            className="min-h-[80px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="accountant">CPA/Accountant Contact</Label>
                          <Input id="accountant" placeholder="Smith & Associates CPA" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Trade References</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Please provide at least 5 trade references with credit limits of $50,000 or higher.
                      </p>

                      {[1, 2, 3, 4, 5].map((ref) => (
                        <div key={ref} className="border rounded-lg p-4 mb-4">
                          <h4 className="font-medium mb-3">Reference {ref}</h4>
                          <div className="grid gap-4 md:grid-cols-4">
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
                            <div className="space-y-2">
                              <Label htmlFor={`ref${ref}CreditLimit`}>Credit Limit</Label>
                              <Input id={`ref${ref}CreditLimit`} placeholder="$100,000" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Executive Information</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="ceoName">CEO/President Name *</Label>
                          <Input id="ceoName" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ceoSSN">CEO/President SSN (last 4 digits) *</Label>
                          <Input id="ceoSSN" placeholder="1234" maxLength={4} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cfoName">CFO Name</Label>
                          <Input id="cfoName" placeholder="Jane Smith" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cfoSSN">CFO SSN (last 4 digits)</Label>
                          <Input id="cfoSSN" placeholder="5678" maxLength={4} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Required Documentation</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The following documents will be required to complete your application:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                        <li>• Last 3 years of audited financial statements</li>
                        <li>• Most recent interim financial statements</li>
                        <li>• Business tax returns (last 2 years)</li>
                        <li>• Bank statements (last 3 months)</li>
                        <li>• Personal financial statements for guarantors</li>
                        <li>• Articles of incorporation and bylaws</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <Link href="/terms-of-service" className="text-primary underline-offset-4 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and authorize TechWholesale to verify all information provided.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="creditCheck" required />
                        <Label htmlFor="creditCheck" className="text-sm">
                          I authorize comprehensive credit checks on the business and personal guarantors.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="personalGuarantee" required />
                        <Label htmlFor="personalGuarantee" className="text-sm">
                          I personally guarantee payment of all amounts owed under this credit facility.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="documentation" required />
                        <Label htmlFor="documentation" className="text-sm">
                          I understand that additional documentation will be required to complete this application.
                        </Label>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button type="submit" className="flex-1">
                        Submit Credit Line Application
                      </Button>
                      <Button type="button" variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href="/contact">Discuss Requirements</Link>
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
              <h2 className="text-3xl font-bold tracking-tighter">Application Process</h2>
              <div className="grid gap-4 md:grid-cols-4 mt-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <h3 className="font-medium mb-2">Submit Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete and submit your credit line application online.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <h3 className="font-medium mb-2">Documentation</h3>
                  <p className="text-sm text-muted-foreground">Provide required financial documents and references.</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <h3 className="font-medium mb-2">Review Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Our credit team reviews your application (5-10 business days).
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <h3 className="font-medium mb-2">Credit Decision</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive your credit decision and begin using your credit line.
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
