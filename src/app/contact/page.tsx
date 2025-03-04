import { Button } from "@/components/ui/button"
import { Phone, Mail, Instagram, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react"

interface ContactInfo {
  icon: any
  label: string
  value: string
  desc: string
  link: string
}

interface WorkshopInfo {
  address: string
  hours: {
    weekday: string
    weekend: string
    sunday: string
  }
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 812-3456-7890",
    desc: "Senin - Sabtu, 09:00 - 17:00",
    link: "tel:+6281234567890"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@fastandloud.com",
    desc: "Respon dalam 24 jam",
    link: "mailto:info@fastandloud.com"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@fastandloud.id",
    desc: "Follow untuk update terbaru",
    link: "https://instagram.com/fastandloud.id"
  }
]

const workshopInfo: WorkshopInfo = {
  address: "Jl. Kemang Raya No. 123, Jakarta Selatan",
  hours: {
    weekday: "09:00 - 17:00",
    weekend: "10:00 - 15:00",
    sunday: "Tutup"
  }
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Pattern Background */}
      <div className="relative overflow-hidden rounded-base border-4 border-border bg-main/5 p-8 mb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                <Sparkles className="w-8 h-8 text-main opacity-20" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center relative">
          <h1 className="text-4xl md:text-5xl font-heading mb-8 border-4 border-border p-4 bg-main text-text shadow-brutal inline-block rotate-[-1deg] transform-gpu animate-slide-up">
            Hubungi Kami
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-slide-up animate-delay-1">
            Kami siap membantu mewujudkan ide kaos custom Anda. Hubungi kami melalui berbagai channel berikut
          </p>
        </div>
      </div>

      {/* Contact Grid with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((info, index) => (
          <div 
            key={index} 
            className="relative group animate-slide-up"
            style={{ animationDelay: `${(index + 2) * 0.1}s` }}
          >
            <div className="absolute -inset-2 bg-main rounded-base transition-transform group-hover:translate-x-2 group-hover:translate-y-2 transform-gpu"></div>
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-background border-4 border-border p-6 rounded-base"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-main border-4 border-border mb-4 mx-auto group-hover:scale-110 transition-transform">
                <info.icon className="w-8 h-8 text-text animate-pulse-slow" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-heading mb-2 group-hover:text-main transition-colors">{info.label}</h3>
                <p className="text-lg font-bold mb-2">{info.value}</p>
                <p className="text-sm text-foreground/80">{info.desc}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Workshop Information with Interactive Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Location */}
        <div className="relative group animate-slide-up animate-delay-3">
          <div className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="relative bg-background border-4 border-border p-6 rounded-base">
            <h2 className="text-2xl font-heading mb-6 flex items-center">
              <MapPin className="w-8 h-8 text-main mr-3 animate-pulse-slow" />
              Lokasi Workshop
            </h2>
            <div className="space-y-4">
              <div className="aspect-video relative rounded-base border-4 border-border overflow-hidden group-hover:shadow-brutal transition-shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.74676690655!2d106.7891455!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1696935515085!5m2!1sid!2sid"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-lg group-hover:text-main transition-colors">{workshopInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Business Hours with Hover Effects */}
        <div className="relative group animate-slide-up animate-delay-3">
          <div className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="relative bg-background border-4 border-border p-6 rounded-base">
            <h2 className="text-2xl font-heading mb-6 flex items-center">
              <Clock className="w-8 h-8 text-main mr-3 animate-pulse-slow" />
              Jam Operasional
            </h2>
            <div className="space-y-4">
              {[
                { time: workshopInfo.hours.weekday, label: "Hari Kerja" },
                { time: workshopInfo.hours.weekend, label: "Akhir Pekan" },
                { time: workshopInfo.hours.sunday, label: "Hari Minggu & Libur Nasional", special: true }
              ].map((schedule, index) => (
                <div 
                  key={index}
                  className={`p-4 border-2 border-border rounded-base hover:-translate-y-1 transition-transform group-hover:shadow-brutal ${
                    schedule.special ? 'bg-main/10' : ''
                  }`}
                >
                  <p className="text-lg font-bold mb-2 group-hover:text-main transition-colors">{schedule.time}</p>
                  <p className="text-sm text-foreground/80">{schedule.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Enhanced Animation */}
      <div className="mt-16 text-center animate-slide-up animate-delay-4">
        <div className="relative inline-block group">
          <div className="absolute -inset-2 bg-main rounded-base transform-gpu transition-transform group-hover:scale-105"></div>
          <div className="relative bg-background border-4 border-border p-6 sm:p-8 rounded-base">
            <h2 className="text-2xl sm:text-3xl font-heading mb-4">
              Ingin Konsultasi Langsung?
            </h2>
            <p className="text-lg mb-6">
              Kunjungi workshop kami atau hubungi via WhatsApp untuk konsultasi gratis
            </p>
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-base font-bold transition-all h-12 px-8 bg-main text-text border-4 border-border shadow-brutal hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Chat WhatsApp
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}