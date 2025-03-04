import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fast and Loud - Jasa Sablon & Produksi Kaos Custom Blitar',
  description: 'Jasa pembuatan kaos custom terbaik di Blitar. Melayani sablon kaos, kaos kelas, garment, dan produksi kaos satuan hingga partai besar dengan kualitas premium. ⭐ Harga Bersaing',
  keywords: 'sablon kaos blitar, kaos custom blitar, kaos kelas blitar, bikin kaos blitar, maklon kaos blitar, garment blitar, produksi kaos blitar, pabrik kaos blitar, sablon kaos, kaos custom, maklon kaos',
  openGraph: {
    title: 'Fast and Loud - Jasa Sablon & Produksi Kaos Custom Blitar',
    description: 'Jasa pembuatan kaos custom terbaik di Blitar. Melayani sablon kaos, kaos kelas, garment, dan produksi kaos satuan hingga partai besar dengan kualitas premium.',
    url: 'https://fastandloud.id',
    siteName: 'Fast and Loud Custom T-Shirt Blitar',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Nanti bisa diisi dengan kode verifikasi Google Search Console
  },
  alternates: {
    canonical: 'https://fastandloud.id',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${dmSans.className} min-h-screen bg-background antialiased flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 pt-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
