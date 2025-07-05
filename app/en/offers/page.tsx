'use client'

import { Navbar } from '@/components/Navbar'
import { getTranslations, getDirection, type Locale } from '@/lib/translations'
import { 
  ShoppingCart, 
  Percent, 
  Clock, 
  Star,
  Calendar,
  Tag
} from 'lucide-react'

export default function OffersPage() {
  const locale: Locale = 'en'
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  const offers = [
    {
      id: 1,
      title: locale === 'ar' ? 'خصم 20% على جميع المنظفات' : '20% Off All Detergents',
      description: locale === 'ar' 
        ? 'خصم خاص على جميع أنواع المنظفات والمنظفات السائلة'
        : 'Special discount on all types of detergents and liquid cleaners',
      discount: '20%',
      validUntil: locale === 'ar' ? 'ينتهي في 31 ديسمبر' : 'Valid until Dec 31',
      category: locale === 'ar' ? 'منظفات' : 'Detergents',
      icon: ShoppingCart
    },
    {
      id: 2,
      title: locale === 'ar' ? 'شراء 2 واحصل على 1 مجاناً' : 'Buy 2 Get 1 Free',
      description: locale === 'ar'
        ? 'على جميع منتجات المخبز الطازجة'
        : 'On all fresh bakery products',
      discount: '33%',
      validUntil: locale === 'ar' ? 'ينتهي في 15 يناير' : 'Valid until Jan 15',
      category: locale === 'ar' ? 'مخبز' : 'Bakery',
      icon: Star
    },
    {
      id: 3,
      title: locale === 'ar' ? 'خصم 15% على المواد الغذائية' : '15% Off Groceries',
      description: locale === 'ar'
        ? 'خصم على جميع المواد الغذائية الأساسية'
        : 'Discount on all essential grocery items',
      discount: '15%',
      validUntil: locale === 'ar' ? 'ينتهي في 20 يناير' : 'Valid until Jan 20',
      category: locale === 'ar' ? 'مواد غذائية' : 'Groceries',
      icon: Percent
    },
    {
      id: 4,
      title: locale === 'ar' ? 'توصيل مجاني للطلبات الكبيرة' : 'Free Delivery on Large Orders',
      description: locale === 'ar'
        ? 'توصيل مجاني للطلبات التي تزيد عن 50,000 ليرة'
        : 'Free delivery for orders over 50,000 SYP',
      discount: '100%',
      validUntil: locale === 'ar' ? 'مستمر' : 'Ongoing',
      category: locale === 'ar' ? 'توصيل' : 'Delivery',
      icon: ShoppingCart
    }
  ]

  return (
    <div className="min-h-screen" dir={dir}>
      <Navbar locale={locale} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {locale === 'ar' ? 'العروض الأسبوعية' : 'Weekly Offers'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {locale === 'ar' 
                ? 'اكتشف أفضل العروض والتخفيضات الحصرية'
                : 'Discover the best exclusive offers and discounts'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Offer Header */}
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white text-center">
                  <div className="flex items-center justify-center mb-4">
                    <offer.icon className="w-8 h-8 mr-2" />
                    <span className="text-lg font-semibold">{offer.category}</span>
                  </div>
                  <div className="text-3xl font-bold mb-2">{offer.discount}</div>
                  <div className="text-sm opacity-90">{offer.validUntil}</div>
                </div>

                {/* Offer Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{offer.validUntil}</span>
                    </div>
                    <button className="btn-primary text-sm px-4 py-2">
                      {locale === 'ar' ? 'احصل على العرض' : 'Get Offer'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Announcement */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Tag className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {locale === 'ar' ? 'عروض خاصة للمشتركين' : 'Special Offers for Subscribers'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {locale === 'ar'
                  ? 'اشترك في قائمتنا البريدية واحصل على عروض حصرية وأولوية في الإشعارات'
                  : 'Subscribe to our newsletter and get exclusive offers and priority notifications'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={locale === 'ar' ? 'البريد الإلكتروني' : 'Email address'}
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
                <button className="btn-primary px-6 py-3">
                  {locale === 'ar' ? 'اشتراك' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 