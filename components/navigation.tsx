"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { Globe, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getTranslation, type Language } from "@/lib/translations"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<Language>("tr")
  const pathname = usePathname()

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang) setCurrentLang(savedLang)

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail as Language)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  const navItems = [
    { href: "/", label: getTranslation(currentLang, "home") },
    { href: "/features", label: getTranslation(currentLang, "features") },
    { href: "/roadmap", label: getTranslation(currentLang, "roadmap") },
    { href: "/pricing", label: getTranslation(currentLang, "pricing") },
    { href: "/testimonials", label: getTranslation(currentLang, "testimonials") },
    { href: "/contact", label: getTranslation(currentLang, "contact") },
  ]

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            
            <span className="text-xl font-bold text-gray-900">
              <img
                  src="/visaflow-logo.png"
                  alt="VisaFlow Logo"
                  className="h-10 w-auto"
                />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button variant="ghost">{getTranslation(currentLang, "login")}</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">{getTranslation(currentLang, "freeTrial")}</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 font-medium bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  {getTranslation(currentLang, "login")}
                </Button>

              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
