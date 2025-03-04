'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Shirt, Palette, Clock, Star, Users, Building2, BadgeCheck, Boxes, Sparkles, CheckCircle2, Truck } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

const heroImages = [
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80",
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
            <span className="font-bold">Ekspresikan Gayamu!</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6"
          >
            Buat Kaos Custom <br />
            <span className="bg-main text-text px-2">Sesuai Keinginanmu</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl mb-8 max-w-lg"
          >
            Wujudkan ide kreatifmu dalam bentuk kaos custom berkualitas dengan bahan premium dan printing terbaik
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
        </motion.div>

        <motion.div 
          variants={scaleIn}
          className="relative aspect-square lg:aspect-auto"
        >
          <div className="absolute -inset-4 bg-main/20 rounded-base transform rotate-3"></div>
          <div className="relative h-full border-4 border-border rounded-base overflow-hidden">
            <Image
              src={heroImages[Math.floor(Math.random() * heroImages.length)]}
              alt="Custom T-Shirt Showcase"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative dots */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-dots opacity-50"></div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16"
      >
        {[
          {
            title: "Bahan Premium",
            description: "Cotton combed 30s dengan jahitan rapi dan nyaman dipakai"
          },
          {
            title: "Printing Berkualitas",
            description: "Teknik DTF/DTG dengan hasil tajam dan tahan lama"
          },
          {
            title: "Design Assistance",
            description: "Konsultasi gratis dengan tim desainer profesional"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-main rounded-base transform transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative bg-background border-4 border-border p-6 rounded-base">
              <h3 className="text-xl font-heading mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Business Solutions */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Solusi untuk Berbagai Kebutuhan</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Apapun kebutuhanmu, kami siap membantu dengan solusi custom clothing terbaik
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Korporat",
              description: "Seragam kantor, merchandise event, atau gift untuk klien"
            },
            {
              title: "Komunitas",
              description: "Kaos komunitas, jersey team, atau merchandise gathering"
            },
            {
              title: "Personal",
              description: "Kaos couple, family gathering, atau hadiah spesial"
            }
          ].map((solution, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-main rounded-base transform transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative bg-background border-4 border-border p-6 rounded-base">
                <h3 className="text-xl font-heading mb-2">{solution.title}</h3>
                <p className="text-foreground/80 mb-4">{solution.description}</p>
                <Button variant="neutral" className="w-full group">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
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
          className="text-2xl sm:text-3xl font-heading mb-12 inline-block bg-main text-text px-6 py-3 rounded-base border-4 border-border shadow-brutal"
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
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="absolute -inset-2 bg-main rounded-base transition-transform group-hover:translate-x-2 group-hover:translate-y-2 transform-gpu"
              ></motion.div>
              <div className="relative bg-background border-4 border-border p-6 rounded-base overflow-hidden">
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

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Apa Kata Mereka?</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Testimoni dari pelanggan yang telah mempercayakan pembuatan kaos custom mereka kepada kami
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="absolute -inset-2 bg-main rounded-base transform-gpu"></div>
              <div className="relative bg-background border-4 border-border p-6 rounded-base">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-border">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-heading text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="relative">
          <div className="absolute -inset-2 bg-main rounded-base transform-gpu"></div>
          <div className="relative bg-background border-4 border-border p-6 sm:p-8 rounded-base text-center">
            <h2 className="text-2xl sm:text-3xl font-heading mb-4">Siap Untuk Membuat Kaos Custom?</h2>
            <p className="text-lg mb-6 sm:mb-8">Hubungi kami sekarang untuk konsultasi gratis!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group w-full sm:w-auto">
                Mulai Desain
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="neutral" size="lg" className="w-full sm:w-auto">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
