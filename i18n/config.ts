export const defaultLocale = "tr"
export const locales = ["tr","en", "ar","es", "az", "et", "ru"] as const

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  ar: "العربية",
  es: "Español",  
  az: "Azərbaycan",
  et: "Eesti",
  ru: "Русский",
}

export const localeFlags: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇺🇸",
  ar: "🇸🇦",
  es: "🇪🇸",
  az: "🇦🇿",
  et: "🇪🇪",
  ru: "🇷🇺",
}
