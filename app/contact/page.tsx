"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Truck, CreditCard, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

const departments = [
  {
    id: "sales",
    name: "Sales",
    icon: MessageSquare,
    email: "sales@techpro.com",
    phone: "(555) 123-4567",
    description: "New orders, quotes, and product inquiries",
    hours: "Mon-Fri 8AM-6PM EST",
  },
  {
    id: "support",
    name: "Technical Support",
    icon: Headphones,
    email: "support@techpro.com",
    phone: "(555) 123-4568",
    description: "Product support and troubleshooting",
    hours: "24/7 Support Available",
  },
  {
    id: "shipping",
    name: "Shipping & Logistics",
    icon: Truck,
    email: "shipping@techpro.com",
    phone: "(555) 123-4569",
    description: "Order tracking and delivery inquiries",
    hours: "Mon-Fri 7AM-5PM EST",
  },
  {
    id: "billing",
    name: "Billing & Accounts",
    icon: CreditCard,
    email: "billing@techpro.com",
    phone: "(555) 123-4570",
    description: "Invoices, payments, and account management",
    hours: "Mon-Fri 9AM-5PM EST",
  },
]

const faqs = [
  {
    question: "What are your minimum order quantities?",
    answer:
      "Minimum order quantities vary by product category. Most items have a minimum of 5-10 units, while bulk items may require higher quantities. Contact our sales team for specific MOQ information.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Yes, we offer tiered volume discounts starting at 50+ units. Larger quantities receive progressively better pricing. Our sales team can provide custom quotes for your specific needs.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We offer NET 30 terms for approved business accounts, as well as credit card payments and wire transfers. New customers may require payment upfront until credit is established.",
  },
  {
    question: "How quickly can you ship orders?",
    answer:
      "In-stock items typically ship within 1-2 business days. Custom configurations may take 3-5 business days. We offer expedited shipping options for urgent orders.",
  },
  {
    question: "Do you provide technical support?",
    answer:
      "Yes, we provide comprehensive technical support including pre-sales consultation, installation guidance, and ongoing support. Our certified technicians are available 24/7 for critical issues.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      department: "",
      subject: "",
      message: "",
    })
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Message Sent Successfully!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for contacting us. We've received your message and will respond within 24 hours during business
              days.
            </p>
            <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground">
          Get in touch with our team for sales inquiries, support, or general questions
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          {/* Company Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">TechPro Distribution</h4>
                <p className="text-sm text-muted-foreground">
                  1234 Technology Drive
                  <br />
                  Business Park, Suite 100
                  <br />
                  Tech City, TC 12345
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">info@techpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Mon-Fri 8AM-6PM EST</span>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Support */}
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Emergency Support</CardTitle>
              <CardDescription>For critical system failures and urgent technical issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  <span className="font-semibold">(555) 911-TECH</span>
                </div>
                <Badge variant="destructive" className="text-xs">
                  24/7 Available
                </Badge>
                <p className="text-xs text-muted-foreground">
                  Additional charges may apply for after-hours emergency support
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Departments */}
          <Card>
            <CardHeader>
              <CardTitle>Department Directory</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {departments.map((dept, index) => (
                <div key={dept.id}>
                  <div className="flex items-start gap-3">
                    <dept.icon className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm">{dept.name}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{dept.description}</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs">{dept.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs">{dept.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs">{dept.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < departments.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Contact Form and FAQ */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="text-sm font-medium mb-2 block">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="department" className="text-sm font-medium mb-2 block">
                      Department
                    </label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) => handleInputChange("department", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.id}>
                            {dept.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    required
                  />
                </div>

                <Alert>
                  <AlertDescription>
                    By submitting this form, you agree to our privacy policy and consent to being contacted by our team
                    regarding your inquiry.
                  </AlertDescription>
                </Alert>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  {index < faqs.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
