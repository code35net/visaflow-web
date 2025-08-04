import type React from "react"
import { notFound } from "next/navigation"
import { locales, type Locale } from "@/i18n/config"

interface LocaleLayoutProps {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!locales.includes(params.locale)) {
    notFound()
  }

  return (
    <html lang={params.locale} dir={params.locale === "ar" ? "rtl" : "ltr"}>
      <body>{children}</body>
    </html>
  )
}
