import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I apply for a wholesale account?",
      answer:
        "To apply for a wholesale account, click on 'Become a Partner' in our navigation menu and fill out the application form. You'll need to provide your business information, tax ID, and trade references. Our team will review your application within 2-3 business days.",
    },
    {
      question: "What are your minimum order requirements?",
      answer:
        "Our minimum order value is $500 for most products. Some specialty items may have different minimums. There are no minimum quantity requirements per item - you can order as few as one unit of any product.",
    },
    {
      question: "Do you offer Net 30 payment terms?",
      answer:
        "Yes, we offer Net 30 payment terms to qualified businesses after credit approval. New customers may need to start with prepayment or credit card payments until credit terms are established. We also accept wire transfers and ACH payments.",
    },
    {
      question: "How quickly do you ship orders?",
      answer:
        "Orders placed before 2 PM EST typically ship the same day. Most orders are delivered within 1-3 business days depending on your location. We offer expedited shipping options for urgent orders.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase for unopened items in original packaging. A 15% restocking fee may apply. Defective items can be returned for full credit or exchange. Custom or special order items are non-returnable unless defective.",
    },
    {
      question: "Do you provide product warranties?",
      answer:
        "All products come with manufacturer warranties. We also offer extended warranty options on select items. Our team can help you understand warranty terms and assist with warranty claims when needed.",
    },
    {
      question: "Can I get volume discounts?",
      answer:
        "Yes, we offer volume discounts based on order quantity and your overall purchase volume. Pricing tiers are automatically applied to your account. Contact your account manager to discuss custom pricing for large volume purchases.",
    },
    {
      question: "Do you have an API for integration?",
      answer:
        "Yes, we offer a comprehensive REST API that allows you to integrate our catalog, inventory, and ordering system with your applications. API access is available to approved wholesale customers. Contact our technical team for documentation and access.",
    },
    {
      question: "What brands do you carry?",
      answer:
        "We carry products from leading manufacturers including Dell, HP, Lenovo, Apple, ASUS, Cisco, Ubiquiti, Samsung, LG, and many others. Our catalog includes laptops, networking equipment, accessories, gaming products, servers, and displays.",
    },
    {
      question: "How can I track my orders?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can also log into your account portal to view order status and tracking information. Our customer service team is available to help with any order inquiries.",
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
                Frequently Asked Questions
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Find answers to common questions about our wholesale services, ordering process, and policies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-slate-50 transition-colors">
                        <CardTitle className="flex items-center justify-between text-left text-lg">
                          {faq.question}
                          <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                        </CardTitle>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Still Have Questions?</h2>
              <p className="text-gray-500">
                Our customer service team is here to help. Contact us for personalized assistance with your wholesale
                needs.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+18005551234">Call (800) 555-1234</a>
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
