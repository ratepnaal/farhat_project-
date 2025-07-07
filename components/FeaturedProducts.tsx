import { motion } from 'framer-motion'
import Image from 'next/image'
import { getTranslations, type Locale } from '@/lib/translations'
import { usePathname } from 'next/navigation'
import { useProductModal } from '@/hooks/use-product-modal'

const products = [
  { key: 0, img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', altEn: 'Premium Syrian olive oil in glass bottle', altAr: 'زيت زيتون سوري مميز في زجاجة' },
  { key: 1, img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=400&q=80', altEn: 'Black Forest Honey jar', altAr: 'عسل الغابة السوداء في برطمان' },
  { key: 2, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', altEn: 'Fresh pita bread from bakery', altAr: 'خبز صاج طازج من المخبز' },
  { key: 3, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', altEn: 'Organic lentils and legumes', altAr: 'عدس عضوي وبقوليات' },
  { key: 4, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80', altEn: 'Fresh ayran yogurt drink', altAr: 'شراب عيران طازج' }
]

export function FeaturedProducts() {
  const pathname = usePathname()
  const locale: Locale = pathname.startsWith('/ar') ? 'ar' : 'en'
  const t = getTranslations(locale)
  const { onOpen } = useProductModal()
  let names: string[] = [];
  let sectionTitle = 'Featured Products';
  if (locale === 'en') {
    names = [
      'Syrian Olive Oil',
      'Fresh Pita Bread',
      'Premium Honey',
      'Organic Lentils',
      'Ayran Yogurt Drink'
    ];
    sectionTitle = t.offers?.featured?.title || 'Featured Products';
  } else if (locale === 'ar') {
    names = [
      'زيت زيتون سوري',
      'خبز صاج طازج',
      'عسل مميز',
      'عدس عضوي',
      'شراب عيران'
    ];
    sectionTitle = t.offers?.featured?.title || 'منتجات مميزة';
  }

  const handleProductClick = (index: number) => {
    const product = {
      name: names[index] || '',
      image: products[index].img,
      altText: locale === 'ar' ? products[index].altAr : products[index].altEn,
      description: `High-quality ${names[index]?.toLowerCase() || 'product'} from Farhat Savings Center. Perfect for your daily needs.`,
      new_price: 'Contact for price',
    };
    onOpen(product);
  };

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">{sectionTitle}</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-[600px] md:min-w-0">
            {products.map((product, idx) => (
              <motion.div
                key={product.key}
                className="relative min-w-[220px] max-w-[220px] bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg flex-shrink-0 group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleProductClick(idx)}
              >
                <div className="relative h-40 w-full rounded-t-xl overflow-hidden">
                  <Image src={product.img} alt={locale === 'ar' ? products[idx].altAr : products[idx].altEn} fill quality={75} className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 text-center">
                  <span className="font-semibold text-lg text-gray-900 dark:text-white block truncate">{names[idx]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 