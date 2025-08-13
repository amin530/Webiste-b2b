import Link from "next/link"
import Image from "next/image"
import { Check, Star, TrendingUp, Users, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function PartnerPage() {
  const partnerTiers = [
    {
      name: "Authorized Reseller",
      description: "Perfect for small to medium businesses",
      monthlyMinimum: "$5,000",
      discount: "5-10%",
      features: [
        "Standard wholesale pricing",
        "Net 30 payment terms",
        "Basic product training",
        "Email support",
        "Standard shipping rates",
        "Quarterly business reviews",
      ],
      popular: false,
    },
    {
      name: "Preferred Partner",
      description: "Ideal for growing businesses",
      monthlyMinimum: "$25,000",
      discount: "10-15%",
      features: [
        "Enhanced wholesale pricing",
        "Net 45 payment terms",
        "Advanced product training",
        "Priority phone support",
        "Discounted shipping rates",
        "Monthly business reviews",
        "Marketing co-op funds",
        "Dedicated account manager",
      ],
      popular: true,
    },
    {
      name: "Elite Partner",
      description: "For high-volume enterprises",
      monthlyMinimum: "$100,000",
      discount: "15-25%",
      features: [
        "Maximum wholesale pricing",
        "Net 60 payment terms",
        "Comprehensive training program",
        "24/7 priority support",
        "Free shipping on orders $1000+",
        "Weekly business reviews",
        "Substantial marketing co-op",
        "Executive account management",
        "Custom product configurations",
        "Early access to new products",
      ],
      popular: false,
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Access to wholesale pricing tiers based on your purchase volume and commitment level.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account managers and priority support to help grow your business.",
    },
    {
      icon: Shield,
      title: "Reliable Supply Chain",
      description: "Consistent inventory availability and fast shipping from multiple distribution centers.",
    },
    {
      icon: Zap,
      title: "Business Growth Tools",
      description: "Marketing support, training programs, and business development resources.",
    },
  ]

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
                Become a TechWholesale Partner
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Join our partner program and unlock exclusive benefits, competitive pricing, and dedicated support to
                grow your technology business.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Why Partner with Us?</h2>
                <p className="text-muted-foreground mb-8">
                  Our partner program is designed to help technology resellers, system integrators, and service
                  providers succeed in today's competitive market. We provide the tools, support, and pricing you need
                  to win more deals and grow your business.
                </p>
                <div className="grid gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/business-partnership-handshake.png"
                  alt="Partnership success"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Partner Program Tiers</h2>
              <p className="text-gray-500">
                Choose the partnership level that best fits your business needs and growth goals.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {partnerTiers.map((tier, index) => (
                <Card key={index} className={`relative ${tier.popular ? "border-primary shadow-lg" : ""}`}>
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Star className="mr-1 h-3 w-3" />
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold">{tier.discount}</div>
                      <p className="text-sm text-muted-foreground">Average discount off MSRP</p>
                      <div className="text-lg font-semibold">{tier.monthlyMinimum}</div>
                      <p className="text-sm text-muted-foreground">Monthly minimum purchase</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-6 ${tier.popular ? "" : "variant-outline bg-transparent"}`}
                      variant={tier.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/register">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Application Process</h2>
              <p className="text-gray-500">Getting started as a TechWholesale partner is simple and straightforward.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-muted-foreground">
                  Complete our online partner application with your business information and requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="font-semibold mb-2">Business Review</h3>
                <p className="text-sm text-muted-foreground">
                  Our team reviews your application and verifies your business credentials and references.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="font-semibold mb-2">Partner Agreement</h3>
                <p className="text-sm text-muted-foreground">
                  Sign the partner agreement and complete any required training or certification programs.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <h3 className="font-semibold mb-2">Start Selling</h3>
                <p className="text-sm text-muted-foreground">
                  Access your partner portal, place orders, and start growing your business with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Partner Requirements</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Business Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Valid business license and tax ID</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Minimum 2 years in business</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Technology reseller or service provider</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Professional business location</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Established customer base</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Financial Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Good credit history and references</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Meet minimum purchase commitments</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Financial statements (if required)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Bank references</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Trade references from suppliers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
              <p className="text-gray-500">
                Join thousands of successful partners who trust TechWholesale for their technology distribution needs.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/register">Apply for Partnership</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Sales Team</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions about our partner program?{" "}
                <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
                  Contact our partner team
                </Link>{" "}
                for more information.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
