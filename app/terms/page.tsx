import Link from "next/link"
import { CreditCard, Calendar, Shield, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Credit Terms & Payment Options
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Flexible payment solutions designed to support your business growth and cash flow management.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 mb-12">
              <Card>
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Net 30 Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Pay invoices 30 days after delivery for qualified business customers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Calendar className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Extended Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Net 45 and Net 60 options available for preferred partners and high-volume customers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Credit Lines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Revolving credit lines from $100,000 to $1M+ for enterprise customers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Quick Approval</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fast credit decisions with most applications approved within 24-48 hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Payment Options</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Standard Payment Terms</CardTitle>
                    <CardDescription>Available to all verified business customers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Net 30</span>
                      <Badge>Most Popular</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pay invoices 30 days after delivery. Perfect for most businesses to manage cash flow effectively.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Available after credit approval</li>
                      <li>• No additional fees</li>
                      <li>• Automatic payment reminders</li>
                      <li>• Online payment portal access</li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="/credit-application">Apply for Net 30</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Extended Payment Terms</CardTitle>
                    <CardDescription>For preferred partners and high-volume customers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Net 45 / Net 60</span>
                      <Badge variant="secondary">Premium</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Extended payment terms for established customers with strong credit history and higher purchase
                      volumes.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Requires established relationship</li>
                      <li>• Minimum purchase commitments</li>
                      <li>• Enhanced credit approval process</li>
                      <li>• Dedicated account management</li>
                    </ul>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/credit-line-application">Apply for Extended Terms</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Credit Application Requirements</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Basic Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Valid business license</li>
                      <li>• Federal Tax ID (EIN)</li>
                      <li>• Minimum 2 years in business</li>
                      <li>• Professional business address</li>
                      <li>• Business bank account</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Financial Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Business financial statements</li>
                      <li>• Bank references</li>
                      <li>• Trade references (3 minimum)</li>
                      <li>• Credit history verification</li>
                      <li>• Annual revenue documentation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Completed credit application</li>
                      <li>• Signed terms agreement</li>
                      <li>• Personal guarantee (if required)</li>
                      <li>• Insurance certificates</li>
                      <li>• Additional forms as needed</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tighter mb-8">Terms and Conditions</h2>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
                <p className="mb-4">
                  All credit terms are subject to approval and may be modified based on credit evaluation, payment
                  history, and business relationship. Payment terms begin from the invoice date, not the delivery date.
                </p>

                <h3 className="text-xl font-semibold mb-3">Late Payment Policy</h3>
                <p className="mb-4">Accounts past due may be subject to the following:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Late fees of 1.5% per month on outstanding balances</li>
                  <li>Suspension of credit privileges</li>
                  <li>Requirement for prepayment or COD terms</li>
                  <li>Collection agency referral for severely delinquent accounts</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Credit Limits</h3>
                <p className="mb-4">Credit limits are established based on:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Business credit history and financial strength</li>
                  <li>Trade references and payment history</li>
                  <li>Length of business relationship</li>
                  <li>Purchase volume and frequency</li>
                  <li>Industry risk factors</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Security and Guarantees</h3>
                <p className="mb-4">Depending on the credit limit requested and business profile, we may require:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Personal guarantees from business owners</li>
                  <li>Corporate guarantees from parent companies</li>
                  <li>Security deposits for new accounts</li>
                  <li>Letters of credit for large credit lines</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Credit Review Process</h3>
                <p className="mb-4">Credit accounts are subject to periodic review and may be adjusted based on:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Payment performance and history</li>
                  <li>Changes in business financial condition</li>
                  <li>Industry and economic conditions</li>
                  <li>Credit bureau reports and updates</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Dispute Resolution</h3>
                <p className="mb-6">
                  Any disputes regarding invoices must be reported within 30 days of the invoice date. We encourage
                  early communication to resolve any billing questions or concerns promptly.
                </p>

                <h3 className="text-xl font-semibold mb-3">Modification of Terms</h3>
                <p className="mb-6">
                  TechWholesale reserves the right to modify credit terms, limits, or payment requirements at any time
                  with 30 days written notice. Continued use of credit facilities constitutes acceptance of modified
                  terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Apply?</h2>
              <p className="text-gray-500">
                Choose the credit option that best fits your business needs and start the application process today.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/credit-application">Apply for Net 30</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/credit-line-application">Apply for Credit Line</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions about credit terms?{" "}
                <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
                  Contact our credit team
                </Link>{" "}
                for personalized assistance.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
