import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "VisaFlow CRM - Vize Ofisleri İçin CRM Sistemi",
  description:
    "Küçük ve orta ölçekli vize ofisleri için özel tasarlanmış CRM sistemi. Müşteri takibi, başvuru yönetimi ve randevu sistemi.",
  keywords: "vize, CRM, müşteri yönetimi, randevu sistemi, başvuru takibi",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
