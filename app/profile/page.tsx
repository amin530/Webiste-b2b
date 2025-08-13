"use client"

import { useState } from "react"
import Link from "next/link"
import { Building, CreditCard, Users, Bell, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    companyName: "ABC Technology Solutions",
    contactName: "John Doe",
    email: "john@abctech.com",
    phone: "(555) 123-4567",
    address: "123 Business Ave",
    city: "Atlanta",
    state: "GA",
    zipCode: "30309",
    businessType: "Technology Reseller",
    taxId: "12-3456789",
    website: "https://abctech.com",
    description: "Leading technology solutions provider specializing in business hardware and networking equipment.",
  })

  const teamMembers = [
    {
      name: "John Doe",
      email: "john@abctech.com",
      role: "Administrator",
      status: "Active",
      lastLogin: "2024-01-15",
    },
    {
      name: "Jane Smith",
      email: "jane@abctech.com",
      role: "Purchaser",
      status: "Active",
      lastLogin: "2024-01-14",
    },
    {
      name: "Mike Johnson",
      email: "mike@abctech.com",
      role: "Viewer",
      status: "Pending",
      lastLogin: "Never",
    },
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to your backend
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
              <h1 className="text-3xl font-bold tracking-tight">Account Profile</h1>
              <p className="text-muted-foreground">Manage your business account information and settings</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700">
                Verified Business
              </Badge>
              <Button variant="outline" asChild>
                <Link href="/dashboard">Back to Dashboard</Link>
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <Tabs defaultValue="business" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="business">Business Info</TabsTrigger>
                <TabsTrigger value="users">Team Members</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="business" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Building className="h-5 w-5" />
                          Business Information
                        </CardTitle>
                        <CardDescription>Update your company details and contact information</CardDescription>
                      </div>
                      <Button
                        variant={isEditing ? "default" : "outline"}
                        onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                      >
                        {isEditing ? "Save Changes" : "Edit Profile"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          value={profileData.companyName}
                          onChange={(e) => setProfileData({ ...profileData, companyName: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Primary Contact</Label>
                        <Input
                          id="contactName"
                          value={profileData.contactName}
                          onChange={(e) => setProfileData({ ...profileData, contactName: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          value={profileData.address}
                          onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={profileData.city}
                          onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={profileData.state}
                          onChange={(e) => setProfileData({ ...profileData, state: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={profileData.zipCode}
                          onChange={(e) => setProfileData({ ...profileData, zipCode: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type</Label>
                        <Select disabled={!isEditing}>
                          <SelectTrigger>
                            <SelectValue placeholder={profileData.businessType} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="reseller">Technology Reseller</SelectItem>
                            <SelectItem value="integrator">System Integrator</SelectItem>
                            <SelectItem value="consultant">IT Consultant</SelectItem>
                            <SelectItem value="retailer">Retailer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxId">Tax ID (EIN)</Label>
                        <Input
                          id="taxId"
                          value={profileData.taxId}
                          onChange={(e) => setProfileData({ ...profileData, taxId: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          type="url"
                          value={profileData.website}
                          onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="description">Business Description</Label>
                        <Textarea
                          id="description"
                          value={profileData.description}
                          onChange={(e) => setProfileData({ ...profileData, description: e.target.value })}
                          disabled={!isEditing}
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          Team Members
                        </CardTitle>
                        <CardDescription>Manage user access and permissions for your account</CardDescription>
                      </div>
                      <Button>Invite User</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Login</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {teamMembers.map((member, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{member.name}</TableCell>
                            <TableCell>{member.email}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{member.role}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant={member.status === "Active" ? "default" : "secondary"}>
                                {member.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{member.lastLogin}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="billing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Billing Information
                    </CardTitle>
                    <CardDescription>Manage your payment methods and billing preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Credit Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between">
                            <span>Credit Limit</span>
                            <span className="font-medium">$50,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Available Credit</span>
                            <span className="font-medium text-green-600">$35,750</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Current Balance</span>
                            <span className="font-medium">$14,250</span>
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
                          <CardTitle className="text-lg">Payment Methods</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Business Checking</p>
                                <p className="text-sm text-muted-foreground">****1234</p>
                              </div>
                              <Badge>Primary</Badge>
                            </div>
                          </div>
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Credit Card</p>
                                <p className="text-sm text-muted-foreground">****5678</p>
                              </div>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full bg-transparent">
                            Add Payment Method
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>Choose how you want to receive updates and notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-muted-foreground">
                            Notifications about order status, shipping, and delivery
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Payment Reminders</p>
                          <p className="text-sm text-muted-foreground">
                            Reminders about upcoming payments and due dates
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Product Updates</p>
                          <p className="text-sm text-muted-foreground">
                            New product announcements and availability updates
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Promotional Offers</p>
                          <p className="text-sm text-muted-foreground">
                            Special deals, discounts, and promotional campaigns
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Account Security</p>
                          <p className="text-sm text-muted-foreground">
                            Login alerts and security-related notifications
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Security Settings
                    </CardTitle>
                    <CardDescription>Manage your account security and access controls</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Button variant="outline" className="bg-transparent">
                          Enable
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Password</p>
                          <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
                        </div>
                        <Button variant="outline" className="bg-transparent">
                          Change Password
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Login Sessions</p>
                          <p className="text-sm text-muted-foreground">Manage active sessions and devices</p>
                        </div>
                        <Button variant="outline" className="bg-transparent">
                          View Sessions
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">API Access</p>
                          <p className="text-sm text-muted-foreground">Generate API keys for system integration</p>
                        </div>
                        <Button variant="outline" className="bg-transparent" asChild>
                          <Link href="/api">Manage API Keys</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
