'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, CreditCard, Printer, Ruler, Clock, CheckCircle2, Sparkles, FileCheck, Send, Palette, ShoppingCart, CreditCard as PaymentIcon, Banknote, Wallet, ChevronRight, ImageIcon, Boxes, PackageCheck, MapPin, Scale, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, scaleIn, bounceIn, rotateIn, defaultViewport } from "@/lib/animations"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState } from "react"
import { LucideIcon } from 'lucide-react'

interface PaymentMethod {
  icon: LucideIcon;
  name: string;
  banks?: string[];
  types?: string[];
  places?: string[];
  description: string;
}

const orderSteps = [
  {
    icon: FileCheck,
    title: "Konsultasi & Desain",
    description: "Diskusikan kebutuhan dan desain kaos Anda dengan tim kami"
  },
  {
    icon: Palette,
    title: "Approval Desain",
    description: "Review dan setujui desain final yang telah dibuat"
  },
  {
    icon: ShoppingCart,
    title: "Pembayaran DP",
    description: "Lakukan pembayaran DP minimal 50% untuk memulai produksi"
  },
  {
    icon: Printer,
    title: "Proses Produksi",
    description: "Kaos Anda akan diproduksi dengan quality control ketat"
  },
  {
    icon: Truck,
    title: "Pengiriman",
    description: "Pesanan dikirim setelah pelunasan dengan packaging aman"
  }
]

const paymentMethods: PaymentMethod[] = [
  {
    icon: CreditCard,
    name: "Transfer Bank",
    banks: ["BCA", "Mandiri", "BNI", "BRI"],
    description: "Pembayaran melalui transfer bank dengan konfirmasi otomatis"
  },
  {
    icon: Wallet,
    name: "E-Wallet",
    types: ["DANA", "OVO", "GoPay", "ShopeePay"],
    description: "Pembayaran instan melalui dompet digital"
  },
  {
    icon: Banknote,
    name: "Tunai",
    places: ["Workshop", "COD Area Blitar"],
    description: "Pembayaran tunai langsung di workshop atau melalui COD"
  }
]

const sections = [
  { id: "cara-pemesanan", title: "Cara Pemesanan" },
  { id: "ketentuan-design", title: "Ketentuan Design" },
  { id: "metode-pembayaran", title: "Metode Pembayaran" },
  { id: "pengiriman", title: "Pengiriman" },
  { id: "faq", title: "FAQ" }
]

