'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Shirt, Palette, Clock, Star, Users, Building2, BadgeCheck, Boxes, Sparkles, CheckCircle2, Truck } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, scaleIn, bounceIn, defaultViewport } from '@/lib/animations'
import { Typewriter } from '@/components/ui/typewriter'

const heroImages = [
  'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80', // Kaos polos
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80', // Kaos dengan desain
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80', // Workshop
]

const businessTypes = [
  {
    icon: Building2,
    title: "Korporat",
    description: "Seragam karyawan, merchandise event, dan gift untuk klien dengan kualitas premium",
    features: ["Minimum order 50pcs", "Free design konsultasi", "Pengerjaan cepat", "Harga khusus corporate"]
  },
  {
    icon: Users,
    title: "Komunitas",
    description: "Kaos untuk komunitas, organisasi, atau kelompok dengan desain yang menyatukan",
    features: ["Minimum order 24pcs", "Konsultasi desain", "Berbagai pilihan bahan", "Harga group diskon"]
  },
  {
    icon: Boxes,
    title: "Reseller",
    description: "Program khusus reseller dengan harga dan fasilitas yang menguntungkan",
    features: ["Minimum order 100pcs", "Support marketing kit", "Priority production", "Harga reseller"]
  }
]

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Manager HR - PT. Maju Bersama",
    content: "Kualitas produk sangat bagus dan konsisten. Pengerjaan tepat waktu sesuai deadline yang dijanjikan.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Rina Wijaya",
    role: "Ketua Komunitas Hiking Jakarta",
    content: "Design tim sangat membantu dalam mewujudkan konsep kaos komunitas kami. Hasilnya memuaskan!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    name: "Ahmad Fadli",
    role: "Owner - Clothing Store",
    content: "Program reseller sangat menguntungkan. Support tim yang responsif memudahkan bisnis kami.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8"
      >
        <motion.div variants={fadeInUp} className="flex flex-col justify-center">
          <motion.div 
            variants={scaleIn}
            className="inline-flex items-center gap-2 bg-main text-text px-4 py-2 rounded-base border-2 border-border mb-4 w-fit"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">
              <Typewriter text="Jasa Sablon Kaos Blitar" delay={0.5} />
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6"
          >
            <span className="block mb-4">
              <Typewriter text="Produksi Kaos Custom" delay={0.8} />
            </span>
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-1 bg-main transform rotate-2 rounded-base"></span>
              <span className="relative inline-block px-4 py-2 bg-text text-background border-4 border-border rounded-base transform -rotate-2 hover:rotate-0 transition-transform">
                <Typewriter text="Terbaik di Blitar" delay={1.2} />
              </span>
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl mb-8 max-w-lg"
          >
            <Typewriter 
              text="Spesialis produksi kaos custom & sablon kaos di Blitar dengan kualitas premium. Melayani pembuatan kaos satuan hingga partai besar untuk berbagai kebutuhan." 
              delay={1.5} 
            />
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="group">
              Mulai Desain
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="neutral" size="lg">
              Lihat Katalog
            </Button>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mt-12"
          >
            {[
              { number: "500+", label: "Klien Puas" },
              { number: "50K+", label: "Kaos Dibuat" },
              { number: "4.9", label: "Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-background border-4 border-border p-4 rounded-base hover:shadow-brutal transition-all"
              >
                <h3 className="text-2xl font-heading">{stat.number}</h3>
                <p className="text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Marquee Section */}
          <motion.div 
            variants={fadeInUp} 
            className="w-full overflow-hidden py-4 bg-main/10 border-y-4 border-border mt-12"
          >
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-4">
                  <span className="text-lg font-bold">🎨 Design Keren, Kualitas Premium</span>
                  <span className="text-lg font-bold">🚚 Gratis Ongkir Area Blitar</span>
                  <span className="text-lg font-bold">⭐ Rating 4.9 dari 500+ Client</span>
                  <span className="text-lg font-bold">⚡ Proses Cepat 3-5 Hari</span>
                  <span className="text-lg font-bold">🛡️ Garansi 100% Uang Kembali</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={scaleIn}
          className="relative aspect-square lg:aspect-[4/3] lg:h-[600px] flex items-center justify-center p-4"
        >
          {/* Main Image Container */}
          <div className="relative w-full h-full overflow-hidden rounded-base">
            <Image
              src={heroImages[Math.floor(Math.random() * heroImages.length)]}
              alt="Custom T-Shirt Showcase"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-main/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-main/20 rounded-full animate-float"></div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16"
      >
        <motion.h2 
          variants={scaleIn}
          className="text-2xl sm:text-3xl section-label mb-12 inline-block bg-main text-text px-6 py-3 rounded-base border-4 border-border shadow-brutal"
        >
          Keunggulan Kami
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shirt,
              title: "Bahan Premium",
              description: "Cotton combed 30s dan CVC berkualitas tinggi dengan jahitan rapi dan nyaman dipakai",
              features: ["100% Cotton Combed 30s", "Jahitan Rantai", "Anti Susut", "Nyaman Dipakai"]
            },
            {
              icon: Palette,
              title: "Teknik Sablon Modern",
              description: "Menggunakan teknik DTF/DTG dengan hasil tajam, awet, dan tahan lama",
              features: ["Hasil Tajam & Detail", "Tahan Lama", "Anti Luntur", "Tekstur Halus"]
            },
            {
              icon: Users,
              title: "Konsultasi Desain",
              description: "Gratis konsultasi dengan tim desainer profesional untuk hasil terbaik",
              features: ["Tim Profesional", "Revisi Desain", "Support File AI/PSD", "Ide Kreatif"]
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative bg-background border-4 border-border p-6 rounded-base overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-main/10 rounded-full transform rotate-45 group-hover:scale-110 transition-transform"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-main rounded-base border-4 border-border flex items-center justify-center shadow-brutal group-hover:shadow-none transition-all group-hover:translate-x-[4px] group-hover:translate-y-[1px]">
                    <feature.icon className="w-8 h-8 text-text animate-pulse-slow" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-heading mb-3 group-hover:text-main transition-colors">{feature.title}</h3>
                  <p className="text-foreground/80 mb-4">{feature.description}</p>
                  
                  {/* Feature List */}
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm group/item">
                        <CheckCircle2 className="w-4 h-4 text-main mr-2 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="group-hover/item:text-main transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Business Solutions */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16"
      >
        <motion.h2 
          variants={scaleIn}
          className="text-2xl sm:text-3xl section-label mb-12 inline-block bg-main text-text px-6 py-3 rounded-base border-4 border-border shadow-brutal"
        >
          Layanan Produksi Kaos Blitar
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Users,
              title: "Kaos Kelas & Organisasi",
              description: "Spesialis kaos kelas, kaos angkatan, dan kaos organisasi dengan desain kekinian",
              features: ["Design Kekinian", "Bahan Berkualitas", "Harga Grup", "Free Design"]
            },
            {
              icon: Building2,
              title: "Garment & Maklon",
              description: "Layanan garment dan maklon kaos untuk brand clothing dan distro",
              features: ["Produksi Massal", "Quality Control", "Label Custom", "Packaging Premium"]
            },
            {
              icon: Boxes,
              title: "Merchandise & Promosi",
              description: "Produksi kaos untuk merchandise event dan keperluan promosi perusahaan",
              features: ["Design Corporate", "Express Service", "Bulk Order", "Custom Packaging"]
            }
          ].map((solution, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative bg-background border-4 border-border p-6 rounded-base overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-main/10 rounded-full transform rotate-45 group-hover:scale-110 transition-transform"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-main rounded-base border-4 border-border flex items-center justify-center shadow-brutal group-hover:shadow-none transition-all group-hover:translate-x-[4px] group-hover:translate-y-[1px]">
                    <solution.icon className="w-8 h-8 text-text animate-pulse-slow" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-heading mb-3 group-hover:text-main transition-colors">{solution.title}</h3>
                  <p className="text-foreground/80 mb-4">{solution.description}</p>
                  
                  {/* Feature List */}
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm group/item">
                        <CheckCircle2 className="w-4 h-4 text-main mr-2 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="group-hover/item:text-main transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="neutral" className="w-full group shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[1px] transition-all">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Proses Pembuatan */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16"
      >
        <motion.h2 
          variants={scaleIn}
          className="text-2xl sm:text-3xl section-label mb-12 inline-block bg-background text-text px-6 py-3 rounded-base"
        >
          Proses Pembuatan
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            {
              step: "01",
              title: "Pilih & Desain",
              desc: "Pilih jenis kaos dan upload desain atau konsultasikan dengan tim kami",
              icon: Palette
            },
            {
              step: "02",
              title: "Konfirmasi",
              desc: "Review desain final dan lakukan pembayaran untuk memulai produksi",
              icon: CheckCircle2
            },
            {
              step: "03",
              title: "Produksi & Kirim",
              desc: "Kaos diproduksi dengan teliti dan dikirim ke lokasi Anda",
              icon: Truck
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              custom={i}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-background p-6 rounded-base overflow-hidden">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.3 }}
                  className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-main/10 rounded-full"
                />
                <div className="relative z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: i * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-3xl sm:text-4xl font-heading text-main mb-4"
                  >
                    {item.step}
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.3 }}
                  >
                    <h3 className="text-lg sm:text-xl font-heading mb-2 group-hover:text-main transition-colors">{item.title}</h3>
                    <p className="text-sm sm:text-base text-foreground/80">{item.desc}</p>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: i * 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="absolute bottom-4 right-4"
                  >
                    <item.icon className="w-8 h-8 text-main opacity-50 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Client Section dengan Marquee */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        className="py-16"
      >
        <motion.div variants={fadeInUp} className="container mb-12">
          <h2 className="text-2xl md:text-3xl font-heading text-center mb-2">
            <Typewriter text="Client Kami" delay={0.5} />
          </h2>
          <p className="text-center text-foreground/70">
            <Typewriter text="Dipercaya oleh berbagai brand dan organisasi" delay={1} />
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* First Marquee - Left to Right */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-8">
                {[1, 2, 3, 4, 5].map((num, index) => (
                  <div key={index} className="relative w-32 h-20 bg-background rounded-base p-4 transform hover:scale-105 transition-transform">
                    <Image
                      src={`https://images.unsplash.com/photo-${num === 1 ? '1599305445671-ac291c95aaa9' : '1603366615917-1fa6dad5c4fa'}`}
                      alt={`Client Logo ${num}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Second Marquee - Right to Left */}
          <div className="flex animate-marquee-reverse whitespace-nowrap mt-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-8">
                {[1, 2, 3, 4, 5].map((num, index) => (
                  <div key={index} className="relative w-32 h-20 bg-background rounded-base p-4 transform hover:scale-105 transition-transform">
                    <Image
                      src={`https://images.unsplash.com/photo-${num === 1 ? '1603366615917-1fa6dad5c4fa' : '1599305445671-ac291c95aaa9'}`}
                      alt={`Client Logo ${num + 5}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="relative">
          <div className="relative bg-background p-6 sm:p-8 rounded-base text-center">
            <h2 className="text-2xl sm:text-3xl font-heading mb-4">Butuh Jasa Produksi Kaos di Blitar?</h2>
            <p className="text-lg mb-6 sm:mb-8">Hubungi kami sekarang untuk penawaran terbaik!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group w-full sm:w-auto">
                Pesan Sekarang
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="neutral" size="lg" className="w-full sm:w-auto">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fast and Loud Custom T-Shirt Blitar",
            "image": [
              "URL_TO_YOUR_LOGO_OR_SHOP_IMAGE"
            ],
            "@id": "https://fastandloud.id",
            "url": "https://fastandloud.id",
            "telephone": "YOUR_PHONE_NUMBER",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bacem, Ponggok",
              "addressLocality": "Blitar",
              "postalCode": "66153",
              "addressRegion": "Jawa Timur",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -8.0008212,
              "longitude": 112.1164736
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "17:00"
            },
            "sameAs": [
              "YOUR_FACEBOOK_URL",
              "YOUR_INSTAGRAM_URL",
              "YOUR_TWITTER_URL"
            ]
          })
        }}
      />
    </div>
  )
}
