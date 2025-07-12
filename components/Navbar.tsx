'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LanguageSwitcher } from './LanguageSwitcher'
import logo from '../logo.png.png'
import { getTranslations, getDirection, type Locale } from '@/lib/translations'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

interface NavbarProps {
  locale: Locale
}

export function Navbar({ locale }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  const isActive = (path: string) => {
    return pathname === path || pathname === `/${locale}${path}`
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-sm shadow-md"
        dir={dir}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Farhat Savings Center Logo"
                width={140}
                height={45}
                priority
                className={dir === 'rtl' ? 'ms-4' : 'me-4'}
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
              <a
                href="https://beeorder.com/sy/farhat-center"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2"
              >
                {locale === 'ar' ? 'اطلب عبر Bee Order' : 'Order via Bee Order'}
              </a>
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
        </div>
      </nav>
      {isMenuOpen && <MobileMenuOverlay closeMenu={() => setIsMenuOpen(false)} locale={locale} t={t} isActive={isActive} />}
    </>
  )
}

function MobileMenuOverlay({ closeMenu, locale, t, isActive }: { closeMenu: () => void, locale: Locale, t: any, isActive: (path: string) => boolean }) {
  useLockBodyScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white dark:bg-brand-dark flex flex-col items-center justify-center"
    >
      {/* Close Button */}
      <button
        onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
        >
          {t.nav.contact}
        </Link>
        <a
          href="https://beeorder.com/sy/farhat-center"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 border border-primary-600 dark:border-primary-400 rounded-lg text-primary-600 dark:text-primary-400 bg-transparent hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors duration-200 text-xl font-medium"
        >
          {locale === 'ar' ? 'اطلب عبر Bee Order' : 'Order via Bee Order'}
        </a>
      </div>
    </motion.div>
  );
} 