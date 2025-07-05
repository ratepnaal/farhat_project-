'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  
  // Extract current locale from pathname
  const currentLocale = pathname.startsWith('/ar') ? 'ar' : 'en'
  
  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ar', name: 'Arabic', native: 'عربي' }
  ]

  const handleLanguageChange = (locale: string) => {
    setIsOpen(false)
    const newPath = locale === 'en' ? '/' : `/${locale}`
    router.push(newPath)
  }

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{currentLanguage.native}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                currentLocale === language.code ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : ''
              } ${language.code === 'ar' ? 'font-arabic' : ''}`}
            >
              {language.native}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 