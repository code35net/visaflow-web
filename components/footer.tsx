import { Globe } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { getTranslation, t } from "@/i18n/utils"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const translations = getTranslation(locale)

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              
              <span className="text-xl font-bold">VisaFlow CRM</span>
            </div>
            <p className="text-gray-400">The complete CRM solution for visa offices worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href={getLocalizedPath("/features")} className="hover:text-white transition-colors">
                  {t(translations, "nav.features")}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath("/pricing")} className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link href={getLocalizedPath("/roadmap")} className="hover:text-white transition-colors">
                  {t(translations, "nav.roadmap")}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath("/references")} className="hover:text-white transition-colors">
                  {t(translations, "nav.references")}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath("/contact")} className="hover:text-white transition-colors">
                  {t(translations, "nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VisaFlow CRM. A CODE35 Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
