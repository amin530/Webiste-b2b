import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">Sidq  </h3>
            <p className="text-sm text-gray-400">
              Your trusted partner for wholesale electronics distribution. 
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog/laptops" className="text-gray-400 hover:text-white">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/catalog/accessories" className="text-gray-400 hover:text-white">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/catalog/networking" className="text-gray-400 hover:text-white">
                  Networking
                </Link>
              </li>
              <li>
                <Link href="/catalog/gaming" className="text-gray-400 hover:text-white">
                  Gaming
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-gray-400 hover:text-white">
                  View All
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/partner" className="text-gray-400 hover:text-white">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Credit Terms
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white">
                  API Access
                </Link>
              </li>
              <li>
                <Link href="/catalog.pdf" className="text-gray-400 hover:text-white">
                  Download Catalog
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  News & Promotions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                3275 S John Young Pky
                <br />
                Suite 885
                <br />
                Kissimmee, FL 34746
              </li>
              <li>
                <Link href="tel:+18005551234" className="text-gray-400 hover:text-white">
                  (844) 644-SIDQ
                </Link>
              </li>
              <li>
                <Link href="mailto:sales@techwholesale.com" className="text-gray-400 hover:text-white">
                  sales@sidqventures.com
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Sidq Ventures LLC. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
