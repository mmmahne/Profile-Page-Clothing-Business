'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Package, BadgeCheck, Sparkles, Shirt } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, scaleIn, bounceIn, defaultViewport } from "@/lib/animations"

const products = [
  {
    id: 1,
    name: "Kaos Custom Regular",
    description: "Bahan katun premium dengan berbagai pilihan warna. Cocok untuk penggunaan sehari-hari.",
    price: "Rp 85.000",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
    features: ["100% Cotton Combed 30s", "Jahitan Rantai", "Printing DTF/DTG", "S-XXL"],
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Kaos Polo Custom",
    description: "Tampil lebih formal dengan kaos polo custom. Cocok untuk seragam kantor atau komunitas.",
    price: "Rp 125.000",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80",
    features: ["Cotton Pique", "Kerah Rajut", "Bordir/Printing", "S-XXL"],
    badge: "Premium"
  },
  {
    id: 3,
    name: "Hoodie Custom",
    description: "Hoodie nyaman dengan bahan premium. Ideal untuk merchandise atau komunitas.",
    price: "Rp 225.000",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
    features: ["Cotton Fleece", "Saku Depan", "Tali Serut", "S-XXL"],
    badge: "New"
  },
  {
    id: 4,
    name: "Kaos Oversize",
    description: "Kaos dengan potongan oversize yang trendy. Cocok untuk style casual modern.",
    price: "Rp 95.000",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80",
    features: ["Cotton Combed 24s", "Cutting Oversize", "Printing DTF", "M-XL"],
    badge: "Trending"
  },
  {
    id: 5,
    name: "Kaos Anak Custom",
    description: "Kaos custom untuk si kecil dengan bahan lembut dan nyaman.",
    price: "Rp 75.000",
    image: "https://images.unsplash.com/photo-1519278409-1f56fdda7485?auto=format&fit=crop&q=80",
    features: ["Cotton Combed 24s", "Jahitan Halus", "Printing Aman", "S-L"],
    badge: "Kids"
  },
  {
    id: 6,
    name: "Jersey Custom",
    description: "Jersey olahraga dengan bahan dry-fit berkualitas. Ideal untuk tim atau klub.",
    price: "Rp 150.000",
    image: "https://images.unsplash.com/photo-1580087433295-ab2600c1030e?auto=format&fit=crop&q=80",
    features: ["Dry-Fit", "Sublimasi Full Print", "Cutting Sport", "S-XXL"],
    badge: "Sport"
  }
]

const highlights = [
  {
    icon: Package,
    title: "Kualitas Premium",
    description: "Bahan berkualitas tinggi dengan jahitan rapi"
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description: "Gratis ongkir untuk area Jakarta"
  },
  {
    icon: BadgeCheck,
    title: "Garansi Produk",
    description: "100% uang kembali jika ada cacat produksi"
  }
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Animated Background */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        className="relative overflow-hidden rounded-base border-4 border-border bg-main/5 p-8 mb-12"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                variants={bounceIn}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                <Shirt className="w-8 h-8 text-main opacity-20" />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="relative text-center">
          <motion.div 
            variants={scaleIn}
            className="inline-flex items-center gap-2 bg-main text-text px-4 py-2 rounded-base border-2 border-border mb-4"
          >
            <Sparkles className="w-5 h-5 animate-pulse-slow" />
            <span className="font-bold">Produk Terbaik Kami</span>
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-heading mb-4"
          >
            Katalog Produk
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Pilihan lengkap produk custom berkualitas untuk berbagai kebutuhan
          </motion.p>
        </div>
      </motion.div>

      {/* Highlights Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative group bg-background border-4 border-border rounded-base p-4 flex items-center gap-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-main rounded-full opacity-20 group-hover:scale-110 transition-transform"></div>
              <highlight.icon className="w-10 h-10 text-main relative animate-pulse-slow" />
            </div>
            <div>
              <h3 className="font-heading text-lg group-hover:text-main transition-colors">{highlight.title}</h3>
              <p className="text-sm text-foreground/70">{highlight.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Products Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={scaleIn}
            className="group relative bg-background border-4 border-border rounded-base p-4 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Badge */}
            {product.badge && (
              <div className="absolute -top-2 -right-2 z-10 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <div className="absolute -inset-2 bg-main rounded-base transform rotate-6"></div>
                  <div className="relative bg-background px-3 py-1 rounded-base border-2 border-border font-bold text-xs">
                    {product.badge}
                  </div>
                </div>
              </div>
            )}

            {/* Image Container */}
            <div className="relative aspect-square mb-4 overflow-hidden rounded-base border-4 border-border group-hover:shadow-brutal transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform z-20">
                <p className="text-sm font-medium">Klik untuk melihat detail produk</p>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-heading group-hover:text-main transition-colors">{product.name}</h2>
                <div className="bg-main text-text px-3 py-1 rounded-base border-2 border-border font-bold animate-pulse-slow">
                  {product.price}
                </div>
              </div>
              <p className="text-sm text-foreground/70">{product.description}</p>
              
              {/* Features */}
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center group/feature">
                    <BadgeCheck className="w-4 h-4 text-main mr-2 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                    <span className="group-hover/feature:text-main transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button variant="default" size="lg" className="w-full mt-4 group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Pesan Sekarang
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
        className="mt-16 relative"
      >
        <div className="relative bg-background p-6 sm:p-8 rounded-base">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading mb-4">
                Tidak Menemukan yang Anda Cari?
              </h2>
              <p className="text-lg mb-6">
                Kami siap membantu mewujudkan desain custom sesuai kebutuhan Anda
              </p>
              <Button size="lg" className="group">
                Konsultasi Gratis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative aspect-[4/3] md:aspect-square">
              <div className="absolute -inset-2 bg-main/20 rounded-base transform rotate-3 animate-pulse-slow"></div>
              <div className="relative rounded-base overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80"
                  alt="Custom T-Shirt Design Consultation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 