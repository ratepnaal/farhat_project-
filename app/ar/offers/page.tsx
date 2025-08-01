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
import Image from 'next/image'

export default function OffersPage() {
  const locale: Locale = 'ar'
  const t = getTranslations(locale)
  const { onOpen } = useProductModal()
  const products = t.products

  const handleProductClick = (product: any) => {
    const modalProduct = {
      name: product.name,
      image: product.image,
      altText: product.name,
      description: `مميز من مركز فرحات للتوفير. متوفر الآن.`,
      old_price: product.old_price,
      new_price: product.new_price,
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
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Discount Badge */}
                    {product?.discount && (
                      <div className="absolute top-3 left-3">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          -{product?.discount}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {product.new_price}
                      </span>
                      {product.old_price && (
                      <span className="text-lg text-gray-400 line-through">
                          {product.old_price}
                      </span>
                      )}
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