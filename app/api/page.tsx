import Link from "next/link"
import { Code, Key, Book, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function ApiPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">TechWholesale API</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Integrate our wholesale platform directly into your systems with our comprehensive REST API.
              </p>
              <div className="flex items-center justify-center gap-2">
                <Badge>REST API</Badge>
                <Badge variant="secondary">JSON</Badge>
                <Badge variant="outline">OAuth 2.0</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 mb-12">
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">RESTful API</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Clean, predictable REST endpoints with comprehensive JSON responses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Key className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Secure Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    OAuth 2.0 and API key authentication with role-based access control.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Book className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Comprehensive Docs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detailed documentation with code examples and interactive testing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Real-time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Webhooks and real-time inventory updates for seamless integration.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="authentication">Authentication</TabsTrigger>
                  <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Overview</CardTitle>
                      <CardDescription>
                        The TechWholesale API allows you to integrate our wholesale platform into your applications.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Base URL</h3>
                        <code className="bg-slate-100 px-2 py-1 rounded text-sm">https://api.techwholesale.com/v1</code>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Response Format</h3>
                        <p className="text-sm text-muted-foreground">
                          All API responses are returned in JSON format with consistent structure and error handling.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Rate Limiting</h3>
                        <p className="text-sm text-muted-foreground">
                          API requests are limited to 1000 requests per hour per API key. Rate limit headers are
                          included in all responses.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Supported Features</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Product catalog and inventory management</li>
                          <li>• Order creation and management</li>
                          <li>• Customer account information</li>
                          <li>• Pricing and availability checks</li>
                          <li>• Shipping and tracking information</li>
                          <li>• Invoice and payment data</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="authentication" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Authentication Methods</CardTitle>
                      <CardDescription>Secure your API requests with our authentication options.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">API Key Authentication</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Include your API key in the Authorization header:
                        </p>
                        <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                          {`Authorization: Bearer your_api_key_here`}
                        </pre>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">OAuth 2.0</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          For applications requiring user-specific access:
                        </p>
                        <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                          {`POST /oauth/token
Content-Type: application/json

{
  "grant_type": "client_credentials",
  "client_id": "your_client_id",
  "client_secret": "your_client_secret"
}`}
                        </pre>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Getting API Keys</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          API keys can be generated from your account dashboard. Different key types provide different
                          levels of access:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>
                            • <strong>Read-only:</strong> Access to product and account information
                          </li>
                          <li>
                            • <strong>Read-write:</strong> Full access including order creation
                          </li>
                          <li>
                            • <strong>Admin:</strong> Complete account management capabilities
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="endpoints" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Endpoints</CardTitle>
                      <CardDescription>Available endpoints organized by functionality.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Products</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code>/products</code>
                            <span className="text-muted-foreground">List all products</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code>/products/{"{id}"}</code>
                            <span className="text-muted-foreground">Get product details</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code>/products/{"{id}"}/inventory</code>
                            <span className="text-muted-foreground">Check inventory levels</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code>/products/{"{id}"}/pricing</code>
                            <span className="text-muted-foreground">Get pricing information</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Orders</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code>/orders</code>
                            <span className="text-muted-foreground">List orders</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">POST</Badge>
                            <code>/orders</code>
                            <span className="text-muted-foreground">Create new order</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code>/orders/{"{id}"}</code>
                            <span className="text-muted-foreground">Get order details</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">PUT</Badge>
                            <code>/orders/{"{id}"}</code>
                            <span className="text-muted-foreground">Update order</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">DELETE</Badge>
                            <code>/orders/{"{id}"}</code>
                            <span className="text-muted-foreground">Cancel order</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Account</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code>/account</code>
                            <span className="text-muted-foreground">Get account information</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code>/account/invoices</code>
                            <span className="text-muted-foreground">List invoices</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code>/account/credit</code>
                            <span className="text-muted-foreground">Get credit information</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="examples" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Code Examples</CardTitle>
                      <CardDescription>Sample requests and responses for common API operations.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Get Product Information</h3>
                        <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                          {`curl -X GET "https://api.techwholesale.com/v1/products/laptop-1" \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json"

Response:
{
  "id": "laptop-1",
  "name": "Dell XPS 13 9320",
  "sku": "DXPS13-9320",
  "description": "13-inch business laptop...",
  "category": "laptops",
  "brand": "dell",
  "price": 1299.00,
  "inventory": {
    "available": 25,
    "reserved": 5,
    "total": 30
  },
  "specifications": {
    "ram": "16GB",
    "storage": "512GB",
    "processor": "Intel Core i7"
  }
}`}
                        </pre>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Create Order</h3>
                        <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                          {`curl -X POST "https://api.techwholesale.com/v1/orders" \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "items": [
      {
        "product_id": "laptop-1",
        "quantity": 2
      }
    ],
    "shipping_address": {
      "name": "John Doe",
      "company": "ABC Corp",
      "address": "123 Business Ave",
      "city": "Atlanta",
      "state": "GA",
      "zip": "30309"
    }
  }'

Response:
{
  "id": "ord_123456",
  "status": "pending",
  "total": 2598.00,
  "items": [...],
  "created_at": "2024-01-15T10:30:00Z"
}`}
                        </pre>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Check Inventory</h3>
                        <pre className="bg-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                          {`curl -X GET "https://api.techwholesale.com/v1/products/laptop-1/inventory" \\
  -H "Authorization: Bearer your_api_key_here"

Response:
{
  "product_id": "laptop-1",
  "available": 25,
  "reserved": 5,
  "total": 30,
  "last_updated": "2024-01-15T09:15:00Z",
  "warehouse_locations": [
    {
      "location": "Atlanta, GA",
      "quantity": 15
    },
    {
      "location": "Dallas, TX", 
      "quantity": 10
    }
  ]
}`}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Get Started with Our API</h2>
              <p className="text-gray-500">
                Ready to integrate TechWholesale into your applications? Get your API keys and start building today.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/profile">Generate API Keys</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Developer Support</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Need help getting started?{" "}
                <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
                  Contact our developer support team
                </Link>{" "}
                for assistance with integration.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
