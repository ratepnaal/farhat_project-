'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LanguageSwitcher } from './LanguageSwitcher'
import { getTranslations, getDirection, type Locale } from '@/lib/translations'

interface NavbarProps {
  locale: Locale
}

export function Navbar({ locale }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path || pathname === `/${locale}${path}`
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      dir={dir}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={locale === 'ar' ? '/ar' : '/en'}>
              <h1 className="text-xl font-bold text-gradient">
                {locale === 'ar' ? 'سنتر فرحات' : 'Farhat Center'}
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={locale === 'ar' ? '/ar' : '/en'}
              className={`transition-colors duration-200 ${
                isActive('') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {locale === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <Link
              href={locale === 'ar' ? '/ar/offers' : '/en/offers'}
              className={`transition-colors duration-200 ${
                isActive('/offers') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {locale === 'ar' ? 'العروض' : 'Offers'}
            </Link>
            <Link
              href={locale === 'ar' ? '/ar/about' : '/en/about'}
              className={`transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {t.nav.about}
            </Link>
            <Link
              href={locale === 'ar' ? '/ar/contact' : '/en/contact'}
              className={`transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                href={locale === 'ar' ? '/ar' : '/en'}
                className={`text-left transition-colors duration-200 ${
                  isActive('') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {locale === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
              <Link
                href={locale === 'ar' ? '/ar/offers' : '/en/offers'}
                className={`text-left transition-colors duration-200 ${
                  isActive('/offers') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {locale === 'ar' ? 'العروض' : 'Offers'}
              </Link>
              <Link
                href={locale === 'ar' ? '/ar/about' : '/en/about'}
                className={`text-left transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href={locale === 'ar' ? '/ar/contact' : '/en/contact'}
                className={`text-left transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 