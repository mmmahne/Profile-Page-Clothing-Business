import { Button } from "@/components/ui/button"
import { ArrowRight, Shirt, Palette, Clock, Star, Users, Building2, BadgeCheck, Boxes, Sparkles } from "lucide-react"
import Image from "next/image"

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
      <section className="py-6 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 relative">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-main/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-main/20 rounded-full blur-xl animate-pulse-slow"></div>
            
            {/* Badge */}
            <div className="relative group cursor-default animate-slide-up">
              <div className="absolute -inset-1 bg-main rounded-base transition-transform group-hover:translate-x-1 group-hover:translate-y-1 transform-gpu"></div>
              <div className="relative bg-background px-4 py-2 rounded-base border-4 border-border shadow-brutal rotate-[-2deg] transform-gpu flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-pulse-slow" />
                <span>Ekspresikan Gayamu!</span>
              </div>
            </div>

            {/* Heading */}
            <div className="relative animate-slide-up animate-delay-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading leading-tight">
                Buat Kaos Custom
                <span className="relative inline-block w-full">
                  <span className="absolute -inset-1 bg-main/20 skew-y-3 rounded-base"></span>
                  <span className="relative block text-main mt-2">Sesuai Keinginanmu</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl relative animate-slide-up animate-delay-2">
              <span className="bg-gradient-to-r from-main/20 to-transparent bg-[length:100%_10px] bg-no-repeat bg-bottom">
                Desain kaos custom berkualitas tinggi dengan harga terjangkau.
              </span>
              <br />
              Cocok untuk individu, komunitas, atau bisnis.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 relative animate-slide-up animate-delay-3">
              <Button size="lg" className="group w-full sm:w-auto relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-main transition-transform group-hover:scale-110"></span>
                <span className="relative flex items-center justify-center">
                  Mulai Desain
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                variant="neutral" 
                size="lg" 
                className="w-full sm:w-auto group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-0 bg-main/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative">Lihat Katalog</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 animate-slide-up animate-delay-4">
              <div className="text-center p-3 border-2 border-border rounded-base bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="text-2xl font-heading text-main">500+</div>
                <div className="text-sm">Klien Puas</div>
              </div>
              <div className="text-center p-3 border-2 border-border rounded-base bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="text-2xl font-heading text-main">50k+</div>
                <div className="text-sm">Kaos Dibuat</div>
              </div>
              <div className="text-center p-3 border-2 border-border rounded-base bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="text-2xl font-heading text-main">4.9</div>
                <div className="text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 md:mt-0 animate-fade-in animate-delay-2">
            <div className="absolute -top-4 -left-4 w-full h-full bg-main border-4 border-border rounded-base transform-gpu animate-pulse-slow"></div>
            <div className="relative z-10 border-4 border-border rounded-base overflow-hidden shadow-brutal aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <Image
                src={heroImages[Math.floor(Math.random() * heroImages.length)]}
                alt="Custom T-Shirt Showcase"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform z-20">
                <p className="text-sm font-medium text-center">Klik untuk melihat katalog lengkap kami</p>
              </div>
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-main animate-pulse-slow" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-main text-text px-6 py-3 rounded-base border-4 border-border shadow-brutal -rotate-[2deg] transform-gpu">
          <h2 className="text-xl sm:text-2xl font-heading">Kenapa Memilih Kami?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
          <div className="bg-background border-4 border-border p-6 rounded-base shadow-brutal hover:-translate-y-1 transition-transform transform-gpu">
            <Shirt className="w-12 h-12 mb-4 text-main" />
            <h3 className="text-xl font-heading mb-2">Kualitas Premium</h3>
            <p className="text-sm sm:text-base">Bahan katun premium dengan jahitan rapi dan printing tahan lama</p>
          </div>
          <div className="bg-background border-4 border-border p-6 rounded-base shadow-brutal hover:-translate-y-1 transition-transform transform-gpu">
            <Palette className="w-12 h-12 mb-4 text-main" />
            <h3 className="text-xl font-heading mb-2">Desain Custom</h3>
            <p className="text-sm sm:text-base">Tim desainer profesional siap membantu mewujudkan ide Anda</p>
          </div>
          <div className="bg-background border-4 border-border p-6 rounded-base shadow-brutal hover:-translate-y-1 transition-transform transform-gpu">
            <Clock className="w-12 h-12 mb-4 text-main" />
            <h3 className="text-xl font-heading mb-2">Pengerjaan Cepat</h3>
            <p className="text-sm sm:text-base">Proses produksi 3-5 hari kerja dengan hasil maksimal</p>
          </div>
          <div className="bg-background border-4 border-border p-6 rounded-base shadow-brutal hover:-translate-y-1 transition-transform transform-gpu">
            <Star className="w-12 h-12 mb-4 text-main" />
            <h3 className="text-xl font-heading mb-2">Harga Bersaing</h3>
            <p className="text-sm sm:text-base">Dapatkan kualitas terbaik dengan harga yang terjangkau</p>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Solusi Bisnis Custom T-Shirt</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Pilihan tepat untuk berbagai kebutuhan bisnis Anda dengan layanan yang disesuaikan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessTypes.map((business, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-2 bg-main rounded-base transition-transform group-hover:translate-x-2 group-hover:translate-y-2 transform-gpu"></div>
              <div className="relative bg-background border-4 border-border p-6 rounded-base h-full">
                <business.icon className="w-12 h-12 text-main mb-4" />
                <h3 className="text-xl font-heading mb-3">{business.title}</h3>
                <p className="text-sm mb-4">{business.description}</p>
                <ul className="space-y-2">
                  {business.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <BadgeCheck className="w-4 h-4 text-main mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-main/5 -mx-4 px-4">
        <h2 className="text-2xl sm:text-3xl font-heading mb-12 inline-block bg-main text-text px-6 py-3 rounded-base border-4 border-border shadow-brutal">
          Proses Pembuatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              step: "01",
              title: "Pilih & Desain",
              desc: "Pilih jenis kaos dan upload desain atau konsultasikan dengan tim kami"
            },
            {
              step: "02",
              title: "Konfirmasi",
              desc: "Review desain final dan lakukan pembayaran untuk memulai produksi"
            },
            {
              step: "03",
              title: "Produksi & Kirim",
              desc: "Kaos diproduksi dengan teliti dan dikirim ke lokasi Anda"
            }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-2 bg-main rounded-base transition-transform group-hover:translate-x-2 group-hover:translate-y-2 transform-gpu"></div>
              <div className="relative bg-background border-4 border-border p-6 rounded-base">
                <div className="text-3xl sm:text-4xl font-heading text-main mb-4">{item.step}</div>
                <h3 className="text-lg sm:text-xl font-heading mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
