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

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    // Remove the current locale (/ar or /en) from the pathname to get the base path
    const pathWithoutLocale = pathname.startsWith('/ar')
      ? pathname.substring(3)
      : pathname.startsWith('/en')
        ? pathname.substring(3)
        : pathname;
    // Construct the new path with the new locale, ensuring the root path is handled correctly
    const newPath = `/${newLocale}${pathWithoutLocale || '/'}`;
    // Use router.replace for a cleaner navigation history
    router.replace(newPath);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-2 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
        aria-label="Select language"
      >
        <div className="flex items-center gap-x-2">
          <Globe className="w-4 h-4" />
          <span className="font-medium">{currentLanguage.native}</span>
        </div>
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