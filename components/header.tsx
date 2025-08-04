"use client"

import { Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "./language-switcher"
import type { Locale } from "@/i18n/config"
import { getTranslation, t } from "@/i18n/utils"
import { defaultLocale } from "@/i18n/config"

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const translations = getTranslation(locale)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path: string) => {
    if (locale === defaultLocale) {
      return pathname === path
    } else {
      const localizedPath = `/${locale}${path}`
      return pathname === localizedPath
    }
  }

  const getLocalizedPath = (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`
  }

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href={getLocalizedPath("/")} className="flex items-center space-x-2">
            
            <span className="text-xl font-bold text-gray-900">
              <img src="/visaflow-logo.png"  alt="visaflow logo" style={{ height: "35px" }}/>

            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href={getLocalizedPath("/")}
              className={`transition-colors ${isActive("/") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
            >
              {t(translations, "nav.home")}
            </Link>
            <Link
              href={getLocalizedPath("/features")}
              className={`transition-colors ${isActive("/features") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
            >
              {t(translations, "nav.features")}
            </Link>
            <Link
              href={getLocalizedPath("/pricing")}
              className={`transition-colors ${isActive("/pricing") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
            >
              Pricing
            </Link>
            <Link
              href={getLocalizedPath("/roadmap")}
              className={`transition-colors ${isActive("/roadmap") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
            >
              {t(translations, "nav.roadmap")}
            </Link>
            <Link
              href={getLocalizedPath("/references")}
              className={`transition-colors ${isActive("/references") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
            >
              {t(translations, "nav.references")}
            </Link>
            <Link
              href={getLocalizedPath("/contact")}
              className={`transition-colors ${isActive("/contact") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
            >
              {t(translations, "nav.contact")}
            </Link>
          </nav>

          {/* Desktop CTA Buttons and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            
            <Link href={getLocalizedPath("/signin")}>
              <Button>{t(translations, "nav.signIn")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href={getLocalizedPath("/")}
                className={`py-2 border-b border-gray-100 transition-colors ${isActive("/") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
                onClick={toggleMobileMenu}
              >
                {t(translations, "nav.home")}
              </Link>
              <Link
                href={getLocalizedPath("/features")}
                className={`py-2 border-b border-gray-100 transition-colors ${isActive("/features") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
                onClick={toggleMobileMenu}
              >
                {t(translations, "nav.features")}
              </Link>
              <Link
                href={getLocalizedPath("/pricing")}
                className={`py-2 border-b border-gray-100 transition-colors ${isActive("/pricing") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
                onClick={toggleMobileMenu}
              >
                Pricing
              </Link>
              <Link
                href={getLocalizedPath("/roadmap")}
                className={`py-2 border-b border-gray-100 transition-colors ${isActive("/roadmap") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
                onClick={toggleMobileMenu}
              >
                {t(translations, "nav.roadmap")}
              </Link>
              <Link
                href={getLocalizedPath("/references")}
                className={`py-2 border-b border-gray-100 transition-colors ${isActive("/references") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
                onClick={toggleMobileMenu}
              >
                {t(translations, "nav.references")}
              </Link>
              <Link
                href={getLocalizedPath("/contact")}
                className={`py-2 border-b border-gray-100 transition-colors ${isActive("/contact") ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
                onClick={toggleMobileMenu}
              >
                {t(translations, "nav.contact")}
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <div className="pb-3">
                  <LanguageSwitcher currentLocale={locale} />
                </div>
                
                <Link href={getLocalizedPath("/signin")}>
                  <Button className="justify-start w-full" onClick={toggleMobileMenu}>
                    {t(translations, "nav.signIn")}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
