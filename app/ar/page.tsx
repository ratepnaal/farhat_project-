'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '@/components/PageWrapper'
import { getTranslations, type Locale } from '@/lib/translations'
import { 
  ShoppingCart, 
  Droplets, 
  Wheat, 
  CreditCard, 
  Package, 
  Truck, 
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  ArrowLeft
} from 'lucide-react'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { motion } from 'framer-motion'

export default function ArabicPage() {
  const locale: Locale = 'ar'
  const t = getTranslations(locale)

  const services = [
    { icon: ShoppingCart, title: t.services.items[0].title, description: t.services.items[0].description },
    { icon: Droplets, title: t.services.items[1].title, description: t.services.items[1].description },
    { icon: Wheat, title: t.services.items[2].title, description: t.services.items[2].description },
    { icon: CreditCard, title: t.services.items[3].title, description: t.services.items[3].description },
    { icon: Package, title: t.services.items[4].title, description: t.services.items[4].description },
    { icon: Truck, title: t.services.items[5].title, description: t.services.items[5].description },
    { icon: Truck, title: t.services.items[6].title, description: t.services.items[6].description },
  ]

  const weeklyOffers = [
    {
      id: 1,
      name: "زيت زيتون مميز",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUXiAMYaNdPXUfh5TxRDAU8ZkxT-Odh4T2w&s",
      old_price: 85000,
      new_price: 68000,
      discount: "20%"
    },
    {
      id: 2,
      name: "عبوة معكرونة عضوية",
      image_url: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      old_price: 45000,
      new_price: 36000,
      discount: "20%"
    },
    {
      id: 3,
      name: "منظف مميز",
      image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      old_price: 65000,
      new_price: 52000,
      discount: "20%"
    },
    {
      id: 4,
      name: "حزمة خبز طازج",
      image_url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      old_price: 35000,
      new_price: 28000,
      discount: "20%"
    }
  ]

  return (
    <PageWrapper locale={locale}>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern grocery store interior with shelves of products"
            fill
            className="object-cover"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t.hero.tagline}
          </p>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      <FeaturedProducts />

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.content}
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Offers Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {t.weeklyOffers.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t.weeklyOffers.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {weeklyOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={offer.image_url}
                    alt={offer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    quality={75}
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    {offer.discount}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {offer.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 dark:text-gray-400 line-through text-sm">
                        {offer.old_price.toLocaleString('ar-EG')} ل.س
                      </span>
                      <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                        {offer.new_price.toLocaleString('ar-EG')} ل.س
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/963945712929?text=مرحباً، أرغب بالاستفسار عن عرض: ${encodeURIComponent(offer.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 btn-primary text-sm py-2 inline-block text-center"
                  >
                    اطلب العرض الآن
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Offers Button */}
          <div className="text-center">
            <Link
              href="/ar/offers"
              className="inline-flex items-center btn-secondary bg-primary-600 hover:bg-primary-700 text-white border-primary-600"
            >
              <ArrowLeft className="w-5 h-5 ml-2" />
              {t.weeklyOffers.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {t.services.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-lg mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                {t.contact.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-x-3">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">العنوان</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-3">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">الهاتف</h3>
                    <p className="text-gray-600 dark:text-gray-400">+963945712929</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-3">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">ساعات العمل</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t.contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">تابعنا</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/963111234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-x-3 p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>{t.contact.social.whatsapp}</span>
                  </a>
                  
                  <a
                    href="https://facebook.com/farhatsavingscenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-x-3 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Facebook className="w-6 h-6" />
                    <span>{t.contact.social.facebook}</span>
                  </a>
                  
                  <a
                    href="https://instagram.com/farhatsavingscenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-x-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                    <span>{t.contact.social.instagram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
} 