export default function InformationPage() {
  const [activeSection, setActiveSection] = useState("cara-pemesanan")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header dengan Background Pattern */}
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
                }}
              >
                <Sparkles className="w-8 h-8 text-main opacity-20" />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center relative">
          <motion.h1 
            variants={rotateIn}
            className="text-4xl md:text-5xl font-heading mb-8 border-4 border-border p-6 bg-main text-text shadow-brutal inline-block rotate-[-1deg] transform-gpu relative hover:rotate-0 transition-transform duration-300"
          >
            <div className="absolute -inset-2 bg-main/20 rounded-base transform rotate-3 animate-pulse-slow"></div>
            <span className="relative">Informasi Pemesanan</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Pelajari cara pemesanan dan informasi penting lainnya untuk mendapatkan kaos custom terbaik dengan kualitas premium
          </motion.p>
        </div>
      </motion.div>

      {/* Marquee Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
        className="mb-8 overflow-hidden border-y-4 border-border bg-main/5 py-4"
      >
        <div className="relative flex overflow-x-hidden">
          <div className="flex gap-8 animate-marquee-fast whitespace-nowrap">
            <span className="text-lg font-heading">🎨 Design Keren, Kualitas Premium</span>
            <span className="text-lg font-heading">🚚 Gratis Ongkir Area Jakarta</span>
            <span className="text-lg font-heading">⭐ Garansi 100% Uang Kembali</span>
            <span className="text-lg font-heading">🏃 Proses Cepat 3-5 Hari Kerja</span>
            <span className="text-lg font-heading">💯 Hasil Sablon Berkualitas</span>
            <span className="text-lg font-heading">🎨 Design Keren, Kualitas Premium</span>
            <span className="text-lg font-heading">🚚 Gratis Ongkir Area Jakarta</span>
            <span className="text-lg font-heading">⭐ Garansi 100% Uang Kembali</span>
            <span className="text-lg font-heading">🏃 Proses Cepat 3-5 Hari Kerja</span>
            <span className="text-lg font-heading">💯 Hasil Sablon Berkualitas</span>
            <span className="text-lg font-heading">🎨 Design Keren, Kualitas Premium</span>
            <span className="text-lg font-heading">🚚 Gratis Ongkir Area Jakarta</span>
            <span className="text-lg font-heading">⭐ Garansi 100% Uang Kembali</span>
            <span className="text-lg font-heading">🏃 Proses Cepat 3-5 Hari Kerja</span>
            <span className="text-lg font-heading">💯 Hasil Sablon Berkualitas</span>
            <span className="text-lg font-heading">🎨 Design Keren, Kualitas Premium</span>
            <span className="text-lg font-heading">🚚 Gratis Ongkir Area Jakarta</span>
            <span className="text-lg font-heading">⭐ Garansi 100% Uang Kembali</span>
            <span className="text-lg font-heading">🏃 Proses Cepat 3-5 Hari Kerja</span>
            <span className="text-lg font-heading">💯 Hasil Sablon Berkualitas</span>
          </div>
        </div>
      </motion.div>

      {/* Sticky Navigation */}
      <div className="sticky top-4 z-50 mb-8">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-background border-4 border-border rounded-base p-4 shadow-brutal"
        >
          <nav className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center whitespace-nowrap px-4 py-2 rounded-base transition-all ${
                  activeSection === section.id
                    ? "bg-main text-text font-bold"
                    : "hover:bg-main/10"
                }`}
              >
                {section.title}
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Main Content dengan Grid Layout yang Ditingkatkan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cara Pemesanan dengan Animasi */}
        <motion.div
          id="cara-pemesanan"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mb-16 scroll-mt-32"
        >
          <motion.h2 
            variants={scaleIn}
            className="text-2xl sm:text-3xl font-heading mb-12 inline-block"
          >
            Cara Pemesanan
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="flex flex-col space-y-6"
          >
            {orderSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-background border-4 border-border p-6 rounded-base">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-main/20 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                        <div className="relative w-16 h-16 flex items-center justify-center bg-main/10 rounded-full border-2 border-border">
                          <step.icon className="w-8 h-8 text-main animate-pulse-slow" />
                        </div>
                      </div>
                      <div className="mt-4 w-16 text-center">
                        <span className="text-3xl font-heading text-main">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-heading mb-3 group-hover:text-main transition-colors flex items-center gap-2">
                        {step.title}
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </h3>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {step.description}
                      </p>
                      {index === 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            Via WhatsApp
                          </span>
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            Kunjungi Workshop
                          </span>
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            Email
                          </span>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            Max 2x Revisi
                          </span>
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            Format AI/PSD/PDF
                          </span>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            Transfer Bank
                          </span>
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            E-Wallet
                          </span>
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            Tunai
                          </span>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            3-5 Hari Kerja
                          </span>
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            QC Ketat
                          </span>
                        </div>
                      )}
                      {index === 4 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            Free Ongkir Jakarta
                          </span>
                          <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            Tracking Real-time
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Ketentuan Design dengan Hover Effects */}
        <motion.div 
          id="ketentuan-design"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mb-16 scroll-mt-32"
        >
          <motion.h2 
            variants={scaleIn}
            className="text-2xl sm:text-3xl font-heading mb-12 inline-block"
          >
            Ketentuan Design
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {[
              { 
                icon: FileCheck,
                title: "Format File", 
                desc: "Format file yang didukung untuk hasil terbaik",
                tags: ["Adobe Illustrator (.ai)", "Photoshop (.psd)", "PDF High-Res", "PNG min. 300dpi"],
                details: ["Vector untuk hasil tajam", "Layer terpisah", "Font di-convert", "Resolusi tinggi"]
              },
              { 
                icon: Ruler,
                title: "Ukuran Design", 
                desc: "Spesifikasi ukuran untuk hasil optimal",
                tags: ["Max A3 (297x420mm)", "Min A5 (148x210mm)", "Safe Area Guide", "Bleed Area 5mm"],
                details: ["Sesuai template", "Proporsi tepat", "Area print jelas", "Margin aman"]
              },
              { 
                icon: Palette,
                title: "Spesifikasi Warna", 
                desc: "Panduan warna untuk hasil sablon akurat",
                tags: ["Mode CMYK", "Pantone Color", "Solid Colors", "Color Separation"],
                details: ["Warna solid", "Gradasi halus", "Kontras ideal", "Tone konsisten"]
              },
              { 
                icon: ImageIcon,
                title: "Elemen Design", 
                desc: "Ketentuan elemen design yang direkomendasikan",
                tags: ["Text Min. 12pt", "Outline Text", "Image High-Res", "Clean Artwork"],
                details: ["Font terbaca", "Grafis tajam", "Detail jelas", "Komposisi baik"]
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative bg-white/5 p-8 rounded-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 flex items-center justify-center bg-main/10 rounded-xl">
                      <item.icon className="w-8 h-8 text-main" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading mb-3">{item.title}</h3>
                    <p className="text-base mb-6 text-foreground/80">{item.desc}</p>
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-3">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="text-sm px-4 py-2 bg-main/5 rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-3">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-base">
                            <CheckCircle2 className="w-5 h-5 text-main" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Metode Pembayaran dengan Grid Layout */}
        <motion.div 
          id="metode-pembayaran"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="scroll-mt-32 lg:col-span-2"
        >
          <motion.h2 
            variants={scaleIn}
            className="text-2xl sm:text-3xl font-heading mb-12 inline-block"
          >
            Metode Pembayaran
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {paymentMethods.map((method) => (
              <motion.div
                key={method.name}
                variants={fadeInUp}
                className="relative bg-white/5 p-8 rounded-xl h-full"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-main/10 rounded-xl">
                    <method.icon className="w-8 h-8 text-main" />
                  </div>
                  <h3 className="text-xl font-heading">{method.name}</h3>
                </div>
                <p className="text-base mb-6 text-foreground/80">{method.description}</p>
                <div className="flex flex-wrap gap-3">
                  {method.banks ? (
                    method.banks.map((bank) => (
                      <span key={bank} className="text-sm px-4 py-2 bg-main/5 rounded-lg">
                        {bank}
                      </span>
                    ))
                  ) : method.types ? (
                    method.types.map((type) => (
                      <span key={type} className="text-sm px-4 py-2 bg-main/5 rounded-lg">
                        {type}
                      </span>
                    ))
                  ) : (
                    method.places?.map((place) => (
                      <span key={place} className="text-sm px-4 py-2 bg-main/5 rounded-lg">
                        {place}
                      </span>
                    ))
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Pengiriman dengan Interactive Elements */}
        <motion.div 
          id="pengiriman"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="scroll-mt-32 lg:col-span-2"
        >
          <motion.h2 
            variants={scaleIn}
            className="text-2xl sm:text-3xl font-heading mb-12 inline-block"
          >
            Pengiriman
          </motion.h2>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Estimasi Pengiriman */}
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 flex items-center justify-center bg-main/10 rounded-xl">
                  <Clock className="w-8 h-8 text-main" />
                </div>
                <h3 className="text-xl font-heading">Estimasi Pengiriman</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">JABODETABEK</h4>
                  <p className="text-sm">1-2 hari kerja</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Pulau Jawa</h4>
                  <p className="text-sm">2-3 hari kerja</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Luar Jawa</h4>
                  <p className="text-sm">3-5 hari kerja</p>
                </div>
              </div>
            </div>

            {/* Jaminan Pengiriman */}
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 flex items-center justify-center bg-main/10 rounded-xl">
                  <PackageCheck className="w-8 h-8 text-main" />
                </div>
                <h3 className="text-xl font-heading">Jaminan Pengiriman</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Packaging</h4>
                  <p className="text-sm">Double wrapping aman</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Asuransi</h4>
                  <p className="text-sm">Jaminan keamanan</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Tracking</h4>
                  <p className="text-sm">Real-time update</p>
                </div>
              </div>
            </div>

            {/* Area Pengiriman */}
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 flex items-center justify-center bg-main/10 rounded-xl">
                  <MapPin className="w-8 h-8 text-main" />
                </div>
                <h3 className="text-xl font-heading">Area Pengiriman</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Domestik</h4>
                  <p className="text-sm">Seluruh Indonesia</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Internasional</h4>
                  <p className="text-sm">Luar Negeri</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Pickup</h4>
                  <p className="text-sm">Ambil Sendiri</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">COD</h4>
                  <p className="text-sm">Area Tertentu</p>
                </div>
              </div>
            </div>

            {/* Biaya Pengiriman */}
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 flex items-center justify-center bg-main/10 rounded-xl">
                  <Scale className="w-8 h-8 text-main" />
                </div>
                <h3 className="text-xl font-heading">Biaya Pengiriman</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Kalkulasi</h4>
                  <p className="text-sm">Dihitung per kg</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Free</h4>
                  <p className="text-sm">Area Jakarta</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <h4 className="font-heading text-base mb-3 text-main">Diskon</h4>
                  <p className="text-sm">Order banyak</p>
                </div>
              </div>
            </div>

            {/* Promo Pengiriman */}
            <div className="lg:col-span-2 bg-white/5 p-8 rounded-xl">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 flex items-center justify-center bg-main/10 rounded-xl">
                  <Truck className="w-8 h-8 text-main" />
                </div>
                <h3 className="text-xl font-heading">Promo Pengiriman</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-main/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-main" />
                  </div>
                  <h4 className="font-heading text-base mb-3 text-main">FREE ONGKIR</h4>
                  <p className="text-sm">Untuk area Jakarta! 🚚</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-main/10 rounded-lg">
                    <Scale className="w-6 h-6 text-main" />
                  </div>
                  <h4 className="font-heading text-base mb-3 text-main">DISKON 10%</h4>
                  <p className="text-sm">Pengiriman Pulau Jawa</p>
                </div>
                <div className="bg-main/5 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-main/10 rounded-lg">
                    <PackageCheck className="w-6 h-6 text-main" />
                  </div>
                  <h4 className="font-heading text-base mb-3 text-main">CASHBACK</h4>
                  <p className="text-sm">Order {'>'} 100pcs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div 
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        className="py-16 scroll-mt-32"
      >
        <motion.h2 
          variants={scaleIn}
          className="text-2xl sm:text-3xl font-heading mb-12 inline-block"
        >
          Pertanyaan Umum
        </motion.h2>

        <motion.div variants={fadeInUp}>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Berapa minimum order untuk pemesanan kaos custom?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Satuan/Retail: Minimum 12 pcs</li>
                  <li>Komunitas/Organisasi: Minimum 24 pcs</li>
                  <li>Korporat: Minimum 50 pcs</li>
                  <li>Reseller: Minimum 100 pcs</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Berapa lama proses pengerjaan kaos custom?</AccordionTrigger>
              <AccordionContent>
                Proses pengerjaan kaos custom membutuhkan waktu 3-5 hari kerja setelah desain disetujui dan DP dibayarkan. Untuk pesanan dalam jumlah besar ({'>'}100 pcs) mungkin membutuhkan waktu tambahan yang akan kami informasikan saat konsultasi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Apakah bisa menggunakan desain sendiri?</AccordionTrigger>
              <AccordionContent>
                Ya, Anda bisa menggunakan desain sendiri dengan format file yang didukung (AI, PSD, PDF, atau PNG dengan resolusi minimal 300dpi). Kami juga menyediakan layanan konsultasi desain gratis jika Anda membutuhkan bantuan dalam membuat atau menyempurnakan desain Anda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Bagaimana sistem pembayarannya?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Sistem pembayaran yang kami terapkan:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>DP minimal 50% untuk memulai produksi</li>
                  <li>Pelunasan sebelum barang dikirim</li>
                  <li>Pembayaran bisa melalui transfer bank atau e-wallet</li>
                  <li>Tersedia opsi pembayaran QRIS</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Apakah ada garansi untuk produk?</AccordionTrigger>
              <AccordionContent>
                Ya, kami memberikan garansi untuk setiap produk kami:
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Garansi kualitas sablon/printing</li>
                  <li>Garansi jahitan</li>
                  <li>Garansi ukuran sesuai spesifikasi</li>
                  <li>Garansi retur 100% jika ada cacat produksi</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Bagaimana dengan pengiriman ke luar kota?</AccordionTrigger>
              <AccordionContent>
                Kami melayani pengiriman ke seluruh Indonesia menggunakan jasa ekspedisi terpercaya (JNE, J&T, SiCepat). Biaya pengiriman ditanggung oleh pembeli dan akan dihitung berdasarkan berat paket dan lokasi tujuan. Khusus untuk area Jakarta, kami menyediakan layanan FREE ONGKIR.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
        className="mt-16 text-center"
      >
        <div className="relative inline-block">
          <div className="relative p-6 sm:p-8 rounded-base">
            <h2 className="text-2xl sm:text-3xl font-heading mb-4">
              Siap Untuk Membuat Pesanan?
            </h2>
            <p className="text-lg mb-6">
              Tim kami siap membantu mewujudkan kaos custom impian Anda
            </p>
            <Button size="lg" className="group">
              Mulai Desain Sekarang
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 