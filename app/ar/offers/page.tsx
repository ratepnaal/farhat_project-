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
  const locale: Locale = 'ar'
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  const offers = [
    {
      id: 1,
      title: 'خصم 20% على جميع المنظفات',
      description: 'خصم خاص على جميع أنواع المنظفات والمنظفات السائلة',
      discount: '20%',
      validUntil: 'ينتهي في 31 ديسمبر',
      category: 'منظفات',
      icon: ShoppingCart
    },
    {
      id: 2,
      title: 'شراء 2 واحصل على 1 مجاناً',
      description: 'على جميع منتجات المخبز الطازجة',
      discount: '33%',
      validUntil: 'ينتهي في 15 يناير',
      category: 'مخبز',
      icon: Star
    },
    {
      id: 3,
      title: 'خصم 15% على المواد الغذائية',
      description: 'خصم على جميع المواد الغذائية الأساسية',
      discount: '15%',
      validUntil: 'ينتهي في 20 يناير',
      category: 'مواد غذائية',
      icon: Percent
    },
    {
      id: 4,
      title: 'توصيل مجاني للطلبات الكبيرة',
      description: 'توصيل مجاني للطلبات التي تزيد عن 50,000 ليرة',
      discount: '100%',
      validUntil: 'مستمر',
      category: 'توصيل',
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic">
              العروض الأسبوعية
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-arabic">
              اكتشف أفضل العروض والتخفيضات الحصرية
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
                    <offer.icon className="w-8 h-8 ml-2" />
                    <span className="text-lg font-semibold font-arabic">{offer.category}</span>
                  </div>
                  <div className="text-3xl font-bold mb-2">{offer.discount}</div>
                  <div className="text-sm opacity-90 font-arabic">{offer.validUntil}</div>
                </div>

                {/* Offer Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white font-arabic">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-arabic">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 ml-1" />
                      <span className="font-arabic">{offer.validUntil}</span>
                    </div>
                    <button className="btn-primary text-sm px-4 py-2 font-arabic">
                      احصل على العرض
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-arabic">
                عروض خاصة للمشتركين
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-arabic">
                اشترك في قائمتنا البريدية واحصل على عروض حصرية وأولوية في الإشعارات
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white font-arabic"
                />
                <button className="btn-primary px-6 py-3 font-arabic">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 