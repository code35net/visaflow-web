"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { Globe, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getTranslation, type Language } from "@/lib/translations"

export function Footer() {
  
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


  
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">VisaFlow CRM</span>
              </div>
              <p className="text-gray-400">{getTranslation(currentLang, "crmSolutionDesignedForVisaOffices")}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "product")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "features")}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "pricing")}
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "roadmap")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "support")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "helpCenter")}
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "contact")}
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "apiDocumentation")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "company")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "aboutUs")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "privacy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "terms")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p> <a href="https://code35.net" target="_blank">&copy; CODE35 | A Software Company</a></p>
          </div>
        </div>
      </footer>
  )
}
