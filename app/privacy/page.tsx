import { Shield, Eye, Lock, UserCheck } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-muted-foreground">Last updated: January 15, 2024</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Data Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We use industry-standard security measures to protect your personal and business information.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Eye className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Transparency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We're transparent about what data we collect and how we use it to improve your experience.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Lock className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Secure Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Your data is encrypted and stored securely with regular backups and monitoring.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <UserCheck className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      You have full control over your data with rights to access, update, or delete your information.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

                <h3 className="text-xl font-semibold mb-3">Business Information</h3>
                <p className="mb-4">
                  When you register for a business account, we collect information necessary to verify your business and
                  provide wholesale services:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Company name, address, and contact information</li>
                  <li>Business license and tax identification numbers</li>
                  <li>Authorized representative details</li>
                  <li>Banking and credit information for payment processing</li>
                  <li>Trade references and business history</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Account Information</h3>
                <p className="mb-4">To manage your account and provide personalized service, we collect:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Login credentials and account preferences</li>
                  <li>Order history and purchase patterns</li>
                  <li>Communication preferences and support interactions</li>
                  <li>Website usage data and analytics</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Technical Information</h3>
                <p className="mb-4">We automatically collect certain technical information to improve our services:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>IP address, browser type, and device information</li>
                  <li>Pages visited, time spent, and navigation patterns</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Error logs and performance data</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8">How We Use Your Information</h2>

                <h3 className="text-xl font-semibold mb-3">Service Delivery</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Process and fulfill your orders</li>
                  <li>Manage your account and provide customer support</li>
                  <li>Verify your business credentials and creditworthiness</li>
                  <li>Communicate about orders, payments, and account status</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Business Operations</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Analyze purchasing patterns to improve inventory management</li>
                  <li>Develop new products and services</li>
                  <li>Conduct market research and business analytics</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Marketing and Communications</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Send product updates and promotional offers (with your consent)</li>
                  <li>Provide relevant product recommendations</li>
                  <li>Invite you to participate in surveys or feedback programs</li>
                  <li>Share industry news and educational content</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8">Information Sharing</h2>

                <p className="mb-4">
                  We do not sell, rent, or trade your personal information. We may share your information only in the
                  following circumstances:
                </p>

                <h3 className="text-xl font-semibold mb-3">Service Providers</h3>
                <p className="mb-4">
                  We work with trusted third-party service providers who help us operate our business:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Payment processors for secure transaction handling</li>
                  <li>Shipping companies for order fulfillment</li>
                  <li>Credit agencies for business verification</li>
                  <li>Technology providers for website and system maintenance</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Legal Requirements</h3>
                <p className="mb-6">
                  We may disclose information when required by law, such as in response to court orders, legal
                  proceedings, or regulatory requests.
                </p>

                <h3 className="text-xl font-semibold mb-3">Business Transfers</h3>
                <p className="mb-6">
                  In the event of a merger, acquisition, or sale of assets, customer information may be transferred as
                  part of the business transaction.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Data Security</h2>

                <p className="mb-4">We implement comprehensive security measures to protect your information:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular data backups and disaster recovery procedures</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8">Your Rights and Choices</h2>

                <h3 className="text-xl font-semibold mb-3">Access and Control</h3>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Access and review your personal information</li>
                  <li>Update or correct inaccurate information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt out of marketing communications</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Communication Preferences</h3>
                <p className="mb-6">
                  You can manage your communication preferences through your account settings or by contacting us
                  directly. You can opt out of promotional emails while still receiving important account and order
                  notifications.
                </p>

                <h3 className="text-xl font-semibold mb-3">Cookies and Tracking</h3>
                <p className="mb-6">
                  You can control cookie settings through your browser preferences. However, disabling certain cookies
                  may affect the functionality of our website.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Data Retention</h2>

                <p className="mb-6">
                  We retain your information for as long as necessary to provide our services and comply with legal
                  obligations. Business records may be retained for up to 7 years for tax and regulatory purposes. You
                  can request deletion of your account at any time, subject to legal retention requirements.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">International Data Transfers</h2>

                <p className="mb-6">
                  Our services are primarily operated in the United States. If you are located outside the US, your
                  information may be transferred to and processed in the United States. We ensure appropriate safeguards
                  are in place for international data transfers.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Children's Privacy</h2>

                <p className="mb-6">
                  Our services are designed for businesses and are not intended for individuals under 18 years of age.
                  We do not knowingly collect personal information from children under 18.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Changes to This Policy</h2>

                <p className="mb-6">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal
                  requirements. We will notify you of significant changes by email or through our website. The "Last
                  updated" date at the top of this policy indicates when it was last revised.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>

                <p className="mb-4">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="mb-2">
                    <strong>TechWholesale Privacy Team</strong>
                  </p>
                  <p className="mb-2">123 Technology Drive, Suite 200</p>
                  <p className="mb-2">Atlanta, GA 30309</p>
                  <p className="mb-2">
                    Email:{" "}
                    <a
                      href="mailto:privacy@techwholesale.com"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      privacy@techwholesale.com
                    </a>
                  </p>
                  <p className="mb-2">
                    Phone:{" "}
                    <a href="tel:+18005551234" className="text-primary underline-offset-4 hover:underline">
                      (800) 555-1234
                    </a>
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
