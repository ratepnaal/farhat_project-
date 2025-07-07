'use client'

import { Navbar } from '@/components/Navbar'
import { getTranslations, getDirection, type Locale } from '@/lib/translations'
import Link from 'next/link'

export default function AboutArPage() {
  const locale: Locale = 'ar'
  const t = getTranslations(locale)
  const dir = getDirection(locale)

  return (
    <div dir={dir}>
      <Navbar locale={locale} />
      <main className="container-custom py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">{t.about.title}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{t.about.content}</p>
        <p className="text-gray-500">صفحة من نحن (تجريبية)</p>
      </main>
      {/* أقسامنا */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient text-center">أقسامنا</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'المعلبات والبقوليات', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', alt: 'قسم المعلبات والبقوليات' },
              { name: 'المنظفات ومستلزمات المنزل', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80', alt: 'المنظفات ومستلزمات التنظيف المنزلية' },
              { name: 'مشتقات الحليب والألبان', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', alt: 'مشتقات الحليب والأجبان الطازجة' },
              { name: 'المخبوزات', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', alt: 'المخبوزات الطازجة والخبز' },
              { name: 'المشروبات', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', alt: 'مشروبات ومياه غازية متنوعة' },
              { name: 'المسليات', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80', alt: 'مسليات وأطعمة معبأة' }
            ].map((dept, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden shadow-lg group h-56">
                <img src={dept.img} alt={dept.alt} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xl font-bold drop-shadow-lg">{dept.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">لماذا تختارنا؟</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">نرحب بك لزيارة متجرنا واكتشاف الفرق الذي نقدمه</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps/place/Al-Zahira,+Damascus,+Syria/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-center"
              >
                زيارة المتجر
              </a>
              <Link
                href="/ar/contact"
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600 text-center"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 