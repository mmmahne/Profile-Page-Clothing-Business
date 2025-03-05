'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, CreditCard, Printer, Ruler, Clock, CheckCircle2, Sparkles, FileCheck, Send, Palette, ShoppingCart, CreditCard as PaymentIcon, Banknote, Wallet, ChevronRight, ImageIcon, Boxes, PackageCheck, MapPin, Scale, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, scaleIn, bounceIn, rotateIn, defaultViewport } from "@/lib/animations"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState } from "react"

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

const paymentMethods = [
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
            className="text-4xl md:text-5xl font-heading mb-8 border-4 border-border p-4 bg-main text-text shadow-brutal inline-block rotate-[-1deg] transform-gpu"
          >
            Informasi Pemesanan
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Pelajari cara pemesanan dan informasi penting lainnya untuk mendapatkan kaos custom terbaik
          </motion.p>
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
            className="text-2xl sm:text-3xl font-heading mb-12 inline-block bg-main text-text px-6 py-3 rounded-base border-4 border-border shadow-brutal"
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
            className="text-2xl sm:text-3xl font-heading mb-12 inline-block bg-main text-text px-6 py-3 rounded-base border-4 border-border shadow-brutal"
          >
            Ketentuan Design
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
                className="relative group"
              >
                <div className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-background border-4 border-border p-6 rounded-base h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-main/20 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                        <div className="relative w-12 h-12 flex items-center justify-center bg-main/10 rounded-full border-2 border-border">
                          <item.icon className="w-6 h-6 text-main animate-pulse-slow" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading text-lg mb-2 group-hover:text-main transition-colors">{item.title}</h3>
                      <p className="text-sm text-foreground/80 mb-3">{item.desc}</p>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-main/10 rounded-base border border-border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="text-sm flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-main flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-8 p-4 bg-main/10 rounded-base border-2 border-border"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-main flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Catatan Penting:</p>
                <ul className="text-sm space-y-1">
                  <li>• Pastikan design sudah final sebelum disubmit</li>
                  <li>• Revisi maksimal 2x setelah approval design</li>
                  <li>• Sertakan color code untuk warna spesifik</li>
                  <li>• File dalam format yang didukung untuk menghindari delay produksi</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Metode Pembayaran dengan Grid Layout */}
        <motion.div 
          id="metode-pembayaran"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mb-16 scroll-mt-32"
        >
          <motion.h2 
            variants={scaleIn}
            className="text-2xl sm:text-3xl font-heading mb-12 inline-block bg-main text-text px-6 py-3 rounded-base border-4 border-border shadow-brutal"
          >
            Metode Pembayaran
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {paymentMethods.map((method, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-background border-4 border-border p-6 rounded-base h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-main/10 border-2 border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                      <method.icon className="w-6 h-6 text-main" />
                    </div>
                    <h3 className="ml-4 text-xl font-heading group-hover:text-main transition-colors">{method.name}</h3>
                  </div>
                  
                  <p className="text-sm text-foreground/80 mb-4">{method.description}</p>
                  
                  <div className="space-y-2">
                    {method.banks && (
                      <div className="flex flex-wrap gap-2">
                        {method.banks.map((bank, idx) => (
                          <span key={idx} className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            {bank}
                          </span>
                        ))}
                      </div>
                    )}
                    {method.types && (
                      <div className="flex flex-wrap gap-2">
                        {method.types.map((type, idx) => (
                          <span key={idx} className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            {type}
                          </span>
                        ))}
                      </div>
                    )}
                    {method.places && (
                      <div className="flex flex-wrap gap-2">
                        {method.places.map((place, idx) => (
                          <span key={idx} className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">
                            {place}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
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
          className="relative group scroll-mt-32"
        >
          <motion.div variants={fadeInUp} className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></motion.div>
          <div className="relative bg-background border-4 border-border p-6 rounded-base">
            <h2 className="text-2xl font-heading mb-6 flex items-center">
              <Truck className="w-8 h-8 text-main mr-3 animate-pulse-slow" />
              Pengiriman
            </h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center p-4 border-2 border-border rounded-base hover:-translate-y-1 hover:border-main hover:shadow-brutal transition-all group/shipping">
                  <Clock className="w-6 h-6 text-main mr-3 group-hover/shipping:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-heading text-lg group-hover/shipping:text-main transition-colors">Estimasi Pengiriman</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-main/70" />
                        <span>JABODETABEK: 1-2 hari</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-main/70" />
                        <span>Jawa: 2-3 hari</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-main/70" />
                        <span>Luar Jawa: 3-5 hari</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center p-4 border-2 border-border rounded-base hover:-translate-y-1 hover:border-main hover:shadow-brutal transition-all group/shipping">
                  <PackageCheck className="w-6 h-6 text-main mr-3 group-hover/shipping:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-heading text-lg group-hover/shipping:text-main transition-colors">Jaminan Pengiriman</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-main/70" />
                        <span>Packaging double wrapping</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-main/70" />
                        <span>Asuransi pengiriman</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-main/70" />
                        <span>Tracking real-time</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center p-4 border-2 border-border rounded-base hover:-translate-y-1 hover:border-main hover:shadow-brutal transition-all group/shipping">
                  <Scale className="w-6 h-6 text-main mr-3 group-hover/shipping:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-heading text-lg group-hover/shipping:text-main transition-colors">Biaya Pengiriman</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-main/70" />
                        <span>Dihitung per kg</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-main/70" />
                        <span>Min. 1 kg pertama</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-main/70" />
                        <span>Diskon untuk bulk order</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center p-4 border-2 border-border rounded-base hover:-translate-y-1 hover:border-main hover:shadow-brutal transition-all group/shipping">
                  <Boxes className="w-6 h-6 text-main mr-3 group-hover/shipping:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-heading text-lg group-hover/shipping:text-main transition-colors">Ekspedisi Partner</h3>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">JNE Express</span>
                      <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">J&T Express</span>
                      <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">SiCepat</span>
                      <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">AnterAja</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 border-2 border-border rounded-base hover:-translate-y-1 hover:border-main hover:shadow-brutal transition-all group/shipping">
                  <MapPin className="w-6 h-6 text-main mr-3 group-hover/shipping:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-heading text-lg group-hover/shipping:text-main transition-colors">Area Pengiriman</h3>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">Seluruh Indonesia</span>
                      <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">Luar Negeri</span>
                      <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">Pickup</span>
                      <span className="text-sm px-3 py-1 bg-main/10 rounded-base border border-border">COD Area</span>
                    </div>
                  </div>
                </div>

                <motion.div 
                  variants={fadeInUp}
                  className="p-4 bg-main/10 text-text rounded-base border-2 border-border relative overflow-hidden group/promo"
                >
                  <div className="absolute inset-0 bg-main/20 transform -translate-x-full group-hover/promo:translate-x-0 transition-transform duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="font-bold flex items-center gap-2 mb-2">
                      <Truck className="w-5 h-5 text-main animate-pulse" />
                      Promo Pengiriman
                    </h3>
                    <ul className="text-sm space-y-1">
                      <li>• FREE ONGKIR untuk area Jakarta! 🚚</li>
                      <li>• Diskon 10% untuk pengiriman Pulau Jawa</li>
                      <li>• Cashback ongkir untuk order {'>'} 100pcs</li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
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
          className="text-2xl sm:text-3xl font-heading mb-12 inline-block bg-main text-text px-6 py-3 rounded-base border-4 border-border shadow-brutal"
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

      {/* CTA Section dengan Enhanced Animation */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
        className="mt-16 text-center"
      >
        <div className="relative inline-block group">
          <motion.div variants={scaleIn} className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:scale-105"></motion.div>
          <div className="relative bg-background border-4 border-border p-6 sm:p-8 rounded-base">
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