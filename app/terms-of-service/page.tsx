import Link from "next/link"
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                These terms govern your use of our wholesale electronics distribution services and platform.
              </p>
              <p className="text-sm text-muted-foreground">Last updated: January 1, 2024</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Agreement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      By using our services, you agree to these terms and conditions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Scale className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Fair Use</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our services are intended for legitimate business use only.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We protect both your interests and ours through clear terms.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      All users must comply with applicable laws and regulations.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using TechWholesale's services, website, or platform, you agree to be bound by these
                  Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms,
                  you are prohibited from using our services.
                </p>

                <h2 className="text-2xl font-bold">2. Wholesale Account Requirements</h2>
                <p>Our services are exclusively for qualified business customers:</p>
                <ul>
                  <li>You must be a registered business entity</li>
                  <li>You must provide valid business credentials and tax identification</li>
                  <li>You must pass our credit approval process</li>
                  <li>You must maintain good standing with payment obligations</li>
                  <li>You must use products for business purposes, not personal use</li>
                </ul>

                <h2 className="text-2xl font-bold">3. Account Responsibilities</h2>
                <p>As an account holder, you are responsible for:</p>
                <ul>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and current business information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring authorized personnel have appropriate access levels</li>
                </ul>

                <h2 className="text-2xl font-bold">4. Orders and Pricing</h2>
                <p>Order terms and conditions:</p>
                <ul>
                  <li>All orders are subject to acceptance and product availability</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Minimum order requirements may apply</li>
                  <li>Custom orders may have different terms and conditions</li>
                  <li>We reserve the right to limit quantities or refuse orders</li>
                </ul>

                <h2 className="text-2xl font-bold">5. Payment Terms</h2>
                <p>Payment obligations and terms:</p>
                <ul>
                  <li>Payment terms are established during account setup</li>
                  <li>Net 30 terms are available to qualified customers</li>
                  <li>Late payments may incur fees and affect credit terms</li>
                  <li>We reserve the right to require prepayment or security deposits</li>
                  <li>Disputed charges must be reported within 30 days</li>
                </ul>

                <h2 className="text-2xl font-bold">6. Shipping and Delivery</h2>
                <p>Shipping terms and responsibilities:</p>
                <ul>
                  <li>Risk of loss transfers upon shipment from our facility</li>
                  <li>Delivery dates are estimates, not guarantees</li>
                  <li>You are responsible for providing accurate shipping information</li>
                  <li>Additional charges may apply for special shipping requirements</li>
                  <li>Damaged shipments must be reported within 48 hours</li>
                </ul>

                <h2 className="text-2xl font-bold">7. Returns and Warranties</h2>
                <p>Return and warranty policies:</p>
                <ul>
                  <li>Returns must be authorized and comply with our return policy</li>
                  <li>Restocking fees may apply to returned merchandise</li>
                  <li>Manufacturer warranties apply to all products</li>
                  <li>We are not responsible for consequential or indirect damages</li>
                  <li>Custom orders and software are generally non-returnable</li>
                </ul>

                <h2 className="text-2xl font-bold">8. Intellectual Property</h2>
                <p>Intellectual property rights and restrictions:</p>
                <ul>
                  <li>All content on our platform is protected by copyright and trademarks</li>
                  <li>You may not reproduce, distribute, or modify our content without permission</li>
                  <li>Product images and descriptions are for reference only</li>
                  <li>Third-party trademarks are property of their respective owners</li>
                </ul>

                <h2 className="text-2xl font-bold">9. Prohibited Uses</h2>
                <p>You may not use our services for:</p>
                <ul>
                  <li>Any unlawful purpose or to solicit unlawful acts</li>
                  <li>Violating any international, federal, provincial, or state regulations or laws</li>
                  <li>Transmitting or procuring harmful code, viruses, or malware</li>
                  <li>Collecting or tracking personal information of others</li>
                  <li>Interfering with or disrupting our services or servers</li>
                </ul>

                <h2 className="text-2xl font-bold">10. Limitation of Liability</h2>
                <p>
                  Our liability is limited to the maximum extent permitted by law. We are not liable for indirect,
                  incidental, special, consequential, or punitive damages, including lost profits, data, or business
                  interruption.
                </p>

                <h2 className="text-2xl font-bold">11. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless TechWholesale and its affiliates from any claims, damages, or
                  expenses arising from your use of our services or violation of these terms.
                </p>

                <h2 className="text-2xl font-bold">12. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately for any breach of these terms. Upon termination,
                  your right to use our services ceases immediately, but payment obligations remain in effect.
                </p>

                <h2 className="text-2xl font-bold">13. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the state where our business is incorporated, without regard
                  to conflict of law provisions. Any disputes will be resolved in the courts of that jurisdiction.
                </p>

                <h2 className="text-2xl font-bold">14. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting. Your continued use of our services constitutes acceptance of the modified terms.
                </p>

                <h2 className="text-2xl font-bold">15. Contact Information</h2>
                <p>For questions about these terms, contact us:</p>
                <ul>
                  <li>Email: legal@techwholesale.com</li>
                  <li>Phone: (800) 555-1234</li>
                  <li>Mail: TechWholesale Legal Department, 123 Business Ave, Suite 100, City, State 12345</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Questions About Our Terms?</h2>
              <p className="text-gray-500">
                Our legal team is available to help clarify any questions about our terms of service.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Legal Team</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:legal@techwholesale.com">Email Legal Questions</a>
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
