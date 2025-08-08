'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Upload } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function CreditLineApplicationPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    requestedCreditLine: '',
    annualRevenue: '',
    yearsInBusiness: '',
    businessDescription: '',
    bankName: '',
    bankContact: '',
    bankPhone: '',
    accountantName: '',
    accountantPhone: '',
    tradeReference1: '',
    tradeReference2: '',
    tradeReference3: '',
    additionalInfo: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background">
          <div className="container flex h-16 items-center">
            <MainNav />
          </div>
        </header>
        <main className="flex-1">
          <div className="container flex items-center justify-center py-12">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Application Submitted!</CardTitle>
                <CardDescription className="text-center">
                  Your credit line application has been received and is under review.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="border-green-200 bg-green-50">
                  <FileText className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Our credit team will review your application and contact you within 5-7 business days with a decision. You may be contacted for additional documentation.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8 flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/terms">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to credit terms</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Business Credit Line Application</h1>
              <p className="text-muted-foreground">
                Apply for a revolving credit line for your business account
              </p>
            </div>
          </div>

          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Credit Line Application Form</CardTitle>
              <CardDescription>
                Please provide comprehensive information to apply for a business credit line. Additional documentation may be required.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Business Information</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name *</Label>
                      <Input
                        id="company-name"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Name *</Label>
                      <Input
                        id="contact-name"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="credit-line">Requested Credit Line *</Label>
                      <Select value={formData.requestedCreditLine} onValueChange={(value) => handleInputChange('requestedCreditLine', value)}>
                        <SelectTrigger id="credit-line">
                          <SelectValue placeholder="Select credit line amount" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25000">$25,000</SelectItem>
                          <SelectItem value="50000">$50,000</SelectItem>
                          <SelectItem value="100000">$100,000</SelectItem>
                          <SelectItem value="250000">$250,000</SelectItem>
                          <SelectItem value="500000">$500,000</SelectItem>
                          <SelectItem value="custom">Custom Amount</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="annual-revenue">Annual Revenue *</Label>
                      <Select value={formData.annualRevenue} onValueChange={(value) => handleInputChange('annualRevenue', value)}>
                        <SelectTrigger id="annual-revenue">
                          <SelectValue placeholder="Select annual revenue" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                          <SelectItem value="10m+">$10M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="years-business">Years in Business *</Label>
                      <Select value={formData.yearsInBusiness} onValueChange={(value) => handleInputChange('yearsInBusiness', value)}>
                        <SelectTrigger id="years-business">
                          <SelectValue placeholder="Select years" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="business-description">Business Description *</Label>
                      <Textarea
                        id="business-description"
                        placeholder="Describe your business, products/services, and target market..."
                        value={formData.businessDescription}
                        onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                        required
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Financial References</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="bank-name">Primary Bank *</Label>
                      <Input
                        id="bank-name"
                        value={formData.bankName}
                        onChange={(e) => handleInputChange('bankName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bank-contact">Bank Contact Person</Label>
                      <Input
                        id="bank-contact"
                        value={formData.bankContact}
                        onChange={(e) => handleInputChange('bankContact', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bank-phone">Bank Phone *</Label>
                      <Input
                        id="bank-phone"
                        type="tel"
                        value={formData.bankPhone}
                        onChange={(e) => handleInputChange('bankPhone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accountant-name">Accountant/CPA Name</Label>
                      <Input
                        id="accountant-name"
                        value={formData.accountantName}
                        onChange={(e) => handleInputChange('accountantName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accountant-phone">Accountant Phone</Label>
                      <Input
                        id="accountant-phone"
                        type="tel"
                        value={formData.accountantPhone}
                        onChange={(e) => handleInputChange('accountantPhone', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Trade References</h3>
                  <p className="text-sm text-muted-foreground">
                    Please provide at least 3 trade references with established credit relationships.
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="trade-ref-1">Trade Reference 1 *</Label>
                    <Input
                      id="trade-ref-1"
                      placeholder="Company Name, Contact, Phone, Credit Limit"
                      value={formData.tradeReference1}
                      onChange={(e) => handleInputChange('tradeReference1', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trade-ref-2">Trade Reference 2 *</Label>
                    <Input
                      id="trade-ref-2"
                      placeholder="Company Name, Contact, Phone, Credit Limit"
                      value={formData.tradeReference2}
                      onChange={(e) => handleInputChange('tradeReference2', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trade-ref-3">Trade Reference 3 *</Label>
                    <Input
                      id="trade-ref-3"
                      placeholder="Company Name, Contact, Phone, Credit Limit"
                      value={formData.tradeReference3}
                      onChange={(e) => handleInputChange('tradeReference3', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Additional Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    The following documents may be required for processing your application:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Financial statements (last 2 years)</li>
                    <li>Tax returns (business and personal)</li>
                    <li>Bank statements (last 3 months)</li>
                    <li>Business registration documents</li>
                  </ul>
                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Any additional information that may help with your credit line application..."
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <Alert>
                  <FileText className="h-4 w-4" />
                  <AlertDescription>
                    By submitting this application, you authorize us to obtain credit reports and verify the information provided. Our credit team may contact you for additional documentation.
                  </AlertDescription>
                </Alert>

                <div className="flex justify-end">
                  <Button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </CardContent>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
