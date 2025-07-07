import { motion } from 'framer-motion'
import Image from 'next/image'
import { getTranslations, type Locale } from '@/lib/translations'
import { usePathname } from 'next/navigation'
import { useProductModal } from '@/hooks/use-product-modal'

export function FeaturedProducts() {
  const pathname = usePathname()
  const locale: Locale = pathname.startsWith('/ar') ? 'ar' : 'en'
  const t = getTranslations(locale)
  const { onOpen } = useProductModal()
  const sectionTitle = t.offers?.featured?.title || (locale === 'ar' ? 'منتجات مميزة' : 'Featured Products')

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">{sectionTitle}</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-[600px] md:min-w-0">
            {t.products?.map((product: any, idx: number) => (
              <motion.div
                key={product.id}
                className="relative min-w-[220px] max-w-[220px] bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg flex-shrink-0 group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => onOpen(product)}
              >
                <div className="relative h-40 w-full rounded-t-xl overflow-hidden">
                  <Image src={product.image} alt={product.name} fill quality={75} className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 text-center">
                  <span className="font-semibold text-lg text-gray-900 dark:text-white block truncate">{product.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 