import Link from "next/link"
import { ArrowLeft, Code, Database, Key, Zap } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function APIPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">API Access</h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Integrate our wholesale platform directly into your systems with our comprehensive API.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">RESTful API</h2>
                <p className="text-gray-500">
                  Our API provides programmatic access to our product catalog, pricing, inventory, and order management systems. Perfect for businesses looking to integrate wholesale purchasing into their existing workflows.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Database className="mt-0.5 h-5 w-5 text-primary" />
                      <span className="text-gray-500">Real-time product catalog and inventory</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Zap className="mt-0.5 h-5 w-5 text-primary" />
                      <span className="text-gray-500">Automated order processing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Key className="mt-0.5 h-5 w-5 text-primary" />
                      <span className="text-gray-500">Secure authentication with API keys</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Code className="mt-0.5 h-5 w-5 text-primary" />
                      <span className="text-gray-500">Comprehensive documentation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Get Started</CardTitle>
                    <CardDescription>
                      API access is available for approved business customers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      To get started with our API:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>Ensure your business account is approved</li>
                      <li>Request API access from your account manager</li>
                      <li>Receive your API credentials</li>
                      <li>Review our documentation</li>
                      <li>Start integrating</li>
                    </ol>
                    <Button className="w-full" asChild>
                      <Link href="/contact">Request API Access</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Documentation</CardTitle>
                    <CardDescription>
                      Comprehensive guides and reference materials.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our API documentation includes code examples, endpoint references, and integration guides.
                    </p>
                    <Button variant="outline" className="w-full" disabled>
                      View Documentation (Coming Soon)
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
