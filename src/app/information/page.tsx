'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, CreditCard, Printer, Ruler, Clock, CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, scaleIn, bounceIn, rotateIn, defaultViewport } from "@/lib/animations"

export default function InformationPage() {
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

      {/* Main Content dengan Grid Layout yang Ditingkatkan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cara Pemesanan dengan Animasi */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative group"
        >
          <motion.div variants={fadeInUp} className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></motion.div>
          <div className="relative bg-background border-4 border-border p-6 rounded-base">
            <h2 className="text-2xl font-heading mb-6 flex items-center">
              <CheckCircle2 className="w-8 h-8 text-main mr-3 animate-pulse-slow" />
              Cara Pemesanan
            </h2>
            <motion.ol variants={staggerContainer} className="space-y-6">
              {[
                "Pilih jenis kaos dan ukuran yang diinginkan",
                "Kirimkan desain atau konsultasikan dengan tim desain kami",
                "Konfirmasi detail pesanan dan harga",
                "Lakukan pembayaran DP minimal 50%",
                "Proses produksi 3-5 hari kerja",
                "Pelunasan dan pengiriman"
              ].map((step, index) => (
                <motion.li 
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start group/item hover:-translate-y-1 transition-transform"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-main text-text font-bold mr-3 border-2 border-border flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <span className="text-base group-hover/item:text-main transition-colors">{step}</span>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </motion.div>

        {/* Ketentuan Design dengan Hover Effects */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative group"
        >
          <motion.div variants={fadeInUp} className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></motion.div>
          <div className="relative bg-background border-4 border-border p-6 rounded-base">
            <h2 className="text-2xl font-heading mb-6 flex items-center">
              <Printer className="w-8 h-8 text-main mr-3 animate-pulse-slow" />
              Ketentuan Design
            </h2>
            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                { title: "Format File", desc: "AI, PSD, PDF, atau PNG (min. 300dpi)" },
                { title: "Ukuran Design", desc: "Maksimal A3 (297 x 420 mm)" },
                { title: "Warna", desc: "Mode warna CMYK untuk hasil terbaik" },
                { title: "Revisi", desc: "Maksimal 2 kali revisi desain" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  className="group/card p-4 border-2 border-border rounded-base hover:-translate-y-1 transition-all hover:border-main hover:shadow-brutal"
                >
                  <h3 className="font-heading text-lg mb-2 group-hover/card:text-main transition-colors">{item.title}</h3>
                  <p className="text-sm text-foreground/80 group-hover/card:text-foreground transition-colors">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Metode Pembayaran dengan Card Hover */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative group"
        >
          <motion.div variants={fadeInUp} className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></motion.div>
          <div className="relative bg-background border-4 border-border p-6 rounded-base">
            <h2 className="text-2xl font-heading mb-6 flex items-center">
              <CreditCard className="w-8 h-8 text-main mr-3 animate-pulse-slow" />
              Metode Pembayaran
            </h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={scaleIn} className="p-4 border-2 border-border rounded-base hover:-translate-y-1 hover:border-main hover:shadow-brutal transition-all">
                <h3 className="font-heading text-lg mb-2">Transfer Bank</h3>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-main rounded-full mr-2"></span>
                    BCA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-main rounded-full mr-2"></span>
                    Mandiri
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-main rounded-full mr-2"></span>
                    BNI
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={scaleIn} className="p-4 border-2 border-border rounded-base hover:-translate-y-1 hover:border-main hover:shadow-brutal transition-all">
                <h3 className="font-heading text-lg mb-2">E-Wallet</h3>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-main rounded-full mr-2"></span>
                    GoPay
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-main rounded-full mr-2"></span>
                    OVO
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-main rounded-full mr-2"></span>
                    DANA
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={scaleIn} className="p-4 border-2 border-border rounded-base hover:-translate-y-1 hover:border-main hover:shadow-brutal transition-all sm:col-span-2">
                <h3 className="font-heading text-lg mb-2">QRIS</h3>
                <p className="text-sm">Pembayaran menggunakan QRIS tersedia untuk semua e-wallet</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Pengiriman dengan Interactive Elements */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative group"
        >
          <motion.div variants={fadeInUp} className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></motion.div>
          <div className="relative bg-background border-4 border-border p-6 rounded-base">
            <h2 className="text-2xl font-heading mb-6 flex items-center">
              <Truck className="w-8 h-8 text-main mr-3 animate-pulse-slow" />
              Pengiriman
            </h2>
            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                { icon: Clock, title: "Estimasi", desc: "2-4 hari tergantung lokasi" },
                { icon: Truck, title: "Jasa Pengiriman", desc: "JNE, J&T, SiCepat" },
                { icon: Ruler, title: "Area", desc: "Pengiriman ke seluruh Indonesia" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  className="flex items-center p-4 border-2 border-border rounded-base hover:-translate-y-1 hover:border-main hover:shadow-brutal transition-all group/shipping"
                >
                  <item.icon className="w-6 h-6 text-main mr-3 group-hover/shipping:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-heading text-lg group-hover/shipping:text-main transition-colors">{item.title}</h3>
                    <p className="text-sm text-foreground/80">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="mt-6 p-4 bg-main/10 text-text rounded-base border-2 border-border relative overflow-hidden group/promo"
            >
              <div className="absolute inset-0 bg-main/20 transform -translate-x-full group-hover/promo:translate-x-0 transition-transform duration-300"></div>
              <p className="font-bold relative z-10">FREE ONGKIR untuk area Jakarta! 🚚</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

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