import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "TechPro Distribution - B2B Technology Solutions",
    template: "%s | TechPro Distribution",
  },
  description:
    "Leading wholesale distributor of business technology solutions. Laptops, servers, networking equipment, and more for resellers and system integrators.",
  keywords: [
    "wholesale technology",
    "B2B electronics",
    "business laptops",
    "server distribution",
    "networking equipment",
    "technology reseller",
    "system integrator",
    "bulk electronics",
  ],
  authors: [{ name: "TechPro Distribution" }],
  creator: "TechPro Distribution",
  publisher: "TechPro Distribution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techpro-distribution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techpro-distribution.com",
    siteName: "TechPro Distribution",
    title: "TechPro Distribution - B2B Technology Solutions",
    description: "Leading wholesale distributor of business technology solutions for resellers and system integrators.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechPro Distribution - B2B Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechPro Distribution - B2B Technology Solutions",
    description: "Leading wholesale distributor of business technology solutions for resellers and system integrators.",
    images: ["/images/twitter-image.png"],
    creator: "@techprodist",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="relative flex min-h-screen flex-col">
              <main className="flex-1">{children}</main>
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
