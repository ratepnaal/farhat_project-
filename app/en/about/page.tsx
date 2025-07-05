'use client'

import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { getTranslations, getDirection, type Locale } from '@/lib/translations'
import { 
  Heart, 
  Target, 
  Award, 
  Users,
  ShoppingCart,
  Truck,
  Clock,
  Star
} from 'lucide-react'

export default function AboutPage() {
  const locale: Locale = 'en'
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  const values = [
    {
      icon: Heart,
      title: locale === 'ar' ? 'الجودة' : 'Quality',
      description: locale === 'ar'
        ? 'نلتزم بتقديم أفضل المنتجات والخدمات لعملائنا'
        : 'We are committed to providing the best products and services to our customers'
    },
    {
      icon: Target,
      title: locale === 'ar' ? 'الموثوقية' : 'Reliability',
      description: locale === 'ar'
        ? 'عملاؤنا يثقون بنا لتلبية احتياجاتهم اليومية'
        : 'Our customers trust us to meet their daily needs'
    },
    {
      icon: Award,
      title: locale === 'ar' ? 'التميز' : 'Excellence',
      description: locale === 'ar'
        ? 'نسعى دائماً للتميز في كل ما نقوم به'
        : 'We always strive for excellence in everything we do'
    }
  ]

  const stats = [
    {
      number: '15+',
      label: locale === 'ar' ? 'سنوات من الخبرة' : 'Years of Experience',
      icon: Clock
    },
    {
      number: '10,000+',
      label: locale === 'ar' ? 'عميل راضي' : 'Happy Customers',
      icon: Users
    },
    {
      number: '500+',
      label: locale === 'ar' ? 'منتج متنوع' : 'Diverse Products',
      icon: ShoppingCart
    },
    {
      number: '24/7',
      label: locale === 'ar' ? 'خدمة عملاء' : 'Customer Service',
      icon: Star
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
              {locale === 'ar' ? 'من نحن' : 'About Us'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {locale === 'ar' 
                ? 'قصتنا في خدمة مجتمع الزاهرة منذ أكثر من 15 عاماً'
                : 'Our story in serving the Al-Zahira community for over 15 years'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                {locale === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  {locale === 'ar'
                    ? 'بدأت رحلتنا في عام 2008 في قلب حي الزاهرة بدمشق، حيث بدأنا كمتجر صغير للبقالة مع رؤية واضحة لتقديم أفضل المنتجات والخدمات لمجتمعنا المحلي.'
                    : 'Our journey began in 2008 in the heart of Al-Zahira neighborhood in Damascus, where we started as a small grocery store with a clear vision to provide the best products and services to our local community.'
                  }
                </p>
                <p>
                  {locale === 'ar'
                    ? 'على مر السنين، تطورنا من متجر بقالة بسيط إلى مركز شامل للتوفير يقدم مجموعة واسعة من المنتجات والخدمات، بما في ذلك المواد الغذائية والمنظفات والمخبوزات وخدمات دفع الفواتير.'
                    : 'Over the years, we have evolved from a simple grocery store to a comprehensive savings center offering a wide range of products and services, including groceries, detergents, bakery items, and bill payment services.'
                  }
                </p>
                <p>
                  {locale === 'ar'
                    ? 'نفخر بكوننا جزءاً من مجتمع الزاهرة ونسعى دائماً لتطوير خدماتنا لتلبية احتياجات عملائنا المتزايدة.'
                    : 'We are proud to be part of the Al-Zahira community and always strive to develop our services to meet our customers\' growing needs.'
                  }
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Store interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {locale === 'ar' ? 'مهمتنا' : 'Our Mission'}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {locale === 'ar'
                  ? 'تقديم منتجات عالية الجودة وخدمات متميزة بأسعار تنافسية، مع التركيز على رضا العملاء وتطوير مجتمعنا المحلي.'
                  : 'To provide high-quality products and excellent services at competitive prices, with a focus on customer satisfaction and the development of our local community.'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {locale === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {locale === 'ar'
                  ? 'أن نكون الخيار الأول للتسوق في منطقة الزاهرة، معروفين بجودة منتجاتنا وخدمة عملائنا المتميزة.'
                  : 'To be the first choice for shopping in the Al-Zahira area, known for our product quality and excellent customer service.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {locale === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {locale === 'ar' 
                ? 'القيم التي تقود أعمالنا وعلاقاتنا مع العملاء'
                : 'The values that guide our business and customer relationships'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {locale === 'ar' ? 'إحصائياتنا' : 'Our Statistics'}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {locale === 'ar' ? 'انضم إلى عائلتنا' : 'Join Our Family'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {locale === 'ar'
                ? 'نرحب بك لزيارة متجرنا واكتشاف الفرق الذي نقدمه'
                : 'We welcome you to visit our store and discover the difference we make'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                {locale === 'ar' ? 'زيارة المتجر' : 'Visit Store'}
              </button>
              <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
                {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 