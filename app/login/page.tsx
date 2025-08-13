"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Building, CreditCard, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate login validation
    if (email === "demo@company.com" && password === "demo123") {
      // Redirect to dashboard on success
      window.location.href = "/dashboard"
    } else {
      setError("Invalid email or password. Please try again.")
    }

    setIsLoading(false)
  }

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
                <CardTitle className="text-2xl">Sign In to Your Account</CardTitle>
                <CardDescription>
                  Access your wholesale business account to view pricing and place orders.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Alert className="mb-6 border-blue-200 bg-blue-50">
                  <AlertDescription className="text-blue-800">
                    <strong>Demo Account:</strong> Use email "demo@company.com" and password "demo123" to try the
                    platform.
                  </AlertDescription>
                </Alert>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have a business account?{" "}
                    <Link href="/register" className="text-primary underline-offset-4 hover:underline">
                      Register your business
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:justify-center lg:px-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Welcome to TechWholesale</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Your trusted partner for wholesale electronics distribution since 2010.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Business-Only Pricing</h3>
                    <p className="text-sm text-muted-foreground">
                      Access exclusive wholesale prices available only to verified business customers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CreditCard className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Flexible Payment Terms</h3>
                    <p className="text-sm text-muted-foreground">
                      Enjoy Net 30 payment terms and credit lines to help manage your cash flow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Fast & Reliable Shipping</h3>
                    <p className="text-sm text-muted-foreground">
                      Quick order processing and shipping from multiple distribution centers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/business-partnership-handshake.png"
                  alt="Business partnership"
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
