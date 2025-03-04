import { Button } from "@/components/ui/button"
import { Search, Package, ArrowRight, AlertCircle } from "lucide-react"

export default function OrderStatusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading mb-8 border-4 border-border p-4 bg-main text-text shadow-brutal inline-block rotate-[-1deg] transform-gpu">
          Cek Status Pesanan
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Pantau status pesanan kaos custom Anda dengan memasukkan nomor pesanan
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-2 bg-main rounded-base transform-gpu"></div>
          <div className="relative bg-background border-4 border-border p-6 sm:p-8 rounded-base">
            {/* Search Form */}
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="order-id" className="block text-lg font-heading mb-2 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-main" />
                    Nomor Pesanan
                  </label>
                  <input
                    type="text"
                    id="order-id"
                    placeholder="Contoh: FL-20231010-001"
                    className="w-full p-3 border-4 border-border rounded-base bg-background focus:outline-none focus:ring-2 focus:ring-main"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-heading mb-2 flex items-center">
                    <Search className="w-5 h-5 mr-2 text-main" />
                    Email Pemesan
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email yang terdaftar saat pemesanan"
                    className="w-full p-3 border-4 border-border rounded-base bg-background focus:outline-none focus:ring-2 focus:ring-main"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Cek Status
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Info Box */}
            <div className="mt-8 p-4 border-2 border-border rounded-base bg-main/10">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-main mr-3 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="font-bold mb-1">Catatan:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Nomor pesanan dapat ditemukan di email konfirmasi pesanan</li>
                    <li>Gunakan email yang sama dengan saat melakukan pemesanan</li>
                    <li>Status pesanan akan diupdate secara real-time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-main rounded-base transform-gpu"></div>
            <div className="relative bg-background border-4 border-border p-6 sm:p-8 rounded-base">
              <h2 className="text-2xl font-heading mb-4">
                Butuh Bantuan?
              </h2>
              <p className="text-lg mb-6">
                Hubungi customer service kami untuk bantuan tracking pesanan
              </p>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-base font-bold transition-all h-11 px-4 py-2 bg-main text-text border-4 border-border shadow-brutal hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none group"
              >
                Chat WhatsApp
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 