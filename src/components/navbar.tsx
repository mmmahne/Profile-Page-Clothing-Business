'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const Navbar = () => {
  const NavLinks = () => (
    <>
      <Link href="/">
        <Button variant="neutral" className="hover:bg-bg">Beranda</Button>
      </Link>
      <Link href="/products">
        <Button variant="neutral" className="hover:bg-bg">Produk</Button>
      </Link>
      <Link href="/information">
        <Button variant="neutral" className="hover:bg-bg">Informasi</Button>
      </Link>
      <Link href="/contact">
        <Button variant="neutral" className="hover:bg-bg">Kontak</Button>
      </Link>
      <Link href="/order-status">
        <Button variant="default" className="hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
          Cek Status Pesanan
        </Button>
      </Link>
    </>
  )

  return (
    <nav className="w-full bg-background border-4 border-border shadow-brutal sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-heading text-text hover:text-main transition-colors">
              Fast and Loud
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="neutral" size="icon" className="ml-4">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-4 border-border shadow-brutal">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 