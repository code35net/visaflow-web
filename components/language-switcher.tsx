"use client"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { locales, localeNames, localeFlags, type Locale, defaultLocale } from "@/i18n/config"
import { useRouter, usePathname } from "next/navigation"

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (locale: Locale) => {
    // Remove current locale from pathname if it exists
    let newPath = pathname

    // Check if current path starts with a locale
    const segments = pathname.split("/").filter(Boolean)
    if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
      // Remove the locale segment
      newPath = "/" + segments.slice(1).join("/")
    }

    // Add new locale to pathname (except for default locale)
    if (locale === defaultLocale) {
      router.push(newPath || "/")
    } else {
      router.push(`/${locale}${newPath}`)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {localeFlags[currentLocale]} {localeNames[currentLocale]}
          </span>
          <span className="sm:hidden">{localeFlags[currentLocale]}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={`gap-2 ${currentLocale === locale ? "bg-blue-50" : ""}`}
          >
            <span>{localeFlags[locale]}</span>
            <span>{localeNames[locale]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
