'use client'

import Link from 'next/link'
import { getTranslations, getDirection, type Locale } from '@/lib/translations'
import { 
  MapPin, 
  Phone, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageCircle 
} from 'lucide-react'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  return (
    <footer className="bg-gray-800 text-white" dir={dir}>
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Store Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-primary-400 mb-3">
                {locale === 'ar' ? 'سنتر فرحات للتوفير' : 'Farhat Savings Center'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {locale === 'ar' 
                  ? 'وجهتك الأولى للتوفير في الزاهرة! نقدم تشكيلة واسعة من المنتجات عالية الجودة بأسعار مميزة.'
                  : 'Your first destination for savings in Al-Zahira! We offer a wide range of high-quality products at competitive prices.'
                }
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-400 mb-4">
              {locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={locale === 'ar' ? '/ar' : '/en'} 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  {locale === 'ar' ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li>
                <Link 
                  href={locale === 'ar' ? '/ar/offers' : '/en/offers'} 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  {locale === 'ar' ? 'العروض' : 'Offers'}
                </Link>
              </li>
              <li>
                <Link 
                  href={locale === 'ar' ? '/ar/about' : '/en/about'} 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                >
                  {locale === 'ar' ? 'من نحن' : 'About Us'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-400 mb-4">
              {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    {locale === 'ar' ? 'الزاهرة، دمشق، سوريا' : 'Al-Zahira, Damascus, Syria'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:+963-11-1234567" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  +963-945-712-929
                </a>
              </div>
              
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    {locale === 'ar' ?'مفتوح يوميا من 10:00 صباحا - 11:00 مساءا عدا الجمعة 4:00 عصرا - 11:00 مساءا ' : 'Open Daily: 7:00 AM - 10:00 PM'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>
                {locale === 'ar' 
                  ? '© 2024 سنتر فرحات للتوفير. جميع الحقوق محفوظة.'
                  : '© 2024 Farhat Savings Center. All rights reserved.'
                }
              </p>
              <div className="mt-2">
                <a
                  href="https://react-portfolio-rosy-eta.vercel.app/#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-accent transition-colors duration-200"
                >
                  Developed by: Eng. Rateb
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a
                href="https://wa.me/963945712929"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-200 p-2 rounded-full hover:bg-gray-700"
                aria-label={locale === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/share/1CADmnTnuq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-200 p-2 rounded-full hover:bg-gray-700"
                aria-label={locale === 'ar' ? 'تابعنا على فيسبوك' : 'Follow us on Facebook'}
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/market_farhat1?igsh=ZHpzY254NTFyNDUx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-200 p-2 rounded-full hover:bg-gray-700"
                aria-label={locale === 'ar' ? 'تابعنا على إنستغرام' : 'Follow us on Instagram'}
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 