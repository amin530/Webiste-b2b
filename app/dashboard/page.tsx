'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AlertCircle, CheckCircle2, Clock, Package, ShoppingCart, TrendingUp } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"

export default function DashboardPage() {
  const { user, businessProfile, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background">
          <div className="container flex h-16 items-center">
            <MainNav />
          </div>
        </header>
        <main className="flex-1">
          <div className="container py-12">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
                <p>Loading dashboard...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const getStatusAlert = () => {
    if (!businessProfile) {
      return (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Business profile not found. Please contact support.
          </AlertDescription>
        </Alert>
      )
    }

    switch (businessProfile.status) {
      case 'pending':
        return (
          <Alert>
            <Clock className="h-4 w-4" />
            <AlertDescription>
              Your business account is under review. Our team will contact you within 2 business days to complete the verification process.
            </AlertDescription>
          </Alert>
        )
      case 'approved':
        return (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Your business account has been approved! You now have access to wholesale pricing and can place orders.
            </AlertDescription>
          </Alert>
        )
      case 'rejected':
        return (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Your business account application was not approved. Please contact our sales team for more information.
            </AlertDescription>
          </Alert>
        )
      default:
        return null
    }
  }

  const isApproved = businessProfile?.status === 'approved'

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back, {businessProfile?.contact_name || 'User'}
              </h1>
              <p className="text-muted-foreground">
                {businessProfile?.company_name && `${businessProfile.company_name} • `}
                Manage your wholesale account and orders
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={
                businessProfile?.status === 'approved' ? 'bg-green-50 text-green-700' :
                businessProfile?.status === 'pending' ? 'bg-yellow-50 text-yellow-700' :
                'bg-red-50 text-red-700'
              }>
                {businessProfile?.status === 'approved' ? 'Approved' :
                 businessProfile?.status === 'pending' ? 'Pending' :
                 'Rejected'}
              </Badge>
            </div>
          </div>

          <div className="mt-6">
            {getStatusAlert()}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Account Status</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold capitalize">
                  {businessProfile?.status || 'Unknown'}
                </div>
                <p className="text-xs text-muted-foreground">
                  Business verification status
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">
                  Orders placed this month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products Available</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isApproved ? '1,200+' : '---'}
                </div>
                <p className="text-xs text-muted-foreground">
                  Wholesale products in catalog
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isApproved ? '$0' : '---'}
                </div>
                <p className="text-xs text-muted-foreground">
                  Total savings this month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts for your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link href={isApproved ? "/catalog" : "/login"}>
                    <Package className="mr-2 h-4 w-4" />
                    {isApproved ? "Browse Products" : "View Catalog (Login Required)"}
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link href="/profile">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Update Profile
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link href="/contact">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Contact Support
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Your business account details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Company</p>
                    <p className="text-muted-foreground">{businessProfile?.company_name || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="font-medium">Business Type</p>
                    <p className="text-muted-foreground capitalize">{businessProfile?.business_type || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-muted-foreground">{businessProfile?.contact_name || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/profile">
                    View Full Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {!isApproved && (
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                  <CardDescription>
                    Complete these steps to activate your wholesale account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Account created</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Business information submitted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm">Awaiting business verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-muted-foreground">Access to wholesale pricing</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
