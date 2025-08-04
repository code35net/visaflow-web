import { translations, type TranslationKeys } from "./translations"
import { type Locale, defaultLocale } from "./config"

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale as keyof typeof translations] || translations[defaultLocale]
}

export function t(translations: TranslationKeys, key: string, params?: Record<string, string | number>): string {
  const keys = key.split(".")
  let value: any = translations

  for (const k of keys) {
    value = value?.[k]
  }

  if (typeof value !== "string") {
    console.warn(`Translation key "${key}" not found`)
    return key
  }

  if (params) {
    return value.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
      return params[paramKey]?.toString() || match
    })
  }

  return value
}

export function formatNumber(num: number, locale: Locale): string {
  return new Intl.NumberFormat(locale).format(num)
}

export function formatCurrency(amount: number, locale: Locale, currency = "USD"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount)
}
