export const defaultLocale = "en"
export const locales = ["en", "es", "ar", "tr", "az", "et", "ru"] as const

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ar: "العربية",
  tr: "Türkçe",
  az: "Azərbaycan",
  et: "Eesti",
  ru: "Русский",
}

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  ar: "🇸🇦",
  tr: "🇹🇷",
  az: "🇦🇿",
  et: "🇪🇪",
  ru: "🇷🇺",
}
