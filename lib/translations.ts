import en from '@/locales/en.json'
import ar from '@/locales/ar.json'

const translations = {
  en,
  ar,
}

export type Locale = 'en' | 'ar'

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
} 