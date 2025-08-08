import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, FileText, ShoppingCart } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real application, you would fetch the product data based on the ID
  // For this example, we'll use hardcoded data
  const product = {
    id: params.id,
    name: "Dell XPS 13 Laptop",
    sku: "DXPS13-9310",
    image: "/dell-xps-laptop.png",
    images: [
      "/dell-xps-laptop-front.png",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    description: "13-inch business laptop with Intel Core i7, 16GB RAM, 512GB SSD",
    longDescription: "The Dell XPS 13 is a premium ultraportable laptop designed for business professionals. Featuring the latest Intel Core i7 processor, 16GB of RAM, and a fast 512GB SSD, this laptop delivers exceptional performance for all your business needs. The 13.4-inch InfinityEdge display provides stunning visuals with minimal bezels, while the compact design ensures maximum portability. With up to 12 hours of battery life, this laptop is perfect for professionals on the go.",
    category: "Laptops",
    brand: "Dell",
    specifications: [
      { name: "Processor", value: "Intel Core i7-1185G7" },
      { name: "RAM", value: "16GB LPDDR4x" },
      { name: "Storage", value: "512GB PCIe NVMe SSD" },
      { name: "Display", value: "13.4-inch FHD+ (1920 x 1200) InfinityEdge" },
      { name: "Graphics", value: "Intel Iris Xe Graphics" },
      { name: "Operating System", value: "Windows 11 Pro" },
      { name: "Battery", value: "52WHr, up to 12 hours" },
      { name: "Weight", value: "2.8 lbs (1.27 kg)" },
      {  value: "52WHr, up to 12 hours" },
      { name: "Weight", value: "2.8 lbs (1.27 kg)" },
      { name: "Dimensions", value: "11.6 x 7.8 x 0.58 inches" },
      { name: "Ports", value: "2x Thunderbolt 4, 1x headphone jack" },
      { name: "Wireless", value: "Wi-Fi 6, Bluetooth 5.1" },
    ],
    inStock: true,
    warranty: "3-year ProSupport",
    datasheet: "/product-datasheet.pdf",
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
              <Link href="/catalog">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to catalog</span>
              </Link>
            </Button>
            <div>
              <p className="text-sm text-muted-foreground">
                <Link href="/catalog" className="hover:underline">
                  Catalog
                </Link>{" "}
                /{" "}
                <Link href={`/catalog/${product.category.toLowerCase()}`} className="hover:underline">
                  {product.category}
                </Link>
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border bg-white">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex space-x-2 overflow-auto pb-2">
                {product.images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded border bg-white">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      width={100}
                      height={100}
                      className="h-20 w-20 cursor-pointer object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline">{product.brand}</Badge>
                  <Badge variant="outline">{product.category}</Badge>
                  <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        <Check className="mr-1 h-3 w-3" /> In Stock
                      </Badge>
                      <p className="text-sm text-muted-foreground">Usually ships within 24 hours</p>
                    </>
                  ) : (
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">Warranty: {product.warranty}</p>
              </div>

              <div className="rounded-lg border bg-slate-50 p-4">
                <div className="text-center">
                  <p className="text-lg font-medium">Login to View Wholesale Price</p>
                  <p className="text-sm text-muted-foreground">
                    Exclusive pricing available for registered business customers
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <Button className="w-full" asChild>
                      <Link href="/login">
                        Login
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/register">
                        Register
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-medium">Description</p>
                <p className="text-sm text-muted-foreground">{product.longDescription}</p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={product.datasheet}>
                    <FileText className="mr-2 h-4 w-4" /> Download Datasheet
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="support">Support & Documentation</TabsTrigger>
              <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="mt-6">
              <div className="rounded-lg border">
                <div className="grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="p-4">
                      <p className="text-sm font-medium">{spec.name}</p>
                      <p className="text-sm text-muted-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="support" className="mt-6">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-medium">Support Resources</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Access product documentation, drivers, and support resources for your {product.name}.
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">Product Documentation</h4>
                    <p className="text-sm text-muted-foreground">User guides, manuals, and setup instructions</p>
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="#">View Documentation</Link>
                    </Button>
                  </div>
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">Drivers & Software</h4>
                    <p className="text-sm text-muted-foreground">Latest drivers and software updates</p>
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="#">Download Drivers</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="compatibility" className="mt-6">
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-medium">Compatible Products</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Explore accessories and components that are compatible with the {product.name}.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">Dell Thunderbolt Dock</h4>
                    <p className="text-sm text-muted-foreground">Expand connectivity options</p>
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="#">View Product</Link>
                    </Button>
                  </div>
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">Dell Premier Sleeve</h4>
                    <p className="text-sm text-muted-foreground">Protective sleeve for travel</p>
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="#">View Product</Link>
                    </Button>
                  </div>
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">Dell UltraSharp Monitor</h4>
                    <p className="text-sm text-muted-foreground">27-inch 4K USB-C monitor</p>
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="#">View Product</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
