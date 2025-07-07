'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LanguageSwitcher } from './LanguageSwitcher'
import logo from '../logo.png.png'
import { getTranslations, getDirection, type Locale } from '@/lib/translations'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Cleanup function to ensure the class is removed if the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

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
          <Link href="/">
            <Image
              src={logo}
              alt="Farhat Savings Center Logo"
              width={140}
              height={45}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Link
              href={locale === 'ar' ? '/ar' : '/en'}
              className={`transition-colors duration-200 me-4 ${
                isActive('') 
                  ? 'text-primary-600 dark:text-primary-400 underline underline-offset-4' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {t.nav.home}
            </Link>
            <Link
              href={locale === 'ar' ? '/ar/offers' : '/en/offers'}
              className={`transition-colors duration-200 me-4 ${
                isActive('/offers') 
                  ? 'text-primary-600 dark:text-primary-400 underline underline-offset-4' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {t.nav.offers}
            </Link>
            <Link
              href={locale === 'ar' ? '/ar/about' : '/en/about'}
              className={`transition-colors duration-200 me-4 ${
                isActive('/about') 
                  ? 'text-primary-600 dark:text-primary-400 underline underline-offset-4' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {t.nav.about}
            </Link>
            <Link
              href={locale === 'ar' ? '/ar/contact' : '/en/contact'}
              className={`transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-primary-600 dark:text-primary-400 underline underline-offset-4' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-x-3">
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

        {/* Full-Screen Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col items-center justify-center md:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Navigation Links */}
              <div className="flex flex-col items-center space-y-8">
                <Link
                  href={locale === 'ar' ? '/ar' : '/en'}
                  className={`text-3xl font-semibold transition-colors duration-200 ${
                    isActive('') 
                      ? 'text-primary-600 dark:text-primary-400 underline underline-offset-4' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.home}
                </Link>
                <Link
                  href={locale === 'ar' ? '/ar/offers' : '/en/offers'}
                  className={`text-3xl font-semibold transition-colors duration-200 ${
                    isActive('/offers') 
                      ? 'text-primary-600 dark:text-primary-400 underline underline-offset-4' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.offers}
                </Link>
                <Link
                  href={locale === 'ar' ? '/ar/about' : '/en/about'}
                  className={`text-3xl font-semibold transition-colors duration-200 ${
                    isActive('/about') 
                      ? 'text-primary-600 dark:text-primary-400 underline underline-offset-4' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.about}
                </Link>
                <Link
                  href={locale === 'ar' ? '/ar/contact' : '/en/contact'}
                  className={`text-3xl font-semibold transition-colors duration-200 ${
                    isActive('/contact') 
                      ? 'text-primary-600 dark:text-primary-400 underline underline-offset-4' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.contact}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 