"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Building, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Business Information
    companyName: "",
    businessType: "",
    taxId: "",
    yearsInBusiness: "",
    website: "",

    // Contact Information
    contactName: "",
    email: "",
    phone: "",
    title: "",

    // Address Information
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",

    // Account Information
    password: "",
    confirmPassword: "",

    // Agreements
    termsAccepted: false,
    privacyAccepted: false,
    marketingOptIn: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Redirect to success page or dashboard
    window.location.href = "/dashboard"
  }

  const steps = [
    { number: 1, title: "Business Info", description: "Company details" },
    { number: 2, title: "Contact Info", description: "Your information" },
    { number: 3, title: "Address", description: "Business location" },
    { number: 4, title: "Account Setup", description: "Create account" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid lg:grid-cols-2 lg:gap-8 py-8">
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl">Create Business Account</CardTitle>
                <CardDescription>
                  Register your business to access wholesale pricing and exclusive benefits.
                </CardDescription>

                {/* Progress Steps */}
                <div className="flex items-center justify-between mt-6">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                          currentStep >= step.number
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {currentStep > step.number ? <CheckCircle className="h-4 w-4" /> : step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`h-px w-8 ${currentStep > step.number ? "bg-primary" : "bg-muted"}`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium">{steps[currentStep - 1].title}</p>
                  <p className="text-xs text-muted-foreground">{steps[currentStep - 1].description}</p>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Step 1: Business Information */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          placeholder="ABC Technology Solutions"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select
                          value={formData.businessType}
                          onValueChange={(value) => handleInputChange("businessType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="reseller">Technology Reseller</SelectItem>
                            <SelectItem value="integrator">System Integrator</SelectItem>
                            <SelectItem value="consultant">IT Consultant</SelectItem>
                            <SelectItem value="retailer">Retailer</SelectItem>
                            <SelectItem value="education">Educational Institution</SelectItem>
                            <SelectItem value="government">Government Agency</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxId">Tax ID (EIN) *</Label>
                        <Input
                          id="taxId"
                          placeholder="12-3456789"
                          value={formData.taxId}
                          onChange={(e) => handleInputChange("taxId", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                        <Select
                          value={formData.yearsInBusiness}
                          onValueChange={(value) => handleInputChange("yearsInBusiness", value)}
                        >
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
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://yourcompany.com"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact Information */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Full Name *</Label>
                        <Input
                          id="contactName"
                          placeholder="John Doe"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange("contactName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Business Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Job Title *</Label>
                        <Input
                          id="title"
                          placeholder="President, IT Manager, etc."
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Address Information */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          placeholder="123 Business Ave"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            placeholder="Atlanta"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            placeholder="GA"
                            value={formData.state}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            placeholder="30309"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange("zipCode", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country *</Label>
                          <Select
                            value={formData.country}
                            onValueChange={(value) => handleInputChange("country", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Account Setup */}
                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password *</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password *</Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={formData.termsAccepted}
                            onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                            required
                          />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the{" "}
                            <Link href="/terms-of-service" className="text-primary underline-offset-4 hover:underline">
                              Terms of Service
                            </Link>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="privacy"
                            checked={formData.privacyAccepted}
                            onCheckedChange={(checked) => handleInputChange("privacyAccepted", checked as boolean)}
                            required
                          />
                          <Label htmlFor="privacy" className="text-sm">
                            I agree to the{" "}
                            <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="marketing"
                            checked={formData.marketingOptIn}
                            onCheckedChange={(checked) => handleInputChange("marketingOptIn", checked as boolean)}
                          />
                          <Label htmlFor="marketing" className="text-sm">
                            I would like to receive product updates and promotional offers
                          </Label>
                        </div>
                      </div>

                      <Alert className="border-blue-200 bg-blue-50">
                        <AlertDescription className="text-blue-800">
                          Your account will be reviewed within 2-3 business days. You'll receive an email confirmation
                          once approved.
                        </AlertDescription>
                      </Alert>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    {currentStep > 1 && (
                      <Button type="button" variant="outline" onClick={handlePrevious} className="bg-transparent">
                        Previous
                      </Button>
                    )}
                    {currentStep < 4 ? (
                      <Button type="button" onClick={handleNext} className="ml-auto">
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isLoading} className="ml-auto">
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                    )}
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:justify-center lg:px-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Join TechWholesale Today</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Get access to exclusive wholesale pricing and business benefits.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Wholesale Pricing</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to exclusive business pricing with volume discounts and special rates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Credit Terms</h3>
                    <p className="text-sm text-muted-foreground">
                      Flexible payment options including Net 30 terms for qualified businesses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Priority Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Dedicated account management and priority customer support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/business-laptops.png"
                  alt="Business technology solutions"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
