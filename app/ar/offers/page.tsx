'use client'

import { PageWrapper } from '@/components/PageWrapper'
import { getTranslations, type Locale } from '@/lib/translations'
import Link from 'next/link'
import { useProductModal } from '@/hooks/use-product-modal'
import { 
  ShoppingCart, 
  Percent, 
  Clock, 
  Star,
  Calendar,
  Tag,
  Package,
  Truck,
  Zap
} from 'lucide-react'
import offer1 from '@/public/offer-main/laktima-offer.png.jpg'
import offer2 from '@/public/offer-main/alghota-offer.png.jpg'
import offer3 from '@/public/offer-main/matiz-offer.png'
import offer4 from '@/public/offer-main/zena-offer.png.jpg'
import offer5 from '@/public/offer/alghota-sauce-offer.png.jpg'
import offer6 from '@/public/offer/selvito_offer.png'

export default function OffersPage() {
  const locale: Locale = 'ar'
  const t = getTranslations(locale)
  const { onOpen } = useProductModal()

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

  const products = [
    {
      id: 'olive-oil-premium',
       name:"عرض لاكتما قطعتين + قطعة ",
      oldPrice: 14999,
      newPrice: 11999,
      image:offer1,
      altText: 'زيت زيتون سوري مميز في زجاجة',
      category: 'زيوت',
      discount: '20%',
      isLimited: true 
    },
    {
      id: 'organic-honey',  
      name:"  اثنان دبس البندورة الغوطة + مخلل الثوم مجانا",
      oldPrice: 40999,
      newPrice: 32999,
      image:offer2,
      altText: 'عرض دب سالبندورة والمخلل مجانا',
      category: ' منتجات المطبخ ',
      discount: '20%',
      isLimited: true
    },
    {
      id: 'fresh-bread',
      name: "عرض 6 صابون ماتيز ",
      oldPrice: 19999,
      newPrice: 16499,
      image:offer3,
      altText:'عرض الصابون',
      category: 'منظفات',
      discount: '33%',
      isLimited: true
    },
    {
      id: 'dried-fruits-mix',
      name: "عرض 2 علبة مرتديلا زينة + هوت دوغ مجانا ",
      oldPrice: 28499,
      newPrice: 23499,
      image: offer4,
      altText: 'عرض المرتديلا',
      category: 'معلبات',
      discount: '20%',
      isLimited: false
    },
    {
      id: 'organic-tea',
      name:'عرض كتشب الغوطة مع صلصة الباربكيو مجانا ',
      oldPrice: 30999,
      newPrice: 14499,
     image: offer5,
    altText: 'عرض مع كتشب صوص باربكيو',
    category: 'صوصات',
      discount: '20%',
      isLimited: true
    },
    {
      id: 'spices-collection',
      name: 'عرض 6 قطع بسكوت سلفيتو للشاي ',
      oldPrice: 15499,
      newPrice: 8499,
      image: offer6,
      altText: 'عرض بسكوت الشاي',
      category: 'بسكوت',
      discount: '20%',
      isLimited: false
    }
  ]

  const handleProductClick = (product: any) => {
    const modalProduct = {
      name: product.name,
      image: product.image,
      altText: product.altText,
      description: `${product.category} مميز من مركز فرحات للتوفير. ${product.isLimited ? 'عرض محدود!' : 'متوفر الآن.'}`,
      old_price: product.oldPrice ? `${product.oldPrice} ل.س` : undefined,
      new_price: `${product.newPrice} ل.س`,
    };
    onOpen(modalProduct);
  };

  return (
    <PageWrapper locale={locale}>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.offers.title}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{t.offers.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
              <Truck className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.offers.delivery.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{t.offers.delivery.description}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
              <Package className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.offers.buy2get1.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{t.offers.buy2get1.description}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
              <Star className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.offers.discount15.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{t.offers.discount15.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Offers Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.offers.featured.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.offers.featured.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group block cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:scale-105">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Limited Time Badge */}
                    {product.isLimited && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                          {t.offers.limitedTime}
                        </div>
                      </div>
                    )}
                    
                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{product.discount}
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {product.category}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {product.newPrice.toLocaleString()} ل.س
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {product.oldPrice.toLocaleString()} ل.س
                      </span>
                    </div>
                    
                    {/* View Details Button */}
                    <div className="flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      <span>{t.offers.viewDetails}</span>
                      <Package className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    </div>
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
          <div className="max-w-2xl mx-auto text-center mb-12">
            <a
              href="https://chat.whatsapp.com/your-group-link"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-6 px-8 text-xl font-bold rounded-lg bg-green-500 hover:bg-green-600 text-white shadow-lg transition-colors duration-200 mb-8"
            >
              {t.offers.joinWhatsApp}
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
} 