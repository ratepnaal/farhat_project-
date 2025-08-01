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
  Clock,
  Star,
  ShieldCheck,
  Coins,
  HeartHandshake
} from 'lucide-react'

export default function AboutArPage() {
  const locale: Locale = 'ar'
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  const values = [
    {
      icon: Heart,
      title: t.about.values.quality.title,
      description: t.about.values.quality.description
    },
    {
      icon: Target,
      title: t.about.values.reliability.title,
      description: t.about.values.reliability.description
    },
    {
      icon: Award,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description
    }
  ]


  const departments = [
    { name: t.about.departments.canned, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', alt: t.about.departments.canned },
    { name: t.about.departments.detergents, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80', alt: t.about.departments.detergents },
    { name: t.about.departments.dairy, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', alt: t.about.departments.dairy },
    { name: t.about.departments.bakery, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', alt: t.about.departments.bakery },
    { name: t.about.departments.beverages, img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', alt: t.about.departments.beverages },
    { name: t.about.departments.snacks, img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80', alt: t.about.departments.snacks }
  ]

  return (
    <div className="min-h-screen" dir={dir}>
      <Navbar locale={locale} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.about.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t.about.hero.subtitle}
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
                {t.about.story.title}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p>{t.about.story.p1}</p>
                <p>{t.about.story.p2}</p>
                <p>{t.about.story.p3}</p>
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
                {t.about.mission.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t.about.mission.description}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t.about.vision.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t.about.vision.description}
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
              {t.about.values.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t.about.values.subtitle}
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


      {/* Our Departments Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient text-center">{t.about.departments.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden shadow-lg group h-56">
                <Image src={dept.img} alt={dept.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xl font-bold drop-shadow-lg">{dept.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.chooseUs.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShieldCheck className="mx-auto w-14 h-14 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.chooseUs.quality.title}</h3>
              <p>{t.chooseUs.quality.description}</p>
            </div>
            <div className="text-center">
              <Coins className="mx-auto w-14 h-14 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.chooseUs.savings.title}</h3>
              <p>{t.chooseUs.savings.description}</p>
            </div>
            <div className="text-center">
              <HeartHandshake className="mx-auto w-14 h-14 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.chooseUs.service.title}</h3>
              <p>{t.chooseUs.service.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}