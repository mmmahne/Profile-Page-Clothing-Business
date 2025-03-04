import Link from 'next/link'
import { Phone, Mail, Instagram, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Kaos Custom', href: '/products' },
    { name: 'Polo Custom', href: '/products' },
    { name: 'Hoodie Custom', href: '/products' },
    { name: 'Jersey Custom', href: '/products' },
  ],
  information: [
    { name: 'Cara Pemesanan', href: '/information' },
    { name: 'Ketentuan Design', href: '/information' },
    { name: 'Metode Pembayaran', href: '/information' },
    { name: 'Pengiriman', href: '/information' },
  ],
  contact: [
    { name: 'WhatsApp', href: 'https://wa.me/6281234567890', icon: Phone },
    { name: 'Email', href: 'mailto:info@fastandloud.id', icon: Mail },
    { name: 'Instagram', href: 'https://instagram.com/fastandloud.id', icon: Instagram },
    { name: 'Workshop', href: '/contact', icon: MapPin },
  ]
}

export function Footer() {
  return (
    <footer className="bg-background border-t-4 border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-heading text-text hover:text-main transition-colors">
                Fast and Loud
              </h2>
            </Link>
            <p className="text-sm">
              Jasa pembuatan kaos custom berkualitas dengan desain sesuai keinginan Anda. 
              Berbagai pilihan bahan premium dan printing terbaik.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact"
                className="inline-flex items-center text-sm font-bold hover:text-main transition-colors group"
              >
                Kunjungi Workshop Kami
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-heading mb-4">Produk Kami</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-main transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-heading mb-4">Informasi</h3>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-main transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-heading mb-4">Kontak</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center text-sm hover:text-main transition-colors"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Fast and Loud. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/privacy-policy"
                className="text-sm hover:text-main transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-sm hover:text-main transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
