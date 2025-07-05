'use client'

import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { getTranslations, getDirection, type Locale } from '@/lib/translations'
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
  Instagram
} from 'lucide-react'

export default function ArabicPage() {
  const locale: Locale = 'ar'
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  const services = [
    { icon: ShoppingCart, title: t.services.items[0].title, description: t.services.items[0].description },
    { icon: Droplets, title: t.services.items[1].title, description: t.services.items[1].description },
    { icon: Wheat, title: t.services.items[2].title, description: t.services.items[2].description },
    { icon: CreditCard, title: t.services.items[3].title, description: t.services.items[3].description },
    { icon: Package, title: t.services.items[4].title, description: t.services.items[4].description },
    { icon: Truck, title: t.services.items[5].title, description: t.services.items[5].description },
    { icon: Truck, title: t.services.items[6].title, description: t.services.items[6].description },
  ]

  return (
    <div className="min-h-screen" dir={dir}>
      <Navbar locale={locale} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Modern grocery store interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-arabic">
            {t.hero.tagline}
          </p>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4 font-arabic"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient font-arabic">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-arabic">
              {t.about.content}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-arabic">
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
                  <service.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center font-arabic">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center font-arabic">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-arabic">
                {t.contact.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 font-arabic">العنوان</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-arabic">{t.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 font-arabic">الهاتف</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 font-arabic">ساعات العمل</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-arabic">{t.contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 font-arabic">تابعنا</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/963111234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-arabic">{t.contact.social.whatsapp}</span>
                  </a>
                  
                  <a
                    href="https://facebook.com/farhatsavingscenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Facebook className="w-6 h-6" />
                    <span className="font-arabic">{t.contact.social.facebook}</span>
                  </a>
                  
                  <a
                    href="https://instagram.com/farhatsavingscenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                    <span className="font-arabic">{t.contact.social.instagram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom text-center">
          <p className="mb-2 font-arabic">{t.footer.copyright}</p>
          <p className="text-gray-400 text-sm font-arabic">{t.footer.poweredBy}</p>
        </div>
      </footer>
    </div>
  )
} 