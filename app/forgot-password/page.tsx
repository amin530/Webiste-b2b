"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
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
                <CardTitle className="text-2xl text-center">Check Your Email</CardTitle>
                <CardDescription className="text-center">
                  We've sent password reset instructions to your email address.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="border-green-200 bg-green-50">
                  <Mail className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    If an account with email {email} exists, you will receive a password reset link shortly.
                  </AlertDescription>
                </Alert>
                <div className="mt-6 space-y-4">
                  <Button className="w-full" asChild>
                    <Link href="/login">Return to Login</Link>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Didn't receive the email? Check your spam folder or{" "}
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      try again
                    </button>
                  </p>
                </div>
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
        <div className="container flex items-center justify-center py-12">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="/login">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back to login</span>
                  </Link>
                </Button>
              </div>
              <CardTitle className="text-2xl">Reset Your Password</CardTitle>
              <CardDescription>
                Enter your email address and we'll send you a link to reset your password.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Remember your password?{" "}
                  <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
