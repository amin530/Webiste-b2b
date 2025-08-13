"use client"

import { Label } from "@/components/ui/label"

import Link from "next/link"
import { Package, TrendingUp, CreditCard, Bell, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  const recentOrders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "Shipped",
      total: 2450.0,
      items: 5,
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-12",
      status: "Delivered",
      total: 1875.5,
      items: 3,
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-10",
      status: "Processing",
      total: 3200.0,
      items: 8,
    },
    {
      id: "ORD-2024-004",
      date: "2024-01-08",
      status: "Delivered",
      total: 950.0,
      items: 2,
    },
  ]

  const accountSummary = {
    creditLimit: 50000,
    availableCredit: 35750,
    currentBalance: 14250,
    nextPaymentDue: "2024-02-15",
    nextPaymentAmount: 8500,
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
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's an overview of your account activity.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button asChild>
                <Link href="/catalog">Browse Products</Link>
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available Credit</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${accountSummary.availableCredit.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">of ${accountSummary.creditLimit.toLocaleString()} limit</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${accountSummary.currentBalance.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Due {accountSummary.nextPaymentDue}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recentOrders.length}</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${accountSummary.nextPaymentAmount.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Due in 12 days</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="orders">Recent Orders</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Order History</h3>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search orders..." className="w-[200px] pl-8" />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                order.status === "Delivered"
                                  ? "default"
                                  : order.status === "Shipped"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{order.items} items</TableCell>
                          <TableCell className="text-right">${order.total.toLocaleString()}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/orders/${order.id}`}>View</Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link href="/orders">View All Orders</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="invoices" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Invoice Management</h3>
                  <Button variant="outline" asChild>
                    <Link href="/invoices">View All Invoices</Link>
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Outstanding Invoices</CardTitle>
                      <CardDescription>Invoices requiring payment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${accountSummary.currentBalance.toLocaleString()}</div>
                      <p className="text-sm text-muted-foreground mt-2">3 invoices due within 30 days</p>
                      <Button className="mt-4" asChild>
                        <Link href="/invoices/outstanding">Pay Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Payment History</CardTitle>
                      <CardDescription>Recent payment activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Last Payment</span>
                          <span className="text-sm font-medium">$5,250.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Payment Date</span>
                          <span className="text-sm">Jan 15, 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Payment Method</span>
                          <span className="text-sm">ACH Transfer</span>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-4 w-full bg-transparent" asChild>
                        <Link href="/payments/history">View History</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="account" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Account Information</h3>
                  <Button variant="outline" asChild>
                    <Link href="/profile">Edit Profile</Link>
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Credit Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Credit Limit</span>
                        <span className="font-medium">${accountSummary.creditLimit.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Available Credit</span>
                        <span className="font-medium text-green-600">
                          ${accountSummary.availableCredit.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Current Balance</span>
                        <span className="font-medium">${accountSummary.currentBalance.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment Terms</span>
                        <span className="font-medium">Net 30</span>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href="/credit-line-application">Request Credit Increase</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Notifications</Label>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Order Updates</span>
                            <Badge variant="secondary">Enabled</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Payment Reminders</span>
                            <Badge variant="secondary">Enabled</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Product Updates</span>
                            <Badge variant="outline">Disabled</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href="/profile/settings">Manage Settings</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="support" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Support & Resources</h3>
                  <Button asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Help</CardTitle>
                      <CardDescription>Common questions and resources</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/faq">Frequently Asked Questions</Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/warranty-returns">Returns & Warranties</Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/terms">Credit Terms</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Account Support</CardTitle>
                      <CardDescription>Get help with your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <a href="tel:+18005551234">Call: (800) 555-1234</a>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <a href="mailto:support@techwholesale.com">Email Support</a>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/contact">Submit Ticket</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Resources</CardTitle>
                      <CardDescription>Helpful tools and information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/catalog">Product Catalog</Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/news">Latest Updates</Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/about">About Us</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
